import React, { useState } from 'react';

interface ACRResult {
  acr: number;
  category: string;
  description: string;
}

export default function ACRCalculator() {
  const [albumin, setAlbumin] = useState('');
  const [creatinine, setCreatinine] = useState('');
  const [result, setResult] = useState<ACRResult | null>(null);

  const calculateACR = () => {
    if (!albumin || !creatinine) {
      alert('Please enter both albumin and creatinine values');
      return;
    }

    const albuminVal = parseFloat(albumin);
    const creatinineVal = parseFloat(creatinine);
    const acr = albuminVal / creatinineVal;

    let category = '';
    let description = '';

    if (acr < 30) {
      category = 'Normal';
      description = 'No albuminuria';
    } else if (acr < 300) {
      category = 'Microalbuminuria';
      description = 'Early signs of kidney damage; often reversible with treatment';
    } else {
      category = 'Macroalbuminuria';
      description = 'Significant proteinuria; indicates advanced kidney disease';
    }

    setResult({
      acr: parseFloat(acr.toFixed(2)),
      category,
      description
    });
  };

  const reset = () => {
    setAlbumin('');
    setCreatinine('');
    setResult(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-kidney-900 mb-6">ACR Calculator</h3>
      <p className="text-gray-700 mb-6 text-sm">
        Calculate Albumin-Creatinine Ratio (ACR) from spot urine samples. ACR is a key marker of kidney damage and albuminuria.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Urine Albumin (mg)</label>
          <input
            type="number"
            step="0.1"
            value={albumin}
            onChange={(e) => setAlbumin(e.target.value)}
            placeholder="e.g., 25"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kidney-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Urine Creatinine (mg)</label>
          <input
            type="number"
            step="0.1"
            value={creatinine}
            onChange={(e) => setCreatinine(e.target.value)}
            placeholder="e.g., 100"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kidney-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculateACR}
          className="flex-1 bg-kidney-600 text-white py-2 rounded-lg font-semibold hover:bg-kidney-700 transition"
        >
          Calculate ACR
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
            <p><strong>ACR:</strong> {result.acr} mg/g</p>
            <p><strong>Category:</strong> {result.category}</p>
            <p><strong>Interpretation:</strong> {result.description}</p>
          </div>
          <div className="mt-4 text-xs text-gray-600 space-y-1">
            <p><strong>Reference Ranges (KDIGO):</strong></p>
            <p>• &lt;30 mg/g: Normal</p>
            <p>• 30-300 mg/g: Microalbuminuria (A2)</p>
            <p>• &gt;300 mg/g: Macroalbuminuria (A3)</p>
          </div>
        </div>
      )}
    </div>
  );
}
