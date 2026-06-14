import React, { useState } from 'react';

interface EGFRResult {
  eGFR: number;
  stage: string;
  description: string;
}

export default function EGFRCalculator() {
  const [creatinine, setCreatinine] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState<'male' | 'female'>('male');
  const [race, setRace] = useState<'african' | 'other'>('other');
  const [result, setResult] = useState<EGFRResult | null>(null);

  const calculateEGFR = () => {
    if (!creatinine || !age) {
      alert('Please enter creatinine and age');
      return;
    }

    const creatVal = parseFloat(creatinine);
    const ageVal = parseFloat(age);

    // CKD-EPI 2021 equation (simplified)
    let kappa = sex === 'female' ? 0.7 : 0.9;
    let alpha = sex === 'female' ? -0.241 : -0.302;
    let fRace = race === 'african' ? 1.159 : 1.0;

    const eGFR = 142 * Math.pow(creatVal / kappa, alpha) * Math.pow(ageVal / 25, -0.179) * (sex === 'female' ? 0.742 : 1) * fRace;

    let stage = '';
    let description = '';

    if (eGFR >= 90) {
      stage = 'Stage 1';
      description = 'Normal or high kidney function';
    } else if (eGFR >= 60) {
      stage = 'Stage 2';
      description = 'Mildly decreased kidney function';
    } else if (eGFR >= 45) {
      stage = 'Stage 3a';
      description = 'Mildly to moderately decreased kidney function';
    } else if (eGFR >= 30) {
      stage = 'Stage 3b';
      description = 'Moderately to severely decreased kidney function';
    } else if (eGFR >= 15) {
      stage = 'Stage 4';
      description = 'Severely decreased kidney function';
    } else {
      stage = 'Stage 5';
      description = 'Kidney failure (may need dialysis or transplant)';
    }

    setResult({
      eGFR: Math.round(eGFR),
      stage,
      description
    });
  };

  const reset = () => {
    setCreatinine('');
    setAge('');
    setSex('male');
    setRace('other');
    setResult(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-kidney-900 mb-6">eGFR Calculator</h3>
      <p className="text-gray-700 mb-6 text-sm">
        Calculate estimated Glomerular Filtration Rate using the CKD-EPI 2021 equation. Values are estimates and should be confirmed by healthcare providers.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Serum Creatinine (mg/dL)</label>
          <input
            type="number"
            step="0.1"
            value={creatinine}
            onChange={(e) => setCreatinine(e.target.value)}
            placeholder="e.g., 1.2"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kidney-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Age (years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g., 45"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kidney-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sex</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value as 'male' | 'female')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kidney-500 focus:border-transparent"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Race/Ethnicity</label>
          <select
            value={race}
            onChange={(e) => setRace(e.target.value as 'african' | 'other')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kidney-500 focus:border-transparent"
          >
            <option value="other">Non-African American</option>
            <option value="african">African American</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculateEGFR}
          className="flex-1 bg-kidney-600 text-white py-2 rounded-lg font-semibold hover:bg-kidney-700 transition"
        >
          Calculate eGFR
        </button>
        <button
          onClick={reset}
          className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="bg-kidney-50 border-l-4 border-kidney-600 p-4 rounded">
          <h4 className="text-lg font-bold text-kidney-900 mb-2">Results</h4>
          <div className="space-y-2 text-gray-800">
            <p><strong>eGFR:</strong> {result.eGFR} mL/min/1.73m²</p>
            <p><strong>CKD Stage:</strong> {result.stage}</p>
            <p><strong>Classification:</strong> {result.description}</p>
          </div>
          <p className="text-xs text-gray-600 mt-4 italic">
            This is an estimate. Confirm with your healthcare provider and consider both creatinine and cystatin C for better accuracy.
          </p>
        </div>
      )}
    </div>
  );
}
