import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">My Kidney Health</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Comprehensive nephrology education for healthcare professionals and patients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-kidney-300 transition">Home</Link></li>
              <li><Link href="/anatomy" className="hover:text-kidney-300 transition">Anatomy</Link></li>
              <li><Link href="/diseases" className="hover:text-kidney-300 transition">Diseases</Link></li>
              <li><Link href="/lifestyle" className="hover:text-kidney-300 transition">Lifestyle</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guidelines" className="hover:text-kidney-300 transition">Guidelines</Link></li>
              <li><Link href="/news" className="hover:text-kidney-300 transition">News & Updates</Link></li>
              <li><Link href="/patient-education" className="hover:text-kidney-300 transition">Patient Education</Link></li>
              <li><a href="#" className="hover:text-kidney-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Professional Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://kdigo.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kidney-300 transition">
                  KDIGO
                </a>
              </li>
              <li>
                <a href="https://www.kidney.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kidney-300 transition">
                  National Kidney Foundation
                </a>
              </li>
              <li>
                <a href="https://www.asn-online.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kidney-300 transition">
                  ASN
                </a>
              </li>
              <li>
                <a href="https://www.ajkd.org/" target="_blank" rel="noopener noreferrer" className="hover:text-kidney-300 transition">
                  AJKD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          {/* Legal & Disclaimer */}
          <div className="mb-6 text-sm text-gray-400">
            <p className="mb-3">
              <strong className="text-white">Medical Disclaimer:</strong> This website provides educational information and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider.
            </p>
            <p>
              Content is based on KDIGO 2024 Guidelines, Brenner & Rector's The Kidney, and Guyton & Hall's Medical Physiology.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {currentYear} My Kidney Health. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-kidney-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-kidney-300 transition">Terms of Use</a>
              <a href="#" className="hover:text-kidney-300 transition">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
