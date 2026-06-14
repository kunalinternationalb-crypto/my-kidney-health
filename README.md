# My Kidney Health 🫘

**A Comprehensive Kidney Health Education Platform for Nephrologists, Physicians, and Patients**

## Overview

My Kidney Health is an evidence-based, interactive web platform dedicated to kidney disease education, early detection, and management. Built with modern web technologies (Next.js, TypeScript, Tailwind CSS), it serves as a bridge between healthcare professionals and patients to improve kidney health outcomes globally.

### Mission

- **Educate**: Provide accurate, evidence-based information on kidney anatomy, disease pathophysiology, and clinical management
- **Empower**: Enable patients to understand their kidney health, assess risk factors, and engage in preventive care
- **Elevate**: Offer healthcare professionals access to current guidelines, clinical tools, and continuing education resources

## Features

### 🔬 Interactive Kidney Anatomy
- **Clickable Nephron Diagram**: Explore kidney and nephron structure with detailed hotspots
- **Functional Descriptions**: Learn anatomy and physiology from Brenner & Rector's The Kidney textbook
- **Educational Focus**: Understand glomerular filtration, tubular reabsorption, and water conservation mechanisms

### 📚 Comprehensive Disease Library
In-depth coverage of major kidney conditions:
- **Chronic Kidney Disease (CKD)** - Stages 1-5 with risk factors and management
- **Acute Kidney Injury (AKI)** - Prerenal, intrinsic, and postrenal causes
- **Diabetic Nephropathy** - Pathophysiology and evidence-based treatment
- **Lupus Nephritis** - Autoimmune glomerulonephritis with WHO classification
- **Polycystic Kidney Disease (PKD)** - Inherited kidney disease management
- **IgA Nephropathy** - Most common primary glomerulonephritis worldwide
- **Post-Infectious Glomerulonephritis** - Acute immune-mediated injury

Each disease includes:
- Pathophysiology (mechanism of kidney injury)
- Signs & symptoms (early and late presentations)
- Risk factors (modifiable and non-modifiable)
- Diagnostic tests (lab work, imaging, biopsy)
- Evidence-based treatment (KDIGO guidelines)
- Key takeaways for clinical practice

### 🏥 Professional Resources
- **eGFR Calculator**: CKD-EPI 2021 equation for kidney function assessment
- **ACR Calculator**: Albumin-creatinine ratio for albuminuria quantification
- **Clinical Guidelines**: KDIGO 2024, ACC/AHA Hypertension, ADA Diabetes Standards
- **News & Updates**: Real-time RSS feeds from top nephrology journals (JASN, AJKD, Kidney International)
- **CME Resources**: Links to professional organizations and continuing education

### 👥 Patient Education
- **Risk Assessment Tool**: Interactive questionnaire to identify CKD risk factors
- **Symptom Checklist**: Comprehensive list of kidney disease signs and symptoms
- **Frequently Asked Questions**: Patient-friendly answers to common questions
- **Support Organizations**: Links to NKF, Renal Support Network, American Kidney Fund, PKD Foundation
- **Downloadable Resources**: Patient guides and educational handouts (coming soon)

### 💪 Lifestyle & Prevention
Evidence-based strategies to prevent and slow kidney disease:
- Sodium restriction (<2,300 mg/day)
- Physical activity (≥150 min/week moderate-intensity)
- Dietary modifications (DASH, Mediterranean diet)
- Smoking cessation
- Weight management (BMI target 18.5-24.9)
- Proper hydration
- Management of hypertension, diabetes, dyslipidemia

## Technology Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS/Autoprefixer
- **UI Components**: Custom React components
- **State Management**: Zustand (for future complex state needs)
- **HTTP Client**: Axios (for RSS feed parsing and external API calls)
- **Notifications**: React Hot Toast (for user feedback)
- **RSS Parsing**: rss-parser (for latest nephrology news)

## Project Structure

```
my-kidney-health/
├── pages/                      # Next.js pages (routes)
│   ├── index.tsx              # Home page
│   ├── _app.tsx               # App wrapper with layout
│   ├── anatomy.tsx            # Interactive kidney anatomy
│   ├── diseases/
│   │   ├── index.tsx          # Disease library listing
│   │   └── [slug].tsx         # Individual disease pages
│   ├── lifestyle.tsx          # Prevention & lifestyle guide
│   ├── guidelines.tsx         # Clinical guidelines & calculators
│   ├── news.tsx               # Latest nephrology news
│   └── patient-education.tsx  # Patient resources & FAQs
├── components/                # Reusable React components
│   ├── Navigation.tsx         # Top navigation bar
│   ├── Footer.tsx             # Footer with links
│   ├── EGFRCalculator.tsx     # eGFR calculation tool
│   ├── ACRCalculator.tsx      # ACR calculation tool
│   └── RiskAssessment.tsx     # CKD risk assessment questionnaire
├── lib/                        # Utility functions and data
│   └── diseases.ts            # Disease database with TypeScript interfaces
├── styles/                    # Global styles
│   └── globals.css            # Tailwind directives and custom styles
├── public/                    # Static assets (coming soon)
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunalinternationalb-crypto/my-kidney-health.git
   cd my-kidney-health
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

5. **Lint code**
   ```bash
   npm run lint
   ```

## Key Resources & References

### Clinical Guidelines
- **KDIGO 2024 CKD Guidelines**: [https://kdigo.org/](https://kdigo.org/)
- **ACC/AHA Hypertension Guidelines**: [https://www.acc.org/](https://www.acc.org/)
- **ADA Diabetes Standards**: [https://diabetes.org/](https://diabetes.org/)
- **ASN (American Society of Nephrology)**: [https://www.asn-online.org/](https://www.asn-online.org/)

### Textbooks Referenced
- Brenner & Rector's The Kidney (11th Edition)
- Guyton and Hall's Textbook of Medical Physiology (14th Edition)

### Journals
- **JASN** (Journal of the American Society of Nephrology): [https://www.jasn.org/](https://www.jasn.org/)
- **AJKD** (American Journal of Kidney Diseases): [https://www.ajkd.org/](https://www.ajkd.org/)
- **Kidney International**: [https://www.kidney-international.org/](https://www.kidney-international.org/)

### Patient Organizations
- **National Kidney Foundation**: [https://www.kidney.org/](https://www.kidney.org/)
- **Renal Support Network**: [https://www.renalsupport.org/](https://www.renalsupport.org/)
- **American Kidney Fund**: [https://www.kidneyfund.org/](https://www.kidneyfund.org/)
- **PKD Foundation**: [https://www.pkdcure.org/](https://www.pkdcure.org/)

## Roadmap

### Phase 1 (Current)
- ✅ Interactive kidney anatomy
- ✅ Disease library (6 major conditions)
- ✅ Clinical calculators (eGFR, ACR)
- ✅ Guidelines and resources
- ✅ Patient education hub
- ✅ Lifestyle & prevention guide

### Phase 2 (Planned)
- 📋 Expanded disease library (20+ conditions)
- 📋 Case studies and clinical scenarios
- 📋 Interactive kidney function simulator
- 📋 Medication interaction checker
- 📋 Diet planner with renal-friendly recipes
- 📋 Lab result interpreter
- 📋 Integration with patient health records (FHIR)

### Phase 3 (Future)
- 🔮 Mobile app (iOS/Android)
- 🔮 Telemedicine consultation booking
- 🔮 Personalized learning pathways
- 🔮 CMS for content management
- 🔮 Multi-language support
- 🔮 Accessibility improvements (WCAG AAA)

## Medical Disclaimer ⚠️

This website provides educational information about kidney health and disease. **It is not a substitute for professional medical advice, diagnosis, or treatment.** Always consult with a qualified healthcare provider before making any health-related decisions.

If you think you may have a medical emergency, call your doctor or emergency services immediately.

## Contributing

Contributions are welcome! Please ensure:
1. All medical information is evidence-based (KDIGO, ACC/AHA, ADA guidelines)
2. Content is reviewed by healthcare professionals
3. Code follows TypeScript and React best practices
4. Accessibility standards are maintained

## License

MIT License - See LICENSE file for details

## Author

**Created by**: kunalinternationalb-crypto

**Contact**: [GitHub Profile](https://github.com/kunalinternationalb-crypto)

## Acknowledgments

- KDIGO for comprehensive clinical guidelines
- Brenner & Rector and Guyton & Hall for foundational knowledge
- National Kidney Foundation for patient education resources
- American Society of Nephrology for professional standards

---

**Last Updated**: June 2026

**Status**: Active Development

**Support**: For questions or feedback, please open a GitHub issue.
