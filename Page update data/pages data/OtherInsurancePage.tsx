import { ArrowLeft, Grid3x3, Plane, Home as HomeIcon, Briefcase, Ship, Flame, Users, Shield, CheckCircle, Calculator, FileText, Award, Building2, Truck, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';

interface OtherInsurancePageProps {
  onBack: () => void;
  onSelectProduct?: (productId: string) => void;
}

export default function OtherInsurancePage({ onBack, onSelectProduct }: OtherInsurancePageProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Other Insurance Types
  const insuranceTypes = [
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Comprehensive travel protection for domestic and international trips covering medical emergencies, baggage loss, trip cancellations.',
      features: ['Medical emergency', 'Baggage loss/delay', 'Trip cancellation', 'Flight delay', 'Passport loss', 'Adventure sports'],
      idealFor: 'Domestic & international travelers, frequent flyers',
      coverage: '₹1L - ₹1Cr',
      premium: '₹200 - ₹5,000/trip'
    },
    {
      icon: HomeIcon,
      title: 'Home Insurance',
      description: 'Protection for your home structure and contents against fire, theft, natural disasters, and liabilities.',
      features: ['Structure damage', 'Contents coverage', 'Natural disasters', 'Theft protection', 'Public liability', 'Tenant liability'],
      idealFor: 'Homeowners, tenants, property owners',
      coverage: '₹5L - ₹1Cr',
      premium: '₹3,000 - ₹15,000/year'
    },
    {
      icon: Flame,
      title: 'Fire Insurance',
      description: 'Coverage for property damage due to fire, lightning, explosion, and related perils for residential and commercial properties.',
      features: ['Fire damage', 'Lightning strike', 'Explosion', 'Implosion', 'Aircraft damage', 'Riot & strike'],
      idealFor: 'Property owners, businesses, factories',
      coverage: '₹10L - ₹10Cr+',
      premium: '₹2,000 - ₹50,000/year'
    },
    {
      icon: Users,
      title: 'Group Health Insurance',
      description: 'Employer-sponsored health cover for employees and their families with corporate benefits and discounted premiums.',
      features: ['Employee coverage', 'Family floater', 'Cashless network', 'Pre-existing cover', 'Maternity benefit', 'Wellness programs'],
      idealFor: 'Companies, organizations, employee groups',
      coverage: '₹2L - ₹25L/person',
      premium: '₹500 - ₹5,000/person/year'
    },
    {
      icon: Ship,
      title: 'Marine Insurance',
      description: 'Protection for goods in transit by sea, air, or land. Covers cargo loss, damage, and transportation risks.',
      features: ['Cargo coverage', 'Sea/air/land', 'Hull insurance', 'Freight protection', 'Port risks', 'War & strikes'],
      idealFor: 'Importers, exporters, shipping companies',
      coverage: 'Based on cargo value',
      premium: '0.5% - 3% of cargo value'
    },
    {
      icon: Briefcase,
      title: 'Professional Indemnity',
      description: 'Liability cover for professionals against claims of negligence, errors, omissions in professional services.',
      features: ['Negligence claims', 'Legal defense', 'Error & omissions', 'Court costs', 'Compensation', 'Reputation protection'],
      idealFor: 'Doctors, lawyers, CAs, consultants, architects',
      coverage: '₹10L - ₹10Cr',
      premium: '₹15,000 - ₹2L/year'
    },
    {
      icon: Shield,
      title: 'Doctors Indemnity Insurance',
      description: 'Specialized professional indemnity for medical practitioners covering malpractice claims and legal costs.',
      features: ['Malpractice cover', 'Legal defense', 'Court costs', 'Compensation', 'Reputation cover', 'License protection'],
      idealFor: 'Doctors, surgeons, medical practitioners',
      coverage: '₹25L - ₹10Cr',
      premium: '₹25,000 - ₹3L/year'
    },
    {
      icon: Truck,
      title: 'Workmen Compensation',
      description: 'Mandatory cover for employee injuries, disabilities, or death occurring during employment.',
      features: ['Employee injuries', 'Death benefit', 'Disability cover', 'Medical expenses', 'Legal liability', 'Wage compensation'],
      idealFor: 'Employers, contractors, businesses with workers',
      coverage: 'As per Workmen Compensation Act',
      premium: '₹10,000 - ₹5L/year'
    },
    {
      icon: Building2,
      title: 'Commercial Property Insurance',
      description: 'Comprehensive coverage for business properties, offices, warehouses, and commercial establishments.',
      features: ['Building structure', 'Business equipment', 'Stock/inventory', 'Business interruption', 'Public liability', 'Employee belongings'],
      idealFor: 'Businesses, shops, offices, warehouses',
      coverage: '₹10L - ₹50Cr',
      premium: '₹5,000 - ₹10L/year'
    }
  ];

  // Categorized FAQs for Other Insurance
  const categorizedFAQs = [
    {
      category: 'Travel Insurance',
      faqs: [
        {
          question: 'What does travel insurance cover and is it mandatory?',
          answer: 'Travel insurance provides comprehensive protection during domestic and international trips. WHAT\'S COVERED: Medical emergencies abroad: Up to $100,000 for hospitalization, doctor visits, emergency evacuation. Trip cancellation: Refund of 80-100% non-refundable bookings if you cancel due to illness, family emergency, natural disaster. Baggage loss/delay: ₹50,000-₹1L for lost luggage, ₹10K-20K for 6+ hour delays. Flight delays: ₹5K-10K if delayed 6+ hours, hotel accommodation provided. Passport loss: Emergency travel document assistance + ₹10K-25K. Personal liability: Up to $1M if you accidentally injure someone or damage property abroad. Adventure sports: Optional add-on for trekking, scuba diving, skiing (additional premium). MANDATORY FOR: Schengen visa countries: Minimum €30,000 (₹26L) medical cover mandatory. UAE, USA: Not mandatory but highly recommended due to high medical costs. Domestic: Optional but covers trip cancellations, baggage loss. COST: Domestic: ₹200-500 per trip (₹2-5/day). International: ₹500-5,000 per trip (varies by destination, duration, age). Annual multi-trip: ₹3,000-8,000 for unlimited trips up to 30-45 days each. RECOMMENDATION: Always buy for international trips, especially USA, Europe (medical costs ₹1-5L per day). For domestic, buy if trip cost >₹50,000 to protect non-refundable bookings.'
        },
        {
          question: 'Does travel insurance cover COVID-19 and pre-existing conditions?',
          answer: 'COVID-19 COVERAGE (varies by insurer): COVID medical treatment: Most policies now cover if you test positive during trip. Hospitalization abroad: Up to policy limit ($50K-$100K). Quarantine expenses: Hotel/accommodation if quarantined abroad (up to $100-150/day for 14 days). Trip cancellation due to COVID: Covered if you/family test positive before trip. NOT COVERED: If you travel against govt advisory/to high-risk zones. Pre-departure testing costs. Vaccination-related complications (check specific policy). TOP COVID INSURERS: HDFC ERGO, ICICI Lombard, Bajaj Allianz, Digit, Care Health. PRE-EXISTING CONDITIONS: Standard Policy: Pre-existing NOT covered (diabetes, hypertension, heart disease, asthma). Senior Citizen Plans: Some cover stable pre-existing if declared upfront + medical clearance. Waiting Period: 2-4 years waiting for pre-existing in some plans. DECLARE OR NOT: MUST declare all pre-existing: Failure to declare = claim rejection. Insurers check medical records during claims. Higher premium: +50-150% if pre-existing declared. WORKAROUND: Choose "Pre-existing cover" add-on: +₹1,000-3,000 extra premium. Available only if condition stable for 6-12 months. Emergency cover: Even without pre-existing cover, emergency life-threatening situations may be covered (check terms). RECOMMENDATION: If you have pre-existing conditions, buy senior citizen travel plan or declare conditions upfront. Never hide medical history.'
        }
      ]
    },
    {
      category: 'Home & Property Insurance',
      faqs: [
        {
          question: 'What is the difference between home insurance and fire insurance?',
          answer: 'HOME INSURANCE (Comprehensive): WHAT\'S COVERED: Building structure: Damage to walls, roof, floors from fire, earthquake, floods, cyclones. Home contents: Furniture, electronics, appliances, jewelry (up to limits). Personal belongings: Clothes, kitchenware, books. Additional coverages: Temporary accommodation if home uninhabitable, Public liability (if someone injured in your home), Theft and burglary. Premium: ₹3,000-15,000/year for ₹50L-1Cr coverage. FIRE INSURANCE (Basic): ONLY COVERS: Fire damage to building structure. Lightning strike, explosion, implosion. Aircraft damage (if plane crashes into property). Limited scope compared to home insurance. Premium: ₹2,000-10,000/year (cheaper than home insurance). NOT COVERED IN FIRE INSURANCE: Contents/belongings, theft, natural disasters (unless add-on), personal liability. WHICH TO CHOOSE: Homeowners: Home insurance (comprehensive protection for structure + contents). Landlords: Fire insurance sufficient if tenant has own contents insurance. Tenants: Contents-only home insurance for belongings (₹1,500-3,000/year). CLAIM EXAMPLE: Fire Home Insurance: Building ₹40L + Contents ₹10L = Total ₹50L paid. Fire Insurance only: Building ₹40L paid, contents not covered = ₹10L loss. FLOOD HOME INSURANCE: Building + contents both covered. Fire Insurance: Not covered unless flood add-on purchased. RECOMMENDATION: Buy comprehensive home insurance, not just fire insurance. Add-ons: Earthquake cover (+10-20% premium), valuable jewelry cover.'
        },
        {
          question: 'Does home insurance cover floods, earthquakes, and riots?',
          answer: 'STANDARD HOME INSURANCE COVERAGE: ALWAYS COVERED (Standard): Fire, lightning, explosion, implosion, Aircraft damage, Theft and burglary. OPTIONAL ADD-ONS (Extra Premium): Earthquake: +15-30% premium, covers up to policy limit. Floods & Inundation: +10-20% premium, covers flood damage. Cyclone/Storm: Usually included in standard policy. Riots & Strikes: +5-10% premium in high-risk areas. Terrorism: +5-15% premium in metro cities. FLOOD INSURANCE: Coverage: Building structure + contents if damaged by flood water. Premium Impact: +10-25% extra (varies by flood-prone zone). Claim Settlement: 30-60 days after water recedes + assessment. Exclusions: Basement flooding (unless declared), property built in unauthorized flood zone. High-Risk Zones: Mumbai, Chennai, Kerala, Assam, Bihar = higher premium. EARTHQUAKE INSURANCE: Coverage: Complete structural damage + contents loss. Premium Impact: +15-30% based on seismic zone (Zone 3, 4, 5). Claim Settlement: After govt/technical assessment of damage (60-90 days). Exclusions: Cracks/minor damage below ₹50,000, wear & tear. High-Risk States: Delhi, Uttarakhand, Himachal, Bihar, Assam, Gujarat. RIOT & STRIKE DAMAGE: Coverage: Fire due to riot, vandalism, property damage by mob. Premium Impact: +5-10% in riot-prone areas. Claim Settlement: Requires police FIR + assessment. Exclusions: Deliberate damage by insured/family. REAL EXAMPLE CLAIMS: Kerala Floods 2018: Comprehensive home insurance paid ₹15-40L per house. Chennai Floods 2015: Only those with flood add-on got claims (30% had it). Uttarakhand Earthquake 2021: Earthquake add-on covered ₹10-50L per property. RECOMMENDATION: If you live in flood-prone area: Add flood cover (₹2K-5K extra). If in seismic zone 3/4/5: Add earthquake cover (₹3K-8K extra). All metro cities: Consider riot & terrorism cover.'
        },
        {
          question: 'What is covered under home contents insurance and what are the limits?',
          answer: 'HOME CONTENTS INSURANCE covers personal belongings inside your home. WHAT\'S COVERED (Standard): Furniture: Sofa, beds, tables, chairs, cabinets. Electronics: TV, fridge, washing machine, AC, microwave, computers. Appliances: Mixer, toaster, iron, vacuum cleaner. Clothing & Personal Items: Clothes, shoes, bags, watches (up to limits). Kitchenware: Utensils, crockery, cutlery. Books, artwork, décor items. COVERAGE LIMITS: Standard Contents Sum Insured: ₹5L-20L (choose based on total value). Individual Item Limits: Electronics: Up to ₹1-2L per item (TV, laptop, fridge). Jewelry/Gold: ₹50K-1L total unless specifically declared. Cash at home: ₹5K-10K only. High-value items: Must be declared separately with proof of purchase. WHAT\'S NOT COVERED (Unless Add-on): Jewelry/Gold above ₹1L: Need separate valuable items cover. Antiques, paintings >₹1L: Need art insurance. Business equipment: Laptops, cameras used for business need commercial policy. Vehicles: Two-wheelers, cars (need separate motor insurance). CLAIMING PROCESS: List all damaged items with photos/bills. Surveyor assesses actual value (depreciation applied 10-30%). Settlement: Repair/replacement or cash compensation. Timeframe: 30-45 days after document submission. VALUABLES COVERAGE (Add-on): Jewelry, gold, watches >₹1L need declaration + appraisal. Premium: +₹500-2,000 for ₹5-10L jewelry cover. Claim: Requires purchase bills, photos, valuation certificate. TENANT CONTENTS INSURANCE: Covers only belongings (not building structure). Premium: ₹1,500-3,000/year for ₹5-10L contents. Claim: Same as homeowner contents claim. DEPRECIATION IMPACT: Electronics: 20-30% depreciation applied (3-5 year old items). Furniture: 15-25% depreciation. Clothing: Not covered after 1 year (wear & tear). NEW REPLACEMENT OPTION (Add-on): Pay +15-20% premium for zero depreciation. Get brand new replacement instead of depreciated value. Example: 3-year old TV worth ₹30K (depreciated). With zero dep: Get new ₹50K TV. RECOMMENDATION: Calculate total contents value (walk through home, list items). Buy sum insured = 70-80% of total value. Declare jewelry/valuables separately if >₹1L. Keep purchase bills, photos updated for easy claims.'
        }
      ]
    },
    {
      category: 'Professional & Business Insurance',
      faqs: [
        {
          question: 'Who needs professional indemnity insurance and what does it cover?',
          answer: 'PROFESSIONAL INDEMNITY (Errors & Omissions Insurance) protects professionals against negligence claims. WHO NEEDS IT: MANDATORY: Doctors, surgeons (₹25L-10Cr cover mandatory by Medical Council). Chartered Accountants (₹50L-2Cr as per ICAI). Company Secretaries (₹25L-1Cr as per ICSI). Architects (₹10L-5Cr as per Council of Architecture). HIGHLY RECOMMENDED: Lawyers, advocates (client disputes, missed deadlines). Consultants (management, financial, IT, HR). Engineers (design flaws, project delays). Real estate agents/brokers. Insurance agents/financial advisors. Interior designers, event managers. WHAT\'S COVERED: Professional negligence: Errors in professional services/advice. Omissions: Failure to perform duties leading to client loss. Legal defense costs: Lawyer fees, court costs (covered even if you win). Compensation to client: Financial loss due to your mistake. Libel/slander: If you defame client unintentionally. Document loss: If client documents lost/destroyed. WHAT\'S NOT COVERED: Intentional wrongdoing/fraud. Criminal acts. Bodily injury (need separate liability). Property damage (need public liability). REAL CLAIM EXAMPLES: Doctor: Misdiagnosis led to wrong treatment. Patient sued for ₹50L. Claim paid ₹45L + ₹5L legal fees. CA: Wrong tax advice led to client\'s ₹1Cr penalty. Claim paid ₹80L (after investigation). Architect: Building design flaw led to structural damage ₹2Cr. Claim paid ₹1.5Cr. Lawyer: Missed court deadline, client lost case worth ₹30L. Claim paid ₹25L. COVERAGE AMOUNT: Doctors: ₹25L-10Cr (surgeons need higher). CAs/CS: ₹50L-2Cr (based on client size). Consultants: ₹10L-5Cr (based on project value). Lawyers: ₹25L-2Cr. General guideline: Cover = 2-3x of highest client project value. PREMIUM: Doctors: ₹25K-3L/year (based on specialty, claims history). CAs: ₹15K-1L/year. Consultants: ₹10K-50K/year. Fresh professionals: ₹8K-15K/year for ₹25L cover. CLAIM-MADE VS OCCURRENCE: Claim-made: Covers only if claim made during policy period (even for past work). Occurrence: Covers incidents during policy period (even if claim made later). Recommendation: Buy occurrence-based or maintain continuous claim-made policy. RETROACTIVE COVER: Covers past work done before policy start (important for experienced professionals). Premium: +20-30% for retroactive cover. Must-have if switching insurers. RECOMMENDATION: Buy from day 1 of professional practice (not after claim arises). Choose sum insured = 3-5x annual income or highest client project. Renew continuously (no gap) to avoid coverage lapse.'
        },
        {
          question: 'What is workmen compensation insurance and is it mandatory?',
          answer: 'WORKMEN COMPENSATION INSURANCE covers employer\'s legal liability for employee injuries/death at work. IS IT MANDATORY? YES, MANDATORY under Workmen Compensation Act 1923 for ALL employers with employees. Includes: Factories, construction sites, shops, offices, restaurants, salons, small businesses. Penalty for non-compliance: ₹10,000-₹1L fine + imprisonment up to 1 year + full compensation to employee. WHAT\'S COVERED: Employee Injury at Workplace: Medical expenses (full treatment cost). Temporary/Permanent Disability: Monthly compensation during disability period, Lump sum if permanently disabled (based on salary & degree of disability). Death of Employee: Compensation to family: 50% of monthly wages × 4-5 years = ₹5L-20L+. Funeral expenses: ₹10K-25K. Occupational Diseases: Diseases caused by workplace conditions (asbestosis, silicosis, hearing loss). COMPENSATION AMOUNT (As Per Act): Death: ₹1.6L minimum (can go up to ₹8-20L based on salary). Permanent Total Disability: ₹1.8L minimum. Permanent Partial Disability: Proportionate to disability %. Temporary Disability: 50% of wages during treatment period. WHO IS COVERED: All employees earning <₹21,000/month (as per Act limit, higher salaries need Group Personal Accident). Factory workers, drivers, security guards, housekeeping staff, delivery boys, construction workers. WHAT\'S NOT COVERED: Injury due to intoxication/drugs. Self-inflicted injury. Injury while not on duty. PREMIUM CALCULATION: Based on: Total wage bill/salaries paid, Type of industry (hazardous/non-hazardous), Number of employees, Claims history. Typical Premium: Construction: 2-4% of total wage bill, Manufacturing: 1-2% of wage bill, IT/Office: 0.3-0.5% of wage bill, Restaurants/Retail: 0.5-1% of wage bill. Example: 50 employees, ₹20L annual wage bill, office work = ₹6K-10K premium. CLAIM PROCESS: Employee injured → Hospitalize → Inform insurer within 24-48 hours → Submit medical reports, wage proof → Surveyor assesses → Compensation paid in 30-60 days. REAL EXAMPLES: Factory Worker: Hand crushed in machine. 40% permanent disability. Compensation: ₹12L paid by insurance. Construction Worker: Fall from height, death. Compensation: ₹18L paid to family. Office Employee: Spine injury, temporary disability for 6 months. Compensation: ₹3L (6 months wages + medical). GROUP PERSONAL ACCIDENT (Add-on): For employees earning >₹21,000/month (not covered by WC Act). Coverage: ₹5L-25L per employee for death/disability. Premium: ₹500-2,000 per employee per year. RECOMMENDATION: MUST BUY if you have any employees (legally mandatory). Buy adequate cover: Death cover ≥ ₹10L per employee. Combine with Group Personal Accident for senior staff. Renew on time to avoid legal penalty + coverage gap.'
        },
        {
          question: 'What is the difference between public liability and product liability insurance?',
          answer: 'PUBLIC LIABILITY INSURANCE: Covers legal liability if you/your business accidentally injures someone or damages their property. WHAT\'S COVERED: Bodily Injury to Third Party: Customer slips in your shop, fractures leg. Visitor injured at your office/factory. Property Damage to Third Party: Your delivery truck damages someone\'s car/shop. Fire from your premises spreads to neighbor\'s property. Equipment falls and damages client\'s building. Medical Expenses: Hospital bills, treatment costs of injured third party. Legal Defense Costs: Lawyer fees, court costs. Compensation/Settlement Amount: As decided by court or settlement. EXAMPLES: Restaurant: Customer slips on wet floor, spinal injury. Claim: ₹15L. Clinic: Patient falls from stairs, fractures hip. Claim: ₹8L. Factory: Fire spreads to nearby house. Claim: ₹25L. Gym: Equipment malfunction injures member. Claim: ₹10L. WHO NEEDS IT: Retail shops, restaurants, hotels, gyms, salons, clinics, factories, offices with public access. Coverage: ₹5L-10Cr (based on business size, risk). Premium: ₹3K-50K/year (0.05-0.5% of coverage amount). PRODUCT LIABILITY INSURANCE: Covers legal liability if your manufactured/sold product injures someone or damages property. WHAT\'S COVERED: Injury Due to Defective Product: Food poisoning from your food product. Electronic item explodes, injures user. Defective vehicle part causes accident. Faulty medical device harms patient. Property Damage Due to Product: Defective electrical item causes fire in customer\'s home. Cosmetic product causes skin damage. Product Recall Costs: Cost to recall defective products from market. Notification costs, logistics, replacement. Legal Defense Costs: Lawyer fees, court costs. WHO NEEDS IT: Manufacturers: Electronics, automobiles, machinery, chemicals, food, pharmaceuticals. Importers/Distributors: Selling foreign products in India. Retailers: If selling private label/own brand products. EXAMPLES: Mobile Phone: Battery explodes, causes fire in home. Claim: ₹20L. Food Company: Product causes food poisoning to 50 people. Claim: ₹50L. Cosmetic Brand: Cream causes severe allergic reaction. Claim: ₹5L. Pharma Company: Contaminated drug batch causes side effects. Claim: ₹2Cr. Coverage: ₹10L-50Cr (based on product risk, turnover). Premium: ₹10K-5L/year (0.1-1% of turnover). PRODUCT RECALL ADD-ON: Covers cost of recalling defective batch from market. Premium: +50-100% of base premium. Example: Car manufacturer recalls 10,000 vehicles = ₹5-10Cr cost covered. KEY DIFFERENCES: Public Liability: Covers accidents at your premises/operations. Applies to all businesses with public interaction. Premium lower (₹3K-50K). Product Liability: Covers defects in products you make/sell. Applies to manufacturers, retailers. Premium higher (₹10K-5L). Claims longer (product may cause injury after years). RECOMMENDATION: Service businesses (salon, clinic, gym): Buy Public Liability. Manufacturing/Retail businesses: Buy BOTH Public + Product Liability. E-commerce: Product Liability mandatory if selling own brand. Coverage: Public Liability ₹10L-1Cr, Product Liability ₹25L-10Cr based on risk.'
        }
      ]
    },
    {
      category: 'Group & Employee Insurance',
      faqs: [
        {
          question: 'How is group health insurance different from individual health insurance?',
          answer: 'GROUP HEALTH INSURANCE (Employer-provided): ELIGIBILITY: Only for employees of a company/organization. Covers employee + dependents (spouse, 2-4 children, sometimes parents). Coverage ends if you leave the job (unless portable). KEY FEATURES: No Medical Tests: Pre-existing covered from day 1 (no waiting period). Lower Premium: Employer pays, 50-70% cheaper than individual plans. Higher Coverage: ₹3L-25L sum insured per employee (based on company size). Instant Coverage: No waiting for pre-existing, maternity (2-4 year wait). Cashless: Extensive network hospitals (8,000-15,000). Tax-Free: Employer premium payment tax-free for employee. LIMITATIONS: Not Portable: Lose coverage if you change jobs (unless continuity option). Lower Coverage for Family: Only 1 sum insured shared among all family members. No Customization: Fixed plan by employer, can\'t choose add-ons. Age Limit: Parents usually not covered or limited to age 60-70. INDIVIDUAL HEALTH INSURANCE (Self-purchased): ELIGIBILITY: Anyone can buy at any age (18-65 for new policies). Remains with you regardless of employment status. Lifelong renewability even after retirement. KEY FEATURES: Customizable: Choose sum insured, add-ons, riders, deductibles. Higher Family Coverage: Dedicated coverage for each member or family floater. Portability: Can port to better insurer without losing benefits. Tax Benefits: ₹25,000-₹1L deduction under 80D. Guaranteed Renewal: Policy can\'t be cancelled by insurer. PRE-EXISTING WAIT: 2-4 years waiting period (vs 0 in group). Medical Tests Required: Above age 45 or ₹5L+ sum insured. Premium: 2-3x higher than group insurance (individual risk). WHICH IS BETTER: SCENARIO RECOMMENDATION: You have group insurance: Still buy individual ₹5-10L base cover (for job change, retirement continuity). You don\'t have group insurance: MUST buy individual health insurance (₹5L-10L). Parents: Buy individual senior citizen plan (group won\'t cover or very limited). Young employees: Depend on group insurance + ₹3-5L top-up individual. COST COMPARISON (30-year-old, ₹5L coverage): Group Health: ₹1,500-3,000/year (employer pays). Individual Health: ₹6,000-10,000/year (you pay). Super Top-Up: ₹2,000-3,000/year (covers above group insurance). BEST STRATEGY: Leverage group insurance for daily healthcare (OPD, small hospitalization). Buy individual health insurance for major illnesses, continuity. Take Super Top-Up to increase coverage (₹5L group + ₹10L top-up = ₹15L total). SUPER TOP-UP EXPLANATION: Activates after your group insurance exhausted. Example: Surgery ₹12L. Group covers ₹5L. Top-up pays ₹7L. Premium: ₹2K-4K/year for ₹10-15L top-up (very affordable). RECOMMENDATION: If you have group <₹5L: Buy individual ₹5-10L base policy. If you have group ₹5L+: Buy Super Top-Up ₹10-20L (cheaper). Always maintain individual policy (don\'t rely 100% on employer insurance).'
        }
      ]
    }
  ];

  // Travel Insurance Specific Benefits
  const travelBenefits = [
    'Medical emergency abroad up to $1,00,000',
    'Baggage loss/delay compensation',
    'Trip cancellation due to emergencies',
    'Flight delay & missed connection',
    'Passport & document loss assistance',
    'Emergency cash advance',
    'Adventure sports coverage (optional)',
    '24/7 global assistance'
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="ghost"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-thin hover:bg-white/20 hover:border-white/30 transition-all duration-300 h-10 px-4 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Back to Insurance List
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-black to-indigo-500/10"></div>
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          {/* Centered Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-indigo-500/30 border-2 border-purple-500/40 mb-6 backdrop-blur-md">
              <Grid3x3 className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" strokeWidth={1.5} />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-thin tracking-wide mb-6">
              Other Insurance Products
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-thin mb-4">
                Specialized insurance solutions for unique needs and situations
              </p>
              <p className="text-white/50 text-sm sm:text-base font-thin mb-8">
                Travel, Home, Professional Indemnity, Marine Insurance and more specialized coverage options.
              </p>

              {/* Quick Access Cards */}
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <Plane className="w-6 h-6 text-blue-400" />
                    <div>
                      <h3 className="text-white font-thin">Travel Insurance</h3>
                      <p className="text-xs text-white/60">Coverage for trips ₹200-₹5,000/trip</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <HomeIcon className="w-6 h-6 text-orange-400" />
                    <div>
                      <h3 className="text-white font-thin">Home Insurance</h3>
                      <p className="text-xs text-white/60">Protect your property ₹3K-₹15K/year</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-green-400" />
                    <div>
                      <h3 className="text-white font-thin">Professional Indemnity</h3>
                      <p className="text-xs text-white/60">For consultants ₹15K-₹2L/year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-white text-2xl sm:text-3xl font-thin mb-2">Get Specialized Insurance Quote</h2>
                  <p className="text-white/60 text-sm sm:text-base font-thin">Travel, Home, Professional - Get personalized recommendations</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-purple-500/50 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Mobile Number *</label>
                    <Input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-purple-500/50 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Gender *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none">
                      <option value="" className="bg-black">Select Gender</option>
                      <option value="male" className="bg-black">Male</option>
                      <option value="female" className="bg-black">Female</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Insurance Type *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none">
                      <option value="" className="bg-black">Select Insurance Type</option>
                      <option value="travel" className="bg-black">Travel Insurance</option>
                      <option value="home" className="bg-black">Home Insurance</option>
                      <option value="fire" className="bg-black">Fire Insurance</option>
                      <option value="professional" className="bg-black">Professional Indemnity</option>
                      <option value="marine" className="bg-black">Marine Insurance</option>
                      <option value="group" className="bg-black">Group Health</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-thin px-8 py-6 text-base rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 mb-3">
                  <Shield className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  Get Your Policy Now
                </Button>
                <p className="text-white/50 text-xs font-thin text-center">*Customized coverage for your needs</p>
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
            {['All Insurance Types', 'Travel Insurance', 'Business Insurance', 'Home Insurance', 'Personal Accident', 'Cyber Insurance', 'Coverage Details', 'Get Quote'].map((item, idx) => (
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

      {/* All Insurance Types */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl mb-8">All Insurance Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceTypes.map((type, idx) => (
              <article key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/20 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">{type.title}</h3>
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
                </div>

                <p className="text-xs text-white/40 mt-4">
                  <strong className="text-white/60">Ideal for:</strong> {type.idealFor}
                </p>

                <Button className="w-full mt-4 bg-white/10 hover:bg-white/20 border border-white/10">
                  Get Quote
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Insurance Highlight */}
      <section className="py-12 px-4 md:px-8 bg-white/5 border-y border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <Plane className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Most Popular</span>
              </div>
              <h2 className="text-3xl mb-4">Travel Insurance</h2>
              <p className="text-white/60 mb-6">
                Travel worry-free with comprehensive coverage starting at just ₹200 per trip.
                Get instant policy issuance and 24/7 global assistance.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Get Travel Insurance
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {travelBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-white/70">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Insurance Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl mb-4">Business Insurance Solutions</h2>
          <p className="text-white/60 mb-8">Comprehensive coverage for businesses of all sizes</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
              <Briefcase className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-sm mb-1">Professional Indemnity</h3>
              <p className="text-xs text-white/60">For consultants & professionals</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
              <Truck className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-sm mb-1">Workmen Compensation</h3>
              <p className="text-xs text-white/60">Mandatory employee cover</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
              <Building2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-sm mb-1">Commercial Property</h3>
              <p className="text-xs text-white/60">Protect business assets</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-sm mb-1">Group Health</h3>
              <p className="text-xs text-white/60">Employee health benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">Everything you need to know about other insurance types</p>
          </div>

          {categorizedFAQs.map((category, catIdx) => (
            <div key={catIdx} className="mb-8">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-purple-400" />
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIdx) => (
                  <AccordionItem
                    key={faqIdx}
                    value={`faq-${catIdx}-${faqIdx}`}
                    className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-purple-400 text-left py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 text-sm leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table 1: Travel Insurance Providers */}
      <section id="travel-comparison" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Top Travel Insurance Providers</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Provider</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Medical Cover</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Trip Cancellation</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Baggage Loss</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Premium (7 Days Asia)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">HDFC ERGO</td>
                  <td className="px-6 py-4 text-white/60 font-thin">$100,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹50,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹50,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹650</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">ICICI Lombard</td>
                  <td className="px-6 py-4 text-white/60 font-thin">$50,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹30,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹30,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹450</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Bajaj Allianz</td>
                  <td className="px-6 py-4 text-white/60 font-thin">$100,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹75,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹50,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹800</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Digit Insurance</td>
                  <td className="px-6 py-4 text-white/60 font-thin">$50,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹40,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹40,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Care Health</td>
                  <td className="px-6 py-4 text-white/60 font-thin">$75,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹60,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹45,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹600</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Tata AIG</td>
                  <td className="px-6 py-4 text-white/60 font-thin">$100,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1,00,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹75,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹950</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison Table 2: Home Insurance Coverage Comparison */}
      <section id="home-comparison" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Home Insurance Coverage Comparison</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Coverage Type</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Fire Insurance</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Basic Home</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Comprehensive</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Fire & Explosion</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Theft & Burglary</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Contents Coverage</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Up to ₹5L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Up to ₹20L</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Natural Disasters</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Add-on Only</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Cyclone Only</td>
                  <td className="px-6 py-4 text-white/60 font-thin">All Included</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Public Liability</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Up to ₹10L</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Temporary Accommodation</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Annual Premium</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2,000-5,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3,000-8,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5,000-15,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Best For</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Basic Legal Compliance</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Homeowners</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Complete Protection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison Table 3: Professional Indemnity by Profession */}
      <section id="professional-comparison" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Professional Indemnity Coverage by Profession</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Profession</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Recommended Cover</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Annual Premium</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Mandatory?</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Common Claims</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Doctors/Surgeons</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25L - ₹10Cr</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25K - ₹3L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Yes</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Misdiagnosis, Wrong Treatment</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Chartered Accountants</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹50L - ₹2Cr</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15K - ₹1L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Yes (ICAI)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Tax Errors, Audit Mistakes</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Architects</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10L - ₹5Cr</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20K - ₹2L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Yes (COA)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Design Flaws, Delays</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Lawyers/Advocates</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25L - ₹2Cr</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15K - ₹80K</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Recommended</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Missed Deadlines, Poor Advice</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">IT Consultants</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10L - ₹1Cr</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10K - ₹50K</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Recommended</td>
                  <td className="px-6 py-4 text-white/60 font-thin">System Failures, Data Loss</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Financial Advisors</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25L - ₹1Cr</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12K - ₹60K</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Highly Recommended</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Wrong Advice, Portfolio Loss</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white/60 text-sm mt-4 text-center font-thin">Note: Premium varies based on years of experience, claims history, and coverage amount selected.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl mb-4">Need Help Choosing?</h2>
          <p className="text-white/60 mb-8">Our experts will help you find the perfect insurance solution for your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
              Talk to Expert
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Compare All Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
