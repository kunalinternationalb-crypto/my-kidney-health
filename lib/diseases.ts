export interface Disease {
  name: string;
  slug: string;
  icon: string;
  summary: string;
  pathophysiology: string;
  pathophysiologyRef: string;
  signsSymptoms: string[];
  riskFactors: string[];
  diagnosticTests: string[];
  treatment: string;
  treatmentRef: string;
  keyPoints: string[];
  tags: string[];
}

export const diseases: Disease[] = [
  {
    name: 'Chronic Kidney Disease (CKD)',
    slug: 'chronic-kidney-disease',
    icon: '🔴',
    summary: 'Progressive loss of kidney function over months or years, characterized by declining eGFR and/or albuminuria for ≥3 months.',
    pathophysiology: 'CKD results from various insults (diabetes, hypertension, glomerulonephritis) leading to nephron loss and progressive renal fibrosis. Hyperfiltration in remaining nephrons accelerates decline. Early stages may show preserved eGFR despite structural damage.',
    pathophysiologyRef: 'KDIGO 2024 CKD Evaluation and Management Guidelines',
    signsSymptoms: [
      'Often asymptomatic in early stages (Stages 1-2)',
      'Fatigue and weakness (uremia)',
      'Nausea and vomiting',
      'Loss of appetite',
      'Swelling of feet and ankles (edema)',
      'Shortness of breath (volume overload or anemia)',
      'Difficulty concentrating (uremic encephalopathy)',
      'Hypertension'
    ],
    riskFactors: [
      'Diabetes mellitus',
      'Hypertension (HTN)',
      'Age ≥60 years',
      'Family history of CKD/ESRD',
      'Obesity (BMI ≥30)',
      'Smoking and tobacco use',
      'Cardiovascular disease',
      'Glomerulonephritis'
    ],
    diagnosticTests: [
      'Serum creatinine and eGFR (CKD-EPI 2021 equation)',
      'Cystatin C (for improved accuracy)',
      'Urine albumin-creatinine ratio (ACR)',
      'Blood pressure monitoring',
      'Basic metabolic panel (BMP)',
      'Lipid panel',
      'Urinalysis',
      'Renal ultrasound (assess kidney size and echogenicity)',
      'Renal biopsy (if etiology unclear or rapidly progressive)'
    ],
    treatment: 'Management focuses on slowing progression and managing complications. Key strategies: (1) Blood pressure control (<120 mmHg systolic for most; target individualized per KDIGO); (2) RAAS inhibition (ACE inhibitor or ARB) for albuminuria; (3) SGLT2 inhibitors for CKD with/without diabetes; (4) GLP-1 receptor agonists for CKD + T2DM; (5) Nonsteroidal MTRA (finerenone) for advanced CKD; (6) Management of anemia, bone-mineral disorders, and cardiovascular risk; (7) Lifestyle modification (diet, exercise, smoking cessation); (8) Referral to nephrology for eGFR <30, rapid decline, or uncertainty about etiology.',
    treatmentRef: 'KDIGO 2024 Guidelines; ACC/AHA Hypertension Guidelines',
    keyPoints: [
      'Early CKD is often asymptomatic; screening high-risk populations is essential.',
      'eGFR and albuminuria are key staging parameters (CGA classification).',
      'SGLT2 inhibitors and GLP-1 agonists reduce cardiovascular events and CKD progression.',
      'Blood pressure management with RAAS inhibition delays progression.',
      'Transition to renal replacement therapy (dialysis/transplant) for Stage 5.'
    ],
    tags: ['Progressive', 'Asymptomatic (early)', 'Preventable']
  },
  {
    name: 'Acute Kidney Injury (AKI)',
    slug: 'acute-kidney-injury',
    icon: '⚠️',
    summary: 'Rapid decline in kidney function over hours to days, with rise in serum creatinine and/or oliguria. Often reversible if underlying cause is treated.',
    pathophysiology: 'AKI results from acute reduction in renal perfusion (prerenal), intrinsic kidney damage (intrinsic), or urinary obstruction (postrenal). Prerenal AKI leads to acute tubular necrosis (ATN) if prolonged. Intrinsic causes include glomerulonephritis, interstitial nephritis, rhabdomyolysis, sepsis, and contrast nephropathy. Ischemia-reperfusion injury activates inflammatory cascades.',
    pathophysiologyRef: 'Brenner & Rector\'s The Kidney, Chapter on Acute Kidney Injury',
    signsSymptoms: [
      'Oliguria (<400 mL/day) or anuria',
      'Rise in serum creatinine (often >0.3 mg/dL in 48 hours)',
      'Hyperkalemia (weakness, cardiac arrhythmias)',
      'Metabolic acidosis',
      'Pulmonary edema (shortness of breath)',
      'Altered mental status',
      'Nausea, vomiting, anorexia'
    ],
    riskFactors: [
      'Sepsis and infection',
      'Major surgery',
      'Nephrotoxic medications (aminoglycosides, NSAIDs, ACE inhibitors in certain settings)',
      'Radiocontrast exposure',
      'Rhabdomyolysis (muscle injury)',
      'Hypovolemia and shock',
      'Pre-existing CKD',
      'Diabetes mellitus'
    ],
    diagnosticTests: [
      'Serial serum creatinine and eGFR',
      'Blood urea nitrogen (BUN)',
      'Serum electrolytes (K+, Na+, Cl-, HCO3-)',
      'Urinalysis and urine electrolytes',
      'Fractional excretion of sodium (FeNa) - if prerenal vs. ATN differentiation needed',
      'Renal ultrasound (assess obstruction, kidney size)',
      'Urinary microscopy (casts, proteinuria)',
      'Serum and urine myoglobin (if rhabdo suspected)',
      'ECG (assess for hyperkalemia changes)'
    ],
    treatment: 'Management depends on AKI type. Prerenal: restore renal perfusion (IV fluids, vasopressors, stop ACEi/ARBs temporarily). Intrinsic: treat underlying cause (infection, inflammation, drug discontinuation), supportive care, monitoring of electrolytes. Postrenal: relieve obstruction (catheterization, stent placement). General supportive care: strict fluid balance, avoid nephrotoxins, adjust medication dosing for renal function, hyperkalemia management (calcium gluconate, insulin-glucose, diuretics, K+ binders), consider renal replacement therapy if KDIGO Stage 3 AKI, severe hyperkalemia, or pulmonary edema.',
    treatmentRef: 'KDIGO Clinical Practice Guideline for AKI; Nephrology textbooks',
    keyPoints: [
      'AKI is a medical emergency; requires rapid identification and treatment of underlying cause.',
      'Prerenal AKI is the most common and often reversible.',
      'ATN (intrinsic) has poorer prognosis; requires supportive care.',
      'Avoid nephrotoxins and maintain euvolemia.',
      'Monitor potassium closely; hyperkalemia is life-threatening.'
    ],
    tags: ['Acute', 'Reversible', 'Emergency']
  },
  {
    name: 'Diabetic Nephropathy',
    slug: 'diabetic-nephropathy',
    icon: '🩹',
    summary: 'Kidney disease caused by diabetes, characterized by glomerular injury, proteinuria, and progressive loss of kidney function.',
    pathophysiology: 'Chronic hyperglycemia leads to nonenzymatic glycation of glomerular basement membrane (GBM), advanced glycation end-products (AGEs), and glomerular hypertrophy. TGF-β and RAAS activation promote glomerulosclerosis and interstitial fibrosis. Oxidative stress and inflammation accelerate kidney damage. Hypertension compounds injury.',
    pathophysiologyRef: 'Guyton & Hall\'s Textbook of Medical Physiology; Diabetes Care Guidelines',
    signsSymptoms: [
      'Often asymptomatic until advanced stages',
      'Microalbuminuria (30-300 mg/day) - first sign',
      'Progressive proteinuria (>300 mg/day)',
      'Edema and hypertension',
      'Progressive decline in kidney function (eGFR)',
      'Fatigue (anemia from uremia)',
      'Symptoms of CKD complications (hyperkalemia, metabolic acidosis)'
    ],
    riskFactors: [
      'Poor glycemic control (HbA1c >7%)',
      'Duration of diabetes (>5-10 years)',
      'Hypertension',
      'Genetic predisposition',
      'Dyslipidemia',
      'Obesity',
      'Smoking'
    ],
    diagnosticTests: [
      'HbA1c (glycemic control marker)',
      'Serum creatinine and eGFR',
      'Urine ACR (screens for microalbuminuria)',
      'Urinalysis (proteinuria, hematuria)',
      'Fasting glucose, lipid panel',
      'Blood pressure monitoring',
      'Renal ultrasound (assess kidney size; may show echogenic pattern)',
      'Renal biopsy (rarely needed; shows GBM thickening, nodular glomerulosclerosis)'
    ],
    treatment: 'Intensive glycemic control (individualized HbA1c target, usually <7% in non-pregnant adults) with metformin, sulfonylureas, or insulin. RAAS inhibition: ACE inhibitor or ARB is cornerstone (delays progression and reduces proteinuria). SGLT2 inhibitors (empagliflozin, dapagliflozin) reduce eGFR decline and cardiovascular events; GLP-1 agonists reduce progression and CV risk. Blood pressure control (<120 mmHg systolic recommended). Statin for cardiovascular risk reduction. Lifestyle: low-sodium diet, moderate protein intake, exercise, weight loss, smoking cessation.',
    treatmentRef: 'KDIGO 2024 CKD Guidelines; American Diabetes Association Standards of Care',
    keyPoints: [
      'Diabetes is the leading cause of ESRD; prevention is critical.',
      'Tight glycemic control prevents development and slows progression.',
      'ACE-I/ARB + SGLT2 inhibitor combination has synergistic renoprotective effect.',
      'Regular monitoring of eGFR and ACR is essential.',
      'Early intervention can prevent/delay progression to dialysis.'
    ],
    tags: ['Diabetes', 'Progressive', 'Preventable']
  },
  {
    name: 'Lupus Nephritis',
    slug: 'lupus-nephritis',
    icon: '🦋',
    summary: 'Kidney inflammation caused by systemic lupus erythematosus (SLE), presenting with proteinuria, hematuria, and declining kidney function.',
    pathophysiology: 'Immune complex deposition (anti-dsDNA, anti-nucleosome) in glomeruli activates complement cascade and triggers inflammation. WHO classification (I-VI) reflects histologic pattern: mesangial, focal proliferative, diffuse proliferative, membranous, mixed, or advanced sclerotic. Endocapillary proliferation, subendothelial deposits, and crescent formation predict worse outcomes.',
    pathophysiologyRef: 'Brenner & Rector\'s The Kidney; ACR Guidelines on Lupus Nephritis',
    signsSymptoms: [
      'Hematuria (RBC casts on urinalysis)',
      'Proteinuria (ranges from mild to nephrotic)',
      'Hypertension',
      'Rising serum creatinine',
      'Edema (if nephrotic syndrome)',
      'Systemic SLE symptoms: fever, arthritis, rash, photosensitivity',
      'Lupus activity flares'
    ],
    riskFactors: [
      'SLE diagnosis (50-60% of SLE patients develop nephritis)',
      'African American and Hispanic ethnicity',
      'Young age and female sex',
      'Poorly controlled SLE disease activity',
      'Inadequate immunosuppression'
    ],
    diagnosticTests: [
      'Serum creatinine and eGFR',
      'Urinalysis (RBC, WBC, RBC casts, proteinuria)',
      'Urine ACR or 24-hour urine protein',
      'Serum complement (C3, C4) - low in active lupus',
      'Anti-dsDNA and anti-nucleosome antibodies',
      'ANA, ESR, CRP',
      'Renal biopsy (gold standard; establishes WHO class and guides treatment)',
      'Renal ultrasound (assess kidney size, echogenicity)'
    ],
    treatment: 'Induction therapy (first 3-6 months) targets remission: corticosteroids (IV pulse methylprednisolone ± oral prednisone), cyclophosphamide or mycophenolate mofetil (MMF) are standard. Maintenance therapy: lower-dose corticosteroids + MMF, azathioprine, or calcineurin inhibitors. Supportive: ACE-I/ARB for renoprotection, blood pressure control, hydroxychloroquine for SLE. Newer agents: belimumab, voclosporin under investigation. Goal: achieve complete renal remission (CR) or partial remission (PR) to prevent progression to ESRD.',
    treatmentRef: 'ACR Guidelines on Lupus Nephritis; KDIGO Glomerulonephritis Guidelines',
    keyPoints: [
      'Lupus nephritis is a leading cause of SLE morbidity and mortality.',
      'Renal biopsy is essential for diagnosis and treatment planning.',
      'Early aggressive immunosuppression improves long-term kidney outcomes.',
      'Remission induction followed by maintenance therapy is standard approach.',
      'Close monitoring for flares and treatment-related toxicity is necessary.'
    ],
    tags: ['Autoimmune', 'Inflammatory', 'Progressive']
  },
  {
    name: 'Polycystic Kidney Disease (PKD)',
    slug: 'polycystic-kidney-disease',
    icon: '🫧',
    summary: 'Inherited kidney disease characterized by multiple kidney cysts leading to kidney enlargement and progressive renal failure.',
    pathophysiology: 'Autosomal Dominant PKD (ADPKD): mutations in PKD1 (chromosome 16) or PKD2 cause defects in polycystin-1 or -2 proteins, disrupting cell-cell interaction and cilia function. Results in uncontrolled cell proliferation, cyst formation, and progressive parenchymal replacement. Hypertension is early manifestation. Autosomal Recessive PKD (ARPKD): typically presents in childhood with more severe phenotype.',
    pathophysiologyRef: 'Guyton & Hall\'s Medical Physiology; JASN Review on PKD',
    signsSymptoms: [
      'Flank pain (cyst rupture, hemorrhage)',
      'Hematuria (spontaneous or post-trauma)',
      'Hypertension (often before renal function decline)',
      'Nephrolithiasis (kidney stones)',
      'Urinary tract infections',
      'Progressive decline in kidney function',
      'Headaches (associated cerebral aneurysms)',
      'Fatigue, nausea (uremia if advanced)'
    ],
    riskFactors: [
      'Family history (autosomal dominant inheritance)',
      'PKD1 mutation (accounts for ~85% ADPKD; worse prognosis)',
      'PKD2 mutation (~15%; slower progression)',
      'Early hypertension',
      'Large kidney volume at baseline',
      'Male sex'
    ],
    diagnosticTests: [
      'Renal ultrasound (gold standard; visualizes multiple bilateral cysts)',
      'CT or MRI (if ultrasound inconclusive; quantifies kidney volume)',
      'Serum creatinine and eGFR (assess kidney function)',
      'Blood pressure monitoring',
      'Urinalysis',
      'Genetic testing (PKD1, PKD2)',
      'Screening for cerebral aneurysms (MRA) if family history or symptoms',
      'Echocardiography (screen for mitral valve prolapse, aortic regurgitation)'
    ],
    treatment: 'No cure; management focuses on slowing progression and managing complications. (1) Blood pressure control: ACE-I/ARB preferred; target BP <110-120 mmHg. (2) Tolvaptan: vasopressin V2 antagonist shown to slow cyst growth and delay eGFR decline in early ADPKD (FDA-approved). (3) High water intake (maintain urine output >3L/day). (4) Pain management for cyst rupture. (5) Treatment of UTIs. (6) Screening and management of cerebral aneurysms. (7) Referral to nephrology as kidney function declines. (8) Transition to renal replacement therapy for ESRD.',
    treatmentRef: 'KDIGO PKD Guidelines; Tolvaptan Clinical Trials (TEMPO 3:4)',
    keyPoints: [
      'ADPKD is the most common inherited kidney disease.',
      'Early hypertension management is critical for renal survival.',
      'Kidney volume is prognostic; large volume = faster decline.',
      'Tolvaptan slows eGFR decline if started early (eGFR 25-65).',
      'Genetic counseling and family screening are important.'
    ],
    tags: ['Inherited', 'Progressive', 'Manageable']
  },
  {
    name: 'Glomerulonephritis (IgA Nephropathy)',
    slug: 'iga-nephropathy',
    icon: '🔬',
    summary: 'Most common primary glomerulonephritis worldwide; characterized by IgA immune complex deposition in the glomerulus.',
    pathophysiology: 'IgA-dominant immune complexes deposit in glomerular mesangium, activating complement (alternative pathway) and triggering inflammation. Segmental, proliferative changes on histology. Mesangial proliferation correlates with disease severity. Progression varies widely: some patients remain stable while others progress to ESRD. Secondary factors (proteinuria level, eGFR at diagnosis, blood pressure) influence outcomes.',
    pathophysiologyRef: 'Kidney International; Brenner & Rector\'s The Kidney Chapter on Glomerulonephritis',
    signsSymptoms: [
      'Episodic gross hematuria (often after URI)',
      'Persistent microscopic hematuria',
      'Proteinuria (variable; can be nephrotic)',
      'Hypertension',
      'Declining kidney function (variable pace)',
      'Abdominal pain (if extrarenal IgA vasculitis)',
      'Palpable purpura on lower extremities (IgA vasculitis)'
    ],
    riskFactors: [
      'Asian and Caucasian ancestry (higher incidence)',
      'Male sex (2:1 ratio)',
      'Family history of IgAN',
      'Infections (URI, GI)',
      'Liver disease (secondary IgAN)',
      'HIV infection'
    ],
    diagnosticTests: [
      'Urinalysis (RBC, RBC casts, proteinuria)',
      'Urine ACR or 24-hour urine protein (quantifies proteinuria)',
      'Serum creatinine and eGFR',
      'Blood pressure',
      'Serum IgA level (not diagnostic but may correlate with activity)',
      'Renal biopsy (gold standard; light microscopy shows proliferation; immunofluorescence shows IgA dominance)',
      'Kidney ultrasound (assess baseline size)'
    ],
    treatment: 'Supportive care is cornerstone: (1) Blood pressure control (target <120 mmHg systolic); ACE-I/ARB for renoprotection and proteinuria reduction. (2) SGLT2 inhibitors (evidence emerging). (3) Corticosteroids: oral prednisolone or IV pulse methylprednisolone for progressive disease; debate on which patients benefit. (4) Immunosuppression (mycophenolate mofetil, cyclophosphamide) considered for rapidly progressive or severe disease. (5) Fish oil (omega-3) may have modest benefit. (6) NSAIDs generally avoided. Goal: slow decline in eGFR and reduce proteinuria to <1 g/day.',
    treatmentRef: 'KDIGO Glomerulonephritis Guidelines; Kidney International Consensus Reports',
    keyPoints: [
      'IgAN is the most common primary GN globally.',
      'Clinical course is highly variable; biopsy helps prognosticate.',
      'Blood pressure and proteinuria control are most important modifiable factors.',
      'Indications for immunosuppression remain debated; individualize based on risk factors.',
      'Renal survival at 10 years is ~80% if treated, but ~50% without treatment.'
    ],
    tags: ['Glomerulonephritis', 'Variable', 'Primary']
  },
  {
    name: 'Acute Post-Infectious Glomerulonephritis',
    slug: 'post-infectious-glomerulonephritis',
    icon: '🦠',
    summary: 'Immune-mediated glomerular injury following bacterial infection; typically presents with hematuria and hypertension.',
    pathophysiology: 'Follows streptococcal (PSGN) or other bacterial infection. Immune complexes form and deposit in glomeruli, triggering complement-mediated inflammation. Subepithelial "humps" on electron microscopy are pathognomonic for PSGN. Most cases are self-limited; spontaneous resolution within weeks to months.',
    pathophysiologyRef: 'Guyton & Hall; UpToDate Nephrology Reviews',
    signsSymptoms: [
      'Gross hematuria (cola-colored urine)',
      'Hypertension (often first sign)',
      'Edema (periorbital and peripheral)',
      'Oliguria',
      'Rising serum creatinine',
      'Nausea, vomiting',
      'Fatigue',
      'Symptoms of preceding infection (pharyngitis, impetigo)'
    ],
    riskFactors: [
      'Recent bacterial infection (especially Group A Strep)',
      'Poor hygiene or sanitation',
      'Crowded living conditions',
      'Age 3-10 years (most common in children)',
      'Male sex'
    ],
    diagnosticTests: [
      'Urinalysis (RBC, RBC casts, proteinuria)',
      'Serum creatinine and eGFR',
      'Blood pressure monitoring',
      'ASO titer (Anti-streptolysin-O)',
      'Throat or skin culture (if infection still active)',
      'Complement levels (C3 low during acute phase)',
      'Renal biopsy (if atypical presentation or RPGN suspected)',
      'Kidney ultrasound (assess swelling)'
    ],
    treatment: 'Supportive care is primary; most cases resolve spontaneously. (1) Treat underlying infection: antibiotics (penicillin for strep). (2) Blood pressure management: antihypertensive agents if severely elevated (target individualized). (3) Fluid balance: diuretics if volume overload. (4) Electrolyte monitoring: hyperkalemia management. (5) Renal replacement therapy if ESRD develops. (6) Corticosteroids reserved for severe glomerulonephritis with RPGN features. Prognosis excellent in children; more variable in adults.',
    treatmentRef: 'Pediatric Nephrology Textbooks; KDIGO GN Guidelines',
    keyPoints: [
      'PSGN typically follows GAS pharyngitis or skin infection.',
      'Most cases resolve completely within 3-12 months.',
      'Hypertension and low C3 are typical findings.',
      'Prognosis is generally excellent, especially in children.',
      'Antibiotic treatment of underlying infection is essential.'
    ],
    tags: ['Post-infectious', 'Reversible', 'Acute']
  }
];
