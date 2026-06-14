import React from 'react';
import Head from 'next/head';

export default function Lifestyle() {
  return (
    <>
      <Head>
        <title>Lifestyle & Prevention - My Kidney Health</title>
        <meta name="description" content="Evidence-based lifestyle modifications to prevent and slow kidney disease progression." />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-kidney-900 mb-4">Lifestyle & Prevention</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Evidence-based lifestyle modifications to prevent kidney disease and slow its progression. These strategies are recommended by KDIGO and supported by major clinical guidelines.
            </p>
          </div>

          {/* Key Lifestyle Interventions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Sodium Restriction */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>🧂</span> Sodium Restriction
              </h2>
              <p className="text-gray-700 mb-4">
                High sodium intake increases blood pressure, promotes proteinuria, and accelerates kidney disease progression.
              </p>
              <div className="bg-kidney-50 p-4 rounded mb-4">
                <p className="font-bold text-kidney-900 mb-2">KDIGO Recommendation:</p>
                <p className="text-gray-800 font-semibold">&lt;90 mmol/day (~2,300 mg/day)</p>
              </div>
              <h4 className="font-bold text-kidney-900 mb-3">Practical Strategies:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Avoid processed foods, canned products, and fast food</li>
                <li>• Read food labels; aim for &lt;120 mg per serving</li>
                <li>• Use herbs, spices, lemon juice instead of salt</li>
                <li>• Cook at home more often</li>
                <li>• Limit condiments (soy sauce, ketchup, mustard)</li>
                <li>• Choose fresh fruits and vegetables</li>
              </ul>
            </div>

            {/* Exercise */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>🏃</span> Physical Activity
              </h2>
              <p className="text-gray-700 mb-4">
                Regular exercise improves blood pressure, reduces cardiovascular risk, and may slow CKD progression.
              </p>
              <div className="bg-kidney-50 p-4 rounded mb-4">
                <p className="font-bold text-kidney-900 mb-2">WHO/KDIGO Recommendation:</p>
                <p className="text-gray-800 font-semibold">≥150 minutes moderate-intensity aerobic activity/week</p>
              </div>
              <h4 className="font-bold text-kidney-900 mb-3">Examples:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Brisk walking (3-4 mph)</li>
                <li>• Swimming or water aerobics</li>
                <li>• Cycling (leisurely pace)</li>
                <li>• Jogging or running (if eGFR adequate)</li>
                <li>• Dancing or recreational sports</li>
                <li>• Resistance training 2x/week</li>
              </ul>
            </div>

            {/* Diet for CKD */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>🥗</span> Dietary Modifications
              </h2>
              <p className="text-gray-700 mb-4">
                Diet plays a critical role in managing CKD and preventing progression. Modifications depend on CKD stage.
              </p>
              <h4 className="font-bold text-kidney-900 mb-3">General Principles:</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li><strong>Plant-Based Diet:</strong> Mediterranean or DASH diet reduces CKD progression risk</li>
                <li><strong>Protein Restriction:</strong> For advanced CKD (eGFR &lt;30): limit to 0.8 g/kg/day</li>
                <li><strong>Phosphorus Control:</strong> For CKD Stage 4-5: avoid processed foods, dairy, nuts (if high PO4)</li>
                <li><strong>Potassium Management:</strong> For CKD Stage 4-5: limit high-K foods (bananas, oranges, tomatoes)</li>
                <li><strong>Fluid Restriction:</strong> Only if edema or hyponatremia present</li>
              </ul>
            </div>

            {/* Smoking Cessation */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>🚭</span> Smoking Cessation
              </h2>
              <p className="text-gray-700 mb-4">
                Smoking accelerates CKD progression, increases cardiovascular risk, and compounds hypertension.
              </p>
              <div className="bg-red-50 p-4 rounded mb-4 border-l-4 border-red-600">
                <p className="text-gray-800 font-semibold">Smoking accelerates CKD progression by 20-40% per year</p>
              </div>
              <h4 className="font-bold text-kidney-900 mb-3">Resources & Strategies:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Consult healthcare provider for pharmacotherapy (varenicline, bupropion, NRT)</li>
                <li>• Behavioral counseling and support groups</li>
                <li>• Quitlines: 1-800-QUIT-NOW (US)</li>
                <li>• Mobile apps and online support communities</li>
                <li>• Avoid secondhand smoke exposure</li>
              </ul>
            </div>

            {/* Weight Management */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>⚖️</span> Weight Management
              </h2>
              <p className="text-gray-700 mb-4">
                Obesity increases CKD risk and accelerates progression. Even 5-10% weight loss improves outcomes.
              </p>
              <h4 className="font-bold text-kidney-900 mb-3">Target:</h4>
              <p className="text-gray-800 mb-4 font-semibold">BMI 18.5-24.9 kg/m²</p>
              <h4 className="font-bold text-kidney-900 mb-3">Approach:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Combine diet + exercise</li>
                <li>• Set realistic goals (0.5-1 lb/week)</li>
                <li>• Work with dietitian for personalized plan</li>
                <li>• Consider weight loss medication (if appropriate)</li>
                <li>• Monitor for weight regain</li>
              </ul>
            </div>

            {/* Hydration */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-kidney-900 mb-4 flex items-center gap-2">
                <span>💧</span> Proper Hydration
              </h2>
              <p className="text-gray-700 mb-4">
                Adequate hydration supports kidney function and may reduce stone formation risk.
              </p>
              <div className="bg-kidney-50 p-4 rounded mb-4">
                <p className="font-bold text-kidney-900 mb-2">General Recommendation:</p>
                <p className="text-gray-800 font-semibold">2-3 liters water daily (individualize based on CKD stage)</p>
              </div>
              <h4 className="font-bold text-kidney-900 mb-3">Guidelines:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Drink water as primary beverage</li>
                <li>• Limit sugary drinks and high-sodium beverages</li>
                <li>• Monitor urine color (pale yellow = well-hydrated)</li>
                <li>• Restrict fluids if edema or Stage 5 CKD present</li>
                <li>• Increase intake during/after exercise</li>
              </ul>
            </div>
          </div>

          {/* Management of Risk Factors */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-kidney-900 mb-6">Managing Associated Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-kidney-600 pl-4">
                <h3 className="text-xl font-bold text-kidney-900 mb-3">Hypertension (Blood Pressure)</h3>
                <p className="text-gray-700 mb-3">Target: &lt;120 mmHg systolic (KDIGO 2024)</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                <li>• ACE-I or ARB as first-line (renoprotective)</li>
                  <li>• Monitor BP regularly at home</li>
                  <li>• Reduce sodium intake (main lever)</li>
                  <li>• Exercise, weight loss, stress reduction</li>
                </ul>
              </div>
              <div className="border-l-4 border-kidney-600 pl-4">
                <h3 className="text-xl font-bold text-kidney-900 mb-3">Diabetes Mellitus</h3>
                <p className="text-gray-700 mb-3">Target HbA1c: &lt;7% (individualize for older/frail patients)</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Strict glycemic control with insulin/oral agents</li>
                  <li>• SGLT2 inhibitors reduce CKD progression</li>
                  <li>• GLP-1 agonists provide cardio-renal protection</li>
                  <li>• Regular monitoring of HbA1c and eGFR</li>
                </ul>
              </div>
              <div className="border-l-4 border-kidney-600 pl-4">
                <h3 className="text-xl font-bold text-kidney-900 mb-3">Dyslipidemia</h3>
                <p className="text-gray-700 mb-3">Target: LDL &lt;70 mg/dL (CKD + CVD)</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Statins reduce CV events in CKD</li>
                  <li>• Low saturated fat, high fiber diet</li>
                  <li>• Exercise and weight loss</li>
                  <li>• Regular lipid panel monitoring</li>
                </ul>
              </div>
              <div className="border-l-4 border-kidney-600 pl-4">
                <h3 className="text-xl font-bold text-kidney-900 mb-3">Anemia & Bone Health</h3>
                <p className="text-gray-700 mb-3">Monitor Hgb, phosphate, calcium, PTH</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Iron supplementation if deficient</li>
                  <li>• Erythropoiesis-stimulating agents (ESAs) if needed</li>
                  <li>• Vitamin D and calcium supplementation</li>
                  <li>• Limit high-phosphate foods</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-kidney-50 border-l-4 border-kidney-600 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-kidney-900 mb-4">Key Takeaway</h2>
            <p className="text-gray-800 text-lg">
              <strong>Lifestyle modification is the cornerstone of CKD prevention and management.</strong> A combination of sodium restriction, regular physical activity, heart-healthy diet, smoking cessation, and weight management can significantly slow or prevent kidney disease progression. Work with your healthcare team—nephrologists, dietitians, and primary care physicians—to develop a personalized plan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
