import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { diseases } from '@/lib/diseases';

export default function DiseaseLibrary() {
  return (
    <>
      <Head>
        <title>Disease Library - My Kidney Health</title>
        <meta name="description" content="Comprehensive catalogue of kidney diseases with pathophysiology, symptoms, diagnostics, and evidence-based treatment." />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-kidney-900 mb-4">Disease Library</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Comprehensive catalogue of kidney diseases. For each condition, we provide pathophysiology, clinical presentation, risk factors, diagnostic approaches, and evidence-based treatment strategies based on KDIGO guidelines and leading nephrology textbooks.
            </p>
          </div>

          {/* Disease Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map((disease) => (
              <Link key={disease.slug} href={`/diseases/${disease.slug}`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer h-full">
                  <div className="text-4xl mb-4">{disease.icon}</div>
                  <h3 className="text-xl font-bold text-kidney-900 mb-2">{disease.name}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{disease.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {disease.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-block bg-kidney-100 text-kidney-700 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block text-kidney-600 font-semibold text-sm hover:text-kidney-700">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
