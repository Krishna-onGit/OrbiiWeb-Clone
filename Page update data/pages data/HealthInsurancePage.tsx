import { ArrowLeft, Heart, Shield, TrendingUp, Stethoscope, Users, Activity, Plus, Calculator, Download, FileText, AlertCircle, CheckCircle, HelpCircle, DollarSign, Hourglass, BarChart3, Clock, PiggyBank, Smile, TrendingDown, UserCheck, Award, PhoneCall, BookOpen, Zap, Target, ChevronRight, Star, Building2, CreditCard, ClipboardCheck, FileCheck, Percent, IndianRupee, Calendar, Phone, Mail, MapPin, Briefcase, Baby, Home as HomeIcon, Plane, Ambulance, TestTube, Siren, Hospital, Pill, Eye, Glasses, Ear, BrainCircuit, HeartPulse, Laptop } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface HealthInsurancePageProps {
  onBack: () => void;
  onSelectProduct?: (productId: string) => void;
}

export default function HealthInsurancePage({ onBack, onSelectProduct }: HealthInsurancePageProps) {
  const [calculatorInputs, setCalculatorInputs] = useState({
    age: '',
    members: '',
    sumInsured: '500000',
    city: '',
    preExisting: 'no'
  });

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  // Comprehensive Health Insurance Types with detailed info
  const healthTypes = [
    {
      icon: Users,
      title: 'Individual Health Insurance',
      description: 'Dedicated coverage for one person with customized benefits tailored to personal health needs.',
      features: ['Personal sum insured', 'Age-specific benefits', 'No sharing of coverage', 'Lower premiums for young adults'],
      idealFor: 'Single individuals, working professionals, students',
      sumInsured: '₹5L - ₹1Cr',
      premium: '₹6,000 - ₹15,000/year'
    },
    {
      icon: Heart,
      title: 'Family Floater Plan',
      description: 'Single policy covering entire family with shared sum insured, offering cost-effective comprehensive protection.',
      features: ['Covers spouse & children', 'Shared sum insured', 'Cost-effective', 'Easy premium management'],
      idealFor: 'Nuclear families, married couples with children',
      sumInsured: '₹10L - ₹50L',
      premium: '₹12,000 - ₹30,000/year'
    },
    {
      icon: Activity,
      title: 'Senior Citizen Health Insurance',
      description: 'Specialized coverage for elderly (60+ years) with pre-existing disease coverage and enhanced medical benefits.',
      features: ['Pre-existing coverage', 'Higher claim limits', 'OPD benefits', 'Home healthcare'],
      idealFor: 'Parents above 60 years, retirees, elderly family members',
      sumInsured: '₹3L - ₹25L',
      premium: '₹18,000 - ₹50,000/year'
    },
    {
      icon: Shield,
      title: 'Critical Illness Insurance',
      description: 'Lump sum payout upon diagnosis of critical illnesses like cancer, heart attack, stroke, or kidney failure.',
      features: ['Lump sum benefit', 'Covers 30+ diseases', 'Use funds freely', 'Covers income loss'],
      idealFor: 'Anyone seeking financial security against serious illnesses',
      sumInsured: '₹5L - ₹1Cr',
      premium: '₹5,000 - ₹25,000/year'
    },
    {
      icon: TrendingUp,
      title: 'Super Top-up Plans',
      description: 'Additional coverage beyond base policy that activates after deductible is crossed, with significantly lower premiums.',
      features: ['Low premium', 'High coverage', 'After deductible', 'Multiple claims'],
      idealFor: 'Those with existing base insurance wanting extended coverage',
      sumInsured: '₹10L - ₹1Cr',
      premium: '₹3,000 - ₹12,000/year'
    },
    {
      icon: Stethoscope,
      title: 'Disease-Specific Plans',
      description: 'Focused coverage for specific conditions like diabetes, cancer, cardiac ailments with specialized treatment benefits.',
      features: ['Disease-focused', 'Immediate coverage', 'Specialized care', 'Lower premiums'],
      idealFor: 'Individuals with specific chronic conditions or family history',
      sumInsured: '₹2L - ₹50L',
      premium: '₹4,000 - ₹20,000/year'
    },
    {
      icon: Baby,
      title: 'Maternity Health Insurance',
      description: 'Coverage for pregnancy, childbirth, newborn care, pre and post-natal expenses with comprehensive maternity benefits.',
      features: ['Delivery expenses', 'Newborn coverage', 'Pre-natal care', 'Post-delivery care'],
      idealFor: 'Couples planning pregnancy, expecting mothers',
      sumInsured: '₹50K - ₹5L',
      premium: '₹8,000 - ₹18,000/year'
    },
    {
      icon: Briefcase,
      title: 'Group Health Insurance',
      description: 'Employer-provided coverage for employees and their families with corporate benefits and discounted premiums.',
      features: ['Employer-sponsored', 'Group benefits', 'Lower premiums', 'Easy enrollment'],
      idealFor: 'Employees, corporate workforce, business organizations',
      sumInsured: '₹2L - ₹10L',
      premium: 'Employer-paid or subsidized'
    },
    {
      icon: Plane,
      title: 'International Health Insurance',
      description: 'Global coverage for medical expenses incurred abroad, ideal for frequent travelers and expatriates.',
      features: ['Worldwide coverage', 'Emergency evacuation', 'Multi-currency', 'Global network'],
      idealFor: 'Frequent travelers, expats, international students',
      sumInsured: '₹25L - ₹2Cr',
      premium: '₹15,000 - ₹60,000/year'
    }
  ];

  // Extensive benefits list
  const comprehensiveBenefits = [
    {
      category: 'Hospitalization Benefits',
      icon: Hospital,
      benefits: [
        'Cashless hospitalization at 10,000+ network hospitals across India',
        'Room rent, ICU charges, and bed charges without capping',
        'Surgeon, anesthetist, medical practitioner fees covered',
        'Cost of medicines, drugs, and consumables during hospitalization',
        'Diagnostic and laboratory tests conducted during admission',
        'Blood, oxygen, operation theatre charges fully covered'
      ]
    },
    {
      category: 'Pre & Post Hospitalization',
      icon: Calendar,
      benefits: [
        'Pre-hospitalization expenses covered up to 30-60 days before admission',
        'Diagnostic tests, consultations, and medicines before hospitalization',
        'Post-hospitalization expenses covered up to 60-90 days after discharge',
        'Follow-up consultations, physiotherapy, and recovery medications',
        'Rehabilitation and post-surgery care expenses included',
        'Home nursing and medical equipment rental covered'
      ]
    },
    {
      category: 'Day Care & Modern Treatments',
      icon: Zap,
      benefits: [
        '500+ day-care procedures covered without 24-hour hospitalization',
        'Chemotherapy, dialysis, radiotherapy treatments included',
        'Cataract surgery, tonsillectomy, and minor surgeries covered',
        'Lithotripsy, endoscopy, colonoscopy procedures included',
        'Laser treatments and minimally invasive procedures',
        'Advanced robotic surgeries and modern medical technologies'
      ]
    },
    {
      category: 'Emergency Services',
      icon: Ambulance,
      benefits: [
        'Ambulance charges up to ₹2,000 per hospitalization',
        'Road ambulance and air ambulance in critical emergencies',
        '24/7 emergency helpline with medical assistance',
        'Emergency room and trauma care coverage',
        'Pre-hospital emergency medical expenses covered',
        'Inter-hospital transfer charges included'
      ]
    },
    {
      category: 'Health Check-ups & Wellness',
      icon: HeartPulse,
      benefits: [
        'Annual health check-ups worth ₹1,000 - ₹5,000 included',
        'Preventive health screening for early disease detection',
        'Comprehensive blood tests, ECG, and diagnostic panels',
        'Doctor consultations and health risk assessments',
        'Wellness programs and lifestyle management guidance',
        'Vaccinations and preventive care benefits'
      ]
    },
    {
      category: 'Organ Donor & Transplant',
      icon: HeartPulse,
      benefits: [
        'Organ transplant expenses up to sum insured',
        'Donor screening and harvesting expenses covered',
        'Post-transplant medications and immunosuppressants',
        'Lifetime follow-up and monitoring included',
        'Living donor expenses and hospitalization covered',
        'Organ retrieval and transportation charges'
      ]
    }
  ];

  // Popular Add-ons with detailed pricing
  const detailedAddOns = [
    {
      name: 'Critical Illness Cover',
      price: '₹1,200 - ₹5,000/year',
      icon: Shield,
      description: 'Lump sum payout on diagnosis of 30+ critical illnesses including cancer, heart attack, stroke, kidney failure',
      coverage: '₹5L - ₹50L',
      benefits: ['30+ illnesses covered', 'Lump sum payout', 'Use funds freely', 'Income replacement']
    },
    {
      name: 'Maternity & Newborn Cover',
      price: '₹3,500 - ₹8,000/year',
      icon: Baby,
      description: 'Complete pregnancy care including delivery, C-section, newborn expenses, vaccinations',
      coverage: '₹50K - ₹5L',
      benefits: ['Normal & C-section delivery', 'Newborn coverage', 'Pre-natal expenses', 'Vaccination coverage']
    },
    {
      name: 'Personal Accident Cover',
      price: '₹800 - ₹2,500/year',
      icon: AlertCircle,
      description: 'Accidental death, disability, and injury coverage with immediate payouts',
      coverage: '₹5L - ₹1Cr',
      benefits: ['Accidental death benefit', 'Permanent disability', 'Temporary disability', 'Medical expenses']
    },
    {
      name: 'OPD Cover (Outpatient)',
      price: '₹2,000 - ₹6,000/year',
      icon: Stethoscope,
      description: 'Doctor consultations, diagnostic tests, pharmacy bills without hospitalization',
      coverage: '₹10K - ₹50K annually',
      benefits: ['Doctor consultations', 'Diagnostic tests', 'Pharmacy bills', 'Dental & optical']
    },
    {
      name: 'Zero Waiting Period',
      price: '₹1,500 - ₹4,000/year',
      icon: Clock,
      description: 'Waive initial waiting periods for specific illnesses and procedures',
      coverage: 'Immediate coverage',
      benefits: ['No waiting period', 'Immediate claims', 'All procedures covered', 'Pre-existing after 2 years']
    },
    {
      name: 'International Coverage',
      price: '₹4,000 - ₹15,000/year',
      icon: Plane,
      description: 'Worldwide medical coverage for treatment abroad with emergency evacuation',
      coverage: 'Global network',
      benefits: ['Treatment abroad', 'Emergency evacuation', 'Repatriation', 'Global network hospitals']
    },
    {
      name: 'Restoration Benefit',
      price: '₹1,000 - ₹3,500/year',
      icon: TrendingUp,
      description: 'Automatic restoration of sum insured once exhausted during policy year',
      coverage: '100% sum insured',
      benefits: ['Restore coverage', 'Multiple claims', 'Separate limit', 'Family protection']
    },
    {
      name: 'Home Healthcare',
      price: '₹1,800 - ₹5,000/year',
      icon: HomeIcon,
      description: 'Medical treatment at home for eligible procedures with nursing care',
      coverage: '₹50K - ₹2L',
      benefits: ['Treatment at home', 'Nursing care', 'Doctor visits', 'Medical equipment']
    },
    {
      name: 'Alternative Treatment (AYUSH)',
      price: '₹800 - ₹2,000/year',
      icon: Pill,
      description: 'Coverage for Ayurveda, Yoga, Unani, Siddha, and Homeopathy treatments',
      coverage: '₹25K - ₹1L',
      benefits: ['AYUSH treatments', 'Alternative medicine', 'Holistic care', 'Wellness therapies']
    }
  ];

  // Comprehensive FAQs categorized
  const categorizedFAQs = [
    {
      category: 'Policy Basics',
      faqs: [
        {
          question: 'What is health insurance and why do I need it?',
          answer: 'Health insurance is a contract between you and an insurance company where you pay regular premiums in exchange for coverage of medical expenses. It\'s essential because: (1) Healthcare costs in India are rising at 14% annually, (2) A single hospitalization can cost ₹2-10 lakhs, depleting life savings, (3) It provides cashless treatment at network hospitals, (4) Covers pre and post-hospitalization expenses, (5) Offers tax benefits under Section 80D up to ₹75,000, (6) Protects your family\'s financial stability during medical emergencies. With medical inflation outpacing regular inflation by 3x, health insurance is no longer optional but necessary for every family.'
        },
        {
          question: 'What is the difference between individual and family floater plans?',
          answer: 'Individual Health Insurance covers only one person with a dedicated sum insured. Each family member needs a separate policy with individual premiums. Best for single individuals or when family members have varying health needs. Family Floater Plan covers entire family (spouse, children, sometimes parents) under single policy with shared sum insured. More cost-effective - one premium for whole family. However, if one member exhausts most of the sum insured, less remains for others. Ideal for young families with healthy members. Example: Individual - ₹5L coverage for self costs ₹8,000. For 4 members = ₹32,000. Family Floater - ₹20L coverage for 4 members costs ₹18,000-22,000.'
        },
        {
          question: 'What is sum insured and how much coverage do I need?',
          answer: 'Sum Insured is the maximum amount your insurance company will pay for your medical expenses in a policy year. Factors to consider: (1) City of residence - Metro cities need ₹10L+, Tier 2 cities ₹5L+, Tier 3 cities ₹3L+. (2) Family size - Larger families need higher coverage. (3) Age - Senior citizens need ₹5L+ minimum. (4) Medical history - Pre-existing conditions require ₹10L+. (5) Hospital preferences - Premium hospitals need higher coverage. General guidelines: Young individuals (18-30): ₹5-10L, Young families: ₹10-20L, Families with senior citizens: ₹15-30L, High-risk individuals: ₹25L+. Remember: It\'s better to have excess coverage than insufficient coverage during emergencies.'
        }
      ]
    },
    {
      category: 'Waiting Periods & Coverage',
      faqs: [
        {
          question: 'What are waiting periods in health insurance?',
          answer: 'Waiting periods are durations you must wait before making claims for certain conditions: (1) Initial Waiting Period: 30 days for all illnesses except accidents. No claims except emergencies. (2) Pre-Existing Disease Waiting Period: 2-4 years for conditions you had before buying policy like diabetes, hypertension, thyroid. (3) Specific Disease Waiting Period: 1-2 years for hernias, cataracts, kidney stones, sinusitis, joint replacements. (4) Maternity Waiting Period: 9-36 months for pregnancy-related expenses. You can reduce waiting periods by: (1) Buying "Zero Waiting Period" add-on (₹1,500-4,000/year), (2) Paying higher premiums, (3) Choosing policies with shorter waiting periods, (4) Porting from existing policy with waiting period credits.'
        },
        {
          question: 'Are pre-existing diseases covered in health insurance?',
          answer: 'Yes, pre-existing diseases ARE covered but after a mandatory waiting period of 2-4 years depending on the insurer and policy. Pre-existing diseases are medical conditions you had before buying the policy - like diabetes, hypertension, asthma, thyroid, heart disease, arthritis. You MUST declare all pre-existing conditions during purchase. Non-disclosure leads to claim rejection. After waiting period: (1) All treatments related to pre-existing condition are covered, (2) Medications, hospitalization, surgeries fully covered, (3) Lifetime renewability continues. Ways to get immediate coverage: (1) Pay higher premium for reduced waiting period, (2) Choose policies with 1-2 year waiting instead of 4 years, (3) Port from existing policy - accumulated waiting period credits transfer. Senior citizen plans often have lower waiting periods (2 years) and some offer coverage from day 1 for higher premiums.'
        },
        {
          question: 'What is not covered under health insurance?',
          answer: 'Common exclusions include: (1) Cosmetic surgeries - plastic surgery, botox, liposuction unless medically necessary after accident. (2) Dental treatment - unless resulting from accident requiring hospitalization. (3) Self-inflicted injuries, attempted suicide, substance abuse consequences. (4) Wars, riots, nuclear contamination related injuries. (5) Experimental treatments and stem cell therapy not approved by medical boards. (6) Infertility treatments, IVF, surrogacy (unless specific rider). (7) Routine health check-ups beyond annual limits. (8) External congenital diseases diagnosed after 90 days. (9) Non-allopathic treatments (unless AYUSH rider added). (10) Routine vaccinations except those specified. ALWAYS read policy document exclusions section carefully. Some exclusions can be covered by adding riders for additional premium.'
        }
      ]
    },
    {
      category: 'Claims Process',
      faqs: [
        {
          question: 'How does cashless hospitalization work?',
          answer: 'Cashless hospitalization allows you to get medical treatment without paying from your pocket. Step-by-step process: PLANNED HOSPITALIZATION: (1) Choose network hospital from insurer\'s list (check website/app). (2) Inform insurance company 48-72 hours before admission. (3) Fill pre-authorization form with treatment details. (4) Submit ID proof, policy copy, doctor\'s recommendation. (5) Insurance company approves within 2-6 hours. (6) Show health card/e-card at hospital insurance desk. (7) Hospital treats you and bills insurer directly. (8) You pay only non-covered items (co-pay, exclusions). EMERGENCY HOSPITALIZATION: (1) Admit to network hospital immediately. (2) Inform insurer within 24 hours. (3) Hospital sends pre-authorization. (4) Insurer approves within 1-2 hours. (5) Treatment proceeds cashless. TIP: Always carry health card, valid ID, policy copy. Keep insurer\'s 24/7 helpline number handy.'
        },
        {
          question: 'How do I file a reimbursement claim?',
          answer: 'Reimbursement claims are filed when you get treatment at non-network hospitals or emergency situations. Process: (1) INTIMATION: Inform insurance company within 24 hours of hospitalization via helpline, email, or app. Provide policy number, patient details, hospital name, reason for admission. (2) TREATMENT: Pay hospital bills yourself and collect ALL documents. (3) DOCUMENTATION: Discharge summary, all original bills, payment receipts, prescriptions, diagnostic reports, FIR (if accident), pharmacy bills, admission notes, doctor\'s certificate. (4) CLAIM FORM: Download claim form from website or collect from branch. Fill completely and accurately. Attach all original documents. (5) SUBMISSION: Submit via email, courier, app upload, or branch visit within 15-30 days of discharge. (6) PROCESSING: Insurer reviews documents, may ask for additional info, processes within 7-30 days. (7) PAYMENT: Approved amount transferred to bank account via NEFT. Claim may be partially approved if some expenses are non-covered or exceed reasonable limits.'
        },
        {
          question: 'How long does claim settlement take?',
          answer: 'Claim settlement timeline varies: CASHLESS CLAIMS: (1) Pre-authorization for planned surgery: 2-6 hours (non-emergency), (2) Emergency pre-authorization: 1-2 hours, (3) Final settlement: Immediate (hospital settles with insurer, you don\'t wait). REIMBURSEMENT CLAIMS: (1) Document submission deadline: Within 15-30 days of discharge, (2) Acknowledgment: 1-2 days after submission, (3) Document verification: 7-15 days, (4) Additional document requests: 3-5 days, (5) Claim processing: 15-30 days from complete documentation, (6) Payment: 2-3 days after approval via NEFT. As per IRDAI guidelines, insurers must settle claims within 30 days of receiving all documents. Delays happen due to: Incomplete documentation, Need for medical investigation, Suspected fraud, High claim amounts requiring multiple approvals. TIPS: Submit complete documents, respond quickly to queries, track claim status online, escalate to grievance cell if delayed beyond 30 days.'
        }
      ]
    },
    {
      category: 'Premium & Renewals',
      faqs: [
        {
          question: 'Why does health insurance premium increase every year?',
          answer: 'Health insurance premiums increase due to: (1) AGE: Premium increases as you age. Risk of illnesses increases with age, hence higher premium. Age bands: 18-25 (lowest), 26-35 (moderate), 36-45 (higher), 46-60 (high), 60+ (highest). (2) MEDICAL INFLATION: Healthcare costs rise 14-15% annually in India. Hospital charges, doctor fees, medicine costs, diagnostic test prices all increase. (3) CLAIM HISTORY: If you filed high claims in previous years, premium may increase at renewal. Insurers adjust pricing based on claims experience. (4) ZONE CHANGES: If you move from Tier 3 city to metro, premium increases due to higher hospital costs. (5) SUM INSURED INCREASE: Increasing coverage from ₹5L to ₹10L increases premium proportionally. (6) ADD-ONS: Adding riders like maternity, critical illness increases premium. HOW TO MANAGE: Buy young (lowest rates), choose long-term policies (locked rates), maintain good health (lower claims = discounts), compare insurers annually, increase deductible to lower premium.'
        },
        {
          question: 'What happens if I miss my renewal payment?',
          answer: 'Missing renewal has serious consequences: GRACE PERIOD (30 days): (1) Most insurers give 30-day grace period after expiry, (2) Policy remains active during grace period, (3) Claims during grace period are covered ONLY if you pay premium, (4) If you fall sick but don\'t pay, claim rejected. AFTER GRACE PERIOD: (1) Policy LAPSES - no coverage at all, (2) All accumulated benefits LOST - no claim bonus, waiting period credits, (3) Hospitalization during lapsed period = pay from pocket, (4) Cannot restart same policy - must buy NEW policy, (5) New waiting periods apply (30 days, 2-4 years pre-existing), (6) Age increased = higher premium, (7) May need fresh medical tests, (8) Pre-existing conditions may be excluded. REVIVAL OPTIONS (within 30-90 days): Some insurers allow late renewal with: Penalties, Fresh medical tests, Waiting periods restart, Higher premium. PREVENTION: Set reminders 30 days before expiry, enable auto-debit, opt for multi-year policies, keep bank account active.'
        },
        {
          question: 'Can I port my health insurance to another company?',
          answer: 'Yes! Portability allows you to switch insurers while retaining benefits. BENEFITS OF PORTING: (1) Keep accumulated no-claim bonus, (2) Waiting period credits transfer (if you\'ve completed 2 years, new insurer waives 2 years), (3) Pre-existing disease waiting period carries forward, (4) Better coverage or lower premium with new insurer, (5) Better claim settlement ratio, (6) Enhanced features or services. PORTABILITY PROCESS: (1) Apply 45-60 days BEFORE renewal date, (2) Fill portability proposal form with new insurer, (3) Provide existing policy copy and claim history, (4) New insurer requests details from old insurer, (5) May require medical tests depending on age and claims, (6) New insurer approves and issues ported policy, (7) Old policy gets cancelled automatically. IMPORTANT: (1) Cannot port during active claim, (2) Cannot port if policy lapsed, (3) Sum insured can be same or higher (not lower), (4) Premium may differ based on new insurer\'s rates, (5) Some benefits may not transfer (like specific riders). TIP: Compare multiple insurers, check claim settlement ratio, verify network hospitals before porting.'
        }
      ]
    },
    {
      category: 'Tax Benefits & Savings',
      faqs: [
        {
          question: 'What tax benefits do I get on health insurance?',
          answer: 'Section 80D of Income Tax Act provides deductions: FOR SELF, SPOUSE, CHILDREN: ₹25,000 deduction for premium paid (below 60 years), ₹50,000 deduction if any member is senior citizen (60+ years). FOR PARENTS: Additional ₹25,000 for parents\' premium (below 60 years), Additional ₹50,000 if parents are senior citizens (60+ years). MAXIMUM DEDUCTION: ₹25,000 (self) + ₹25,000 (parents) = ₹50,000 if no senior citizens, ₹50,000 (self if 60+) + ₹50,000 (parents 60+) = ₹1,00,000 maximum. PREVENTIVE HEALTH CHECK-UP: Additional ₹5,000 within the above limits (not over and above). EXAMPLE: If you\'re 35 years old, pay ₹15,000 premium for self and family, ₹30,000 for parents aged 65, Total deduction = ₹15,000 + ₹30,000 = ₹45,000, Tax saved (30% bracket) = ₹13,500. ADDITIONAL BENEFITS: Senior citizen medical expenses (non-insurance) up to ₹50,000, Payment must be via banking channels (cash not eligible), Deduction available for preventive check-ups up to ₹5,000.'
        }
      ]
    }
  ];

  // Network hospital statistics
  const networkStats = [
    { number: '10,000+', label: 'Network Hospitals', icon: Hospital },
    { number: '99.05%', label: 'Claim Settlement', icon: CheckCircle },
    { number: '1 Hour', label: 'Claim Approval', icon: Clock },
    { number: '2.7 Cr+', label: 'Customers Trust', icon: Users },
  ];

  // Claims rejection reasons
  const claimRejectionReasons = [
    {
      reason: 'Non-Disclosure of Pre-Existing Diseases',
      description: 'Hiding medical history during purchase leads to claim rejection. Always be honest about your health conditions.',
      prevention: 'Declare all pre-existing conditions accurately. Get medical reports before policy purchase.',
      icon: FileText
    },
    {
      reason: 'Claims During Waiting Period',
      description: 'Filing claims for specific illnesses during 1-4 year waiting period results in rejection.',
      prevention: 'Understand your policy waiting periods. Wait for the period to complete or buy zero waiting period add-on.',
      icon: Clock
    },
    {
      reason: 'Treatment Not Covered Under Policy',
      description: 'Cosmetic surgery, dental work, alternative treatments may not be covered unless specified.',
      prevention: 'Read policy document thoroughly. Add riders for dental, AYUSH, or specific treatments.',
      icon: AlertCircle
    },
    {
      reason: 'Incorrect or Incomplete Documentation',
      description: 'Missing bills, incomplete forms, or wrong information leads to claim delays and rejections.',
      prevention: 'Keep all original bills, prescriptions, diagnostic reports. Fill claim forms accurately.',
      icon: FileCheck
    },
    {
      reason: 'Late Intimation to Insurance Company',
      description: 'Not informing insurer within 24 hours of emergency hospitalization can lead to rejection.',
      prevention: 'Intimate insurance company immediately. Keep helpline number accessible at all times.',
      icon: Phone
    },
    {
      reason: 'Treatment at Non-Network Hospital Without Intimation',
      description: 'Getting cashless treatment at non-network hospital or not informing about emergency admission.',
      prevention: 'Prefer network hospitals for cashless. For emergencies, inform insurer within 24 hours.',
      icon: Building2
    }
  ];

  // Health insurance myths with detailed explanations
  const healthInsuranceMyths = [
    {
      myth: 'I am young and healthy, I don\'t need health insurance',
      reality: 'Lifestyle diseases like diabetes, hypertension, and thyroid are affecting people as young as 25-30. Medical emergencies don\'t come with warnings. Buying insurance young means: (1) Lowest premiums locked for life, (2) No waiting periods when you age, (3) Pre-existing conditions covered from day 1 if you buy young, (4) Accidents can happen to anyone at any age, (5) Building no-claim bonus early gives you extra coverage. Example: Premium at age 25 is ₹6,000 vs ₹18,000 at age 45 for same coverage.',
      stat: '73% of Indians between 30-45 have at least one lifestyle disease',
      icon: TrendingDown
    },
    {
      myth: 'Employer health insurance is sufficient',
      reality: 'Employer insurance has serious limitations: (1) Coverage ends when you change jobs or retire, (2) Typically ₹2-5 lakhs only - insufficient for major surgeries, (3) Cannot choose hospitals freely, (4) No coverage for parents usually, (5) Waiting periods restart if you need to buy personal policy later, (6) No control over policy terms. Personal insurance gives you: Freedom to choose, Lifetime coverage, Higher sum insured, Coverage continues even after retirement, Tax benefits under Section 80D.',
      stat: 'Average employer coverage is ₹3L vs recommended ₹10L+ for adequate protection',
      icon: Briefcase
    },
    {
      myth: 'Health insurance is too expensive',
      reality: 'Health insurance costs ₹15-20 per day (₹6,000/year) for ₹5 lakh coverage. One hospitalization without insurance costs ₹2-10 lakhs. Medical inflation at 14% means a surgery costing ₹5L today will cost ₹12.5L in 7 years. Insurance protects your savings. Tax benefits: Save ₹7,500-15,000 in taxes (30% bracket) on ₹25,000 premium. Cost of NOT having insurance: Depleted savings, loans with high interest, selling assets, compromising treatment quality. Investment perspective: ₹6,000 premium vs potential ₹5 lakh medical expense = 83x return on investment.',
      stat: '62% of Indians face financial crisis due to medical expenses without insurance',
      icon: DollarSign
    },
    {
      myth: 'All health insurance policies are the same',
      reality: 'Policies differ vastly in: (1) Claim Settlement Ratio - ranges from 85% to 99%, (2) Network Hospitals - 2,000 vs 10,000+ hospitals, (3) Waiting Periods - 2 years vs 4 years for pre-existing diseases, (4) Room Rent Capping - some have limits, others don\'t, (5) Coverage Scope - some exclude modern treatments, others include, (6) Customer Service - response time varies 1 hour to 24 hours, (7) Add-ons Available - maternity, OPD, international coverage options, (8) No-Claim Bonus - 10% to 50% increase. Always compare: premium, coverage features, exclusions, claim process, customer reviews.',
      stat: 'Claim settlement ratio varies from 85% to 99% across insurers',
      icon: FileCheck
    },
    {
      myth: 'Claiming insurance will lead to premium increase',
      reality: 'Filing legitimate claims does NOT increase your individual premium unfairly. Premium increases due to: Age progression, Overall medical inflation, Industry-wide claims experience. What you may lose: No-Claim Bonus (10-50% extra coverage) is lost if you claim. But that\'s what insurance is for! Don\'t avoid claiming when genuinely needed. NCB is a reward, not the main benefit. Reality check: If you need ₹3 lakh surgery, claim it. Don\'t pay from pocket to save ₹2,000 NCB. Insurance is meant to be used during medical emergencies. Choose insurers with lifetime renewal guarantee - they cannot reject renewal even after claims.',
      stat: 'IRDAI regulations prevent unfair premium hikes due to genuine claims',
      icon: TrendingUp
    },
    {
      myth: 'I can buy health insurance when I need it',
      reality: 'Major problems with this approach: (1) 30-DAY WAITING PERIOD: No coverage for first 30 days except accidents, (2) PRE-EXISTING DISEASES: 2-4 years waiting for conditions diagnosed before purchase, (3) SPECIFIC DISEASES: 1-2 years wait for hernias, cataracts, kidney stones, (4) MEDICAL TESTS: Older age requires extensive tests before approval, (5) HIGHER PREMIUMS: Premium doubles or triples with age, (6) REJECTION RISK: Bad health history may lead to rejection or exclusions. Real scenario: At 45, if diagnosed with diabetes, NO insurer will cover diabetes-related complications for 4 years. Existing condition becomes "pre-existing" and you pay from pocket. Buy health insurance TODAY when healthy, NOT tomorrow when sick.',
      stat: 'Pre-existing disease waiting period can be 2-4 years, leaving you vulnerable',
      icon: Clock
    }
  ];

  return (
    <div className="w-full max-w-full bg-black overflow-x-hidden min-h-screen">
      {/* Header with Back Button - Sticky */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="ghost"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-thin hover:bg-white/20 hover:border-white/30 transition-all duration-300 h-10 px-4 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Back to Home
          </Button>
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-gradient-to-r from-red-500 to-pink-500 text-white font-thin hover:from-red-600 hover:to-pink-600 transition-all duration-300 h-10 px-5 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <Phone className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Talk to Expert
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced */}
      <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          {/* Centered Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border-2 border-white/20 mb-6 backdrop-blur-md">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" strokeWidth={1.5} />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-thin tracking-wide mb-6">
              Health Insurance
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-thin mb-4">
                Comprehensive Medical Coverage for You and Your Family
              </p>
              <p className="text-white/50 text-sm sm:text-base font-thin mb-8">
                Cashless hospitalization at 10,000+ network hospitals • Lifetime renewability • Tax benefits up to ₹75,000
              </p>

              {/* Quick Stats */}
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
                  <h2 className="text-white text-2xl sm:text-3xl font-thin mb-2">Get Your Health Insurance Quote</h2>
                  <p className="text-white/60 text-sm sm:text-base font-thin">Fill details and get instant premium estimates from top insurers</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-red-500/50 focus:ring-red-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Mobile Number *</label>
                    <Input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-red-500/50 focus:ring-red-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Gender *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 outline-none">
                      <option value="" className="bg-black">Select Gender</option>
                      <option value="male" className="bg-black">Male</option>
                      <option value="female" className="bg-black">Female</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Family Members</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 outline-none">
                      <option value="" className="bg-black">Select Members</option>
                      <option value="self" className="bg-black">Self Only</option>
                      <option value="self-spouse" className="bg-black">Self + Spouse</option>
                      <option value="self-spouse-1child" className="bg-black">Self + Spouse + 1 Child</option>
                      <option value="self-spouse-2child" className="bg-black">Self + Spouse + 2 Children</option>
                      <option value="parents" className="bg-black">Parents</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-thin px-8 py-6 text-base rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300 mb-3">
                  <Heart className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  Get Your Policy Now
                </Button>
                <p className="text-white/50 text-xs font-thin text-center">*Cashless treatment at 15,000+ hospitals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 space-y-16 sm:space-y-20">

        {/* Table of Contents - Quick Navigation */}
        <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
          <h2 className="text-white font-thin mb-4 text-center">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {['What is Health Insurance', 'Why You Need It', 'Types of Plans', 'Benefits & Coverage', 'Add-ons', 'How to Choose', 'Claims Process', 'Premium Calculator', 'FAQs'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-thin hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </section>

        {/* What is Health Insurance - Comprehensive */}
        <section id="what-is-health-insurance" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">What is Health Insurance?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md">
              <BookOpen className="w-10 h-10 text-red-400 mb-4" strokeWidth={1.5} />
              <h3 className="text-white text-xl font-thin mb-4">Definition & Concept</h3>
              <p className="text-white/70 font-thin leading-relaxed mb-4">
                Health insurance is a legal contract between you (the policyholder) and an insurance company where you pay regular premiums in exchange for financial protection against medical expenses. The insurance company agrees to cover your hospitalization costs, surgical procedures, diagnostic tests, and in many cases, outpatient treatments up to the sum insured amount.
              </p>
              <p className="text-white/70 font-thin leading-relaxed">
                In simple terms: You pay a small amount regularly (₹500-2,000/month), and the insurance company pays large medical bills (₹2-10 lakhs or more) when you need hospitalization or treatment.
              </p>
            </div>

            <div className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md">
              <Target className="w-10 h-10 text-pink-400 mb-4" strokeWidth={1.5} />
              <h3 className="text-white text-xl font-thin mb-4">How It Works</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-thin text-sm">Step 1: Buy Policy</p>
                    <p className="text-white/60 font-thin text-xs">Choose coverage amount and pay annual/monthly premium</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-thin text-sm">Step 2: Medical Emergency</p>
                    <p className="text-white/60 font-thin text-xs">When hospitalized, inform insurance company immediately</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-thin text-sm">Step 3: Cashless or Reimbursement</p>
                    <p className="text-white/60 font-thin text-xs">Get cashless treatment or pay and claim reimbursement</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-thin text-sm">Step 4: Insurance Pays</p>
                    <p className="text-white/60 font-thin text-xs">Company settles medical bills up to policy limit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { term: 'Premium', definition: 'Amount you pay annually/monthly to keep policy active', icon: IndianRupee },
              { term: 'Sum Insured', definition: 'Maximum amount insurer will pay for medical expenses per year', icon: Shield },
              { term: 'Deductible', definition: 'Amount you pay before insurance starts covering (in some policies)', icon: Percent },
              { term: 'Co-payment', definition: 'Percentage of bill you pay (10-20%), insurer pays rest', icon: CreditCard }
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300 text-center">
                <item.icon className="w-8 h-8 text-red-400 mx-auto mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-thin mb-2">{item.term}</h4>
                <p className="text-white/60 font-thin text-xs leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why You Need Health Insurance - Extensive with Stats */}
        <section id="why-you-need-it" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">Why Do You Need Health Insurance?</h2>
          </div>

          <div className="relative rounded-2xl border border-red-500/30 p-6 sm:p-8 backdrop-blur-md mb-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-red-400 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-white text-xl font-thin mb-2">The Hard Truth About Healthcare Costs in India</h3>
                <p className="text-white/70 font-thin leading-relaxed">
                  Medical inflation in India is at 14% annually—three times higher than regular inflation. A hospitalization that costs ₹2 lakhs today will cost ₹5 lakhs in just 7 years. Without insurance, one medical emergency can wipe out years of savings and push families into debt.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-thin text-red-400 mb-1">14%</div>
                <div className="text-white/60 font-thin text-xs">Annual Medical Inflation</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-thin text-red-400 mb-1">62%</div>
                <div className="text-white/60 font-thin text-xs">Indians Face Financial Crisis</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-thin text-red-400 mb-1">₹10,000+</div>
                <div className="text-white/60 font-thin text-xs">Daily Hospital Room Cost</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Hourglass,
                title: 'Protect Your Life Savings',
                description: 'A single cardiac surgery costs ₹4-8 lakhs. Cancer treatment can exceed ₹15-25 lakhs over 2-3 years. Without insurance, you\'ll drain your savings, retirement funds, children\'s education corpus, and still might need loans.',
                stats: ['Cardiac surgery: ₹4-8L', 'Cancer treatment: ₹15-25L', 'Kidney transplant: ₹8-15L'],
                color: 'red'
              },
              {
                icon: BarChart3,
                title: 'Combat Rising Medical Costs',
                description: 'Private hospital room rent is ₹10,000-30,000 per day. ICU costs ₹15,000-50,000 daily. Diagnostic tests, medicines, doctor fees add up quickly. Medical inflation grows 3x faster than regular inflation.',
                stats: ['Room rent: ₹10-30K/day', 'ICU: ₹15-50K/day', 'Inflation: 14% annually'],
                color: 'pink'
              },
              {
                icon: Heart,
                title: 'Chronic Disease Management',
                description: 'Diabetes, hypertension, thyroid require lifelong medication and monitoring. Annual costs: ₹50,000-2 lakhs. With insurance, all hospitalizations, complications, and related surgeries are covered.',
                stats: ['73% Indians have 1+ chronic disease', 'Annual cost: ₹50K-2L', 'Lifetime renewability'],
                color: 'red'
              },
              {
                icon: Clock,
                title: 'Immediate Medical Access',
                description: 'Cashless hospitalization at 10,000+ network hospitals means zero delay in treatment. No need to arrange funds urgently. No selling of assets or taking high-interest loans. Treatment starts immediately.',
                stats: ['10,000+ hospitals', 'Zero financial delay', '1-hour approval'],
                color: 'pink'
              },
              {
                icon: PiggyBank,
                title: 'Tax Savings Under 80D',
                description: 'Save ₹7,500-30,000 annually in taxes. ₹25,000 deduction for self/family, ₹50,000 for parents 60+. Maximum ₹1 lakh deduction possible. Premium becomes cheaper after tax benefits.',
                stats: ['Upto ₹1L deduction', 'Save ₹7.5K-30K in taxes', '30% tax bracket benefit'],
                color: 'yellow'
              },
              {
                icon: Smile,
                title: 'Complete Peace of Mind',
                description: 'Live worry-free knowing you and loved ones are protected. Focus on recovery, not finances. No stress about hospital bills during medical emergencies. Family\'s financial future is secure.',
                stats: ['Mental peace', 'Family security', 'Focus on health'],
                color: 'green'
              },
              {
                icon: Users,
                title: 'Family Protection',
                description: 'One family floater policy covers spouse, children, and sometimes parents. Shared sum insured keeps costs low. All members get comprehensive coverage under single premium.',
                stats: ['Cover 4-6 members', 'Shared coverage', 'Cost-effective'],
                color: 'red'
              },
              {
                icon: Target,
                title: 'Pre & Post Hospitalization',
                description: 'Insurance covers 30-60 days before and 60-90 days after hospitalization. Diagnostic tests, consultations, medicines, follow-ups, physiotherapy—all covered. Complete treatment cycle protected.',
                stats: ['30-60 days pre', '60-90 days post', 'Full treatment cycle'],
                color: 'pink'
              },
              {
                icon: Zap,
                title: 'Modern Treatment Coverage',
                description: '500+ day-care procedures, robotic surgeries, organ transplants, advanced chemotherapy—all covered. No need to compromise on treatment quality due to financial constraints.',
                stats: ['500+ procedures', 'Robotic surgery', 'Organ transplant'],
                color: 'red'
              }
            ].map((item, idx) => (
              <article key={idx} className="relative rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 border border-${item.color}-500/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-10 h-10 text-${item.color}-400`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-thin mb-3 text-lg">{item.title}</h3>
                  <p className="text-white/60 font-thin text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
                  <div className="w-full space-y-1 pt-3 border-t border-white/10">
                    {item.stats.map((stat, statIdx) => (
                      <div key={statIdx} className="flex items-center gap-2 justify-center">
                        <ChevronRight className="w-3 h-3 text-red-400" strokeWidth={2} />
                        <span className="text-white/50 font-thin text-xs">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Real Cost Examples */}
          <div className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md">
            <h3 className="text-white text-xl font-thin mb-6 text-center">Real Cost of Common Medical Procedures in India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { procedure: 'Appendicitis Surgery', cost: '₹50,000 - ₹1,50,000', icon: Hospital },
                { procedure: 'Normal Delivery', cost: '₹30,000 - ₹1,00,000', icon: Baby },
                { procedure: 'C-Section Delivery', cost: '₹60,000 - ₹2,00,000', icon: Baby },
                { procedure: 'Angioplasty', cost: '₹2,00,000 - ₹5,00,000', icon: HeartPulse },
                { procedure: 'Bypass Surgery', cost: '₹3,50,000 - ₹8,00,000', icon: HeartPulse },
                { procedure: 'Kidney Stone Removal', cost: '₹80,000 - ₹2,50,000', icon: Hospital },
                { procedure: 'Chemotherapy (per cycle)', cost: '₹1,00,000 - ₹3,00,000', icon: Pill },
                { procedure: 'Knee Replacement', cost: '₹2,00,000 - ₹6,00,000', icon: Hospital },
                { procedure: 'Cataract Surgery', cost: '₹30,000 - ₹80,000', icon: Eye }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-red-400 mt-1 shrink-0" strokeWidth={1.5} />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-thin text-sm mb-1">{item.procedure}</p>
                    <p className="text-red-400 font-thin text-xs">{item.cost}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
              <p className="text-white/70 font-thin text-sm">
                <strong className="text-white">Without insurance:</strong> You pay 100% from your pocket.
                <strong className="text-white ml-2">With insurance:</strong> You pay ₹0 (cashless) or claim full reimbursement.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner - Digit Insurance */}
        <section className="relative rounded-2xl overflow-hidden border border-yellow-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-pink-500/20"></div>
          <div className="relative z-10 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-white text-2xl sm:text-3xl font-thin mb-3">
                DO THE DIGIT INSURANCE
              </h3>
              <p className="text-yellow-400 font-thin text-lg mb-2">
                Trusted by 2.7 Crore Indians
              </p>
              <p className="text-white/60 font-thin text-sm">
                99.05% Claim Settlement • 10,000+ Network Hospitals • 1 Hour Approval
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                {[Shield, Award, Star, Heart].map((Icon, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-thin hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)]">
                GET INSTANT QUOTE
              </Button>
            </div>
          </div>
        </section>

        {/* I Don't Need Health Insurance - Myth Busting */}
        <section id="myths-debunked" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">"I Don't Need Health Insurance" - Let's Bust This Myth</h2>
          </div>

          <div className="space-y-6">
            {healthInsuranceMyths.map((item, idx) => (
              <article key={idx} className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md hover:border-red-500/30 transition-all duration-300">
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-red-500/20 border border-red-500/30">
                        <AlertCircle className="w-5 h-5 text-red-400" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="text-red-400 font-thin text-xs mb-2">MYTH</div>
                        <h3 className="text-white/90 font-thin italic text-lg">"{item.myth}"</h3>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-red-400" strokeWidth={1.5} />
                        <span className="text-red-400 font-thin text-xs">STATISTICS</span>
                      </div>
                      <p className="text-white/70 font-thin text-sm">{item.stat}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                        <CheckCircle className="w-5 h-5 text-green-400" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="text-green-400 font-thin text-xs mb-2">REALITY</div>
                        <p className="text-white/80 font-thin leading-relaxed">{item.reality}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Types of Health Insurance - Comprehensive */}
        <section id="types-of-plans" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">Types of Health Insurance Plans</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {healthTypes.map((type, idx) => (
              <article key={idx} className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-white/5 backdrop-blur-md hover:border-red-500/30 transition-all duration-500 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-red-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30">
                      <type.icon className="w-10 h-10 text-red-400" strokeWidth={1.5} />
                    </div>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 font-thin">
                      {type.premium}
                    </Badge>
                  </div>

                  <h3 className="text-white text-xl font-thin mb-2">{type.title}</h3>
                  <p className="text-white/60 font-thin text-sm leading-relaxed mb-4">{type.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-pink-400" strokeWidth={1.5} />
                      <span className="text-white/50 font-thin text-xs">Ideal for: </span>
                      <span className="text-white/70 font-thin text-xs">{type.idealFor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-green-400" strokeWidth={1.5} />
                      <span className="text-white/50 font-thin text-xs">Sum Insured: </span>
                      <span className="text-white/70 font-thin text-xs">{type.sumInsured}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white/70 font-thin text-xs mb-2">Key Features:</h4>
                    {type.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                        <span className="text-white/60 font-thin text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-white font-thin hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-300 h-10 rounded-xl">
                    Explore Plan <ChevronRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Comprehensive Benefits & Coverage */}
        <section id="benefits-&-coverage" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">Comprehensive Benefits & Coverage</h2>
          </div>

          <div className="space-y-6">
            {comprehensiveBenefits.map((category, idx) => (
              <div key={idx} className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30">
                    <category.icon className="w-6 h-6 text-red-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white text-xl font-thin">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <p className="text-white/70 font-thin text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Optional Add-ons - Detailed */}
        <section id="add-ons" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">Enhance Your Coverage with Add-ons</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedAddOns.map((addon, idx) => (
              <article key={idx} className="relative rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-red-500/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                    <addon.icon className="w-6 h-6 text-red-400" strokeWidth={1.5} />
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 font-thin text-xs">
                    {addon.price}
                  </Badge>
                </div>

                <h3 className="text-white font-thin text-lg mb-2">{addon.name}</h3>
                <p className="text-white/60 font-thin text-xs leading-relaxed mb-4">{addon.description}</p>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-4">
                  <div className="text-white/50 font-thin text-xs mb-1">Coverage</div>
                  <div className="text-white font-thin text-sm">{addon.coverage}</div>
                </div>

                <div className="space-y-2">
                  {addon.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-1 shrink-0" strokeWidth={2} />
                      <span className="text-white/60 font-thin text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4 bg-white/10 border border-white/20 text-white font-thin hover:bg-white/20 hover:border-white/30 transition-all duration-300 h-9 rounded-lg text-xs">
                  Add to Plan
                </Button>
              </article>
            ))}
          </div>
        </section>

        {/* Premium Calculator - Interactive */}
        <section id="premium-calculator" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">Calculate Your Premium</h2>
          </div>

          <div className="relative rounded-2xl border border-white/10 p-8 sm:p-10 bg-gradient-to-br from-red-500/5 via-black to-pink-500/5 backdrop-blur-md">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="calc-age" className="text-white/70 font-thin text-sm mb-2 block">Your Age</label>
                  <Input
                    id="calc-age"
                    type="number"
                    placeholder="Enter your age"
                    value={calculatorInputs.age}
                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, age: e.target.value })}
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 font-thin h-14 focus:bg-white/15 focus:border-white/40 transition-all duration-300 rounded-xl w-full"
                  />
                </div>
                <div>
                  <label htmlFor="calc-members" className="text-white/70 font-thin text-sm mb-2 block">Number of Family Members</label>
                  <Input
                    id="calc-members"
                    type="number"
                    placeholder="Including yourself"
                    value={calculatorInputs.members}
                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, members: e.target.value })}
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 font-thin h-14 focus:bg-white/15 focus:border-white/40 transition-all duration-300 rounded-xl w-full"
                  />
                </div>
                <div>
                  <label htmlFor="calc-sum" className="text-white/70 font-thin text-sm mb-2 block">Sum Insured</label>
                  <select
                    id="calc-sum"
                    value={calculatorInputs.sumInsured}
                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, sumInsured: e.target.value })}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-thin h-14 focus:bg-white/15 focus:border-white/40 transition-all duration-300 rounded-xl w-full px-4"
                  >
                    <option value="300000" className="bg-black">₹3 Lakhs</option>
                    <option value="500000" className="bg-black">₹5 Lakhs</option>
                    <option value="1000000" className="bg-black">₹10 Lakhs</option>
                    <option value="1500000" className="bg-black">₹15 Lakhs</option>
                    <option value="2000000" className="bg-black">₹20 Lakhs</option>
                    <option value="5000000" className="bg-black">₹50 Lakhs</option>
                    <option value="10000000" className="bg-black">₹1 Crore</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="calc-city" className="text-white/70 font-thin text-sm mb-2 block">City</label>
                  <Input
                    id="calc-city"
                    type="text"
                    placeholder="Enter your city"
                    value={calculatorInputs.city}
                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, city: e.target.value })}
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 font-thin h-14 focus:bg-white/15 focus:border-white/40 transition-all duration-300 rounded-xl w-full"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="text-white/70 font-thin text-sm mb-3 block">Any Pre-Existing Diseases?</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCalculatorInputs({ ...calculatorInputs, preExisting: 'no' })}
                    className={`flex-1 p-4 rounded-xl border transition-all duration-300 ${calculatorInputs.preExisting === 'no'
                        ? 'bg-green-500/20 border-green-500/40 text-green-400'
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                      }`}
                  >
                    <CheckCircle className="w-5 h-5 mx-auto mb-2" strokeWidth={1.5} />
                    <span className="font-thin text-sm">No Pre-Existing</span>
                  </button>
                  <button
                    onClick={() => setCalculatorInputs({ ...calculatorInputs, preExisting: 'yes' })}
                    className={`flex-1 p-4 rounded-xl border transition-all duration-300 ${calculatorInputs.preExisting === 'yes'
                        ? 'bg-orange-500/20 border-orange-500/40 text-orange-400'
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                      }`}
                  >
                    <AlertCircle className="w-5 h-5 mx-auto mb-2" strokeWidth={1.5} />
                    <span className="font-thin text-sm">Have Pre-Existing</span>
                  </button>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-thin hover:from-red-600 hover:to-pink-600 transition-all duration-300 h-16 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] text-lg"
              >
                <Calculator className="w-5 h-5 mr-3" strokeWidth={1.5} />
                Calculate Premium & View Plans
              </Button>

              <div className="mt-6 text-center">
                <p className="text-white/50 font-thin text-xs">
                  Get instant quotes from 20+ insurers • Compare plans • Buy online in 5 minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Claim Process - Detailed Step by Step */}
        <section id="claims-process" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">How to File & Track Claims</h2>
          </div>

          <Tabs defaultValue="cashless" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-xl">
              <TabsTrigger value="cashless" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-thin rounded-lg">
                Cashless Claims
              </TabsTrigger>
              <TabsTrigger value="reimbursement" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-thin rounded-lg">
                Reimbursement Claims
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cashless" className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-white/5 backdrop-blur-md">
                  <h3 className="text-white font-thin mb-6 flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5 text-green-400" strokeWidth={1.5} />
                    Planned Hospitalization
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: '1', title: 'Choose Network Hospital', desc: 'Check insurer website/app for list of 10,000+ cashless hospitals near you' },
                      { step: '2', title: 'Inform Insurer 48-72 hrs Before', desc: 'Call helpline or fill online pre-authorization form with treatment details' },
                      { step: '3', title: 'Submit Documents', desc: 'Policy copy, ID proof, doctor recommendation, diagnostic reports' },
                      { step: '4', title: 'Get Approval (2-6 hours)', desc: 'Insurance company reviews and approves estimated treatment cost' },
                      { step: '5', title: 'Show Health Card at Admission', desc: 'Present health card/e-card at hospital insurance desk' },
                      { step: '6', title: 'Receive Treatment', desc: 'Hospital treats you and bills insurance company directly' },
                      { step: '7', title: 'Pay Only Non-Covered Items', desc: 'You pay co-payment (if any) and excluded items only' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/30 border border-green-500/40 flex items-center justify-center">
                          <span className="text-white font-thin text-sm">{item.step}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-thin mb-1 text-sm">{item.title}</h4>
                          <p className="text-white/60 font-thin text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-white/5 backdrop-blur-md">
                  <h3 className="text-white font-thin mb-6 flex items-center gap-2 text-lg">
                    <Siren className="w-5 h-5 text-red-400" strokeWidth={1.5} />
                    Emergency Hospitalization
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: '1', title: 'Admit to Network Hospital', desc: 'Get immediate admission at nearest network hospital for emergency' },
                      { step: '2', title: 'Inform Within 24 Hours', desc: 'Call 24/7 helpline immediately or within 24 hours of admission' },
                      { step: '3', title: 'Hospital Sends Pre-Auth', desc: 'Hospital insurance desk sends emergency pre-authorization request' },
                      { step: '4', title: 'Quick Approval (1-2 hours)', desc: 'Insurance company approves emergency treatment on priority' },
                      { step: '5', title: 'Treatment Proceeds Cashless', desc: 'Focus on patient recovery while hospital coordinates with insurer' },
                      { step: '6', title: 'Submit Docs Post-Discharge', desc: 'Provide required documents after patient stabilizes' },
                      { step: '7', title: 'Final Settlement', desc: 'Hospital bills insurer directly, you pay minimal amount if any' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-500/30 to-red-600/30 border border-red-500/40 flex items-center justify-center">
                          <span className="text-white font-thin text-sm">{item.step}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-thin mb-1 text-sm">{item.title}</h4>
                          <p className="text-white/60 font-thin text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl border border-green-500/30 p-5 bg-green-500/10 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-white font-thin mb-2">Pro Tips for Cashless Claims</h4>
                    <ul className="space-y-1 text-white/70 font-thin text-sm">
                      <li>• Always carry your health card, policy document, and valid ID</li>
                      <li>• Save insurer's 24/7 helpline number in your phone</li>
                      <li>• Download insurance company's mobile app for quick access</li>
                      <li>• Verify hospital is in network before admission (except emergencies)</li>
                      <li>• For planned surgeries, inform at least 3 days in advance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reimbursement" className="mt-8 space-y-6">
              <div className="relative rounded-2xl border border-white/10 p-6 sm:p-8 bg-white/5 backdrop-blur-md">
                <h3 className="text-white font-thin mb-6 text-lg">Reimbursement Claim Process</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Intimation Within 24 Hours',
                      desc: 'Inform insurance company within 24 hours of hospitalization via phone, email, or mobile app. Provide policy number, patient name, hospital details, and reason for admission.',
                      icon: Phone,
                      time: 'Within 24 hours'
                    },
                    {
                      step: '2',
                      title: 'Complete Treatment & Pay Bills',
                      desc: 'Undergo treatment at any hospital (network or non-network). Pay all bills from your pocket and collect original bills, receipts, and documents.',
                      icon: Hospital,
                      time: 'During hospitalization'
                    },
                    {
                      step: '3',
                      title: 'Collect Required Documents',
                      desc: 'Discharge summary, all original bills and receipts, payment proof, prescriptions, diagnostic reports, doctor certificates, pharmacy bills, admission notes, FIR (if accident).',
                      icon: FileText,
                      time: 'At discharge'
                    },
                    {
                      step: '4',
                      title: 'Fill Claim Form Accurately',
                      desc: 'Download claim form from website or collect from branch. Fill completely with accurate information. Any wrong info can delay or reject claim.',
                      icon: ClipboardCheck,
                      time: '1-2 days post discharge'
                    },
                    {
                      step: '5',
                      title: 'Submit All Documents',
                      desc: 'Submit via email (scanned copies), courier (originals), mobile app upload, or visit nearest branch. Submit within 15-30 days of discharge as per policy terms.',
                      icon: Mail,
                      time: 'Within 15-30 days'
                    },
                    {
                      step: '6',
                      title: 'Claim Processing & Verification',
                      desc: 'Insurer reviews all documents, verifies bills, may ask for additional information or clarifications. Medical investigation may be conducted for high-value claims.',
                      icon: FileCheck,
                      time: '7-21 days'
                    },
                    {
                      step: '7',
                      title: 'Claim Approval & Payment',
                      desc: 'Approved amount is transferred to your bank account via NEFT. Receive email/SMS notification. Partial approval if some expenses are non-covered. Rejection reasons explained in writing.',
                      icon: CreditCard,
                      time: '7-30 days total'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="relative rounded-xl border border-white/10 p-5 bg-white/5 hover:border-white/20 transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/30 to-pink-500/30 border border-red-500/40 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-red-400" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-thin">Step {item.step}: {item.title}</h4>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 font-thin text-xs">
                              {item.time}
                            </Badge>
                          </div>
                          <p className="text-white/60 font-thin text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative rounded-xl border border-blue-500/30 p-5 bg-blue-500/10 backdrop-blur-md">
                  <h4 className="text-white font-thin mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                    Required Documents
                  </h4>
                  <ul className="space-y-2 text-white/70 font-thin text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2} />
                      <span>Duly filled claim form with signature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2} />
                      <span>Original hospital bills and receipts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2} />
                      <span>Discharge summary signed by doctor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2} />
                      <span>All diagnostic reports and test results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2} />
                      <span>Doctor's prescriptions and treatment notes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2} />
                      <span>Payment receipts and transaction proof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2} />
                      <span>Photo ID proof and address proof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2} />
                      <span>FIR copy (if accident-related)</span>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-xl border border-yellow-500/30 p-5 bg-yellow-500/10 backdrop-blur-md">
                  <h4 className="text-white font-thin mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" strokeWidth={1.5} />
                    Common Mistakes to Avoid
                  </h4>
                  <ul className="space-y-2 text-white/70 font-thin text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 shrink-0">✗</span>
                      <span>Late intimation beyond 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 shrink-0">✗</span>
                      <span>Incomplete or illegible documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 shrink-0">✗</span>
                      <span>Missing original bills (photocopies not accepted)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 shrink-0">✗</span>
                      <span>Wrong information in claim form</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 shrink-0">✗</span>
                      <span>Not responding to insurer's queries promptly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 shrink-0">✗</span>
                      <span>Submitting after deadline (15-30 days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 shrink-0">✗</span>
                      <span>Not keeping copies of submitted documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 shrink-0">✗</span>
                      <span>Claiming for excluded treatments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Track Claim CTA */}
          <div className="text-center">
            <Button className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-thin hover:from-red-600 hover:to-pink-600 transition-all duration-300 h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)]">
              <FileText className="w-5 h-5 mr-2" strokeWidth={1.5} />
              Track Your Claim Status Online
            </Button>
          </div>
        </section>

        {/* Claim Rejection Reasons */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">Why Claims Get Rejected & How to Avoid It</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {claimRejectionReasons.map((item, idx) => (
              <div key={idx} className="relative rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                    <item.icon className="w-6 h-6 text-red-400" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-thin mb-2">{item.reason}</h3>
                    <p className="text-white/60 font-thin text-sm leading-relaxed mb-3">{item.description}</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 shrink-0" strokeWidth={2} />
                    <div>
                      <h4 className="text-green-400 font-thin text-xs mb-1">PREVENTION</h4>
                      <p className="text-white/70 font-thin text-sm">{item.prevention}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Comparison Table 1: Plan Types Comparison */}
        <section id="plan-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Health Insurance Plan Types Comparison</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Feature</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Individual Plan</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Family Floater</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Senior Citizen</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Critical Illness</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Coverage Type</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Single Person</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Entire Family</td>
                  <td className="px-6 py-4 text-white/60 font-thin">60+ Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Specific Diseases</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Sum Insured</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5L - ₹1Cr</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10L - ₹50L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3L - ₹25L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10L - ₹1Cr</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Annual Premium</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹6,000 - ₹15,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12,000 - ₹30,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25,000 - ₹60,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹8,000 - ₹25,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Pre-Existing Wait</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-4 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-4 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1-3 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">90 Days</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Hospitalization</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Lump Sum</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Maternity Cover</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Add-on Available</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Included</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Applicable</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Best For</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Singles, Professionals</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Young Families</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Elderly Parents</td>
                  <td className="px-6 py-4 text-white/60 font-thin">High Risk Individuals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparison Table 2: Top Insurers Comparison */}
        <section id="insurer-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Top Health Insurers Comparison 2024</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Insurer</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Claim Settlement Ratio</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Network Hospitals</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Claim Settlement Time</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Cashless Facilities</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Star Health Insurance</td>
                  <td className="px-6 py-4 text-white/60 font-thin">90.37%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">14,000+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1-2 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Available</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">HDFC ERGO</td>
                  <td className="px-6 py-4 text-white/60 font-thin">99.05%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">10,000+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1 Hour</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Available</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Care Health Insurance</td>
                  <td className="px-6 py-4 text-white/60 font-thin">95.21%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">12,500+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Available</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">ICICI Lombard</td>
                  <td className="px-6 py-4 text-white/60 font-thin">96.86%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">9,500+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1-3 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Available</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Niva Bupa</td>
                  <td className="px-6 py-4 text-white/60 font-thin">98.31%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">8,200+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1-2 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Available</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Aditya Birla Health</td>
                  <td className="px-6 py-4 text-white/60 font-thin">92.54%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">7,800+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-4 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparison Table 3: Coverage Limits Across Cities */}
        <section id="city-coverage-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Recommended Coverage by City Tier</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">City Type</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Examples</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Avg. Hospital Cost/Day</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Min. Recommended Coverage</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Ideal Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Metro Cities</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Mumbai, Delhi, Bangalore, Chennai</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹8,000 - ₹15,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20 - 50 Lakhs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Tier 1 Cities</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Pune, Hyderabad, Ahmedabad, Kolkata</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5,000 - ₹10,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹7 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15 - 30 Lakhs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Tier 2 Cities</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Jaipur, Lucknow, Indore, Kochi</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3,000 - ₹7,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10 - 20 Lakhs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Tier 3 Cities</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Udaipur, Raipur, Guwahati, Mysore</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2,000 - ₹5,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5 - 15 Lakhs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Metric Table 1: Age-wise Premium Breakdown */}
        <section id="age-premium-metrics" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Age-wise Premium Analysis (₹10 Lakh Coverage)</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Age Group</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Annual Premium</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Monthly Cost</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">30-Year Total</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Savings if Bought at 25</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">18-25 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹6,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1.8 Lakhs</td>
                  <td className="px-6 py-4 text-green-400 font-thin">—</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">26-35 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹9,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹750</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2.7 Lakhs</td>
                  <td className="px-6 py-4 text-red-400 font-thin">+₹90,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">36-45 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1,250</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹4.5 Lakhs</td>
                  <td className="px-6 py-4 text-red-400 font-thin">+₹2.7 Lakhs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">46-55 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2,083</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹7.5 Lakhs</td>
                  <td className="px-6 py-4 text-red-400 font-thin">+₹5.7 Lakhs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">56-65 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹45,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3,750</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹13.5 Lakhs</td>
                  <td className="px-6 py-4 text-red-400 font-thin">+₹11.7 Lakhs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Metric Table 2: Common Treatments & Costs */}
        <section id="treatment-cost-metrics" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Common Medical Procedures & Average Costs</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Medical Procedure</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Avg. Cost (Metro)</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Avg. Cost (Tier 2)</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Hospital Stay</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Recommended Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Heart Bypass Surgery</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3.5 - 7 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2 - 4 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">7-10 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10 Lakhs+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Kidney Transplant</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5 - 10 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3 - 6 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15-20 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15 Lakhs+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Cancer Treatment (Chemo)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹4 - 12 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2.5 - 7 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Multiple Cycles</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20 Lakhs+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Hip/Knee Replacement</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2.5 - 5 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1.5 - 3 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">5-7 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹7 Lakhs+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Normal Delivery</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹50,000 - 1.5 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹30,000 - 80,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-3 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5 Lakhs+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Caesarean Section</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹80,000 - 2.5 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹50,000 - 1.2 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">3-5 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5 Lakhs+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Appendix Surgery</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹40,000 - 1 Lakh</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25,000 - 60,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-3 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3 Lakhs+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Metric Table 3: Claim Settlement Statistics */}
        <section id="claim-settlement-metrics" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Health Insurance Claim Statistics FY 2023-24</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Metric</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Individual Plans</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Family Floater</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Senior Citizen</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Industry Average</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Claim Settlement Ratio</td>
                  <td className="px-6 py-4 text-white/60 font-thin">94.2%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">96.8%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">89.5%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">93.6%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Avg. Claim Amount</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1.2 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1.8 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2.5 Lakhs</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1.6 Lakhs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Avg. Settlement Time</td>
                  <td className="px-6 py-4 text-white/60 font-thin">12 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">18 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">14 Days</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Cashless Claims %</td>
                  <td className="px-6 py-4 text-white/60 font-thin">68%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">72%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">65%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">69%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Rejection Rate</td>
                  <td className="px-6 py-4 text-white/60 font-thin">5.8%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">3.2%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">10.5%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">6.4%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Pre-Authorization Time</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-4 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-4 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">4-6 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">3-5 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comprehensive FAQs - Categorized */}
        <section id="faqs" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            {categorizedFAQs.map((category, catIdx) => (
              <div key={catIdx} className="space-y-4">
                <h3 className="text-white text-xl font-thin flex items-center gap-3 pb-3 border-b border-white/10">
                  <HelpCircle className="w-5 h-5 text-red-400" strokeWidth={1.5} />
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, faqIdx) => (
                    <AccordionItem
                      key={faqIdx}
                      value={`faq-${catIdx}-${faqIdx}`}
                      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden data-[state=open]:border-red-500/30"
                    >
                      <AccordionTrigger className="px-6 py-4 text-white font-thin hover:no-underline text-left">
                        <div className="flex items-start gap-3 pr-4">
                          <HelpCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" strokeWidth={1.5} />
                          <span className="text-sm sm:text-base">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 text-white/70 font-thin leading-relaxed text-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative rounded-2xl overflow-hidden border border-red-500/30 py-12 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-black to-pink-500/20"></div>
          <div className="relative z-10 text-center space-y-6 px-6">
            <h2 className="text-white text-3xl sm:text-4xl font-thin tracking-wide">
              Ready to Protect Your Family's Health?
            </h2>
            <p className="text-white/70 font-thin max-w-2xl mx-auto text-lg">
              Get instant quotes from 20+ insurers. Compare plans. Buy online in 5 minutes. Zero paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-thin hover:from-red-600 hover:to-pink-600 transition-all duration-300 h-14 px-10 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] text-lg">
                Get Instant Quote
              </Button>
              <Button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-thin hover:bg-white/20 hover:border-white/30 transition-all duration-300 h-14 px-10 rounded-xl text-lg">
                <Phone className="w-5 h-5 mr-2" strokeWidth={1.5} />
                Talk to Expert
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 pt-6 flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-thin text-white mb-1">2.7 Cr+</div>
                <div className="text-white/60 font-thin text-xs">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-thin text-white mb-1">99.05%</div>
                <div className="text-white/60 font-thin text-xs">Claim Settlement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-thin text-white mb-1">10,000+</div>
                <div className="text-white/60 font-thin text-xs">Network Hospitals</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-thin mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Contact', 'Careers', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 font-thin text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-thin mb-4">Products</h3>
              <ul className="space-y-2">
                {['Health Insurance', 'Life Insurance', 'Motor Insurance', 'Travel Insurance'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 font-thin text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-thin mb-4">Support</h3>
              <ul className="space-y-2">
                {['Help Center', 'Track Claim', 'Download Policy', 'Renew Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 font-thin text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-thin mb-4">Contact</h3>
              <ul className="space-y-2 text-white/60 font-thin text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  1800-XXX-XXXX
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  support@vioratech.com
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 font-thin text-sm">
              © 2024 Vioratech. All rights reserved. | IRDAI Registration No: IRDAI/XXX/XXXX/XXXX
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
