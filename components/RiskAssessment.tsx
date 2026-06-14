import React, { useState } from 'react';

interface RiskScore {
  score: number;
  category: string;
  recommendation: string;
}

export default function RiskAssessment() {
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({
    diabetes: false,
    hypertension: false,
    family: false,
    age: false,
    obesity: false,
    smoking: false,
    proteinuria: false
  });
  const [result, setResult] = useState<RiskScore | null>(null);

  const questions = [
    { key: 'diabetes', label: 'Do you have diabetes?' },
    { key: 'hypertension', label: 'Do you have hypertension (high blood pressure)?' },
    { key: 'family', label: 'Do you have a family history of kidney disease?' },
    { key: 'age', label: 'Are you 60 years old or older?' },
    { key: 'obesity', label: 'Do you have obesity (BMI ≥ 30)?' },
    { key: 'smoking', label: 'Do you smoke or have you smoked?' },
    { key: 'proteinuria', label: 'Have you been told you have protein in your urine?' }
  ];

  const calculateRisk = () => {
    const riskFactors = Object.values(answers).filter(Boolean).length;

    let category = '';
    let recommendation = '';

    if (riskFactors === 0) {
      category = 'Low Risk';
      recommendation = 'Continue healthy lifestyle. Monitor kidney health annually.';
    } else if (riskFactors <= 2) {
      category = 'Moderate Risk';
      recommendation = 'Get baseline kidney function tests (eGFR, ACR). Manage modifiable risk factors. Follow-up annually.';
    } else if (riskFactors <= 4) {
      category = 'High Risk';
      recommendation = 'Consult a nephrologist or primary care physician. Get comprehensive kidney disease workup. Consider more frequent monitoring.';
    } else {
      category = 'Very High Risk';
      recommendation = 'See a nephrologist urgently. Comprehensive CKD evaluation needed. Aggressive management of underlying conditions.';
    }

    setResult({
      score: riskFactors,
      category,
      recommendation
    });
  };

  const reset = () => {
    setAnswers({
      diabetes: false,
      hypertension: false,
      family: false,
      age: false,
      obesity: false,
      smoking: false,
      proteinuria: false
    });
    setResult(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-kidney-900 mb-6">Kidney Disease Risk Assessment</h3>
      <p className="text-gray-700 mb-6 text-sm">
        This questionnaire helps identify your risk for chronic kidney disease. It is not diagnostic; consult a healthcare provider for proper evaluation.
      </p>

      <div className="space-y-3 mb-6">
        {questions.map((q) => (
          <label key={q.key} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
            <input
              type="checkbox"
              checked={answers[q.key]}
              onChange={(e) => setAnswers({ ...answers, [q.key]: e.target.checked })}
              className="w-5 h-5 text-kidney-600 rounded focus:ring-kidney-500 cursor-pointer"
            />
            <span className="ml-3 text-gray-800 font-medium">{q.label}</span>
          </label>
        ))}
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculateRisk}
          className="flex-1 bg-kidney-600 text-white py-2 rounded-lg font-semibold hover:bg-kidney-700 transition"
        >
          Calculate Risk
        </button>
        <button
          onClick={reset}
          className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className={`border-l-4 p-4 rounded ${
          result.category === 'Low Risk'
            ? 'bg-green-50 border-green-600'
            : result.category === 'Moderate Risk'
            ? 'bg-yellow-50 border-yellow-600'
            : result.category === 'High Risk'
            ? 'bg-orange-50 border-orange-600'
            : 'bg-red-50 border-red-600'
        }`}>
          <h4 className="text-lg font-bold text-gray-900 mb-2">Your Risk Assessment</h4>
          <div className="space-y-2 text-gray-800">
            <p><strong>Risk Factors:</strong> {result.score}/{questions.length}</p>
            <p className="text-lg font-bold text-kidney-900"><strong>Category:</strong> {result.category}</p>
            <p><strong>Recommendation:</strong> {result.recommendation}</p>
          </div>
          <p className="text-xs text-gray-600 mt-4 italic">
            This assessment is for educational purposes only. Always consult with a qualified healthcare provider.
          </p>
        </div>
      )}
    </div>
  );
}
