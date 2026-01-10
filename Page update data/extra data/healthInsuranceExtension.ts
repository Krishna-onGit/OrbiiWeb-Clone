import { InsuranceProduct } from './insuranceProducts';

// Additional Health Insurance Pages - Part 1
export const healthInsuranceExtension: Record<string, InsuranceProduct> = {
  'opd-cover-health-insurance': {
    id: 'opd-cover-health-insurance',
    title: 'OPD Cover in Health Insurance',
    category: 'health',
    subtitle: 'Outpatient Department Coverage - Doctor Visits, Diagnostics, Medicines',
    description: 'OPD add-on covering doctor consultation, diagnostic tests, medicines without hospitalization. ₹5-10K annual limit on OPD expenses.',
    icon: 'Stethoscope',
    heroGradient: { from: 'green-500', to: 'blue-500' },
    stats: [
      { number: '₹5-15K', label: 'Annual OPD Limit' },
      { number: '₹1-2K', label: 'Add-on Premium' },
      { number: '100+', label: 'Covered Items' },
      { number: 'No Claim', label: 'Hassle-free' }
    ],
    keyPoints: [
      'OPD coverage: Doctor consultation, diagnostic tests, medicines, physiotherapy - no hospitalization needed',
      'Annual limit: ₹5-15K per year for all OPD expenses across family',
      'What is covered: GP/specialist consultation ₹500-1,500, Blood tests ₹1-3K, X-ray/ECG ₹500-2K',
      'Medicine reimbursement: Prescribed medicines ₹2-5K per illness, pharmacy bills',
      'Dental/optical: Some plans cover dental checkup ₹1K, spectacles ₹2K per year',
      'Health checkup: Annual preventive health checkup ₹2-5K included in OPD',
      'Premium cost: ₹1-2K add-on to base health policy. ₹10L health + ₹10K OPD = ₹1.5K extra',
      'Claim process: Submit bills, get reimbursement or cashless at network clinics'
    ],
    benefits: [
      { title: 'Everyday Coverage', description: 'Fever, cough, cold doctor visit ₹800 + medicines ₹1,200 = ₹2K. OPD cover reimburses all!' },
      { title: 'Diagnostic Tests', description: 'Diabetes checkup (₹1.5K), thyroid test (₹800), cholesterol (₹600) = ₹2.9K covered under OPD!' },
      { title: 'Preventive Care', description: 'Annual health checkup ₹5K included. Early disease detection saves lakhs in treatment later!' },
      { title: 'Family Benefit', description: '₹10K OPD for family of 4. Everyone gets ₹2.5K avg. Kids frequent doctor visits all covered!' },
      { title: 'Dental/Eye Care', description: 'Dental scaling ₹1K, spectacles ₹2.5K = ₹3.5K out-of-pocket. OPD cover pays!' },
      { title: 'Affordable Add-on', description: 'Only ₹1-2K extra premium. Use ₹5K OPD = 2.5x return. Break-even with 2-3 doctor visits!' }
    ],
    coverage: { min: '₹5,000/year', max: '₹15,000/year', premium: '₹1,000 - ₹3,000/year' },
    whyNeed: [
      { title: 'Frequent Visits', description: 'Average family: 8-12 doctor visits/year. ₹800/visit × 10 = ₹8K. OPD cover saves ₹6-7K annually!', amount: '₹6-8K saved' },
      { title: 'Preventive Tests', description: 'Diabetes, BP, cholesterol tests = ₹3-5K/year. OPD covers, prevents hospitalization later. Early detection!', amount: 'Prevent disease' },
      { title: 'Medicine Costs', description: 'Chronic medication (BP, diabetes) = ₹2-4K/month = ₹48K/year. Some OPD plans cover medicines!', amount: '₹24-48K annually' }
    ],
    faqs: [
      { question: 'Is OPD cover worth buying? What does it actually cover?', answer: 'WORTH IT IF: (1) Frequent doctor visits - kids, elderly, chronic conditions = 8+ visits/year, (2) Regular diagnostics - diabetes, BP monitoring = ₹3-5K tests/year, (3) Medicines - long-term medication = ₹2-3K/month. NOT WORTH IF: (1) Healthy family, rarely visit doctor = 2-3 visits/year only, (2) Low OPD limit vs premium - ₹5K limit, ₹2K premium = max benefit ₹3K, (3) Claim hassle vs amount - submitting bills for ₹500-1,000 reimbursement tedious. WHAT IS COVERED: Doctor consultation ₹500-1,500 per visit, Diagnostic tests (blood, urine, X-ray, ECG, ultrasound) ₹1-5K, Prescribed medicines ₹1-3K per illness, Physiotherapy sessions ₹500-1,000 per session, Dental (cleaning, filling) ₹1-2K, Optical (eye checkup, spectacles) ₹1-3K, Preventive health checkup ₹2-5K annually. EXCLUSIONS: Cosmetic treatments, Vitamins/supplements, Hospitalization costs (covered in base policy), Alternative medicine (ayurveda/homeopathy in some plans). COST-BENEFIT: Premium ₹1,500, Limit ₹10K. Use: 4 doctor visits (₹3.2K) + 2 tests (₹2.5K) + medicines (₹3K) + health checkup (₹4K) = ₹12.7K actual, claim ₹10K = ROI 6.7x!' }
    ],
    calculator: {
      inputs: [
        { name: 'familyMembers', label: 'Family Members', type: 'number' },
        { name: 'doctorVisits', label: 'Annual Doctor Visits', type: 'number' },
        { name: 'diagnosticTests', label: 'Annual Tests Count', type: 'number' }
      ],
      outputLabel: 'OPD Premium & Benefit'
    }
  },

  'mediclaim-policy': {
    id: 'mediclaim-policy',
    title: 'Mediclaim Policy',
    category: 'health',
    subtitle: 'Traditional Mediclaim - Hospitalization Expense Reimbursement',
    description: 'Classic mediclaim policy covering hospitalization costs, ICU charges, surgery, room rent. Cashless or reimbursement claim options.',
    icon: 'FileText',
    heroGradient: { from: 'blue-500', to: 'indigo-500' },
    stats: [
      { number: '₹3-25L', label: 'Sum Insured' },
      { number: '₹6-20K', label: 'Annual Premium' },
      { number: '9,000+', label: 'Network Hospitals' },
      { number: '24 Hours', label: 'Pre-hospitalization' }
    ],
    keyPoints: [
      'Hospitalization coverage: Room rent, ICU, surgery, doctor fees, medicines during admission',
      'Pre-post hospitalization: 30 days before + 60 days after admission covered',
      'Day care procedures: 150+ treatments not requiring 24hr stay - cataract, dialysis, chemotherapy',
      'Room rent limit: Standard (₹2K), single AC (₹5K), deluxe (₹10K) depending on plan',
      'Ambulance: Emergency ambulance ₹1,500-3,000 per hospitalization covered',
      'No claim bonus: 5-50% increase in sum insured for every claim-free year',
      'Waiting period: 30 days general, 2-4 years pre-existing diseases, 1-2 years specific illnesses',
      'Copayment: Some policies have 10-20% copay, others 100% coverage'
    ],
    benefits: [
      { title: 'Hospitalization Cover', description: 'Heart surgery ₹5L, kidney stone ₹1.5L, appendix ₹80K - all covered by mediclaim!' },
      { title: 'Cashless Treatment', description: 'Show health card, insurer pays hospital directly. Zero out-of-pocket in network hospitals!' },
      { title: 'Pre-Post Cover', description: 'Tests before (₹15K), medicines after (₹10K) = ₹25K covered 30 days before + 60 days after!' },
      { title: 'Day Care Benefits', description: 'Cataract surgery ₹40K, dialysis ₹5K/session - no 24hr stay needed, still covered!' },
      { title: 'NCB Advantage', description: 'No claim for 5 years? ₹5L becomes ₹10L (100% bonus). Free coverage increase!' },
      { title: 'Tax Savings', description: 'Premium ₹15K = ₹25K tax deduction under 80D. Save ₹7.8K tax (31% bracket)!' }
    ],
    coverage: { min: '₹1 Lakh', max: '₹50 Lakhs', premium: '₹3,000 - ₹25,000/year' },
    whyNeed: [
      { title: 'Medical Inflation', description: 'Hospital costs rising 15% annually. ICU ₹10K/day, surgery ₹3-10L. Mediclaim protects savings!', amount: '₹5-10L hospital bill' },
      { title: 'Emergency Cover', description: 'Accident, heart attack = ₹5-15L treatment. Without mediclaim = deplete FD, sell investments, take loan!', amount: 'Financial protection' },
      { title: 'Family Security', description: 'One hospitalization ₹8L can wipe out years of savings. Mediclaim ₹15K premium protects ₹10L corpus!', amount: 'Asset protection' }
    ],
    faqs: [
      { question: 'Mediclaim vs Health Insurance - is there any difference?', answer: 'NO DIFFERENCE - SAME THING! Mediclaim is the traditional term for health insurance in India. Insurance companies now call it "health insurance" or "family floater" but product is same. MEDICLAIM (Traditional): Individual policies, Fixed sum insured per person, Separate premium for each family member, COVERAGE: Hospitalization, pre-post 30-60 days, day care, ambulance. HEALTH INSURANCE (Modern): Family floater option, Shared sum insured for family, Single premium for all members, ADDITIONAL: OPD add-on, maternity, critical illness riders, restoration benefit. EXAMPLE: Traditional Mediclaim: Father ₹5L (₹8K), Mother ₹5L (₹10K), 2 Kids ₹3L each (₹4K each) = Total ₹16L coverage, ₹26K premium. Modern Family Floater: ₹10L shared for 4 members = ₹18K premium (saves ₹8K). WHICH TO BUY? Older term "mediclaim" no longer used. Buy "Family Floater Health Insurance" - modern, flexible, cheaper! Features same: hospitalization, cashless, NCB, pre-existing diseases after 2-4 years.' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'sumInsured', label: 'Coverage Required (₹ Lakhs)', type: 'number' },
        { name: 'familySize', label: 'Family Members', type: 'number' }
      ],
      outputLabel: 'Mediclaim Premium'
    }
  },

  'health-insurance-calculator': {
    id: 'health-insurance-calculator',
    title: 'Health Insurance Calculator',
    category: 'health',
    subtitle: 'Calculate Ideal Health Coverage & Premium Instantly',
    description: 'Free calculator to determine right health insurance coverage based on age, city, family size, medical history. Get instant premium quotes.',
    icon: 'Calculator',
    heroGradient: { from: 'purple-500', to: 'pink-500' },
    stats: [
      { number: 'Free', label: 'No Charges' },
      { number: '30 Seconds', label: 'Get Results' },
      { number: '15+ Insurers', label: 'Compare Quotes' },
      { number: 'Instant', label: 'Premium Estimate' }
    ],
    keyPoints: [
      'Coverage calculator: Based on age, city, dependents, chronic conditions - get ideal sum insured',
      'Premium estimate: Instant quotes from 15+ insurers - HDFC, Star, ICICI, Care, Max Bupa',
      'Age factor: 30 years ₹5L = ₹7K, 45 years ₹5L = ₹12K, 60 years ₹5L = ₹25K premium',
      'City impact: Tier-1 cities 30% higher premium vs tier-2. Mumbai ₹10K vs Indore ₹7K',
      'Sum insured guide: Tier-1 city = minimum ₹10L, Tier-2 = ₹5L, seniors = ₹5-10L',
      'Add-on calculator: Base ₹10L + maternity ₹2K + OPD ₹1.5K + critical illness ₹3K',
      'Family floater vs individual: Calculate premium difference, savings up to 30-40%',
      'Tax benefit: Premium ₹20K = ₹25K deduction under 80D = save ₹7,800 tax (31% bracket)'
    ],
    benefits: [
      { title: 'Right Coverage', description: 'Calculator suggests ₹10L for metro, ₹5L for tier-2. Avoid under-insurance (₹3L too low)!' },
      { title: 'Best Premium', description: 'Compare 15 insurers. Same ₹10L coverage: Star ₹12K vs Care ₹15K. Save ₹3K by comparing!' },
      { title: 'Add-on Selection', description: 'See premium impact: Base ₹10K + maternity ₹2K + OPD ₹1.5K. Choose what you need!' },
      { title: 'Family Savings', description: 'Individual: ₹8K+₹10K+₹4K+₹4K=₹26K. Floater: ₹10L shared = ₹18K. Save ₹8K!' },
      { title: 'Age Planning', description: 'See premium at age 40, 50, 60. Buy early! ₹10L: Age 30=₹7K, Age 50=₹18K, Age 60=₹30K!' },
      { title: 'Instant Quotes', description: 'Enter details once, get 15 quotes instantly. No agent calls, no spam, instant comparison!' }
    ],
    coverage: { min: 'Calculated', max: 'Based on Needs', premium: 'Instant Quote' },
    whyNeed: [
      { title: 'Right Amount', description: 'Most buy ₹3-5L which is insufficient. Calculator shows ₹10-15L needed for metro cities based on costs!', amount: 'Proper coverage' },
      { title: 'Save Money', description: 'Same coverage, premiums vary ₹3-5K across insurers. Calculator finds cheapest! Save ₹50K-₹1L over 20 years!', amount: '₹3-5K saved' },
      { title: 'Smart Planning', description: 'See premium at different ages, plan when to buy. Buy at 30 vs 40 = save ₹30K over 20 years!', amount: 'Long-term savings' }
    ],
    faqs: [
      { question: 'How to calculate how much health insurance coverage I need?', answer: 'CALCULATION METHOD: FACTOR 1 - CITY: Metro (Mumbai, Delhi, Bangalore) = ₹10-15L minimum, Tier-1 (Pune, Ahmedabad) = ₹7-10L, Tier-2 (Indore, Chandigarh) = ₹5-7L, Tier-3/rural = ₹3-5L. FACTOR 2 - AGE: Below 40 = city-based minimum, 40-50 = city minimum + 30% (₹10L → ₹13L), 50-60 = city minimum + 50% (₹10L → ₹15L), Above 60 = ₹5-10L super top-up if base exists. FACTOR 3 - FAMILY: Self + spouse + 2 kids = ₹10-15L floater, Parents separate = ₹5L each (₹10L total), Multi-generational = ₹20L+ total coverage. FACTOR 4 - MEDICAL HISTORY: Diabetes/BP/Heart = +50% coverage (₹10L → ₹15L), Cancer survivors = ₹15-20L minimum, Healthy family = standard city-based. FORMULA: Base (city) × Age multiplier × Medical history = Required Coverage. EXAMPLE: 35yo in Bangalore, diabetic: ₹12L (city) × 1.0 (age <40) × 1.5 (diabetes) = ₹18L recommended. PRACTICAL: ₹10L minimum for anyone in metro, ₹5L absolute minimum for tier-2 cities. ICU costs ₹10-15K/day, surgery ₹3-10L - need adequate cover!' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'city', label: 'City Type', type: 'select', options: ['Metro', 'Tier-1', 'Tier-2', 'Tier-3'] },
        { name: 'familyMembers', label: 'Family Size', type: 'number' },
        { name: 'medicalHistory', label: 'Medical Conditions', type: 'select', options: ['None', 'Diabetes/BP', 'Heart/Cancer'] }
      ],
      outputLabel: 'Recommended Coverage & Premium'
    }
  }
};
