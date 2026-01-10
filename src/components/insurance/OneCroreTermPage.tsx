import { ArrowLeft, Shield, IndianRupee, Calculator, CheckCircle, AlertCircle, TrendingUp, Users, Award, Phone, Building2, Clock, Target, Heart, Baby, Home as HomeIcon, Briefcase, HelpCircle, DollarSign, FileCheck, Percent, X, Zap, Gift, BookOpen, FileText, BadgeCheck, AlertTriangle, Info, ChevronRight, Star, ThumbsUp, TrendingDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';

interface OneCroreTermPageProps {
  onBack: () => void;
  onSelectProduct?: (productId: string) => void;
}

export default function OneCroreTermPage({ onBack, onSelectProduct }: OneCroreTermPageProps) {
  const [calculatorInputs, setCalculatorInputs] = useState({
    age: '30',
    gender: 'male',
    smokingStatus: 'no',
    annualIncome: '1200000',
    term: '30'
  });

  // Why 1 Crore Coverage
  const whyOneCrore = [
    {
      icon: HomeIcon,
      title: 'Home Loan Protection',
      amount: '₹40-60 Lakhs',
      description: 'Outstanding home loan that family would struggle to repay without your income'
    },
    {
      icon: Baby,
      title: 'Children\'s Education',
      amount: '₹25-40 Lakhs',
      description: 'Engineering, Medical, MBA education costs for 2 children over 15-20 years'
    },
    {
      icon: Heart,
      title: 'Family Income Replacement',
      amount: '₹30-50 Lakhs',
      description: 'Replace 10 years of family expenses (₹5L/year × 10 years = ₹50L)'
    },
    {
      icon: Users,
      title: 'Marriage & Life Goals',
      amount: '₹20-30 Lakhs',
      description: 'Daughter\'s marriage, emergency fund, and other life milestones'
    }
  ];

  // Premium Comparison by Age
  const premiumByAge = [
    { age: '25', premium: '₹7,500', perDay: '₹20', savings: 'Save ₹10K vs age 35' },
    { age: '30', premium: '₹9,000', perDay: '₹25', savings: 'Save ₹8K vs age 35' },
    { age: '35', premium: '₹12,500', perDay: '₹34', savings: 'Baseline' },
    { age: '40', premium: '₹18,000', perDay: '₹49', savings: 'Pay ₹5.5K more' },
    { age: '45', premium: '₹28,000', perDay: '₹77', savings: 'Pay ₹15.5K more' }
  ];

  // Coverage Scenarios
  const coverageScenarios = [
    {
      profile: 'Single Professional (25-30)',
      income: '₹8-12 Lakhs/year',
      coverage: '₹50 Lakhs - ₹1 Crore',
      premium: '₹6,000 - ₹10,000/year',
      why: 'Parents dependent, future marriage, home purchase planning'
    },
    {
      profile: 'Married without Kids (28-35)',
      income: '₹10-15 Lakhs/year',
      coverage: '₹75 Lakhs - ₹1.5 Crore',
      premium: '₹9,000 - ₹14,000/year',
      why: 'Spouse protection, home loan EMI, future child planning'
    },
    {
      profile: 'Young Family with Kids (30-40)',
      income: '₹12-20 Lakhs/year',
      coverage: '₹1 Crore - ₹2 Crore',
      premium: '₹10,000 - ₹18,000/year',
      why: 'Children education, home loan, spouse income replacement'
    },
    {
      profile: 'Single Earning Parent (35-50)',
      income: '₹15-30 Lakhs/year',
      coverage: '₹1.5 Crore - ₹3 Crore',
      premium: '₹15,000 - ₹35,000/year',
      why: 'Sole breadwinner, multiple dependents, high responsibility'
    }
  ];

  // Key Benefits
  const keyBenefits = [
    {
      title: 'Lowest Premium',
      description: '₹25/day (₹9,000/year) for ₹1 Crore coverage at age 30. Cheaper than your Netflix subscription!',
      icon: IndianRupee
    },
    {
      title: 'Tax Benefits',
      description: 'Save ₹46,500 tax (30% bracket) on ₹1.5L premium under Section 80C. Death benefit 100% tax-free.',
      icon: Percent
    },
    {
      title: 'Family Security',
      description: '₹1 Crore lump sum ensures family maintains lifestyle for 15-20 years without financial stress.',
      icon: Shield
    },
    {
      title: 'Loan Protection',
      description: 'Outstanding home/car/personal loans paid off immediately. Family doesn\'t lose assets.',
      icon: Building2
    },
    {
      title: 'Children\'s Future',
      description: 'Education, marriage, and life goals secured. Children don\'t compromise dreams.',
      icon: Baby
    },
    {
      title: 'Peace of Mind',
      description: 'Sleep peacefully knowing family is financially protected even in your absence.',
      icon: Heart
    }
  ];

  // Premium Calculat based on inputs
  const calculatePremium = () => {
    let basePremium = 9000; // Base for age 30, male, non-smoker

    const age = parseInt(calculatorInputs.age) || 30;
    const isSmoker = calculatorInputs.smokingStatus === 'yes';
    const isFemale = calculatorInputs.gender === 'female';

    // Age factor
    if (age <= 25) basePremium *= 0.75;
    else if (age <= 30) basePremium *= 1;
    else if (age <= 35) basePremium *= 1.35;
    else if (age <= 40) basePremium *= 2;
    else if (age <= 45) basePremium *= 3;
    else basePremium *= 4;

    // Gender factor (females get 10% discount)
    if (isFemale) basePremium *= 0.9;

    // Smoking factor
    if (isSmoker) basePremium *= 1.4;

    return Math.round(basePremium);
  };

  const estimatedPremium = calculatePremium();
  const perDayCost = Math.round(estimatedPremium / 365);

  // Eligibility Criteria
  const eligibilityCriteria = [
    {
      criteria: 'Age Limit',
      details: 'Entry: 18-65 years | Maturity: Up to 80-99 years',
      icon: Clock,
      important: 'Buy before 40 to get maximum term of 40 years'
    },
    {
      criteria: 'Income Proof',
      details: 'For coverage >₹50L: Latest salary slips, ITR, Form 16',
      icon: FileText,
      important: 'Self-employed need 3 years ITR for ₹1 Cr coverage'
    },
    {
      criteria: 'Medical Tests',
      details: 'Age <35 & coverage ₹1Cr: Usually no medical tests required',
      icon: Award,
      important: 'BMI 18-30, no pre-existing conditions = instant approval'
    },
    {
      criteria: 'Smoking Status',
      details: 'Non-smokers get 30-40% lower premium than smokers',
      icon: AlertTriangle,
      important: 'Don\'t hide tobacco use - claims can be rejected'
    }
  ];

  // What's Covered vs Not Covered
  const coveredDetails = {
    covered: [
      {
        title: 'Natural Death',
        description: 'Heart attack, stroke, organ failure, cancer, diabetes complications, COVID-19',
        icon: CheckCircle
      },
      {
        title: 'Accidental Death',
        description: 'Road accident, fall, drowning, fire, electrocution, animal attack',
        icon: CheckCircle
      },
      {
        title: 'Critical Illness Death',
        description: 'Death due to cancer, kidney failure, paralysis, major surgeries',
        icon: CheckCircle
      },
      {
        title: 'Suicide After 1 Year',
        description: 'Covered after 12 months from policy start date (premiums refunded if within 1 year)',
        icon: CheckCircle
      },
      {
        title: 'Lifestyle Diseases',
        description: 'Diabetes, hypertension, obesity-related deaths (if disclosed)',
        icon: CheckCircle
      },
      {
        title: 'Pandemic Deaths',
        description: 'COVID-19, future pandemics, epidemic diseases fully covered',
        icon: CheckCircle
      }
    ],
    notCovered: [
      {
        title: 'Suicide Within 1 Year',
        description: 'Only 80% of premiums paid refunded to nominee, no death benefit',
        icon: X
      },
      {
        title: 'Pre-existing Not Disclosed',
        description: 'Death from disease hidden during proposal within first 3 years',
        icon: X
      },
      {
        title: 'Self-Inflicted Injuries',
        description: 'Intentional harm, dangerous sports without rider, adventure activities',
        icon: X
      },
      {
        title: 'Criminal Activities',
        description: 'Death during crime, illegal activities, riots, terrorism (some policies)',
        icon: X
      },
      {
        title: 'Drug/Alcohol Abuse',
        description: 'Death due to intoxication, overdose, drug addiction',
        icon: X
      },
      {
        title: 'War/Nuclear Hazard',
        description: 'Death due to war, invasion, nuclear exposure (standard exclusion)',
        icon: X
      }
    ]
  };

  // Step-by-Step Buying Process
  const buyingProcess = [
    {
      step: '1',
      title: 'Choose Coverage Amount',
      description: 'Select ₹1 Crore based on income, loans, family needs. Use 15-20x annual income rule.',
      time: '2 minutes',
      icon: Target
    },
    {
      step: '2',
      title: 'Fill Personal Details',
      description: 'Basic info: Name, DOB, gender, contact, occupation, income, smoking status.',
      time: '3 minutes',
      icon: FileText
    },
    {
      step: '3',
      title: 'Medical Questions',
      description: 'Answer 10-15 health questions honestly. No medical tests if young & healthy.',
      time: '5 minutes',
      icon: Heart
    },
    {
      step: '4',
      title: 'Add Nominees',
      description: 'Add family members as beneficiaries with percentage allocation.',
      time: '2 minutes',
      icon: Users
    },
    {
      step: '5',
      title: 'Review & Pay',
      description: 'Review details, pay premium online via card/UPI/net banking.',
      time: '3 minutes',
      icon: IndianRupee
    },
    {
      step: '6',
      title: 'Get Instant Policy',
      description: 'Policy document emailed immediately. Coverage starts from payment date.',
      time: 'Instant',
      icon: BadgeCheck
    }
  ];

  // Real Life Claim Scenarios
  const claimScenarios = [
    {
      scenario: 'Young Father - Sudden Heart Attack',
      details: 'Age 35, 2 kids, home loan ₹60L. Died of heart attack.',
      claim: '₹1 Crore',
      usage: 'Home loan ₹60L paid off. ₹40L invested for children education & family expenses.',
      outcome: 'Family continued same lifestyle, kids completed engineering without loans',
      icon: Heart
    },
    {
      scenario: 'Software Engineer - Road Accident',
      details: 'Age 32, newly married, earning ₹15L/year. Fatal bike accident.',
      claim: '₹1 Crore',
      usage: 'Wife received full amount. ₹30L for parental care, ₹70L invested for retirement.',
      outcome: 'Widow financially independent, started business with corpus',
      icon: AlertTriangle
    },
    {
      scenario: 'Businessman - Cancer Death',
      details: 'Age 45, 3 children, business debts ₹40L. Cancer in stage 4.',
      claim: '₹1 Crore',
      usage: 'Business debts ₹40L cleared, ₹30L for children education, ₹30L family fund.',
      outcome: 'Business sold without debt burden, children education secured',
      icon: Target
    }
  ];

  // Tax Calculation Example
  const taxExample = {
    withoutInsurance: {
      income: '₹12,00,000',
      deductions: '₹1,50,000 (80C: PPF, ELSS)',
      taxableIncome: '₹10,50,000',
      tax: '₹1,87,500',
      inHand: '₹10,12,500'
    },
    withInsurance: {
      income: '₹12,00,000',
      deductions: '₹1,50,000 (80C) + ₹9,000 Term Premium',
      taxableIncome: '₹10,41,000',
      tax: '₹1,84,800',
      inHand: '₹10,06,200',
      netSaving: '₹2,700/year tax saved',
      coverage: '₹1 Crore life cover + Tax saving'
    }
  };

  // Common Mistakes to Avoid
  const commonMistakes = [
    {
      mistake: 'Hiding Smoking/Tobacco Use',
      impact: 'Claim rejection - Insurers check medical records',
      correct: 'Declare honestly. Pay 40% more premium but get claim approved.',
      icon: AlertTriangle
    },
    {
      mistake: 'Buying Insufficient Coverage',
      impact: '₹25L-50L coverage inadequate for family with loans & kids',
      correct: 'Buy minimum ₹1 Cr. Better over-insured than under-insured.',
      icon: TrendingDown
    },
    {
      mistake: 'Not Informing Family',
      impact: 'Family unaware of policy. Claim not filed, money lost.',
      correct: 'Tell spouse policy details, keep documents accessible.',
      icon: Users
    },
    {
      mistake: 'Waiting to Buy Later',
      impact: 'Age 25: ₹7.5K/year vs Age 40: ₹18K/year (₹10.5K more)',
      correct: 'Buy at youngest age. Lock low premium for 30-40 years.',
      icon: Clock
    },
    {
      mistake: 'Choosing Lowest Premium',
      impact: 'Low claim settlement ratio = family faces claim rejection',
      correct: 'Choose insurer with 98%+ CSR even if ₹1K more premium.',
      icon: Award
    }
  ];

  // Claim Process Detailed
  const claimProcessSteps = [
    {
      step: 'Intimation',
      timeline: 'Within 7 days of death',
      action: 'Call insurer helpline/submit online intimation form',
      documents: 'Policy number, death date, brief death reason',
      icon: Phone
    },
    {
      step: 'Document Submission',
      timeline: 'Within 30 days',
      action: 'Submit complete claim documents to nearest branch/email',
      documents: 'Death certificate, policy, claimant ID, medical records, FIR (if accident)',
      icon: FileText
    },
    {
      step: 'Claim Processing',
      timeline: '30-45 days',
      action: 'Insurer verifies documents, checks policy status, reviews medical history',
      documents: 'May request additional documents/clarifications',
      icon: FileCheck
    },
    {
      step: 'Investigation (if needed)',
      timeline: '30-90 days extra',
      action: 'Conducted if death within 3 years or suspicious circumstances',
      documents: 'Investigator meets family, doctors, employer',
      icon: AlertCircle
    },
    {
      step: 'Claim Approval',
      timeline: '7 days after decision',
      action: 'Claim approved and amount transferred to nominee bank account',
      documents: '₹1 Crore transferred via NEFT/RTGS, SMS confirmation sent',
      icon: BadgeCheck
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'Is ₹1 Crore term insurance enough for my family?',
      answer: '₹1 Crore is adequate for most middle-class families earning ₹8-15 lakhs annually. Calculation: Home Loan ₹50L + Children Education ₹30L + 10 years income replacement ₹50L + Emergency ₹20L = ₹1.5 Cr. So ₹1 Cr covers majority of needs. However, if you earn ₹20L+, have multiple children, or high loans, consider ₹1.5-2 Cr coverage. Better to be over-insured than under-insured - the premium difference is minimal (₹1 Cr = ₹9K vs ₹2 Cr = ₹15K, only ₹6K more for double coverage).'
    },
    {
      question: 'What happens if I die within the first year of buying the policy?',
      answer: 'Your family gets the FULL ₹1 Crore sum assured even if you die 1 day after policy start (except suicide within 1 year which is excluded). This is why term insurance is so valuable - pay ₹9,000 and get ₹1 Cr benefit immediately. The only exclusions are: (1) Suicide within first 12 months (only premiums refunded), (2) Death due to pre-existing conditions you didn\'t disclose, (3) Death due to illegal activities, drugs, alcohol abuse. For all natural deaths, accidents, illnesses - full ₹1 Cr paid within 30 days of claim approval.'
    },
    {
      question: 'Can I increase my coverage from ₹1 Crore to ₹2 Crore later?',
      answer: 'You CANNOT increase coverage in the same policy once purchased. Coverage is fixed. However, you can BUY AN ADDITIONAL new policy for ₹1 Cr more. Example: Have ₹1 Cr policy at age 30 (₹9K/year). At age 35, need more coverage. Buy NEW ₹1 Cr policy at age 35 (₹12K/year). Total: ₹2 Cr coverage (₹1Cr + ₹1Cr) for ₹21K/year combined. Many people do this as income and responsibilities increase. Better approach: Some insurers offer "Inbuilt Sum Assured Increase" rider - allows increasing coverage by 25-50% on life events (marriage, child birth) without medical tests up to age 45. Add this rider at purchase if available.'
    },
    {
      question: 'What is the claim settlement ratio and why does it matter?',
      answer: 'Claim Settlement Ratio (CSR) is the % of claims paid by insurer vs rejected. Example: If 100 claims filed, 98 paid = 98% CSR. WHY IT MATTERS: High CSR (97-99%) means insurer pays claims quickly and fairly. Your family won\'t face hassles during grief. Low CSR (85-90%) means insurer rejects many claims on technicalities. TOP INSURERS BY CSR: HDFC Life: 99.05%, Max Life: 99.51%, ICICI Prudential: 98.02%, Tata AIA: 98.31%, SBI Life: 97.48%, LIC: 97.79%. RECOMMENDATION: Choose insurers with 98%+ CSR. Even if premium is ₹500-1,000 higher, peace of mind is worth it. Also check "Individual Death Claim Settlement Ratio" specifically for term insurance (some insurers have high overall CSR but lower term insurance CSR).'
    },
    {
      question: 'Do I still need ₹1 Crore coverage if I have group insurance from employer?',
      answer: 'YES, absolutely! Employer group insurance is INSUFFICIENT as your primary life cover. Here\'s why: (1) LOW COVERAGE: Employer gives 3-5x salary. ₹12L salary = ₹36-60L coverage only. Not enough for ₹1 Cr family needs. (2) TEMPORARY: Ends when you leave job, get fired, or retire. Most deaths occur post-50s when you don\'t have job coverage. (3) NO PORTABILITY: Can\'t take it to next company. Gap between jobs = no coverage. (4) NO CONTROL: Employer can reduce/remove anytime. YOU should control your family\'s protection, not employer. RECOMMENDATION: Keep employer insurance as bonus, but buy personal ₹1 Cr term insurance separately. Combined protection: Employer ₹50L + Personal ₹1 Cr = ₹1.5 Cr total. If employer coverage ends, you still have ₹1 Cr personal coverage lifelong.'
    },
    {
      question: 'Should I buy term insurance online or through an agent?',
      answer: 'ONLINE is 20-30% cheaper and faster, but agent helps with claims. Comparison: ONLINE: ₹1 Cr for ₹9,000/year, instant issuance, no medical tests for young healthy, 24/7 purchase, lower commission so cheaper. AGENT: ₹1 Cr for ₹11,000-12,000/year, help with paperwork, claim assistance for family, personalized advice, relationship support. BEST APPROACH: Buy online to save 20-30% premium, BUT keep insurer helpline and policy documents accessible to family. Educate spouse on how to file claims (most insurers have very simple online claim process now). If you value hand-holding and don\'t mind paying ₹2-3K extra, go with trusted agent. If you\'re comfortable with online processes and want to save, buy online. MOST PEOPLE choose online for cost savings and use insurer\'s claim helpline when needed (which is very efficient nowadays).'
    },
    {
      question: 'Can women get lower premium on ₹1 Crore term insurance?',
      answer: 'YES! Women get 10-15% LOWER premium than men for same coverage. WHY? Women have higher life expectancy (70 years vs 67 years for men in India), lower mortality rates, fewer lifestyle diseases (smoking, alcohol), safer occupations on average. PREMIUM COMPARISON (₹1 Cr, Age 30, 30-year term): Male Non-Smoker: ₹10,500/year, Female Non-Smoker: ₹9,000/year (₹1,500 less), Savings: ₹1,500/year × 30 years = ₹45,000 lifetime savings. ADDITIONAL BENEFITS FOR WOMEN: Some insurers offer extra discounts for women, No medical tests up to ₹1 Cr coverage till age 40, Maternity-related death covered (unlike some old policies), Critical illness riders cheaper for women. MARRIED WOMEN: Should buy separate ₹50L-1Cr policy even if husband has coverage, Financial independence, Covers own income loss, Child care costs if mother dies. WORKING WOMEN: Calculate coverage as 15x annual income + loans + children costs, Example: ₹12L income = ₹1.5-2 Cr coverage needed. RECOMMENDATION: Women should NOT skip term insurance thinking husband has coverage. Every earning woman needs personal ₹50L-1Cr coverage.'
    },
    {
      question: 'What happens to my ₹1 Crore policy if I change jobs?',
      answer: 'NOTHING changes - your personal term insurance is COMPLETELY INDEPENDENT of your job. CONTINUES AS-IS: Coverage remains ₹1 Cr, Premium stays same, Policy term unchanged, All benefits intact, Claim process identical. EMPLOYER GROUP INSURANCE IS DIFFERENT: Ends when you leave company, Not portable to next employer, Only temporary coverage. YOUR TERM INSURANCE: Yours for lifetime (till age 99), Follows you across jobs, Remains active even if unemployed, Unaffected by career changes. WHAT YOU MUST DO: Keep paying premiums on time from any bank account (doesn\'t have to be salary account), Update contact details if you move cities, Inform nominee about policy details. WHAT YOU SHOULD NOT DO: Don\'t let policy lapse due to job change confusion, Don\'t assume company insurance is enough, Don\'t forget to pay premium during job transition. BEST PRACTICE: Set up auto-debit from savings account (not salary account), Keep 2-3 months premium in emergency fund, Inform HR that you have personal insurance (doesn\'t affect anything). REAL SCENARIO: You buy ₹1 Cr at age 30 with Company A (₹9K/year). Change to Company B at age 35, then Company C at age 40, freelance at age 45. Policy continues uninterrupted for all 30 years regardless of job changes. Your family gets ₹1 Cr even if death occurs during unemployment period.'
    },
    {
      question: 'Should I buy ₹1 Crore now or wait till I have major expenses?',
      answer: 'BUY NOW - Every year delay costs you ₹1,000-2,000 more premium FOREVER. AGE 25 vs AGE 35 (₹1 Cr, 30-year term): Age 25: ₹7,500/year × 30 years = ₹2.25L total, Age 35: ₹12,500/year × 30 years = ₹3.75L total, EXTRA COST: ₹1.5L paid more due to 10-year delay. AGE 30 vs AGE 40: Age 30: ₹9,000/year = ₹2.7L total, Age 40: ₹18,000/year = ₹5.4L total, EXTRA COST: ₹2.7L paid more due to 10-year delay! HEALTH DETERIORATION: Age 25-30: Most people healthy, instant approval, no medical tests. Age 35-40: Some develop diabetes, BP, weight issues. Medical tests needed, premium loaded 20-50%, may get rejected. Age 45+: Higher rejection rates, mandatory medical tests, expensive premiums. "I DON\'T HAVE MAJOR EXPENSES YET": That\'s WHY you should buy now! Parents dependent on you? They need ₹20-30L if you die. Planning marriage? Spouse will need ₹50L-1Cr. Future children? Lock low premium now for their future. Home loan coming? Get coverage before EMI burden. PREMIUM LOCK-IN BENEFIT: Buy at 25: Pay ₹7.5K/year FOREVER (even at age 50). Buy at 40: Pay ₹18K/year forever. You lock LOW premium for lifetime when you buy young. RECOMMENDATION: "Buy term insurance the day you get your first salary" is the golden rule. Even ₹25L-50L coverage now is better than waiting for ₹1 Cr later. You can always top-up with additional policy later as income increases.'
    },
    {
      question: 'What if I develop a disease after buying ₹1 Crore term insurance?',
      answer: 'YOUR COVERAGE CONTINUES NORMALLY - Disease developed AFTER policy purchase does not affect coverage or claims. FULLY PROTECTED: Get diabetes after policy: COVERED, Develop cancer after policy: COVERED, Heart disease after policy: COVERED, Any illness after policy start: COVERED. PREMIUM DOES NOT INCREASE: Your ₹9K/year premium stays ₹9K forever, Even if you get serious illness, premium unchanged, No loading, no extra charges. DEATH CLAIM PAID FULLY: Whether you die of that disease or anything else, Full ₹1 Crore paid to family, No deductions, no questions. WHY THIS IS HUGE BENEFIT: This is the power of term insurance - you lock in health status at purchase time. Example: Buy at 30 when healthy (₹9K/year). Develop diabetes at 35, cancer at 45, heart disease at 50. All FULLY COVERED. Die at 55 from heart attack: Family gets ₹1 Cr. If you tried to buy AFTER developing diabetes, you would pay ₹15K+/year OR get rejected. ONLY EXCLUSION: Pre-existing disease you HID during purchase and die within 3 years from it. If you honestly declared health at purchase, everything developed later is covered. RECOMMENDATION: This is why "buy term insurance young & healthy" is crucial advice. Your current good health = low premium locked forever. Even if health deteriorates later, you\'re fully protected. If you wait till you have disease, you may not get coverage at all.'
    },
    {
      question: 'Can NRIs buy ₹1 Crore term insurance from India?',
      answer: 'YES! NRIs can buy term insurance in India with special NRI-specific plans. ELIGIBILITY: Must be Indian citizen/OCI/PIO, Age 18-60 at entry, Can reside anywhere (USA, UAE, UK, Singapore, etc.), Need Indian address for correspondence. PREMIUM PAYMENT: Pay from NRE/NRO account in INR, Or international credit card, Or through family member in India. COVERAGE: Same ₹1 Crore available, Death anywhere in world covered, Claim paid in India to nominees. BENEFITS FOR NRIs: Cheaper than insurance in USA/UK (₹9K vs $500-800 = ₹40-65K/year), Tax-free under Indian tax laws, Protects India-based family, Can cover foreign income. CHALLENGES: Medical check-up may be required in foreign country (tie-up with local labs), Premium slightly higher than residents (10-20% extra), Some insurers don\'t offer NRI plans. TOP NRI-FRIENDLY INSURERS: HDFC Life Click 2 Protect NRI, ICICI Prudential iProtect Smart NRI, Max Life Online Term Plan Plus NRI. DOCUMENTS NEEDED: Passport, work visa/residence proof, Foreign address proof, Indian PAN card, Income proof (foreign employer letter). TAX IMPLICATIONS: In India: 80C deduction + tax-free death benefit, In residence country: Check local tax laws (USA: may be taxable, UAE: usually tax-free). CLAIM SETTLEMENT: Family in India files claim normally, Death certificate from foreign country accepted, Money paid in INR to Indian bank account. RECOMMENDATION: NRIs should have BOTH India term insurance (for India family) + local insurance (for foreign family). ₹1 Cr term in India = great financial protection for parents/spouse living in India.'
    }
  ];

  // Insurer Comparison Data
  const insurerComparison = [
    {
      name: 'HDFC Life',
      csr: '99.16%',
      premium: '₹10,890',
      features: 'Online discount, No medical tests up to ₹1Cr, Instant policy',
      rating: '★★★★★',
      settlement: '15-20 days'
    },
    {
      name: 'Max Life',
      csr: '99.51%',
      premium: '₹10,200',
      features: 'Highest CSR, Life stage increase, Return of premium option',
      rating: '★★★★★',
      settlement: '12-18 days'
    },
    {
      name: 'ICICI Prudential',
      csr: '98.34%',
      premium: '₹11,500',
      features: 'Instant policy, Flexible premium, Accidental death 2x',
      rating: '★★★★★',
      settlement: '18-25 days'
    },
    {
      name: 'Tata AIA',
      csr: '98.26%',
      premium: '₹11,800',
      features: 'CI cover included, Waiver of premium, Family income',
      rating: '★★★★★',
      settlement: '15-22 days'
    },
    {
      name: 'SBI Life',
      csr: '97.03%',
      premium: '₹12,200',
      features: 'Trusted brand, Wide network, Terminal illness advance',
      rating: '★★★★☆',
      settlement: '20-30 days'
    },
    {
      name: 'LIC',
      csr: '97.79%',
      premium: '₹13,500',
      features: 'Govt backed, Offline support, Rural presence',
      rating: '★★★★☆',
      settlement: '25-35 days'
    }
  ];

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
            Back
          </Button>
          <Button className="hidden sm:flex bg-gradient-to-r from-blue-500 to-purple-500 text-white font-thin hover:from-blue-600 hover:to-purple-600 h-10 px-5 rounded-xl">
            <Phone className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Talk to Expert
          </Button>
        </div>
      </header>

      {/* Hero with Form */}
      <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-black to-purple-500/10"></div>
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          {/* Centered Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-blue-500/40 mb-6 backdrop-blur-md">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" strokeWidth={1.5} />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-thin tracking-wide mb-6">
              ₹1 Crore Term Insurance
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-thin mb-4">
                Complete Family Protection at Just ₹25/day. Secure Your Family's Future.
              </p>
              <p className="text-white/50 text-sm sm:text-base font-thin mb-8">
                ₹1 Crore coverage covers home loan, children's education, income replacement - everything your family needs.
              </p>

              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 mb-12">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 text-sm">Only ₹{perDayCost}/day for ₹1 Crore protection</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="text-3xl text-white mb-1">₹25/day</div>
                  <div className="text-xs text-white/60">Premium Cost</div>
                </div>
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="text-3xl text-white mb-1">₹1 Cr</div>
                  <div className="text-xs text-white/60">Sum Assured</div>
                </div>
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="text-3xl text-white mb-1">98%+</div>
                  <div className="text-xs text-white/60">Claim Settlement</div>
                </div>
                <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="text-3xl text-white mb-1">Tax Free</div>
                  <div className="text-xs text-white/60">Death Benefit</div>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-white text-2xl sm:text-3xl font-thin mb-2">Get ₹1 Crore Coverage Instantly</h2>
                  <p className="text-white/60 text-sm sm:text-base font-thin">Fill details and secure your family in 2 minutes</p>
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
                    <label className="block text-white/70 text-sm font-thin mb-2">Date of Birth *</label>
                    <Input
                      type="date"
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-blue-500/50 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Annual Income *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none">
                      <option value="" className="bg-black">Select Income Range</option>
                      <option value="5-10" className="bg-black">₹5 - ₹10 Lakh</option>
                      <option value="10-15" className="bg-black">₹10 - ₹15 Lakh</option>
                      <option value="15-25" className="bg-black">₹15 - ₹25 Lakh</option>
                      <option value="25+" className="bg-black">₹25 Lakh+</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-thin px-8 py-6 text-base rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 mb-3">
                  <Shield className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  Get ₹1 Crore @ ₹{perDayCost}/day
                </Button>
                <p className="text-white/50 text-xs font-thin text-center">*Instant policy in 15 minutes</p>
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
            {['Why 1 Crore Coverage', 'Premium Calculator', 'Premium by Age', 'Eligibility Criteria', 'Coverage Details', 'Tax Benefits', 'Claim Process', 'Apply Now', 'FAQs'].map((item, idx) => (
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

      {/* Premium Calculator */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900/50 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Calculator className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">Calculate Your Premium</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-white mb-2">Get ₹1 Crore Coverage Premium</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-white/70 mb-2">Your Age</label>
                <Input
                  type="number"
                  value={calculatorInputs.age}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, age: e.target.value })}
                  className="bg-white/10 border-white/20 text-white h-12"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Annual Income (₹)</label>
                <Input
                  type="number"
                  value={calculatorInputs.annualIncome}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, annualIncome: e.target.value })}
                  className="bg-white/10 border-white/20 text-white h-12"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Gender</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCalculatorInputs({ ...calculatorInputs, gender: 'male' })}
                    className={`flex-1 py-3 px-4 rounded-xl border transition-all ${calculatorInputs.gender === 'male'
                      ? 'border-blue-500 bg-blue-500/20 text-white'
                      : 'border-white/20 bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setCalculatorInputs({ ...calculatorInputs, gender: 'female' })}
                    className={`flex-1 py-3 px-4 rounded-xl border transition-all ${calculatorInputs.gender === 'female'
                      ? 'border-blue-500 bg-blue-500/20 text-white'
                      : 'border-white/20 bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                  >
                    Female (10% discount)
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Smoking Status</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCalculatorInputs({ ...calculatorInputs, smokingStatus: 'no' })}
                    className={`flex-1 py-3 px-4 rounded-xl border transition-all ${calculatorInputs.smokingStatus === 'no'
                      ? 'border-blue-500 bg-blue-500/20 text-white'
                      : 'border-white/20 bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                  >
                    Non-Smoker
                  </button>
                  <button
                    onClick={() => setCalculatorInputs({ ...calculatorInputs, smokingStatus: 'yes' })}
                    className={`flex-1 py-3 px-4 rounded-xl border transition-all ${calculatorInputs.smokingStatus === 'yes'
                      ? 'border-blue-500 bg-blue-500/20 text-white'
                      : 'border-white/20 bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                  >
                    Smoker (+40%)
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm text-white/60 mb-1">Annual Premium</p>
                <p className="text-2xl text-blue-400">₹{estimatedPremium.toLocaleString('en-IN')}</p>
              </div>
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <p className="text-sm text-white/60 mb-1">Per Day Cost</p>
                <p className="text-2xl text-green-400">₹{perDayCost}</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <p className="text-sm text-white/60 mb-1">Coverage</p>
                <p className="text-2xl text-purple-400">₹1 Crore</p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white h-12 rounded-xl">
              Get ₹1 Crore Coverage Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why 1 Crore */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Why Your Family Needs ₹1 Crore</h2>
            <p className="text-white/60">Breakdown of how ₹1 Crore covers your family's complete financial needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {whyOneCrore.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-white mb-2">{item.title}</h3>
                    <div className="text-2xl text-blue-400 mb-2">{item.amount}</div>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5 text-center">
            <p className="text-white/70 mb-2">Total Family Financial Need</p>
            <p className="text-4xl text-green-400 mb-2">₹1.15 - ₹1.80 Crore</p>
            <p className="text-sm text-white/50">₹1 Crore term insurance covers 60-90% of your family's financial needs</p>
          </div>
        </div>
      </section>

      {/* Premium by Age */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">₹1 Crore Premium by Age</h2>
            <p className="text-white/60">Buy young to lock lower premiums for lifetime</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {premiumByAge.map((item, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${item.age === '30' ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5'
                }`}>
                <div className="text-sm text-white/50 mb-2">Age {item.age}</div>
                <div className="text-2xl text-white mb-1">{item.premium}</div>
                <div className="text-xs text-green-400 mb-3">{item.perDay}/day</div>
                <div className="text-xs text-white/40">{item.savings}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/50 text-sm mt-8">
            💡 Buying at 25 vs 45 saves ₹20,500/year (₹28K - ₹7.5K). Over 30 years = ₹6.15 Lakh savings!
          </p>
        </div>
      </section>

      {/* Coverage Scenarios */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">How Much Coverage Do You Need?</h2>
            <p className="text-white/60">Recommended coverage based on your life stage and income</p>
          </div>

          <div className="space-y-4">
            {coverageScenarios.map((scenario, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-white mb-1">{scenario.profile}</h3>
                    <p className="text-sm text-white/50">Income: {scenario.income}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Recommended Coverage</p>
                    <p className="text-lg text-blue-400">{scenario.coverage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Annual Premium</p>
                    <p className="text-lg text-green-400">{scenario.premium}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{scenario.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Key Benefits of ₹1 Crore Coverage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-black/40">
                <benefit.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section id="eligibility-criteria" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Who Can Buy ₹1 Crore Term Insurance?</h2>
            <p className="text-white/60">Eligibility requirements and important criteria</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibilityCriteria.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-white mb-2">{item.criteria}</h3>
                    <p className="text-sm text-white/70 mb-3">{item.details}</p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-400">{item.important}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered vs Not Covered */}
      <section id="coverage-details" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">What's Covered & What's Not</h2>
            <p className="text-white/60">Complete coverage and exclusion details</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Covered */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl text-white">Fully Covered ✓</h3>
              </div>
              {coveredDetails.covered.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Not Covered */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl text-white">Not Covered ✗</h3>
              </div>
              {coveredDetails.notCovered.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">How to Buy ₹1 Crore Term Insurance Online</h2>
            <p className="text-white/60">Complete process in just 15 minutes from home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyingProcess.map((item, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/50 transition-all">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <item.icon className="w-8 h-8 text-blue-400" />
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-green-500/20 bg-green-500/5 text-center">
            <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl text-white mb-2">Total Time: Just 15 Minutes</h3>
            <p className="text-white/60 mb-6">Get instant policy. Coverage starts immediately after payment.</p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white h-12 px-8 rounded-xl">
              Start 15-Minute Application →
            </Button>
          </div>
        </div>
      </section>

      {/* Real Life Claim Scenarios */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Real Life: How ₹1 Crore Saved Families</h2>
            <p className="text-white/60">Actual claim success stories from our customers</p>
          </div>

          <div className="space-y-6">
            {claimScenarios.map((scenario, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-black/40 hover:bg-black/60 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <scenario.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-2">{scenario.scenario}</h3>
                    <p className="text-sm text-white/60 mb-4">{scenario.details}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <p className="text-xs text-white/50 mb-1">Claim Amount</p>
                        <p className="text-2xl text-green-400">{scenario.claim}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 md:col-span-2">
                        <p className="text-xs text-white/50 mb-1">How Money Was Used</p>
                        <p className="text-sm text-white/70">{scenario.usage}</p>
                      </div>
                    </div>

                    <div className="mt-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <div className="flex items-start gap-2">
                        <ThumbsUp className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-purple-400"><strong>Outcome:</strong> {scenario.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits Detailed */}
      <section id="tax-benefits" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Tax Savings Calculation</h2>
            <p className="text-white/60">How ₹9,000 premium saves you ₹2,700 in taxes annually</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl text-white">Without Term Insurance</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60">Annual Income</span>
                  <span className="text-white">{taxExample.withoutInsurance.income}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60">80C Deductions</span>
                  <span className="text-white">{taxExample.withoutInsurance.deductions}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60">Taxable Income</span>
                  <span className="text-white">{taxExample.withoutInsurance.taxableIncome}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60">Tax Payable (30%)</span>
                  <span className="text-red-400 text-xl">{taxExample.withoutInsurance.tax}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">In-Hand Salary</span>
                  <span className="text-white text-xl">{taxExample.withoutInsurance.inHand}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl text-white">With ₹1 Cr Term Insurance</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60">Annual Income</span>
                  <span className="text-white">{taxExample.withInsurance.income}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60">80C + Premium</span>
                  <span className="text-white">{taxExample.withInsurance.deductions}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60">Taxable Income</span>
                  <span className="text-white">{taxExample.withInsurance.taxableIncome}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60">Tax Payable (30%)</span>
                  <span className="text-green-400 text-xl">{taxExample.withInsurance.tax}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white">In-Hand Salary</span>
                  <span className="text-white text-xl">{taxExample.withInsurance.inHand}</span>
                </div>
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30">
                  <p className="text-green-400 mb-2"><strong>{taxExample.withInsurance.netSaving}</strong></p>
                  <p className="text-xs text-white/60">{taxExample.withInsurance.coverage}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center">
            <Gift className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl text-white mb-2">₹1 Crore Coverage + Tax Savings = Double Benefit</h3>
            <p className="text-white/60">Pay ₹9,000, Save ₹2,700 tax = Effective cost only ₹6,300/year for ₹1 Cr protection!</p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">5 Common Mistakes to Avoid</h2>
            <p className="text-white/60">Don't make these costly errors when buying term insurance</p>
          </div>

          <div className="space-y-6">
            {commonMistakes.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5 hover:border-red-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs text-red-400 mb-2">❌ MISTAKE #{idx + 1}</p>
                        <h3 className="text-lg text-white mb-2">{item.mistake}</h3>
                      </div>
                      <div>
                        <p className="text-xs text-white/50 mb-2">Impact</p>
                        <p className="text-sm text-white/70">{item.impact}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <p className="text-xs text-green-400 mb-2">✓ CORRECT APPROACH</p>
                        <p className="text-sm text-white/70">{item.correct}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Process Detailed */}
      <section id="claim-process" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Complete Claim Filing Process</h2>
            <p className="text-white/60">Step-by-step guide for your family to claim ₹1 Crore</p>
          </div>

          <div className="space-y-4">
            {claimProcessSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx !== claimProcessSteps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                )}
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 relative z-10">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl text-white">{step.step}</h3>
                        <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-sm text-white/70 mb-3">{step.action}</p>
                      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <p className="text-xs text-blue-400"><strong>Documents:</strong> {step.documents}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5 text-center">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-2xl text-white mb-2">30-60 Days</h4>
              <p className="text-sm text-white/60">Average claim settlement time for natural death</p>
            </div>
            <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center">
              <BadgeCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-2xl text-white mb-2">98%+ Success</h4>
              <p className="text-sm text-white/60">Claim approval rate if all documents correct</p>
            </div>
            <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-center">
              <IndianRupee className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-2xl text-white mb-2">Tax-Free</h4>
              <p className="text-sm text-white/60">₹1 Crore paid 100% tax-free via NEFT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurer Comparison Table */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Compare Top ₹1 Crore Term Insurance Providers</h2>
            <p className="text-white/60">Choose insurer with highest claim settlement ratio for your family's security</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Insurer</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">CSR (2023)</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Annual Premium</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Key Features</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Settlement Time</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Rating</th>
                </tr>
              </thead>
              <tbody>
                {insurerComparison.map((insurer, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="px-6 py-4 text-white/80 font-thin">{insurer.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-thin ${parseFloat(insurer.csr) >= 99
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                        {insurer.csr}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/70 font-thin">{insurer.premium}</td>
                    <td className="px-6 py-4 text-white/60 font-thin text-sm">{insurer.features}</td>
                    <td className="px-6 py-4 text-white/60 font-thin text-sm">{insurer.settlement}</td>
                    <td className="px-6 py-4 text-yellow-400 font-thin">{insurer.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center">
            <Info className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl text-white mb-2">How to Choose Best Insurer?</h3>
            <p className="text-white/60 text-sm">Choose insurer with CSR above 98% + good settlement time. Don't choose based on premium alone - ₹500-1,000 extra is worth it for peace of mind.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">11 most important questions about ₹1 Crore term insurance answered</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-xl border border-white/10 bg-black/40 px-6"
              >
                <AccordionTrigger className="text-white hover:text-blue-400 text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">Secure ₹1 Crore for Your Family Today</h2>
          <p className="text-white/60 text-lg mb-8">
            Just ₹25/day. 2 minutes online application. Instant policy issuance.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white h-12 px-8 rounded-xl">
            Get ₹1 Crore Coverage @ ₹{perDayCost}/day
          </Button>
        </div>
      </section>
    </div>
  );
}
