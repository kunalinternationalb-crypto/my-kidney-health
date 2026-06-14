import React from 'react';
import Head from 'next/head';
import EGFRCalculator from '@/components/EGFRCalculator';
import ACRCalculator from '@/components/ACRCalculator';

export default function Guidelines() {
  return (
    <>
      <Head>
        <title>Guidelines & Professional Resources - My Kidney Health</title>
        <meta name="description" content="KDIGO, ACC/AHA guidelines, clinical calculators, and CME resources for nephrologists and physicians." />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-kidney-900 mb-4">Clinical Guidelines & Resources</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Access current clinical practice guidelines, diagnostic tools, and professional resources for CKD evaluation and management.
            </p>
          </div>

          {/* KDIGO Guidelines Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold text-kidney-900 mb-4">KDIGO 2024 CKD Guidelines</h2>
            <p className="text-gray-700 mb-6">
              The Kidney Disease: Improving Global Outcomes (KDIGO) 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease represents the current global standard for CKD care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-kidney-50 p-6 rounded-lg border border-kidney-200">
                <h3 className="text-lg font-bold text-kidney-900 mb-3">Key Topics Covered</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ CKD Definition & Classification (CGA)</li>
                  <li>✓ Screening & Diagnosis</li>
                  <li>✓ Risk Assessment & Prognosis</li>
                  <li>✓ Management of CKD Progression</li>
                  <li>✓ SGLT2 Inhibitors, GLP-1 Agonists</li>
                  <li>✓ Hypertension & RAAS Inhibition</li>
                </ul>
              </div>
              <div className="bg-kidney-50 p-6 rounded-lg border border-kidney-200">
                <h3 className="text-lg font-bold text-kidney-900 mb-3">Access the Full Guideline</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Published in Kidney International (March 2024). Available as PDF and interactive digital tools.
                </p>
                <a href="https://kdigo.org/guidelines/ckd-evaluation-and-management/" target="_blank" rel="noopener noreferrer" className="inline-block bg-kidney-600 text-white px-6 py-2 rounded-lg hover:bg-kidney-700 transition font-semibold text-sm">
                  Visit KDIGO Official Site
                </a>
              </div>
            </div>
          </div>

          {/* Other Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-kidney-900 mb-4">ACC/AHA Hypertension Guidelines</h3>
              <p className="text-gray-700 mb-4">2017 Guidelines for the Management of High Blood Pressure in Adults (2023 Update)</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>• BP Target for CKD: &lt;120 mmHg systolic (intensive control)</li>
                <li>• ACE-I/ARB recommended for albuminuria</li>
                <li>• Combination therapy for most patients</li>
                <li>• Lifestyle modifications as foundational</li>
              </ul>
              <a href="https://www.acc.org/" target="_blank" rel="noopener noreferrer" className="inline-block text-kidney-600 hover:text-kidney-700 font-semibold">
                View ACC Guidelines →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-kidney-900 mb-4">American Diabetes Association Standards of Care</h3>
              <p className="text-gray-700 mb-4">2024 Standards of Medical Care in Diabetes</p>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li>• HbA1c Target: &lt;7% (individualized)</li>
                <li>• SGLT2i for T2DM + CKD</li>
                <li>• GLP-1 RA for CV/renal protection</li>
                <li>• Annual eGFR & ACR monitoring</li>
              </ul>
              <a href="https://diabetes.org/" target="_blank" rel="noopener noreferrer" className="inline-block text-kidney-600 hover:text-kidney-700 font-semibold">
                Visit ADA →
              </a>
            </div>
          </div>

          {/* Clinical Calculators */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-kidney-900 mb-8">Clinical Calculators & Tools</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <EGFRCalculator />
              <ACRCalculator />
            </div>
          </div>

          {/* CKD-EPI Heat Map */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-kidney-900 mb-4">KDIGO CKD Risk Heat Map</h2>
            <p className="text-gray-700 mb-6">
              The KDIGO heat map integrates eGFR, albuminuria, and etiology to guide frequency of monitoring and intervention intensity. Darker colors indicate higher risk of progression and kidney failure.
            </p>
            <div className="bg-kidney-50 p-6 rounded-lg border border-kidney-200">
              <h3 className="font-bold text-kidney-900 mb-3">How to Use:</h3>
              <ol className="space-y-2 text-gray-700 text-sm list-decimal list-inside">
                <li>Determine CKD stage (eGFR category)</li>
                <li>Determine albuminuria category (normal, A2, A3)</li>
                <li>Identify etiology (CKD cause)</li>
                <li>Cross-reference on heat map to assess risk</li>
                <li>Guide follow-up frequency and intensity of therapy</li>
              </ol>
            </div>
            <p className="text-sm text-kidney-700 font-semibold mt-6">
              KDIGO Heat Map Tool: <a href="https://kdigo.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-kidney-600">Available on KDIGO website</a>
            </p>
          </div>

          {/* CME & Learning Resources */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-kidney-900 mb-6">Continuing Medical Education (CME)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-kidney-600 pl-4 py-2">
                <h3 className="font-bold text-kidney-900 mb-2">Professional Organizations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>ASN (American Society of Nephrology):</strong> Annual Kidney Week conference, webinars, clinical case discussions</li>
                  <li>• <strong>KDIGO:</strong> Consensus conference, educational webinars, guideline-based CME</li>
                  <li>• <strong>NKF (National Kidney Foundation):</strong> Spring and Fall Clinical Nephrology Conferences</li>
                </ul>
              </div>
              <div className="border-l-4 border-kidney-600 pl-4 py-2">
                <h3 className="font-bold text-kidney-900 mb-2">Online Learning</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>UpToDate Nephrology:</strong> Evidence-based clinical decision support</li>
                  <li>• <strong>Medscape CME:</strong> Nephrology continuing education credits</li>
                  <li>• <strong>Journal Clubs:</strong> JASN, AJKD, Kidney International</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Case Studies & Clinical Scenarios */}
          <div className="bg-kidney-50 border-l-4 border-kidney-600 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-kidney-900 mb-4">Case Studies & Clinical Scenarios</h2>
            <p className="text-gray-700 mb-6">
              Interactive case studies help practitioners apply guidelines to real-world clinical scenarios. Coming soon: curated case library covering CKD stages 1-5, diabetic nephropathy, AKI, and glomerulonephritis management.
            </p>
            <button className="bg-kidney-600 text-white px-6 py-2 rounded-lg hover:bg-kidney-700 transition font-semibold">
              Explore Cases (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
