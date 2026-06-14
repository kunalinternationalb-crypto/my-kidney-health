import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Kidney Health - Education for Nephrologists & Patients</title>
        <meta name="description" content="Comprehensive kidney health education platform with interactive anatomy, disease library, guidelines, and patient resources." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="My Kidney Health" />
        <meta property="og:description" content="Professional kidney health education for physicians and patients" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kidney-700 to-kidney-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">My Kidney Health</h1>
          <p className="text-lg sm:text-xl mb-4 opacity-95">
            Empowering Knowledge. Protecting Kidneys. Improving Lives.
          </p>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            A comprehensive, evidence-based platform for nephrologists, consulting physicians, and patients to understand kidney health, prevent disease, and access clinical resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/anatomy" className="bg-white text-kidney-700 px-8 py-3 rounded-lg font-semibold hover:bg-kidney-50 transition inline-block">
              Explore Anatomy
            </Link>
            <Link href="/diseases" className="bg-kidney-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-kidney-600 transition inline-block border border-white">
              Disease Library
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-kidney-900">Why Choose My Kidney Health?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-kidney-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Detection Focus */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-kidney-900 mb-6">Early Detection Saves Lives</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chronic Kidney Disease (CKD) affects over 37 million Americans, yet many don't know they have it. Early stages of CKD are often asymptomatic, making screening critical for at-risk populations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This platform emphasizes early detection through:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-kidney-600 font-bold mr-3">•</span>
                  <span><strong>Risk Assessment Tools:</strong> Identify your kidney disease risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kidney-600 font-bold mr-3">•</span>
                  <span><strong>Diagnostic Guidance:</strong> Understand eGFR, creatinine, and ACR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kidney-600 font-bold mr-3">•</span>
                  <span><strong>Prevention Strategies:</strong> Lifestyle changes that slow progression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kidney-600 font-bold mr-3">•</span>
                  <span><strong>Evidence-Based Guidelines:</strong> Latest KDIGO recommendations</span>
                </li>
              </ul>
              <Link href="/patient-education" className="mt-8 inline-block bg-kidney-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-kidney-800 transition">
                Assess Your Risk
              </Link>
            </div>
            <div className="bg-kidney-50 p-8 rounded-lg border-2 border-kidney-200">
              <h3 className="text-2xl font-bold text-kidney-900 mb-6">CKD Facts</h3>
              <div className="space-y-4">
                {facts.map((fact, idx) => (
                  <div key={idx} className="border-l-4 border-kidney-600 pl-4">
                    <p className="font-bold text-kidney-900">{fact.stat}</p>
                    <p className="text-gray-700 text-sm">{fact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kidney-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Navigate Your Kidney Health Journey</h2>
          <p className="text-lg mb-12 opacity-95">Whether you're a healthcare professional or patient, find the resources you need:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/anatomy" className="bg-white text-kidney-700 p-6 rounded-lg hover:bg-kidney-50 transition font-semibold">
              Interactive Anatomy
            </Link>
            <Link href="/diseases" className="bg-white text-kidney-700 p-6 rounded-lg hover:bg-kidney-50 transition font-semibold">
              Disease Library
            </Link>
            <Link href="/lifestyle" className="bg-white text-kidney-700 p-6 rounded-lg hover:bg-kidney-50 transition font-semibold">
              Prevention Guide
            </Link>
            <Link href="/guidelines" className="bg-white text-kidney-700 p-6 rounded-lg hover:bg-kidney-50 transition font-semibold">
              Professional Resources
            </Link>
            <Link href="/news" className="bg-white text-kidney-700 p-6 rounded-lg hover:bg-kidney-50 transition font-semibold">
              Latest News
            </Link>
            <Link href="/patient-education" className="bg-white text-kidney-700 p-6 rounded-lg hover:bg-kidney-50 transition font-semibold">
              Patient Education
            </Link>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-t-4 border-yellow-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-yellow-900 mb-3">⚠️ Medical Disclaimer</h3>
          <p className="text-gray-800 text-sm">
            This website provides educational information about kidney health and disease. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before making any health-related decisions. If you think you may have a medical emergency, call your doctor or emergency services immediately.
          </p>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: '🔬',
    title: 'Interactive Anatomy',
    description: 'Explore kidney structure with clickable nephron diagrams and detailed hotspots based on medical textbooks.'
  },
  {
    icon: '📚',
    title: 'Comprehensive Disease Library',
    description: 'Learn about CKD, AKI, glomerular disorders, PKD, lupus nephritis and more with pathophysiology and treatment.'
  },
  {
    icon: '💪',
    title: 'Lifestyle & Prevention',
    description: 'Evidence-based strategies for preventing kidney disease: diet, exercise, and lifestyle modifications.'
  },
  {
    icon: '📋',
    title: 'Clinical Guidelines',
    description: 'Access KDIGO 2024, ACC/AHA guidelines with calculators, case studies, and CME resources.'
  },
  {
    icon: '📰',
    title: 'Latest Research',
    description: 'Real-time RSS feed of nephrology research from top journals and professional societies.'
  },
  {
    icon: '🤝',
    title: 'Patient Resources',
    description: 'FAQs, risk assessments, symptom checkers, and links to patient support organizations.'
  }
];

const facts = [
  {
    stat: '37 Million',
    description: 'Americans have chronic kidney disease'
  },
  {
    stat: '1 in 3',
    description: 'American adults at risk for CKD'
  },
  {
    stat: '90%',
    description: 'Don\'t know they have early-stage CKD'
  },
  {
    stat: '#2 Cause',
    description: 'Of end-stage renal disease: diabetes'
  }
];
