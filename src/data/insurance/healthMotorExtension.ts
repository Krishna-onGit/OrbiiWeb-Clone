import { InsuranceProduct } from './insuranceProducts';

// Additional Health & Motor Insurance Pages
export const healthMotorExtension: Record<string, InsuranceProduct> = {
  'health-insurance-companies': {
    id: 'health-insurance-companies',
    title: 'Health Insurance Companies',
    category: 'health',
    subtitle: 'Top 20 Health Insurance Providers in India - Compare CSR, Features',
    description: 'Complete comparison of best health insurance companies - claim settlement ratio, network hospitals, premium rates, customer service.',
    icon: 'Building',
    heroGradient: { from: 'blue-600', to: 'cyan-600' },
    stats: [
      { number: '34', label: 'Health Insurers' },
      { number: '85-98%', label: 'CSR Range' },
      { number: '10,000+', label: 'Network Hospitals' },
      { number: '₹5-25K', label: 'Premium Range' }
    ],
    keyPoints: [
      'Top companies by CSR: Star Health 91%, HDFC Ergo 97%, ICICI Lombard 89%, Care Health 84%',
      'Network size: Star 14,000+, HDFC 10,000+, ICICI 9,000+, Max Bupa 7,000+ hospitals',
      'Specialty players: Star Health (only health), Care (healthcare focus), Religare',
      'General insurers: HDFC, ICICI, Bajaj, Reliance, TATA AIG with health vertical',
      'Standalone health: Star, Care, Manipal Cigna, Aditya Birla, Niva Bupa',
      'Public sector: National, United India, Oriental, New India - low CSR but cheaper',
      'Premium comparison: Same ₹10L coverage - Star ₹12K, HDFC ₹14K, ICICI ₹13K, Care ₹15K',
      'Best features: HDFC (comprehensive), Star (health focus), ICICI (claim speed), Care (wellness)'
    ],
    benefits: [
      { title: 'High CSR Selection', description: 'Star 91% vs National 70%. Higher CSR = better claim approval. Choose 85%+ CSR insurers!' },
      { title: 'Network Access', description: 'Star 14,000 hospitals vs smaller insurers 3,000. More network = easier cashless anywhere!' },
      { title: 'Premium Savings', description: 'Same ₹10L: Star ₹12K, Care ₹15K, ICICI ₹13K. Compare to save ₹2-3K annually!' },
      { title: 'Claim Speed', description: 'ICICI 3 days avg, HDFC 5 days, Star 7 days. Choose insurer with fast claim settlement!' },
      { title: 'Product Features', description: 'HDFC has restoration, Care has unlimited e-opinion. Feature comparison helps choose best!' },
      { title: 'Customer Service', description: 'Max Bupa personal RM, HDFC 24x7 helpline, Star health experts. Service matters in claims!' }
    ],
    coverage: { min: '₹1 Lakh', max: '₹1 Crore', premium: '₹3,000 - ₹50,000/year' },
    whyNeed: [
      { title: 'CSR Matters', description: 'Low CSR insurer = claim rejection risk. 70% CSR = 3 in 10 claims rejected! Choose 90%+ CSR!', amount: '90%+ CSR essential' },
      { title: 'Save Money', description: 'Premium difference ₹3K/year × 20 years = ₹60K savings! Compare before buying!', amount: 'Save ₹60K' },
      { title: 'Better Service', description: 'Claim time: Good insurer 3-5 days vs bad insurer 30+ days. Choose reputed company!', amount: 'Fast claims' }
    ],
    faqs: [
      { question: 'Which is the best health insurance company in India?', answer: 'TOP 5 BY CLAIM SETTLEMENT RATIO: (1) HDFC ERGO - 97% CSR, 10,000+ hospitals, comprehensive plans, fast claims, ₹10L = ₹14K, BEST FOR: Overall value + trust. (2) STAR HEALTH - 91% CSR, 14,000+ hospitals, ONLY health insurer (no other lines), ₹10L = ₹12K, BEST FOR: Largest network + focus. (3) ICICI LOMBARD - 89% CSR, 9,000+ hospitals, quick claim settlement, wellness programs, ₹10L = ₹13K, BEST FOR: Claim speed + digitalization. (4) CARE HEALTH - 84% CSR, 7,000+ hospitals, innovative features, unlimited e-consult, ₹10L = ₹15K, BEST FOR: Value-added services. (5) MAX BUPA - 85% CSR, 7,000+ hospitals, personal relationship manager, premium service, ₹10L = ₹16K, BEST FOR: Personalized service. VERDICT: HDFC Ergo or Star Health for most people. ICICI for tech-savvy. Care for extra benefits. AVOID: National, United, Oriental (70-75% CSR = 1 in 4 claims rejected!)' }
    ],
    calculator: {
      inputs: [
        { name: 'coverage', label: 'Sum Insured (₹ Lakhs)', type: 'number' },
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'city', label: 'City', type: 'text' }
      ],
      outputLabel: 'Compare Top 5 Insurers'
    }
  },

  'types-of-health-insurance': {
    id: 'types-of-health-insurance',
    title: 'Types of Health Insurance',
    category: 'health',
    subtitle: 'Complete Guide to All Health Insurance Plan Types',
    description: 'Individual, family floater, senior citizen, critical illness, top-up, maternity - understand all health insurance types and choose right one.',
    icon: 'List',
    heroGradient: { from: 'green-600', to: 'blue-600' },
    stats: [
      { number: '10+', label: 'Plan Types' },
      { number: '₹3K-₹50K', label: 'Premium Range' },
      { number: 'All Ages', label: 'Coverage Available' },
      { number: 'Custom', label: 'Combinations' }
    ],
    keyPoints: [
      'Individual health: One person covered, ₹5-10L sum insured, ₹6-15K premium',
      'Family floater: Shared sum insured for family, ₹10-25L, cheaper than individual',
      'Senior citizen: Ages 60+, ₹3-10L coverage, ₹20-40K premium due to age',
      'Critical illness: Lump sum on cancer, heart attack, stroke - ₹10-50L, ₹5-15K',
      'Top-up/Super top-up: Additional coverage above base, ₹10L top-up on ₹5L base = ₹2-3K',
      'Maternity insurance: Pregnancy, delivery, newborn - ₹50K-₹2L coverage, ₹2-5K extra',
      'Group health: Employer-provided, ₹3-5L usually, supplement with personal ₹5-10L',
      'Disease-specific: Diabetes, cancer plans with focused coverage'
    ],
    benefits: [
      { title: 'Right Plan Selection', description: 'Young family? Family floater ₹10L = ₹18K. Individual ₹5L each × 4 = ₹30K. Save ₹12K!' },
      { title: 'Comprehensive Cover', description: 'Base ₹10L + Critical illness ₹20L + Top-up ₹20L = ₹50L total at ₹25K vs ₹50L individual ₹45K!' },
      { title: 'Age-appropriate', description: 'Parents 65+ need senior citizen plan ₹5L. Regular plan denies or charges ₹50K, senior plan ₹25K!' },
      { title: 'Lifecycle Planning', description: 'Age 30: Individual ₹10L. Age 35: Family floater ₹15L. Age 45: Add top-up ₹20L. Age 60: Senior citizen!' },
      { title: 'Cost Optimization', description: 'Base ₹5L (₹7K) + Super top-up ₹15L (₹3K) = ₹20L at ₹10K vs ₹20L individual ₹18K!' },
      { title: 'Specific Needs', description: 'Planning baby? Add maternity ₹2K. Diabetic? Get disease-specific ₹5K. Customize coverage!' }
    ],
    coverage: { min: '₹1 Lakh', max: '₹1 Crore', premium: '₹3,000 - ₹50,000/year' },
    whyNeed: [
      { title: 'Optimal Coverage', description: 'Wrong plan type = overpay or under-insured. Family floater saves ₹10K vs individual but right choice depends!', amount: 'Save ₹5-10K' },
      { title: 'Comprehensive', description: 'Single plan cannot cover all. Base + critical illness + top-up = complete protection at 40% lower cost!', amount: '40% cheaper' },
      { title: 'Life Stages', description: 'Plan type changes with age/family. Young: individual. Family: floater. Senior: specific plans. Choose right!', amount: 'Lifecycle fit' }
    ],
    faqs: [
      { question: 'Family floater vs Individual - which type of health insurance is better?', answer: 'FAMILY FLOATER: Coverage: Shared sum insured (₹10L for all members), Premium: Single ₹18K for 4 members, Claim: Any member can use full ₹10L, Advantage: 40% cheaper than individual, Disadvantage: One big claim exhausts coverage, Best for: Young families (kids <18), healthy members. INDIVIDUAL: Coverage: Separate ₹5L each person, Premium: ₹8K+₹10K+₹4K+₹4K = ₹26K for 4, Claim: Each has dedicated ₹5L, Advantage: Multiple claims possible, Disadvantage: Higher premium, Best for: Older members, high claim risk. EXAMPLE: Family: Self 35, spouse 33, kids 5 & 3. Floater ₹15L = ₹22K vs Individual ₹5L each = ₹30K. Save ₹8K. CRITICAL: Parents 60+ should have SEPARATE individual policy, not in family floater (premium becomes very high). RECOMMENDATION: Young couple + kids = Floater ₹10-15L. Add parents separately ₹5L each. Total: Floater ₹18K + Parents ₹20K+₹25K = ₹63K vs all individual ₹90K!' }
    ],
    calculator: {
      inputs: [
        { name: 'planType', label: 'Plan Type', type: 'select', options: ['Individual', 'Family Floater', 'Senior Citizen', 'Critical Illness', 'Top-up'] },
        { name: 'coverage', label: 'Sum Insured (₹ Lakhs)', type: 'number' },
        { name: 'age', label: 'Age', type: 'number' }
      ],
      outputLabel: 'Premium Estimate'
    }
  },

  'health-insurance-nri': {
    id: 'health-insurance-nri',
    title: 'Health Insurance for NRIs',
    category: 'health',
    subtitle: 'NRI Health Insurance - India Coverage During Visits',
    description: 'Special health insurance for NRIs covering treatment in India during visits. Buy online from abroad, get instant policy.',
    icon: 'Plane',
    heroGradient: { from: 'orange-500', to: 'red-500' },
    stats: [
      { number: '₹5-25L', label: 'Sum Insured' },
      { number: '₹8-20K', label: 'Annual Premium' },
      { number: '100% Online', label: 'Purchase Process' },
      { number: '9,000+', label: 'Network Hospitals' }
    ],
    keyPoints: [
      'NRI health plans: Coverage in India during visits, emergency medical treatment',
      'Purchase from abroad: Buy online from USA, UAE, UK - no India visit needed',
      'Payment options: International credit card, NRE/NRO account, wire transfer',
      'Coverage period: Valid in India only, not for treatment in USA/UAE',
      'Pre-existing waiting: 2-4 years like regular plans for diabetes, BP, heart',
      'Emergency cover: Immediate coverage for accidents, 30-day waiting for illness',
      'OCI/PIO eligible: All NRI categories including OCI cardholders can buy',
      'Portability: Can port to regular plan if returning to India permanently'
    ],
    benefits: [
      { title: 'India Coverage', description: 'Visiting India, fall sick. ₹3L hospitalization covered. Without NRI plan = pay from pocket!' },
      { title: 'Emergency Protection', description: 'Accident in India needs ₹5L surgery. NRI health insurance covers, regular travel insurance does not!' },
      { title: 'Family Coverage', description: 'NRI floater for family: Self + spouse + kids covered during India visits. ₹15L shared!' },
      { title: 'Remote Purchase', description: 'Buy from USA, get instant e-policy. No agent meeting, no India visit. 100% online!' },
      { title: 'Affordable', description: 'NRI health ₹10L = ₹12K. USA insurance $5K (₹4L) for India visit. 95% cheaper!' },
      { title: 'Portability Option', description: 'Returning permanently? Port NRI policy to regular health plan without fresh waiting period!' }
    ],
    coverage: { min: '₹3 Lakhs', max: '₹50 Lakhs', premium: '₹8,000 - ₹25,000/year' },
    whyNeed: [
      { title: 'India Visit Risk', description: 'NRIs visit India annually. Medical emergency ₹5-10L without insurance = deplete savings!', amount: '₹5-10L protection' },
      { title: 'Travel Insurance Gap', description: 'Travel insurance covers 30-90 days only. NRI health covers full year, unlimited India stays!', amount: 'Year-round cover' },
      { title: 'Elderly Parents', description: 'Parents in India on NRI policy during visits. Emergency when NRI child visits = all covered!', amount: 'Parent protection' }
    ],
    faqs: [
      { question: 'NRI Health Insurance vs Travel Insurance - which should NRIs buy?', answer: 'NRI HEALTH INSURANCE: Coverage: Treatment in INDIA only (during visits), Duration: Annual policy, valid 365 days, Usage: Unlimited visits to India, Premium: ₹10L = ₹12-15K/year, Best for: NRIs visiting India frequently (2-3 times/year), Covers: Hospitalization in India, pre-existing after waiting, Claims: Cashless in 9,000+ hospitals. TRAVEL INSURANCE: Coverage: Treatment ABROAD (outside home country), Duration: Per trip (15-180 days), Usage: Single trip, Premium: ₹50K coverage = ₹500-1,000 per trip, Best for: NRIs visiting India once yearly, short duration, Covers: Emergency medical, trip cancellation, baggage, Claims: Reimbursement, not cashless usually. DO NRIs NEED BOTH? YES! Travel insurance for flight to India (trip coverage), NRI health for treatment in India (medical coverage). CANNOT use USA health insurance in India, CANNOT use NRI health insurance in USA! RECOMMENDATION: (1) NRIs visiting India 2+ times/year = NRI health insurance ₹10L mandatory, (2) Single annual India trip = Travel insurance sufficient, (3) Elderly NRIs frequent travelers = Both (travel for journey + NRI health for stay)!' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'coverage', label: 'Sum Insured (₹ Lakhs)', type: 'number' },
        { name: 'familySize', label: 'Family Members', type: 'number' }
      ],
      outputLabel: 'NRI Health Premium'
    }
  },

  'bike-insurance-calculator': {
    id: 'bike-insurance-calculator',
    title: 'Bike Insurance Calculator',
    category: 'motor',
    subtitle: 'Two-Wheeler Insurance Premium Calculator - Instant Quote',
    description: 'Calculate bike insurance premium online. Enter bike details, get instant quotes from top insurers. Compare comprehensive vs third-party.',
    icon: 'Calculator',
    heroGradient: { from: 'orange-600', to: 'red-600' },
    stats: [
      { number: 'Free', label: 'No Charges' },
      { number: '30 Seconds', label: 'Get Quote' },
      { number: '10+ Insurers', label: 'Compare' },
      { number: 'Instant', label: 'Policy Purchase' }
    ],
    keyPoints: [
      'IDV calculation: Current bike market value determines premium. ₹80K bike = ₹3.5K comprehensive',
      'Third-party premium: Fixed by IRDAI based on CC. 150cc = ₹1,500, 350cc+ = ₹2,500',
      'NCB benefit: No claim bonus 20-50% discount shown. 50% NCB = ₹4K becomes ₹2K!',
      'Add-on pricing: Zero dep +₹800, engine protect +₹500, RSA +₹300 calculated',
      'City impact: Metro cities 10-15% higher than tier-2. Mumbai ₹4K vs Indore ₹3.5K',
      'Age depreciation: 1 year old 5% less IDV, 2 years 10% less, affects premium',
      'Instant comparison: See premium from Bajaj, HDFC, ICICI, Digit, Acko side-by-side',
      'Buy online: Choose insurer, pay, get instant policy in 5 minutes'
    ],
    benefits: [
      { title: 'Accurate Premium', description: 'Know exact premium before buying. ₹3.5K or ₹4.8K? Calculator shows precise amount!' },
      { title: 'Compare Insurers', description: 'Same bike, same coverage: Bajaj ₹3.2K vs HDFC ₹3.8K. Choose cheaper, save ₹600!' },
      { title: 'Add-on Cost', description: 'See add-on impact: Base ₹3K + zero dep ₹800 + engine ₹500 = ₹4.3K. Decide if worth it!' },
      { title: 'NCB Planning', description: 'Calculator shows: Claim now = lose ₹1.5K NCB. Small repair ₹2K? Pay yourself, keep NCB!' },
      { title: 'Third-party vs Comprehensive', description: 'Calculator shows: TP ₹1.5K, Comprehensive ₹3.5K. ₹2K difference for ₹60K bike protection!' },
      { title: 'Instant Purchase', description: 'Calculate, compare, buy instantly online. Bike number → quote → pay → policy in 3 minutes!' }
    ],
    coverage: { min: 'Third-party', max: 'Comprehensive + Add-ons', premium: '₹500 - ₹8,000/year' },
    whyNeed: [
      { title: 'Avoid Overpay', description: 'Agent quotes ₹5K, calculator shows ₹3.5K online. Save ₹1,500 by calculating yourself!', amount: 'Save ₹1.5K' },
      { title: 'Right Coverage', description: 'Calculator compares TP vs comprehensive. Old bike ₹20K? TP sufficient. New ₹80K? Comprehensive!', amount: 'Smart choice' },
      { title: 'Compare & Save', description: 'Premium varies ₹500-1,000 across insurers. Calculator finds cheapest. Save ₹10K over 10 years!', amount: 'Long-term savings' }
    ],
    faqs: [
      { question: 'How is bike insurance premium calculated? What factors affect the cost?', answer: 'PREMIUM CALCULATION FORMULA: THIRD-PARTY: Fixed by IRDAI based on CC. 75-150cc = ₹1,500, 150-350cc = ₹2,000, 350cc+ = ₹2,500. COMPREHENSIVE = Third-party + Own Damage premium. OWN DAMAGE FACTORS: (1) IDV (Bike Value): ₹80K bike = 3-4% premium = ₹2,400-3,200 OD, ₹40K bike = ₹1,200-1,600 OD. (2) BIKE AGE: New = higher IDV, higher premium. 5 year old = 25% less IDV, 25% less premium! (3) CITY: Mumbai/Delhi 15% higher than Tier-2. Theft/accident risk higher in metros. (4) NCB DISCOUNT: 1st year claim-free = 20% off, 5th year = 50% off. ₹4K → ₹2K with 50% NCB! (5) CC (Engine): Higher CC = higher premium. 100cc ₹3K vs 500cc ₹6K comprehensive. (6) ADD-ONS: Zero dep +₹800, Engine protect +₹500, RSA +₹300, Consumables +₹400. EXAMPLE: 2-year-old 150cc bike, IDV ₹60K, Mumbai, 20% NCB: TP = ₹2,000, OD = (₹60K × 3.5% = ₹2,100) - 20% NCB = ₹1,680, Personal Accident = ₹750, TOTAL = ₹4,430 comprehensive.' }
    ],
    calculator: {
      inputs: [
        { name: 'bikeNumber', label: 'Bike Registration Number', type: 'text' },
        { name: 'coverType', label: 'Coverage Type', type: 'select', options: ['Third-party', 'Comprehensive'] }
      ],
      outputLabel: 'Instant Premium Quote'
    }
  },

  'car-insurance-companies': {
    id: 'car-insurance-companies',
    title: 'Car Insurance Companies',
    category: 'motor',
    subtitle: 'Top Motor Insurance Providers - CSR, Network, Premium Comparison',
    description: 'Compare best car insurance companies in India. Claim settlement ratio, garage network, premium rates, customer reviews.',
    icon: 'Building2',
    heroGradient: { from: 'blue-600', to: 'purple-600' },
    stats: [
      { number: '25+', label: 'Insurers' },
      { number: '80-95%', label: 'CSR Range' },
      { number: '5,000+', label: 'Garages' },
      { number: '₹8-25K', label: 'Premium Range' }
    ],
    keyPoints: [
      'Top by CSR: HDFC Ergo 95%, ICICI Lombard 93%, Bajaj Allianz 87%, Digit 88%',
      'Network garages: ICICI 9,000+, HDFC 8,000+, Bajaj 7,000+, Digit 5,000+',
      'Digital-first: Digit, Acko - 100% online, instant policy, claim via app',
      'Traditional strong: HDFC, ICICI, Bajaj - established, large network',
      'Public sector: National, United, Oriental - cheapest but low CSR (70-75%)',
      'Premium comparison: ₹10L car - HDFC ₹12K, ICICI ₹11K, Bajaj ₹13K, Acko ₹10K',
      'Claim speed: Acko 30 mins, Digit 2 hours, ICICI 1 day, HDFC 2 days',
      'Best features: HDFC (comprehensive), Digit (tech), Acko (price), ICICI (network)'
    ],
    benefits: [
      { title: 'High CSR Trust', description: 'HDFC 95% vs National 70%. Higher CSR = 95% claims approved vs 70%. Choose wisely!' },
      { title: 'Network Access', description: 'ICICI 9,000 garages vs small insurer 2,000. More garages = cashless anywhere!' },
      { title: 'Premium Savings', description: 'Same ₹10L car: Acko ₹10K, HDFC ₹12K, Bajaj ₹13K. Compare to save ₹2-3K!' },
      { title: 'Quick Claims', description: 'Acko 30 min approval, Digit 2 hours, traditional 2 days. Digital insurers faster!' },
      { title: 'Online Convenience', description: 'Digit, Acko 100% online. Buy, renew, claim via app. No paperwork, no agent!' },
      { title: 'Add-on Variety', description: 'HDFC 15 add-ons, ICICI 12, Digit 10. More options = better customization!' }
    ],
    coverage: { min: '₹1 Lakh', max: 'Unlimited', premium: '₹5,000 - ₹30,000/year' },
    whyNeed: [
      { title: 'CSR Critical', description: 'Low CSR = claim rejection risk. 70% CSR = 3 in 10 claims rejected! Choose 90%+ CSR!', amount: '90%+ essential' },
      { title: 'Save Money', description: 'Premium varies ₹2-3K for same car/coverage. Choose cheaper, save ₹30-50K over 15 years!', amount: '₹2-3K saved' },
      { title: 'Claim Speed', description: 'Car damaged, need repair. Fast insurer approves in hours, slow takes days. Choose fast!', amount: 'Same day claims' }
    ],
    faqs: [
      { question: 'Which car insurance company is best in India? Top 5 comparison.', answer: 'TOP 5 CAR INSURERS: (1) HDFC ERGO: CSR 95% (highest), 8,000+ garages, Comprehensive features, ₹10L car = ₹12K, BEST FOR: Overall trust + features. (2) ICICI LOMBARD: CSR 93%, 9,000+ garages (largest network), Quick claim settlement, ₹10L car = ₹11K, BEST FOR: Pan-India coverage. (3) BAJAJ ALLIANZ: CSR 87%, 7,000+ garages, Good for renewals (loyalty discount), ₹10L car = ₹13K, BEST FOR: Long-term customers. (4) DIGIT INSURANCE: CSR 88%, 5,000+ garages, 100% online, app-based claims, ₹10L car = ₹10.5K, BEST FOR: Digital-savvy users. (5) ACKO INSURANCE: CSR 85%, 3,000+ garages, Cheapest premium, 30-min claim approval, ₹10L car = ₹10K, BEST FOR: Budget buyers + online purchase. AVOID: National, United, Oriental (CSR 70-75% = high rejection risk). VERDICT: HDFC/ICICI for reliability, Digit/Acko for price + convenience!' }
    ],
    calculator: {
      inputs: [
        { name: 'carValue', label: 'Car IDV (₹ Lakhs)', type: 'number' },
        { name: 'city', label: 'City', type: 'text' }
      ],
      outputLabel: 'Compare Top 5 Quotes'
    }
  }
};
