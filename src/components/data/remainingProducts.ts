import { InsuranceProduct } from './insuranceProducts';

// ========================================
// LIFE INSURANCE - Additional Products
// ========================================

export const additionalLifeProducts: Record<string, InsuranceProduct> = {
  'list-of-term-insurance': {
    id: 'list-of-term-insurance',
    title: 'List of Term Insurance Plans',
    category: 'life',
    subtitle: 'Compare Top Term Insurance Plans in India 2024',
    description: 'Comprehensive list of best term insurance plans from all major insurers with coverage, premiums, claim ratios, and features comparison.',
    icon: 'List',
    heroGradient: { from: 'blue-500', to: 'cyan-500' },
    stats: [
      { number: '25+', label: 'Insurers Compared' },
      { number: '₹6K-50K', label: 'Annual Premium Range' },
      { number: '98%+', label: 'Best Claim Ratios' },
      { number: '100+', label: 'Plan Variants' }
    ],
    keyPoints: [
      'Compare 25+ top insurers: HDFC Life, Max Life, ICICI Prudential, SBI Life, LIC, Tata AIA',
      'Coverage options from ₹25L to ₹10Cr across all major providers',
      'Claim settlement ratios: Max Life 99.51%, HDFC 99.05%, ICICI 98.02%',
      'Online vs offline premium difference: 20-30% cheaper online',
      'Rider options: Critical illness, accidental death, waiver of premium, income benefit',
      'Policy tenure: 10-40 years, up to age 65-80 depending on insurer',
      'Medical tests required for coverage above ₹75L-₹1Cr',
      'Compare features: Return of premium, increasing cover, level cover options'
    ],
    benefits: [
      { title: 'Best Price Comparison', description: 'Same ₹1Cr coverage: LIC ₹14K vs Max Life ₹10K vs HDFC ₹10.5K. Find cheapest premium for your age and health.' },
      { title: 'Claim Ratio Analysis', description: 'Choose insurers with 98%+ CSR. Avoid those with <95% who reject claims frequently on technicalities.' },
      { title: 'Feature Comparison', description: 'Some offer free critical illness rider, some have lower premium. Some allow increasing cover, some have return of premium.' },
      { title: 'Rider Options', description: 'Add critical illness (₹3-5K), accidental death benefit (₹2K), disability cover (₹2-3K) to base term plan.' },
      { title: 'Online Discounts', description: 'Buying online saves 20-30% vs agent. HDFC ₹10K online vs ₹13K offline. Max Life ₹9.5K vs ₹12.5K.' },
      { title: 'Customization', description: 'Choose payout: Lump sum, monthly income, or combination. Level cover vs increasing cover based on inflation.' }
    ],
    coverage: { min: '₹25 Lakhs', max: '₹10 Crore', premium: '₹6,000 - ₹50,000/year' },
    whyNeed: [
      { title: 'Find Cheapest Plan', description: 'Same coverage varies ₹3-5K/year across insurers. Save ₹1.5L over 30 years by choosing right plan.', amount: '₹1-1.5L saved' },
      { title: 'Best Claim Ratio', description: 'High CSR insurer = family gets claim smoothly. Low CSR = rejection risk, legal battles, delays.', amount: '98%+ CSR essential' },
      { title: 'Right Features', description: 'Need critical illness? Return of premium? Increasing cover? Compare to find plan matching your needs.', amount: 'Custom fit' }
    ],
    faqs: [
      { question: 'Which term insurance company is best in India?', answer: 'TOP 5 by Claim Settlement Ratio: (1) Max Life 99.51% - Highest CSR, fast claims, (2) HDFC Life 99.05% - Large insurer, good service, (3) Tata AIA 98.31% - Premium brand, (4) ICICI Prudential 98.02% - Trusted name, (5) SBI Life 97.48% - PSU backing. BEST OVERALL: Max Life or HDFC Life for claim ratio + price balance. CHEAPEST: Often HDFC or Aegon online plans. MOST FEATURES: Max Life Smart Secure Plus. FOR NRIs: HDFC Click2Protect or Max Life Online Term. VERDICT: Compare quotes from Max Life, HDFC, ICICI for your age/coverage and choose based on premium + CSR combination.' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'coverage', label: 'Coverage Needed (₹ Lakhs)', type: 'number' },
        { name: 'policyTerm', label: 'Policy Term (Years)', type: 'number' }
      ],
      outputLabel: 'Compare Premiums Across Insurers'
    }
  },

  'term-insurance-calculator': {
    id: 'term-insurance-calculator',
    title: 'Term Insurance Calculator',
    category: 'life',
    subtitle: 'Calculate How Much Term Insurance Coverage You Need',
    description: 'Free online calculator to determine ideal term insurance coverage based on income, loans, dependents, and future goals.',
    icon: 'Calculator',
    heroGradient: { from: 'blue-500', to: 'purple-500' },
    stats: [
      { number: 'Free', label: 'No Registration' },
      { number: '3 Methods', label: 'Calculation Logic' },
      { number: '₹1-5Cr', label: 'Typical Coverage' },
      { number: '2 Minutes', label: 'Get Results' }
    ],
    keyPoints: [
      'Human Life Value method: Annual income × Years to retirement × 70%',
      'Expense method: (Annual expenses × 20) + Loans + Goals',
      'Income replacement: 10-15x annual income for complete protection',
      'Consider outstanding loans: Home loan ₹50L + car loan ₹10L = add ₹60L',
      'Children education: ₹20-50L depending on number of kids and aspirations',
      'Emergency fund: 6-12 months expenses for family transition',
      'Inflation adjustment: Increase coverage by 6-8% every 3-5 years',
      'Get instant premium quotes from top 5 insurers after calculation'
    ],
    benefits: [
      { title: 'Accurate Coverage', description: 'Avoid under-insurance (₹25L is too low) or over-insurance (paying for ₹5Cr when ₹2Cr enough).' },
      { title: 'Goal-based', description: 'Factor in children college ₹25L, wedding ₹30L, retirement ₹1Cr. Ensures all goals covered if you die.' },
      { title: 'Loan Protection', description: 'Calculate exact loan coverage. Home ₹60L + car ₹8L + personal ₹5L = ₹73L needed for debt clearance.' },
      { title: 'Income Replacement', description: 'Calculate how many years of income needed. ₹12L salary × 15 years = ₹1.8Cr minimum coverage.' },
      { title: 'Dependent Analysis', description: 'Spouse non-working = higher coverage. Kids small = more years of expenses. Parents dependent = add ₹25-50L.' },
      { title: 'Compare Premiums', description: 'After coverage calculation, see premium for ₹1Cr vs ₹2Cr vs ₹3Cr. Marginal cost very low for higher coverage.' }
    ],
    coverage: { min: 'Calculated', max: 'Based on Needs', premium: 'Instant Quote' },
    whyNeed: [
      { title: 'Avoid Under-Insurance', description: 'Most Indians buy ₹25-50L which is grossly insufficient. Calculator shows you need ₹1.5-3Cr realistically.', amount: 'Proper coverage' },
      { title: 'Right Amount', description: 'Not too little (family suffers), not too much (waste premium). Scientific calculation based on your situation.', amount: 'Optimized' },
      { title: 'Plan Better', description: 'Understand how much coverage for loans, kids, spouse. Allocate lump sum vs monthly income payout.', amount: 'Goal clarity' }
    ],
    faqs: [
      { question: 'How to calculate term insurance coverage needed?', answer: 'USE 3 METHODS: METHOD 1 - Human Life Value: Annual Income × Years to Retirement × 70%. Example: ₹15L income, age 30, retire 60 = ₹15L × 30 × 0.7 = ₹3.15Cr. METHOD 2 - Expense Method: (Annual Family Expenses × 20 years) + Loans + Goals. Example: ₹8L expenses/year × 20 = ₹1.6Cr, Home loan ₹50L, Kids education ₹40L, Marriage ₹30L = ₹1.6Cr + ₹1.2Cr = ₹2.8Cr. METHOD 3 - Income Multiplier: 10-15x annual income. ₹12L income = ₹1.2Cr to ₹1.8Cr minimum. RECOMMENDATION: Use highest of 3 methods. Average Indian needs ₹1.5-3Cr. ₹25-50L coverage is dangerously low.' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'income', label: 'Annual Income (₹)', type: 'number' },
        { name: 'loans', label: 'Total Loans (₹)', type: 'number' },
        { name: 'expenses', label: 'Annual Family Expenses (₹)', type: 'number' },
        { name: 'dependents', label: 'Number of Dependents', type: 'number' }
      ],
      outputLabel: 'Recommended Coverage Amount'
    }
  },

  'dedicated-claim-assistance': {
    id: 'dedicated-claim-assistance',
    title: 'Dedicated Claim Assistance',
    category: 'life',
    subtitle: '24/7 Support for Seamless Term Insurance Claim Settlement',
    description: 'Professional claim assistance service ensuring 100% documentation, faster processing, and maximum claim approval for your family.',
    icon: 'Headphones',
    heroGradient: { from: 'green-500', to: 'emerald-500' },
    stats: [
      { number: '24/7', label: 'Support Available' },
      { number: '99.8%', label: 'Claim Success Rate' },
      { number: '7-15 Days', label: 'Average Settlement' },
      { number: 'Free', label: 'No Hidden Charges' }
    ],
    keyPoints: [
      'Dedicated claim manager assigned to family within 24 hours of intimation',
      'Complete documentation support: Death certificate, medical records, policy docs',
      'Direct coordination with insurance company - no family hassle',
      'Fast-track processing: 7-15 days vs 30-60 days normal timeline',
      'Legal support if claim disputed or rejected unfairly',
      'Free service included with all online term insurance purchases',
      'Hospital coordination for medical records if death was hospitalized',
      'Embassy coordination for NRI death certificates from abroad'
    ],
    benefits: [
      { title: '24/7 Availability', description: 'Death can happen anytime. Call helpline immediately, manager assigned within 24hrs even on weekends/holidays.' },
      { title: 'Documentation Help', description: 'Family in grief should not struggle with paperwork. We collect death certificate, medical records, FIR (if accident), forms.' },
      { title: 'Insurance Company Liaison', description: 'We deal with insurance company on family behalf. Submit documents, follow up, expedite processing, resolve queries.' },
      { title: 'Faster Settlement', description: 'Our experience speeds process. 7-15 days vs 30-60 days if family does alone. ₹1Cr in family account faster.' },
      { title: 'Dispute Resolution', description: 'If claim rejected unfairly, we fight. Legal notice, Ombudsman complaint, court case - all support provided free.' },
      { title: 'Emotional Support', description: 'Losing loved one is traumatic. Our empathetic managers reduce financial stress so family can grieve peacefully.' }
    ],
    coverage: { min: 'Any Coverage', max: 'All Claims', premium: 'Included Free' },
    whyNeed: [
      { title: 'Family in Grief', description: 'Widow with kids should not run to insurance office, hospital, municipality. We handle everything.', amount: 'Peace of mind' },
      { title: 'Complex Documentation', description: 'Death certificate, medical summary, claimant ID proof, bank details, policy docs - easy to miss something.', amount: '100% complete' },
      { title: 'Rejection Risk', description: '2-5% claims rejected due to incomplete docs, procedural errors. Our 99.8% success rate ensures approval.', amount: 'Maximum payout' }
    ],
    faqs: [
      { question: 'How to claim term insurance after death?', answer: 'STEP-BY-STEP PROCESS: DAY 1: Family member calls insurance company or claim assistance helpline to intimate death. Provide policy number, deceased name, death date. DAY 2-3: Dedicated claim manager assigned. They guide on documents needed: (1) Death certificate from municipality, (2) Medical records if hospital death, (3) FIR copy if accident/unnatural death, (4) Claim form filled and signed by nominee, (5) Claimant ID proof (Aadhaar, PAN), (6) Bank account details for payout, (7) Original policy document. DAY 4-7: Manager collects documents, verifies completeness, submits to insurance company. DAY 8-15: Insurance company processes. May ask additional queries - manager responds. DAY 15-30: Claim approved. Amount credited to nominee bank account. WITH CLAIM ASSISTANCE: 7-15 days, 99.8% success. WITHOUT: 30-60 days, risk of rejection.' }
    ],
    calculator: {
      inputs: [
        { name: 'policyNumber', label: 'Policy Number', type: 'text' },
        { name: 'sumAssured', label: 'Sum Assured (₹ Lakhs)', type: 'number' },
        { name: 'claimType', label: 'Claim Type', type: 'select', options: ['Natural Death', 'Accidental Death', 'Critical Illness'] }
      ],
      outputLabel: 'Expected Settlement Timeline'
    }
  },

  'term-insurance-hni': {
    id: 'term-insurance-hni',
    title: 'Term Insurance for HNI',
    category: 'life',
    subtitle: 'High Net Worth Individual Life Insurance - ₹5Cr to ₹50Cr Coverage',
    description: 'Exclusive term insurance for HNIs with coverage up to ₹50Cr, estate planning benefits, minimal documentation, and VIP claim service.',
    icon: 'Crown',
    heroGradient: { from: 'yellow-500', to: 'amber-600' },
    stats: [
      { number: '₹5Cr-₹50Cr', label: 'Coverage Range' },
      { number: 'No Capping', label: 'Unlimited Income' },
      { number: 'Fast Track', label: 'Medical & Issuance' },
      { number: 'Estate Plan', label: 'Tax Benefits' }
    ],
    keyPoints: [
      'Ultra-high coverage: ₹5Cr to ₹50Cr for high income individuals and business owners',
      'Income no bar: Underwriting considers net worth, assets, business value - not just salary',
      'Fast-track medical: Home sample collection, premium hospitals, 48hr report',
      'Instant issuance: Policy issued in 3-5 days vs 15-30 days for regular plans',
      'Estate planning: Structure payouts to minimize estate duty, tax implications',
      'Business continuity: Key person insurance to protect company from founder death',
      'Loan collateral: Large coverage accepted as collateral for business loans',
      'Dedicated RM: Relationship manager for policy service and claim assistance'
    ],
    benefits: [
      { title: 'High Coverage Access', description: 'Regular term insurance caps at ₹10Cr. HNI plans offer ₹20Cr, ₹30Cr, ₹50Cr coverage for ultra-wealthy.' },
      { title: 'Flexible Underwriting', description: 'Income ₹1Cr but net worth ₹50Cr? Business cash flow irregular? HNI underwriting considers total wealth, not just ITR.' },
      { title: 'Estate Tax Planning', description: 'Structure ₹20Cr payout: ₹10Cr lump sum (tax-free), ₹10Cr monthly income over 20 years. Optimize estate transfer.' },
      { title: 'Business Protection', description: 'Founder of ₹100Cr company dies - business valuation crashes. ₹20Cr insurance provides transition capital.' },
      { title: 'VIP Service', description: 'Medical tests at home/office. Dedicated underwriter. Policy delivered by courier. Claim RM for family. Premium experience.' },
      { title: 'Global Coverage', description: 'Death anywhere globally covered. Family in India/abroad can claim. Payout in INR or foreign currency option.' }
    ],
    coverage: { min: '₹5 Crore', max: '₹50 Crore', premium: '₹1,00,000 - ₹10,00,000/year' },
    whyNeed: [
      { title: 'Wealth Protection', description: 'Net worth ₹50Cr but illiquid (property, business). Death = family needs ₹10-20Cr liquid for expenses, estate duty.', amount: '₹10-30Cr' },
      { title: 'Business Continuity', description: 'Founder dies, business worth ₹100Cr becomes ₹40Cr due to key person loss. Insurance provides working capital.', amount: '₹15-25Cr' },
      { title: 'Lifestyle Maintenance', description: 'Monthly expenses ₹10L = ₹1.2Cr/year. Family needs ₹20-30Cr to maintain lifestyle for 20-25 years.', amount: '₹20-40Cr' }
    ],
    faqs: [
      { question: 'How can HNIs get term insurance above ₹10 Crore?', answer: 'ELIGIBILITY CRITERIA: Annual Income >₹1 Cr OR Net Worth >₹25 Cr OR Business Turnover >₹50 Cr. PROCESS: (1) Contact HNI desk of Max Life, HDFC Life, ICICI Pru (not online, call relationship manager), (2) Submit income proof: ITR, Form 16, Business financials, Net worth statement, (3) Medical tests: Blood, urine, ECG, TMT, Echo (for age 45+), done at premium hospital or home, (4) Financial underwriting: Underwriter assesses insurance need based on lifestyle, dependents, loans, business, (5) Coverage approved: Up to 20-30x annual income or 50% of net worth, whichever higher, (6) Policy issued in 3-5 days. EXAMPLE: Income ₹2Cr/year, net worth ₹50Cr, business ₹100Cr. Can get ₹30-40Cr coverage. Premium ~₹3-5L/year for age 40. TAX BENEFIT: Premium ₹5L deductible u/s 80C (₹1.5L limit) + 10(10D) (no limit). Death benefit ₹40Cr fully tax-free to family.' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'income', label: 'Annual Income (₹ Cr)', type: 'number' },
        { name: 'netWorth', label: 'Net Worth (₹ Cr)', type: 'number' },
        { name: 'coverage', label: 'Desired Coverage (₹ Cr)', type: 'number' }
      ],
      outputLabel: 'Estimated Annual Premium'
    }
  }
};

// ========================================
// INVESTMENT PLANS - Additional Products
// ========================================

export const additionalInvestmentProducts: Record<string, InsuranceProduct> = {
  'investment-plans-nri': {
    id: 'investment-plans-nri',
    title: 'Investment Plans for NRIs',
    category: 'investment',
    subtitle: 'NRI-Friendly ULIPs, Pension & Child Plans with Global Access',
    description: 'Invest from USA, UAE, UK in Indian insurance plans. Rupee-denominated returns, repatriation benefits, and NRE/NRO payment options.',
    icon: 'Plane',
    heroGradient: { from: 'blue-500', to: 'indigo-500' },
    stats: [
      { number: '10-15%', label: 'Returns (Equity ULIP)' },
      { number: 'NRE/NRO', label: 'Payment Options' },
      { number: '100%', label: 'Tax-free Maturity' },
      { number: '30+ Countries', label: 'Buy From' }
    ],
    keyPoints: [
      'Buy investment plans from USA, UK, UAE, Singapore - 100% online process',
      'Payment via international credit card, NRE account, NRO account transfer',
      'Returns in INR: Benefit from rupee appreciation + 10-12% CAGR equity returns',
      'No need to visit India: Video KYC, digital signature, e-policy delivery',
      'Tax benefits if filing ITR in India: 80C deduction + 10(10D) tax-free maturity',
      'Repatriation allowed: Maturity proceeds can be transferred to foreign account',
      'Child education plans for kids studying in India later',
      'Pension plans for retirement corpus in India post-return'
    ],
    benefits: [
      { title: 'INR Appreciation', description: '₹10L invested at $1=₹70 becomes $14.3K. At $1=₹83 after 15 years, maturity ₹50L = $60K vs $71K expected. Currency gain!' },
      { title: 'Higher Returns', description: 'Indian equity ULIP: 12-14% vs US 401k: 7-8%. ₹5L/year for 20 years = ₹3Cr at 12% vs ₹2Cr at 8%.' },
      { title: 'Diversification', description: 'All investments in USA/UAE? Diversify to India for geographical risk spread. India growth story participation.' },
      { title: 'India Return Planning', description: 'Planning to retire in India? Build ₹2-3Cr corpus via ULIPs. Maturity post-retirement funds lifestyle in India.' },
      { title: 'Kids Education India', description: 'Want kids to study in India (IIT, IIM)? Child plan ensures ₹25-50L corpus for college fees.' },
      { title: 'Tax Efficiency', description: 'If RNOR/Resident status, get 80C benefit. Maturity 100% tax-free vs USA where 401k withdrawals taxed.' }
    ],
    coverage: { min: '₹50,000/year', max: '₹10 Lakhs/year', premium: 'Variable' },
    whyNeed: [
      { title: 'India Retirement Corpus', description: 'Living in UAE but plan to retire in India? Invest ₹3L/year for 25 years = ₹2.5Cr corpus at retirement.', amount: '₹1.5-3Cr' },
      { title: 'Children India Education', description: 'Want kids to pursue higher education in India? ₹1L/year ULIP for 15 years = ₹40L for college.', amount: '₹30-60L' },
      { title: 'Currency Hedge', description: 'All assets in USD/AED? Diversify to INR-denominated assets. If rupee appreciates, you benefit.', amount: 'Portfolio diversification' }
    ],
    faqs: [
      { question: 'Can NRIs invest in ULIP and insurance investment plans in India?', answer: 'Yes! NRIs can invest in ULIPs, endowment plans, child plans, pension plans in India. PROCESS: (1) Choose plan online, (2) Fill proposal form marking NRI status, (3) Upload passport, visa, foreign address proof, PIO/OCI card, (4) Video KYC from your country, (5) Pay premium via international credit card or NRE/NRO account transfer, (6) E-policy issued to email. PAYMENT: Premium in INR. You pay via credit card (bank does forex conversion) or debit from NRE/NRO account. TAX: If filing ITR in India, get 80C deduction on premium. Maturity tax-free u/s 10(10D). If not filing ITR, no deduction but maturity still tax-free. RETURNS: In INR. Example: Invest ₹5L/year for 20 years, maturity ₹2.5Cr at 12% ULIP returns. REPATRIATION: Maturity amount can be credited to NRE account and repatriated to USA/UAE/UK bank.' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'investment', label: 'Annual Investment (₹)', type: 'number' },
        { name: 'tenure', label: 'Investment Tenure (Years)', type: 'number' },
        { name: 'returnRate', label: 'Expected Return %', type: 'number' }
      ],
      outputLabel: 'Maturity Amount in INR'
    }
  },

  'sip-calculator': {
    id: 'sip-calculator',
    title: 'SIP Calculator',
    category: 'investment',
    subtitle: 'Calculate Systematic Investment Plan Returns for ULIPs & Mutual Funds',
    description: 'Free SIP calculator to estimate maturity amount for monthly investments with compound interest and flexible returns scenarios.',
    icon: 'Calculator',
    heroGradient: { from: 'green-500', to: 'teal-500' },
    stats: [
      { number: 'Free', label: 'No Registration' },
      { number: '₹500-₹5L', label: 'Monthly Investment' },
      { number: '8-15%', label: 'Return Range' },
      { number: '5-30 Years', label: 'Tenure Options' }
    ],
    keyPoints: [
      'Calculate future value of monthly SIP investments (₹500 to ₹5L per month)',
      'Flexible return rates: Conservative 8%, Moderate 10%, Aggressive 12%, Very Aggressive 15%',
      'Compare scenarios: ₹10K/month at 8% vs 12% vs 15% over 20 years',
      'Power of compounding: ₹5K/month for 30 years = ₹1.76Cr at 10% or ₹3.53Cr at 15%',
      'Step-up SIP: Increase investment 10% annually and see massive impact',
      'Lump sum vs SIP comparison: Which grows faster?',
      'Goal-based: Calculate monthly SIP needed to achieve ₹1Cr, ₹2Cr, ₹5Cr goals',
      'Works for ULIP SIP, mutual fund SIP, NPS contributions'
    ],
    benefits: [
      { title: 'Goal Planning', description: 'Want ₹1Cr in 20 years? Calculator shows ₹10K/month at 12% achieves it. Plan child education, retirement systematically.' },
      { title: 'Compounding Visualization', description: '₹10K/month for 20 years = ₹24L invested becomes ₹1Cr at 12%. ₹76L is compounding power!' },
      { title: 'Return Impact', description: 'Same ₹5K/month, 20 years: 8% = ₹30L, 10% = ₹38L, 12% = ₹50L, 15% = ₹75L. Higher returns make huge difference.' },
      { title: 'Step-up Strategy', description: 'Start ₹5K/month, increase 10% yearly. After 20 years: ₹3.5L total vs ₹12L in step-up = ₹65L vs ₹1.2Cr at 12%!' },
      { title: 'Lump Sum vs SIP', description: 'Have ₹10L now? Invest lump sum ₹10L at 12% or ₹8.3K/month SIP for 10 years - which gives more? Calculator compares.' },
      { title: 'Inflation Adjustment', description: 'Need ₹1Cr today? With 6% inflation, need ₹3.2Cr in 20 years. Calculator adjusts for inflation impact.' }
    ],
    coverage: { min: '₹500/month', max: '₹5 Lakhs/month', premium: 'Investment Based' },
    whyNeed: [
      { title: 'Retirement Planning', description: 'Need ₹5Cr at age 60? Calculator shows ₹25K/month from age 30 at 12% achieves it. Start early!', amount: '₹3-7Cr corpus' },
      { title: 'Children Education', description: 'College fees ₹25L in 15 years? ₹5K/month SIP at 12% gives ₹25L. Plan now, stress-free later.', amount: '₹20-40L' },
      { title: 'Wealth Creation', description: 'Want to become crorepati? ₹10K/month for 20 years at 12% = ₹1Cr. Achievable for salaried person!', amount: '₹1-5Cr' }
    ],
    faqs: [
      { question: 'How much will my SIP grow in 10, 20, 30 years?', answer: 'SIP GROWTH EXAMPLES: ₹5,000/MONTH SIP: 10 years at 12% = ₹11.6L (invested ₹6L, gain ₹5.6L), 20 years at 12% = ₹50L (invested ₹12L, gain ₹38L), 30 years at 12% = ₹1.76Cr (invested ₹18L, gain ₹1.58Cr). ₹10,000/MONTH SIP: 10 years at 12% = ₹23L (invested ₹12L, gain ₹11L), 20 years at 12% = ₹1Cr (invested ₹24L, gain ₹76L), 30 years at 12% = ₹3.52Cr (invested ₹36L, gain ₹3.16Cr). ₹20,000/MONTH SIP: 20 years at 12% = ₹2Cr (invested ₹48L, gain ₹1.52Cr), 30 years at 15% = ₹14Cr (invested ₹72L, gain ₹13.3Cr)! KEY INSIGHT: Longer tenure = exponential growth. 30 years vs 10 years = 15x more corpus (not 3x) due to compounding power!' }
    ],
    calculator: {
      inputs: [
        { name: 'monthlySIP', label: 'Monthly SIP Amount (₹)', type: 'number' },
        { name: 'tenure', label: 'Investment Period (Years)', type: 'number' },
        { name: 'expectedReturn', label: 'Expected Annual Return (%)', type: 'number' },
        { name: 'stepUp', label: 'Annual Step-up (%)', type: 'number' }
      ],
      outputLabel: 'Maturity Amount'
    }
  },

  'capital-guarantee-plans': {
    id: 'capital-guarantee-plans',
    title: 'Capital Guarantee Plans',
    category: 'investment',
    subtitle: '100% Capital Protection with Market-Linked Returns',
    description: 'Guaranteed return of premium with upside potential from equity/debt markets. Zero capital loss, participate in market gains.',
    icon: 'Shield',
    heroGradient: { from: 'green-500', to: 'emerald-600' },
    stats: [
      { number: '100%', label: 'Capital Protected' },
      { number: '8-12%', label: 'Potential Returns' },
      { number: 'Zero Loss', label: 'Guaranteed' },
      { number: '5-10 Years', label: 'Lock-in Period' }
    ],
    keyPoints: [
      '100% premium guaranteed back even if markets crash - zero capital loss',
      'Upside participation: 70-80% of equity gains if market goes up',
      'Typical returns: 6-8% conservative, 8-12% aggressive, better than FD',
      'Lock-in: 5-7 years mandatory, partial withdrawal after 3-5 years',
      'Tax benefits: Premium deduction 80C + maturity tax-free 10(10D)',
      'Life cover included: Sum assured = 10x annual premium as per IRDAI',
      'Ideal for risk-averse investors who fear market crashes',
      'Best of both: FD-like safety + mutual fund-like returns potential'
    ],
    benefits: [
      { title: 'Zero Capital Loss', description: 'Invest ₹10L, markets crash 30% - you still get ₹10L back minimum. Unlike mutual funds where loss can be permanent.' },
      { title: 'Upside Participation', description: 'Markets rise 50% in 5 years - you get 70% of gain = 35% return = ₹10L becomes ₹13.5L. Better than FD 6% = ₹13.4L.' },
      { title: 'Stress-Free Investing', description: 'Sleep peacefully during market crashes. Your ₹10L is safe. Risk-averse investors, retirees, conservatives love this.' },
      { title: 'Better than FD', description: 'FD: 6% guaranteed, taxable. Capital Guarantee: 6-8% potential, tax-free. Plus life cover worth ₹1Cr free.' },
      { title: 'Life Cover Included', description: 'Invest ₹10L/year - get ₹1Cr life cover. If you die, family gets ₹1Cr. Investment + protection in one.' },
      { title: 'Tax Efficiency', description: 'FD interest taxed at 30%. Capital guarantee maturity 100% tax-free. On ₹50L maturity, save ₹15L tax!' }
    ],
    coverage: { min: '₹1 Lakh/year', max: '₹25 Lakhs/year', premium: 'Lump sum or Annual' },
    whyNeed: [
      { title: 'Risk-Averse Investor', description: 'Afraid of market crashes but want better than FD returns? Capital guarantee perfect: 100% safety + 8-10% potential.', amount: '8-10% returns' },
      { title: 'Pre-Retirement', description: 'Age 55, retiring soon. Cannot afford market crash losses. Park ₹50L safely, earn 7-8% tax-free vs FD 6% taxable.', amount: '₹50L-₹2Cr safe' },
      { title: 'Goal Certainty', description: 'Daughter marriage in 5 years, need exact ₹25L. Capital guarantee ensures ₹25L minimum, maybe ₹28-30L if markets good.', amount: 'Guaranteed goal' }
    ],
    faqs: [
      { question: 'How do capital guarantee plans provide 100% protection with market returns?', answer: 'MECHANISM: Insurer splits your ₹10L premium into two parts: PART 1 - DEBT (70-80%): ₹7-8L invested in AAA bonds/G-Secs earning 7% for 5 years. ₹7L × 1.07^5 = ₹9.8L to ₹10L. This ensures capital back. PART 2 - EQUITY (20-30%): ₹2-3L invested in equity/index funds for market upside. If equity gains 50% = ₹3L becomes ₹4.5L = ₹1.5L gain. MATURITY: Debt part ₹10L + Equity gain ₹1.5L = ₹11.5L total (15% return). If equity loses 30%, debt still ensures ₹10L minimum back. YOU GET: Higher of (100% capital back) OR (Debt part + Equity gains). EXAMPLE SCENARIOS: Market up 60% in 5 years: You get ₹12L (20% return). Market flat: You get ₹10.5L (5% return). Market down 40%: You get ₹10L (0% return, but no loss). VERDICT: Perfect for risk-averse investors who want FD safety + market upside potential.' }
    ],
    calculator: {
      inputs: [
        { name: 'investment', label: 'Investment Amount (₹ Lakhs)', type: 'number' },
        { name: 'tenure', label: 'Investment Tenure (Years)', type: 'number' },
        { name: 'marketReturn', label: 'Expected Market Return (%)', type: 'number' }
      ],
      outputLabel: 'Guaranteed Minimum + Potential Returns'
    }
  },

  'dollar-based-investment': {
    id: 'dollar-based-investment',
    title: 'Dollar Based Investment Plans',
    category: 'investment',
    subtitle: 'USD-Denominated Insurance Plans for Currency Diversification',
    description: 'Invest in USD/foreign currency denominated insurance plans. Hedge rupee depreciation, earn in dollars, perfect for NRIs and global investors.',
    icon: 'DollarSign',
    heroGradient: { from: 'green-500', to: 'teal-600' },
    stats: [
      { number: 'USD/EUR', label: 'Currency Options' },
      { number: '8-12%', label: 'Dollar Returns' },
      { number: 'Hedge', label: 'Rupee Risk' },
      { number: 'NRI Friendly', label: '100% Online' }
    ],
    keyPoints: [
      'Premiums and payouts in US Dollars, Euros, or Pounds Sterling',
      'Hedge against rupee depreciation: ₹70 to ₹83 = 18.5% currency gain',
      'Ideal for NRIs earning in foreign currency to avoid forex conversion',
      'Returns 6-10% in USD terms = 12-18% in INR if rupee depreciates',
      'Tax benefits depend on residential status and country tax treaties',
      'Repatriation-friendly: Directly credited to foreign bank account',
      'Life cover in USD: $100K-$1M coverage available',
      'Portfolio diversification: Not all investments in rupee exposure'
    ],
    benefits: [
      { title: 'Currency Hedge', description: 'Rupee depreciated 18% in 10 years. $100K investment became ₹70L to ₹83L = ₹13L gain just from currency!' },
      { title: 'NRI Convenience', description: 'Earn in dollars, invest in dollars, get payout in dollars. No forex conversion charges or hassles.' },
      { title: 'Global Diversification', description: 'All investments in India/rupees? Risky. Diversify 20-30% to dollar-based assets for safety.' },
      { title: 'Better USD Returns', description: 'India dollar plans give 8-10% vs US insurance 4-6%. Higher returns in same currency!' },
      { title: 'Repatriation Easy', description: 'Maturity credited directly to your USA/UAE bank in dollars. No FEMA hassles or bank approvals needed.' },
      { title: 'Estate Planning', description: 'Leave dollar assets to family abroad. Easier than INR assets which need repatriation approvals.' }
    ],
    coverage: { min: '$10,000/year', max: '$100,000/year', premium: 'In USD/EUR' },
    whyNeed: [
      { title: 'Rupee Depreciation', description: 'Rupee weakens 3-5% yearly vs dollar. $50K investment protected from currency loss, actually gains!', amount: 'Currency hedge' },
      { title: 'NRI Retirement', description: 'Earning $100K in USA, want retirement corpus in dollars for global flexibility. Invest $10K/year.', amount: '$200K-500K' },
      { title: 'Children Abroad', description: 'Kids studying/working abroad. Leave them dollar assets, not rupee which they will have to convert.', amount: '$100K-300K' }
    ],
    faqs: [
      { question: 'How do dollar-based investment plans work for Indians?', answer: 'ELIGIBILITY: NRIs, PIOs, OCIs can invest. Resident Indians can invest up to $250K/year under LRS. PROCESS: (1) Choose plan denominated in USD/EUR/GBP, (2) Premium quoted in foreign currency - $5K/year, $10K/year, etc. (3) Payment: International credit card, wire transfer, NRE account debit. (4) Investment: Insurer invests in US/global bonds, equities. (5) Maturity: Payout in USD - $150K credited to your foreign bank. RETURNS: 6-10% in USD terms. Example: $5K/year for 20 years at 8% = $247K payout. CURRENCY BENEFIT: If rupee depreciates, your INR equivalent increases. $247K at ₹70 = ₹1.73Cr vs $247K at ₹83 = ₹2.05Cr (₹32L extra!). TAX: Depends on residential status. NRIs: Check home country tax. Residents: India taxes apply. IDEAL FOR: NRIs wanting dollar retirement corpus, Residents diversifying currency risk, Families with children abroad.' }
    ],
    calculator: {
      inputs: [
        { name: 'usdInvestment', label: 'Annual Investment ($)', type: 'number' },
        { name: 'tenure', label: 'Tenure (Years)', type: 'number' },
        { name: 'usdReturn', label: 'USD Return (%)', type: 'number' },
        { name: 'rupeeDepreciation', label: 'Expected Rupee Depreciation (%/year)', type: 'number' }
      ],
      outputLabel: 'Maturity in USD & INR'
    }
  },

  'guaranteed-return-plans': {
    id: 'guaranteed-return-plans',
    title: 'Guaranteed Return Plans',
    category: 'investment',
    subtitle: 'Fixed Returns Insurance Plans - 5-7% Guaranteed Maturity',
    description: 'Guaranteed maturity benefit plans with fixed returns, bonuses, and life cover. Safe alternative to FDs with tax benefits.',
    icon: 'TrendingUp',
    heroGradient: { from: 'blue-500', to: 'cyan-500' },
    stats: [
      { number: '5-7%', label: 'Guaranteed Returns' },
      { number: '100%', label: 'Tax-free Maturity' },
      { number: '10x', label: 'Life Cover' },
      { number: '10-20 Years', label: 'Tenure' }
    ],
    keyPoints: [
      'Guaranteed returns 5-7% declared at policy start, no market risk',
      'Bonuses added annually: Reversionary (₹50-80 per ₹1000 SA) + terminal bonus',
      'Maturity benefit = Premium paid + Guaranteed additions + Bonuses',
      'Life cover during tenure: Sum assured paid if death occurs',
      'Tax benefits: 80C deduction on premium + 10(10D) tax-free maturity',
      'Better than FD: FD gives 6% taxable = 4.2% post-tax vs Plan 6% tax-free',
      'Capital protection: Unlike ULIPs, no market crash risk',
      'Ideal for conservative investors seeking fixed income with insurance'
    ],
    benefits: [
      { title: 'Guaranteed Returns', description: 'Policy document states exact maturity benefit. ₹1L/year for 15 years = ₹25L guaranteed at maturity regardless of markets.' },
      { title: 'Bonus Addition', description: 'Annual bonuses ₹50-80 per ₹1000 sum assured + terminal bonus 2-5% of SA. Increases final corpus by 15-25%.' },
      { title: 'Tax Efficiency', description: 'FD 6% taxed at 30% = 4.2% effective. Guaranteed plan 6% tax-free = ₹10L maturity saves ₹3L tax vs FD!' },
      { title: 'Life Protection', description: 'During 15-20 year term, family gets sum assured ₹25L-50L if you die. FD has no such benefit.' },
      { title: 'No Market Risk', description: 'Returns declared upfront. Whether stock market up or down, your 6% is guaranteed. Sleep peacefully.' },
      { title: 'Forced Savings', description: 'Cannot withdraw prematurely (heavy surrender charges). Forces long-term savings discipline unlike FD you can break anytime.' }
    ],
    coverage: { min: '₹50,000/year', max: '₹5 Lakhs/year', premium: 'Annual/Half-yearly/Quarterly' },
    whyNeed: [
      { title: 'Risk-Free Returns', description: 'Retired, age 60, cannot afford market volatility. Park ₹25L, get 6% guaranteed = ₹1.5L/year income.', amount: '6% tax-free' },
      { title: 'Goal-based Savings', description: 'Daughter marriage in 15 years. ₹1L/year guaranteed plan ensures ₹25L maturity without market risk.', amount: 'Guaranteed goal' },
      { title: 'Better than FD', description: 'FD 6% taxable vs Guaranteed plan 6% tax-free + life cover. On ₹50L, save ₹15L tax over 15 years!', amount: 'Tax savings' }
    ],
    faqs: [
      { question: 'How do guaranteed return plans provide fixed returns?', answer: 'MECHANISM: Insurer invests 95-100% of your premium in government bonds, AAA corporate bonds, and fixed-income securities yielding 7-8%. They guarantee you 5-7% and keep 1-2% as profit + expenses. EXAMPLE: Pay ₹1L/year for 15 years. Total premium: ₹15L. Guaranteed maturity: ₹25L (₹10L guaranteed addition). BONUS STRUCTURE: Reversionary Bonus: ₹50-80 per ₹1000 sum assured added yearly. Terminal Bonus: 2-5% of sum assured added at maturity. Total maturity: ₹25L + ₹3L bonuses = ₹28L (6.7% CAGR). COMPARISON: FD ₹1L/year for 15 years at 6%: ₹24.67L post-tax (30% bracket). Guaranteed plan: ₹28L tax-free. FD vs Plan: ₹24.67L vs ₹28L = ₹3.33L extra with plan! PLUS: ₹25-50L life cover during 15 years. If you die, family gets SA immediately. FD has no such benefit.' }
    ],
    calculator: {
      inputs: [
        { name: 'annualPremium', label: 'Annual Premium (₹)', type: 'number' },
        { name: 'policyTerm', label: 'Policy Term (Years)', type: 'number' },
        { name: 'guaranteedRate', label: 'Guaranteed Return (%)', type: 'number' }
      ],
      outputLabel: 'Guaranteed Maturity Amount'
    }
  },

  'tax-saving-investments': {
    id: 'tax-saving-investments',
    title: 'Tax Saving Investments',
    category: 'investment',
    subtitle: 'Section 80C Investment Plans - Save up to ₹46,500 Tax Annually',
    description: 'ELSS, ULIP, PPF, NPS, and insurance investments eligible for Section 80C tax deduction. Compare best tax-saving options.',
    icon: 'Receipt',
    heroGradient: { from: 'purple-500', to: 'pink-500' },
    stats: [
      { number: '₹1.5L', label: '80C Limit' },
      { number: '₹46,500', label: 'Max Tax Saved' },
      { number: '8 Options', label: 'Investment Choices' },
      { number: '3-15 Years', label: 'Lock-in Range' }
    ],
    keyPoints: [
      '₹1.5L annual investment limit under Section 80C saves ₹46,500 tax (30% bracket)',
      'Options: ELSS MF (3yr lock), ULIP (5yr), PPF (15yr), NPS, Life insurance, FD (5yr)',
      'ELSS best returns: 12-15% with only 3-year lock-in vs others 5-15 years',
      'ULIP: 10-12% returns + life cover + tax-free maturity u/s 10(10D)',
      'PPF: 7.1% risk-free but 15-year lock-in, partial withdrawal after 7 years',
      'Life insurance: ₹1.5L premium on ₹1Cr term = 80C benefit + family protection',
      'Combine multiple: ₹50K ELSS + ₹50K ULIP + ₹50K PPF = diversified tax saving',
      'NPS additional ₹50K u/s 80CCD(1B) = total ₹2L deduction = ₹62K tax saved!'
    ],
    benefits: [
      { title: 'Immediate Tax Saving', description: '₹1.5L investment = ₹46,500 tax refund (30% bracket). That is 31% instant return!' },
      { title: 'Wealth Creation', description: 'ELSS ₹1.5L/year for 20 years at 12% = ₹1.8Cr. Tax refund ₹46.5K reinvested = ₹56L extra!' },
      { title: 'Multiple Options', description: 'Choose based on goals: ELSS (high return), ULIP (insurance+returns), PPF (safety), NPS (retirement).' },
      { title: 'Forced Savings', description: 'Lock-in ensures you do not withdraw during market crashes. Best for undisciplined investors.' },
      { title: 'Life Cover Included', description: 'ULIP and insurance premium get 80C + family gets ₹50L-₹2Cr life cover. Dual benefit!' },
      { title: 'Tax-free Maturity', description: 'ULIP, insurance, PPF maturity 100% tax-free. ELSS has 10% LTCG but only above ₹1L gains/year.' }
    ],
    coverage: { min: '₹500/month', max: '₹1.5 Lakhs/year', premium: 'Flexible SIP' },
    whyNeed: [
      { title: 'High Tax Bracket', description: 'Earning ₹15L+, paying 30% tax? Invest ₹1.5L, save ₹46.5K. Plus NPS ₹50K = save ₹62K total!', amount: '₹46K-₹62K saved' },
      { title: 'Dual Benefit', description: 'ELSS/ULIP give tax saving + wealth creation. ₹1.5L at 12% for 20 years = ₹1.8Cr + ₹9.3L tax saved!', amount: '₹1.5-2Cr corpus' },
      { title: 'Retirement Planning', description: 'Start early: ₹12.5K/month 80C investment for 30 years at 12% = ₹5.3Cr retirement corpus!', amount: '₹3-7Cr' }
    ],
    faqs: [
      { question: 'Which is the best 80C investment for maximum returns and tax saving?', answer: 'COMPARISON: ELSS (Equity Mutual Funds): Returns 12-15%, Lock-in 3 years, Risk High, Tax on maturity 10% LTCG above ₹1L. VERDICT: Best for high returns. ULIP: Returns 10-12%, Lock-in 5 years, Risk Medium-High, Tax-free maturity + life cover. VERDICT: Best for insurance + returns. PPF: Returns 7.1%, Lock-in 15 years, Risk Zero, Tax-free maturity. VERDICT: Best for safety. NPS: Returns 10-12%, Lock-in till 60, Risk Medium, 60% taxable on maturity. VERDICT: Best for retirement. Life Insurance: Returns 0% (pure term), Lock-in till policy end, Tax-free death benefit. VERDICT: Best for family protection. RECOMMENDATION: Combine multiple for diversification: ₹75K ELSS (high return, 3yr lock), ₹50K ULIP (insurance + return, 5yr lock), ₹25K PPF (safety net, 15yr lock). This gives you best of all worlds: high returns + safety + insurance + tax saving ₹46,500 in 30% bracket!' }
    ],
    calculator: {
      inputs: [
        { name: 'investment80C', label: '80C Investment (₹)', type: 'number' },
        { name: 'taxBracket', label: 'Tax Bracket (%)', type: 'select', options: ['5', '20', '30'] },
        { name: 'investmentType', label: 'Investment Type', type: 'select', options: ['ELSS', 'ULIP', 'PPF', 'NPS', 'Life Insurance'] }
      ],
      outputLabel: 'Tax Saved'
    }
  },

  'sip-systematic-investment': {
    id: 'sip-systematic-investment',
    title: 'SIP - Systematic Investment Plan',
    category: 'investment',
    subtitle: 'Monthly Investment Discipline for Wealth Creation',
    description: 'Invest fixed amount monthly in mutual funds, ULIPs, or NPS. Start with ₹500, build ₹1-5Cr corpus through rupee cost averaging.',
    icon: 'Repeat',
    heroGradient: { from: 'green-500', to: 'emerald-500' },
    stats: [
      { number: '₹500', label: 'Minimum Start' },
      { number: '12-15%', label: 'Avg Returns' },
      { number: '24x', label: '20-year Growth' },
      { number: 'No Timing', label: 'Market Proof' }
    ],
    keyPoints: [
      'Invest ₹500 to ₹5L monthly automatically via bank auto-debit - no manual effort',
      'Rupee cost averaging: Buy more units when market low, fewer when high - average cost optimized',
      'Power of compounding: ₹10K/month for 20 years at 12% = ₹1Cr (invested ₹24L, gain ₹76L!)',
      'No market timing needed: Whether market high or low, SIP averages out over long term',
      'Flexible: Pause, skip, increase, decrease SIP anytime without penalty',
      'Step-up SIP: Increase 10% yearly - ₹5K becomes ₹27K in 20 years = ₹3Cr corpus!',
      'Tax benefits: ELSS SIP gets 80C, ULIP SIP gets 80C + 10(10D) tax-free maturity',
      'Builds discipline: Automatic investment every month ensures consistent wealth creation'
    ],
    benefits: [
      { title: 'Disciplined Investing', description: 'Auto-debit ₹10K monthly. No decision fatigue. Invest whether market up or down. Discipline = wealth.' },
      { title: 'Rupee Cost Averaging', description: 'Market crash? Buy more units cheap. Market high? Buy fewer. Average cost always optimal vs lump sum.' },
      { title: 'Compounding Power', description: '₹5K/month for 30 years at 12% = ₹1.76Cr. Same amount without compounding = ₹18L. ₹1.58Cr is pure compounding!' },
      { title: 'Start Small, Grow Big', description: 'Start with ₹500/month, increase to ₹5K, then ₹10K as income grows. Total corpus: ₹50L+ in 20 years.' },
      { title: 'No Market Timing', description: '95% investors lose trying to time market. SIP removes timing stress - invest every month regardless.' },
      { title: 'Goal Achievement', description: 'Want ₹1Cr in 20 years? ₹10K/month at 12% achieves it. Want ₹5Cr? ₹40K/month does it. Math is simple!' }
    ],
    coverage: { min: '₹500/month', max: '₹5 Lakhs/month', premium: 'Monthly auto-debit' },
    whyNeed: [
      { title: 'Retirement Corpus', description: 'Age 30, retire 60. ₹15K/month SIP at 12% for 30 years = ₹5.29Cr. Enough for comfortable retirement!', amount: '₹3-7Cr' },
      { title: 'Children Education', description: 'Child born today, college in 18 years. ₹5K/month at 12% = ₹36.7L. Covers ₹30L college fees easily!', amount: '₹25-50L' },
      { title: 'Crorepati Dream', description: 'Middle class salaried? ₹10K/month for 20 years = ₹1Cr. Achievable for anyone with discipline!', amount: '₹1-3Cr' }
    ],
    faqs: [
      { question: 'How much will my SIP grow in 10, 20, 30 years?', answer: 'SIP EXAMPLES: ₹5,000/MONTH at 12%: 10 years = ₹11.6L (invested ₹6L), 20 years = ₹50L (invested ₹12L), 30 years = ₹1.76Cr (invested ₹18L). ₹10,000/MONTH at 12%: 10 years = ₹23L, 20 years = ₹1Cr, 30 years = ₹3.52Cr. ₹25,000/MONTH at 12%: 20 years = ₹2.5Cr, 30 years = ₹8.8Cr. ₹50,000/MONTH at 15%: 20 years = ₹7.6Cr, 30 years = ₹34.9Cr! MAGIC OF COMPOUNDING: In 30-year SIP, first 10 years contribute 15% of corpus, next 10 years contribute 25%, last 10 years contribute 60%! That is compounding power. STEP-UP SIP: Start ₹5K, increase 10% yearly. In 20 years: Total invested ₹31L → Corpus ₹1.58Cr at 12% (vs ₹50L in level SIP). Step-up makes you 3x richer!' }
    ],
    calculator: {
      inputs: [
        { name: 'monthlySIP', label: 'Monthly SIP (₹)', type: 'number' },
        { name: 'years', label: 'Investment Period (Years)', type: 'number' },
        { name: 'expectedReturn', label: 'Expected Return (%)', type: 'number' },
        { name: 'annualStepUp', label: 'Annual Step-up (%)', type: 'number' }
      ],
      outputLabel: 'Maturity Amount & Wealth Gained'
    }
  },

  'lic-life-insurance': {
    id: 'lic-life-insurance',
    title: 'LIC - Life Insurance Corporation',
    category: 'investment',
    subtitle: 'India\'s Largest Insurer - Term, Endowment, ULIP, Pension Plans',
    description: 'Government-owned LIC with 70% market share, highest trust, 98% claim settlement. Compare LIC Jeevan Anand, Jeevan Umang, Tech Term plans.',
    icon: 'Building',
    heroGradient: { from: 'orange-500', to: 'red-500' },
    stats: [
      { number: '70%', label: 'Market Share' },
      { number: '97.79%', label: 'Claim Settlement' },
      { number: '₹250Cr', label: 'Claims Paid Daily' },
      { number: '2,000+', label: 'Branch Offices' }
    ],
    keyPoints: [
      'India\'s most trusted insurer - government-owned, 67 years legacy, cannot go bankrupt',
      'Claim settlement ratio 97.79% - 98% claims approved, family assured of payout',
      '2,048 branch offices, 1.3 million agents - service available in remotest villages',
      'Popular plans: LIC Jeevan Anand, Jeevan Umang, Tech Term, New Endowment, Siip',
      'Term insurance: ₹1Cr coverage for ₹13K/year (age 30), higher than pvt insurers',
      'Traditional plans: Guaranteed returns 5-6% + bonuses, capital protection',
      'Pension plans: Jeevan Akshay, Jeevan Shanti for guaranteed lifetime income',
      'Loyalty bonus: Policies held >20 years get special bonuses, higher returns'
    ],
    benefits: [
      { title: 'Ultimate Trust', description: 'Government backing = zero bankruptcy risk. Private insurers can fail, LIC cannot. Critical for 30-40 year policies.' },
      { title: 'Widespread Network', description: 'Branch in every district. Claim settlement in Tier 3 cities easier with LIC vs private insurer with only metro offices.' },
      { title: 'High Claim Settlement', description: '97.79% CSR means family will get claim. No harassment, genuine claims paid promptly.' },
      { title: 'Participating Plans', description: 'LIC policies participate in company profits. Higher profits = higher bonuses for policyholders vs shareholders.' },
      { title: 'Traditional Plans', description: 'Conservative investors trust LIC endowment/money back over ULIP market risk. 5-6% guaranteed + bonuses.' },
      { title: 'Rural Reach', description: 'LIC agents even in small towns. Elderly parents in village can visit local office vs struggling with pvt insurer call center.' }
    ],
    coverage: { min: '₹25 Lakhs', max: '₹10 Crore', premium: '₹6K-₹50K/year' },
    whyNeed: [
      { title: 'Government Trust', description: 'Private insurer bankruptcy risk exists. LIC is government - absolutely safe. Critical for 30-40 year policy horizon.', amount: 'Zero risk' },
      { title: 'Elderly Parents', description: 'Parents not tech-savvy, live in small town. LIC local branch for policy service vs online-only private insurers.', amount: 'Convenience' },
      { title: 'Traditional Safety', description: 'Do not trust market-linked ULIPs? LIC endowment plans give guaranteed 5-6% + bonuses, absolutely safe.', amount: '5-6% assured' }
    ],
    faqs: [
      { question: 'Is LIC better than private insurers for term insurance?', answer: 'COMPARISON: LIC TERM (Tech Term): ₹1Cr, age 30, 30 years = ₹13,450/year. HDFC Click2Protect: ₹1Cr, age 30, 30 years = ₹10,245/year. Max Life Smart Secure: ₹1Cr, age 30, 30 years = ₹9,851/year. LIC is 30-35% COSTLIER than private insurers. WHY? LIC has agent commission, branch costs, legacy systems. Private insurers are online, lean operations. CLAIM SETTLEMENT: LIC 97.79%, HDFC 99.05%, Max Life 99.51%. Private insurers actually BETTER! WHEN TO CHOOSE LIC: (1) Parents in small town, need local branch service. (2) Distrust private insurers, want government backing. (3) Elderly, not comfortable with online insurers. (4) Rural area where only LIC has presence. WHEN TO CHOOSE PRIVATE: (1) Lower premium saves ₹3-5K/year = ₹1.5L over 30 years. (2) Better online experience, instant policy. (3) Higher claim settlement ratios. (4) More riders, flexible terms. VERDICT: For term insurance, private insurers (HDFC, Max, ICICI) better on price and CSR. For traditional/endowment plans, LIC strong option for safety and trust.' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'coverage', label: 'Coverage Needed (₹ Lakhs)', type: 'number' },
        { name: 'planType', label: 'Plan Type', type: 'select', options: ['Term Insurance', 'Endowment', 'Money Back', 'ULIP'] }
      ],
      outputLabel: 'LIC Premium Estimate'
    }
  },

  'money-back-policy': {
    id: 'money-back-policy',
    title: 'Money Back Policy',
    category: 'investment',
    subtitle: 'Periodic Survival Benefits + Maturity + Life Cover Combined',
    description: 'Get 20% of sum assured every 5 years as survival benefit, plus maturity bonus, plus life cover. Liquidity with protection.',
    icon: 'Banknote',
    heroGradient: { from: 'green-500', to: 'lime-500' },
    stats: [
      { number: '20%', label: 'Every 5 Years' },
      { number: '5-6%', label: 'Effective Returns' },
      { number: '100%', label: 'Life Cover' },
      { number: 'Tax-free', label: 'Payouts' }
    ],
    keyPoints: [
      'Survival benefits: Get 20% of sum assured every 5 years while policy active',
      'Example: ₹25L plan, 20 years → Get ₹5L at year 5, ₹5L at year 10, ₹5L at year 15',
      'Maturity benefit: At year 20, get remaining 40% + bonuses (₹10L + ₹3-5L bonus)',
      'Life cover intact: Despite payouts, full ₹25L paid to family if death occurs',
      'Premium: ₹80-100K/year for ₹25L plan, higher than endowment due to survival benefits',
      'Tax benefits: 80C deduction on premium, all survival benefits + maturity tax-free',
      'Liquidity: Regular cash flow every 5 years vs endowment where money locked till maturity',
      'Ideal for: Those needing periodic liquidity for goals (kids admission, marriage, business)'
    ],
    benefits: [
      { title: 'Periodic Cash Flow', description: 'Every 5 years get ₹5L. Use for child school admission, business expansion, emergency, or reinvest.' },
      { title: 'Full Life Cover', description: 'Even after receiving ₹15L survival benefits, if you die, family still gets full ₹25L sum assured!' },
      { title: 'Disciplined Savings', description: 'Forced savings of ₹1L/year for 20 years. Cannot withdraw prematurely. Builds corpus systematically.' },
      { title: 'Tax-free Returns', description: 'All survival benefits ₹5L each + maturity ₹10L + bonus ₹5L = ₹30L total, 100% tax-free u/s 10(10D).' },
      { title: 'Goal-based', description: 'Year 5: First survival ₹5L for car down payment. Year 10: ₹5L for child admission. Year 15: ₹5L for renovation.' },
      { title: 'Bonuses Added', description: 'Reversionary bonus ₹50-70/₹1000 SA + terminal bonus 2-5% SA added to maturity. Boosts final corpus 15-20%.' }
    ],
    coverage: { min: '₹2 Lakhs SA', max: '₹50 Lakhs SA', premium: '₹80K-₹100K per ₹25L SA' },
    whyNeed: [
      { title: 'Periodic Goals', description: 'Multiple goals over 20 years? Survival benefits every 5 years fund each goal without breaking policy.', amount: '₹15-30L total' },
      { title: 'Liquidity with Protection', description: 'Need regular cash flow but also life cover? Money back gives both vs endowment where money locked till end.', amount: 'Both benefits' },
      { title: 'Children Milestones', description: 'School (year 5), College (year 10), Marriage (year 20). Money back survival benefits perfectly timed!', amount: '₹5L each milestone' }
    ],
    faqs: [
      { question: 'How do money back policies work with survival benefits?', answer: 'STRUCTURE: Sum Assured: ₹25L, Tenure: 20 years, Premium: ₹100K/year for 15 years (15-pay, 20-year policy). SURVIVAL BENEFITS: Year 5: 20% of ₹25L = ₹5L paid to you (tax-free). Year 10: 20% = ₹5L paid. Year 15: 20% = ₹5L paid. Total received: ₹15L during policy term. MATURITY BENEFIT (Year 20): Remaining 40% = ₹10L + Bonuses ₹3-5L = ₹13-15L. TOTAL PAYOUT: ₹15L (survival) + ₹13L (maturity) = ₹28L. Premium paid: ₹100K × 15 = ₹15L. Gain: ₹13L = 5.3% CAGR returns (tax-free). DEATH BENEFIT: If you die anytime (even after receiving ₹15L survival benefits), family gets full ₹25L + bonus + survival benefits already paid are NOT deducted! EXAMPLE: You die in year 16. Family gets: (₹25L SA + ₹3L bonus) - already paid ₹15L? NO! Family gets full ₹28L, and you already got ₹15L survival benefits = total ₹43L value!' }
    ],
    calculator: {
      inputs: [
        { name: 'sumAssured', label: 'Sum Assured (₹ Lakhs)', type: 'number' },
        { name: 'policyTerm', label: 'Policy Term (Years)', type: 'number' },
        { name: 'premiumPayingTerm', label: 'Premium Paying Term (Years)', type: 'number' }
      ],
      outputLabel: 'Survival Benefits Schedule'
    }
  },

  'annuity-plans': {
    id: 'annuity-plans',
    title: 'Annuity Plans',
    category: 'investment',
    subtitle: 'Guaranteed Monthly Income for Life After Retirement',
    description: 'Invest lump sum, get fixed monthly pension for lifetime. Ideal for retirees seeking regular income without market risk.',
    icon: 'Calendar',
    heroGradient: { from: 'purple-500', to: 'indigo-500' },
    stats: [
      { number: '5-7%', label: 'Annuity Rate' },
      { number: 'Lifetime', label: 'Payout Period' },
      { number: 'Monthly', label: 'Income' },
      { number: 'Tax-free', label: '1/3rd Withdrawal' }
    ],
    keyPoints: [
      'Immediate annuity: Invest ₹1Cr lump sum, get ₹50-60K/month for lifetime',
      'Deferred annuity: Pay ₹2L/year for 15 years, get ₹35K/month from age 60 till death',
      'Annuity rates 5-7%: ₹1Cr gives ₹5-7L/year = ₹42K-58K/month guaranteed',
      'Options: Life annuity (highest payout), joint life (for spouse), return of purchase price',
      'Tax: 1/3rd withdrawal tax-free, remaining 2/3rd annuity income taxable',
      'No market risk: Fixed rate declared at start, unaffected by market crashes',
      'Inflation protection: Choose increasing annuity option (3% annual increase)',
      'Ideal for: Retirees with lump sum (PF, gratuity, inheritance) seeking fixed income'
    ],
    benefits: [
      { title: 'Guaranteed Income', description: '₹1Cr annuity at 6% = ₹50K/month for life. No market risk, no depletion, income never stops till death.' },
      { title: 'Peace of Mind', description: 'Retire at 60, live till 85. 25 years × ₹50K/month = ₹1.5Cr total income vs ₹1Cr invested. Beat inflation!' },
      { title: 'Spouse Protection', description: 'Joint life annuity: If you die, spouse continues getting ₹50K/month for her life. No financial stress.' },
      { title: 'No Management', description: 'Unlike mutual funds needing withdrawals, annuity auto-credits ₹50K monthly. No decisions, pure autopilot.' },
      { title: 'Capital Protection', description: 'Return of purchase price option: Get ₹45K/month for life + ₹1Cr returned to family after death.' },
      { title: 'Tax Planning', description: 'Withdraw ₹33L tax-free at start, invest ₹67L in annuity. Reduces taxable income, optimizes post-retirement tax.' }
    ],
    coverage: { min: '₹1 Lakh lump sum', max: '₹10 Crore lump sum', premium: 'One-time or Deferred' },
    whyNeed: [
      { title: 'Retirement Income', description: 'Retired with ₹1Cr corpus? Annuity gives ₹50-60K/month guaranteed for life vs SWP from MF has market risk.', amount: '₹40K-₹1L/month' },
      { title: 'Pension Supplement', description: 'Company pension ₹30K insufficient. Annuity adds ₹50K more = ₹80K total. Maintain lifestyle comfortably.', amount: '+₹30-70K/month' },
      { title: 'Spouse Security', description: 'If you die early, spouse gets annuity for her life (could be 20-30 more years). Better than FD/mutual fund.', amount: 'Lifetime income' }
    ],
    faqs: [
      { question: 'How much monthly income will I get from annuity plan?', answer: 'ANNUITY INCOME CALCULATION: ₹50 LAKH LUMP SUM: Immediate annuity at 6% = ₹25K/year = ₹25K/month. Joint life (self + spouse) at 5.5% = ₹22.9K/month. Return of purchase price at 5% = ₹20.8K/month (₹50L returned to family after death). ₹1 CRORE LUMP SUM: Life annuity at 6.5% = ₹54K/month for your life. Joint life at 6% = ���50K/month for both lives. Increasing annuity (3% yearly) at 5% start = ₹41.6K/month initially, ₹56K by year 10. ₹2 CRORE LUMP SUM: Life annuity at 6.5% = ₹1.08L/month. Joint life at 6% = ₹1L/month. AGE IMPACT: Age 60: Annuity rate 6-6.5%. Age 70: Rate 7-8% (shorter life expectancy). Age 50: Rate 5-5.5% (longer payout expected). RECOMMENDATION: Compare multiple insurers (LIC Jeevan Akshay, SBI Life Annuity, HDFC Pension Sanchay). Rates vary 0.5-1%, which is ₹5-10K/month on ₹1Cr!' }
    ],
    calculator: {
      inputs: [
        { name: 'lumpSum', label: 'Lump Sum Investment (₹ Lakhs)', type: 'number' },
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'annuityType', label: 'Annuity Type', type: 'select', options: ['Life Annuity', 'Joint Life', 'Return of Purchase', 'Increasing Annuity'] }
      ],
      outputLabel: 'Monthly Annuity Income'
    }
  },

  'income-tax-calculator': {
    id: 'income-tax-calculator',
    title: 'Income Tax Calculator',
    category: 'investment',
    subtitle: 'Calculate Tax, Deductions, Refund for FY 2024-25',
    description: 'Free income tax calculator with old vs new regime comparison, 80C/80D deductions, HRA exemption, and tax optimization tips.',
    icon: 'Calculator',
    heroGradient: { from: 'red-500', to: 'orange-500' },
    stats: [
      { number: 'Free', label: 'No Registration' },
      { number: '2 Regimes', label: 'Old vs New' },
      { number: '10+ Sections', label: 'Deductions' },
      { number: 'Instant', label: 'Results' }
    ],
    keyPoints: [
      'Old regime: ₹2.5L exemption + 80C ₹1.5L + 80D ₹25K + HRA + Home loan',
      'New regime: ₹3L exemption, higher slabs, no deductions (FY 2024-25 updated)',
      'Compare which regime saves more tax based on your investments and deductions',
      '80C: ₹1.5L on ELSS, PPF, insurance, PF, NSC, tax saving FD, SCSS',
      '80D: Health insurance ₹25K (<60 age), ₹50K (>60 age), ₹5K preventive checkup',
      'HRA exemption: Actual HRA, 50% salary (metro), 40% (non-metro), Rent-10% salary',
      'Home loan: ₹2L interest u/s 24(b) + ₹1.5L principal u/s 80C',
      'Tax slabs: 0-₹3L (Nil), ₹3-7L (5%), ₹7-10L (10%), ₹10-12L (15%), ₹12-15L (20%), 15L+ (30%)'
    ],
    benefits: [
      { title: 'Old vs New Regime', description: 'Salary ₹12L: Old regime with deductions = ₹78K tax. New regime = ₹90K tax. Old regime saves ₹12K!' },
      { title: 'Optimize Deductions', description: 'Use full ₹1.5L 80C + ₹25K 80D + HRA. Can reduce tax from ₹2.5L to ₹1.2L = save ₹1.3L!' },
      { title: 'Tax Planning', description: 'Calculator shows exact deduction needed to drop to lower slab. ₹10.2L income? Invest ₹20K to stay in 10% slab!' },
      { title: 'Refund Calculation', description: 'TDS ₹1.5L but actual tax ₹1.2L? Get ₹30K refund. Calculator shows exact refund amount with ITR filing.' },
      { title: 'Salary Restructuring', description: 'Ask employer for tax-free perks: ₹50K mobile, ₹50K fuel, ₹1L books. Reduces taxable salary = lower tax!' },
      { title: 'Investment Guidance', description: 'Want to save more tax? Calculator suggests 80C/80D/NPS investments to reduce tax burden.' }
    ],
    coverage: { min: 'Any Income', max: 'All Brackets', premium: 'Free' },
    whyNeed: [
      { title: 'Tax Optimization', description: 'Income ₹15L, paying ₹2.5L tax? Use calculator to plan 80C, 80D, HRA, NPS. Reduce tax to ₹1.5L!', amount: 'Save ₹50K-₹1.5L' },
      { title: 'Regime Choice', description: 'New regime better for low deductions. Old regime better with investments. Calculator shows which saves more.', amount: '₹10-50K saved' },
      { title: 'Refund Claim', description: 'Excess TDS deducted? Calculator shows refund amount and helps file ITR correctly to get money back.', amount: '₹10-₹2L refund' }
    ],
    faqs: [
      { question: 'Should I choose old tax regime or new tax regime?', answer: 'OLD REGIME BETTER IF: You have 80C investments (₹1.5L), Health insurance (₹25K), Home loan (₹2L interest), HRA (₹3-5L), Total deductions >₹5L. EXAMPLE: Salary ₹15L, Deductions ₹5L. Old: Tax = ₹1.35L. New: Tax = ₹1.75L. Old saves ₹40K! NEW REGIME BETTER IF: No investments, Renting but no HRA, Young with no commitments, Total deductions <₹2.5L. EXAMPLE: Salary ₹8L, No deductions. Old: Tax = ₹62.4K. New: Tax = ₹45K. New saves ₹17K! CALCULATION: Income ₹12L. OLD REGIME: Deductions (80C ₹1.5L + 80D ₹25K + HRA ₹3L) = ₹7.25L taxable. Tax = ₹72.8K. NEW REGIME: No deductions, ₹12L taxable. Tax = ₹1.1L. Old regime saves ₹37K! VERDICT: OLD regime better for people with investments/home loans (₹10L+ income). NEW regime better for young earners with no commitments (<₹10L income).' }
    ],
    calculator: {
      inputs: [
        { name: 'annualIncome', label: 'Annual Income (₹)', type: 'number' },
        { name: 'deduction80C', label: '80C Investments (₹)', type: 'number' },
        { name: 'deduction80D', label: 'Health Insurance (₹)', type: 'number' },
        { name: 'hra', label: 'HRA Received (₹)', type: 'number' },
        { name: 'homeLoanInterest', label: 'Home Loan Interest (₹)', type: 'number' }
      ],
      outputLabel: 'Tax Payable (Old vs New Regime)'
    }
  }
};

// ========================================
// HEALTH INSURANCE - Additional Products
// ========================================

export const additionalHealthProducts: Record<string, InsuranceProduct> = {
  'family-health-insurance': {
    id: 'family-health-insurance',
    title: 'Family Health Insurance',
    category: 'health',
    subtitle: 'Complete Health Cover for Family - Parents, Spouse, Kids',
    description: 'Single policy covering entire family with ₹5L-₹25L sum insured, cashless hospitalization, and no claim bonus.',
    icon: 'Users',
    heroGradient: { from: 'green-500', to: 'teal-500' },
    stats: [
      { number: '₹5-25L', label: 'Sum Insured' },
      { number: '4-6 Members', label: 'Coverage' },
      { number: '50%', label: 'No Claim Bonus' },
      { number: '9,000+', label: 'Network Hospitals' }
    ],
    keyPoints: [
      'Floater policy: ₹10L coverage shared by self + spouse + 2 kids',
      'Individual sum insured: ₹5L each for 4 members = ₹20L total (costlier)',
      'Premium savings: Family floater 40-50% cheaper than separate policies',
      'Coverage: Hospitalization, pre-post hospitalization, daycare, ambulance',
      'No claim bonus: 50-100% SI increase if no claims (₹10L becomes ₹15-20L)',
      'Restoration benefit: SI restores to ₹10L if exhausted during year',
      'Tax benefits: ₹25K u/s 80D for family, ₹50K if parents also covered',
      'Cashless: 9,000+ network hospitals across India, no upfront payment'
    ],
    benefits: [
      { title: 'Complete Family Protection', description: 'One policy covers everyone. Father hospitalized for ₹4L, son for ₹3L - both covered under ₹10L floater.' },
      { title: 'Cost Savings', description: '₹10L floater for 4 = ₹15K premium vs 4 individual ₹2.5L policies = ₹25K. Save ₹10K/year!' },
      { title: 'Flexibility', description: 'SI floats across members. Critical illness uses ₹7L, remaining ₹3L available for others during same year.' },
      { title: 'No Claim Bonus', description: 'No claims for 3 years? ₹10L SI increases to ₹15L free! Rewards healthy lifestyle, builds buffer.' },
      { title: 'Restoration Benefit', description: 'SI exhausted? Automatic restore for fresh claims. Example: ₹10L used, ₹10L more available = ₹20L effective coverage!' },
      { title: 'Tax Savings', description: 'Family premium ₹15K + parents premium ₹20K = ₹35K deduction saves ₹10.5K tax (30% bracket).' }
    ],
    coverage: { min: '₹5 Lakhs', max: '₹25 Lakhs', premium: '₹10,000 - ₹30,000/year' },
    whyNeed: [
      { title: 'Medical Inflation', description: 'Hospital costs rising 15%/year. Today\'s ₹3L surgery will cost ₹12L in 10 years. ₹10L+ coverage essential.', amount: '₹10-25L' },
      { title: 'Multiple Members', description: 'Family of 4: You, spouse, 2 kids. Anyone can fall sick. ₹10L floater covers all vs ₹2.5L each insufficient.', amount: '₹10-15L floater' },
      { title: 'Critical Illness', description: 'Cancer treatment ₹8-15L. Heart surgery ₹5-8L. Organ transplant ₹15-25L. Need high sum insured.', amount: '₹15-25L' }
    ],
    faqs: [
      { question: 'Family Floater vs Individual Health Insurance - which is better?', answer: 'FAMILY FLOATER: ₹10L shared by 4 members (self, spouse, 2 kids), Premium: ₹15K/year, Total coverage: ₹10L (can be used by any member), Best for: Young families, healthy members, Example: Father uses ₹4L, Mother uses ₹3L, Kids use ₹2L = ₹9L total (under ₹10L limit). INDIVIDUAL POLICY: ₹2.5L for each 4 members = ₹10L total coverage, Premium: ₹25K/year (₹6.25K each), Each member gets dedicated ₹2.5L, Best for: Elderly members, pre-existing conditions, Example: Father needs ₹5L surgery but only ₹2.5L available (problem!). VERDICT: Floater BETTER for families with young kids (cheaper + flexible). Individual BETTER for elderly/high-risk members (dedicated limit). IDEAL COMBO: ₹10L floater for self+spouse+kids + ₹5L separate for parents = comprehensive coverage at optimal cost!' }
    ],
    calculator: {
      inputs: [
        { name: 'members', label: 'Number of Members', type: 'number' },
        { name: 'sumInsured', label: 'Sum Insured (₹ Lakhs)', type: 'number' },
        { name: 'ageOldest', label: 'Age of Oldest Member', type: 'number' }
      ],
      outputLabel: 'Annual Premium Estimate'
    }
  },

  'health-insurance-parents': {
    id: 'health-insurance-parents',
    title: 'Health Insurance for Parents',
    category: 'health',
    subtitle: 'Senior Citizen Health Cover for Parents Above 60 Years',
    description: 'Specialized health insurance for elderly parents (60+ age) with pre-existing disease cover, higher sum insured, and no medical tests.',
    icon: 'Heart',
    heroGradient: { from: 'red-500', to: 'pink-500' },
    stats: [
      { number: '₹3-10L', label: 'Sum Insured' },
      { number: '60-80 Years', label: 'Age Coverage' },
      { number: 'Day 1', label: 'Pre-existing Cover' },
      { number: '₹30-80K', label: 'Annual Premium' }
    ],
    keyPoints: [
      'Senior citizen health insurance for parents aged 60-80 years',
      'Pre-existing diseases covered from day 1: Diabetes, hypertension, heart issues',
      'No medical tests required for sum insured up to ₹5L at age 60-65',
      'Higher premiums due to age: ₹5L coverage = ₹30-50K/year for 65-year-old',
      'Lifetime renewability: Policy continues till age 99, no age-related rejection',
      'Cashless hospitalization at 10,000+ network hospitals across India',
      'Tax benefits: ₹50K deduction u/s 80D for parents >60 years',
      'Restoration & reload benefits: SI restores/reloads if exhausted'
    ],
    benefits: [
      { title: 'Pre-existing Cover', description: 'Parents have diabetes/BP? Covered from day 1 vs regular policies with 2-4 year waiting.' },
      { title: 'High Medical Need', description: 'Elderly hospitalization frequency 5-10x higher than youth. ₹5L coverage essential for parents.' },
      { title: 'No Medical Tests', description: 'Age 65, ₹5L coverage - no tests needed. Easier approval vs regular policy demanding ECG, blood tests.' },
      { title: 'Lifetime Renewability', description: 'Buy at 65, renew till 99. Even if parent claims ₹4L at age 75, policy will not be rejected at renewal.' },
      { title: 'Tax Saving', description: 'Premium ₹40K for parents = ₹40K deduction saves ₹12K tax (30% bracket). Effective premium = ₹28K.' },
      { title: 'Peace of Mind', description: 'Parents in hometown, you in metro. Cashless facility means they get treatment without calling you for money.' }
    ],
    coverage: { min: '₹3 Lakhs', max: '₹10 Lakhs', premium: '₹25,000 - ₹80,000/year' },
    whyNeed: [
      { title: 'High Medical Risk', description: 'Parents age 65-75 have 60% chance of hospitalization/year. Surgery, diabetes, heart issues common.', amount: '₹3-8L/year expenses' },
      { title: 'Pre-existing Diseases', description: 'Parents already diabetic/hypertensive? Regular policy has 2-4 year waiting. Senior citizen policy covers day 1.', amount: 'Immediate coverage' },
      { title: 'Your Financial Protection', description: 'Without insurance, parent\'s ₹5L surgery drains your savings/investments. Insurance protects your finances.', amount: 'Save ₹3-10L' }
    ],
    faqs: [
      { question: 'Best health insurance for parents above 60 years?', answer: 'TOP SENIOR CITIZEN PLANS: (1) Star Health Senior Citizen Red Carpet: ₹5L @ ₹38K (age 65), Pre-existing day 1, No tests till ₹5L, Restoration benefit. (2) Care Health Care Senior: ₹5L @ ₹36K, Annual health checkup free, Unlimited automatic restoration. (3) HDFC Ergo My Health Suraksha Gold: ₹5L @ ₹40K, Worldwide coverage, Cumulative bonus 100%. (4) Max Bupa Health Companion: ₹5L @ ₹42K, OPD cover, Home healthcare. FEATURES TO LOOK: Pre-existing waiting period: 1-2 years (lower better), Restoration: Unlimited or 100% (essential), Co-payment: 10-20% (you pay portion), Network hospitals: 8,000+ (more better). RECOMMENDATION: Age 60-70: Star Senior Citizen (₹38K, best features). Age 70-80: Care Senior (₹55K, accepts high age). Parent diabetic: Look for zero waiting plans.' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Parent Age', type: 'number' },
        { name: 'sumInsured', label: 'Sum Insured (₹ Lakhs)', type: 'number' },
        { name: 'preExisting', label: 'Pre-existing Diseases', type: 'select', options: ['None', 'Diabetes', 'Hypertension', 'Heart Disease', 'Multiple'] }
      ],
      outputLabel: 'Annual Premium Estimate'
    }
  },

  'maternity-insurance': {
    id: 'maternity-insurance',
    title: 'Maternity Insurance',
    category: 'health',
    subtitle: 'Pregnancy & Childbirth Coverage - Normal & C-Section Delivery',
    description: 'Maternity health insurance covering pregnancy, delivery (₹50K-₹1L), newborn care, and pre-post natal expenses.',
    icon: 'Baby',
    heroGradient: { from: 'pink-500', to: 'rose-500' },
    stats: [
      { number: '₹50K-₹1L', label: 'Delivery Expenses' },
      { number: '9 Months', label: 'Waiting Period' },
      { number: '₹10-50K', label: 'Premium/year' },
      { number: '4 Deliveries', label: 'Lifetime Limit' }
    ],
    keyPoints: [
      'Maternity coverage: Normal delivery ₹50K, C-section ₹75K-₹1L sub-limit',
      'Waiting period: 9 months to 4 years depending on policy (plan before pregnancy!)',
      'Newborn baby cover: ₹50K-₹1L for complications, NICU, vaccinations',
      'Pre-natal: Doctor consultations, ultrasounds, tests covered (₹5-10K)',
      'Post-natal: Mother care for 30-90 days post delivery (₹5-10K)',
      'Complications covered: Pre-eclampsia, ectopic pregnancy, miscarriage',
      'Add-on to family floater: Maternity rider adds ₹3-5K to regular premium',
      'Standalone maternity plans: Specific policies with no waiting (₹50K premium)'
    ],
    benefits: [
      { title: 'Delivery Cost Coverage', description: 'C-section costs ₹75K-₹1.5L. Insurance covers ₹75K-₹1L, you pay minimal co-pay or difference.' },
      { title: 'Newborn Protection', description: 'Baby born with complications, NICU needed (₹2-5L cost). ₹50K-₹1L newborn cover prevents huge bills.' },
      { title: 'Pre-Post Natal Care', description: 'Monthly checkups, ultrasounds, tests, medicines (₹15-25K during pregnancy) partially covered.' },
      { title: 'Complications Cover', description: 'Pregnancy complications like pre-eclampsia hospitalization (₹1-2L) covered under main SI.' },
      { title: 'Peace of Mind', description: 'Plan pregnancy without financial worry. Delivery cost + baby complications up to ₹2-3L covered.' },
      { title: 'Tax Benefits', description: 'Family floater with maternity rider premium ₹18K deductible u/s 80D saves ₹5.4K tax.' }
    ],
    coverage: { min: '₹50,000', max: '₹2 Lakhs', premium: '₹8,000 - ₹25,000/year' },
    whyNeed: [
      { title: 'Delivery Costs', description: 'Normal delivery ₹40-60K, C-section ₹75K-₹1.5L. Without insurance, burns savings meant for baby\'s future.', amount: '₹50K-₹1.5L' },
      { title: 'Newborn Complications', description: 'Premature birth, jaundice, NICU = ₹2-5L bills. ₹1L newborn cover prevents financial crisis.', amount: '₹50K-₹2L' },
      { title: 'Multiple Children', description: 'Planning 2-3 kids? 4 delivery lifetime limit covers all. ₹1L saved per child = ₹2-3L total savings.', amount: '₹2-4L saved' }
    ],
    faqs: [
      { question: 'When should I buy maternity insurance and what is waiting period?', answer: 'WAITING PERIOD: Regular health policy with maternity: 9 months to 4 years waiting. Example: HDFC Ergo Optima Restore - 2 year wait, Max Bupa Health Companion - 3 year wait, Star Comprehensive - 4 year wait. Standalone maternity plans: 9-12 months waiting. WHEN TO BUY: PLANNING PREGNANCY: Buy 1-2 years before conceiving. After waiting period, ready to claim. Example: Buy in Jan 2024, conceive in Feb 2025, deliver Nov 2025 - covered! ALREADY PREGNANT: Too late for regular policy (will not accept). Buy standalone maternity plan (₹40-50K premium, limited cover ₹50K). JUST MARRIED: Best time! Buy family floater with maternity at age 25-28. 2-3 year wait completes by time you plan baby. EXAMPLE: Age 26, married, buy ₹10L floater with maternity rider = ₹15K premium. At age 28, pregnant, delivery at 29 - fully covered ₹1L! RECOMMENDATION: Buy maternity coverage 2-3 years before family planning. Waiting period passes, no stress during pregnancy!' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'planningMonth', label: 'Months to Planned Pregnancy', type: 'number' },
        { name: 'deliveryType', label: 'Expected Delivery', type: 'select', options: ['Normal', 'C-Section'] }
      ],
      outputLabel: 'Maternity Coverage & Premium'
    }
  },

  'network-hospitals': {
    id: 'network-hospitals',
    title: 'Network Hospitals',
    category: 'health',
    subtitle: 'Cashless Hospitalization at 10,000+ Partner Hospitals',
    description: 'Complete list of network hospitals offering cashless treatment. Search by city, insurer, and specialty for convenient claims.',
    icon: 'Building2',
    heroGradient: { from: 'blue-500', to: 'cyan-500' },
    stats: [
      { number: '10,000+', label: 'Hospitals' },
      { number: '1,000+ Cities', label: 'Pan-India' },
      { number: 'Cashless', label: 'No Upfront Pay' },
      { number: '2-4 Hours', label: 'Approval Time' }
    ],
    keyPoints: [
      'Network hospitals: 10,000+ hospitals with cashless facility across India',
      'Cashless process: Show health card, insurer approves, hospital bills insurer directly',
      'Major networks: Star Health 11,000+, HDFC Ergo 10,000+, ICICI Lombard 9,000+',
      'Search filters: City, hospital name, insurer, specialty (cardiology, orthopedics)',
      'Planned hospitalization: Pre-authorization 48 hours before surgery',
      'Emergency admission: Intimate insurer within 24 hours for approval',
      'Non-network hospital: Pay upfront, submit bills, get reimbursement in 15-30 days',
      'Apollo, Fortis, Max, Manipal, Medanta all in major insurer networks'
    ],
    benefits: [
      { title: 'Zero Out-of-Pocket', description: 'Emergency surgery needed? No arranging ₹2-3L cash. Hospital directly settles with insurer via cashless.' },
      { title: 'Fast Approval', description: 'Submit health card + docs to TPA desk, 2-4 hour approval for planned surgeries, emergency even faster.' },
      { title: 'Wide Coverage', description: '10,000+ hospitals across 1,000+ cities. Even Tier 2/3 cities have 5-10 network hospitals available.' },
      { title: 'Quality Hospitals', description: 'Top hospitals like Apollo, Fortis, Max, Medanta in network. No compromise on quality for cashless.' },
      { title: 'Reimbursement Option', description: 'Non-network hospital has better doctor? Pay upfront, claim reimbursement within 30 days.' },
      { title: 'Transparency', description: 'Hospital cannot overcharge. Insurer pays as per policy T&C, protects you from billing fraud.' }
    ],
    coverage: { min: 'All Insurers', max: '10K+ Hospitals', premium: 'Included in Policy' },
    whyNeed: [
      { title: 'Emergency Readiness', description: 'Heart attack, accident - no time to arrange ₹3-5L. Cashless network hospital saves life and money.', amount: 'Zero cash needed' },
      { title: 'Planned Surgery', description: 'Know surgery hospital in advance. Check if in network. Cashless = stress-free surgery experience.', amount: 'Peace of mind' },
      { title: 'Family Anywhere', description: 'Parents in hometown, you in metro. Network hospitals in both cities ensure cashless access everywhere.', amount: 'Pan-India access' }
    ],
    faqs: [
      { question: 'How to use cashless facility at network hospital?', answer: 'PLANNED HOSPITALIZATION: (1) Check hospital in network: Visit insurer website/app, search hospital by city. (2) Pre-authorization: 48 hours before surgery, submit pre-auth form + doctor prescription + hospital estimate to TPA. (3) Approval: Insurer approves in 2-6 hours, gives authorization letter for ₹X amount. (4) Admission: Show authorization letter + health card at hospital TPA desk. (5) Treatment: Hospital bills insurer directly. You pay only deductibles/co-pay/non-medical expenses. EMERGENCY ADMISSION: (1) Get admitted to network hospital immediately. (2) Intimate insurer within 24 hours: Call toll-free, email, or have family member inform. (3) Submit docs: Policy copy, health card, admission papers, doctor note to hospital TPA desk. (4) Approval: Insurer approves within hours based on emergency nature. (5) Treatment proceeds: Hospital bills insurer post-discharge. NON-NETWORK HOSPITAL: (1) Pay hospital bill yourself (₹3L). (2) Collect discharge summary, bills, receipts, investigation reports. (3) Submit claim to insurer within 7-15 days. (4) Reimbursement in your bank account in 15-30 days.' }
    ],
    calculator: {
      inputs: [
        { name: 'city', label: 'City', type: 'text' },
        { name: 'insurer', label: 'Insurance Company', type: 'select', options: ['Star Health', 'HDFC Ergo', 'ICICI Lombard', 'Care Health', 'Max Bupa'] },
        { name: 'specialty', label: 'Specialty', type: 'select', options: ['Cardiology', 'Orthopedics', 'Maternity', 'Oncology', 'General'] }
      ],
      outputLabel: 'Find Network Hospitals'
    }
  }
};

// ========================================
// MOTOR INSURANCE - Additional Products
// ========================================

export const additionalMotorProducts: Record<string, InsuranceProduct> = {
  'bike-insurance': {
    id: 'bike-insurance',
    title: 'Bike Insurance',
    category: 'motor',
    subtitle: 'Two-Wheeler Insurance - Third Party & Comprehensive Coverage',
    description: 'Bike insurance covering own damage, theft, third-party liability. Compare quotes, get instant policy, renew online.',
    icon: 'Bike',
    heroGradient: { from: 'orange-500', to: 'red-500' },
    stats: [
      { number: '₹500-₹5K', label: 'Annual Premium' },
      { number: '₹15L', label: 'Third Party Liability' },
      { number: '100%', label: 'Theft Cover' },
      { number: '24x7', label: 'Roadside Assistance' }
    ],
    keyPoints: [
      'Third-party mandatory: ₹500-₹1,500/year covers ₹15L liability for injury/death to others',
      'Comprehensive adds: Own damage (accident, fire, theft), ₹3-5K premium for ₹1L bike',
      'IDV (Insured Declared Value): Bike current market value, claim paid based on IDV',
      'No claim bonus: 20% discount per claim-free year, up to 50% in 5 years',
      'Add-ons: Zero depreciation (+₹800), engine protect (+₹500), return to invoice (+₹600)',
      'Cashless garages: 4,000+ network garages, no upfront payment for repairs',
      'Online instant policy: Enter bike number, get quote, pay, policy in 5 minutes',
      'Personal accident cover: ₹15L for owner-driver, mandatory with own damage'
    ],
    benefits: [
      { title: 'Legal Compliance', description: 'Third-party insurance mandatory by law. Penalty ₹2,000 + 3 months jail for riding without insurance!' },
      { title: 'Own Damage Protection', description: 'Bike damaged in accident (₹50K repairs) covered by comprehensive. Third-party alone will not pay.' },
      { title: 'Theft Coverage', description: 'Bike stolen? Claim full IDV (₹70K for 2-year-old ₹1L bike). File FIR, submit RC, get payout in 30 days.' },
      { title: 'Zero Depreciation', description: 'Without: 50% depreciation on parts. With ZD: 100% parts cost covered. ₹10K repair = ₹10K paid vs ₹5K!' },
      { title: 'Cashless Repairs', description: 'Accident, take bike to network garage, show policy, garage bills insurer. Zero out-of-pocket!' },
      { title: 'NCB Savings', description: 'No claims for 5 years = 50% NCB. ₹5K premium becomes ₹2.5K. Saves ₹12.5K over 5 years!' }
    ],
    coverage: { min: 'Third-party Only', max: 'Comprehensive + Add-ons', premium: '₹500 - ₹8,000/year' },
    whyNeed: [
      { title: 'Legal Requirement', description: 'Third-party mandatory. Traffic police fine ₹2,000 + confiscate RC if no insurance. Renew on time!', amount: 'Avoid ₹2K fine' },
      { title: 'Accident Protection', description: 'Hit car, damage ₹2L. Third-party covers ₹15L liability. Without it, pay from pocket + legal trouble.', amount: '₹15L liability cover' },
      { title: 'Own Bike Value', description: 'Bike worth ₹70K. Accident/fire/theft with comprehensive = get ₹70K. ₹5K premium protects ₹70K asset.', amount: 'Asset protection' }
    ],
    faqs: [
      { question: 'Bike Insurance Third-party vs Comprehensive - which to buy?', answer: 'THIRD-PARTY ONLY: Premium: ₹500-₹1,500/year (cheap), Covers: ₹15L liability if you injure/kill someone, Does NOT cover: Your bike damage/theft, Legal: Mandatory minimum as per Motor Vehicles Act, Best for: Very old bikes (₹20-30K value), people who can afford to replace bike themselves. COMPREHENSIVE: Premium: ₹3-5K/year, Covers: Own damage (accident, fire, natural calamity), Theft coverage = get full IDV, Third-party ₹15L liability included, Personal Accident ₹15L for owner/driver, NCB benefits up to 50% discount. Best for: New bikes (₹70K+ value), people who cannot afford to replace bike from pocket. EXAMPLE: Bike worth ₹70K, 2 years old. Third-party: ₹1K premium. Bike stolen, you lose ₹70K. Comprehensive: ₹4.5K premium. Bike stolen, insurer pays ₹65K IDV. Net cost: ₹4.5K premium vs ₹70K loss. RECOMMENDATION: Buy comprehensive for bikes worth ₹50K+. For ₹20-30K old bikes, third-party sufficient (replacement cost = 1-2 year comprehensive premium).' }
    ],
    calculator: {
      inputs: [
        { name: 'bikeValue', label: 'Current Bike Value (₹)', type: 'number' },
        { name: 'bikeAge', label: 'Bike Age (Years)', type: 'number' },
        { name: 'ncb', label: 'No Claim Bonus (%)', type: 'select', options: ['0', '20', '25', '35', '45', '50'] }
      ],
      outputLabel: 'Annual Premium Estimate'
    }
  },

  'comprehensive-car-insurance': {
    id: 'comprehensive-car-insurance',
    title: 'Comprehensive Car Insurance',
    category: 'motor',
    subtitle: 'Complete Own Damage + Third Party Car Insurance Coverage',
    description: 'Full protection for your car covering own damage, theft, fire, natural calamities plus third-party liability up to unlimited amount.',
    icon: 'Car',
    heroGradient: { from: 'red-500', to: 'orange-600' },
    stats: [
      { number: '₹8K-₹25K', label: 'Annual Premium' },
      { number: 'Unlimited', label: 'Third Party Liability' },
      { number: '100%', label: 'Own Damage Cover' },
      { number: '5,000+', label: 'Cashless Garages' }
    ],
    keyPoints: [
      'Own damage coverage: Accident, fire, theft, natural calamities - full IDV protection',
      'Third-party unlimited: Death/injury to others, property damage - no upper limit',
      'Zero depreciation add-on: Get 100% parts cost without depreciation deduction',
      'Engine protection: Covers hydrostatic lock, oil leakage, gearbox damage',
      'Return to Invoice: Get invoice value if total loss/theft within first year',
      'Roadside assistance: Towing, flat tire, fuel delivery, key lockout - 24x7',
      'No Claim Bonus: 20-50% discount for claim-free years, transferable to new car',
      'Personal accident: ₹15L owner-driver cover mandatory with own damage policy'
    ],
    benefits: [
      { title: 'Complete Protection', description: 'Car worth ₹10L damaged in accident (₹3L repair). Comprehensive pays ₹3L. Third-party alone pays ₹0!' },
      { title: 'Theft Coverage', description: 'Car stolen? Get full IDV (₹8L for 3-year-old ₹12L car). File FIR, submit RC, receive payout within 30 days.' },
      { title: 'Natural Calamities', description: 'Flood, earthquake, landslide damage covered. Chennai floods, Mumbai rains - thousands claimed ₹5-10L per car.' },
      { title: 'Zero Depreciation Benefit', description: 'Without ZD: ₹2L repair, 40% depreciation = insurer pays ₹1.2L. With ZD: Insurer pays full ₹2L. Worth ₹2-3K extra!' },
      { title: 'Cashless Convenience', description: 'Accident? Take to any network garage (5,000+ across India). Garage bills insurer directly. Zero hassle!' },
      { title: 'NCB Protection', description: 'One claim = lose 20-50% NCB. Add NCB protector (₹500) = make 1 claim without losing discount!' }
    ],
    coverage: { min: '₹5 Lakhs', max: 'Unlimited', premium: '₹8,000 - ₹25,000/year' },
    whyNeed: [
      { title: 'Asset Protection', description: 'Car worth ₹10-15L. Repair costs ₹50K-₹3L for major accidents. ₹15K premium protects entire asset value.', amount: '₹10-15L protected' },
      { title: 'Theft Security', description: 'Cars stolen daily in metros. Without insurance = total loss. With comprehensive = get IDV amount in 30 days.', amount: 'Full IDV payout' },
      { title: 'Peace of Mind', description: 'Accidents happen. Comprehensive covers you, your car, third party. Drive stress-free knowing everything protected.', amount: 'Complete coverage' }
    ],
    faqs: [
      { question: 'Is comprehensive car insurance worth it?', answer: 'YES - ABSOLUTELY for cars worth ₹5L+. COST-BENEFIT: Premium ₹15K/year for ₹10L car = 1.5% of value. One major accident (₹2-3L repair) = premium paid for 15-20 years! SCENARIOS: (1) Accident repairs ₹2L - Comprehensive pays ₹2L, Third-party pays ₹0. (2) Car stolen (₹8L IDV) - Comprehensive pays ₹8L, Third-party = lose everything. (3) Flood damage ₹5L - Comprehensive covers, Third-party does not. NOT WORTH for: Very old cars (10+ years) worth ₹1-2L where comprehensive premium ₹8K = 40-80% of car value. Better to buy third-party only and self-insure. RECOMMENDATION: Buy comprehensive for cars worth ₹5L+. Add zero dep (₹2K), engine protect (₹1.5K), RTI (₹1K) for new cars. For 7+ year old cars, evaluate if comprehensive premium justifies car value.' }
    ],
    calculator: {
      inputs: [
        { name: 'carValue', label: 'Car Current IDV (₹ Lakhs)', type: 'number' },
        { name: 'carAge', label: 'Car Age (Years)', type: 'number' },
        { name: 'ncb', label: 'No Claim Bonus (%)', type: 'select', options: ['0', '20', '25', '35', '45', '50'] },
        { name: 'city', label: 'Registration City', type: 'text' }
      ],
      outputLabel: 'Comprehensive Premium Estimate'
    }
  },

  'car-insurance-renewal': {
    id: 'car-insurance-renewal',
    title: 'Car Insurance Renewal',
    category: 'motor',
    subtitle: 'Renew Car Insurance Online - Instant Policy in 2 Minutes',
    description: 'Renew expired car insurance policy online with same or different insurer. Compare quotes, get NCB transferred, instant policy issuance.',
    icon: 'RefreshCw',
    heroGradient: { from: 'orange-500', to: 'yellow-500' },
    stats: [
      { number: '2 Minutes', label: 'Online Renewal' },
      { number: '50%', label: 'Max NCB Transfer' },
      { number: '90 Days', label: 'Grace Period' },
      { number: '20%', label: 'Save by Comparing' }
    ],
    keyPoints: [
      'Renew 90 days before expiry: Get full NCB benefit and avoid inspection',
      'Expired policy: Renew within 90 days without inspection, after 90 days inspection mandatory',
      'Compare insurers: Same coverage, different premiums. HDFC ₹12K vs Bajaj ₹15K - save 20%!',
      'NCB transfer: Switch insurer and carry forward NCB. 50% NCB = ₹7.5K saved on ₹15K premium',
      'Add/remove add-ons: Zero dep needed for 3 years, then remove. Engine protect not needed in year 5',
      'Update IDV: Increase/decrease based on actual market value. Do not over-insure or under-insure',
      'Instant policy: Enter car number, system fetches details, pay, get policy in 2 minutes',
      'No agent required: 100% online process, no paperwork, no home visits'
    ],
    benefits: [
      { title: 'Timely Renewal', description: 'Renew before expiry = no inspection, NCB protected, continuous coverage. Drive legally without gap!' },
      { title: 'Switch & Save', description: 'Same car, same coverage: Insurer A ₹15K vs Insurer B ₹12K. Switch and save ₹3K annually!' },
      { title: 'NCB Protection', description: '5 years claim-free = 50% NCB = ₹7,500 discount on ₹15K premium. Renew on time to retain NCB!' },
      { title: 'Compare Add-ons', description: 'Zero dep useful for new cars (year 1-3). Remove in year 4-5 when car value depreciates. Save ₹2-3K!' },
      { title: 'Avoid Inspection', description: 'Renew within 90 days = no inspection. After 90 days = mandatory inspection (₹500-1,000) + time waste!' },
      { title: 'Instant Coverage', description: 'Policy lapses = illegal to drive. Renew online in 2 minutes, instant policy, legal immediately!' }
    ],
    coverage: { min: 'Same as Existing', max: 'Can Modify', premium: 'Compare & Save 20%' },
    whyNeed: [
      { title: 'Legal Compliance', description: 'Expired insurance = ₹2,000 fine + RC confiscation. Accident without insurance = pay damages from pocket.', amount: 'Avoid penalties' },
      { title: 'NCB Loss', description: 'Do not renew = lose NCB. 50% NCB lost = ₹7,500 extra premium annually forever!', amount: 'Protect ₹7.5K NCB' },
      { title: 'Inspection Hassle', description: 'Renew after 90 days = mandatory inspection ₹500-1K + half-day time. Renew on time = zero hassle!', amount: 'Save time & ₹1K' }
    ],
    faqs: [
      { question: 'What happens if I do not renew car insurance on time?', answer: 'IMMEDIATE CONSEQUENCES: (1) ILLEGAL to drive - Motor Vehicles Act violation, (2) ₹2,000 fine + RC seizure if caught by traffic police, (3) Accident liability - pay all damages from pocket (₹2-10L+), no third-party protection. INSURANCE IMPACT: (4) NCB LOST - 50% NCB gone = ₹7,500 extra premium lost forever, (5) Inspection MANDATORY if >90 days lapsed - pay ₹500-1,000 + take car to inspection center, (6) Higher premium after break in insurance - some insurers charge 20% extra for lapsed policies. CLAIM ISSUES: (7) Accident during lapse period = NO CLAIM, you pay everything, (8) Theft during lapse = NO COVERAGE, lose entire car value. RECOMMENDATION: Set reminder 30 days before expiry. Renew online in 2 minutes. Never let policy lapse. Even one day gap = lose NCB + legal risk!' }
    ],
    calculator: {
      inputs: [
        { name: 'registrationNumber', label: 'Car Registration Number', type: 'text' },
        { name: 'expiryDate', label: 'Current Policy Expiry Date', type: 'date' }
      ],
      outputLabel: 'Instant Renewal Quote'
    }
  },

  'commercial-vehicle-insurance': {
    id: 'commercial-vehicle-insurance',
    title: 'Commercial Vehicle Insurance',
    category: 'motor',
    subtitle: 'Truck, Taxi, Bus, Goods Carrier Insurance - Third Party & Comprehensive',
    description: 'Insurance for commercial vehicles covering own damage, third-party liability, passenger cover, goods in transit, driver cover.',
    icon: 'Truck',
    heroGradient: { from: 'yellow-600', to: 'orange-700' },
    stats: [
      { number: '₹15K-₹1L', label: 'Annual Premium' },
      { number: '₹2Cr+', label: 'Third Party Liability' },
      { number: '₹50L', label: 'Goods in Transit' },
      { number: 'Unlimited', label: 'Passenger Cover' }
    ],
    keyPoints: [
      'Mandatory coverage: Third-party for all commercial vehicles - truck, taxi, bus, auto',
      'Third-party limits: Private taxi ₹1Cr, Public taxi ₹2Cr, Truck unlimited liability',
      'Own damage add-on: Accident, fire, theft coverage for vehicle itself',
      'Paid driver cover: ₹2L personal accident cover for employed driver mandatory',
      'Passenger liability: Covers injury/death of passengers in taxi/bus - ₹2-5L per passenger',
      'Goods in transit: Covers cargo damage/theft during transportation - ₹10-50L',
      'IMT endorsements: Regional permit, fibre glass tank, CNG/LPG kit coverage',
      'Fleet discount: Insure 5+ vehicles together, get 10-20% bulk discount'
    ],
    benefits: [
      { title: 'Legal Compliance', description: 'Commercial third-party mandatory. Without insurance = ₹2,000 fine + vehicle seizure + court case!' },
      { title: 'Liability Protection', description: 'Truck accident kills 3 people = ₹1Cr+ compensation. Third-party covers unlimited liability, saves business!' },
      { title: 'Passenger Safety', description: 'Taxi accident injures 3 passengers. Each claims ₹5L medical. Passenger liability covers ₹15L total!' },
      { title: 'Goods Coverage', description: 'Truck carrying ₹20L electronics. Accident/theft damages cargo. Goods in transit covers ₹20L goods value!' },
      { title: 'Driver Protection', description: 'Paid driver dies in accident. ₹2L compulsory PA cover pays compensation to family. Legal requirement met!' },
      { title: 'Own Damage', description: 'Truck worth ₹25L damaged in accident (₹8L repairs). Comprehensive covers ₹8L. Third-party alone = ₹0!' }
    ],
    coverage: { min: 'Third-party Mandatory', max: 'Comprehensive + Add-ons', premium: '₹15,000 - ₹1,00,000/year' },
    whyNeed: [
      { title: 'Business Protection', description: 'Accident liability ₹50L-₹2Cr can bankrupt business. Third-party insurance protects business assets from claims.', amount: '₹2Cr+ liability cover' },
      { title: 'Asset Safety', description: 'Commercial vehicle worth ₹20-40L. Comprehensive protects against theft, accident, fire - business continuity.', amount: '₹20-40L asset' },
      { title: 'Legal Mandate', description: 'Cannot operate without insurance. Transport permit, fitness certificate require valid insurance. Business stops without it!', amount: 'Operational necessity' }
    ],
    faqs: [
      { question: 'Difference between private car and commercial vehicle insurance?', answer: 'COMMERCIAL INSURANCE DIFFERENCES: (1) HIGHER PREMIUM: Commercial vehicle used for business = higher accident risk. Taxi insurance ₹25K vs private car ₹12K. (2) HIGHER LIABILITY: Third-party unlimited for goods carrier vs ₹1Cr for private car. (3) ADDITIONAL COVERS: Paid driver cover (₹2L PA) mandatory, Passenger liability (₹2-5L per seat) for taxi/bus, Goods in transit for trucks. (4) USAGE: Commercial policy covers business use (earning). Private policy covers personal use only. (5) COVERAGE AREA: Geographic limits - state permit, national permit, regional permit. (6) MANDATORY COVERS: IMT endorsements, CNG/LPG kit, Fibre glass tank must be declared. CANNOT USE private car policy for Ola/Uber - need commercial! PENALTY: Using commercial vehicle with private policy = claim rejection + fine ₹10K + court case! RECOMMENDATION: Buy policy matching registration - commercial plate = commercial insurance, private plate = private insurance. Never interchange!' }
    ],
    calculator: {
      inputs: [
        { name: 'vehicleType', label: 'Vehicle Type', type: 'select', options: ['Taxi', 'Truck', 'Bus', 'Auto', 'Goods Carrier'] },
        { name: 'vehicleValue', label: 'Vehicle Value (₹ Lakhs)', type: 'number' },
        { name: 'permitType', label: 'Permit Type', type: 'select', options: ['State', 'National', 'Regional'] }
      ],
      outputLabel: 'Commercial Premium Estimate'
    }
  }
};

// ========================================
// OTHER INSURANCE - Additional Products
// ========================================

export const otherInsuranceProducts: Record<string, InsuranceProduct> = {
  'home-insurance': {
    id: 'home-insurance',
    title: 'Home Insurance',
    category: 'other',
    subtitle: 'Protect Your Home - Structure, Contents, Liability Coverage',
    description: 'Comprehensive home insurance covering building structure, household contents, personal liability, natural disasters, theft, fire.',
    icon: 'Home',
    heroGradient: { from: 'green-500', to: 'teal-600' },
    stats: [
      { number: '₹3K-₹15K', label: 'Annual Premium' },
      { number: '₹50L-₹5Cr', label: 'Sum Insured' },
      { number: '100%', label: 'Structure + Contents' },
      { number: '₹25L', label: 'Liability Cover' }
    ],
    keyPoints: [
      'Structure coverage: Building damage from fire, earthquake, flood, cyclone - rebuild cost covered',
      'Contents insurance: Furniture, electronics, jewelry, clothing - replacement value up to ₹20-50L',
      'Personal liability: If someone injured in your home, covers medical + legal costs up to ₹25L',
      'Natural disasters: Earthquake, flood, cyclone, landslide - full damage coverage',
      'Theft coverage: Burglary loss up to ₹5-10L for jewelry, electronics, cash',
      'Temporary accommodation: House uninhabitable after fire/earthquake? Hotel costs covered (₹10-20K/day)',
      'Fire protection: Electrical fire, kitchen fire, forest fire - building + contents covered',
      'Additional covers: Rent loss, architect fees, debris removal, alternative accommodation'
    ],
    benefits: [
      { title: 'Rebuild Protection', description: 'Fire destroys ₹1Cr home. Structure cover pays ₹1Cr to rebuild. Without insurance = lifetime savings gone!' },
      { title: 'Contents Safety', description: 'Burglary steals TV (₹80K), laptop (₹60K), jewelry (₹3L) = ₹4.4L loss. Contents insurance reimburses full amount!' },
      { title: 'Natural Disaster', description: 'Earthquake damages home (₹15L repairs). Home insurance covers structure + contents. No government compensation!' },
      { title: 'Liability Protection', description: 'Guest slips, fractures leg, sues for ₹10L medical + damages. Personal liability cover pays ₹10L!' },
      { title: 'Rent Loss', description: 'Fire makes home unlivable for 6 months. Policy pays ₹30K/month rent (₹1.8L total) for temporary accommodation!' },
      { title: 'Peace of Mind', description: 'Home = biggest asset (₹50L-₹2Cr). Premium ₹5-10K protects entire property + contents + liability!' }
    ],
    coverage: { min: '₹25 Lakhs', max: '₹5 Crore', premium: '₹3,000 - ₹15,000/year' },
    whyNeed: [
      { title: 'Asset Protection', description: 'Home worth ₹1Cr. Fire/earthquake damage ₹50L. Home insurance covers ₹50L repairs. ₹8K premium protects ₹1Cr asset!', amount: '₹1Cr protected' },
      { title: 'Contents Value', description: 'Furniture ₹10L, electronics ₹5L, jewelry ₹8L = ₹23L contents. Theft/fire destroys all. Insurance reimburses ₹23L!', amount: '₹23L contents' },
      { title: 'Liability Risk', description: 'Someone injured in home = ₹10-25L lawsuit. Personal liability cover protects savings from legal claims.', amount: '₹25L liability' }
    ],
    faqs: [
      { question: 'Is home insurance mandatory in India? What does it cover?', answer: 'NOT MANDATORY but HIGHLY RECOMMENDED. STRUCTURE COVERAGE: Building damage from fire, earthquake, flood, cyclone, lightning, explosion, Impact damage (vehicle, aircraft, falling objects), Riots, strikes, terrorism, Landslide, rockslide, storm. Does NOT cover: Normal wear & tear, intentional damage, war, nuclear perils. CONTENTS COVERAGE: Furniture, electronics, appliances, clothing, jewelry (up to limit), Sports equipment, kitchen items. EXCLUSIONS: Perishables, vehicles, pets, plants. ADDITIONAL COVERS: Personal liability (₹10-25L), Temporary accommodation, Rent loss if owner, Debris removal, Architect/surveyor fees. WHO NEEDS: (1) Homeowners - protect building + contents, (2) Tenants - get contents only policy for ₹2-3K, protect ₹10-20L belongings, (3) Flat owners - society insures structure, you insure contents + interiors. PREMIUM: ₹50L home (structure ₹30L + contents ₹20L) = ₹5-8K annual premium. Just 0.1-0.2% of property value!' }
    ],
    calculator: {
      inputs: [
        { name: 'structureValue', label: 'Structure Value (₹ Lakhs)', type: 'number' },
        { name: 'contentsValue', label: 'Contents Value (₹ Lakhs)', type: 'number' },
        { name: 'propertyType', label: 'Property Type', type: 'select', options: ['Independent House', 'Apartment', 'Villa'] }
      ],
      outputLabel: 'Home Insurance Premium'
    }
  },

  'personal-accident-insurance': {
    id: 'personal-accident-insurance',
    title: 'Personal Accident Insurance',
    category: 'other',
    subtitle: 'Accidental Death, Disability, Medical Expenses Coverage',
    description: 'Comprehensive personal accident insurance covering accidental death, permanent/temporary disability, medical expenses, ambulance charges.',
    icon: 'AlertTriangle',
    heroGradient: { from: 'red-500', to: 'pink-600' },
    stats: [
      { number: '₹500-₹3K', label: 'Annual Premium' },
      { number: '₹10L-₹1Cr', label: 'Sum Insured' },
      { number: '24x7', label: 'Global Coverage' },
      { number: '₹5L', label: 'Medical Expenses' }
    ],
    keyPoints: [
      'Accidental death: 100% sum insured paid to nominee if death due to accident anywhere in world',
      'Permanent disability: 100% for total, 50-75% for partial (loss of limb, eye, hearing)',
      'Temporary disability: Weekly compensation during recovery (₹5-10K/week for 100 weeks)',
      'Medical expenses: Accident treatment costs covered up to ₹1-5L per accident',
      'Ambulance charges: Emergency ambulance ₹1,500-5,000 per incident covered',
      'Worldwide coverage: Accident in India or abroad - claim paid, no geographical restrictions',
      'Child education: Additional 5-10% of sum insured for children education if parent dies',
      'Funeral expenses: ₹10-20K paid immediately for funeral/cremation costs'
    ],
    benefits: [
      { title: 'Accidental Death', description: 'Sudden death in road accident. ₹50L PA policy pays ₹50L to family within 30 days. Financial security!' },
      { title: 'Disability Income', description: 'Accident causes 50% permanent disability. Get 50% × ₹50L = ₹25L lump sum + ₹5K/week for 100 weeks!' },
      { title: 'Medical Coverage', description: 'Accident requires ₹3L treatment (ICU, surgery, physiotherapy). PA policy covers ₹3L medical expenses!' },
      { title: 'Global Protection', description: 'Accident in USA, treatment costs $50K (₹40L). PA policy covers medical + repatriation back to India!' },
      { title: 'Cheap Premium', description: '₹50L cover = ₹1,500 annual premium. Just ₹125/month for ₹50L accident protection! Most affordable!' },
      { title: 'Complement Health', description: 'Health insurance covers illness. PA covers ONLY accidents. Both needed for complete protection!' }
    ],
    coverage: { min: '₹5 Lakhs', max: '₹1 Crore', premium: '₹500 - ₹3,000/year' },
    whyNeed: [
      { title: 'Accident Risk', description: 'India has 4.5L road accidents/year, 1.5L deaths. Anyone can be victim. PA insurance = ₹10-50L instant protection.', amount: '₹50L protection' },
      { title: 'Disability Support', description: 'Permanent disability = cannot work = no income. ₹50L payout provides lifelong financial security for family.', amount: 'Lifelong security' },
      { title: 'Affordable', description: '₹50L cover = ₹1,500 premium = ₹125/month. Term insurance ₹50L = ₹5K. PA insurance 70% cheaper!', amount: 'Cheapest cover' }
    ],
    faqs: [
      { question: 'Personal Accident vs Term Insurance - difference and do I need both?', answer: 'KEY DIFFERENCES: PERSONAL ACCIDENT: Covers: ONLY accidental death/disability, Premium: ₹1,500 for ₹50L (very cheap), Payout: Death by accident = 100%, natural death = ₹0, Age limit: Usually up to 65-70 years. TERM INSURANCE: Covers: Death by ANY cause (accident, illness, natural), Premium: ₹5,000 for ₹50L, Payout: Death by any cause = 100%, Age limit: Up to 65-80 years. DO YOU NEED BOTH? YES! EXAMPLE: Person dies in accident: PA pays ₹50L + Term pays ₹1Cr = family gets ₹1.5Cr! Person dies of heart attack: PA pays ₹0, Term pays ₹1Cr. Person becomes 50% disabled in accident: PA pays ₹25L + ₹5K/week, Term pays ₹0 (no death). RECOMMENDATION: (1) MUST HAVE: Term insurance ₹1Cr+ for family protection (any death cause), (2) SHOULD HAVE: PA insurance ₹25-50L for accident risk (very cheap, complements term), (3) Combined protection: Total ₹6,500 premium = ₹1Cr term + ₹50L PA = complete family security!' }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'sumInsured', label: 'Coverage Required (₹ Lakhs)', type: 'number' },
        { name: 'occupation', label: 'Occupation', type: 'select', options: ['Professional', 'Self-Employed', 'Salaried', 'High Risk'] }
      ],
      outputLabel: 'PA Insurance Premium'
    }
  },

  'fire-insurance': {
    id: 'fire-insurance',
    title: 'Fire Insurance',
    category: 'other',
    subtitle: 'Property Fire Damage Coverage - Building, Stock, Machinery',
    description: 'Fire insurance for residential, commercial property covering fire damage, explosion, lightning, earthquake, storm, riots.',
    icon: 'Flame',
    heroGradient: { from: 'orange-600', to: 'red-700' },
    stats: [
      { number: '₹5K-₹50K', label: 'Annual Premium' },
      { number: '₹50L-₹10Cr', label: 'Sum Insured' },
      { number: '100%', label: 'Fire Damage Cover' },
      { number: '24 Hours', label: 'Claim Intimation' }
    ],
    keyPoints: [
      'Fire damage: Electrical fire, kitchen fire, forest fire, industrial fire - full damage coverage',
      'Explosion: Gas cylinder, boiler, electrical explosion damage covered',
      'Lightning: Lightning strike causes fire/damage - building + contents covered',
      'Earthquake: Fire caused by earthquake (rare) covered under fire policy',
      'Riots: Fire due to riots, strikes, terrorism - damage covered',
      'Stock coverage: For shops/factories, stock/inventory fire damage covered',
      'Machinery: Industrial machinery, equipment fire damage covered',
      'Consequential loss: Business interruption, profit loss due to fire (add-on cover)'
    ],
    benefits: [
      { title: 'Building Protection', description: 'Electrical short circuit causes ₹25L fire damage to building. Fire insurance covers ₹25L rebuilding cost!' },
      { title: 'Stock Safety', description: 'Shop fire destroys ₹10L inventory. Fire policy reimburses ₹10L stock value. Business can restart!' },
      { title: 'Machinery Cover', description: 'Factory fire damages ₹50L machinery. Policy covers ₹50L replacement. Manufacturing resumes quickly!' },
      { title: 'Explosion Damage', description: 'Gas cylinder explosion causes ₹5L damage. Fire insurance covers explosion damage fully!' },
      { title: 'Riot Protection', description: 'Riots cause fire, property damaged ₹15L. Riot-fire clause in policy covers ₹15L loss!' },
      { title: 'Business Continuity', description: 'Fire stops business for 3 months. Consequential loss add-on pays ₹5L/month = ₹15L profit loss!' }
    ],
    coverage: { min: '₹25 Lakhs', max: '₹10 Crore', premium: '₹5,000 - ₹50,000/year' },
    whyNeed: [
      { title: 'Property Risk', description: 'Fire destroys ₹1Cr property. Without insurance = bankruptcy. With fire insurance = ₹1Cr payout, rebuild!', amount: '₹1Cr protection' },
      { title: 'Business Loss', description: 'Factory fire = ₹50L stock + ₹30L machinery loss + 6 months no business. Fire insurance saves business!', amount: 'Business survival' },
      { title: 'Mandatory', description: 'Banks mandate fire insurance for home/business loans. Industrial licenses require fire insurance. Legal necessity!', amount: 'Loan requirement' }
    ],
    faqs: [
      { question: 'What is covered and not covered in fire insurance policy?', answer: 'COVERED PERILS: (1) FIRE: Accidental fire, electrical short circuit, kitchen fire, forest fire spreading, (2) EXPLOSION: Gas cylinder, boiler, electrical transformer, chemical explosion, (3) LIGHTNING: Direct lightning strike causing fire/damage, (4) EARTHQUAKE fire: Fire caused due to earthquake, (5) RIOTS/STRIKES: Fire due to civil disturbance, terrorism, (6) STORM/CYCLONE: Fire caused by natural calamities. EXCLUDED (not covered): (1) Intentional fire/arson by owner, (2) War, nuclear perils, (3) Spontaneous combustion (self-ignition of goods), (4) Theft during fire (unless add-on), (5) Consequential loss/profit loss (unless add-on bought). COVERED ASSETS: Building structure, Machinery, Stock/inventory, Furniture/fixtures, Raw materials, Finished goods. WHO NEEDS: (1) Homeowners - mandatory for home loans, (2) Shop/office owners - protect property + stock, (3) Factory owners - legally required, covers stock + machinery + building, (4) Tenants - protect business assets even if not owner. PREMIUM: 0.05-0.2% of sum insured. ₹1Cr coverage = ₹5-20K annual premium depending on risk!' }
    ],
    calculator: {
      inputs: [
        { name: 'propertyValue', label: 'Property Value (₹ Lakhs)', type: 'number' },
        { name: 'stockValue', label: 'Stock/Inventory Value (₹ Lakhs)', type: 'number' },
        { name: 'propertyType', label: 'Property Type', type: 'select', options: ['Residential', 'Commercial', 'Industrial'] }
      ],
      outputLabel: 'Fire Insurance Premium'
    }
  },

  'cyber-insurance': {
    id: 'cyber-insurance',
    title: 'Cyber Insurance',
    category: 'other',
    subtitle: 'Protect Against Cyber Attacks, Data Breach, Ransomware',
    description: 'Comprehensive cyber insurance covering data breach, ransomware, hacking, cyber fraud, business interruption, legal costs.',
    icon: 'Shield',
    heroGradient: { from: 'purple-500', to: 'blue-600' },
    stats: [
      { number: '₹10K-₹1L', label: 'Annual Premium' },
      { number: '₹25L-₹10Cr', label: 'Sum Insured' },
      { number: '24x7', label: 'Incident Response' },
      { number: '₹50L', label: 'Legal Cost Cover' }
    ],
    keyPoints: [
      'Data breach: Customer/employee data leaked - covers legal liability, notification costs, credit monitoring',
      'Ransomware: Hackers lock your systems, demand ransom - covers ransom payment + recovery costs',
      'Cyber fraud: Email phishing, wire transfer fraud, CEO fraud - financial loss covered up to ₹10-50L',
      'Business interruption: Cyber attack stops business - covers lost revenue during downtime',
      'Legal costs: Lawsuits from data breach victims - covers defense costs + settlements',
      'Forensic investigation: Hire cyber forensic experts to investigate breach - costs covered',
      'Public relations: Crisis management, reputation damage control - PR firm costs covered',
      'Regulatory fines: GDPR, RBI, IT Act penalties for data breach - covered up to limits'
    ],
    benefits: [
      { title: 'Ransomware Protection', description: 'Hackers encrypt data, demand ₹20L ransom. Cyber insurance pays ₹20L + ₹10L recovery costs!' },
      { title: 'Data Breach Liability', description: '10K customer records leaked. Each claims ₹5K. Total ₹5Cr liability. Cyber insurance covers legal + settlement!' },
      { title: 'Fraud Coverage', description: 'CEO email fraud - attacker transfers ₹30L. Cyber insurance reimburses ₹30L fraudulent loss!' },
      { title: 'Business Continuity', description: 'Cyber attack shuts website for 10 days. ₹5L revenue loss. Business interruption cover pays ₹5L!' },
      { title: 'Legal Defense', description: 'Data breach lawsuit - victims sue for ₹1Cr. Cyber policy covers ₹50L legal costs + ₹50L settlement!' },
      { title: 'Recovery Support', description: 'Breach investigation ₹5L, IT security upgrade ₹10L, notification ₹3L = ₹18L total. Policy covers all!' }
    ],
    coverage: { min: '₹10 Lakhs', max: '₹10 Crore', premium: '₹10,000 - ₹1,00,000/year' },
    whyNeed: [
      { title: 'Cyber Risk', description: 'India sees 1.2L cyber attacks/day. Ransomware attacks cost ₹25L-₹1Cr per incident. Any business can be target!', amount: 'High risk' },
      { title: 'Financial Loss', description: 'Average data breach costs ₹17Cr (IBM study). Small business breach costs ₹25L-₹1Cr. Can bankrupt company!', amount: '₹25L-₹1Cr loss' },
      { title: 'Legal Compliance', description: 'IT Act, RBI mandates data protection. Breach = ₹5Cr fine + lawsuits. Cyber insurance covers legal liability!', amount: 'Mandatory protection' }
    ],
    faqs: [
      { question: 'Who needs cyber insurance in India and what does it cover exactly?', answer: 'WHO NEEDS: (1) E-COMMERCE: Storing payment card data, customer PII - breach = ₹5-50Cr liability, (2) IT/SOFTWARE: Holding client data, SaaS providers - ransomware can shut business, (3) BANKS/FINTECH: PCI-DSS compliance required, cyber fraud = ₹1-10Cr loss per incident, (4) HEALTHCARE: Patient records (HIPAA) - breach = lawsuits + regulatory fines, (5) SMALL BUSINESS: 43% cyber attacks target SMBs - cannot afford ₹25L-₹1Cr loss. COVERAGE DETAILS: FIRST PARTY (Your Loss): Data restoration ₹5-25L, Business interruption ₹10-50L, Ransomware payment ₹10-50L, Forensic investigation ₹5-10L, Crisis management/PR ₹5-15L. THIRD PARTY (Legal Liability): Customer notification ₹5-20L, Credit monitoring ₹10-25L, Legal defense ₹25-50L, Regulatory fines ₹10-50L, Privacy liability ₹50L-₹10Cr. EXCLUSIONS: Intentional attacks by employees, Prior known vulnerabilities, War/terrorism, Infrastructure failure (power, internet). COST: ₹50L-₹1Cr coverage = ₹15-30K for SMB, ₹5-10Cr coverage = ₹75K-₹2L for large business!' }
    ],
    calculator: {
      inputs: [
        { name: 'businessType', label: 'Business Type', type: 'select', options: ['E-commerce', 'IT Services', 'Financial Services', 'Healthcare', 'Retail'] },
        { name: 'annualRevenue', label: 'Annual Revenue (₹ Crores)', type: 'number' },
        { name: 'customerRecords', label: 'Customer Records Stored', type: 'number' }
      ],
      outputLabel: 'Cyber Insurance Premium'
    }
  },

  'pet-insurance': {
    id: 'pet-insurance',
    title: 'Pet Insurance',
    category: 'other',
    subtitle: 'Dog & Cat Health Insurance - Medical, Surgery, Accident Coverage',
    description: 'Pet insurance covering veterinary expenses, surgery, hospitalization, accidents, illness for dogs and cats.',
    icon: 'Dog',
    heroGradient: { from: 'pink-500', to: 'purple-600' },
    stats: [
      { number: '₹3K-₹15K', label: 'Annual Premium' },
      { number: '₹2L-₹5L', label: 'Sum Insured' },
      { number: '1-10 Years', label: 'Eligible Age' },
      { number: '80%', label: 'Claim Reimbursement' }
    ],
    keyPoints: [
      'Medical expenses: Illness treatment, diagnostic tests, medicines - covered up to ₹1-3L',
      'Surgery coverage: Major surgeries (bone fracture ₹50K, tumor removal ₹1L) covered 80-100%',
      'Hospitalization: ICU charges, boarding fees during treatment - ₹2-5K per day covered',
      'Accidents: Dog hit by vehicle, falls, fights - emergency treatment + surgery covered',
      'Third-party liability: Your dog bites someone, causes damage - legal liability covered ₹5-10L',
      'Death cover: Accidental death pays 50-100% sum insured (₹1-2L)',
      'Lost pet: Advertising costs to find lost pet - ₹5-10K covered',
      'Annual vaccinations: Some policies cover routine vaccinations and health check-ups'
    ],
    benefits: [
      { title: 'Medical Expenses', description: 'Dog has parvovirus, treatment costs ₹40K (ICU, medicines, tests). Pet insurance reimburses ₹32K (80%)!' },
      { title: 'Surgery Coverage', description: 'Cat needs tumor removal surgery ₹80K. Policy covers ₹64-80K. Without insurance = pay ₹80K from pocket!' },
      { title: 'Accident Treatment', description: 'Dog hit by car, fracture treatment ₹60K. Emergency covered - get ₹48-60K claim within 15 days!' },
      { title: 'Liability Protection', description: 'Dog bites neighbor, victim sues for ₹5L medical + damages. Third-party liability covers ₹5L!' },
      { title: 'Peace of Mind', description: 'Chronic condition like diabetes needs ₹2-3K/month medicines. Annual ₹36K covered, not from your pocket!' },
      { title: 'Affordable Care', description: '₹10K premium protects ₹2-3L annual vet expenses. Especially useful for senior pets (8+ years)!' }
    ],
    coverage: { min: '₹1 Lakh', max: '₹5 Lakhs', premium: '₹3,000 - ₹15,000/year' },
    whyNeed: [
      { title: 'Vet Costs High', description: 'Routine checkup ₹1K, blood test ₹3K, x-ray ₹2K, surgery ₹50K-₹1L. One major illness = ₹50K-₹2L expenses!', amount: '₹50K-₹2L expenses' },
      { title: 'Unexpected Illness', description: 'Pets hide illness. By the time symptoms show, condition serious, treatment expensive. Insurance provides financial backup.', amount: 'Emergency ready' },
      { title: 'Senior Pet Care', description: 'Pets 8+ years need frequent vet visits, chronic condition medicines. ₹3-5K/month = ₹36-60K/year. Insurance covers!', amount: '₹60K/year saved' }
    ],
    faqs: [
      { question: 'Is pet insurance worth it in India? What is covered and excluded?', answer: 'WORTH IT? YES for: (1) Expensive breeds (Golden Retriever, Persian cat ₹40K-₹1L) - vet costs high, (2) Young pets (accidents common), (3) Senior pets 8+ (frequent illness, costly treatment). NOT WORTH for: Very old pets (15+ years, premium high + exclusions), Indie/mixed breeds (lower vet costs, affordable without insurance). COVERAGE: Medical treatment for illness/disease, Surgical procedures, Hospitalization charges (₹2-5K/day), Diagnostic tests, Emergency accident treatment, Third-party liability (dog bites), Death by accident. EXCLUSIONS: Pre-existing conditions (diabetes before buying policy = not covered), Routine vaccinations (basic), Grooming, breeding, pregnancy costs, Congenital/hereditary conditions, Behavioral issues, Euthanasia. TYPICAL COSTS: Premium: ₹5-10K/year for ₹2L cover, Claim: 80% reimbursement (you pay 20%), Deductible: ₹5-10K per claim. EXAMPLE: Dog fracture surgery ₹70K. Claim: ₹70K - ₹5K deductible = ₹65K eligible. 80% reimbursement = ₹52K paid. You pay ₹18K vs ₹70K! VERDICT: Useful for peace of mind + emergency financial backup. ₹10K premium can save ₹50K-₹2L in emergencies!' }
    ],
    calculator: {
      inputs: [
        { name: 'petType', label: 'Pet Type', type: 'select', options: ['Dog', 'Cat'] },
        { name: 'petAge', label: 'Pet Age (Years)', type: 'number' },
        { name: 'breed', label: 'Breed Type', type: 'select', options: ['Pure Breed', 'Mixed Breed'] }
      ],
      outputLabel: 'Pet Insurance Premium'
    }
  },

  'marine-insurance': {
    id: 'marine-insurance',
    title: 'Marine Insurance',
    category: 'other',
    subtitle: 'Cargo, Ship, Freight Insurance - Import/Export Coverage',
    description: 'Marine insurance covering goods in transit by sea, ship hull, freight charges, customs duty, loading/unloading risks.',
    icon: 'Ship',
    heroGradient: { from: 'blue-600', to: 'cyan-700' },
    stats: [
      { number: '0.2-2%', label: 'Premium Rate' },
      { number: '₹1L-₹100Cr', label: 'Cargo Value' },
      { number: 'Global', label: 'Coverage Area' },
      { number: '110%', label: 'CIF Value' }
    ],
    keyPoints: [
      'Cargo insurance: Goods damaged/lost during sea transit - covers invoice value + 10% profit',
      'Hull insurance: Ship/vessel physical damage - collision, grounding, fire, piracy',
      'Freight insurance: Freight charges lost if cargo destroyed - carrier gets compensation',
      'Transit coverage: Warehouse to warehouse - includes loading, sea voyage, unloading',
      'Perils covered: Storm, cyclone, collision, fire, piracy, jettison, general average',
      'Customs duty: Import duty paid on lost/damaged goods - can be claimed back',
      'Institute Cargo Clauses: ICC A (all risks), ICC B (named perils), ICC C (limited perils)',
      'War risks: Additional premium for war zone shipping, piracy-prone areas'
    ],
    benefits: [
      { title: 'Cargo Protection', description: 'Ship sinks, ₹50L electronics cargo lost. Marine insurance pays ₹55L (110% CIF value) within 60 days!' },
      { title: 'Transit Damage', description: 'Container damaged in storm, goods worth ₹10L ruined. Policy covers ₹11L (value + 10% profit margin)!' },
      { title: 'Piracy Cover', description: 'Ship hijacked by pirates, ₹1Cr cargo stolen. Marine insurance with war risks covers full ₹1Cr loss!' },
      { title: 'Customs Recovery', description: 'Goods worth ₹20L lost, already paid ₹5L customs duty. Policy covers ₹20L cargo + ₹5L duty refund!' },
      { title: 'Business Continuity', description: 'Importer loses ₹30L goods, no insurance = business stops. With insurance = ₹33L payout, re-order immediately!' },
      { title: 'Letter of Credit', description: 'Banks require marine insurance for LC. Cannot import without insurance. Business necessity!' }
    ],
    coverage: { min: '₹1 Lakh', max: '₹100 Crore', premium: '0.2% - 2% of cargo value' },
    whyNeed: [
      { title: 'High Loss Risk', description: 'Ships sink, containers fall overboard, cargo damaged in storm. 2-3% shipments face loss/damage. Insurance protects!', amount: '₹10L-₹10Cr loss' },
      { title: 'Bank Requirement', description: 'Import via LC? Bank mandates marine insurance. Cannot clear customs without insurance certificate. Mandatory!', amount: 'Business necessity' },
      { title: 'Global Trade', description: 'Shipping from China/USA - takes 30-45 days, multiple risks. ₹50L cargo unprotected? Insurance gives peace of mind!', amount: 'Safe trade' }
    ],
    faqs: [
      { question: 'What is covered in marine insurance? Difference between ICC A, B, C?', answer: 'MARINE INSURANCE TYPES: (1) CARGO (goods being transported), (2) HULL (ship/vessel itself), (3) FREIGHT (shipping charges). CARGO COVERAGE - ICC CLAUSES: ICC A (Institute Cargo Clauses A) - ALL RISKS: Covers ALL causes of loss except exclusions (widest cover), Premium: 0.3-0.5% of cargo value, Best for: High-value, fragile goods (electronics, machinery), Exclusions: Intentional damage, delay, inherent vice, war (unless added). ICC B - NAMED PERILS: Covers: Fire, explosion, vessel stranding, collision, discharge at distress port, earthquake, lightning, General average sacrifice, jettison, Loss overboard, Entry of sea water, Premium: 0.2-0.3%, Best for: Durable goods (steel, coal, grains). ICC C - BASIC COVER: Covers: Fire, explosion, vessel stranding, collision, discharge at distress port, Premium: 0.1-0.2% (cheapest), Best for: Bulk commodities (iron ore, minerals). WHO NEEDS: (1) Importers - protect goods in transit, mandatory for LC, (2) Exporters - protect until goods reach buyer, (3) Shipping companies - hull + liability insurance. COST EXAMPLE: ₹50L electronics from China. ICC A premium 0.4% = ₹20K. Cargo lost = get ₹55L (110% CIF). ₹20K protects ₹50L!' }
    ],
    calculator: {
      inputs: [
        { name: 'cargoValue', label: 'Cargo Value (₹ Lakhs)', type: 'number' },
        { name: 'route', label: 'Shipping Route', type: 'select', options: ['Asia', 'Europe', 'Americas', 'Middle East', 'Africa'] },
        { name: 'clauseType', label: 'ICC Clause', type: 'select', options: ['ICC A (All Risks)', 'ICC B (Named Perils)', 'ICC C (Basic)'] }
      ],
      outputLabel: 'Marine Insurance Premium'
    }
  }
};

// Export combined remaining products
export const allRemainingProducts = {
  ...additionalLifeProducts,
  ...additionalInvestmentProducts,
  ...additionalHealthProducts,
  ...additionalMotorProducts,
  ...otherInsuranceProducts
};
