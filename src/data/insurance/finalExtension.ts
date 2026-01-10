import { InsuranceProduct } from './insuranceProducts';

// Pension Plans (child-plans already exists in additionalProducts.ts)
// Professional Indemnity and Doctor Indemnity already exist in motorOtherExtension.ts

export const finalExtensionProducts: Record<string, InsuranceProduct> = {
  'pension-plans': {
    id: 'pension-plans',
    title: 'Pension Plans',
    category: 'investment',
    subtitle: 'Retirement Annuity Plans - Guaranteed Monthly Income Post-Retirement',
    description: 'Pension plans providing regular monthly income after retirement. Immediate or deferred annuity options. Guaranteed payouts for life.',
    icon: 'Wallet',
    heroGradient: { from: 'green-500', to: 'teal-500' },
    stats: [
      { number: '₹15K-₹1L', label: 'Monthly Pension' },
      { number: '₹20L-₹2Cr', label: 'Lump Sum Invest' },
      { number: 'Lifelong', label: 'Payout Duration' },
      { number: '6-8%', label: 'Annuity Rate' }
    ],
    keyPoints: [
      'Immediate annuity: Invest ₹50L lump sum at 60, get ₹30K/month from next month for life',
      'Deferred annuity: Pay ₹50K/year for 20 years, get ₹25K/month from age 60 for life',
      'Annuity options: Life only, life + return of purchase, joint life (spouse continues)',
      'Guaranteed income: Fixed ₹30K/month lifelong, no market risk, payment till death',
      'Return of purchase: Annuitant dies, nominee gets ₹50L back + monthly pension received',
      'Increasing pension: 5% annual increase option, ₹20K becomes ₹32K in 10 years',
      'Tax benefit: Premium under 80CCC, pension taxable as income',
      'NPS alternative: LIC Jeevan Akshay, HDFC Pension Sanchay offer higher rates than NPS'
    ],
    benefits: [
      { title: 'Lifelong Income', description: 'Retire at 60, live till 85. Get ₹25K/month × 300 months = ₹75L vs ₹50L invested!' },
      { title: 'No Market Risk', description: 'Stock crash, FD rate 4%. Pension ₹30K unchanged. Guaranteed income in any market!' },
      { title: 'Spouse Protection', description: 'Joint life option: You die at 70, spouse gets ₹25K till her death at 85. Total security!' },
      { title: 'Return of Capital', description: 'Die at 65 after getting ₹15L pension. Nominee gets ₹50L purchase price back. Win-win!' },
      { title: 'Increasing Pension', description: '5% increase: ₹20K at 60 → ₹32K at 70 → ₹52K at 80. Beat inflation partially!' },
      { title: 'Tax Deduction', description: 'Premium ₹10L under 80CCC. Save ₹3.1L tax (31% slab). Effective cost ₹6.9L!' }
    ],
    coverage: { min: '₹10,000/month', max: '₹2,00,000/month', premium: '₹10L - ₹2Cr lumpsum or ₹20K-₹2L/year' },
    whyNeed: [
      { title: 'Salary Replacement', description: 'Salary ₹1L stops at 60. Expenses ₹70K continue. Pension ₹50K + savings ₹20K = manage!', amount: '₹50K monthly' },
      { title: 'Longevity Risk', description: 'Live till 90, corpus exhausts at 75. Pension continues till death. No outliving money!', amount: 'Lifelong income' },
      { title: 'Medical Costs', description: 'Age 70+, medical ₹30K/month. Pension ₹40K dedicated for health. Stress-free retirement!', amount: '₹40K secure' }
    ],
    faqs: [
      { question: 'Pension Plan vs NPS vs Senior Citizen Savings - which gives best returns?', answer: 'PENSION PLAN (LIC Jeevan Akshay): Returns: 6-7% annuity rate. ₹50L → ₹30K/month (7.2%). Risk: Insurance company credit risk (very low, LIC govt backed). Flexibility: ZERO. Cannot withdraw lump sum. Lifelong till death. Tax: Premium 80CCC, Pension fully taxable. Best for: Lifelong guaranteed income, no lump sum need. NPS (National Pension System): Returns: 9-12% during accumulation, 6-7% annuity on 40% at retirement. Risk: Market-linked. Can go 15% or -5% in accumulation. Flexibility: 60% lump sum withdrawal at 60, 40% must buy annuity. Tax: 80CCD(1B) ₹50K extra deduction. ₹2L maturity tax-free (80CCD-2). Best for: Accumulation phase (young), market returns, partial liquidity. SCSS (Senior Citizen Savings Scheme): Returns: 8.2% currently (govt reviews quarterly). Risk: Govt backed, zero risk. Flexibility: 5-year term, then re-invest. Premature after 1 year with penalty. Tax: 80C deduction ₹1.5L, interest taxable. Max investment ₹30L. Best for: Safety, higher rate than FD, short-term 5 years. COMPARISON (₹50L investment, age 60): Pension Plan: ₹30K/month = ₹3.6L/year lifelong (live till 85 = ₹90L total). NPS: Accumulate till 60 = ₹1Cr, take ₹60L lump sum + ₹40L annuity (₹24K/month). SCSS: ₹50L (max ₹30L allowed) @ 8.2% = ₹41K/year for 5 years, then re-invest. RECOMMENDATION: Age 30-50 = NPS for accumulation. Age 60 = SCSS ₹30L + Pension plan ₹20L. Get ₹2.5L/year SCSS + ₹12K/month pension = ₹4L total!' }
    ],
    calculator: {
      inputs: [
        { name: 'lumpsum', label: 'Lump Sum Amount (₹ Lakhs)', type: 'number' },
        { name: 'age', label: 'Your Current Age', type: 'number' },
        { name: 'annuityType', label: 'Annuity Type', type: 'select', options: ['Life Only', 'Life + Return', 'Joint Life', 'Increasing Pension'] }
      ],
      outputLabel: 'Monthly Pension Amount'
    }
  }
};
