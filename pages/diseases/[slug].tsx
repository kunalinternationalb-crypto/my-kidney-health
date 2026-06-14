import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { diseases } from '@/lib/diseases';
import Link from 'next/link';

export default function DiseasePage() {
  const router = useRouter();
  const { slug } = router.query;

  const disease = diseases.find((d) => d.slug === slug);

  if (!disease) {
    return (
      <div className="py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-kidney-900 mb-4">Disease not found</h1>
        <Link href="/diseases" className="text-kidney-600 hover:text-kidney-700">
          Back to Disease Library
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{disease.name} - My Kidney Health</title>
        <meta name="description" content={disease.summary} />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Link href="/diseases" className="text-kidney-600 hover:text-kidney-700 font-semibold mb-4 inline-block">
            ← Back to Disease Library
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">{disease.icon}</div>
              <div>
                <h1 className="text-4xl font-bold text-kidney-900 mb-2">{disease.name}</h1>
                <p className="text-lg text-gray-700 mb-4">{disease.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {disease.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-kidney-100 text-kidney-700 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Pathophysiology */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>🔬</span> Pathophysiology
              </h2>
              <p className="text-gray-700 leading-relaxed">{disease.pathophysiology}</p>
              <p className="text-sm text-kidney-700 font-semibold mt-4">{disease.pathophysiologyRef}</p>
            </section>

            {/* Signs & Symptoms */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>⚠️</span> Signs & Symptoms
              </h2>
              <ul className="space-y-3">
                {disease.signsSymptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-kidney-600 font-bold mt-1">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-6">
                <p className="text-gray-800 text-sm">
                  <strong>Note:</strong> Early-stage kidney disease is often asymptomatic. Symptoms typically appear once kidney function is significantly impaired.
                </p>
              </div>
            </section>

            {/* Risk Factors */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>⚡</span> Major Risk Factors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {disease.riskFactors.map((factor, idx) => (
                  <div key={idx} className="bg-kidney-50 p-4 rounded-lg border border-kidney-200">
                    <p className="text-gray-800 font-medium">{factor}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Diagnostic Tests */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>🧪</span> Diagnostic Tests & Investigations
              </h2>
              <ul className="space-y-3">
                {disease.diagnosticTests.map((test, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-kidney-600 font-bold mt-1">•</span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Treatment */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>💊</span> Evidence-Based Treatment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">{disease.treatment}</p>
              <p className="text-sm text-kidney-700 font-semibold mt-4">{disease.treatmentRef}</p>
            </section>

            {/* Key Points */}
            <section className="bg-kidney-50 border-l-4 border-kidney-600 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4">Key Takeaways</h2>
              <ul className="space-y-2">
                {disease.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="text-kidney-600 font-bold mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link href="/diseases" className="px-6 py-2 bg-kidney-600 text-white rounded-lg hover:bg-kidney-700 transition font-semibold">
              ← Back to Library
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
