import React, { useState } from 'react';
import Head from 'next/head';

export default function Anatomy() {
  const [zoomedIn, setZoomedIn] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Interactive Kidney Anatomy - My Kidney Health</title>
        <meta name="description" content="Explore kidney and nephron anatomy with interactive diagrams and detailed structure/function descriptions." />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-kidney-900 mb-4">Interactive Kidney Anatomy</h1>
            <p className="text-lg text-gray-700">
              Explore the structure and function of the kidney and nephron. Click on the kidney image to zoom into the nephron, then click the hotspots to learn about each segment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Visualization */}
            <div className="flex flex-col">
              {!zoomedIn ? (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-kidney-900 mb-6">The Kidney</h2>
                  <div className="flex justify-center items-center h-64 sm:h-80 bg-kidney-50 rounded-lg mb-6 cursor-pointer hover:bg-kidney-100 transition" onClick={() => setZoomedIn(true)}>
                    {/* Kidney SVG Placeholder */}
                    <div className="text-center">
                      <div className="text-6xl mb-4">🫘</div>
                      <p className="text-kidney-700 font-semibold">Click to zoom into Nephron</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-gray-800">
                      <strong>The kidney</strong> contains approximately 1 million nephrons, each capable of filtering blood and producing urine. Each nephron consists of a renal corpuscle (glomerulus and Bowman's capsule) and a renal tubule.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <button
                    onClick={() => { setZoomedIn(false); setActiveHotspot(null); }}
                    className="mb-4 px-4 py-2 bg-kidney-600 text-white rounded hover:bg-kidney-700 transition"
                  >
                    ← Back to Kidney Overview
                  </button>
                  <h2 className="text-2xl font-bold text-kidney-900 mb-6">The Nephron (Zoom View)</h2>
                  <div className="flex justify-center items-center h-64 sm:h-80 bg-kidney-50 rounded-lg mb-6 relative">
                    {/* Nephron SVG with hotspots */}
                    <div className="text-center relative w-full">
                      <div className="text-6xl mb-4">🔬</div>
                      <p className="text-kidney-700 font-semibold mb-4">Click on segments to learn more</p>
                      <div className="flex flex-col gap-2 justify-center">
                        {hotspots.map(spot => (
                          <button
                            key={spot.id}
                            onClick={() => setActiveHotspot(spot.id)}
                            className={`px-3 py-2 rounded text-sm font-semibold transition ${
                              activeHotspot === spot.id
                                ? 'bg-kidney-600 text-white'
                                : 'bg-kidney-100 text-kidney-700 hover:bg-kidney-200'
                            }`}
                          >
                            {spot.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Information */}
            <div className="flex flex-col">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold text-kidney-900 mb-6">Structure & Function</h2>
                {!zoomedIn ? (
                  <div className="space-y-6">
                    {kidneyInfo.map((info, idx) => (
                      <div key={idx} className="border-l-4 border-kidney-400 pl-4 py-2">
                        <h3 className="text-lg font-bold text-kidney-900">{info.title}</h3>
                        <p className="text-gray-700 mt-2">{info.description}</p>
                      </div>
                    ))}
                  </div>
                ) : activeHotspot ? (
                  <div>
                    {hotspots.find(h => h.id === activeHotspot) && (
                      <div>
                        <h3 className="text-2xl font-bold text-kidney-900 mb-4">
                          {hotspots.find(h => h.id === activeHotspot)?.name}
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-kidney-700 mb-2">Anatomy</h4>
                            <p className="text-gray-700">
                              {hotspots.find(h => h.id === activeHotspot)?.anatomy}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-kidney-700 mb-2">Function</h4>
                            <p className="text-gray-700">
                              {hotspots.find(h => h.id === activeHotspot)?.function}
                            </p>
                          </div>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                            <p className="text-sm text-gray-800">
                              <strong>Reference:</strong> {hotspots.find(h => h.id === activeHotspot)?.reference}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-600 italic">Select a nephron segment to view details</p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-kidney-900 mb-4">Glomerular Filtration</h3>
              <p className="text-gray-700 mb-4">
                The glomerulus filters blood continuously, producing about 180 liters of filtrate daily. Only 1-2 liters becomes urine; the rest is reabsorbed.
              </p>
              <p className="text-gray-700 text-sm text-kidney-700 font-semibold">Brenner & Rector's The Kidney, 11th Edition</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-kidney-900 mb-4">The Counter-Current Multiplier</h3>
              <p className="text-gray-700 mb-4">
                The loop of Henle creates an osmotic gradient that allows the kidney to concentrate urine and conserve water—critical for hydration and electrolyte balance.
              </p>
              <p className="text-gray-700 text-sm text-kidney-700 font-semibold">Guyton and Hall's Textbook of Medical Physiology, 14th Edition</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const hotspots = [
  {
    id: 'glomerulus',
    name: 'Glomerulus',
    anatomy: 'A tufted network of specialized capillaries enclosed in Bowman\'s capsule. The filtration barrier consists of three layers: endothelium, basement membrane, and podocytes (visceral epithelial cells).',
    function: 'Ultra-filtration of blood. Water, ions, glucose, amino acids, and small molecules pass through into Bowman\'s space, while blood cells and large proteins (>60-70 kDa) are retained.',
    reference: 'Brenner & Rector\'s The Kidney, Ch. 2: Anatomy of the Kidney'
  },
  {
    id: 'proximal',
    name: 'Proximal Convoluted Tubule (PCT)',
    anatomy: 'The first segment of the renal tubule after Bowman\'s capsule, lined with simple cuboidal epithelium rich in mitochondria and microvillar brush border.',
    function: 'Selective reabsorption of filtered substances: glucose, amino acids, sodium, calcium, water, and other nutrients are returned to the peritubular capillaries. Also secretes organic anions/cations.',
    reference: 'Guyton and Hall\'s Textbook of Medical Physiology, Ch. 26: Urine Formation by the Kidneys'
  },
  {
    id: 'loopOfHenle',
    name: 'Loop of Henle',
    anatomy: 'A U-shaped segment with a thin descending limb and thick ascending limb. The descending limb is permeable to water; the ascending limb is impermeable to water but actively transports NaCl.',
    function: 'Multiplier system: generates an osmotic gradient in the renal medulla. Descending limb loses water (concentration); ascending limb loses salt (dilution). This gradient allows collecting duct to reabsorb water and concentrate urine.',
    reference: 'Brenner & Rector\'s The Kidney, Ch. 3: Urine Formation and Urinary Excretion of Ions and Acids'
  },
  {
    id: 'distal',
    name: 'Distal Convoluted Tubule (DCT)',
    anatomy: 'The segment after loop of Henle, lined with simple cuboidal epithelium. Contains principal and intercalated cells that regulate electrolytes and acid-base balance.',
    function: 'Fine-tuning of urine composition: reabsorbs sodium (via ENaC, aldosterone-regulated) and calcium (PTH-regulated); secretes potassium and hydrogen ions. Critical for blood pressure and pH regulation.',
    reference: 'Guyton and Hall\'s Textbook of Medical Physiology, Ch. 27: Regulation of Extracellular Fluid Composition and Volume'
  }
];

const kidneyInfo = [
  {
    title: 'Functional Unit',
    description: 'The nephron is the basic functional unit of the kidney. Each kidney contains ~1 million nephrons, each capable of independently filtering blood and forming urine.'
  },
  {
    title: 'Two-Part Structure',
    description: 'Renal Corpuscle (glomerulus + Bowman\'s capsule) filters blood. Renal Tubule (proximal, loop of Henle, distal, collecting duct) reabsorbs and secretes substances.'
  },
  {
    title: 'Glomerular Filtration',
    description: '~180 liters of filtrate produced daily through ultrafiltration. ~99% reabsorbed; ~1-2 liters becomes urine. Driven by glomerular filtration pressure.'
  },
  {
    title: 'Selective Reabsorption',
    description: 'Valuable substances (glucose, amino acids, sodium, water) are selectively reabsorbed back into blood through active transport and osmosis.'
  },
  {
    title: 'Tubular Secretion',
    description: 'Drugs, toxins, excess ions, and hydrogen ions are secreted from peritubular capillaries into tubular fluid for excretion.'
  },
  {
    title: 'Water Conservation',
    description: 'The counter-current multiplier system (Loop of Henle) creates osmotic gradients allowing kidneys to produce concentrated urine and conserve water.'
  }
];
