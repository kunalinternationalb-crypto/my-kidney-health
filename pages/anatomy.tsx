import React, { useState } from 'react';
import Head from 'next/head';

interface Hotspot {
  id: string;
  name: string;
  x: number;
  y: number;
  anatomy: string;
  function: string;
  reference: string;
  color: string;
}

export default function Anatomy() {
  const [zoomedIn, setZoomedIn] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: 'glomerulus',
      name: 'Glomerulus',
      x: 50,
      y: 30,
      anatomy: 'A tufted network of specialized capillaries enclosed in Bowman\'s capsule. The filtration barrier consists of endothelium, basement membrane, and podocytes.',
      function: 'Ultra-filtration of blood. Water, ions, glucose, amino acids, and small molecules pass through into Bowman\'s space, while blood cells and large proteins are retained.',
      reference: 'Brenner & Rector\'s The Kidney, Ch. 2',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'proximal',
      name: 'Proximal Tubule',
      x: 50,
      y: 55,
      anatomy: 'The first segment of the renal tubule after Bowman\'s capsule, lined with simple cuboidal epithelium rich in mitochondria.',
      function: 'Selective reabsorption of filtered substances: glucose, amino acids, sodium, calcium, water.',
      reference: 'Guyton and Hall\'s Medical Physiology, Ch. 26',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'loopOfHenle',
      name: 'Loop of Henle',
      x: 50,
      y: 75,
      anatomy: 'A U-shaped segment with thin descending limb and thick ascending limb.',
      function: 'Creates osmotic gradient allowing kidneys to concentrate urine and conserve water.',
      reference: 'Brenner & Rector\'s The Kidney, Ch. 3',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'distal',
      name: 'Distal Tubule',
      x: 30,
      y: 85,
      anatomy: 'Segment after loop of Henle, lined with simple cuboidal epithelium.',
      function: 'Fine-tuning of urine composition: reabsorbs sodium and calcium, secretes potassium and hydrogen.',
      reference: 'Guyton and Hall\'s Medical Physiology, Ch. 27',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'collectingDuct',
      name: 'Collecting Duct',
      x: 25,
      y: 95,
      anatomy: 'Final segment of nephron, collecting tubular fluid from distal tubules.',
      function: 'Water reabsorption regulated by ADH; final urine concentration.',
      reference: 'Brenner & Rector\'s The Kidney, Ch. 3',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Interactive Kidney Anatomy - My Kidney Health</title>
        <meta name="description" content="Explore kidney and nephron anatomy with interactive, clickable diagrams." />
      </Head>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-kidney-900 mb-4">Interactive Kidney Anatomy</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Click on the kidney to zoom in and explore the nephron. Then interact with hotspots to learn about each structure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Visualization */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                {!zoomedIn ? (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-kidney-900">The Kidney</h2>
                    <div
                      onClick={() => setZoomedIn(true)}
                      className="flex justify-center items-center h-96 bg-gradient-light rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                    >
                      <div className="text-center">
                        <div className="text-8xl mb-4 group-hover:animate-bounce">🫘</div>
                        <p className="text-kidney-700 font-semibold text-lg">Click to zoom into Nephron</p>
                        <p className="text-gray-600 text-sm mt-2">~1 million nephrons per kidney</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in-up">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold text-kidney-900">The Nephron (Zoomed View)</h2>
                      <button
                        onClick={() => {
                          setZoomedIn(false);
                          setActiveHotspot(null);
                        }}
                        className="px-4 py-2 bg-kidney-600 text-white rounded-lg hover:bg-kidney-700 transition font-semibold"
                      >
                        ← Back
                      </button>
                    </div>

                    {/* Interactive Nephron Diagram */}
                    <div className="relative w-full h-96 bg-gradient-light rounded-lg border-2 border-kidney-200 overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Nephron structure visualization */}
                        <defs>
                          <linearGradient id="glomerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
                          </linearGradient>
                          <linearGradient id="tubuleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>

                        {/* Glomerulus */}
                        <circle cx="50" cy="25" r="8" fill="url(#glomerGrad)" />
                        {/* Bowman's Capsule */}
                        <circle cx="50" cy="25" r="12" fill="none" stroke="#dc2626" strokeWidth="0.5" />

                        {/* Proximal Tubule */}
                        <path d="M 50 37 Q 45 50, 40 65" stroke="url(#tubuleGrad)" strokeWidth="3" fill="none" />

                        {/* Loop of Henle */}
                        <path d="M 40 65 L 35 85 L 40 95" stroke="url(#tubuleGrad)" strokeWidth="3" fill="none" />

                        {/* Distal Tubule */}
                        <path d="M 40 95 Q 45 85, 50 75" stroke="url(#tubuleGrad)" strokeWidth="3" fill="none" />

                        {/* Collecting Duct */}
                        <path d="M 50 75 L 50 98" stroke="#9333ea" strokeWidth="3" fill="none" />

                        {/* Labels and hotspots */}
                        {hotspots.map((hotspot) => (
                          <g key={hotspot.id}>
                            <circle
                              cx={hotspot.x}
                              cy={hotspot.y}
                              r="4"
                              fill={hotspot.id === activeHotspot ? '#fbbf24' : '#ffffff'}
                              stroke={hotspot.id === activeHotspot || hoveredHotspot === hotspot.id ? '#f59e0b' : '#666'}
                              strokeWidth="2"
                              className="cursor-pointer hover:opacity-80 transition"
                              onClick={() => setActiveHotspot(hotspot.id)}
                              onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                              onMouseLeave={() => setHoveredHotspot(null)}
                            />
                          </g>
                        ))}
                      </svg>

                      {/* Hotspot legend */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-3 rounded-lg text-xs">
                        <p className="font-bold text-gray-800 mb-2">Click on the circles to learn more</p>
                        <div className="flex flex-wrap gap-2">
                          {hotspots.map((h) => (
                            <span key={h.id} className="text-gray-700 text-xs">
                              🔴 {h.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hotspot Buttons */}
                    <div className="flex flex-wrap gap-2">
                      {hotspots.map((hotspot) => (
                        <button
                          key={hotspot.id}
                          onClick={() => setActiveHotspot(hotspot.id)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                            activeHotspot === hotspot.id
                              ? 'bg-kidney-600 text-white shadow-lg'
                              : 'bg-kidney-100 text-kidney-700 hover:bg-kidney-200'
                          }`}
                        >
                          {hotspot.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Information Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg sticky top-20 h-fit">
                <h2 className="text-2xl font-bold text-kidney-900 mb-6">Structure & Function</h2>

                {!zoomedIn ? (
                  <div className="space-y-4">
                    {kidneyInfo.map((info, idx) => (
                      <div key={idx} className="p-4 bg-gradient-light rounded-lg border-l-4 border-kidney-600 hover:shadow-md transition">
                        <h3 className="font-bold text-kidney-900 mb-2">{info.title}</h3>
                        <p className="text-gray-700 text-sm">{info.description}</p>
                      </div>
                    ))}
                  </div>
                ) : activeHotspot ? (
                  <div className="animate-fade-in-up space-y-4">
                    {hotspots.find((h) => h.id === activeHotspot) && (
                      <>
                        <div className={`h-20 rounded-lg bg-gradient-to-r ${hotspots.find((h) => h.id === activeHotspot)?.color}`} />
                        <h3 className="text-2xl font-bold text-kidney-900">
                          {hotspots.find((h) => h.id === activeHotspot)?.name}
                        </h3>

                        <div>
                          <h4 className="font-bold text-kidney-700 mb-2 flex items-center gap-2">
                            <span>🏗️</span> Anatomy
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {hotspots.find((h) => h.id === activeHotspot)?.anatomy}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-kidney-700 mb-2 flex items-center gap-2">
                            <span>⚙️</span> Function
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {hotspots.find((h) => h.id === activeHotspot)?.function}
                          </p>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                          <p className="text-xs text-gray-700">
                            <strong>Reference:</strong> {hotspots.find((h) => h.id === activeHotspot)?.reference}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-600 italic">Zoom in to explore the nephron</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const kidneyInfo = [
  {
    title: '🫘 Functional Unit',
    description: 'The nephron is the basic functional unit of the kidney. Each kidney contains ~1 million nephrons.'
  },
  {
    title: '🔀 Two-Part Structure',
    description: 'Renal Corpuscle filters blood. Renal Tubule reabsorbs and secretes substances.'
  },
  {
    title: '💧 Glomerular Filtration',
    description: '~180 liters of filtrate produced daily. ~99% reabsorbed; ~1-2 liters becomes urine.'
  },
  {
    title: '♻️ Selective Reabsorption',
    description: 'Valuable substances are selectively reabsorbed back into blood through active transport.'
  },
  {
    title: '🗑️ Tubular Secretion',
    description: 'Drugs, toxins, excess ions, and hydrogen ions are secreted for excretion.'
  },
  {
    title: '💨 Water Conservation',
    description: 'The Loop of Henle creates osmotic gradients allowing kidneys to concentrate urine.'
  }
];
