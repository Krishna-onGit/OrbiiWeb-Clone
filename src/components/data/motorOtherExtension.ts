import { InsuranceProduct } from './insuranceProducts';

// Motor & Other Insurance Extension Pages
export const motorOtherExtension: Record<string, InsuranceProduct> = {
  'pay-as-you-drive-insurance': {
    id: 'pay-as-you-drive-insurance',
    title: 'Pay As You Drive Insurance',
    category: 'motor',
    subtitle: 'Usage-Based Car Insurance - Pay for KMs Driven',
    description: 'Innovative pay-per-use car insurance. Drive less, pay less. OD premium based on actual kilometers driven. Save up to 40%.',
    icon: 'Gauge',
    heroGradient: { from: 'green-600', to: 'teal-600' },
    stats: [
      { number: 'Up to 40%', label: 'Discount' },
      { number: '₹5-15K', label: 'Annual Premium' },
      { number: 'GPS Tracker', label: 'KM Monitoring' },
      { number: 'Flexible', label: 'Top-up KMs' }
    ],
    keyPoints: [
      'Usage-based pricing: Pay OD premium based on actual KMs driven per year',
      'Fixed third-party: TP premium fixed ₹2,000-3,000, only OD varies by usage',
      'KM slabs: 2,500 KM (₹5K), 5,000 KM (₹8K), 7,500 KM (₹10K), unlimited (₹15K)',
      'GPS device: Insurer installs tracker to monitor actual KMs, automatic billing',
      'Top-up option: Bought 5,000 KM, drove 6,000? Pay ₹500 for extra 1,000 KM',
      'Ideal for: WFH professionals, multiple car owners, city drivers (short distances)',
      'Providers: Bajaj Allianz, ICICI Lombard, Digit - limited but growing',
      'Savings: Drive 3,000 KM vs average 10,000 KM = save 30-40% premium'
    ],
    benefits: [
      { title: 'Huge Savings', description: 'WFH, drive 3,000 KM/year. Pay ₹6K vs regular ₹12K comprehensive. Save ₹6K annually!' },
      { title: 'Fair Pricing', description: 'Why pay same premium as someone driving 15,000 KM when you drive 5,000 KM? Pay-per-use is fair!' },
      { title: 'Flexibility', description: 'Chose 5,000 KM plan. Drove 6,500 KM? Pay ₹500 extra. No penalties, just top-up!' },
      { title: 'Multiple Cars', description: 'Have 2 cars, use only on weekends? PAYD for second car saves ₹4-5K vs regular insurance!' },
      { title: 'Environment Benefit', description: 'Drive less = lower emissions. Get discount + help planet. Win-win!' },
      { title: 'No Hidden Costs', description: 'TP + Personal Accident same. Only OD varies. Transparent pricing, clear savings!' }
    ],
    coverage: { min: '2,500 KM', max: 'Unlimited', premium: '₹5,000 - ₹15,000/year' },
    whyNeed: [
      { title: 'Low Usage', description: 'Drive <5,000 KM/year? Regular insurance ₹12K overpayment. PAYD ₹7K = save ₹5K!', amount: 'Save ₹5K' },
      { title: 'WFH Savings', description: 'Post-COVID WFH = drive 60% less. Regular premium same. PAYD adjusts, saves 30-40%!', amount: '40% discount' },
      { title: 'Second Car', description: 'Weekend car drives 2,000 KM/year. Why pay ₹12K? PAYD ₹5K sufficient!', amount: '₹7K saved' }
    ],
    faqs: [
      { question: 'How does pay-as-you-drive car insurance work? Is it worth it?', answer: 'HOW IT WORKS: (1) GPS DEVICE: Insurer installs OBD device in car (plugs into dashboard port), tracks KMs driven. (2) KM SELECTION: Choose annual KM slab - 2,500/5,000/7,500/10,000/unlimited. (3) PREMIUM: Third-party ₹2,000 + Personal Accident ₹750 = ₹2,750 FIXED. Own Damage varies: 2,500 KM = ₹3K, 5,000 KM = ₹5K, 10,000 KM = ₹10K. (4) MONITORING: Device sends KM data monthly to insurer, premium calculated based on usage. (5) TOP-UP: Exceeded chosen KMs? Pay per additional KM (₹0.50-1/KM) or upgrade slab. WORTH IT? YES if: Drive <5,000 KM/year (WFH, retired, multiple cars, city usage), Save 30-40% vs regular comprehensive (₹12K → ₹7K), Have second/weekend car rarely used. NOT WORTH if: Drive >10,000 KM/year (regular cheaper), Privacy concern (GPS tracking), Want maximum coverage (unlimited better). EXAMPLE: ₹10L car, drive 4,000 KM: Regular: TP ₹2K + OD ₹10K + PA ₹750 = ₹12,750. PAYD: TP ₹2K + OD ₹5K (5,000 KM slab) + PA ₹750 = ₹7,750. SAVINGS: ₹5K/year = ₹50K over 10 years!' }
    ],
    calculator: {
      inputs: [
        { name: 'annualKM', label: 'Estimated Annual KM', type: 'number' },
        { name: 'carValue', label: 'Car IDV (₹ Lakhs)', type: 'number' }
      ],
      outputLabel: 'PAYD Premium Estimate'
    }
  },

  'electric-car-insurance': {
    id: 'electric-car-insurance',
    title: 'Electric Car Insurance',
    category: 'motor',
    subtitle: 'EV Insurance - Battery, Charger, Motor Coverage',
    description: 'Specialized insurance for electric vehicles covering battery damage, charging equipment, motor, fire. Lower premium than petrol cars.',
    icon: 'Zap',
    heroGradient: { from: 'yellow-500', to: 'green-500' },
    stats: [
      { number: '15-20%', label: 'Cheaper Premium' },
      { number: '₹8-18K', label: 'Annual Cost' },
      { number: '100%', label: 'Battery Cover' },
      { number: '₹50L+', label: 'Third Party' }
    ],
    keyPoints: [
      'Battery coverage: Lithium-ion battery (₹3-8L) covered for damage, fire, explosion',
      'Motor protection: Electric motor, controller, inverter damage covered',
      'Charger included: Home charger ₹30K-₹1L, portable charger covered in policy',
      'Fire risk: Battery fire, charging fire, electrical short circuit covered',
      'Lower premium: EV 15-20% cheaper than petrol. ₹15L Nexon EV ₹10K vs petrol ₹12K',
      'Government support: Some states offer 15% discount on EV insurance',
      'Roadside assistance: EV-specific RSA - mobile charging, towing to charge station',
      'Depreciation: Battery depreciation calculated separately from vehicle'
    ],
    benefits: [
      { title: 'Battery Protection', description: 'Battery costs ₹5L (50% of car cost). Damage/fire? Full coverage under EV insurance!' },
      { title: 'Cheaper Premium', description: 'EV ₹15L car = ₹10K premium vs petrol ₹15L = ₹12K. Save ₹2K due to lower risk!' },
      { title: 'Charger Coverage', description: 'Home charger ₹60K damaged in fire. Replacement covered! Not in regular car insurance!' },
      { title: 'Tech Damage', description: 'Motor, inverter, controller worth ₹2-3L covered. Regular insurance covers only mechanical!' },
      { title: 'Government Discount', description: 'Delhi, Maharashtra offer extra 15% discount on EV insurance. ₹10K → ₹8.5K!' },
      { title: 'EV Roadside', description: 'Battery dead mid-route? EV RSA sends mobile charger or tows to nearby charging station!' }
    ],
    coverage: { min: '₹5 Lakhs', max: '₹50 Lakhs', premium: '₹5,000 - ₹20,000/year' },
    whyNeed: [
      { title: 'Battery Value', description: 'Battery = 40-50% of EV cost (₹3-8L). Without coverage = pay ₹5L for replacement!', amount: '₹5L protected' },
      { title: 'Fire Risk', description: 'EV battery fires rare but expensive. Ola S1 Pro fires = total loss ₹1.3L. Insurance covers!', amount: 'Fire coverage' },
      { title: 'Savings', description: 'EV insurance 20% cheaper than petrol. ₹2K saved annually = ₹30K over 15 years!', amount: 'Save ₹2K/year' }
    ],
    faqs: [
      { question: 'Is electric car insurance different from normal car insurance? What extra is covered?', answer: 'KEY DIFFERENCES: BATTERY COVERAGE: Normal: Engine covered. EV: Battery pack (₹3-8L) covered for damage, fire, explosion, water ingress. Battery replacement due to damage = fully covered! MOTOR & ELECTRONICS: Normal: Mechanical parts. EV: Electric motor, inverter, controller, BMS (Battery Management System), charging port, cables. CHARGING EQUIPMENT: Normal: NA. EV: Home charger (₹50K-₹1L), portable charger, charging cables covered for theft/damage. FIRE RISK: Normal: Petrol fire. EV: Battery thermal runaway, charging fire, electrical fire - separate coverage. DEPRECIATION: Normal: Standard depreciation. EV: Battery depreciation separate (degrades 2-3% annually), calculated differently. PREMIUM: EV 15-20% CHEAPER! ₹15L Nexon EV = ₹10K vs ₹15L Nexon Petrol = ₹12K. Lower accident risk, govt incentive. ROADSIDE ASSISTANCE: Normal: Towing, fuel delivery. EV: Mobile charging van, towing to charge station, emergency battery swap. EXAMPLE CLAIM: Nexon EV battery damaged in accident. Battery cost ₹5L, motor ₹1.5L = ₹6.5L claim. Regular car insurance would not cover battery separately!' }
    ],
    calculator: {
      inputs: [
        { name: 'carModel', label: 'EV Model', type: 'select', options: ['Tata Nexon EV', 'MG ZS EV', 'Hyundai Kona', 'BYD e6'] },
        { name: 'batteryValue', label: 'Battery Value (₹ Lakhs)', type: 'number' }
      ],
      outputLabel: 'EV Insurance Premium'
    }
  },

  'e-bike-insurance': {
    id: 'e-bike-insurance',
    title: 'E-Bike Insurance',
    category: 'motor',
    subtitle: 'Electric Scooter/Bike Insurance - Battery & Motor Coverage',
    description: 'Electric two-wheeler insurance for Ola S1, Ather, TVS iQube. Battery, motor, charger covered. Mandatory third-party included.',
    icon: 'Zap',
    heroGradient: { from: 'purple-500', to: 'pink-500' },
    stats: [
      { number: '₹1.5-4K', label: 'Annual Premium' },
      { number: '₹15L', label: 'Third Party' },
      { number: '100%', label: 'Battery Cover' },
      { number: '₹1-3L', label: 'IDV Range' }
    ],
    keyPoints: [
      'Mandatory coverage: Third-party ₹1,000-1,500 mandatory for all e-bikes',
      'Battery protection: Lithium battery (₹30-60K) covered for damage, fire, degradation',
      'Comprehensive add-on: Own damage ₹1,500-3,000 extra for ₹1L e-bike',
      'Charger included: Portable charger ₹5-10K covered in comprehensive plan',
      'Lower premium: E-bike ₹1L = ₹3K vs petrol bike ₹1L = ₹4.5K comprehensive',
      'Fire coverage: Battery fire (Ola S1 fire incidents) covered under policy',
      'Popular models: Ola S1/S1 Pro, Ather 450X/S, TVS iQube, Bajaj Chetak',
      'Government benefit: Some states give 10-15% discount on EV insurance'
    ],
    benefits: [
      { title: 'Battery Safety', description: 'Battery costs ₹40K (40% of bike). Fire/damage? Replacement covered under insurance!' },
      { title: 'Mandatory Compliance', description: 'TP mandatory by law. ₹2K fine if caught without. ₹1.5K premium avoids penalty!' },
      { title: 'Fire Protection', description: 'Ola S1 Pro fire cases = total loss ₹1.3L. Comprehensive insurance covers full IDV!' },
      { title: 'Cheaper Premium', description: 'E-bike comprehensive ₹3K vs petrol bike ₹4.5K. Save ₹1.5K due to EV benefits!' },
      { title: 'Tech Coverage', description: 'Motor ₹15K, controller ₹10K, charger ₹8K = ₹33K electronics covered!' },
      { title: 'Theft Protection', description: 'E-bikes theft-prone (high value, light). Stolen ₹1.2L bike = get full IDV payout!' }
    ],
    coverage: { min: 'Third-party', max: 'Comprehensive', premium: '₹1,000 - ₹5,000/year' },
    whyNeed: [
      { title: 'Battery Value', description: 'Battery = ₹40-60K (40% cost). Without insurance = pay ₹50K for replacement!', amount: '₹50K protected' },
      { title: 'Fire Risk', description: 'EV fires reported in Ola, Okinawa. Total loss without insurance. Comprehensive covers!', amount: 'Fire safety' },
      { title: 'Legal Mandate', description: 'TP mandatory. Fine ₹2K + RC seizure. ₹1.5K premium cheaper than penalty!', amount: 'Avoid fine' }
    ],
    faqs: [
      { question: 'Is insurance mandatory for electric scooters? Third-party vs comprehensive?', answer: 'YES - MANDATORY! Motor Vehicles Act applies to ALL e-bikes with motor >250W and speed >25kmph (Ola S1, Ather, iQube, Chetak all need insurance). THIRD-PARTY (MINIMUM LEGAL): Premium: ₹1,000-1,500/year (cheap), Covers: ₹15L liability if you injure/kill someone, Does NOT cover: Your e-bike battery, motor, theft, damage, Best for: Very basic legal compliance only. COMPREHENSIVE (RECOMMENDED): Premium: ₹2,500-4,000/year, Covers: Own damage (battery ₹50K, motor ₹20K, body ₹30K), Theft = get full IDV (₹1L bike = ₹1L payout), Fire (battery thermal runaway, charging fire), Third-party ₹15L + Personal Accident ₹15L included, Best for: Anyone who cannot afford to replace ₹1-1.5L bike from pocket. EXAMPLE: Ola S1 Pro ₹1.3L, 1 year old. TP: ₹1.2K premium. Bike catches fire, total loss, you lose ₹1.2L. Comprehensive: ₹3.5K premium. Fire damage, insurer pays ₹1.15L IDV. Pay ₹3.5K to protect ₹1.15L! RECOMMENDATION: TP for very old e-bikes (<₹30K value). Comprehensive for new e-bikes ₹80K+ (battery fire risk + theft risk + high value)!' }
    ],
    calculator: {
      inputs: [
        { name: 'bikeModel', label: 'E-Bike Model', type: 'select', options: ['Ola S1 Pro', 'Ather 450X', 'TVS iQube', 'Bajaj Chetak'] },
        { name: 'bikeAge', label: 'Bike Age (Years)', type: 'number' }
      ],
      outputLabel: 'E-Bike Premium'
    }
  },

  'idv-calculator': {
    id: 'idv-calculator',
    title: 'IDV Calculator',
    category: 'motor',
    subtitle: 'Insured Declared Value Calculator - Car/Bike Market Value',
    description: 'Calculate IDV (Insured Declared Value) of your car or bike. Know exact market value for insurance. Determine claim payout amount.',
    icon: 'Calculator',
    heroGradient: { from: 'blue-500', to: 'cyan-500' },
    stats: [
      { number: 'Free', label: 'Instant Calculation' },
      { number: '5-10%', label: 'Depreciation/Year' },
      { number: '100%', label: 'Theft Payout' },
      { number: 'Accurate', label: 'Market Value' }
    ],
    keyPoints: [
      'IDV definition: Current market value of vehicle, maximum claim in case of total loss/theft',
      'Depreciation rates: Year 1 = 5%, Year 2 = 10%, Year 3 = 15%, Year 4 = 25%, Year 5 = 40%',
      'Calculation: Ex-showroom price - Depreciation = IDV. ₹10L car, 2 years = ₹10L - 10% = ₹9L',
      'Claim payout: Car stolen/total loss = get IDV amount (₹9L). Not purchase price!',
      'Premium impact: Higher IDV = higher premium. Can adjust IDV ±5% to manage cost',
      'Add-on adjustment: Accessories like music system, CNG kit increase IDV',
      'Annual reduction: IDV decreases yearly by 5-15%. Premium also reduces accordingly',
      'Zero depreciation: With zero dep cover, parts replaced at 0% depreciation, not IDV'
    ],
    benefits: [
      { title: 'Claim Clarity', description: 'Know exact payout if car stolen. 3-year-old ₹12L car = ₹9L IDV = get ₹9L claim!' },
      { title: 'Right Premium', description: 'Lower IDV = lower premium. 5-year-old car IDV ₹6L vs new ₹10L = save ₹2K premium!' },
      { title: 'Avoid Under-insurance', description: 'Do not set IDV too low (₹7L actual = ₹5L IDV). Claim settled proportionately!' },
      { title: 'Accessories Value', description: 'Added CNG ₹60K, music system ₹30K? IDV increases ₹90K. Higher payout if stolen!' },
      { title: 'Renewal Planning', description: 'IDV ₹8L now, ₹7L next year. Premium reduces ₹800. Plan finances better!' },
      { title: 'Fair Settlement', description: 'Insurer offers ₹6L IDV, calculator shows ₹7.5L. Negotiate for correct IDV!' }
    ],
    coverage: { min: 'Depreciated Value', max: 'Ex-showroom - Depreciation', premium: 'Affects Premium' },
    whyNeed: [
      { title: 'Claim Amount', description: 'Car total loss = get only IDV, not purchase price. Know IDV to know payout!', amount: 'Claim clarity' },
      { title: 'Premium Check', description: 'Insurer shows ₹8L IDV, you calculate ₹7L. Ask for lower IDV, save ₹500 premium!', amount: 'Save ₹500' },
      { title: 'Under-insurance Risk', description: 'Set IDV too low = proportionate claim. ₹8L car, ₹6L IDV, ₹4L repair = get only ₹3L!', amount: 'Avoid loss' }
    ],
    faqs: [
      { question: 'What is IDV in car insurance? How is it calculated?', answer: 'IDV = INSURED DECLARED VALUE = Current Market Value of Your Car. This is the MAXIMUM amount insurer will pay if car is stolen or completely destroyed (total loss). CALCULATION FORMULA: IDV = Manufacturer Ex-showroom Price - Depreciation + Accessories Value. DEPRECIATION RATES (IRDAI mandated): Age <6 months = 5%, 6-12 months = 15%, 1-2 years = 20%, 2-3 years = 30%, 3-4 years = 40%, 4-5 years = 50%, 5+ years = Market value (negotiable). EXAMPLE: Car purchased ₹10L (ex-showroom), now 2.5 years old. Depreciation 30% = ₹3L. Added CNG kit ₹60K, music system ₹40K. IDV = ₹10L - ₹3L + ₹1L = ₹8L. WHY IDV MATTERS: (1) CLAIM PAYOUT: Car stolen? Get ₹8L (IDV), not ₹10L (purchase price). (2) PREMIUM: Higher IDV = higher own damage premium. ₹8L IDV vs ₹7L = ₹500 more. (3) REPAIR CLAIMS: Partial damage ₹3L, IDV ₹8L = insurer pays ₹3L. But if repair >75% of IDV, declared total loss = get only ₹8L IDV. ADJUST IDV? Yes! IRDAI allows ±5% adjustment. Set ₹7.6L-₹8.4L to manage premium vs coverage!' }
    ],
    calculator: {
      inputs: [
        { name: 'vehicleType', label: 'Vehicle', type: 'select', options: ['Car', 'Bike'] },
        { name: 'exShowroomPrice', label: 'Ex-showroom Price (₹)', type: 'number' },
        { name: 'vehicleAge', label: 'Age (Years)', type: 'number' },
        { name: 'accessories', label: 'Accessories Value (₹)', type: 'number' }
      ],
      outputLabel: 'IDV Amount'
    }
  },

  'car-valuation': {
    id: 'car-valuation',
    title: 'Car Valuation',
    category: 'motor',
    subtitle: 'Instant Car Value - Know Your Car Worth for Insurance/Sale',
    description: 'Free car valuation tool to determine current market value. Used for insurance IDV, selling price, exchange value.',
    icon: 'IndianRupee',
    heroGradient: { from: 'green-600', to: 'emerald-600' },
    stats: [
      { number: 'Free', label: 'Instant Valuation' },
      { number: '30 Seconds', label: 'Get Value' },
      { number: '±5%', label: 'Accuracy' },
      { number: '5,000+', label: 'Car Models' }
    ],
    keyPoints: [
      'Instant valuation: Enter registration number, get current market value in 30 seconds',
      'Multiple uses: Insurance IDV, selling price, exchange value, loan collateral',
      'Factors considered: Make, model, year, KMs driven, condition, city, fuel type',
      'Depreciation impact: First year 10%, second 15%, third 20% depreciation annually',
      'City variation: Metro vs tier-2 affects value. Mumbai car 10% higher than Indore',
      'Condition adjustment: Excellent +10%, Good 0%, Average -10%, Poor -20%',
      'Fuel impact: Diesel cars 10-15% higher value than petrol in SUV segment',
      'Insurance usage: Valuation determines IDV which determines premium and claim'
    ],
    benefits: [
      { title: 'Selling Price', description: 'Want to sell? Valuation shows ₹6.5L market value. List at ₹7L, negotiate to ₹6.5L!' },
      { title: 'Insurance IDV', description: 'Insurer offers ₹5.5L IDV. Valuation shows ₹6.2L. Demand higher IDV or switch insurer!' },
      { title: 'Exchange Value', description: 'Dealer offers ₹5L exchange. Valuation ₹6L. Negotiate better or sell privately!' },
      { title: 'Loan Amount', description: 'Car loan needs valuation. ₹7L value = get ₹5.5L loan (80% LTV). Know beforehand!' },
      { title: 'Purchase Decision', description: 'Buying used? Seller asks ₹7.5L. Valuation shows ₹6.5L. Negotiate ₹1L discount!' },
      { title: 'Claim Verification', description: 'Car total loss, insurer pays ₹6L. Valuation shows ₹7L. File complaint for shortfall!' }
    ],
    coverage: { min: 'Market Value', max: 'Based on Condition', premium: 'Instant Estimate' },
    whyNeed: [
      { title: 'Fair Price', description: 'Selling/buying? Valuation prevents overpay/undersell. ₹1-2L difference possible!', amount: 'Save ₹1-2L' },
      { title: 'Insurance IDV', description: 'Correct valuation = correct IDV = fair premium + claim. Wrong IDV = lose money!', amount: 'Fair coverage' },
      { title: 'Negotiation Power', description: 'Armed with valuation, negotiate better with dealers, buyers, insurers. Data = power!', amount: 'Better deals' }
    ],
    faqs: [
      { question: 'How is used car value calculated? What factors affect car valuation?', answer: 'VALUATION FACTORS: (1) BASE DEPRECIATION: Year 1: -10%, Year 2: -15%, Year 3: -20%, Year 4: -25%, Year 5: -30%. Example: ₹10L car, 3 years = ₹10L × (1 - 0.20 - 0.15 - 0.10) = ₹5.5L base. (2) KILOMETERS DRIVEN: <10K KM/year = +5%, 10-15K normal = 0%, 15-20K = -5%, >20K = -10%. Example: 3 years, 60K KM (20K/year) = -5% = ₹5.5L - 5% = ₹5.225L. (3) CONDITION: Excellent (no damage, single owner) = +10%, Good (minor wear) = 0%, Average (visible damage) = -10%, Poor (major issues) = -20%. (4) CITY: Metro (Mumbai, Delhi) = +5-10%, Tier-1 = 0%, Tier-2 = -5%, Tier-3 = -10%. (5) FUEL TYPE: Diesel SUV/sedan = +10-15% vs petrol, Petrol hatchback = 0% (diesel not preferred), CNG = +₹40-60K for kit value. (6) MODIFICATIONS: Sunroof, alloys, system = +₹50K-₹1L, Poor modifications = -₹50K. EXAMPLE CALCULATION: Maruti Swift VXI, 2020 (3 years), 45K KM, Excellent, Mumbai, Petrol. Ex-showroom 2020: ₹7L. Year 1 (-10%) = ₹6.3L, Year 2 (-15%) = ₹5.355L, Year 3 (-20%) = ₹4.284L. KMs 45K (15K/year normal) = 0%. Condition excellent = +10% = ₹4.71L. City Mumbai = +5% = ₹4.95L. VALUATION = ₹4.95L!' }
    ],
    calculator: {
      inputs: [
        { name: 'registrationNumber', label: 'Car Registration Number', type: 'text' },
        { name: 'kmDriven', label: 'KMs Driven', type: 'number' },
        { name: 'condition', label: 'Condition', type: 'select', options: ['Excellent', 'Good', 'Average', 'Poor'] }
      ],
      outputLabel: 'Current Market Value'
    }
  },

  'group-health-insurance': {
    id: 'group-health-insurance',
    title: 'Group Health Insurance',
    category: 'other',
    subtitle: 'Employee Group Health - Corporate Health Insurance Plans',
    description: 'Group health insurance for employees. Employer-sponsored coverage with family floater option. Supplement with personal top-up.',
    icon: 'Users',
    heroGradient: { from: 'blue-500', to: 'purple-500' },
    stats: [
      { number: '₹3-10L', label: 'Typical Coverage' },
      { number: 'Employer Paid', label: 'Premium' },
      { number: 'Family', label: 'Options Available' },
      { number: '9,000+', label: 'Network Hospitals' }
    ],
    keyPoints: [
      'Employer coverage: Companies provide ₹3-5L group health to all employees',
      'Family floater: ₹5L for self + spouse + 2 kids, sometimes parents included',
      'No medical tests: Pre-existing conditions covered from day 1 (no waiting period!)',
      'Lower premium: Bulk discount, employer pays. Individual would cost ₹12K, group free',
      'Portability issues: Lose job = lose coverage. Buy personal ₹5-10L as backup',
      'Sum insured limits: ₹3-5L insufficient for major illness. Add ₹10-15L super top-up',
      'Maternity optional: Some corporates include ₹50K-₹1L maternity in group plan',
      'Claim simplicity: Cashless at network hospitals, HR handles paperwork'
    ],
    benefits: [
      { title: 'Free Coverage', description: 'Employer pays ₹8K premium for ₹5L coverage. You get ₹5L health insurance at ₹0 cost!' },
      { title: 'No Waiting Period', description: 'Have diabetes? Personal plan 2-4 year wait. Group plan covers from day 1 of joining!' },
      { title: 'Family Included', description: 'Self + spouse + kids covered in ₹5L group floater. Saves ₹12K personal insurance!' },
      { title: 'Cashless Easy', description: 'HR coordinates with insurer. You just show card, rest handled. Zero paperwork!' },
      { title: 'Tax Benefit', description: 'Employer premium ₹8K = ₹8K tax-free perquisite. No taxable income on health benefit!' },
      { title: 'Pre-existing Day 1', description: 'BP, diabetes, asthma covered immediately. Personal plan needs 2-4 year waiting!' }
    ],
    coverage: { min: '₹1 Lakh', max: '₹25 Lakhs', premium: 'Employer Paid' },
    whyNeed: [
      { title: 'Supplement Needed', description: 'Group ₹5L insufficient. Heart surgery ₹8L. Buy ₹10L personal or ₹15L super top-up!', amount: '₹10-15L needed' },
      { title: 'Job Security', description: 'Resign/fired = lose group cover. Without personal backup = health risk gap!', amount: 'Backup essential' },
      { title: 'Retirement Gap', description: 'Retire at 60 = group ends. Need personal health till 80+. Buy individual now!', amount: 'Lifelong protection' }
    ],
    faqs: [
      { question: 'Group health insurance vs Personal - do I need both?', answer: 'YES - NEED BOTH! GROUP HEALTH (Employer): Coverage: ₹3-5L (low), Cost: Free (employer pays), Waiting: ZERO (pre-existing covered day 1!), Portability: LOSE if change job/unemployed, Control: Employer decides sum insured/features, Best: Free coverage, great for pre-existing conditions. PERSONAL HEALTH: Coverage: ₹10-25L (adequate), Cost: ₹12-20K (you pay), Waiting: 30 days general, 2-4 years pre-existing, Portability: Lifelong, job-independent, Control: You choose sum insured/add-ons, Best: Adequate coverage, job-independent, retirement security. WHY BOTH? (1) GROUP INSUFFICIENT: ₹5L covers appendix, not heart surgery (₹10L). Need personal ₹10-15L. (2) JOB LOSS RISK: Fired/resign = group ends immediately. Health emergency during job hunt? No coverage without personal! (3) RETIREMENT: Retire at 60, group ends. Need health till 80+. Personal continues lifelong. (4) SUM COMBO: Group ₹5L + Personal ₹10L = ₹15L total. Heart surgery ₹12L = group pays ₹5L + personal ₹7L. RECOMMENDATION: Keep group health, ADD personal ₹10-15L or super top-up ₹10L on top of ₹5L group base. Total ₹25-30K premium protects ₹15-20L!' }
    ],
    calculator: {
      inputs: [
        { name: 'groupCoverage', label: 'Group Coverage (₹ Lakhs)', type: 'number' },
        { name: 'age', label: 'Your Age', type: 'number' }
      ],
      outputLabel: 'Recommended Personal Top-up'
    }
  },

  'workmen-compensation': {
    id: 'workmen-compensation',
    title: 'Workmen Compensation Policy',
    category: 'other',
    subtitle: 'Employee Injury Insurance - Mandatory for Employers',
    description: 'Workmen compensation insurance covering employee injury, disability, death during work. Statutory requirement under WC Act 1923.',
    icon: 'HardHat',
    heroGradient: { from: 'orange-600', to: 'red-600' },
    stats: [
      { number: 'Mandatory', label: 'Legal Requirement' },
      { number: '₹2-10L', label: 'Sum Insured' },
      { number: '₹500-₹5K', label: 'Premium/Employee' },
      { number: '100%', label: 'Medical Expenses' }
    ],
    keyPoints: [
      'Legal mandate: Workmen Compensation Act 1923 requires all employers to have WC policy',
      'Coverage: Employee injury, disability, death during work or work-related activity',
      'Compensation: Medical expenses + wage loss + disability compensation + death benefit',
      'Occupational disease: TB, asthma, dermatitis from work covered after 6 months employment',
      'Accident at work: Factory accident, construction fall, delivery accident all covered',
      'Commute coverage: Injury during work commute (home to office) also covered',
      'Premium calculation: Based on wages, occupation risk category (high/medium/low)',
      'Penalties: No WC policy = ₹15K fine + imprisonment + pay compensation from pocket'
    ],
    benefits: [
      { title: 'Legal Compliance', description: 'Mandatory under WC Act. No policy = ₹15K fine + jail + full compensation liability!' },
      { title: 'Accident Protection', description: 'Worker injured, ₹5L medical + ₹10L disability. WC pays, employer protected from lawsuit!' },
      { title: 'Death Benefit', description: 'Employee dies at work, family gets ₹10-20L compensation. Policy pays, not from business!' },
      { title: 'Medical Coverage', description: 'All treatment costs (₹2-5L) covered. Worker healed, returns to work. Business continuity!' },
      { title: 'Wage Protection', description: 'Injured worker cannot work 6 months. Policy pays 50% wages = ₹1.5L. Employee satisfied!' },
      { title: 'Occupational Disease', description: 'Factory worker gets TB from chemical exposure. ₹3L treatment + ₹5L disability = policy pays!' }
    ],
    coverage: { min: '₹1 Lakh', max: '₹25 Lakhs', premium: '₹300 - ₹5,000/employee/year' },
    whyNeed: [
      { title: 'Legal Mandate', description: 'Employing staff without WC = illegal. Labor inspector finds = ₹15K fine + compensation from pocket!', amount: 'Avoid ₹15K fine' },
      { title: 'Lawsuit Protection', description: 'Employee accident ₹15L medical + ₹25L disability lawsuit. WC policy pays ₹40L, saves business!', amount: '₹40L covered' },
      { title: 'Business Survival', description: '₹10L injury compensation from pocket = bankruptcy. ₹2K premium protects ₹10L liability!', amount: 'Survive claims' }
    ],
    faqs: [
      { question: 'Who needs workmen compensation insurance? Is it mandatory?', answer: 'MANDATORY FOR: (1) ALL EMPLOYERS with staff (even 1 employee), (2) Factories, construction, manufacturing - high risk, (3) Shops, offices, IT companies - low risk but still mandatory, (4) Contract labor employed through contractor, (5) Blue collar (factory worker) + White collar (office employee) both. WORKMEN COMPENSATION ACT 1923: Employers MUST compensate employees for: Injury during work, Permanent/temporary disability, Death during employment, Occupational diseases (TB, asthma, dermatitis after 6 months). COMPENSATION AMOUNTS: Death: 50% monthly wage × 4 years or ₹1.2L (whichever higher). Example: ₹20K salary = ₹4.8L compensation. Permanent disability: 60% monthly wage × years till retirement. Temporary: 25% of wages during healing period. Medical: All treatment costs. NO POLICY PENALTY: ₹15,000 fine, 6 months imprisonment, Pay FULL compensation from pocket (₹5-25L per claim)! PREMIUM: Low risk (IT, office): ₹300-500/employee, Medium (retail, delivery): ₹800-1,500/employee, High risk (construction, factory): ₹2,000-5,000/employee. RECOMMENDATION: Even single employee = MUST have WC policy. ₹500 premium vs ₹5L accident liability!' }
    ],
    calculator: {
      inputs: [
        { name: 'employeeCount', label: 'Number of Employees', type: 'number' },
        { name: 'industry', label: 'Industry Type', type: 'select', options: ['Low Risk (IT/Office)', 'Medium (Retail/Delivery)', 'High (Factory/Construction)'] },
        { name: 'avgWage', label: 'Average Monthly Wage (₹)', type: 'number' }
      ],
      outputLabel: 'WC Premium Estimate'
    }
  },

  'professional-indemnity': {
    id: 'professional-indemnity',
    title: 'Professional Indemnity Insurance',
    category: 'other',
    subtitle: 'PI Insurance - Protect Against Professional Negligence Claims',
    description: 'Professional indemnity for CA, doctors, architects, consultants. Covers legal liability for errors, negligence, breach of duty.',
    icon: 'Briefcase',
    heroGradient: { from: 'purple-600', to: 'indigo-600' },
    stats: [
      { number: '₹10L-₹10Cr', label: 'Sum Insured' },
      { number: '₹15K-₹2L', label: 'Annual Premium' },
      { number: '100%', label: 'Legal Defense' },
      { number: 'Global', label: 'Coverage' }
    ],
    keyPoints: [
      'Professional liability: Covers negligence, errors, omissions in professional services',
      'Who needs: CA, CS, doctors, lawyers, architects, engineers, consultants, IT professionals',
      'Coverage: Legal defense costs + compensation + court fees + settlement amount',
      'Client lawsuit: Client sues for ₹50L loss due to your advice. PI covers legal + payout',
      'Retroactive cover: Past work (before buying policy) also covered if claim made now',
      'Defense costs: Even baseless claim needs ₹5-10L legal defense. Policy covers!',
      'Worldwide: Claim from USA client for work done in India also covered',
      'Mandatory: Some professions (CA, CS) need PI as per regulatory bodies'
    ],
    benefits: [
      { title: 'Lawsuit Protection', description: 'Client sues for ₹25L claiming bad advice. PI covers ₹15L legal + ₹25L settlement!' },
      { title: 'Legal Defense', description: 'Even false claim needs ₹8L lawyer fees + 2 years court. Policy pays entire legal cost!' },
      { title: 'Negligence Cover', description: 'Doctor misdiagnosis, patient dies, family sues ₹1Cr. Medical indemnity covers full amount!' },
      { title: 'Career Protection', description: 'Without PI, one lawsuit = sell house to pay ₹50L. With PI, career continues unaffected!' },
      { title: 'Client Confidence', description: 'Big clients mandate PI insurance. ₹25L PI policy = win ₹1Cr contracts!' },
      { title: 'Regulatory Compliance', description: 'ICAI mandates CA have ₹25L PI. Without it = cannot practice, license suspended!' }
    ],
    coverage: { min: '₹10 Lakhs', max: '₹10 Crore', premium: '₹15,000 - ₹2,00,000/year' },
    whyNeed: [
      { title: 'Lawsuit Risk', description: 'One client claim ₹50L can bankrupt practice. PI ₹30K premium protects ₹50L-₹1Cr liability!', amount: '₹1Cr protected' },
      { title: 'Mandatory', description: 'CA need ₹25L, architects ₹10L, doctors ₹20L PI by law. No PI = cannot practice!', amount: 'License requirement' },
      { title: 'Defense Costs', description: 'Legal fees ₹5-15L even if you win case. PI covers defense costs regardless of outcome!', amount: '₹5-15L legal fees' }
    ],
    faqs: [
      { question: 'Who needs professional indemnity insurance? What does it cover?', answer: 'WHO NEEDS PI: (1) CHARTERED ACCOUNTANTS: ICAI mandatory ₹25L for practicing CAs. Covers tax advice, audit errors, financial mis-statements. (2) DOCTORS: Medical negligence, wrong diagnosis, surgery errors. ₹20L-₹1Cr depending on specialty. (3) ARCHITECTS: Design flaws, building collapse, project delays. ₹10L-₹50L based on project size. (4) LAWYERS: Wrong advice, missed deadlines, conflict of interest. ₹25L-₹1Cr. (5) IT PROFESSIONALS: Software bugs, data loss, project failure, SLA breach. ₹50L-₹5Cr. (6) ENGINEERS: Structural failure, design errors, safety violations. ₹25L-₹2Cr. (7) CONSULTANTS: Wrong business advice, strategy failure, financial loss to client. ₹25L-₹1Cr. WHAT IS COVERED: Professional negligence (errors in work), Breach of professional duty, Omissions (forgot critical steps), Misrepresentation (wrong information given), Breach of confidentiality, Copyright infringement (unintentional), Legal defense costs (even if claim baseless), Court fees, settlement, compensation. EXCLUSIONS: Intentional wrongdoing, Fraud/dishonesty, Criminal acts, Known errors before buying policy. COST: CA/CS: ₹25L cover = ₹15-20K, Doctor: ₹50L cover = ₹40-60K, Architect: ₹25L cover = ₹20-25K, IT: ₹1Cr cover = ₹80K-₹1.5L!' }
    ],
    calculator: {
      inputs: [
        { name: 'profession', label: 'Profession', type: 'select', options: ['CA/CS', 'Doctor', 'Architect', 'Lawyer', 'IT Consultant', 'Engineer'] },
        { name: 'sumInsured', label: 'Coverage Required (₹ Lakhs)', type: 'number' },
        { name: 'experience', label: 'Years of Practice', type: 'number' }
      ],
      outputLabel: 'PI Premium Estimate'
    }
  },

  'doctor-indemnity-insurance': {
    id: 'doctor-indemnity-insurance',
    title: 'Doctors Indemnity Insurance',
    category: 'other',
    subtitle: 'Medical Malpractice Insurance - Protect Against Negligence Claims',
    description: 'Professional indemnity for doctors covering medical negligence, wrong diagnosis, surgery errors, patient death lawsuits.',
    icon: 'Stethoscope',
    heroGradient: { from: 'red-500', to: 'pink-500' },
    stats: [
      { number: '₹20L-₹5Cr', label: 'Sum Insured' },
      { number: '₹25K-₹3L', label: 'Annual Premium' },
      { number: '100%', label: 'Legal Defense' },
      { number: 'Mandatory', label: 'For Practice' }
    ],
    keyPoints: [
      'Medical negligence: Wrong diagnosis, surgery error, anesthesia complication, patient death',
      'Sum insured guide: GP ₹20L, Physician ₹50L, Surgeon ₹1Cr, Super-specialist ₹2-5Cr',
      'Coverage: Consumer court claims, medical council inquiry, legal defense, compensation',
      'Retroactive: Past treatments (before policy) covered if claim made during policy period',
      'Defense included: Lawyer fees ₹5-15L for consumer court + medical council both covered',
      'Settlement: Insurer negotiates with patient, pays compensation to avoid court battle',
      'Hospital mandatory: Most hospitals require doctors have ₹20L-₹1Cr indemnity to practice',
      'MCI recommendation: Medical Council recommends all practicing doctors have PI insurance'
    ],
    benefits: [
      { title: 'Negligence Protection', description: 'Surgery complication, patient sues ₹50L. Indemnity covers legal ₹8L + settlement ₹30L!' },
      { title: 'Legal Defense', description: 'Consumer court case + medical council inquiry. ₹12L lawyer fees + 3 years stress. Policy covers!' },
      { title: 'Career Security', description: 'Without insurance, one ₹1Cr claim = lifetime savings gone. With ₹3Cr policy, practice continues!' },
      { title: 'Hospital Empanelment', description: 'Max, Apollo, Fortis mandate ₹50L-₹1Cr PI. Without it = cannot join hospital panel!' },
      { title: 'Peace of Mind', description: 'Practice confidently knowing ₹1Cr claim covered. No fear of lawsuit bankrupting family!' },
      { title: 'Affordable', description: '₹1Cr cover = ₹1L premium = ₹8,300/month. Protects ₹1Cr liability for ₹8K monthly!' }
    ],
    coverage: { min: '₹20 Lakhs', max: '₹10 Crore', premium: '₹25,000 - ₹5,00,000/year' },
    whyNeed: [
      { title: 'Malpractice Claims', description: 'Doctors face 1 in 5 lifetime lawsuit risk. Average claim ₹30-80L. Without insurance = bankruptcy!', amount: '₹30-80L claim' },
      { title: 'Legal Costs', description: 'Consumer court + medical council defense = ₹8-15L even if you win! PI covers all legal costs!', amount: '₹8-15L defense' },
      { title: 'Mandatory', description: 'Hospitals, nursing homes mandate PI. MCI recommends. Without it = cannot practice in reputed setups!', amount: 'Practice essential' }
    ],
    faqs: [
      { question: 'How much indemnity insurance should doctors have? Specialty-wise coverage.', answer: 'RECOMMENDED COVERAGE BY SPECIALTY: (1) GENERAL PHYSICIAN/MBBS: ₹20-25L minimum. Low risk but consumer claims common. Premium: ₹25-35K. (2) PHYSICIAN/MD (Cardio/Neuro/Gastro): ₹50L-₹1Cr. Diagnostic errors, treatment complications. Premium: ₹50-80K for ₹50L. (3) SURGEON (General/Ortho/ENT): ₹1-2Cr. Surgery risks high, patient death claims ₹50L-₹1Cr. Premium: ₹1-1.5L. (4) SUPER-SPECIALIST (Cardiac/Neuro surgeon): ₹2-5Cr. Complex surgeries, high-value claims, celebrity patients. Premium: ₹2-3L. (5) ANESTHESIOLOGIST: ₹1-2Cr. Anesthesia complications = high mortality = big claims. Premium: ₹1.2-1.8L. (6) OB-GYN: ₹1-3Cr. Delivery complications, infant death = emotional + big claims. Premium: ₹1.5-2.5L. (7) RADIOLOGIST/PATHOLOGIST: ₹50L-₹1Cr. Diagnosis errors, missed cancer = huge liability. Premium: ₹60-90K. (8) PSYCHIATRIST: ₹25-50L. Patient suicide claims, but lower payout typically. Premium: ₹30-50K. FACTORS: Private practice + hospital visiting = higher coverage needed. Superspecialist in metro = ₹5Cr (celebrities, rich patients, big claims). Government doctors = hospital covers, personal ₹20-50L sufficient. CLAIM EXAMPLES: Wrong diagnosis delayed cancer treatment = ₹80L claim. Surgery tool left inside = ₹50L claim. Anesthesia death = ₹1-2Cr claim. RECOMMENDATION: Start ₹50L minimum, increase as practice grows. Specialists minimum ₹1Cr. Super-specialists ₹2-5Cr mandatory!' }
    ],
    calculator: {
      inputs: [
        { name: 'specialty', label: 'Medical Specialty', type: 'select', options: ['GP/MBBS', 'MD Physician', 'Surgeon', 'Super-specialist', 'Anesthetist', 'OB-GYN'] },
        { name: 'yearsOfPractice', label: 'Years in Practice', type: 'number' },
        { name: 'annualPatients', label: 'Patients/Year (approx)', type: 'number' }
      ],
      outputLabel: 'Recommended Coverage & Premium'
    }
  }
};
