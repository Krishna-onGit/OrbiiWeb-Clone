import { InsuranceProduct } from './insuranceProducts';

// Remaining LIFE INSURANCE products
export const lifeInsuranceProducts: Record<string, InsuranceProduct> = {
  'return-of-premium': {
    id: 'return-of-premium',
    title: 'Return of Premium Term Insurance',
    category: 'life',
    subtitle: 'Get All Premiums Back if You Survive + Complete Life Protection',
    description: '100% premium refund on survival with full life cover during term. Protection + Guaranteed savings in one plan.',
    icon: 'Award',
    heroGradient: { from: 'green-500', to: 'teal-500' },
    stats: [
      { number: '100%', label: 'Premium Refunded' },
      { number: '₹1Cr+', label: 'Life Cover' },
      { number: 'Tax-free', label: 'Returns' },
      { number: '98%', label: 'Claim Settlement' }
    ],
    keyPoints: [
      'All premiums paid returned if you survive policy term (20-40 years)',
      'Full life cover during term - family gets death benefit if you die',
      'Tax benefits: Premium deduction 80C + Maturity tax-free 10(10D)',
      'Forced savings: Get lump sum after 20-30 years automatically',
      'Premium 3-4x higher than pure term but money comes back',
      'Ideal for those who feel term insurance premium is "wasted"',
      'Maturity amount can fund retirement, children marriage, dream vacation'
    ],
    benefits: [
      { title: 'Premium Refund', description: 'Get 100% of premiums paid back on survival. Example: Pay ₹35K/year for 20 years = ₹7L total. Survive = Get ₹7L back tax-free.' },
      { title: 'Life Protection', description: 'During 20-30 year term, family gets ₹50L-₹2Cr if you die. Best of both worlds - protection + money back.' },
      { title: 'Disciplined Saving', description: 'Forces you to save ₹30-50K/year for 20-30 years. Unlike mutual funds where you may skip SIP, this is forced savings.' },
      { title: 'Tax Efficiency', description: 'Premium deduction under 80C saves tax annually. Maturity proceeds 100% tax-free unlike FD/mutual funds.' },
      { title: 'No Market Risk', description: 'Unlike ULIP or mutual funds, returns guaranteed. Will definitely get all premiums back regardless of market conditions.' },
      { title: 'Retirement Corpus', description: 'Maturity at age 55-60 provides ₹5-15L lump sum for retirement. Can supplement pension or invest for monthly income.' }
    ],
    coverage: { min: '₹25 Lakhs', max: '₹2 Crore', premium: '₹15,000 - ₹70,000/year' },
    whyNeed: [
      { title: 'Dual Benefit', description: 'Get life cover + guaranteed savings. Pay ₹35K/year for 20 years, get ₹7L back + had ₹1Cr protection.', amount: '₹7-25L returned' },
      { title: 'Forced Discipline', description: 'If you struggle to save consistently, this forces ₹30-50K annual savings for 20-30 years.', amount: '₹6-15L corpus' },
      { title: 'Tax-free Returns', description: 'FD/bonds give 6% but taxable = 4.2% post-tax. TROP gives 0% return but tax-free + life cover worth 2-3% annually.', amount: 'Tax saving ₹2-5L' }
    ],
    faqs: [
      {
        question: 'Is Return of Premium term insurance worth the higher cost?',
        answer: 'Depends on your psychology and discipline. PURE TERM: ₹1Cr coverage, ₹10K/year premium, 30 years = ₹3L total spent. If you survive, ₹3L "gone" but you had protection. TROP: ₹1Cr coverage, ₹35K/year premium, 30 years = ₹10.5L total. If you survive, get ₹10.5L back tax-free. FINANCIALLY: Pure term + invest ₹25K difference in mutual funds for 30 years at 12% = ₹70L (vs ₹10.5L in TROP). So pure financial sense says TROP is not optimal. BEHAVIORALLY: If you will not actually invest that ₹25K difference (most people do not), TROP forces savings. Getting ₹10.5L back is better than spending that ₹25K on consumption. VERDICT: Buy TROP if you feel pure term premium is wasted, will not invest the difference, want forced savings, okay with lower returns vs market investment. Buy pure term if you have investment discipline, want to maximize returns by investing separately, understand insurance is protection not investment.'
      }
    ]
  },

  'term-insurance-women': {
    id: 'term-insurance-women',
    title: 'Term Insurance for Women',
    category: 'life',
    subtitle: 'Affordable Life Protection for Working & Homemaker Women',
    description: '10-15% cheaper premiums for women with maternity, breast cancer coverage and special benefits.',
    icon: 'Heart',
    heroGradient: { from: 'pink-500', to: 'rose-500' },
    stats: [
      { number: '10-15%', label: 'Cheaper Premium' },
      { number: '₹50L-₹5Cr', label: 'Coverage' },
      { number: 'Maternity', label: 'Cover Available' },
      { number: '₹5-15K', label: 'Annual Cost' }
    ],
    keyPoints: [
      'Women get 10-15% lower premium vs men due to higher life expectancy',
      'Working women: Protect family from loss of dual income',
      'Homemaker women: Value of household work = ₹25-40K/month',
      'Maternity complications covered: Pregnancy-related death fully paid',
      'Breast & cervical cancer rider available at low cost',
      'No medical tests required for coverage up to ₹75L-₹1Cr',
      'Tax benefits under 80C + maternity leaves do not affect coverage'
    ],
    benefits: [
      { title: 'Lower Premium', description: '₹1Cr coverage: Men pay ₹10K/year vs Women pay ₹8.5K/year. Save ₹1.5K annually, ₹45K over 30 years.' },
      { title: 'Dual Income Protection', description: 'Working women contribute 30-50% of household income. If you die, family loses this income. ₹50L-₹2Cr ensures stability.' },
      { title: 'Homemaker Value', description: 'Homemakers save ₹25-40K/month (cooking, childcare, elderly care cost). Insurance compensates family for hiring help.' },
      { title: 'Maternity Coverage', description: 'Pregnancy complications, delivery death covered. Critical rider ensures payout even for maternity-related deaths.' },
      { title: 'Financial Independence', description: 'Your own term insurance (not dependent on husband). Nominees can be parents, children, or spouse as you choose.' },
      { title: 'Breast Cancer Rider', description: 'Add breast/cervical cancer rider for ₹2-3K/year. Get lump sum ₹5-10L on diagnosis for treatment.' }
    ],
    coverage: { min: '₹25 Lakhs', max: '₹5 Crore', premium: '₹5,000 - ₹25,000/year' },
    whyNeed: [
      { title: 'Dual Income Family', description: 'You contribute 30-50% household income (₹4-8L/year). Family needs ₹1-2Cr if income stops.', amount: '₹1-2Cr' },
      { title: 'Homemaker Contribution', description: 'Replace household work costs: Cook ₹10K, Nanny ₹15K, Elderly care ₹10K = ₹35K/month = ₹1.05Cr for 25 years.', amount: '₹75L-₹1.5Cr' },
      { title: 'Childrens Education', description: 'Mother death should not compromise children education (₹20-50L needed). Insurance ensures funds available.', amount: '₹25-75L' }
    ],
    faqs: [
      { question: 'Do homemakers need term insurance?', answer: 'Yes! Homemakers contribute ₹25-40K/month value through cooking, childcare, house management, elderly care. If homemaker dies, family must hire: Cook (₹8-12K/month), Nanny for kids (₹12-18K/month), Elderly caretaker (₹10-15K/month), House help (₹5-8K/month). Total: ₹35-50K/month = ₹4-6L/year = ₹1-1.5Cr for 25 years. Insurance ensures family can afford these services. Plus: Emotional support loss, children upbringing, husband may need to reduce work to manage home. Insurance gives financial cushion to hire help and adjust.' }
    ]
  }
};

// Remaining INVESTMENT products (compact format)
export const investmentProducts: Record<string, InsuranceProduct> = {
  'endowment-plans': {
    id: 'endowment-plans',
    title: 'Endowment Plans',
    category: 'investment',
    subtitle: 'Guaranteed Returns + Life Cover with Bonus',
    description: 'Traditional insurance with 5-6% guaranteed returns, bonuses, and maturity benefit along with life protection.',
    icon: 'Shield',
    heroGradient: { from: 'blue-600', to: 'indigo-700' },
    stats: [
      { number: '5-6%', label: 'Guaranteed Returns' },
      { number: '₹10L-₹50L', label: 'Sum Assured' },
      { number: '100%', label: 'Tax-free Maturity' },
      { number: '10-20 Yrs', label: 'Policy Term' }
    ],
    keyPoints: [
      'Guaranteed maturity benefit = Sum Assured + Bonuses accumulated',
      'Death benefit: Sum Assured + Bonuses paid to nominees',
      'Reversionary bonus: ₹30-50 per ₹1000 sum assured declared annually',
      'Terminal bonus: 20-50% of sum assured at maturity (for long-term)',
      'Tax benefits: Premium u/s 80C + Maturity tax-free 10(10D)',
      'Capital protection: No market risk, guaranteed returns',
      'Loan facility: Available after 3 years of premium payment'
    ],
    benefits: [
      { title: 'Guaranteed Returns', description: 'Get fixed maturity benefit. Example: ₹10L sum assured, ₹60K/year × 15 years = ₹9L paid. Maturity: ₹10L + ₹4L bonus = ₹14L (5.5% return).' },
      { title: 'Life Protection', description: 'If you die during term, family gets sum assured + bonuses. Dual benefit of investment + insurance unlike pure savings.' },
      { title: 'Disciplined Saving', description: 'Forces you to save ₹50K-₹2L annually for 10-20 years. Unlike SIP where you may stop, this has penalties for stopping.' },
      { title: 'Tax Benefits', description: 'Premium deduction ₹1.5L under 80C saves ₹46K tax. Maturity 100% tax-free vs FD/bonds which are fully taxable.' },
      { title: 'No Market Risk', description: 'Returns guaranteed regardless of stock market crashes. Unlike ULIP/mutual funds where returns fluctuate.' },
      { title: 'Bonus Upside', description: 'If insurer performs well, you get higher bonuses. Some policies have given 7-8% effective returns over 20+ years.' }
    ],
    coverage: { min: '₹5 Lakhs', max: '₹50 Lakhs', premium: '₹15,000 - ₹2,00,000/year' },
    whyNeed: [
      { title: 'Risk-averse Investor', description: 'Do not want stock market volatility. Prefer guaranteed 5-6% returns over potentially higher but risky 12% equity returns.', amount: '5-6% assured' },
      { title: 'Tax-free Returns', description: '6% FD is taxable (30% bracket) = 4.2% post-tax. Endowment 5.5% tax-free = effectively 7.9% pre-tax equivalent.', amount: 'Tax saving 30%' },
      { title: 'Forced Savings', description: 'Cannot save consistently? Endowment forces ₹50K-₹2L annual savings with penalty for stopping. Builds ₹10-40L corpus.', amount: '₹10-40L maturity' }
    ],
    faqs: [
      { question: 'Endowment vs ULIP vs Mutual Fund - which is better?', answer: 'ENDOWMENT: Returns 5-6% guaranteed, no market risk, tax-free maturity, life cover. Ideal for risk-averse investors wanting certainty. ULIP: Returns 10-15% equity/6-8% debt, market-linked risk, tax-free maturity, life cover, lock-in 5 years. Ideal for moderate risk-takers. MUTUAL FUND: Returns 12-16% equity/6-8% debt, market risk, taxable (10% LTCG), no life cover, anytime withdrawal. Ideal for risk-takers wanting highest returns. VERDICT: Endowment for safety, ULIP for balanced, Mutual Fund for highest returns. Or split: 30% Endowment (safety) + 40% ULIP (balanced) + 30% Mutual Fund (growth).' }
    ]
  },

  'child-plans': {
    id: 'child-plans',
    title: 'Child Education & Marriage Plans',
    category: 'investment',
    subtitle: 'Secure Your Child Future with Milestone-based Payouts',
    description: 'Build corpus for child higher education and marriage with premium waiver if parent dies.',
    icon: 'Baby',
    heroGradient: { from: 'purple-500', to: 'pink-500' },
    stats: [
      { number: '₹20-75L', label: 'Education Corpus' },
      { number: 'Age 18/21', label: 'Milestone Payouts' },
      { number: 'Waived', label: 'Premium on Death' },
      { number: '8-12%', label: 'Returns p.a.' }
    ],
    keyPoints: [
      'Milestone payouts: Age 18 (college), 21 (post-grad), 25 (marriage)',
      'Premium waiver on parent death: Policy continues, child gets benefits',
      'Build ₹20-75L corpus for education (Engineering ₹15-25L, Medical ₹50-₹1Cr, MBA ₹20-30L)',
      'Marriage benefit: Final payout for daughter marriage expenses',
      'Tax benefits: Premium 80C + Maturity tax-free',
      'Partial withdrawals allowed for emergencies',
      'Life cover on parent ensures plan continues even without parent'
    ],
    benefits: [
      { title: 'Education Secured', description: 'Build ₹20-50L for higher education. Engineering ₹15-25L, Medical ₹50L-₹1Cr, MBA ₹20-30L, Study abroad ₹50-80L fully covered.' },
      { title: 'Premium Waiver', description: 'If parent dies, remaining premiums waived. Child still gets full maturity benefit. Example: 5 years paid, parent dies, no more premiums but child gets ₹30L at 18.' },
      { title: 'Milestone Payouts', description: 'Age 18: ₹10L (college admission), Age 21: ₹8L (post-grad), Age 25: ₹12L (marriage). Staged payouts match expenses.' },
      { title: 'Tax-free Corpus', description: '₹50L corpus tax-free vs ₹50L mutual fund attracts ₹5L tax. Save ₹5L on maturity.' },
      { title: 'Forced Saving', description: 'Start at child birth. ₹15K/month for 18 years @ 10% = ₹60L corpus for education.' },
      { title: 'No Loans Needed', description: 'Avoid education loans with 10-12% interest (₹15L loan = ₹22L repayment). Have corpus ready at age 18.' }
    ],
    coverage: { min: '₹10 Lakhs', max: '₹1 Crore', premium: '₹12,000 - ₹1,50,000/year' },
    whyNeed: [
      { title: 'Education Inflation', description: 'Engineering fees rising 8-10%/year. Today ₹15L = ₹45L in 15 years. Start saving ₹12K/month now.', amount: '₹35-75L needed' },
      { title: 'Parent Death Protection', description: 'If parent dies, child education should not stop. Premium waiver ensures ₹30-60L corpus still paid.', amount: 'Premiums waived' },
      { title: 'Marriage Expenses', description: 'Daughter marriage costs ₹20-50L (wedding, gifts, gold). Plan provides ₹15-40L at age 23-25.', amount: '₹15-40L payout' }
    ],
    faqs: [
      { question: 'When should I start child plan - at birth or later?', answer: 'START AT BIRTH for maximum benefit. Age 0-2 is ideal. Why? POWER OF COMPOUNDING: ₹10K/month from birth to age 18 @ 10% = ₹42L. Same starting age 10 = only ₹18L (less than half). LOWER PREMIUM: Longer tenure = lower monthly commitment. Age 0-18: ₹10K/month vs Age 10-18: ₹20K/month for same ₹40L corpus. PREMIUM WAIVER BENEFIT: Parent death covered for 18 years vs 8 years. More protection. DISCIPLINE: Easier to commit ₹10K/month when child is born vs finding ₹25K/month when child is 10. RECOMMENDATION: Ideally start within 1-2 years of child birth. If missed, still better to start at age 5-8 than waiting till 10-12. Even 8-10 years of investing builds ₹15-25L corpus for college.' }
    ]
  }
};

// Compact MOTOR insurance products
export const motorInsuranceProducts: Record<string, InsuranceProduct> = {
  'zero-dep-car': {
    id: 'zero-dep-car',
    title: 'Zero Depreciation Car Insurance',
    category: 'motor',
    subtitle: 'Get Full Claim Without Depreciation Deduction',
    description: 'No depreciation on parts during claim. Get 100% part cost covered - bumper, headlights, doors, hood replaced at full value.',
    icon: 'Shield',
    heroGradient: { from: 'blue-500', to: 'cyan-500' },
    stats: [
      { number: '0%', label: 'Depreciation' },
      { number: '100%', label: 'Part Value' },
      { number: '₹8-25K', label: 'Extra Premium' },
      { number: '2-5 Yrs', label: 'Ideal for New Cars' }
    ],
    keyPoints: [
      'No depreciation deduction on car parts during claim settlement',
      'Regular policy: Bumper ₹40K - 50% depreciation = ₹20K claim. Zero dep: Full ₹40K claim',
      'Covers: Bumpers, headlights, doors, hood, mirrors, windshield at 100% cost',
      'Ideal for new cars (0-5 years old) where parts are expensive',
      'Premium: 15-25% higher than comprehensive (₹8K-25K extra/year)',
      'Most claims involve bumpers, headlights - zero dep saves ₹15-30K per claim',
      'Must-have for luxury cars (Mercedes, BMW, Audi) where part costs are ₹50K-₹2L'
    ],
    benefits: [
      { title: 'Full Part Cost', description: 'Bumper ₹40K: Regular claim ₹20K (50% dep). Zero dep claim: ₹40K (no dep). Save ₹20K per accident.' },
      { title: 'New Car Protection', description: 'New cars have expensive parts. First 3-5 years, zero dep protects your investment. After 5 years, depreciation is huge anyway, not worth it.' },
      { title: 'Frequent Accidents', description: 'If you drive in traffic/bad roads and expect 1-2 accidents/year, zero dep saves ₹30-50K vs paying ₹15K extra premium.' },
      { title: 'Luxury Cars', description: 'BMW/Audi bumper costs ₹80K-₹1.5L. 50% dep = ₹40-75K loss. Zero dep covers full amount, essential for luxury cars.' },
      { title: 'Peace of Mind', description: 'Do not worry about depreciation calculations. Accident happens, get full part cost, replace with genuine parts.' },
      { title: 'Resale Value', description: 'Car with all genuine parts (not local/duplicate) has better resale value. Zero dep ensures genuine parts replacement.' }
    ],
    coverage: { min: 'Add-on', max: 'With Comprehensive', premium: '₹8,000 - ₹25,000/year extra' },
    whyNeed: [
      { title: 'New Car (0-3 Yrs)', description: 'Parts depreciation is minimal (10-20%). Zero dep ensures you get 100% vs 80-90%, crucial for new expensive cars.', amount: 'Save ₹20-40K/claim' },
      { title: 'High Accident Zone', description: 'Mumbai/Delhi traffic, narrow roads, frequent minor accidents? Expect 1-2 claims/year. Zero dep pays for itself.', amount: '₹30-60K saved annually' },
      { title: 'Luxury/Imported Car', description: 'Mercedes/BMW part = ₹1L+. 50% depreciation = ₹50K loss per claim. Zero dep is mandatory, not optional.', amount: '₹50K-₹2L saved' }
    ],
    faqs: [
      { question: 'Is zero depreciation worth it for old cars (5+ years)?', answer: 'NO, not worth it for cars older than 5 years. Reason: DEPRECIATION RATES: Year 1: 5% dep, Year 2: 10%, Year 3: 15%, Year 4: 25%, Year 5: 40%, Year 6+: 50%. After 5 years, parts have 40-50% depreciation. Zero dep removes this, but premium is still calculated on current car value. COST-BENEFIT: 5+ year old car: Zero dep premium ₹12-15K extra. But you save 40-50% depreciation (₹20-30K on ₹50K claim). Only break-even if you have 2+ accidents/year. RECOMMENDATION: Zero dep for cars 0-3 years old (depreciation 5-20%). Maybe for 4-5 years old if you are accident-prone. Skip for 6+ years old - depreciation too high, premium not justified. After 5 years, focus on engine protection, roadside assistance, consumables cover instead of zero dep.' }
    ]
  },

  'third-party-car': {
    id: 'third-party-car',
    title: 'Third Party Car Insurance',
    category: 'motor',
    subtitle: 'Mandatory Legal Cover for Others\\ Injury/Damage',
    description: 'Covers injury/death of others and damage to their vehicle. Mandatory by law, cheapest car insurance.',
    icon: 'Users',
    heroGradient: { from: 'orange-500', to: 'red-500' },
    stats: [
      { number: 'Mandatory', label: 'By Law' },
      { number: 'Unlimited', label: 'Injury Cover' },
      { number: '₹7.5K', label: 'Property Damage' },
      { number: '₹2-4K', label: 'Annual Premium' }
    ],
    keyPoints: [
      'Mandatory by Motor Vehicle Act - driving without it is illegal (₹2000 fine + jail)',
      'Covers: Death/injury of others (unlimited), Damage to others\\ vehicle/property (up to ₹7.5L)',
      'Does NOT cover: Your own car damage, theft, fire, natural calamity',
      'Cheapest car insurance: ₹2-4K/year for small cars, ₹4-6K for big cars',
      'Fixed premium by IRDAI - all insurers charge same amount',
      'Valid for 1 or 3 years (long-term reduces hassle)',
      'Claim: If you injure someone in accident, insurance pays their medical/compensation'
    ],
    benefits: [
      { title: 'Legal Compliance', description: 'Avoid ₹2000 fine and 3 months jail for driving without insurance. Traffic police can challan you, impound vehicle if no TP insurance.' },
      { title: 'Unlimited Injury Cover', description: 'If you kill someone in accident, court may award ₹25-50L compensation to victim family. TP insurance pays unlimited (no upper limit).' },
      { title: 'Property Damage Cover', description: 'You hit ₹15L BMW/Audi. Bumper + door damage = ₹3L. TP insurance pays up to ₹7.5L (you do not pay from pocket).' },
      { title: 'Cheapest Option', description: 'Only ₹2-4K/year premium (vs ₹12-25K for comprehensive). If car is old/low value, TP is budget-friendly option.' },
      { title: 'Fixed Premium', description: 'IRDAI fixes rates. Maruti Alto, BMW, Toyota - all pay same TP premium. Cannot be overcharged by insurers.' },
      { title: 'No Claim Inspection', description: 'TP claims do not need your car inspection. Third party gets compensated, you just file documents.' }
    ],
    coverage: { min: 'Unlimited Injury', max: '₹7.5L Property', premium: '₹2,000 - ₹6,000/year' },
    whyNeed: [
      { title: 'Legal Requirement', description: 'Cannot drive legally without TP insurance. Traffic police fine ₹2000, 3 months jail, vehicle impounding if caught.', amount: 'Avoid ₹2K fine + jail' },
      { title: 'Huge Liability', description: 'You injure someone in accident. Medical ₹5L + compensation ₹20L = ₹25L liability. Without TP, you pay from savings/sell assets.', amount: 'Unlimited protection' },
      { title: 'Budget Insurance', description: 'Old car worth ₹1.5L. Comprehensive costs ₹18K (not worth it). TP only ₹3K gives legal compliance + liability protection.', amount: 'Just ₹3K/year' }
    ],
    faqs: [
      { question: 'Third Party vs Comprehensive - which should I buy?', answer: 'Depends on car age and value. THIRD PARTY (TP): Covers ONLY others\\ injury/death + their vehicle damage. Does NOT cover your own car. Premium ₹2-4K/year. COMPREHENSIVE: Covers your car damage/theft + third party. Premium ₹12-25K/year. WHEN TO BUY TP ONLY: Car older than 10 years, market value <₹1 lakh. Comprehensive premium (₹15K) is more than car value (₹80K). Not economical. Budget constraints - can only afford ₹3K, not ₹15K. Will pay for own car repairs from pocket if needed. WHEN TO BUY COMPREHENSIVE: New car or car <7 years old. Car value ₹4L+. Worth protecting with comprehensive. Risk of theft, fire, floods in your area. Want full protection (own car + third party). HYBRID APPROACH: Car 7-10 years old: Buy TP (₹3K) + Own Damage cover (₹5-8K) separately. Total ₹8-11K vs ₹15K comprehensive. Drop own damage if car value drops too low. VERDICT: New car <5 yrs: Comprehensive. Old car >10 yrs or <₹1.5L value: TP only.'  }
    ]
  }
};

// Compact HEALTH insurance products
export const healthInsuranceProducts: Record<string, InsuranceProduct> = {
  'critical-illness': {
    id: 'critical-illness',
    title: 'Critical Illness Insurance',
    category: 'health',
    subtitle: 'Lump Sum Payout on Diagnosis of 30+ Critical Diseases',
    description: 'Get ₹5L-₹1Cr lump sum on diagnosis of cancer, heart attack, stroke, kidney failure. Use funds freely - treatment, income loss, EMIs.',
    icon: 'Heart',
    heroGradient: { from: 'red-600', to: 'orange-600' },
    stats: [
      { number: '30-36', label: 'Illnesses Covered' },
      { number: '₹5L-₹1Cr', label: 'Lump Sum' },
      { number: 'Use Freely', label: 'No Bills Needed' },
      { number: '₹5-25K', label: 'Annual Premium' }
    ],
    keyPoints: [
      'Lump sum payout on DIAGNOSIS (not hospitalization like regular health insurance)',
      'Covers 30-36 critical illnesses: Cancer, heart attack, stroke, kidney failure, paralysis, organ transplant, coma, major burns',
      'Use money freely: Treatment abroad, income loss recovery, loan EMIs, family expenses',
      'No bills needed: Get ₹10-50L lump sum, spend how you want',
      'Separate from regular health insurance: Both can claim together',
      'Tax benefits: Premium u/s 80D, Payout tax-free',
      'Survival period: Usually 30 days from diagnosis to claim (ensures genuine illness)'
    ],
    benefits: [
      { title: 'Lump Sum Benefit', description: 'Cancer diagnosed? Get ₹25L lump sum. Regular health insurance covers only hospitalization. Critical illness gives cash for ANY use.' },
      { title: 'Income Replacement', description: 'Cancer treatment takes 6-12 months. Cannot work, lose ₹5-8L income. Lump sum replaces lost income during treatment/recovery.' },
      { title: 'Free Usage', description: 'Unlike health insurance needing bills, use ₹25L for: Best treatment abroad, Experimental therapy, Family expenses, Loan EMIs, Recovery care.' },
      { title: 'Multiple Payouts', description: 'Health insurance + Critical illness both pay. Heart attack: Health insurance covers ₹5L hospitalization, Critical illness gives ₹20L lump sum. Total ₹25L.' },
      { title: 'Covers 30+ Diseases', description: 'Cancer all stages, Heart attack, Stroke, Kidney failure, Liver failure, Lung disease, Paralysis, Blindness, Major organ transplant, Parkinsons, Alzheimers.' },
      { title: 'Early Stage Benefit', description: 'Some plans pay 25% for early cancer detection. Get ₹5L (on ₹20L sum) for stage 1 cancer, ₹20L if progresses to stage 3-4.' }
    ],
    coverage: { min: '₹5 Lakhs', max: '₹1 Crore', premium: '₹5,000 - ₹25,000/year' },
    whyNeed: [
      { title: 'Cancer Treatment Cost', description: 'Cancer treatment ₹15-50L (chemo, radiation, surgery, targeted therapy). Health insurance covers hospitalization, critical illness gives extra ₹25L lump sum.', amount: '₹15-50L needed' },
      { title: 'Income Loss', description: 'Cancer/heart attack recovery = 6-12 months no work. Lose ₹5-10L salary. Lump sum ₹20L replaces income, pays bills.', amount: '₹5-10L lost income' },
      { title: 'Best Treatment', description: 'Want treatment at Apollo/Tata Memorial/USA? Need ₹30-80L. Regular insurance limited. Lump sum ensures best care anywhere.', amount: '₹30-80L for premium care' }
    ],
    faqs: [
      { question: 'Critical Illness vs Regular Health Insurance - do I need both?', answer: 'YES, you need BOTH. They complement, not replace each other. REGULAR HEALTH INSURANCE: Covers: Hospitalization bills, surgery, ICU, medicines (all itemized bills). Payout: Reimbursement after hospitalization (cannot use before treatment). Limit: Sum insured (₹5-10L typically). Use: ONLY medical expenses. Example: Heart attack hospitalization ₹3L covered. CRITICAL ILLNESS INSURANCE: Covers: Diagnosis itself (heart attack, cancer, stroke). Payout: Lump sum IMMEDIATELY on diagnosis confirmation. Limit: Sum insured (₹10-50L). Use: ANYTHING - treatment, income loss, loans, family expenses. Example: Heart attack diagnosed, get ₹20L lump sum. COMBINED BENEFIT: Heart attack hospitalization: Regular health pays ₹4L hospital bill, Critical illness gives ₹25L lump sum. Total benefit: ₹29L. Use ₹25L for: Recovery period income loss (₹4L), Best cardiac care (₹8L), Loan EMIs during recovery (₹5L), Family expenses (₹3L), Future medical needs (₹5L). RECOMMENDATION: Everyone should have: ₹5-10L regular health insurance (₹8-15K/year), ₹10-25L critical illness insurance (₹6-12K/year). Total ₹14-27K/year for complete protection.' }
    ]
  },

  'maternity-insurance': {
    id: 'maternity-insurance',
    title: 'Maternity Health Insurance',
    category: 'health',
    subtitle: 'Complete Pregnancy, Delivery & Newborn Care Coverage',
    description: 'Covers normal & C-section delivery, pre-natal, post-natal, newborn vaccination, complications. ₹50K-₹5L coverage.',
    icon: 'Baby',
    heroGradient: { from: 'pink-500', to: 'rose-500' },
    stats: [
      { number: '₹50K-₹5L', label: 'Delivery Cover' },
      { number: '9-24 Months', label: 'Waiting Period' },
      { number: 'Newborn', label: 'Covered Day 1' },
      { number: '₹8-18K', label: 'Annual Premium' }
    ],
    keyPoints: [
      'Normal delivery: ₹40K-₹80K covered, C-section: ₹80K-₹2L covered',
      'Pre-natal expenses: Doctor consultations, ultrasounds, blood tests (9 months)',
      'Post-natal: Mother recovery, newborn care for 90 days',
      'Newborn covered from day 1: Vaccinations, pediatrician, jaundice, NICU if needed',
      'Complications covered: Premature delivery, C-section, post-delivery issues',
      'Waiting period: 9-36 months (plan pregnancy accordingly)',
      'Some plans cover IVF/infertility treatment (₹2-5L) with higher premium'
    ],
    benefits: [
      { title: 'Delivery Expenses', description: 'Normal delivery ₹50-80K, C-section ₹1-2L fully covered. Choose best hospital, no cost worry.' },
      { title: 'Pre-natal Care', description: '9-month expenses: Monthly doctor ₹1K, ultrasounds ₹5K, tests ₹10K, medicines ₹5K = ₹30-40K covered.' },
      { title: 'Newborn Coverage', description: 'Baby covered from birth: NICU ₹50K-₹2L, jaundice treatment ₹10-30K, vaccinations ₹10-15K, pediatrician visits ₹5-10K.' },
      { title: 'Complications Protected', description: 'Premature delivery (₹2-5L), C-section emergencies (₹1.5-3L), post-delivery ICU (₹1-2L) all covered. No out-of-pocket.' },
      { title: 'Multiple Children', description: 'Plan covers multiple deliveries during policy period. Have 2 kids in 5 years, both deliveries covered (within sum insured limits).' },
      { title: 'Tax Benefits', description: 'Maternity rider premium gets Section 80D deduction (₹25K limit). Save ₹7.5K tax on ₹8K premium (30% bracket).' }
    ],
    coverage: { min: '₹50,000', max: '₹5 Lakhs', premium: '₹8,000 - ₹18,000/year' },
    whyNeed: [
      { title: 'Delivery Costs Rising', description: 'Normal delivery ₹60-80K, C-section ₹1.2-2L in metro cities. Without insurance, pay from savings or borrow.', amount: '₹60K-₹2L per delivery' },
      { title: 'Complications Expensive', description: 'Premature baby NICU = ₹3-5L/month. Twin pregnancy, C-section complications = ₹2-4L. Insurance protects from huge bills.', amount: '₹2-5L complications' },
      { title: 'Multiple Deliveries', description: 'Plan 2-3 children? Each delivery ₹1-1.5L = ₹3-4.5L total. Maternity insurance covers all, pay just ₹8-15K/year premium.', amount: '₹3-5L for 2-3 kids' }
    ],
    faqs: [
      { question: 'What is waiting period in maternity insurance and how to plan?', answer: 'Waiting period is time from policy purchase to when maternity coverage starts. STANDARD WAITING PERIODS: Most insurers: 9-12 months waiting for normal delivery, Some insurers: 24 months for first child, 12 months for second child, Some insurers: 36 months (avoid these). C-section has SAME waiting period as normal delivery (no separate waiting). PLANNING STRATEGY: PLANNING PREGNANCY: Buy maternity insurance 12-24 months BEFORE trying to conceive. Waiting period completes, then plan pregnancy. Already pregnant? Too late for most plans. Few insurers (Star Health) allow buying till 3rd month but premium is 2-3x higher. EXISTING HEALTH INSURANCE: Check if your current health insurance covers maternity (many regular policies do after 2-4 years). If yes, no need separate maternity plan. EMPLOYER INSURANCE: Check if employer group health insurance covers maternity for spouse (most do). May not need separate plan. COST SAVING TIP: Buy maternity rider on base health insurance (₹3-5K/year extra vs ₹8-12K standalone maternity plan). BEST APPROACH: Buy health insurance with maternity rider 2-3 years before marriage. By the time you plan first child at 28-30 years, waiting period (24-36 months) already completed. All deliveries covered.' }
    ]
  }
};

// Compact TRAVEL insurance products
export const travelInsuranceProducts: Record<string, InsuranceProduct> = {
  'international-travel': {
    id: 'international-travel',
    title: 'International Travel Insurance',
    category: 'travel',
    subtitle: 'Medical Emergency & Trip Protection for Abroad Travel',
    description: 'Covers medical emergencies, trip cancellation, lost baggage, passport loss when traveling internationally.',
    icon: 'Plane',
    heroGradient: { from: 'blue-500', to: 'teal-500' },
    stats: [
      { number: '$50K-$500K', label: 'Medical Cover' },
      { number: 'Worldwide', label: 'Coverage' },
      { number: '₹300-₹3K', label: 'Per Day Cost' },
      { number: '24/7', label: 'Assistance' }
    ],
    keyPoints: [
      'Medical emergency cover: $50,000 - $500,000 (₹40L-₹4Cr) for hospitalization abroad',
      'Trip cancellation: Get flight/hotel money back if trip cancelled due to family emergency/illness',
      'Lost baggage: ₹20K-₹50K if airline loses your luggage',
      'Passport loss: Emergency passport assistance + fees covered',
      'Flight delay: Compensation if flight delayed >6-12 hours',
      'Personal liability: Covers if you accidentally injure someone/damage property abroad',
      'Mandatory for Schengen visa (26 European countries) - need €30,000 ($50K) minimum cover'
    ],
    benefits: [
      { title: 'Medical Emergency', description: 'Hospitalized in USA? Bill can be $50,000-$200,000 (₹40L-₹1.6Cr). Insurance covers full amount, else you pay or sell assets.' },
      { title: 'Trip Cancellation', description: 'Booked Europe trip ₹3L. Father hospitalized, cannot go. Insurance refunds ₹2-2.5L (non-refundable hotel/flights).' },
      { title: 'Lost Baggage', description: 'Airline lost bag with clothes/laptop/camera worth ₹80K. Insurance pays ₹40-50K (per baggage limits).' },
      { title: 'Flight Delay', description: 'Flight delayed 10 hours. Hotel ₹8K + meals ₹2K = ₹10K extra cost. Insurance reimburses ₹8-12K.' },
      { title: 'Passport Loss', description: 'Passport stolen in Thailand. Need emergency travel document. Insurance covers ₹15-25K embassy fees + assistance.' },
      { title: 'COVID Coverage', description: 'Many insurers now cover COVID treatment abroad (hospitalization, quarantine hotel, medical evacuation). Check before buying.' }
    ],
    coverage: { min: '$50,000', max: '$500,000', premium: '₹300 - ₹3,000 per day' },
    whyNeed: [
      { title: 'Medical Bills Abroad', description: 'USA hospital ₹5L/day, ICU ₹10L/day. 3-day hospitalization = ₹15-30L. Indian health insurance does not cover foreign hospitals.', amount: '₹5-50L medical cost' },
      { title: 'Trip Cancellation', description: 'Booked ₹4L Europe trip. Family emergency, cannot go. Lose ₹2-3L in non-refundable bookings without insurance.', amount: '₹2-4L lost' },
      { title: 'Schengen Visa Mandate', description: 'Traveling to Europe (26 Schengen countries)? €30,000 travel insurance MANDATORY to get visa. No insurance = visa rejected.', amount: 'Visa requirement' }
    ],
    faqs: [
      { question: 'How much international travel insurance cover do I need?', answer: 'Depends on destination and trip duration. USA/CANADA/EUROPE (High Medical Cost): Minimum $100,000 (₹80L), Recommended $200,000-500,000 (₹1.6-4Cr). Why? USA hospital costs ₹5L-15L per day. Even minor surgery = $50,000 (₹40L). ASIA/MIDDLE EAST (Moderate Cost): $50,000-100,000 (₹40-80L) sufficient. Thailand/Dubai hospitals cheaper than USA but still ₹1-3L per day. SCHENGEN VISA (Europe): MANDATORY minimum €30,000 ($35,000/₹28L) for visa approval. Can buy higher, but €30K minimum requirement. SENIOR CITIZENS (60+): Buy maximum cover $500,000 (₹4Cr). Higher health risk, may need intensive care abroad. COST DIFFERENCE: $50K cover: ₹500-800/day, $100K cover: ₹800-1,200/day, $500K cover: ₹1,500-3,000/day. RECOMMENDATION: USA/Canada/Europe: $200-500K (₹1,500-2,500/day), Asia/Middle East: $50-100K (₹600-1,000/day), Senior citizens: Always $500K regardless of destination (₹2,500-4,000/day). Do not save ₹1,000/day on insurance and risk ₹40L-₹1Cr medical bill abroad!' }
    ]
  },

  'schengen-visa': {
    id: 'schengen-visa',
    title: 'Schengen Visa Travel Insurance',
    category: 'travel',
    subtitle: 'Mandatory €30,000 Medical Cover for Europe Visa',
    description: 'Schengen visa-compliant travel insurance with €30,000 minimum medical cover for 26 European countries.',
    icon: 'FileCheck',
    heroGradient: { from: 'purple-500', to: 'indigo-600' },
    stats: [
      { number: '€30,000', label: 'Minimum Cover' },
      { number: '26 Countries', label: 'Schengen Zone' },
      { number: '100%', label: 'Visa Acceptance' },
      { number: '₹600-1,500', label: 'Cost/Day' }
    ],
    keyPoints: [
      'Mandatory for Schengen visa application - visa rejected without it',
      'Covers 26 European countries: France, Germany, Italy, Spain, Switzerland, Netherlands, etc.',
      'Minimum €30,000 (₹27 Lakhs) medical emergency cover required',
      'Must cover entire trip duration + 15 days buffer',
      'Medical evacuation & repatriation must be included',
      'Zero deductible (no co-payment) required for visa',
      'Insurance certificate must be submitted with visa application'
    ],
    benefits: [
      { title: 'Visa Approval', description: 'Schengen visa application needs travel insurance certificate. Without it, visa 100% rejected. With proper insurance, one less rejection reason.' },
      { title: 'Medical Coverage', description: '€30,000 = ₹27L covers hospitalization in Europe. Emergency surgery ₹10-15L, ICU ₹5L/day, medicines ₹1-2L all covered.' },
      { title: 'Emergency Evacuation', description: 'If seriously injured in remote Swiss Alps, helicopter evacuation ₹5-10L + flight back to India ₹3-5L covered.' },
      { title: 'Trip Coverage', description: 'Beyond medical: Lost baggage ₹30K, passport loss assistance, trip cancellation, flight delays also covered in good plans.' },
      { title: 'Multiple Country', description: 'Single policy covers all 26 Schengen countries. Travel France, Italy, Switzerland, Germany - one insurance covers all.' },
      { title: 'Extended Coverage', description: 'Buy insurance for trip duration + 15 days buffer. If you extend stay or flight delayed, still covered (embassy requirement).' }
    ],
    coverage: { min: '€30,000', max: '€100,000', premium: '₹600 - ₹1,500 per day' },
    whyNeed: [
      { title: 'Visa Requirement', description: 'Cannot get Schengen visa without insurance certificate. It is MANDATORY, not optional. Visa fee ₹7,000 wasted if insurance missing.', amount: 'Mandatory for visa' },
      { title: 'European Medical Costs', description: 'France/Germany hospital ₹3-8L per day. Simple fracture treatment ₹5L, appendix surgery ₹12L. €30K insurance prevents bankruptcy.', amount: '₹5-20L medical bills' },
      { title: '26 Country Coverage', description: 'Buy once, travel freely in 26 countries. Do not need separate insurance for each country (France, Italy, Germany, etc.).', amount: '1 policy = 26 countries' }
    ],
    faqs: [
      { question: 'Which insurance is accepted for Schengen visa?', answer: 'Schengen visa insurance must meet specific requirements. Do not buy any random travel insurance. MANDATORY REQUIREMENTS: (1) Coverage: Minimum €30,000 (₹27L) medical emergency. (2) Geographic scope: Must cover ALL 26 Schengen countries + countries in transit. (3) Duration: Must cover entire stay + 15 days buffer. Trip 10 days = buy 12-13 days insurance minimum. (4) Repatriation: Must include medical evacuation and repatriation of remains. (5) Zero deductible: No co-payment/deductible allowed. Insurance pays 100% from first rupee. (6) Valid throughout: Must be valid for all Schengen states, not just country of entry. ACCEPTED INSURERS (India): ICICI Lombard, HDFC Ergo, Bajaj Allianz, Tata AIG, Reliance General, Digit Insurance, Care Health Insurance. Buy from these established insurers only. VISA REJECTION: If insurance does not meet ALL requirements above, visa rejected (has happened to many). EMBASSY VERIFICATION: Some embassies call insurer to verify policy authenticity. Fake/improper insurance = instant visa rejection + possible ban. COST: ₹600-1,500 per day for €30,000-50,000 cover. 15-day Europe trip = ₹9,000-22,500 total. RECOMMENDATION: Buy from ICICI Lombard/HDFC Ergo for Schengen visa. They are most recognized by European embassies. Get confirmation email + print certificate for visa application.' }
    ]
  }
};

// Combine all products for export
export const allAdditionalProducts = {
  ...lifeInsuranceProducts,
  ...investmentProducts,
  ...motorInsuranceProducts,
  ...healthInsuranceProducts,
  ...travelInsuranceProducts
};