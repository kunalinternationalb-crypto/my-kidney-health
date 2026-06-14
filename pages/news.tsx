import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      // For now, display sample news items
      // In production, integrate with actual RSS feed parser
      const sampleNews: NewsItem[] = [
        {
          title: 'KDIGO 2024 CKD Guidelines Released',
          description: 'The new comprehensive guidelines for CKD evaluation and management emphasize SGLT2 inhibitors and individualized BP targets.',
          link: 'https://kdigo.org/',
          pubDate: new Date().toISOString(),
          source: 'KDIGO'
        },
        {
          title: 'SGLT2 Inhibitors Show Cardiovascular Benefit in CKD',
          description: 'Latest trials demonstrate SGLT2 inhibitors reduce CKD progression and cardiovascular events across diabetes and non-diabetes populations.',
          link: 'https://www.jasn.org/',
          pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          source: 'JASN'
        },
        {
          title: 'GLP-1 Receptor Agonists Expand Beyond Diabetes',
          description: 'Recent studies show GLP-1 RAs provide renoprotective effects in CKD patients without diabetes.',
          link: 'https://www.ajkd.org/',
          pubDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
          source: 'AJKD'
        },
        {
          title: 'Early Detection Programs Improve CKD Outcomes',
          description: 'Community-based screening identifies CKD in early stages, enabling timely intervention.',
          link: 'https://www.kidney.org/',
          pubDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
          source: 'NKF'
        }
      ];
      setNewsItems(sampleNews);
    } catch (err) {
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>News & Updates - My Kidney Health</title>
        <meta name="description" content="Latest nephrology research, clinical updates, and breakthrough therapies in kidney disease." />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-kidney-900 mb-4">Latest Nephrology News & Updates</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Stay informed with the latest research, clinical guidelines, and therapeutic advances in kidney disease from leading sources.
            </p>
          </div>

          {/* News Items */}
          <div className="space-y-6 mb-12">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-700">Loading latest news...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <p className="text-red-800">{error}</p>
              </div>
            ) : newsItems.length > 0 ? (
              newsItems.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h2 className="text-xl font-bold text-kidney-900 flex-1">{item.title}</h2>
                    <span className="inline-block bg-kidney-100 text-kidney-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      {item.source}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{formatDate(item.pubDate)}</span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-kidney-600 hover:text-kidney-700 font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No news items available</p>
            )}
          </div>

          {/* Featured Sources */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-kidney-900 mb-6">Featured News Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://kdigo.org/" target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-kidney-200 rounded-lg hover:border-kidney-600 transition">
                <h3 className="font-bold text-kidney-900 mb-2">KDIGO</h3>
                <p className="text-gray-700 text-sm">Kidney Disease: Improving Global Outcomes - Official guidelines and announcements</p>
              </a>
              <a href="https://www.jasn.org/" target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-kidney-200 rounded-lg hover:border-kidney-600 transition">
                <h3 className="font-bold text-kidney-900 mb-2">JASN</h3>
                <p className="text-gray-700 text-sm">Journal of the American Society of Nephrology - Peer-reviewed research</p>
              </a>
              <a href="https://www.ajkd.org/" target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-kidney-200 rounded-lg hover:border-kidney-600 transition">
                <h3 className="font-bold text-kidney-900 mb-2">AJKD</h3>
                <p className="text-gray-700 text-sm">American Journal of Kidney Diseases - Clinical and research articles</p>
              </a>
              <a href="https://www.kidney.org/" target="_blank" rel="noopener noreferrer" className="p-4 border-2 border-kidney-200 rounded-lg hover:border-kidney-600 transition">
                <h3 className="font-bold text-kidney-900 mb-2">NKF</h3>
                <p className="text-gray-700 text-sm">National Kidney Foundation - Patient and professional resources</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
