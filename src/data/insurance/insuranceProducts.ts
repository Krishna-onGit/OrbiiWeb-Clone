export interface InsuranceProduct {
  id: string;
  title: string;
  category: 'life' | 'health' | 'motor' | 'investment' | 'other';
  subtitle: string;
  description: string;
  icon: string;
  heroGradient: { from: string; to: string };
  stats: Array<{ number: string; label: string }>;
  keyPoints: string[];
  benefits: Array<{ title: string; description: string; icon?: string }>;
  coverage: { min: string; max: string; premium: string };
  whyNeed: Array<{ title: string; description: string; amount: string }>;
  faqs: Array<{ question: string; answer: string }>;
  calculator?: {
    inputs: Array<{ name: string; label: string; type: string; options?: string[] }>;
    outputLabel: string;
  };
}

export const insuranceProducts: Record<string, InsuranceProduct> = {

  // LIFE INSURANCE
  'term-insurance-nri': {
    id: 'term-insurance-nri',
    title: 'Term Insurance for NRI',
    category: 'life',
    subtitle: 'Complete Life Protection for Non-Resident Indians',
    description: 'Specially designed term insurance for NRIs with global coverage, forex-friendly premiums, and easy online purchase from anywhere in the world.',
    icon: 'Plane',
    heroGradient: { from: 'blue-500', to: 'indigo-600' },
    stats: [
      { number: '₹50L-₹10Cr', label: 'Coverage Options' },
      { number: '30+ Countries', label: 'Purchase From' },
      { number: 'NRE/NRO', label: 'Payment Modes' },
      { number: '99%', label: 'Claim Settlement' }
    ],
    keyPoints: [
      'Buy from USA, UK, UAE, Singapore, Canada, Australia - anywhere in the world',
      'Premium payment in Indian Rupees via NRE/NRO account or international credit card',
      'Cover for death anywhere globally - India or abroad',
      'No need to visit India for medical tests - tie-ups with global clinics',
      'Claim settlement in India to Indian nominees (family members)',
      'OCI/PIO cardholders eligible along with NRI passport holders',
      'Lower premium than abroad life insurance (30-50% cheaper)',
      'Tax benefits under India-specific sections if filing ITR in India'
    ],
    benefits: [
      {
        title: 'Global Coverage',
        description: 'Death benefit paid whether you die in India, USA, UAE, UK, or anywhere globally. No geographical restrictions on claim settlement.'
      },
      {
        title: 'Forex-Friendly',
        description: 'Premium in INR but can pay via international cards, NRE/NRO accounts. No forex conversion hassles or losses.'
      },
      {
        title: 'Remote Purchase',
        description: '100% online purchase from any country. Video KYC, digital signature, e-policy issuance. No India visit needed.'
      },
      {
        title: 'Medical Tests Abroad',
        description: 'For high sum assured, medical tests can be done at Metropolis/Apollo clinics in UAE, USA, UK, Singapore at no extra cost.'
      },
      {
        title: 'Family Protection',
        description: 'Nominees in India receive tax-free death benefit in INR. Protects family from forex volatility and ensures corpus in home currency.'
      },
      {
        title: 'Cheaper than Abroad',
        description: 'Term insurance in USA/UK costs 3-5x more than India for same coverage. ₹1Cr coverage in India = $12K vs $50K in USA annually.'
      }
    ],
    coverage: {
      min: '₹50 Lakhs',
      max: '₹10 Crore',
      premium: '₹8,000 - ₹40,000/year'
    },
    whyNeed: [
      {
        title: 'You Have Dependents',
        description: 'Spouse, children, parents depend on your income. If you die, their expenses do not stop - food, education, medical, rent continue.',
        amount: '10-15x annual income'
      },
      {
        title: 'Home Loan EMI',
        description: 'Home loan in India or abroad needs to be paid. Family should not lose house due to unpaid EMI.',
        amount: '₹30L - ₹80L'
      },
      {
        title: 'Children\'s Future',
        description: 'School fees ₹2L/year, college ₹15L, marriage ₹25L. These goals should not be compromised due to parent absence.',
        amount: '₹50L - ₹1Cr'
      },
      {
        title: 'Retirement Corpus',
        description: 'Planning to retire in India? Ensure family has retirement corpus if something happens before retirement.',
        amount: '₹1Cr - ₹3Cr'
      }
    ],
    faqs: [
      {
        question: 'Can I buy term insurance while living in USA/UAE/UK?',
        answer: 'Yes! NRIs can buy term insurance 100% online from any country. Process: (1) Visit insurer website, (2) Fill proposal form with NRI status, (3) Upload passport, OCI card, visa, foreign address proof, (4) Video KYC from your country via Zoom/video call, (5) Pay premium via international credit card or transfer from NRE/NRO account, (6) E-policy issued instantly to email. No need to visit India. Entire process takes 2-3 days. Medical tests (if needed for high sum assured) can be done at tie-up clinics in UAE, USA, UK, Singapore, Canada, Australia.'
      },
      {
        question: 'How do I pay premium from abroad? Which currency?',
        answer: 'Premium is in Indian Rupees (INR) but payment methods are NRI-friendly: (1) International Credit/Debit Card: Visa, Mastercard, Amex accepted. Charged in INR, bank does forex conversion. (2) NRE/NRO Account: Direct debit from your NRE or NRO savings account in India. (3) Wire Transfer: SWIFT transfer from foreign bank to insurer (higher charges). (4) India Bank Account: If you maintained savings account in India, pay via net banking. RECOMMENDATION: Use international credit card (easiest, instant) or NRE account auto-debit (no manual payment every year). Premium is ALWAYS quoted and charged in INR, not USD/AED/GBP.'
      },
      {
        question: 'Will claim be paid if I die outside India (in USA/UAE)?',
        answer: 'Yes, 100%! NRI term insurance covers death anywhere in the world - India or abroad. Claim process: (1) Family in India informs insurance company of death, (2) Submit death certificate from foreign country (USA death certificate, UAE death certificate, etc.), (3) Death certificate may need to be attested by Indian Embassy/Consulate in that country, (4) Translation to English if in foreign language, (5) Submit to insurer along with claim form, (6) Claim processed within 30 days, (7) Full sum assured paid to Indian nominees in INR. IMPORTANT: Death benefit is paid in India to nominees you listed (parents, spouse in India). If nominee also abroad, they can receive in their Indian bank account.'
      },
      {
        question: 'Do I get tax benefits on NRI term insurance?',
        answer: 'Tax benefit depends on your residential status: FILING ITR IN INDIA (Resident/RNOR): Premium deduction up to ₹1.5L under Section 80C, Death benefit tax-free under 10(10D) for nominees. NOT FILING ITR IN INDIA (NRI status): No Section 80C benefit as you do not pay Indian income tax, But death benefit still tax-free under 10(10D) for nominees in India. IMPORTANT: Even if you do not get 80C benefit, NRI term insurance is still valuable for family protection. Tax benefit is bonus, not the main reason. Many NRIs do not file ITR in India, yet buy term insurance for family security. Also, check if your country of residence (USA, UAE, UK) allows deduction - USA allows life insurance premium deduction in some states.'
      },
      {
        question: 'Is NRI term insurance cheaper than buying life insurance abroad?',
        answer: 'Yes, significantly cheaper! India term insurance costs 30-60% less than USA/UK/Canada life insurance for same coverage. Comparison for 35-year-old, $100,000 coverage, 20 years: INDIA (NRI Term): ₹8 Lakhs coverage (~$100K) = ₹12,000/year premium = $150/year. USA (Term Life): $100,000 coverage = $600-800/year. UAE (Term Life): $100,000 coverage = $450-600/year. UK (Term Life): £75,000 coverage = £350/year = $450/year. India is 4-5x cheaper! Why? Lower mortality rates, younger population, higher competition, lower operational costs. STRATEGY: Buy Indian term insurance for ₹2-3 Cr coverage at ₹20-30K/year premium. Much better than spending $2,000-3,000/year abroad for same coverage. BONUS: Indian term insurance proceeds go to family in India tax-free. Foreign insurance may be taxed/complicated for Indian nominees.'
      }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Your Age', type: 'number' },
        { name: 'coverage', label: 'Coverage (₹ Lakhs)', type: 'number' },
        { name: 'country', label: 'Country of Residence', type: 'select', options: ['USA', 'UAE', 'UK', 'Canada', 'Australia', 'Singapore'] },
        { name: 'income', label: 'Annual Income (₹)', type: 'number' }
      ],
      outputLabel: 'Estimated Annual Premium'
    }
  },

  'what-is-term-insurance': {
    id: 'what-is-term-insurance',
    title: 'What is Term Insurance',
    category: 'life',
    subtitle: 'Complete Guide to Understanding Term Insurance',
    description: 'Learn everything about term insurance - what it is, how it works, why you need it, and how to choose the right plan for your family.',
    icon: 'HelpCircle',
    heroGradient: { from: 'blue-500', to: 'cyan-500' },
    stats: [
      { number: '₹15/day', label: 'Starting Premium' },
      { number: '₹1 Crore', label: 'Typical Coverage' },
      { number: '98%+', label: 'Claims Paid' },
      { number: '100%', label: 'Tax-free Benefit' }
    ],
    keyPoints: [
      'Purest form of life insurance - provides only death benefit, no maturity/investment',
      'Highest coverage at lowest premium - ₹1 Cr for just ₹10,000/year (age 30)',
      'If you die during policy term (20-40 years), family gets full sum assured',
      'If you survive policy term, no money back (that is why premium is super low)',
      'Tax benefits: Premium deduction u/s 80C, death benefit tax-free u/s 10(10D)',
      'Claim settlement is straightforward - 98% claims approved if properly documented',
      'Can add riders: critical illness, accidental death, disability, waiver of premium',
      'Online purchase 20-30% cheaper than buying through agent'
    ],
    benefits: [
      {
        title: 'Financial Protection',
        description: 'Family gets lump sum ₹50L-10Cr if you die. They can pay off loans, continue lifestyle, fund children education without financial stress.'
      },
      {
        title: 'Lowest Premium',
        description: 'Pure protection, no investment/savings component. So premium is 80-90% lower than traditional plans. ₹1Cr term = ₹10K vs endowment = ₹80K.'
      },
      {
        title: 'Tax Benefits',
        description: 'Premium deduction ₹1.5L under Section 80C saves ₹46,500 tax (30% bracket). Death benefit 100% tax-free to family under 10(10D).'
      },
      {
        title: 'Loan Protection',
        description: 'Outstanding home loan, car loan, personal loans get paid off from death benefit. Family does not have to sell assets or default on EMIs.'
      },
      {
        title: 'Income Replacement',
        description: 'Replaces 10-20 years of your income. ₹1 Cr coverage = 10 years of ₹10L annual income. Family maintains same lifestyle without you.'
      },
      {
        title: 'Peace of Mind',
        description: 'Sleep peacefully knowing if something happens to you, family has ₹1 Cr cushion for 15-20 years. No financial worries during grief.'
      }
    ],
    coverage: {
      min: '₹25 Lakhs',
      max: '₹10 Crore',
      premium: '₹6,000 - ₹50,000/year'
    },
    whyNeed: [
      {
        title: 'You Have Dependents',
        description: 'Spouse, children, parents depend on your income. If you die, their expenses do not stop - food, education, medical, rent continue.',
        amount: '10-15x annual income'
      },
      {
        title: 'You Have Loans',
        description: 'Home loan ₹50L, car loan ₹10L must be repaid. Without you, family either pays from savings (depletes corpus) or loses assets.',
        amount: 'Total outstanding loans'
      },
      {
        title: 'Children\'s Future',
        description: 'School fees ₹2L/year, college ₹15L, marriage ₹25L. These goals should not be compromised due to parent absence.',
        amount: '₹50L - ₹1Cr'
      },
      {
        title: 'Spouse Not Working',
        description: 'If spouse is homemaker or earns less, they need 15-20 years of income replacement to maintain lifestyle and become independent.',
        amount: '15-20x annual expenses'
      }
    ],
    faqs: [
      {
        question: 'How is term insurance different from traditional life insurance?',
        answer: 'TERM INSURANCE: Pure protection. Death benefit only. No maturity money. Super low premium. Example: ₹1 Cr for ₹10K/year. If you die in 30 years, family gets ₹1 Cr tax-free. If you survive, no money back (total ₹3L premium paid over 30 years). TRADITIONAL (Endowment/Money Back): Protection + Investment. Death benefit + Maturity benefit. High premium. Example: ₹1 Cr sum assured costs ₹80K/year. If you die, family gets ₹1 Cr. If you survive 30 years, you get ₹35-40L maturity (total ₹24L premium paid). COMPARISON: Term gives 10x more death cover for same premium. Traditional gives money back but very low returns (4-5% vs FD 6%, PPF 7%, Mutual Fund 12%). RECOMMENDATION: Buy term insurance for protection (₹10K/year for ₹1Cr) + Invest remaining ₹70K in mutual funds for wealth creation (12% returns). This beats traditional plans which mix insurance + poor investment returns.'
      },
      {
        question: 'What happens if I outlive my term insurance policy?',
        answer: 'In PURE TERM insurance, if you survive the policy term, you get nothing back. Example: Buy ₹1 Cr term at age 30 for 30 years till age 60. Pay ₹10K/year premium. If you die anytime between age 30-60, family gets ₹1 Cr tax-free. If you reach age 61 alive and healthy, congratulations! Policy expires, no money back. You paid total ₹3L premium over 30 years (₹10K × 30 years). Is it a waste? NO! Think of it like car insurance - you don\'t want to use it, but you\'re protected if accident happens. Term insurance protected your family for 30 years. During this time, you built wealth via investments, paid off loans, kids became independent. The ₹10K/year bought you peace of mind worth ₹1 Cr risk cover for 30 years. ALTERNATIVE: If you want money back, buy "Return of Premium (TROP)" term plan. Premium is 3-4x higher (₹35K/year instead of ₹10K), but if you survive, you get all ₹10.5L premium back. Still, pure term + separate investment is better financially.'
      },
      {
        question: 'How much term insurance coverage do I need?',
        answer: 'Use HUMAN LIFE VALUE method: Coverage = Annual Income × Years to Retirement × 70%. Example: Age 30, income ₹12L/year, retirement at 60. Coverage = ₹12L × 30 × 0.7 = ₹2.52 Cr. Or use EXPENSE method: Coverage = (Annual family expenses × 20 years) + Loans + Goals. Example: Expenses ₹8L/year, home loan ₹60L, kids education ₹40L, marriage ₹30L = (₹8L × 20) + ₹60L + ₹70L = ₹1.6Cr + ₹1.3Cr = ₹2.9Cr. QUICK RULE: 10-15x annual income. ₹10L income = ₹1-1.5 Cr coverage, ₹15L income = ₹1.5-2.25 Cr coverage, ₹25L income = ₹2.5-3.75 Cr coverage. RECOMMENDED BY PROFILE: Single, no dependents: ₹25-50L (parents, own funeral), Married, no kids: ₹75L-1Cr (spouse, loans), Married with kids: ₹1-2Cr (kids education + loans + income replacement), Single parent: ₹1.5-3Cr (full income replacement for 15-20 years). Remember: Higher coverage costs only marginally more. ₹1Cr = ₹10K, ₹2Cr = ₹16K. Better to over-insure by ₹50L-1Cr.'
      },
      {
        question: 'Can I buy multiple term insurance policies?',
        answer: 'Yes, absolutely! You can buy term insurance from multiple insurers and all will pay claims. Example: Policy 1: ₹1 Cr from HDFC Life (₹10K/year), Policy 2: ₹50L from ICICI Prudential (₹5K/year), Total coverage: ₹1.5 Cr, Total premium: ₹15K/year. If you die, both insurers pay independently: HDFC pays ₹1 Cr + ICICI pays ₹50L = Family gets ₹1.5 Cr total. This is perfectly legal and encouraged! BENEFITS OF MULTIPLE POLICIES: Spread risk across insurers (if one delays claim, other pays), Buy as income grows (₹50L at 25, +₹50L at 30, +₹1Cr at 35 = ₹2Cr total), Different policy terms (20 years for loan, 30 years for kids), Take advantage of different insurers\' offers/riders. IMPORTANT: Declare existing policies when buying new ones. Insurers check during underwriting. Non-disclosure = claim rejection. Total coverage limit: Usually 25-30x annual income. ₹15L income = up to ₹3.75-4.5Cr total coverage across all policies.'
      },
      {
        question: 'What is claim settlement ratio and how to choose best insurer?',
        answer: 'Claim Settlement Ratio (CSR) = (Claims Paid / Total Claims) × 100. Example: Insurer receives 1,000 claims, pays 980, rejects 20 = 98% CSR. TOP INSURERS BY CSR (2023-24 data): Max Life: 99.51%, HDFC Life: 99.05%, Tata AIA: 98.31%, ICICI Prudential: 98.02%, SBI Life: 97.48%, LIC: 97.79%, Bajaj Allianz: 96.18%. WHAT GOOD CSR MEANS: 98%+ = Insurer pays most genuine claims quickly, Low rejection rate, Family won\'t face harassment during grief, Fast claim processing (7-30 days). RED FLAGS (CSR <95%): Insurer rejects claims on technicalities, Delays claim processing, May ask for excessive documentation, Higher chance of legal disputes. BESIDES CSR, check: Claim Settlement Time (how fast?), Individual Death Claim Ratio (separate from all claims), Solvency Ratio (>1.5 means financially stable), Customer Reviews (Google, Trustpilot). RECOMMENDATION: Choose insurers with 98%+ CSR even if premium is ₹500-1,000 higher annually. During claim, your family will thank you. Popular choices: HDFC Life, Max Life, ICICI Prudential, Tata AIA all have excellent CSR + fast claim processing.'
      }
    ]
  },

  // Add more products (I'll add a few more key ones to show the pattern)

  'ulip-plans': {
    id: 'ulip-plans',
    title: 'ULIP - Unit Linked Insurance Plans',
    category: 'investment',
    subtitle: 'Market-Linked Returns with Life Insurance Protection',
    description: 'Invest in equity, debt, or balanced funds with life cover. Get 10-15% returns with tax-free maturity and wealth creation for long-term goals.',
    icon: 'TrendingUp',
    heroGradient: { from: 'yellow-500', to: 'orange-500' },
    stats: [
      { number: '10-15%', label: 'Equity Returns (p.a.)' },
      { number: '5 Years', label: 'Lock-in Period' },
      { number: '100%', label: 'Tax-free Maturity' },
      { number: '10x', label: 'Life Cover (premium)' }
    ],
    keyPoints: [
      'Dual benefit: Investment + Life Insurance in single product',
      'Choose funds: 100% Equity, 100% Debt, or Balanced (mix)',
      'Switch between funds 4-12 times/year free based on market conditions',
      'Lock-in: 5 years mandatory, partial withdrawal allowed after 5th year',
      'Returns: Equity 10-15%, Debt 6-8%, Balanced 8-10% historically',
      'Tax benefits: Premium deduction u/s 80C, maturity tax-free u/s 10(10D)',
      'Charges: Premium allocation (5-7% first year), fund management (1-1.35%), mortality',
      'Life cover: Typically 10x annual premium as per IRDAI regulations'
    ],
    benefits: [
      {
        title: 'Wealth Creation',
        description: 'Equity ULIP returns 12-14% over 15-20 years beats FD (6%), PPF (7.1%), traditional insurance (5%). ₹10K/month for 20 years = ₹1.2 Cr @ 12%.'
      },
      {
        title: 'Life Protection',
        description: 'Unlike mutual funds, ULIP has life cover. If you die, family gets Sum Assured OR Fund Value, whichever higher. Investment continues even if you\'re gone.'
      },
      {
        title: 'Tax Efficiency',
        description: 'Premium deduction ₹1.5L (80C) saves ₹46.5K tax. Maturity 100% tax-free (10(10D)). Mutual funds have 10% LTCG tax above ₹1L.'
      },
      {
        title: 'Flexibility',
        description: 'Switch funds when market changes: Equity to Debt during crash, Debt to Equity during recovery. Partial withdrawals after 5 years for emergencies.'
      },
      {
        title: 'Forced Discipline',
        description: '5-year lock-in ensures you don\'t withdraw during market crashes (biggest mistake). Forced SIP discipline = better corpus building than self-investment.'
      },
      {
        title: 'Goal-based',
        description: 'Child education in 15 years: Equity ULIP. Retirement in 25 years: Balanced ULIP. Down payment in 10 years: Debt ULIP. Align with life goals.'
      }
    ],
    coverage: {
      min: '₹20,000/year',
      max: '₹5 Lakhs/year',
      premium: 'Min ₹20K annual or ₹2K monthly'
    },
    whyNeed: [
      {
        title: 'Better than Traditional Plans',
        description: 'Traditional endowment gives 5% guaranteed. ULIP equity gives 12% market-linked. 7% higher return = 2x wealth in 20 years.',
        amount: '2x corpus'
      },
      {
        title: 'Tax-free vs Mutual Funds',
        description: 'ULIP maturity tax-free. Mutual fund equity attracts 10% LTCG tax above ₹1L. On ₹50L corpus, save ₹5L tax with ULIP.',
        amount: '₹5L tax saved'
      },
      {
        title: 'Life Cover Included',
        description: 'Separate term insurance costs ₹10K/year. ULIP includes life cover free. Saves ₹1.5-2L over 15 years compared to mutual fund + term.',
        amount: '₹2L savings'
      },
      {
        title: 'Disciplined Investing',
        description: '80% retail investors exit mutual funds during crashes, missing recovery. ULIP lock-in ensures you stay invested through volatility.',
        amount: '40% higher returns'
      }
    ],
    faqs: [
      {
        question: 'ULIP vs Mutual Funds - which is better for investment?',
        answer: 'BOTH have merits. ULIP ADVANTAGES: Life cover included (10x premium), Tax-free maturity (mutual funds taxable), 80C tax deduction on premium (mutual fund SIP not eligible except ELSS), Lock-in ensures discipline (don\'t panic sell during crashes), Single product simplicity. MUTUAL FUND ADVANTAGES: Lower charges (1-2% vs 2.5-3% in ULIP), Higher flexibility (withdraw anytime in most funds), Potentially 1-2% higher returns, More fund options and AMC choices. NUMBERS EXAMPLE - ₹10K/month, 15 years, 12% return: ULIP: ₹43L maturity (tax-free), Charges ₹3.5L (fund management + premium allocation), Net: ₹43L. Mutual Fund: ₹48L maturity, LTCG tax ₹5L (on ₹30L gains @ 10%), Charges ₹1.5L (expense ratio), Net: ₹41.5L. ULIP wins by ₹1.5L due to tax-free benefit! RECOMMENDATION: ULIP if you want: tax benefits, life cover, forced discipline, single product. Mutual Funds if you want: lower charges, flexibility, pure investment focus. BEST: Mix both - 40% ULIP (tax benefits + life cover) + 60% Mutual Funds (flexibility + lower charges).'
      },
      {
        question: 'What are the charges in ULIP and how do they affect returns?',
        answer: 'ULIP has 4 main charges: (1) PREMIUM ALLOCATION CHARGE: First year: 65-90% of premium (₹1L premium = ₹35K-40K invested), Years 2-5: 10-25%, Year 6+: 0-5%. Total over 15 years: ₹1.5-2L on ₹15L investment. (2) FUND MANAGEMENT CHARGE (FMC): 1% to 1.35% deducted daily from NAV, On ₹10L fund value = ₹10K-13.5K/year, Equity funds higher (1.35%), Debt lower (0.75%). (3) MORTALITY CHARGE: Life cover cost, ₹50L cover, age 30 = ₹2,000/year, Increases with age: age 40 = ₹4K, age 50 = ₹8K. (4) POLICY ADMIN CHARGE: ₹300-500/year, Some waive after 5 years. TOTAL IMPACT: Premium paid over 15 years: ₹15L (₹1L/year × 15), Total charges: ₹3-3.5L (20-23%), Net invested: ₹11.5-12L, Maturity @ 12%: ₹43L. Compare MUTUAL FUND: ₹15L invested over 15 years, Charges (expense ratio 1.5%): ₹1.8L, Maturity @ 12%: ₹48L, LTCG Tax: ₹4.8L, Net: ₹43.2L. Almost SAME despite ULIP\'s higher charges due to tax-free maturity! LOWER CHARGE ULIPs: Online ULIPs have 50% lower charges (FMC 0.75-1%), Top up facility (charges only on base premium, not top-ups), High premium discount (>₹2L/year = lower FMC).'
      },
      {
        question: 'Can I switch between equity and debt funds in ULIP? How many times?',
        answer: 'Yes! Fund switching is a key ULIP feature. HOW IT WORKS: You allocate premium between funds at start: 70% Equity + 30% Debt. Later switch to 40% Equity + 60% Debt if market crashes. Or 100% Equity when young, shift to 60% Debt as retirement nears. FREE SWITCHES: Most ULIPs allow 4-12 free switches per year, Some allow unlimited free switches (HDFC Life, Max Life), Beyond free limit: ₹100-250 per switch. WHEN TO SWITCH: Market peaks (Nifty 22,000+): Shift equity to debt (book profits), Market crashes (Nifty 16,000-): Shift debt to equity (buy low), Age-based: Young (80% equity), 40+ (60% equity), 50+ (40% equity), Near goal (5 years away): Shift to debt (protect corpus). FUND OPTIONS: Equity Funds: Large cap, Mid cap, Multi cap, Sector (IT, Pharma), Debt Funds: Gilt, Corporate bond, Liquid, Balanced Funds: 60% equity + 40% debt autopilot. REAL STRATEGY: Start 100% equity at age 25-35, Switch to 70% equity at age 35-40, Switch to 50% equity at age 40-50, Final 5 years: 30% equity, 70% debt (secure maturity). This tactical switching can add 2-3% extra returns vs static allocation!'
      },
      {
        question: 'What is lock-in period and can I withdraw money from ULIP?',
        answer: 'LOCK-IN PERIOD: 5 years mandatory by IRDAI regulations. You CANNOT withdraw in first 5 years except on death/total permanent disability. If you try to surrender before 5 years, policy moves to "Discontinued Fund" earning lower returns (4-5%), still locked till 5 years complete. AFTER 5 YEARS - PARTIAL WITHDRAWAL: Allowed from 6th year onwards, Limit: 20-25% of fund value per withdrawal, Frequency: 1-4 times per year (varies by insurer), Tax: Withdrawals are tax-free, No impact on life cover if fund value sufficient. Example: Fund value ₹10L in 7th year. Can withdraw ₹2L-2.5L. Remaining ₹7.5L continues to grow. Charge: ₹500-1,000 per withdrawal. FULL SURRENDER: After 5 years: Get fund value - surrender charge (0-3%), Before 5 years: Policy lapses, gets discontinued fund value after 5 years. WHEN TO WITHDRAW: Child education fees urgently needed, Medical emergency, Down payment for house. DON\'T withdraw for: Market crash (worst time to exit), Short-term needs (defeats purpose), Non-essential expenses. RECOMMENDATION: Treat ULIP as long-term (10-15 years) and don\'t touch. Partial withdrawal facility is safety net, not to be used regularly. Lock-in is actually GOOD - prevents panic selling during market corrections!'
      },
      {
        question: 'How much should I invest in ULIP - lump sum or monthly SIP?',
        answer: 'SIP (Systematic Investment) is BETTER than lump sum for ULIPs. WHY SIP BETTER: Rupee Cost Averaging: Buy more units when NAV low, fewer when high. Averages out market volatility. Discipline: Monthly deduction ensures you invest consistently vs lump sum requires discipline annually. Cash flow: ₹10K/month easier than ₹1.2L once a year. Lower risk: Spread investment over 12 months vs timing market with lump sum. MINIMUM INVESTMENT: Annual mode: ₹20,000 - ₹50,000 minimum, Monthly mode: ₹2,000 - ₹5,000 minimum. RECOMMENDED AMOUNT: 10-20% of monthly income: ₹40K salary = ₹4K-8K/month ULIP, ₹80K salary = ₹8K-16K/month, ₹1.5L salary = ₹15K-30K/month. GOAL-BASED: Child education (15 years): ₹50L needed = ₹15K/month @ 12%, Retirement (25 years): ₹2Cr needed = ₹15K/month @ 12%, Home down payment (10 years): ₹30L needed = ₹16K/month @ 10%. TOP-UP FACILITY: Many ULIPs allow top-ups (additional investment) with lower charges, Use bonus/increment to top up ₹50K-1L annually, Boosts corpus significantly. EXAMPLE: ₹10K/month base premium, ₹1L annual top-up from bonus, 15 years @ 12% = ₹65L (vs ₹43L without top-up). STEP-UP: Increase SIP by 10% every year to match salary increment. Starting ₹10K becomes ₹26K in 10th year, creates ₹1Cr+ corpus.'
      }
    ],
    calculator: {
      inputs: [
        { name: 'monthlyInvestment', label: 'Monthly Investment (₹)', type: 'number' },
        { name: 'years', label: 'Investment Period (years)', type: 'number' },
        { name: 'fundType', label: 'Fund Type', type: 'select', options: ['Equity (12%)', 'Balanced (10%)', 'Debt (7%)'] },
        { name: 'age', label: 'Your Age', type: 'number' }
      ],
      outputLabel: 'Maturity Value (Tax-free)'
    }
  },

  'senior-citizen-health': {
    id: 'senior-citizen-health',
    title: 'Senior Citizen Health Insurance',
    category: 'health',
    subtitle: 'Comprehensive Health Coverage for 60+ Age Group',
    description: 'Specialized health insurance for elderly parents with pre-existing disease cover, higher claim limits, no health check-up, and OPD benefits.',
    icon: 'Users',
    heroGradient: { from: 'red-500', to: 'pink-500' },
    stats: [
      { number: '60+ Years', label: 'Entry Age' },
      { number: '₹3L-₹25L', label: 'Coverage' },
      { number: 'Day 1', label: 'Pre-existing Cover' },
      { number: '99%', label: 'Claim Settlement' }
    ],
    keyPoints: [
      'Entry age: 60 to 75 years (some up to 80 years)',
      'No medical tests required for coverage up to ₹3-5 lakhs',
      'Pre-existing diseases covered from day 1 or after 1-2 years (vs 4 years in regular)',
      'Higher room rent limits: Single AC room or no capping',
      'OPD expenses covered: Doctor consultations, diagnostics, medicines',
      'Home healthcare: Nursing, physiotherapy, medical equipment at home',
      'Ambulance charges up to ₹5,000 per hospitalization',
      'Lifetime renewability: Policy continues even after claims'
    ],
    benefits: [
      {
        title: 'Pre-existing Disease Cover',
        description: 'Diabetes, hypertension, heart disease, arthritis covered from day 1 or after short 1-2 year waiting period. Regular plans need 4 years.'
      },
      {
        title: 'No Medical Tests',
        description: 'For coverage up to ₹3-5L, no pre-medical tests needed. Just fill declaration form. Saves ₹5,000-10,000 diagnostic costs and hassle.'
      },
      {
        title: 'Higher Claim Limits',
        description: 'Room rent: No capping or 2% of sum insured (₹5L plan = ₹10K/day room). ICU charges up to ₹15K/day. Unrestricted medical expenses.'
      },
      {
        title: 'OPD Coverage',
        description: 'Outpatient expenses without hospitalization: Doctor fees ₹500-1,000/visit, Diagnostics ₹5,000-10,000/year, Medicines ₹10,000/year. Total ₹25K-50K OPD limit.'
      },
      {
        title: 'Home Healthcare',
        description: 'Post-surgery recovery at home with nursing care covered. Physiotherapy, oxygen cylinder, medical bed rental. Saves ₹2,000-5,000/day vs hospital.'
      },
      {
        title: 'Lifetime Renewability',
        description: 'Policy renews till 99 years even after multiple claims. Cannot be discontinued by insurer. Guaranteed healthcare cover for life.'
      }
    ],
    coverage: {
      min: '₹2 Lakhs',
      max: '₹25 Lakhs',
      premium: '₹15,000 - ₹60,000/year'
    },
    whyNeed: [
      {
        title: 'High Medical Risk',
        description: '60+ age group has 3-5x higher hospitalization rate. Diabetes, BP, heart issues, joint problems common. One hospitalization costs ₹2-5 lakhs.',
        amount: '₹2-5L per year'
      },
      {
        title: 'Regular Treatment Needs',
        description: 'Routine check-ups, medicines, doctor visits cost ₹50K-1L annually. OPD cover helps recover these recurring expenses.',
        amount: '₹50K-1L annually'
      },
      {
        title: 'Limited Medicare Benefits',
        description: 'Post-retirement, employer health insurance ends. CGHS/ECHS have limitations. Personal senior citizen plan gives full freedom in hospital choice.',
        amount: 'No employer cover'
      },
      {
        title: 'Inflation Protection',
        description: 'Medical costs rise 15% annually. ₹2L treatment today = ₹4L in 5 years. Insurance covers inflation, fixed premiums increase slowly.',
        amount: '15% annual rise'
      }
    ],
    faqs: [
      {
        question: 'What is the maximum age to buy senior citizen health insurance?',
        answer: 'ENTRY AGE varies by insurer: Most insurers: 60 to 75 years entry age, Some insurers: Up to 80 years (Star Health, Care Health), Some insurers: Even 85 years (National Insurance, United India). RENEWAL: Lifelong renewal up to 99 years once policy purchased. Even if you enter at 75, can renew till 99 years. RECOMMENDATION: Buy as soon as you turn 60! Premium increases steeply with age: Age 60: ₹15K/year for ₹3L coverage, Age 65: ₹22K/year, Age 70: ₹35K/year, Age 75: ₹50K/year. IMPORTANT: After 75, very few insurers accept new proposals. If you miss window, only government schemes (CGHS, ECHS, Ayushman Bharat) remain. Some employers offer post-retirement floater plans - extend those but also buy personal policy as backup.'
      },
      {
        question: 'Are pre-existing diseases covered in senior citizen plans?',
        answer: 'YES, but with waiting period: STANDARD SENIOR PLANS: Pre-existing diseases covered after 1-2 years (vs 4 years in regular plans). Age 60+ already have diabetes, BP, thyroid - insurers know this, so shorter waiting. Specific diseases (cataract, hernia, knee replacement): 2-3 years. IMMEDIATE COVER PLANS (Higher Premium): Some insurers offer zero waiting period for 30-40% higher premium. Pre-existing covered from day 1. Worth it if parent has active condition needing treatment soon. DECLARE EVERYTHING: Must declare all existing conditions: diabetes, hypertension, heart disease, thyroid, kidney, asthma. Non-disclosure = claim rejection. Provide medical reports from last 4 years if asked. CHRONIC CONDITIONS: Diabetes: Covered after 1-2 years, regular medication expenses not covered (only hospitalization). Hypertension: Covered after 1-2 years, Heart Disease: If stable (no surgery in last 2 years), covered after 2 years. If recent surgery, may be excluded or high premium loading. Cancer: If in remission 5+ years, may be covered with loading. Active cancer usually not covered. RECOMMENDATION: Buy at 60 when relatively healthy. Waiting period completes by 62, covers you from 62-99 years (37 years coverage vs buying at 70 with health issues and risking rejection).'
      },
      {
        question: 'How much does senior citizen health insurance cost?',
        answer: 'Premium varies by age, coverage, city, pre-existing conditions: AGE 60: ₹3L coverage: ₹12,000 - ₹18,000/year, ₹5L coverage: ₹18,000 - ₹28,000/year, ₹10L coverage: ₹35,000 - ₹50,000/year. AGE 65: ₹3L coverage: ₹18,000 - ₹25,000/year, ₹5L coverage: ₹28,000 - ₹40,000/year. AGE 70: ₹3L coverage: ₹30,000 - ₹45,000/year, ₹5L coverage: ₹45,000 - ₹65,000/year. AGE 75: ₹3L coverage: ₹45,000 - ₹60,000/year, ₹5L coverage: ₹65,000 - ₹90,000/year. PREMIUM INCREASES: Annual increase: 15-25% every year due to age and medical inflation. Some policies have graded premiums fixed at purchase for 5 years. PRE-EXISTING LOADING: If diabetes/BP: +20-30% loading. If heart disease: +40-60% loading. If multiple conditions: +50-80% loading. TAX BENEFIT: Premium paid for parents (60+) gets ₹50,000 deduction under Section 80D. Saves ₹15,000 tax (30% bracket). IS IT EXPENSIVE? Yes, but one hospitalization without insurance costs ₹2-5L. Premium of ₹20K-40K/year is protection against ₹3-5L expense. AFFORDABILITY: If premium seems high, opt for: ₹2-3L basic coverage (₹12-18K/year cheaper), Super top-up plan after base coverage (extra ₹5-10L for ₹8-12K/year), Government schemes: Ayushman Bharat (₹5L free for BPL), CGHS/ECHS for central govt employees.'
      },
      {
        question: 'What is OPD cover and is it worth adding for senior citizens?',
        answer: 'OPD (Out-Patient Department) cover pays for medical expenses WITHOUT hospitalization. WHAT\'S COVERED: Doctor consultation fees: ₹500-1,500 per visit, Diagnostic tests: Blood tests, X-ray, ECG, ultrasound (₹5K-10K/year), Medicines: Prescribed drugs from pharmacy (₹10K-15K/year), Dental: Tooth extraction, filling, root canal (₹5K-10K/year), Eye care: Spectacles, eye check-ups (₹3K-5K/year). ANNUAL LIMIT: ₹10,000 to ₹50,000 per year depending on add-on chosen. ADDITIONAL COST: ₹3,000 to ₹10,000/year for OPD rider (20-30% of base premium). IS IT WORTH FOR SENIORS? YES, highly recommended! Seniors visit doctors frequently: Monthly doctor visits (12 visits × ₹800 = ₹9,600/year), Quarterly blood tests (₹2,000 × 4 = ₹8,000/year), Regular medicines (₹5,000-10,000/year), Dental/eye care (₹5,000-8,000/year), Total OPD expenses: ₹30,000-40,000/year. OPD cover of ₹30K-40K costs only ₹8K-10K premium. Recover almost 3-4x the premium paid! WITHOUT OPD COVER: Only hospitalization (24+ hours admitted) covered. Routine check-ups, OPD consultations not covered. You pay ₹30K-40K from pocket annually. RECOMMENDATION: Add OPD cover if: Parent has chronic conditions needing frequent monitoring, Monthly doctor visits expected, Want to recover routine medical expenses. Skip OPD if: Parent very healthy with rare doctor visits, Want to minimize premium, Can afford ₹20-30K/year out-of-pocket expenses.'
      },
      {
        question: 'Can I buy senior citizen health insurance for my parents together (floater)?',
        answer: 'Yes and No - depends on type: INDIVIDUAL POLICIES (RECOMMENDED FOR SENIORS): Separate policy for father (₹3L) + separate for mother (₹3L) = ₹6L total. Premium: ₹15K + ₹13K = ₹28K/year (mother cheaper due to lower mortality). Advantage: Each has ₹3L dedicated. If father uses ₹2L, mother still has full ₹3L available. No impact of one\'s claim on other\'s coverage. FAMILY FLOATER (NOT IDEAL FOR SENIORS): Single policy covering both parents with SHARED ₹5-6L limit. Premium: ₹25K-30K/year (slightly cheaper than 2 individual). Disadvantage: If father hospitalized for ₹4L, only ₹1-2L remains for mother same year. Both policies\' premium increases together on even one claim. Older parent\'s age determines premium (higher). WHY INDIVIDUAL BETTER FOR SENIORS: Independent coverage: Each has guaranteed ₹3L even if other uses full amount. Claim independence: Father\'s claim doesn\'t affect mother\'s no-claim bonus or renewal. Age-based pricing: Mother gets lower premium if younger. Health-based: If father has pre-existing diseases, only his premium has loading. Mother\'s premium unaffected. WHEN FLOATER MAKES SENSE: Young families (30-40 age): Shared ₹5-10L for 4 members cheaper and sufficient. Lower claim frequency: Unlikely all use coverage same year. Healthy members: One person\'s high usage unlikely. RECOMMENDATION FOR PARENTS (60+): Buy individual ₹3-5L policies for each parent. Costs ₹3-5K more than floater but gives independent ₹6-10L combined coverage. Add super top-up floater of ₹10L for 10K extra to cover catastrophic expenses (gets triggered after base individual exhausted). Example: Father individual ₹5L + Mother individual ₹5L + Family super top-up ₹10L (₹5L deductible) = Total coverage ₹20L for ₹45K/year.'
      }
    ],
    calculator: {
      inputs: [
        { name: 'age', label: 'Parent Age', type: 'number' },
        { name: 'coverage', label: 'Coverage (₹ Lakhs)', type: 'select', options: ['2', '3', '5', '10', '15', '25'] },
        { name: 'preExisting', label: 'Pre-existing Diseases', type: 'select', options: ['None', 'Diabetes/BP', 'Heart Disease', 'Multiple'] },
        { name: 'opdCover', label: 'Add OPD Cover?', type: 'select', options: ['No', 'Yes (₹25K)', 'Yes (₹50K)'] }
      ],
      outputLabel: 'Annual Premium'
    }
  }

  // Continue adding more products following this structure...
  // I'll add placeholders for all products to show the complete structure
};

// Export helper function to get product by ID
export function getProductById(id: string): InsuranceProduct | undefined {
  return insuranceProducts[id];
}

// Export helper to get products by category
export function getProductsByCategory(category: string): InsuranceProduct[] {
  return Object.values(insuranceProducts).filter(p => p.category === category);
}