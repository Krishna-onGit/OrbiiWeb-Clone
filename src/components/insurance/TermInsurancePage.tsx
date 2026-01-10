import { ArrowLeft, Shield, Umbrella, Users, Heart, TrendingUp, Award, IndianRupee, Calculator, FileText, CheckCircle, AlertCircle, Clock, DollarSign, UserCheck, Baby, Home as HomeIcon, Briefcase, Plus, ChevronRight, Phone, Building2, Percent, Target, Zap, FileCheck, HelpCircle, BarChart3, PiggyBank, Activity, Calendar, TrendingDown, Info, CreditCard, Download, Mail, MapPin, Landmark, Plane, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

interface TermInsurancePageProps {
  onBack: () => void;
  onSelectProduct?: (productId: string) => void;
}

export default function TermInsurancePage({ onBack, onSelectProduct }: TermInsurancePageProps) {
  const [calculatorInputs, setCalculatorInputs] = useState({
    age: '',
    annualIncome: '',
    coverAmount: '10000000',
    term: '30',
    smokingStatus: 'no',
    gender: 'male'
  });

  // Comprehensive Term Insurance Types
  const termTypes = [
    {
      id: 'what-is-term-insurance',
      icon: Shield,
      title: 'Pure Term Insurance',
      description: 'Highest coverage at lowest premium with pure life protection. No maturity benefit, only death benefit paid to nominees.',
      features: ['Highest coverage', 'Lowest premium', 'Tax benefits u/s 80C & 10(10D)', 'Simple & transparent', 'Up to 99 years coverage'],
      idealFor: 'Everyone seeking maximum protection at minimum cost, sole breadwinners, young professionals',
      coverage: '₹50L - ₹10Cr+',
      premium: '₹6,000 - ₹30,000/year',
      claimRatio: '98.5%'
    },
    {
      id: 'return-of-premium',
      icon: TrendingUp,
      title: 'Return of Premium (TROP)',
      description: 'Get all premiums back if you survive the policy term. Protection with guaranteed savings benefit and maturity payout.',
      features: ['100% premium refund', 'Life cover during term', 'Savings + protection', 'Tax-free returns', 'Good for forced savings'],
      idealFor: 'Those wanting protection with guaranteed returns, conservative investors, disciplined savers',
      coverage: '₹25L - ₹2Cr',
      premium: '₹18,000 - ₹60,000/year',
      claimRatio: '97.8%'
    },
    {
      id: 'term-insurance-riders',
      icon: IndianRupee,
      title: 'Term with Cash Benefits',
      description: 'Regular income payouts along with life cover. Periodic cash bonuses during policy term plus death benefit.',
      features: ['Regular income', 'Life protection', 'Periodic bonus payouts', 'Tax benefits', 'Survival benefits'],
      idealFor: 'Those needing regular income along with protection, supplementary income seekers',
      coverage: '₹50L - ₹5Cr',
      premium: '₹15,000 - ₹45,000/year',
      claimRatio: '96.9%'
    },
    {
      id: 'critical-illness-term',
      icon: Heart,
      title: 'Term with Critical Illness',
      description: 'Life cover plus lump sum payout on diagnosis of 36+ critical illnesses like cancer, heart attack, stroke, kidney failure.',
      features: ['Dual protection', 'Critical illness cover', 'Lump sum benefit', 'Income replacement', '36+ illnesses covered'],
      idealFor: 'Those wanting comprehensive health & life protection, family history of critical illness',
      coverage: '₹50L - ₹3Cr',
      premium: '₹12,000 - ₹40,000/year',
      claimRatio: '95.5%'
    },
    {
      id: 'joint-life-term',
      icon: Users,
      title: 'Joint Life Term Insurance',
      description: 'Single policy covering two lives (usually spouses). Claim paid on first death with options for second life coverage.',
      features: ['Covers two lives', '30-40% lower premium', 'Spouse protection', 'Tax benefits for both', 'Optional second death benefit'],
      idealFor: 'Married couples, business partners, dual income families',
      coverage: '₹50L - ₹5Cr',
      premium: '₹10,000 - ₹35,000/year',
      claimRatio: '98.1%'
    },
    {
      id: 'level-term-insurance',
      icon: Umbrella,
      title: 'Level Term Insurance',
      description: 'Fixed sum assured throughout the policy term. Most popular and straightforward term plan with consistent coverage.',
      features: ['Fixed coverage', 'Fixed premium', 'Simple structure', 'Maximum benefit', 'No complexity'],
      idealFor: 'Standard protection needs, all age groups, stable financial responsibilities',
      coverage: '₹50L - ₹10Cr',
      premium: '₹7,000 - ₹32,000/year',
      claimRatio: '98.7%'
    },
    {
      id: 'increasing-cover-term',
      icon: TrendingUp,
      title: 'Increasing Cover Term',
      description: 'Sum assured increases annually (typically 5-10%) to match inflation and growing financial responsibilities.',
      features: ['Inflation protection', 'Growing coverage', 'Future-ready', 'Lower initial premium', 'Matches income growth'],
      idealFor: 'Young professionals with growing income, inflation-conscious buyers',
      coverage: '₹25L - ₹5Cr',
      premium: '₹8,000 - ₹28,000/year',
      claimRatio: '97.3%'
    },
    {
      id: 'accidental-death-term',
      icon: Award,
      title: 'Term with Accidental Death Benefit',
      description: 'Enhanced payout (2x or 3x) if death occurs due to accident. Triple protection for accidental death scenarios.',
      features: ['2x-3x benefit on accident', 'Comprehensive accident coverage', 'Permanent & temporary disability rider', 'Enhanced protection'],
      idealFor: 'High-risk professions, frequent travelers, those in accident-prone areas',
      coverage: '₹1Cr - ₹5Cr',
      premium: '₹9,000 - ₹35,000/year',
      claimRatio: '97.9%'
    }
  ];

  // Network Statistics
  const networkStats = [
    { number: '98.5%', label: 'Claim Settlement Ratio', icon: CheckCircle },
    { number: '₹1 Cr', label: 'Average Coverage', icon: Shield },
    { number: '15L+', label: 'Policies Sold', icon: FileText },
    { number: '24/7', label: 'Support Available', icon: Phone }
  ];

  // Comprehensive Benefits
  const comprehensiveBenefits = [
    {
      category: 'Financial Security Benefits',
      icon: Shield,
      benefits: [
        'High coverage up to ₹10 crore at affordable premiums starting ₹500/month',
        'Income replacement for family - cover 15-20x annual income recommended',
        'Loan protection - clear home loans, education loans, personal loans',
        'Debt-free family - ensure family not burdened with EMIs after breadwinner death',
        'Children education secured - college fees, professional courses covered',
        'Spouse retirement protection - spouse lifestyle maintained without compromise'
      ]
    },
    {
      category: 'Tax Benefits',
      icon: Percent,
      benefits: [
        'Premium paid deduction up to ₹1.5L under Section 80C of Income Tax Act',
        'Death benefit completely tax-free under Section 10(10D) for nominees',
        'Maturity benefits tax-free for TROP and savings plans under 10(10D)',
        'Riders premium also eligible for 80C deduction up to overall ₹1.5L limit',
        'Save ₹46,800/year tax at 30% bracket on ₹1.5L premium (₹4.68L in 10 years)',
        'Additional 80D deduction if critical illness rider taken separately'
      ]
    },
    {
      category: 'Death Benefit Options',
      icon: IndianRupee,
      benefits: [
        'Lump sum payout - entire sum assured paid at once to nominees',
        'Monthly income option - regular income to family for 10-20 years',
        'Lump sum + income - partial lump sum + monthly income combination',
        'Increasing income - monthly income increases 10% annually to beat inflation',
        'Joint life option - second life gets coverage after first death',
        'Flexible payout - nominees choose lump sum or income based on needs'
      ]
    },
    {
      category: 'Additional Riders & Coverage',
      icon: Plus,
      benefits: [
        'Critical illness rider - ₹5L-50L on diagnosis of 36+ critical diseases',
        'Accidental death benefit - 2x or 3x sum assured if death by accident',
        'Accidental disability - lump sum + premium waiver on permanent disability',
        'Waiver of premium - future premiums waived on critical illness/disability',
        'Terminal illness benefit - payout on diagnosis of terminal illness (6-12 months life)',
        'Income benefit rider - monthly income to family along with lump sum'
      ]
    },
    {
      category: 'Policy Features',
      icon: FileCheck,
      benefits: [
        'Online instant policy - buy in 10 minutes, policy issued within 24 hours',
        'No medical checkup - up to ₹50L-1Cr coverage without medical tests',
        'Lifetime renewability - renew up to age 99 years',
        'Conversion option - convert term plan to endowment/ULIP in future',
        'Premium payment flexibility - annual, half-yearly, quarterly, monthly modes',
        'Grace period - 30 days grace for premium payment without policy lapse'
      ]
    }
  ];

  // Detailed Riders
  const detailedRiders = [
    {
      name: 'Critical Illness Rider',
      price: '₹800 - ₹3,000/year',
      icon: Heart,
      description: 'Lump sum payout of ₹5L-50L on diagnosis of 36+ critical illnesses including cancer, heart attack, stroke, kidney failure.',
      coverage: '₹5L - ₹50L',
      benefits: ['36+ illnesses covered', 'Immediate payout on diagnosis', 'No treatment bills needed', 'Continues life cover']
    },
    {
      name: 'Accidental Death Benefit',
      price: '₹300 - ₹1,500/year',
      icon: AlertCircle,
      description: 'Additional 100-200% of sum assured paid if death occurs due to accident. Example: ₹1Cr base + ₹2Cr accident = ₹3Cr total.',
      coverage: '2x-3x Base Cover',
      benefits: ['2x-3x sum assured', 'Road/rail/air accidents', 'Accidental drowning', 'Industrial accidents']
    },
    {
      name: 'Accidental Disability',
      price: '₹500 - ₹2,000/year',
      icon: UserCheck,
      description: 'Lump sum payout + future premium waiver on permanent total/partial disability due to accident.',
      coverage: 'Up to 100% of SA',
      benefits: ['Permanent disability cover', 'Temporary disability benefit', 'Premium waiver', 'Monthly income option']
    },
    {
      name: 'Waiver of Premium',
      price: '₹400 - ₹1,800/year',
      icon: FileCheck,
      description: 'All future premiums waived off if diagnosed with critical illness or permanent disability. Policy continues without payment.',
      coverage: 'Future Premiums',
      benefits: ['Critical illness waiver', 'Disability waiver', 'Policy continues', 'No premium payment']
    },
    {
      name: 'Income Benefit Rider',
      price: '₹1,200 - ₹4,000/year',
      icon: IndianRupee,
      description: 'Monthly income of 0.5-1% of sum assured paid to family along with lump sum death benefit. Regular income support.',
      coverage: '0.5-1% of SA monthly',
      benefits: ['Regular monthly income', 'Lump sum + income', 'Income for 10-20 years', 'Inflation-indexed option']
    },
    {
      name: 'Terminal Illness Benefit',
      price: '₹200 - ₹800/year',
      icon: Activity,
      description: 'Partial/full sum assured paid on diagnosis of terminal illness (expected life 6-12 months). Use for treatment/family.',
      coverage: 'Up to 100% of SA',
      benefits: ['Terminal diagnosis payout', 'Life expectancy <12 months', 'Use for treatment', 'Dignified end-of-life']
    }
  ];

  // Premium Factors
  const premiumFactors = [
    {
      factor: 'Age',
      impact: 'High',
      description: 'Younger buyers get 40-60% lower premiums. Age 25: ₹500/month, Age 45: ₹1,500/month for ₹1Cr cover.',
      recommendation: 'Buy early - each year delay increases premium 5-10%'
    },
    {
      factor: 'Smoking/Tobacco',
      impact: 'Very High',
      description: 'Smokers pay 30-50% higher premiums. Non-smoker ₹600/month vs Smoker ₹900/month for same coverage.',
      recommendation: 'Quit smoking - saves ₹3,600-10,000/year on premiums'
    },
    {
      factor: 'Sum Assured',
      impact: 'Medium',
      description: 'Higher coverage increases premium but cost per lakh decreases. ₹50L costs ₹500, ₹1Cr costs ₹700 (not ₹1,000).',
      recommendation: 'Opt for higher coverage - better value for money'
    },
    {
      factor: 'Policy Term',
      impact: 'Medium',
      description: 'Longer terms have higher total premium but better coverage till older age. 20 years vs 30 years - 15% difference.',
      recommendation: 'Choose till age 60-65 years for complete protection'
    },
    {
      factor: 'Gender',
      impact: 'Low-Medium',
      description: 'Women get 10-20% lower premiums due to higher life expectancy. Female ₹540 vs Male ₹600 for ₹1Cr.',
      recommendation: 'Women should maximize coverage - cost advantage'
    },
    {
      factor: 'Occupation',
      impact: 'Medium',
      description: 'High-risk jobs (mining, aviation, defense) pay 20-40% extra. Office workers get standard rates.',
      recommendation: 'Disclose occupation correctly - claim issues otherwise'
    }
  ];

  // Claim Process Steps
  const claimSteps = [
    {
      step: '1',
      title: 'Immediate Intimation',
      description: 'Nominee should inform insurer within 7-30 days of death. Call helpline, send email, or visit branch with death certificate.',
      time: 'Within 7-30 days',
      documents: ['Death certificate', 'Policy document', 'Claimant ID proof']
    },
    {
      step: '2',
      title: 'Claim Form Submission',
      description: 'Fill claim form provided by insurer. Submit with all required documents - death certificate, medical records, KYC documents.',
      time: '15-30 days from intimation',
      documents: ['Filled claim form', 'Original policy', 'Death certificate (original)', 'Medical records', 'Post-mortem report (if applicable)']
    },
    {
      step: '3',
      title: 'Document Verification',
      description: 'Insurer verifies all documents, conducts investigations if needed. May contact hospitals, police, family for verification.',
      time: '15-30 days',
      documents: ['Hospital records', 'Police FIR (if accidental)', 'Employer certificate', 'Income proof']
    },
    {
      step: '4',
      title: 'Claim Assessment',
      description: 'Insurance company reviews claim, checks policy terms, exclusions, premium payment status. Approves or rejects claim.',
      time: '30-45 days',
      documents: ['Investigation report', 'Medical opinion', 'Legal clearance']
    },
    {
      step: '5',
      title: 'Claim Settlement',
      description: 'Approved claim amount credited to nominee bank account via NEFT/RTGS. Claim settlement letter issued to nominees.',
      time: '7-15 days after approval',
      documents: ['Cancelled cheque', 'Bank account details', 'Nominee PAN card']
    }
  ];

  // Comprehensive FAQs
  const categorizedFAQs = [
    {
      category: 'Term Insurance Basics',
      faqs: [
        {
          question: 'What is term insurance and how is it different from other life insurance?',
          answer: 'Term insurance is pure life protection that pays sum assured only on death during policy term. No maturity benefit if you survive. COMPARISON: TERM INSURANCE: Premium ₹10,000/year for ₹1Cr cover. Only death benefit. No maturity value. Highest coverage at lowest cost. TRADITIONAL PLAN (Endowment): Premium ₹80,000/year for ₹25L cover. Death + maturity benefit. Returns 4-6%. Lower coverage, 8x higher premium. ULIP: Premium ₹50,000/year for ₹50L cover. Market-linked returns. Returns vary. Medium coverage, 5x premium. WHY TERM INSURANCE IS BEST: ₹10K term premium gives ₹1Cr protection. Same ₹10K in endowment gives only ₹12.5L protection. Term insurance maximizes coverage for family. Invest remaining ₹40K in mutual funds - better returns than traditional plans. VERDICT: Buy ₹1Cr term insurance (₹10K) + invest ₹40K in equity mutual funds. Better than ₹50K ULIP or ₹80K endowment.'
        },
        {
          question: 'How much term insurance coverage do I need?',
          answer: 'Recommended coverage = 15-20x your annual income. CALCULATION METHOD: Annual income ₹6L → Coverage ₹90L-₹1.2Cr. Annual income ₹10L → Coverage ₹1.5Cr-₹2Cr. Annual income ₹20L → Coverage ₹3Cr-₹4Cr. COVERAGE COMPONENTS: Income replacement: 10-15x annual income (family expenses for 10-15 years). Outstanding loans: Home loan ₹50L + Car loan ₹5L = ₹55L. Children education: ₹20-30L for college/professional courses. Children marriage: ₹10-20L for wedding expenses. Spouse retirement: ₹20-30L for spouse old age. Total = Income replacement + Loans + Education + Marriage + Retirement. EXAMPLE 30-year old earning ₹10L/year: Income replacement: 15x₹10L = ₹1.5Cr. Home loan outstanding: ₹40L. Children education (2 kids): ₹30L. Children marriage: ₹20L. Spouse retirement fund: ₹20L. TOTAL COVERAGE NEEDED = ₹2.4Cr. Premium ≈ ₹20,000/year. RULE OF THUMB: Minimum ₹1Cr for all salaried individuals. ₹2Cr+ if home loan exists. Increase every 3-5 years with income.'
        }
      ]
    },
    {
      category: 'Premium & Tax',
      faqs: [
        {
          question: 'What are the tax benefits of term insurance?',
          answer: 'TAX BENEFITS UNDER SECTION 80C: Premium paid deduction up to ₹1.5 lakh per year. Saves tax based on your tax bracket: 30% bracket → Save ₹46,800/year. 20% bracket → Save ₹31,200/year. 10% bracket → Save ₹15,600/year. DEATH BENEFIT TAX-FREE UNDER 10(10D): Entire sum assured paid to nominee is 100% tax-free. Example: ₹2 Cr death benefit - zero tax, full ₹2Cr to family. MATURITY BENEFIT TAX-FREE (TROP): Return of premium plans - maturity amount tax-free under 10(10D). Premium ₹20K x 20 years = ₹4L returned tax-free. EXAMPLE TAX SAVING: Annual income ₹12L, Term premium ₹15,000, Tax bracket 30%. Without insurance: Tax on ₹12L = ₹1.87L. With insurance: Taxable income ₹12L - ₹15K = ₹11.85L, Tax = ₹1.83L. Tax saved = ₹4,500/year = ₹45,000 in 10 years + ₹1.35L in 30 years. PLUS: ₹1Cr death benefit tax-free saves family ₹30L in estate tax equivalent. TOTAL TAX BENEFIT: Premium deduction ₹1.35L over 30 years. Death benefit tax-free ₹30L equivalent. Total ₹31.35L tax advantage.'
        },
        {
          question: 'What factors affect my term insurance premium?',
          answer: 'Multiple factors determine your term insurance premium: AGE: Most critical factor. Younger = lower premium. Age 25: ₹1Cr cover = ₹7K/year. Age 35: ₹1Cr cover = ₹11K/year. Age 45: ₹1Cr cover = ₹22K/year. Age 55: ₹1Cr cover = ₹50K/year. Every year delay increases premium 5-8%. GENDER: Women get 10-20% lower premiums (higher life expectancy). Male 30: ₹12K/year. Female 30: ₹10K/year for same ₹1Cr cover. SMOKING/TOBACCO: Smokers pay 40-60% higher premium. Non-smoker: ₹10K/year. Smoker: ₹16K/year for ₹1Cr cover. HEALTH CONDITIONS: Diabetes, hypertension, heart disease increase premium 30-100%. BMI outside 18-30 range = higher premium. Previous surgeries may increase rates. OCCUPATION: High-risk jobs (mining, defense, aviation) = 20-50% extra. Desk jobs get standard rates. LIFESTYLE: Regular alcohol consumption = higher premium. Adventure sports enthusiasts = extra charges. FAMILY HISTORY: Hereditary diseases (cancer, heart disease) in family may increase premium. POLICY TERM: Longer term = lower annual premium. 20 years: ₹12K/year. 30 years: ₹10K/year for same cover. COVERAGE AMOUNT: Higher cover = proportionally higher premium. ₹50L cover = ₹5K/year. ₹1Cr cover = ₹10K/year (linear relationship). RIDERS: Accidental death = +₹500-1,000. Critical illness = +₹2,000-5,000. Waiver of premium = +₹1,000-2,000. RECOMMENDATION: Buy early (save 30-50% premium). Quit smoking before applying (save 40% premium). Maintain healthy BMI (avoid premium loading).'
        },
        {
          question: 'Should I buy online term insurance or through an agent?',
          answer: 'ONLINE TERM INSURANCE: ADVANTAGES: 30-40% cheaper premium (no agent commission). ₹1Cr cover: Agent ₹14K/year vs Online ₹10K/year. Instant comparison across 15-20 insurers. Buy in 15-30 minutes from home. Transparent pricing, no hidden charges. Direct customer support from insurer. Easy policy management via app/portal. LIMITATIONS: No personalized advice (self-research needed). Medical questions self-filled (errors = claim rejection). No hand-holding during claims. AGENT-BASED TERM INSURANCE: ADVANTAGES: Expert advice on coverage amount, riders. Helps with medical questions, documentation. Assists family during claim settlement. Relationship manager for policy servicing. Can negotiate better rates for high coverage. LIMITATIONS: 30-40% higher premium (agent commission included). May push higher premium plans (earn more commission). Limited to 2-3 insurers (tie-ups). Dependent on agent availability. COST COMPARISON (₹1Cr, 30-year-old, 30-year term): Online: ₹10,000/year = ₹3L total. Agent: ₹14,000/year = ₹4.2L total. Savings: ₹1.2L over 30 years by buying online. CLAIM SETTLEMENT: Both have SAME claim process and settlement ratio. Online buyers: Submit claim directly to insurer. Agent buyers: Agent assists with paperwork. RECOMMENDATION: First-time buyer with research skills: Buy online (save 30-40%). Complex health conditions: Use agent (proper disclosure help). High coverage (₹2Cr+): Use agent (better underwriting navigation). Price-conscious: Always online. HYBRID APPROACH: Research online (compare plans, prices). Consult agent for final advice (2-3 meetings). Buy online after decision made (save premium). VERDICT: Online is better for 80% of buyers (simple health, standard coverage). Agent useful for 20% with complex needs.'
        }
      ]
    },
    {
      category: 'Coverage & Claims',
      faqs: [
        {
          question: 'What is covered and not covered in term insurance?',
          answer: 'WHAT IS COVERED: NATURAL DEATH: Heart attack, stroke, organ failure, old age. COVID-19 death: Fully covered if declared at proposal. Accidental death: Road accident, falls, drowning. Covered + accidental death benefit rider pays extra. Critical illness (with rider): Cancer, heart surgery, kidney failure, stroke. Lump sum payout on diagnosis. Terminal illness: Some plans pay advance if terminal diagnosis (< 6 months to live). Suicide (after 1 year): Covered after 12 months from policy start. 80% premium refunded if within first year. WHAT IS NOT COVERED: Death within waiting period: First 30-90 days (except accident). Pre-existing not disclosed: If death from undisclosed disease within 3-5 years = claim rejected. Suicide within 1 year: Only premium refunded (80-90%). Self-inflicted injury: Intentional self-harm or dangerous activities. Death due to intoxication: Drunk driving, drug overdose. Participation in crime: Death during illegal activity, riots. War/terrorism (in some policies): Check policy terms. Death outside India (some policies): Some plans exclude foreign deaths. STD/HIV (not disclosed): If contracted before policy and not disclosed. COMMON CLAIM REJECTIONS: Non-disclosure of smoking/tobacco (30% rejections). Pre-existing disease not declared (25% rejections). Incorrect age, income, or occupation (15% rejections). Policy lapsed due to non-payment (10% rejections). DOCUMENT REQUIREMENTS FOR CLAIM: Death certificate (from municipal authority). Policy document (original). Claim form (filled by nominee). Age proof of deceased. Identity/address proof of nominee. Medical records (if death due to illness). Post-mortem report (if unnatural death). FIR (if accidental death). CLAIM SETTLEMENT TIME: Natural death: 15-30 days after documents submitted. Accidental death: 30-60 days (investigation needed). Claim investigation: If death within 3 years or suspicious = 3-6 months. RECOMMENDATION: Declare ALL health conditions, smoking, occupation truthfully. Keep policy active (pay premiums on time). Inform nominee about policy details, documents.'
        },
        {
          question: 'How does the claim settlement process work?',
          answer: 'TERM INSURANCE CLAIM PROCESS (Step-by-step): STEP 1: INTIMATION (Within 7 days): Nominee/family calls insurer customer care. Inform about policyholder death. Get claim number, document list. Timeframe: Day 1-7 after death. STEP 2: DOCUMENT SUBMISSION (Within 30 days): Submit documents to nearest branch or email/upload. Death certificate (original + copy). Policy document. Claim form (filled & signed by nominee). Age proof, identity proof of deceased and nominee. Medical records (if hospitalization before death). Post-mortem report (if unnatural death). Police FIR (if accidental death). Employer certificate (if in-service death). Timeframe: Day 8-30. STEP 3: CLAIM PROCESSING: Insurer verifies documents. Checks policy status (active/lapsed). Reviews medical history, proposal form. Calls nominee for additional documents if needed. Timeframe: Day 30-45. STEP 4: INVESTIGATION (if required): Conducted if: Death within first 3 policy years, Unnatural death, High sum assured (>₹1Cr), Suspicion of fraud/non-disclosure. Investigator meets family, doctors, employer. Checks medical history, lifestyle. Timeframe: 30-90 days extra. STEP 5: CLAIM DECISION: Approved: Claim amount transferred to nominee bank account. Rejected: Letter stating reason (non-disclosure, exclusion). Nominee can appeal or approach IRDAI ombudsman. Timeframe: Day 45-60 (or 90-120 if investigated). STEP 6: PAYOUT: NEFT/RTGS to nominee bank account. Tax-free lump sum. No TDS deduction. Timeframe: Within 7 days of approval. TOTAL CLAIM TIME: Simple natural death: 30-60 days. Accidental death: 60-90 days. Investigated claims: 90-180 days. CLAIM SETTLEMENT RATIO (Top Insurers 2023): LIC: 97.79%, HDFC Life: 99.16%, ICICI Prudential: 98.34%, SBI Life: 97.03%, Max Life: 99.35%. REASONS FOR DELAY: Incomplete documents (40% delays). Nominee not aware of policy (20% delays). Investigation required (25% delays). Policy lapsed (15% delays). TIPS FOR FASTER CLAIM: Keep nominee informed about policy. Pay premiums on time (avoid lapse). Submit complete documents together. Respond promptly to insurer queries. REJECTION APPEAL PROCESS: Internal grievance: Write to insurer grievance officer (30 days). Insurance Ombudsman: File complaint if not satisfied (free service). Consumer court: Legal action (last resort). RECOMMENDATION: Inform family about policy existence, insurer name, policy number. Keep policy documents, premium receipts safe and accessible. Nominee should intimate insurer immediately after death. Submit complete documents in one go (avoid back-and-forth).'
        },
        {
          question: 'Can I increase or decrease coverage after buying term insurance?',
          answer: 'INCREASING COVERAGE: YES, but need to buy additional/new policy. Cannot increase existing policy sum assured. Options: Buy second term plan for additional coverage. Example: Have ₹1Cr, buy another ₹50L = Total ₹1.5Cr. Claim from both if death. Add Sum Assured Increase Rider: Auto-increases coverage 25-50% after 5/10/15 years or life events (marriage, child birth). Premium increases proportionally. Example: ₹1Cr policy with rider → Becomes ₹1.25Cr after 5 years. Premium ₹10K → ₹12.5K. Life Stage Top-Up: Some insurers allow top-up on marriage, child birth. Additional ₹25L-50L cover. Fresh medical tests required. Premium at current age (higher than original policy). DECREASING COVERAGE: NO, cannot reduce sum assured in active policy. Options: Surrender policy: Get zero value (term has no cash value). Stop paying: Policy lapses, no coverage or maturity. Alternative - Don\'t increase if using increase rider: If you opted for auto-increase rider, can stop future increases. Existing cover remains. WHY YOU MIGHT NEED INCREASE: Salary increased: ₹10L → ₹20L income needs higher cover. New financial responsibilities: Home loan taken, second child born. Inflation: ₹1Cr adequate 10 years ago ≠ adequate today. WHY YOU MIGHT WANT DECREASE: Loans repaid: Home loan cleared, need less coverage. Children independent: Kids earning, less responsibility. Built corpus: Have ₹2Cr savings, need less life cover. BETTER STRATEGY THAN DECREASING: Keep policy active (low premium anyway). Reduces nominee bank balance if death. RECOMMENDATION FOR ADEQUATE COVERAGE: Start with 15-20x income coverage. Review every 5 years: Income increased → Buy top-up. Loans repaid → Maintain coverage (don\'t decrease). Children grown up → Keep base ₹50L-1Cr always. Use SUM ASSURED INCREASE RIDER: Auto-increase every 5 years without medical tests. Handles inflation, life stage needs. +15-25% premium cost but worth it. PORTABILITY: Cannot port term insurance to new insurer (unlike health insurance). Stuck with same insurer for full term. Choose insurer carefully at purchase. CAN YOU HAVE MULTIPLE TERM POLICIES: YES, no limit on number of term policies. Can buy from different insurers. All will pay on death (claim from each). Total premium: Sum of all policies. Example: HDFC ₹1Cr + ICICI ₹50L + LIC ₹1Cr = ₹2.5Cr total cover. VERDICT: Buy adequate coverage from day 1 (15-20x income). Add sum assured increase rider (+20% premium). Review and top-up every 5 years with new policy if needed.'
        }
      ]
    },
    {
      category: 'Riders & Policy Features',
      faqs: [
        {
          question: 'Which riders should I add to my term insurance?',
          answer: 'ESSENTIAL RIDERS (Highly Recommended): 1. ACCIDENTAL DEATH BENEFIT RIDER: Extra payout if death by accident. Base cover ₹1Cr + Accident rider ₹1Cr = ₹2Cr paid if accidental death. Cost: ₹500-1,500/year for ₹1Cr rider. Worth it: YES - accidents are leading cause of death in 25-45 age. 2. CRITICAL ILLNESS RIDER: Lump sum on diagnosis of 15-40 diseases (cancer, heart attack, stroke, kidney failure). Payout: 25-100% of base sum assured. Can be used for treatment while keeping life cover active. Cost: ₹2,000-6,000/year for ₹25L-50L critical illness cover. Worth it: YES - 1 in 3 people get critical illness in lifetime. 3. WAIVER OF PREMIUM RIDER: Future premiums waived if you get critical illness/permanent disability. Policy continues without paying. Cost: ₹800-2,000/year. Worth it: YES - ensures policy never lapses due to inability to pay. OPTIONAL RIDERS (Based on Need): 4. ACCIDENTAL TOTAL & PERMANENT DISABILITY (TPD): Monthly income if permanently disabled (can\'t work). Usually 1% of sum assured per month for 10 years. Example: ₹1Cr cover = ₹1L/month for 120 months = ₹1.2Cr. Cost: ₹1,000-3,000/year. Worth it: If sole earning member. 5. TERMINAL ILLNESS RIDER: Advance payout if diagnosed terminal (< 6-12 months to live). Get money while alive for treatment/family. Cost: ₹300-800/year. Worth it: YES - included in many plans free. 6. INCOME BENEFIT RIDER: Instead of lump sum, family gets monthly income. Example: ₹1Cr as ₹50K/month for 167 months. Better for family financial discipline. Cost: Same as base premium (it\'s a payout option). Worth it: If family not good at managing lump sum. NOT RECOMMENDED RIDERS: Hospital Cash Rider: Better to buy separate health insurance. Return of Premium (TROP): 30-50% higher premium, defeats term insurance purpose. Better to invest extra in mutual funds. Guaranteed Insurability Rider: Expensive, better to buy new policy. RIDERS COST EXAMPLE (30-year-old, ₹1Cr base cover): Base term premium: ₹10,000/year. Accidental Death Benefit ₹1Cr: +₹1,000. Critical Illness ₹50L: +₹4,000. Waiver of Premium: +₹1,500. Total: ₹16,500/year (65% premium increase but 3x better protection). RECOMMENDATION - ESSENTIAL 3 RIDERS: Accidental Death Benefit: ₹1Cr (=base cover). Critical Illness: ₹50L (=50% of base). Waiver of Premium: On critical illness + disability. Total extra cost: ₹6,000-8,000/year (60-80% increase). WORTH IT: Base ₹10K covers only death. ₹17K covers death + accidents + 40 critical illnesses + waiver. Much better protection for 70% extra cost. WHO SHOULD SKIP RIDERS: Tight budget: Buy pure term, skip riders. Already have critical illness policy: Skip CI rider. Already have health insurance: Skip hospital cash. VERDICT: Add Accidental Death + Critical Illness + Waiver of Premium riders. Skip hospital cash, TROP, other fancy riders.'
        },
        {
          question: 'What is Return of Premium (TROP) and should I buy it?',
          answer: 'RETURN OF PREMIUM (TROP): Term insurance variant that returns ALL premiums if you survive policy term. REGULAR TERM VS TROP: REGULAR TERM PLAN: Premium: ₹10,000/year for ₹1Cr. Coverage: 30 years. Death benefit: ₹1Cr. Maturity benefit: Zero (if survive). Total paid: ₹3L over 30 years. TROP (Return of Premium): Premium: ₹25,000/year for ₹1Cr (2.5x higher). Coverage: 30 years. Death benefit: ₹1Cr. Maturity benefit: ₹7.5L (all premiums returned). Total paid: ₹7.5L over 30 years. HOW TROP WORKS: Pay higher premium (2-3x regular term). If death during term: Family gets ₹1Cr (same as regular term). If survive: You get ALL premiums back tax-free at maturity. Example: Pay ₹20K/year for 30 years = ₹6L paid. Survive: Get ₹6L back at age 60. Die: Family gets ₹1Cr, premiums not returned. TROP VS REGULAR TERM + INVESTMENT: Scenario A - TROP: Premium: ₹25K/year × 30 years = ₹7.5L paid. Maturity: Get ₹7.5L back (0% return). Scenario B - Regular Term + Mutual Fund: Term premium: ₹10K/year × 30 years = ₹3L. Invest difference: ₹15K/year in mutual funds @ 12% for 30 years. Mutual fund corpus: ₹45L (₹4.5L invested, ₹40.5L returns). Total: ₹3L premium paid + ₹45L corpus = ₹48L. VERDICT: TROP gives ₹7.5L. Term + SIP gives ₹48L. You lose ₹40.5L by choosing TROP. WHY TROP IS POOR CHOICE: 2.5x higher premium (₹25K vs ₹10K). Zero return on maturity (just premium back). Investing extra ₹15K gives ₹45L vs ₹7.5L. Locks money for 30 years at 0% return. Inflation erodes value: ₹7.5L today ≠ ₹7.5L in 2054. WHEN TROP MAKES SENSE (Rare Cases): You have ZERO financial discipline (can\'t invest ₹15K/month). You want "forced savings" even at 0% return. You emotionally can\'t accept "losing" term premium. You are very high income, don\'t need investment returns. TAX TREATMENT: TROP maturity: Tax-free under Section 10(10D). Mutual fund: LTCG tax 10% above ₹1L (still better than TROP). CLAIM SETTLEMENT: If death: TROP and regular term pay same ₹1Cr. No difference in claim process or settlement. INSURANCE AGENTS PUSH TROP WHY: Higher commission: Agent earns 2.5x more on TROP. Easier to sell: "Get money back" sounds attractive. Hides investment alternative: Don\'t tell about term + SIP option. REAL EXAMPLE: 30-year-old, ₹1Cr cover, 30-year term. TROP: Pay ₹24K × 30 = ₹7.2L. Get ₹7.2L back (0% return). Regular + SIP: Pay ₹10K term + ₹14K SIP @ 12% for 30 years. Corpus: ₹42L (₹5L invested, ₹37L returns). You gain ₹35L by choosing regular term + SIP. RECOMMENDATION: NEVER buy TROP (unless zero financial discipline). Buy regular term insurance (₹10K for ₹1Cr). Invest extra premium in equity mutual fund SIP (₹15K/month). Get ₹45L corpus + ₹1Cr life cover vs just ₹1Cr cover in TROP. VERDICT: TROP is worst financial decision. Only 5% people should consider it (zero discipline types).'
        },
        {
          question: 'Can I port or transfer my term insurance to another company?',
          answer: 'SHORT ANSWER: NO, term insurance CANNOT be ported or transferred like health insurance. HEALTH INSURANCE vs TERM INSURANCE PORTABILITY: HEALTH INSURANCE: Portability allowed by IRDAI regulations. Can switch insurer without losing waiting period benefits. Accumulated no-claim bonus preserved. Process: Inform new insurer 45 days before renewal. New insurer accepts/rejects based on health. TERM INSURANCE: NO portability regulations exist. Cannot transfer to another insurer. Stuck with same insurer for entire policy term (20-40 years). Only option: Surrender old + buy new (but lose benefits). WHY TERM INSURANCE PORTABILITY NOT ALLOWED: Long-term contract (20-40 years): Insurer prices premium based on entry age. Porting at older age = re-pricing needed. No accumulated benefit: Term has no cash value to transfer. Unlike health insurance NCB/waiting period. Adverse selection: Only unhealthy people will port (after diagnosis). Insurers will reject or charge very high premium. Mortality risk: Term insurance covers death, can\'t test future health. Health insurance can test current health before port. WHAT IF YOU WANT TO SWITCH INSURER: Option 1 - KEEP OLD + BUY NEW: Keep existing policy active (don\'t lapse). Buy additional term from new insurer at current age. Both policies active, both pay on death. Cost: Pay premiums for both policies. Example: Have HDFC ₹1Cr @ ₹10K/year bought at age 30. Now age 40, want ICICI instead. Can\'t port HDFC to ICICI. Buy ICICI ₹50L @ ₹10K/year at age 40. Total: ₹1.5Cr cover, ₹20K/year premium. Option 2 - SURRENDER OLD + BUY NEW (Not Recommended): Stop paying old policy (let it lapse). Buy new policy from preferred insurer at current age. LOSS: Higher premium (now older). New medical tests (may be rejected if health issues). New waiting periods, exclusions. Example: Have ₹1Cr @ ₹10K/year bought at age 30. Lapse it at age 45. Buy new ₹1Cr @ ₹28K/year at age 45. You pay 2.8x more for same cover. If developed diabetes by 45: New policy may reject or charge ₹40K/year. Option 3 - KEEP OLD + TOP-UP WITH NEW: Keep old policy (lower premium locked in). Buy top-up from better insurer for additional needs. Best approach if want different insurer. Example: Have ₹1Cr @ ₹10K/year from LIC. Want HDFC instead. Keep LIC ₹1Cr active. Buy HDFC ₹1Cr @ ₹16K/year (current age 40). Total: ₹2Cr cover, ₹26K/year. WHEN YOU MIGHT WANT TO SWITCH: Poor claim settlement ratio: Current insurer has <95% settlement. Better features elsewhere: New insurer offers better riders. Premium increase: Current insurer hiked premium unreasonably (rare in term). Service issues: Consistent poor customer service. VERDICT - PORTABILITY WORKAROUND: Cannot officially port term insurance. If must switch: Keep old policy + buy new (don\'t lapse old). Evaluate at purchase: Choose insurer with 98%+ claim settlement ratio. Check claim reviews before buying. Don\'t need to switch later. TOP INSURERS FOR TERM (High Claim Settlement): Max Life: 99.51%, HDFC Life: 99.16%, ICICI Prudential: 98.34%, Tata AIA: 98.26%, SBI Life: 97.03%. RECOMMENDATION: Choose insurer carefully at purchase (stuck for 30-40 years). Prefer Max Life, HDFC Life, ICICI Pru, Tata AIA. Check claim settlement ratio, reviews, service before buying. Once bought, keep policy active (porting not possible). If need to switch: Keep old + add new policy (never surrender old).'
        }
      ]
    }
  ];

  // Calculate Premium
  const calculatePremium = () => {
    const age = parseInt(calculatorInputs.age) || 30;
    const cover = parseInt(calculatorInputs.coverAmount) || 10000000;
    const term = parseInt(calculatorInputs.term) || 30;
    const isSmoker = calculatorInputs.smokingStatus === 'yes';
    const isMale = calculatorInputs.gender === 'male';

    // Base premium calculation (simplified)
    let basePremium = (cover / 1000) * 0.5; // ₹0.5 per ₹1000 cover

    // Age factor
    if (age < 25) basePremium *= 0.8;
    else if (age > 40) basePremium *= 1.5;
    else if (age > 50) basePremium *= 2.5;

    // Smoking factor
    if (isSmoker) basePremium *= 1.4;

    // Gender factor
    if (!isMale) basePremium *= 0.85;

    // Term factor
    if (term > 30) basePremium *= 1.1;

    return Math.round(basePremium).toLocaleString('en-IN');
  };

  const calculateMonthlyPremium = () => {
    const annual = parseInt(calculatePremium().replace(/,/g, ''));
    return Math.round(annual / 12).toLocaleString('en-IN');
  };

  return (
    <div className="w-full max-w-full bg-black overflow-x-hidden min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="ghost"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-thin hover:bg-white/20 hover:border-white/30 transition-all duration-300 h-10 px-4 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Back to Insurance List
          </Button>
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-gradient-to-r from-blue-500 to-purple-600 text-white font-thin hover:from-blue-600 hover:to-purple-700 transition-all duration-300 h-10 px-5 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Phone className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Talk to Expert
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-black to-purple-500/10"></div>
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          {/* Centered Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-blue-500/40 mb-6 backdrop-blur-md">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" strokeWidth={1.5} />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-thin tracking-wide mb-6">
              Term Life Insurance
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-thin mb-4">
                Maximum Life Protection at Minimum Cost
              </p>
              <p className="text-white/50 text-sm sm:text-base font-thin mb-8">
                ₹1 Crore coverage starting at just ₹490/month. 98.5% claim settlement ratio.
              </p>

              {/* Network Statistics */}
              <div className="grid grid-cols-2 gap-4">
                {networkStats.map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <div className="text-3xl text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-white text-2xl sm:text-3xl font-thin mb-2">Get Your Term Insurance Quote</h2>
                  <p className="text-white/60 text-sm sm:text-base font-thin">Fill details below and get instant policy recommendation</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-blue-500/50 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Mobile Number *</label>
                    <Input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-blue-500/50 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Gender *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none">
                      <option value="" className="bg-black">Select Gender</option>
                      <option value="male" className="bg-black">Male</option>
                      <option value="female" className="bg-black">Female</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Annual Income</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none">
                      <option value="" className="bg-black">Select Income Range</option>
                      <option value="0-5" className="bg-black">₹0 - ₹5 Lakh</option>
                      <option value="5-10" className="bg-black">₹5 - ₹10 Lakh</option>
                      <option value="10-15" className="bg-black">₹10 - ₹15 Lakh</option>
                      <option value="15-25" className="bg-black">₹15 - ₹25 Lakh</option>
                      <option value="25+" className="bg-black">₹25 Lakh+</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-thin px-8 py-6 text-base rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 mb-3">
                  <Shield className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  Get Your Policy Now
                </Button>
                <p className="text-white/50 text-xs font-thin text-center">*Get instant quotes from 15+ insurers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-6">
        <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
          <h2 className="text-white font-thin mb-4 text-center">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {['What is Term Insurance', 'Why You Need It', 'Types of Plans', 'Benefits & Coverage', 'Riders & Add-ons', 'Premium Calculator', 'Tax Benefits', 'Premium Factors', 'Claims Process', 'FAQs'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-thin hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 space-y-16 sm:space-y-20">

        {/* What is Term Insurance */}
        <section id="what-is-term-insurance" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">What is Term Insurance?</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-4">
            <p className="text-white/70 text-base leading-relaxed">
              Term insurance is the purest and most affordable form of life insurance that provides high coverage at low premiums. It pays a lump sum (sum assured) to your nominees if you pass away during the policy term. If you survive the term, no benefit is paid (except in Return of Premium plans).
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              For example, a 30-year-old non-smoker can get <span className="text-white font-medium">₹1 Crore coverage for just ₹6,000-8,000/year</span> (approximately ₹500-670/month). This is the most cost-effective way to financially protect your family.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                <h3 className="text-white text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Key Features
                </h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Highest coverage at lowest premium</li>
                  <li>• Pure life protection - no investment component</li>
                  <li>• Coverage up to ₹10 crore or more</li>
                  <li>• Tax benefits under Section 80C & 10(10D)</li>
                  <li>• Flexible policy terms - 10 to 40 years</li>
                  <li>• Optional riders for enhanced protection</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                <h3 className="text-white text-lg mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-400" />
                  Who Should Buy?
                </h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Sole breadwinner of the family</li>
                  <li>• Anyone with financial dependents</li>
                  <li>• People with loans (home, car, education)</li>
                  <li>• Parents with young children</li>
                  <li>• Self-employed professionals</li>
                  <li>• Working professionals of any age</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why You Need Term Insurance */}
        <section id="why-you-need-it" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Why You Need Term Insurance?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Family Financial Security</h3>
              <p className="text-white/60 text-sm">
                ₹1 Crore coverage ensures your family maintains their lifestyle even without you. Covers 10-15 years of household expenses, children education, and spouse retirement.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Loan Protection</h3>
              <p className="text-white/60 text-sm">
                Home loan ₹50L + Car loan ₹10L = ₹60L debt burden on family. Term insurance ensures loans cleared, family not forced to sell assets or vacate home.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <Baby className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Children's Future</h3>
              <p className="text-white/60 text-sm">
                Engineering/Medical ₹20-40L + MBA ₹25L + Marriage ₹15L = ₹60-80L needed. Insurance ensures children's dreams fulfilled despite absence of breadwinner.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <IndianRupee className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Extremely Affordable</h3>
              <p className="text-white/60 text-sm">
                Just ₹500-600/month (cost of 2 movie tickets) gives ₹1 Crore protection. Most cost-effective financial product - 0.06% annual cost for 100% protection.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <Percent className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Tax Benefits</h3>
              <p className="text-white/60 text-sm">
                Save up to ₹46,800/year in taxes (30% bracket on ₹1.5L premium). Death benefit completely tax-free. Total tax benefit ₹14L+ over policy term.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Spouse Protection</h3>
              <p className="text-white/60 text-sm">
                Working spouse may have to quit job to care for children. Term insurance provides ₹20-40L corpus for spouse retirement, ensures financial independence.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Term Insurance */}
        <section id="types-of-plans" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Types of Term Insurance Plans</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {termTypes.map((type, idx) => (
              <article
                key={idx}
                onClick={() => {
                  if (type.id && onSelectProduct) {
                    onSelectProduct(type.id);
                  }
                }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg text-white mb-2">{type.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-white/60 mb-4">{type.description}</p>

                <div className="space-y-2 mb-4">
                  {type.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-xs text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Coverage:</span>
                    <span className="text-white">{type.coverage}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Premium:</span>
                    <span className="text-white">{type.premium}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Claim Ratio:</span>
                    <span className="text-green-400">{type.claimRatio}</span>
                  </div>
                </div>

                <p className="text-xs text-white/40 mt-4">
                  <strong className="text-white/60">Ideal for:</strong> {type.idealFor}
                </p>

                <Button
                  variant="outline"
                  className="w-full mt-4 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (type.id && onSelectProduct) {
                      onSelectProduct(type.id);
                    }
                  }}
                >
                  Know More <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </article>
            ))}
          </div>
        </section>

        {/* Comprehensive Benefits & Coverage */}
        <section id="benefits-&-coverage" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Comprehensive Benefits & Coverage</h2>
          </div>

          <div className="space-y-6">
            {comprehensiveBenefits.map((benefit, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white text-xl">{benefit.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefit.benefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Riders & Add-ons */}
        <section id="riders-&-add-ons" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Optional Riders & Add-ons</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detailedRiders.map((rider, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/20 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <rider.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg mb-1">{rider.name}</h3>
                      <p className="text-blue-400 text-sm">{rider.price}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-4">{rider.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {rider.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-xs text-white/60">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs text-white/40">Coverage: </span>
                  <span className="text-xs text-white/70">{rider.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Calculator */}
        <section id="premium-calculator" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Premium Calculator</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <Calculator className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Calculate Your Premium</span>
              </div>
              <h3 className="text-2xl text-white mb-2">Get Instant Premium Estimate</h3>
              <p className="text-white/60">Enter your details below for personalized quote</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-white/70 mb-2">Your Age</label>
                <Input
                  type="number"
                  placeholder="e.g., 30"
                  value={calculatorInputs.age}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, age: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Annual Income</label>
                <Input
                  type="number"
                  placeholder="e.g., 1000000"
                  value={calculatorInputs.annualIncome}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, annualIncome: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Coverage Amount (₹)</label>
                <Input
                  type="number"
                  placeholder="e.g., 10000000"
                  value={calculatorInputs.coverAmount}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, coverAmount: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Policy Term (Years)</label>
                <Input
                  type="number"
                  placeholder="e.g., 30"
                  value={calculatorInputs.term}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, term: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Gender</label>
                <select
                  value={calculatorInputs.gender}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, gender: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white h-12 rounded-md px-3"
                >
                  <option value="male" className="bg-black">Male</option>
                  <option value="female" className="bg-black">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Smoking Status</label>
                <select
                  value={calculatorInputs.smokingStatus}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, smokingStatus: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white h-12 rounded-md px-3"
                >
                  <option value="no" className="bg-black">Non-Smoker</option>
                  <option value="yes" className="bg-black">Smoker</option>
                </select>
              </div>
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-sm text-white/60 mb-2">Monthly Premium</p>
                  <p className="text-3xl text-white mb-2">₹{calculateMonthlyPremium()}</p>
                  <p className="text-xs text-white/40">*Approximately</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/60 mb-2">Annual Premium</p>
                  <p className="text-3xl text-white mb-2">₹{calculatePremium()}</p>
                  <p className="text-xs text-white/40">*Excluding GST & riders</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-12 text-base">
              Get Detailed Quotes from Top Insurers
            </Button>
          </div>
        </section>

        {/* Tax Benefits */}
        <section id="tax-benefits" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Tax Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <Percent className="w-8 h-8 text-blue-400" />
                <h3 className="text-white text-xl">Section 80C Deduction</h3>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Premium paid is eligible for tax deduction up to ₹1.5 lakh per year under Section 80C of Income Tax Act.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white/60 text-sm">30% Tax Bracket</span>
                  <span className="text-green-400">Save ₹46,800/year</span>
                </div>
                <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white/60 text-sm">20% Tax Bracket</span>
                  <span className="text-green-400">Save ₹31,200/year</span>
                </div>
                <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-white/60 text-sm">10% Tax Bracket</span>
                  <span className="text-green-400">Save ₹15,600/year</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <h3 className="text-white text-xl">Section 10(10D) Exemption</h3>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Death benefit and maturity amount (for TROP plans) are completely tax-free under Section 10(10D).
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                  <span className="text-sm text-white/70">₹1 Crore death benefit - 100% tax-free to nominees</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                  <span className="text-sm text-white/70">Maturity benefit tax-free for Return of Premium plans</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                  <span className="text-sm text-white/70">No TDS deduction on claim amount</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Factors */}
        <section id="premium-factors" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Factors Affecting Premium</h2>
          </div>

          <div className="space-y-4">
            {premiumFactors.map((factor, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white text-lg mb-1">{factor.factor}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${factor.impact === 'Very High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                      factor.impact === 'High' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                        'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                      }`}>
                      {factor.impact} Impact
                    </span>
                  </div>
                </div>
                <p className="text-white/60 text-sm mb-3">{factor.description}</p>
                <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-sm">💡 {factor.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Claims Process */}
        <section id="claims-process" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">How to File a Claim</h2>
          </div>

          <div className="space-y-4">
            {claimSteps.map((step, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-blue-400">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white text-lg">{step.title}</h3>
                      <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">{step.time}</span>
                    </div>
                    <p className="text-sm text-white/60 mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.documents.map((doc, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comprehensive FAQs */}
        <section id="faqs" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {categorizedFAQs.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-white text-xl mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, faqIdx) => (
                    <AccordionItem
                      key={faqIdx}
                      value={`item-${idx}-${faqIdx}`}
                      className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-6 data-[state=open]:bg-white/10"
                    >
                      <AccordionTrigger className="text-left text-white/90 hover:text-white py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/60 pb-4 text-sm leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table 1: Term Plan Types Comparison */}
        <section id="plan-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Term Plan Types Comparison</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Feature</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Level Term</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Increasing Cover</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Decreasing Cover</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">TROP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Coverage Type</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Fixed throughout</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Increases 5-10%/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Decreases yearly</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Fixed throughout</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Premium</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10,000/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12,000/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹8,000/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25,000/year</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Death Benefit</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1 Cr always</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1Cr → ₹2Cr</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1Cr → ₹10L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1 Cr always</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Maturity Benefit</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Zero</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Zero</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Zero</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹7.5L (premiums)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Inflation Protection</td>
                  <td className="px-6 py-4 text-white/60 font-thin">No</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Yes</td>
                  <td className="px-6 py-4 text-white/60 font-thin">No</td>
                  <td className="px-6 py-4 text-white/60 font-thin">No</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Total Premium (30Y)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3 Lakh</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3.6 Lakh</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2.4 Lakh</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹7.5 Lakh</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Best For</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Most people</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Young earners</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Home loan cover</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Savings seekers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparison Table 2: Top Term Insurance Providers */}
        <section id="provider-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Top Term Insurance Providers 2024</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Insurer</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Claim Settlement Ratio</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Premium (₹1Cr, Age 30)</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Settlement Time</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Max Life Insurance</td>
                  <td className="px-6 py-4 text-white/60 font-thin">99.51%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10,890/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15-30 days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★★</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">HDFC Life</td>
                  <td className="px-6 py-4 text-white/60 font-thin">99.16%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹11,250/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15-25 days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★★</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">ICICI Prudential</td>
                  <td className="px-6 py-4 text-white/60 font-thin">98.34%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10,500/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">20-35 days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★★</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Tata AIA Life</td>
                  <td className="px-6 py-4 text-white/60 font-thin">98.26%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹11,800/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15-30 days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★★</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">LIC</td>
                  <td className="px-6 py-4 text-white/60 font-thin">97.79%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹13,500/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">30-45 days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★☆</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">SBI Life</td>
                  <td className="px-6 py-4 text-white/60 font-thin">97.03%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12,200/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">25-40 days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★☆</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparison Table 3: Premium by Age & Coverage */}
        <section id="premium-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Annual Premium by Age & Coverage (30-Year Term)</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Age</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">₹50 Lakh</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">₹1 Crore</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">₹1.5 Crore</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">₹2 Crore</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">25 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹4,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹8,200</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15,800</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">30 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20,200</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">35 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹7,200</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹13,800</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20,200</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹26,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">40 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20,200</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹29,800</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹39,200</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">45 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹16,800</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹32,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹48,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹63,200</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">50 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹28,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹55,800</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹82,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1,09,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white/60 text-sm mt-4 text-center font-thin">Note: Premiums are approximate for non-smoking, healthy males. Actual premium varies by insurer and individual health profile.</p>
        </section>

        {/* Related Insurance Products */}
        <section id="related-products" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Explore More Insurance Options</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Row 1 */}
            {/* Term Life Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Term Life Insurance</h3>
              </div>
            </div>

            {/* Health Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Health Insurance</h3>
              </div>
            </div>

            {/* Investment Plans */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <PiggyBank className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Investment Plans</h3>
              </div>
            </div>

            {/* Car Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 17h14v-5h-3l-1.5-3h-5L8 12H5v5z" />
                    <circle cx="7.5" cy="17" r="1.5" />
                    <circle cx="16.5" cy="17" r="1.5" />
                  </svg>
                </div>
                <h3 className="text-white text-sm font-thin">Car Insurance</h3>
              </div>
            </div>

            {/* 2 Wheeler Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="5.5" cy="17.5" r="2.5" />
                    <circle cx="18.5" cy="17.5" r="2.5" />
                    <path d="M5.5 17.5h-1.4c-.5 0-1-.4-1.1-.9L2 9h8l4 3-2 5.5" />
                    <path d="M12 12l3-6h3l1 3" />
                  </svg>
                </div>
                <h3 className="text-white text-sm font-thin">2 Wheeler Insurance</h3>
              </div>
            </div>

            {/* Row 2 */}
            {/* Family Health Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Family Health Insurance</h3>
              </div>
            </div>

            {/* Travel Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Plane className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Travel Insurance</h3>
              </div>
            </div>

            {/* Term Insurance (Women) */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Term Insurance (Women)</h3>
              </div>
            </div>

            {/* Term Plans with Return of Premium */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Term Plans with Return of Premium</h3>
              </div>
            </div>

            {/* Guaranteed Return Plans */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Guaranteed Return Plans</h3>
              </div>
            </div>

            {/* Row 3 */}
            {/* Child Savings Plans */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Baby className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Child Savings Plans</h3>
              </div>
            </div>

            {/* Retirement Plans */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Clock className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Retirement Plans</h3>
              </div>
            </div>

            {/* Employee Group Health Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Employee Group Health Insurance</h3>
              </div>
            </div>

            {/* Home Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <HomeIcon className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Home Insurance</h3>
              </div>
            </div>

            {/* Personal Accident Insurance */}
            <div className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Activity className="w-12 h-12 text-gray-400 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-thin">Personal Accident Insurance</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative rounded-2xl overflow-hidden border border-blue-500/30 py-12 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-black to-purple-500/20"></div>
          <div className="relative z-10 text-center space-y-6 px-6">
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Secure Your Family's Future Today</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Get ₹1 Crore coverage starting at just ₹490/month. Compare quotes from top insurers and buy online in minutes. 98.5% claim settlement ratio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-12 px-8">
                <Calculator className="w-4 h-4 mr-2" />
                Compare Term Insurance Plans
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8">
                <Phone className="w-4 h-4 mr-2" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
