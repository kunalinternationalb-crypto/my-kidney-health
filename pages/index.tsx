import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>My Kidney Health - Education for Nephrologists & Patients</title>
        <meta name="description" content="Interactive kidney health education platform with anatomy, diseases, calculators, and patient resources." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-kidney-600 to-kidney-400 z-50" style={{ width: `${scrollProgress}%` }} />

      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 gradient-kidney opacity-10" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <div className="text-6xl sm:text-7xl mb-6 animate-bounce-slow">🫘</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-kidney-900">
              My Kidney Health
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-kidney-700 font-semibold">
              Empowering Knowledge. Protecting Kidneys. Improving Lives.
            </p>
            <p className="text-lg sm:text-xl mb-12 opacity-90 max-w-2xl mx-auto text-gray-700">
              Interactive platform for nephrologists, physicians, and patients to understand kidney health, prevent disease, and access clinical resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
              <Link href="/anatomy" className="btn-primary">
                🔬 Explore Anatomy
              </Link>
              <Link href="/diseases" className="btn-secondary">
                📚 Disease Library
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-kidney-900">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-effect p-6 rounded-2xl text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-kidney-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
                <p className="text-sm text-gray-600 mt-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-kidney-900">Explore Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="card-hover bg-white p-8 rounded-xl shadow-md"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-kidney-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <Link href={feature.link} className="inline-block text-kidney-600 hover:text-kidney-700 font-semibold transition-colors">
                  Learn More →
                </Link>
                {hoveredCard === idx && (
                  <div className="mt-4 p-3 bg-kidney-50 rounded-lg text-sm text-kidney-700 animate-fade-in-up">
                    {feature.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-kidney-900">Why Choose My Kidney Health?</h2>
          
          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                  activeTab === idx
                    ? 'bg-kidney-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content with Animation */}
          <div className="bg-gradient-light p-8 rounded-2xl border-2 border-kidney-200 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 text-5xl text-center">{tabs[activeTab].icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-kidney-900 mb-4">{tabs[activeTab].title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{tabs[activeTab].content}</p>
                <Link href={tabs[activeTab].link} className="btn-primary inline-block">
                  {tabs[activeTab].cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CKD Facts with Progress Bars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-kidney-900">Critical Facts About CKD</h2>
          <div className="space-y-8">
            {ckdFacts.map((fact, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-kidney-900">{fact.title}</h3>
                  <span className="text-3xl font-bold text-kidney-600">{fact.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-kidney-600 to-kidney-400 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${fact.percentage}%` }}
                  />
                </div>
                <p className="text-gray-700 mt-3 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-kidney-900">Quick Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover bg-gradient-light p-8 rounded-2xl border-2 border-kidney-200">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-2xl font-bold text-kidney-900 mb-3">eGFR Calculator</h3>
              <p className="text-gray-700 mb-6">Estimate your kidney function using the latest CKD-EPI 2021 equation.</p>
              <Link href="/guidelines" className="btn-primary">
                Calculate Now
              </Link>
            </div>
            <div className="card-hover bg-gradient-light p-8 rounded-2xl border-2 border-kidney-200">
              <div className="text-4xl mb-4">⚕️</div>
              <h3 className="text-2xl font-bold text-kidney-900 mb-3">Risk Assessment</h3>
              <p className="text-gray-700 mb-6">Identify your personal kidney disease risk factors in minutes.</p>
              <Link href="/patient-education" className="btn-primary">
                Assess Risk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-kidney text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-lg mb-12 opacity-95">
            Start your kidney health journey today. Whether you're a healthcare professional or patient, find the resources you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/anatomy" className="px-8 py-3 bg-white text-kidney-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Explore Anatomy
            </Link>
            <Link href="/diseases" className="px-8 py-3 bg-kidney-500 text-white rounded-lg font-semibold hover:bg-kidney-400 transition-all duration-300 transform hover:scale-105 border border-white">
              View Diseases
            </Link>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-t-4 border-yellow-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-yellow-900 mb-3 flex items-center gap-2">
            <span>⚠️</span> Medical Disclaimer
          </h3>
          <p className="text-gray-800 text-sm leading-relaxed">
            This website provides educational information about kidney health and disease. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before making any health-related decisions. If you think you may have a medical emergency, call your doctor or emergency services immediately.
          </p>
        </div>
      </section>
    </>
  );
}

const stats = [
  { number: '37M', label: 'Americans', description: 'Have chronic kidney disease' },
  { number: '1 in 3', label: 'At Risk', description: 'For CKD in their lifetime' },
  { number: '90%', label: 'Unaware', description: 'Don\'t know they have early CKD' },
  { number: '#2 Cause', label: 'of ESRD', description: 'Diabetes mellitus' }
];

const features = [
  {
    icon: '🔬',
    title: 'Interactive Anatomy',
    description: 'Explore kidney structure with clickable nephron diagrams.',
    detail: 'Click on different parts to learn structure and function',
    link: '/anatomy'
  },
  {
    icon: '📚',
    title: 'Disease Library',
    description: 'Comprehensive coverage of major kidney conditions.',
    detail: 'CKD, AKI, Diabetes, Lupus, PKD, and more',
    link: '/diseases'
  },
  {
    icon: '💪',
    title: 'Lifestyle Guide',
    description: 'Evidence-based prevention strategies.',
    detail: 'Diet, exercise, and lifestyle modifications',
    link: '/lifestyle'
  },
  {
    icon: '📋',
    title: 'Clinical Tools',
    description: 'eGFR and ACR calculators for professionals.',
    detail: 'CKD-EPI 2021 equation and kidney function assessment',
    link: '/guidelines'
  },
  {
    icon: '📰',
    title: 'Latest News',
    description: 'Real-time updates from nephrology journals.',
    detail: 'KDIGO guidelines, research breakthroughs, and trials',
    link: '/news'
  },
  {
    icon: '🤝',
    title: 'Patient Support',
    description: 'FAQs and resources for patients.',
    detail: 'Risk assessments, symptoms, and support organizations',
    link: '/patient-education'
  }
];

const tabs = [
  {
    label: 'Evidence-Based',
    icon: '📖',
    title: 'Built on Clinical Standards',
    content: 'All content is based on KDIGO 2024 guidelines, Brenner & Rector\'s The Kidney, and peer-reviewed research. We ensure accuracy and relevance for healthcare professionals.',
    cta: 'View Guidelines',
    link: '/guidelines'
  },
  {
    label: 'Interactive',
    icon: '🎮',
    title: 'Engage & Learn',
    content: 'Our interactive tools including anatomy explorer, calculators, and risk assessments make kidney health education engaging and practical for all users.',
    cta: 'Explore Tools',
    link: '/anatomy'
  },
  {
    label: 'Comprehensive',
    icon: '🌐',
    title: 'Complete Coverage',
    content: 'From anatomy to pathophysiology, diagnosis to treatment, we cover the full spectrum of kidney health. Resources for both professionals and patients.',
    cta: 'Browse All Resources',
    link: '/diseases'
  },
  {
    label: 'Accessible',
    icon: '♿',
    title: 'For Everyone',
    content: 'Whether you\'re a nephrologist, GP, or patient, our content is tailored to different knowledge levels. Easy to understand, professionally rigorous.',
    cta: 'Get Started',
    link: '/patient-education'
  }
];

const ckdFacts = [
  {
    title: 'Americans with Chronic Kidney Disease',
    percentage: 37,
    description: '37 million Americans have CKD, but many don\'t know it because early stages are often asymptomatic.'
  },
  {
    title: 'Progress Without Early Detection',
    percentage: 90,
    description: '90% of people with early-stage CKD don\'t know they have it. Early detection through screening is critical.'
  },
  {
    title: 'CKD Attributed to Diabetes',
    percentage: 28,
    description: 'Diabetes is responsible for nearly 28% of all CKD cases. Tight glycemic control can prevent or slow progression.'
  },
  {
    title: 'CKD Progression Without Treatment',
    percentage: 50,
    description: 'Without proper management, 50% of CKD patients progress to ESRD within 10 years.'
  }
];
