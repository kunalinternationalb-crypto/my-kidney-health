import React from 'react';
import Head from 'next/head';
import RiskAssessment from '@/components/RiskAssessment';

export default function PatientEducation() {
  return (
    <>
      <Head>
        <title>Patient Education - My Kidney Health</title>
        <meta name="description" content="Patient-friendly kidney health information, FAQs, symptom checkers, and support resources." />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-kidney-900 mb-4">Patient Education & Resources</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Understanding your kidney health is the first step toward prevention and management. Find answers to common questions, assess your risk, and connect with support.
            </p>
          </div>

          {/* Risk Assessment Tool */}
          <div className="mb-12">
            <RiskAssessment />
          </div>

          {/* FAQs */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-kidney-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-bold text-kidney-900 mb-3 flex items-start gap-3">
                    <span className="text-kidney-600 text-2xl flex-shrink-0">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex items-start gap-3">
                    <span className="text-kidney-600 text-2xl flex-shrink-0">A:</span>
                    <span>{faq.answer}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Symptom Checklist */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-kidney-900 mb-6">Kidney Disease Symptom Checklist</h2>
            <p className="text-gray-700 mb-6">
              Early kidney disease is often asymptomatic. However, if you experience any of the following, consult your doctor:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-kidney-50 rounded-lg">
                  <span className="text-kidney-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-800">{symptom}</span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-800 font-semibold mb-2">⚠️ When to Seek Immediate Care:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Sudden severe back or flank pain</li>
                <li>• Gross hematuria (blood in urine) with flank pain</li>
                <li>• Shortness of breath or chest pain</li>
                <li>• Severe hypertension (&gt;180/120 mmHg) with headache or vision changes</li>
                <li>• Altered mental status or severe weakness</li>
              </ul>
            </div>
          </div>

          {/* Support Organizations */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-kidney-900 mb-8">Kidney Disease Support Organizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {organizations.map((org, idx) => (
                <div key={idx} className="border-2 border-kidney-200 p-6 rounded-lg hover:border-kidney-600 transition">
                  <h3 className="text-xl font-bold text-kidney-900 mb-3">{org.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{org.description}</p>
                  <div className="space-y-2 text-sm mb-4">
                    {org.services.map((service, sidx) => (
                      <p key={sidx} className="text-gray-700 flex items-start gap-2">
                        <span className="text-kidney-600">•</span>
                        {service}
                      </p>
                    ))}
                  </div>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-kidney-600 hover:text-kidney-700 font-semibold text-sm"
                  >
                    Visit Website →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className="bg-kidney-50 border-l-4 border-kidney-600 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-kidney-900 mb-6">Downloadable Resources</h2>
            <p className="text-gray-700 mb-6">
              Print-friendly guides and patient handouts to help you manage your kidney health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-white px-6 py-3 rounded-lg font-semibold text-kidney-600 hover:bg-kidney-100 transition border border-kidney-600">
                📄 CKD Management Guide (Coming Soon)
              </button>
              <button className="bg-white px-6 py-3 rounded-lg font-semibold text-kidney-600 hover:bg-kidney-100 transition border border-kidney-600">
                📄 Low-Sodium Diet Tips (Coming Soon)
              </button>
              <button className="bg-white px-6 py-3 rounded-lg font-semibold text-kidney-600 hover:bg-kidney-100 transition border border-kidney-600">
                📄 Medication Guide (Coming Soon)
              </button>
              <button className="bg-white px-6 py-3 rounded-lg font-semibold text-kidney-600 hover:bg-kidney-100 transition border border-kidney-600">
                📄 Dialysis Basics (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const faqs = [
  {
    question: 'What are the early signs of kidney disease?',
    answer: 'Early kidney disease (Stages 1-2) is often asymptomatic. Signs that may appear in later stages include fatigue, swelling of the feet/ankles, shortness of breath, nausea, and loss of appetite. The best way to detect early kidney disease is through blood work (eGFR) and urine tests (ACR), especially if you have risk factors like diabetes, hypertension, or family history.'
  },
  {
    question: 'What does eGFR mean?',
    answer: 'eGFR (estimated Glomerular Filtration Rate) measures how well your kidneys filter waste. It ranges from 0-100+ mL/min/1.73m². Higher numbers mean better kidney function. eGFR <60 indicates CKD. Your eGFR depends on age, sex, race, and serum creatinine. Your doctor can calculate your eGFR from a simple blood test.'
  },
  {
    question: 'What is albuminuria and why does it matter?',
    answer: 'Albuminuria is the presence of protein (albumin) in the urine. Normally, healthy kidneys don\'t filter protein. Albuminuria signals kidney damage and increases risk of kidney disease progression and heart disease. It\'s measured as ACR (albumin-creatinine ratio). Early detection allows early treatment to slow progression.'
  },
  {
    question: 'Can kidney disease be prevented?',
    answer: 'Yes! You can prevent or delay kidney disease through: (1) controlling blood pressure (<120 mmHg), (2) managing diabetes tightly (HbA1c <7%), (3) reducing sodium intake, (4) maintaining healthy weight, (5) exercising regularly, (6) quitting smoking, (7) limiting alcohol, and (8) taking prescribed medications. The earlier you act, the better the outcomes.'
  },
  {
    question: 'What should I eat if I have kidney disease?',
    answer: 'Diet depends on your CKD stage. Generally: reduce sodium (<2,300 mg/day), moderate protein intake, limit processed foods, eat fresh fruits and vegetables, and stay hydrated. For advanced CKD, you may need to limit phosphorus, potassium, or fluids. Work with a renal dietitian for personalized guidance based on your lab results.'
  },
  {
    question: 'What medications help slow kidney disease?',
    answer: 'Key medications include: (1) ACE inhibitors or ARBs (reduce blood pressure and proteinuria), (2) SGLT2 inhibitors (slow CKD progression and reduce CV risk), (3) GLP-1 agonists (for diabetes + CKD), (4) Blood pressure medications, (5) Statins (cardiovascular protection). Always take medications as prescribed and discuss with your doctor.'
  },
  {
    question: 'When should I see a nephrologist?',
    answer: 'Consider seeing a nephrologist if: (1) eGFR <30 mL/min, (2) rapid decline in kidney function, (3) significant albuminuria, (4) hypertension difficult to control, (5) suspected glomerulonephritis, (6) family history of kidney disease, or (7) your primary care doctor refers you. Early specialist involvement improves outcomes.'
  },
  {
    question: 'What happens at end-stage renal disease?',
    answer: 'At Stage 5 CKD (eGFR <15), kidneys cannot filter enough waste. You need kidney replacement therapy: dialysis (hemodialysis or peritoneal dialysis) or kidney transplant. Your doctor will discuss options and help you prepare. Modern treatments allow many ESRD patients to live longer, better-quality lives.'
  }
];

const symptoms = [
  'Fatigue or weakness',
  'Swelling of feet, ankles, or hands',
  'Shortness of breath',
  'Nausea or vomiting',
  'Loss of appetite',
  'Difficulty concentrating',
  'Muscle cramps',
  'Persistent hiccups',
  'High blood pressure',
  'Back pain (below ribs)',
  'Blood in urine (hematuria)',
  'Foamy or bubbly urine (proteinuria)'
];

const organizations = [
  {
    name: 'National Kidney Foundation (NKF)',
    description: 'Leading nonprofit supporting kidney disease patients, families, and professionals.',
    services: [
      'Patient education programs',
      'Support groups and mentorship',
      'Dialysis and transplant resources',
      'Clinical research information'
    ],
    website: 'https://www.kidney.org/'
  },
  {
    name: 'Renal Support Network',
    description: 'Peer-support organization for kidney disease patients and families.',
    services: [
      'Peer mentorship programs',
      'Educational workshops',
      'Emotional support',
      'Financial assistance information'
    ],
    website: 'https://www.renalsupport.org/'
  },
  {
    name: 'American Kidney Fund',
    description: 'Nonprofit helping patients cope with kidney disease through financial, educational, and emotional support.',
    services: [
      'Financial assistance for dialysis',
      'Medication co-pay help',
      'Prevention programs',
      'Clinical research matching'
    ],
    website: 'https://www.kidneyfund.org/'
  },
  {
    name: 'PKD Foundation',
    description: 'Dedicated to supporting patients with polycystic kidney disease.',
    services: [
      'Patient and family resources',
      'Research funding',
      'Clinical trial information',
      'Genetic counseling guidance'
    ],
    website: 'https://www.pkdcure.org/'
  }
];
