import { ArrowLeft, Car, Shield, Wrench, Clock, IndianRupee, Calculator, CheckCircle, Bike, Truck, Zap, Users, Award, AlertTriangle, FileText, Phone, TrendingUp, TrendingDown, AlertCircle, HelpCircle, Target, Building2, CreditCard, MapPin, Calendar, Mail, Download, Percent, Activity, DollarSign, Home as HomeIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';

interface CarInsurancePageProps {
  onBack: () => void;
  onSelectProduct?: (productId: string) => void;
}

export default function CarInsurancePage({ onBack, onSelectProduct }: CarInsurancePageProps) {
  const [calculatorInputs, setCalculatorInputs] = useState({
    vehicleNumber: '',
    make: '',
    model: '',
    year: '',
    city: '',
    idv: ''
  });

  // Comprehensive Motor Insurance Types
  const insuranceTypes = [
    {
      id: 'comprehensive-car-insurance',
      icon: Shield,
      title: 'Comprehensive Car Insurance',
      description: 'Complete protection covering own damage, third-party liability, theft, natural calamities, and accidents.',
      features: ['Own damage cover', 'Third-party liability', 'Theft protection', 'Natural calamity', 'Fire coverage'],
      idealFor: 'New cars, high-value vehicles, risk-conscious owners',
      coverage: 'Full Protection',
      premium: '₹8,000 - ₹50,000/year'
    },
    {
      id: 'third-party-car',
      icon: Users,
      title: 'Third Party Car Insurance',
      description: 'Mandatory legal cover for damages caused to third-party property or person. Minimum legal requirement.',
      features: ['Legal compliance', 'Third-party liability', 'Death/injury cover', 'Property damage', 'Lowest premium'],
      idealFor: 'Old cars, budget-conscious owners, minimal coverage needs',
      coverage: 'Third-party Only',
      premium: '₹2,000 - ₹5,000/year'
    },
    {
      id: 'zero-dep-car',
      icon: Award,
      title: 'Zero Depreciation Cover',
      description: 'Get full claim amount without depreciation deduction. Best for new cars (0-5 years).',
      features: ['No depreciation', 'Full part replacement', 'Maximum claim', 'New car benefit', 'Premium add-on'],
      idealFor: 'Cars less than 5 years old, premium vehicles',
      coverage: 'Full Value Protection',
      premium: '+₹2,000 - ₹8,000/year'
    },
    {
      id: 'two-wheeler-insurance',
      icon: Bike,
      title: 'Two Wheeler Insurance',
      description: 'Comprehensive protection for motorcycles, scooters, and bikes. Affordable premiums.',
      features: ['Own damage', 'Third-party', 'Theft cover', 'Accident protection', 'Personal accident'],
      idealFor: 'Bike and scooter owners',
      coverage: 'Bike Protection',
      premium: '₹500 - ₹3,000/year'
    },
    {
      id: 'commercial-vehicle-insurance',
      icon: Truck,
      title: 'Commercial Vehicle Insurance',
      description: 'Coverage for goods carriers, passenger vehicles, taxis, and business vehicles.',
      features: ['Goods in transit', 'Driver cover', 'Commercial liability', 'Business use', 'Fleet discount'],
      idealFor: 'Commercial vehicle owners, fleet operators',
      coverage: 'Commercial Use',
      premium: '₹10,000 - ₹1L/year'
    },
    {
      id: 'electric-vehicle-insurance',
      icon: Zap,
      title: 'Electric Vehicle Insurance',
      description: 'Specialized coverage for EVs including battery, charging equipment, and electric components.',
      features: ['Battery cover', 'Charging station', 'Electric parts', 'Lower premium', 'Green discount'],
      idealFor: 'Electric car and bike owners',
      coverage: 'EV Protection',
      premium: '₹6,000 - ₹30,000/year'
    },
    {
      id: 'pay-as-you-drive-insurance',
      icon: Clock,
      title: 'Pay As You Drive Insurance',
      description: 'Premium based on actual kilometers driven. Perfect for low-mileage users.',
      features: ['Usage-based', 'Lower premium', 'Km tracking', 'Flexible', 'Cost-effective'],
      idealFor: 'Low-mileage drivers, occasional users',
      coverage: 'Usage-based',
      premium: '₹5,000 - ₹25,000/year'
    },
    {
      id: 'standalone-own-damage',
      icon: Car,
      title: 'Standalone Own Damage',
      description: 'Only own damage cover without third-party. For those with existing third-party policy.',
      features: ['Own damage only', 'No third-party', 'Flexible add-ons', 'Custom coverage', 'Cost-effective'],
      idealFor: 'Those with long-term third-party policy',
      coverage: 'Own Damage Only',
      premium: '₹4,000 - ₹30,000/year'
    }
  ];

  // Comprehensive Benefits List
  const comprehensiveBenefits = [
    {
      category: 'Own Damage Coverage',
      icon: Shield,
      benefits: [
        'Accidental damage to your vehicle from collisions, crashes, overturning',
        'Fire damage from explosion, self-ignition, or external fire sources',
        'Theft and burglary protection with complete vehicle replacement',
        'Natural calamities: flood, earthquake, landslide, storm, cyclone damage',
        'Man-made disasters: riots, strikes, malicious acts, terrorism',
        'Transit damage during transportation by road, rail, inland waterway'
      ]
    },
    {
      category: 'Third-Party Liability',
      icon: Users,
      benefits: [
        'Unlimited third-party death and bodily injury liability coverage',
        'Third-party property damage up to ₹7.5 lakhs per accident',
        'Legal defense costs and court proceedings expenses covered',
        'Compensation for victims as per Motor Vehicles Act requirements',
        'Protection against lawsuits from accident victims',
        'Mandatory by law - helps avoid penalties and legal issues'
      ]
    },
    {
      category: 'Cashless Repairs & Network',
      icon: Wrench,
      benefits: [
        '5,000+ network garages across India for cashless repairs',
        'Authorized service centers and multi-brand workshops covered',
        'No upfront payment needed - direct settlement with garage',
        'Quality repairs with genuine parts and manufacturer warranties',
        'Quick claim processing and vehicle delivery',
        '24/7 garage locator and assistance helpline'
      ]
    },
    {
      category: 'No Claim Bonus Benefits',
      icon: Award,
      benefits: [
        'Up to 50% discount on renewal premium for claim-free years',
        'NCB accrues at 20%, 25%, 35%, 45%, 50% for consecutive claim-free years',
        'Transferable to new vehicle when selling old car',
        'NCB protection add-on to retain discount even after claims',
        'Lifetime NCB saver for long-term policyholders',
        'Family NCB transfer between family members'
      ]
    },
    {
      category: 'Emergency Services',
      icon: AlertCircle,
      benefits: [
        '24/7 roadside assistance for breakdowns and emergencies',
        'Free towing service up to nearest garage (usually 50-100 km)',
        'On-spot minor repairs for punctures, dead battery, fuel delivery',
        'Key lockout assistance and replacement key arrangement',
        'Emergency medical assistance in case of accidents',
        'Helpline support in multiple languages across India'
      ]
    }
  ];

  // Detailed Add-ons with Pricing
  const detailedAddOns = [
    {
      name: 'Zero Depreciation Cover',
      price: '₹2,000 - ₹8,000/year',
      icon: Award,
      description: 'Get full claim amount without depreciation deduction on parts. Essential for new cars (0-5 years old).',
      coverage: 'Full part value',
      benefits: ['No depreciation', 'Full replacement cost', '100% claim amount', 'Save up to 50% on repairs']
    },
    {
      name: 'Engine Protection Cover',
      price: '₹800 - ₹3,000/year',
      icon: Wrench,
      description: 'Protects engine from water damage, oil leakage, gearbox issues. Critical for monsoon season.',
      coverage: 'Engine & gearbox',
      benefits: ['Water ingress damage', 'Oil leakage cover', 'Hydrostatic lock', 'Gearbox protection']
    },
    {
      name: 'Return to Invoice (RTI)',
      price: '₹1,500 - ₹5,000/year',
      icon: IndianRupee,
      description: 'Get full invoice value if car is stolen or declared total loss. Covers depreciation gap.',
      coverage: 'Full invoice value',
      benefits: ['Total loss protection', 'Theft coverage', 'No depreciation', 'Full invoice amount']
    },
    {
      name: 'Roadside Assistance',
      price: '₹500 - ₹1,500/year',
      icon: Phone,
      description: '24/7 emergency help for breakdowns, towing, flat tires, fuel delivery, key lockout.',
      coverage: 'Pan-India coverage',
      benefits: ['24/7 helpline', 'Free towing', 'Flat tire help', 'Fuel delivery']
    },
    {
      name: 'NCB Protection',
      price: '₹500 - ₹2,000/year',
      icon: Percent,
      description: 'Retain your No Claim Bonus even after making claims. Protect your discount.',
      coverage: 'NCB retention',
      benefits: ['Retain NCB', '1-2 claims allowed', 'Keep discount', 'Long-term savings']
    },
    {
      name: 'Consumables Cover',
      price: '₹800 - ₹2,500/year',
      icon: Wrench,
      description: 'Coverage for consumables like engine oil, nuts, bolts, screws, lubricants, coolants.',
      coverage: 'Consumable items',
      benefits: ['Engine oil', 'Nuts & bolts', 'Lubricants', 'Coolant & fluids']
    },
    {
      name: 'Key & Lock Replacement',
      price: '₹300 - ₹800/year',
      icon: AlertTriangle,
      description: 'Replacement cost for lost or stolen car keys and lock replacement.',
      coverage: 'Keys & locks',
      benefits: ['Lost key cover', 'Lock replacement', 'Smart key cover', 'Emergency assistance']
    },
    {
      name: 'Personal Belongings Cover',
      price: '₹500 - ₹1,500/year',
      icon: Shield,
      description: 'Protection for personal items like laptops, phones, bags damaged in accident or theft.',
      coverage: '₹10K - ₹50K',
      benefits: ['Laptop & phone', 'Personal items', 'Theft cover', 'Accident damage']
    }
  ];

  // Network Statistics
  const networkStats = [
    { number: '5,000+', label: 'Network Garages', icon: Building2 },
    { number: '50 Lakh+', label: 'Policies Issued', icon: FileText },
    { number: '98%', label: 'Claim Settlement', icon: CheckCircle },
    { number: '24/7', label: 'Customer Support', icon: Phone }
  ];

  // Categorized FAQs
  const categorizedFAQs = [
    {
      category: 'Motor Insurance Basics',
      faqs: [
        {
          question: 'What is car insurance and why is it mandatory?',
          answer: 'Car insurance is a contract between you and an insurance company that provides financial protection against physical damage or bodily injury resulting from traffic collisions and vehicle theft. In India, at least third-party car insurance is MANDATORY under the Motor Vehicles Act, 1988. Driving without insurance can result in: ₹2,000 fine for first offense, ₹4,000 fine and/or 3 months imprisonment for repeat offense, No compensation if you cause accident, Vehicle seizure by traffic police. Third-party insurance covers legal liability for: Death/injury to third-party (unlimited cover), Property damage to third party (up to ₹7.5L), Legal defense costs. Comprehensive insurance additionally covers: Own damage to your vehicle, Theft and fire, Natural calamities. Even if third-party is mandatory, comprehensive is highly recommended to protect your own vehicle investment.'
        },
        {
          question: 'What is the difference between comprehensive and third-party insurance?',
          answer: 'THIRD-PARTY INSURANCE: Coverage: Only third-party death/injury (unlimited) + property damage (₹7.5L). Your vehicle damage: NOT COVERED. Premium: ₹2,000-5,000/year (fixed by IRDAI). Legal status: MANDATORY. Best for: Old cars with low value. COMPREHENSIVE INSURANCE: Coverage: Third-party + Own damage + Theft + Fire + Natural calamities. Your vehicle damage: FULLY COVERED. Premium: ₹8,000-50,000/year (based on IDV). Legal status: Optional but recommended. Best for: New cars, high-value vehicles. EXAMPLE: Accident scenario - Third-party: Repairs to other car covered (₹7.5L max), Your car repairs NOT covered, Must pay from pocket. Comprehensive: Repairs to other car covered (unlimited for injury, ₹7.5L for property), Your car repairs COVERED, No out-of-pocket expense. RECOMMENDATION: Always buy comprehensive for cars less than 7-8 years old. Switch to third-party only when car value is very low and repair costs exceed premium.'
        }
      ]
    },
    {
      category: 'Premium & IDV',
      faqs: [
        {
          question: 'What is IDV and how does it affect my premium?',
          answer: 'IDV (Insured Declared Value) is the maximum amount you receive if your car is stolen or damaged beyond repair (total loss). HOW IDV IS CALCULATED: IDV = Manufacturer\'s listed selling price - Depreciation based on age. Age-wise depreciation: < 6 months: 5%, 6-12 months: 15%, 1-2 years: 20%, 2-3 years: 30%, 3-4 years: 40%, 4-5 years: 50%, Above 5 years: Agreed value between insurer and owner. IMPACT ON PREMIUM: Higher IDV = Higher premium (more risk for insurer). Lower IDV = Lower premium (less payout in total loss). Premium is typically 2-4% of IDV for comprehensive insurance. EXAMPLE: Car originally ₹8L, now 3 years old, IDV = ₹8L - 30% = ₹5.6L, Annual premium ≈ ₹11,200 - ₹22,400 (2-4% of IDV). IMPORTANT: Always choose correct IDV, not artificially low for premium savings. Low IDV means low claim payout in total loss. IDV too high may lead to claim rejection. IDV should reflect current market value of car.'
        }
      ]
    },
    {
      category: 'Claims Process',
      faqs: [
        {
          question: 'How do I file a claim and what is the process?',
          answer: 'STEP 1 - IMMEDIATE ACTIONS: Minor accident: Click photos, exchange details, inform insurer within 48 hours. Major accident: Call insurer helpline immediately, Don\'t move vehicle without surveyor approval, File FIR if third-party involved or vehicle damaged badly. STEP 2 - INTIMATION: Call 24/7 helpline or use mobile app, Provide: Policy number, accident details, location, photos, Insurer assigns claim number and surveyor. STEP 3 - DOCUMENTATION: RC book copy, Driving license, Insurance policy, FIR copy (if applicable), Estimate from garage, Photos of damage. STEP 4 - VEHICLE INSPECTION: Surveyor visits garage or accident spot, Assesses damage and estimates repair cost, Approves claim amount within approved limit. STEP 5 - REPAIRS: CASHLESS: Take car to network garage, Garage coordinates with insurer, Repairs done without payment, Collect car after repair. REIMBURSEMENT: Get car repaired anywhere, Pay from pocket, Submit bills to insurer, Reimbursement within 7-15 days. CLAIM SETTLEMENT TIME: Cashless: 2-5 days for repair approval, Reimbursement: 7-15 days after document submission. CLAIM REJECTION REASONS: Driving without valid license, Under influence of alcohol/drugs, Use for illegal purposes, Not informing insurer within time limit, Mechanical/electrical breakdown (not covered), Normal wear and tear.'
        }
      ]
    }
  ];

  // Calculate Premium (simplified)
  const calculatePremium = () => {
    const year = parseInt(calculatorInputs.year);
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    const idv = parseInt(calculatorInputs.idv) || 500000;
    
    let basePremium = idv * 0.03; // 3% of IDV as base
    
    // Age factor
    if (age > 5) basePremium *= 0.7;
    else if (age > 3) basePremium *= 0.85;
    
    return Math.round(basePremium).toLocaleString('en-IN');
  };

  return (
    <div className="w-full max-w-full bg-black overflow-x-hidden min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
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
            <Button className="hidden sm:flex text-black font-thin transition-all duration-300 h-10 px-5 rounded-xl">
              <Phone className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Talk to Expert
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#39FF14]/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#39FF14]/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          {/* Centered Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black border-2 border-[#39FF14]/30 mb-6 backdrop-blur-md">
              <Car className="w-10 h-10 sm:w-12 sm:h-12 text-[#39FF14]" strokeWidth={1.5} />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-thin tracking-wide mb-6">
              Car & Motor Insurance
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-thin mb-4">
                Complete Vehicle Protection with Cashless Repairs & Instant Claims
              </p>
              <p className="text-white/50 text-sm sm:text-base font-thin mb-8">
                Comprehensive coverage starting at ₹22/day. 5,000+ network garages across India.
              </p>

              {/* Network Statistics */}
              <div className="grid grid-cols-2 gap-4">
                {networkStats.map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md">
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
                  <h2 className="text-white text-2xl sm:text-3xl font-thin mb-2">Get Instant Car Insurance Quote</h2>
                  <p className="text-white/60 text-sm sm:text-base font-thin">Enter your car details and get best quotes in seconds</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Full Name *</label>
                    <Input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full bg-black/50 border-white/20 text-white placeholder:text-white/40 font-thin"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Mobile Number *</label>
                    <Input 
                      type="tel" 
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="w-full bg-black/50 border-white/20 text-white placeholder:text-white/40 font-thin"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Car Registration Number *</label>
                    <Input 
                      type="text" 
                      placeholder="e.g., MH 02 AB 1234"
                      className="w-full bg-black/50 border-white/20 text-white placeholder:text-white/40 font-thin uppercase"
                      maxLength={13}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Insurance Type</label>
                    <select className="w-full h-10 px-3 rounded-md bg-black/50 border border-white/20 text-white font-thin focus:border-[#39FF14]/50 focus:ring-2 focus:ring-[#39FF14]/20 outline-none">
                      <option value="" className="bg-black">Select Type</option>
                      <option value="comprehensive" className="bg-black">Comprehensive</option>
                      <option value="third-party" className="bg-black">Third Party Only</option>
                      <option value="own-damage" className="bg-black">Own Damage Only</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Policy Type</label>
                    <select className="w-full h-10 px-3 rounded-md bg-black/50 border border-white/20 text-white font-thin focus:border-[#39FF14]/50 focus:ring-2 focus:ring-[#39FF14]/20 outline-none">
                      <option value="" className="bg-black">Select Policy</option>
                      <option value="new" className="bg-black">New Policy</option>
                      <option value="renewal" className="bg-black">Renewal</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full text-black font-thin px-8 py-6 text-base rounded-xl transition-all duration-300 mb-3">
                  <Car className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  Get Your Policy Now
                </Button>
                <p className="text-white/50 text-xs font-thin text-center">*Instant policy issuance in 2 minutes</p>
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
            {['What is Motor Insurance', 'Why You Need It', 'Types of Plans', 'Benefits & Coverage', 'Add-ons', 'Premium Calculator', 'Claims Process', 'FAQs'].map((item, idx) => (
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
        
        {/* What is Motor Insurance */}
        <section id="what-is-motor-insurance" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">What is Motor Insurance?</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-4">
            <p className="text-white/70 text-base leading-relaxed">
              Motor insurance is a contract between you and an insurance company that provides financial protection against physical damage, bodily injury, and theft of your vehicle. In India, at least <span className="text-white font-medium">third-party insurance is mandatory</span> under the Motor Vehicles Act, 1988.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              A comprehensive car insurance policy covers damage to your own vehicle, third-party liability for death/injury/property damage, theft, fire, and natural calamities. It protects you from unexpected repair costs that can range from ₹5,000 for minor damages to lakhs for major accidents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                <h3 className="text-white text-lg mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  What's Covered
                </h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Accidental damage to your vehicle</li>
                  <li>• Third-party death, injury, property damage</li>
                  <li>• Theft and burglary</li>
                  <li>• Fire and explosion</li>
                  <li>• Natural calamities (flood, earthquake, storm)</li>
                  <li>• Man-made disasters (riots, terrorism)</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                <h3 className="text-white text-lg mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  What's NOT Covered
                </h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Mechanical/electrical breakdown</li>
                  <li>• Normal wear and tear</li>
                  <li>• Driving without valid license</li>
                  <li>• Driving under influence of alcohol</li>
                  <li>• Consequential loss (loss of earnings)</li>
                  <li>• Depreciation on parts (unless zero-dep)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why You Need Motor Insurance */}
        <section id="why-you-need-it" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Why You Need Motor Insurance?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Legal Requirement</h3>
              <p className="text-white/60 text-sm">
                Third-party insurance is mandatory by law. Driving without insurance can lead to ₹2,000-4,000 fine, imprisonment, and vehicle seizure.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <IndianRupee className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Financial Protection</h3>
              <p className="text-white/60 text-sm">
                Average car repair costs ₹15,000-50,000 for minor accidents and ₹2-5 lakhs for major accidents. Insurance protects your savings.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Third-Party Protection</h3>
              <p className="text-white/60 text-sm">
                Unlimited cover for third-party death/injury. Without insurance, you're personally liable for compensation running into crores.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white text-xl mb-3">No Claim Bonus</h3>
              <p className="text-white/60 text-sm">
                Get up to 50% discount on renewal for claim-free years. NCB can save you ₹4,000-25,000 annually on premium.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white text-xl mb-3">Cashless Repairs</h3>
              <p className="text-white/60 text-sm">
                Access to 5,000+ network garages across India for hassle-free cashless repairs. No upfront payment needed.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white text-xl mb-3">24/7 Roadside Help</h3>
              <p className="text-white/60 text-sm">
                Emergency towing, flat tire assistance, fuel delivery available anytime, anywhere in India at no extra cost.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Motor Insurance */}
        <section id="types-of-plans" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Types of Motor Insurance Plans</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceTypes.map((type, idx) => (
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-cyan-400" />
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
                </div>

                <p className="text-xs text-white/40 mt-4">
                  <strong className="text-white/60">Ideal for:</strong> {type.idealFor}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 text-sm"
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
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Comprehensive Benefits & Coverage</h2>
          </div>

          <div className="space-y-6">
            {comprehensiveBenefits.map((benefit, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white text-xl">{benefit.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefit.benefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Optional Add-ons */}
        <section id="add-ons" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Optional Add-on Covers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detailedAddOns.map((addon, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/20 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <addon.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg mb-1">{addon.name}</h3>
                      <p className="text-cyan-400 text-sm">{addon.price}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-4">{addon.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {addon.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-xs text-white/60">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs text-white/40">Coverage: </span>
                  <span className="text-xs text-white/70">{addon.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Calculator */}
        <section id="premium-calculator" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Premium Calculator</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">Calculate Your Premium</span>
              </div>
              <h3 className="text-2xl text-white mb-2">Get Instant Premium Estimate</h3>
              <p className="text-white/60">Enter your vehicle details below</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-white/70 mb-2">Vehicle Registration Number</label>
                <Input
                  type="text"
                  placeholder="e.g., KA01AB1234"
                  value={calculatorInputs.vehicleNumber}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, vehicleNumber: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Make</label>
                <Input
                  type="text"
                  placeholder="e.g., Maruti Suzuki"
                  value={calculatorInputs.make}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, make: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Model</label>
                <Input
                  type="text"
                  placeholder="e.g., Swift"
                  value={calculatorInputs.model}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, model: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Year of Purchase</label>
                <Input
                  type="number"
                  placeholder="e.g., 2020"
                  value={calculatorInputs.year}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, year: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">City</label>
                <Input
                  type="text"
                  placeholder="e.g., Bangalore"
                  value={calculatorInputs.city}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, city: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">IDV (Insured Declared Value)</label>
                <Input
                  type="number"
                  placeholder="e.g., 500000"
                  value={calculatorInputs.idv}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, idv: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6 mb-6">
              <div className="text-center">
                <p className="text-sm text-white/60 mb-2">Estimated Annual Premium</p>
                <p className="text-4xl text-white mb-2">₹{calculatePremium()}</p>
                <p className="text-xs text-white/40">*Approximate premium for comprehensive insurance</p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 h-12 text-base">
              Get Detailed Quotes from Top Insurers
            </Button>
          </div>
        </section>

        {/* Claims Process */}
        <section id="claims-process" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">How to File a Claim</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Immediate Actions',
                description: 'At the accident spot: Ensure safety, call police if needed, click photos of damage from all angles, exchange details with other party, note down witness contacts.',
                time: 'Within 0-30 minutes'
              },
              {
                step: '2',
                title: 'Inform Insurer',
                description: 'Call insurer 24/7 helpline or use mobile app. Provide policy number, accident details, location, and photos. Get claim number assigned.',
                time: 'Within 24-48 hours'
              },
              {
                step: '3',
                title: 'Document Collection',
                description: 'Gather: RC book copy, driving license, insurance policy, FIR copy (if applicable), repair estimate, damage photos.',
                time: 'Within 2-3 days'
              },
              {
                step: '4',
                title: 'Surveyor Inspection',
                description: 'Insurer sends surveyor to assess damage. Surveyor estimates repair cost and approves claim amount within policy limits.',
                time: 'Within 3-5 days'
              },
              {
                step: '5',
                title: 'Vehicle Repair',
                description: 'CASHLESS: Take to network garage, repairs done without payment. REIMBURSEMENT: Repair anywhere, submit bills for reimbursement.',
                time: '5-10 days for repairs'
              }
            ].map((step, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-cyan-400">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white text-lg">{step.title}</h3>
                      <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">{step.time}</span>
                    </div>
                    <p className="text-sm text-white/60">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table 1: Coverage Types Comparison */}
        <section id="coverage-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Car Insurance Coverage Comparison</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Coverage Type</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Third-Party</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Comprehensive</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Zero Depreciation</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Standalone OD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Own Damage</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Full Value</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Third-Party Liability</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Annual Premium</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2,000 - ₹5,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹8,000 - ₹50,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10,000 - ₹58,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹4,000 - ₹30,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Theft & Fire</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Natural Calamities</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✗ Not Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                  <td className="px-6 py-4 text-white/60 font-thin">✓ Covered</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Depreciation Deduction</td>
                  <td className="px-6 py-4 text-white/60 font-thin">N/A</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Yes (20-50%)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">No Deduction</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Yes (20-50%)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Best For</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Old Cars (&gt;10 yrs)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">All Cars</td>
                  <td className="px-6 py-4 text-white/60 font-thin">New Cars (&lt;5 yrs)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Long-term TP Holders</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparison Table 2: Top Motor Insurers 2024 */}
        <section id="insurer-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Top Motor Insurers Comparison 2024</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Insurer</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Claim Settlement Ratio</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Network Garages</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Cashless Settlement Time</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Add-ons Available</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">ICICI Lombard</td>
                  <td className="px-6 py-4 text-white/60 font-thin">96.8%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">7,800+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-4 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">12 Add-ons</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">HDFC ERGO</td>
                  <td className="px-6 py-4 text-white/60 font-thin">99.3%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">8,500+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1-3 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15 Add-ons</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Bajaj Allianz</td>
                  <td className="px-6 py-4 text-white/60 font-thin">94.7%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">6,200+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">3-6 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">10 Add-ons</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Tata AIG</td>
                  <td className="px-6 py-4 text-white/60 font-thin">91.5%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">5,500+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">2-5 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">11 Add-ons</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Royal Sundaram</td>
                  <td className="px-6 py-4 text-white/60 font-thin">93.2%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">4,800+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">3-5 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">9 Add-ons</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">New India Assurance</td>
                  <td className="px-6 py-4 text-white/60 font-thin">89.4%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">9,000+</td>
                  <td className="px-6 py-4 text-white/60 font-thin">4-8 Hours</td>
                  <td className="px-6 py-4 text-white/60 font-thin">8 Add-ons</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparison Table 3: Add-ons Comparison */}
        <section id="addon-comparison" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Popular Add-ons Comparison</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Add-on</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">What it Covers</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Annual Cost</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Recommended For</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Zero Depreciation</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Full claim without depreciation on parts</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1,500 - ₹5,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Cars &lt; 5 years old</td>
                  <td className="px-6 py-4 text-green-400 font-thin">Must Have</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Engine Protection</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Water damage, hydrostatic lock</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹500 - ₹2,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Flood-prone areas</td>
                  <td className="px-6 py-4 text-green-400 font-thin">Must Have</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Consumables Cover</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Engine oil, nuts, bolts, AC gas</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹500 - ₹1,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">All car owners</td>
                  <td className="px-6 py-4 text-yellow-400 font-thin">Good to Have</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Roadside Assistance</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Towing, fuel delivery, flat tire help</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹300 - ₹800</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Long-distance travelers</td>
                  <td className="px-6 py-4 text-yellow-400 font-thin">Good to Have</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">NCB Protection</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Protects No Claim Bonus after claim</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹500 - ₹1,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">20%+ NCB holders</td>
                  <td className="px-6 py-4 text-blue-400 font-thin">Optional</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Return to Invoice</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Full invoice value in total loss</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1,000 - ₹3,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">New cars (0-3 years)</td>
                  <td className="px-6 py-4 text-blue-400 font-thin">Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Metric Table 1: Age-wise Depreciation & IDV */}
        <section id="depreciation-metrics" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Vehicle Depreciation & IDV Calculator</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Vehicle Age</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Depreciation %</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">IDV (₹8L Car)</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Annual Premium (Approx)</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">NCB Discount Available</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">&lt; 6 Months</td>
                  <td className="px-6 py-4 text-white/60 font-thin">5%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹7,60,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹22,800</td>
                  <td className="px-6 py-4 text-white/60 font-thin">—</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">6 - 12 Months</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹6,80,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20,400</td>
                  <td className="px-6 py-4 text-white/60 font-thin">20%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">1 - 2 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">20%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹6,40,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹19,200</td>
                  <td className="px-6 py-4 text-white/60 font-thin">25%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">2 - 3 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">30%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹5,60,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹16,800</td>
                  <td className="px-6 py-4 text-white/60 font-thin">35%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">3 - 4 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">40%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹4,80,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹14,400</td>
                  <td className="px-6 py-4 text-white/60 font-thin">45%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">4 - 5 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">50%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹4,00,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Metric Table 2: Claim Settlement Statistics */}
        <section id="claim-statistics" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Motor Insurance Claim Statistics FY 2023-24</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Claim Type</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Settlement Ratio</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Avg. Claim Amount</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Avg. Settlement Time</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Rejection Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Cashless (Own Damage)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">96.5%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹35,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">3-5 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">3.5%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Reimbursement</td>
                  <td className="px-6 py-4 text-white/60 font-thin">92.8%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹28,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">12-15 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">7.2%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Total Loss</td>
                  <td className="px-6 py-4 text-white/60 font-thin">88.2%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹3,85,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">20-30 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">11.8%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Theft Claims</td>
                  <td className="px-6 py-4 text-white/60 font-thin">82.5%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹4,20,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">45-60 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">17.5%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Third-Party Claims</td>
                  <td className="px-6 py-4 text-white/60 font-thin">78.9%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹2,15,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">60-90 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">21.1%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Industry Average</td>
                  <td className="px-6 py-4 text-white/60 font-thin">91.3%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹48,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">14 Days</td>
                  <td className="px-6 py-4 text-white/60 font-thin">8.7%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Metric Table 3: Premium Breakup by Vehicle Type */}
        <section id="premium-metrics" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Average Premium by Vehicle Type & City (2024)</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Vehicle Type</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Metro Cities</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Tier 1 Cities</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Tier 2/3 Cities</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">NCB Discount Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Hatchback (₹5-7L)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12,000 - ₹18,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10,000 - ₹15,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹8,000 - ₹12,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Save ₹6,000 (50% NCB)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Sedan (₹10-15L)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20,000 - ₹30,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹17,000 - ₹25,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹14,000 - ₹20,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Save ₹10,000 (50% NCB)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">SUV (₹15-25L)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹28,000 - ₹45,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹24,000 - ₹38,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20,000 - ₹32,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Save ₹15,000 (50% NCB)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Luxury Car (₹40L+)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹60,000 - ₹1,20,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹50,000 - ₹1,00,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹45,000 - ₹90,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Save ₹30,000 (50% NCB)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Electric Vehicle</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15,000 - ₹35,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12,000 - ₹28,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹10,000 - ₹22,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Save ₹8,000 (50% NCB)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Two-Wheeler</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1,500 - ₹3,500</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1,200 - ₹2,800</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹800 - ₹2,000</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Save ₹1,000 (50% NCB)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* IDV Calculator Section */}
        <section id="idv-calculator" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">IDV Calculator - Calculate Your Car's Insured Declared Value</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-white text-2xl font-thin mb-4">What is IDV (Insured Declared Value)?</h3>
              <p className="text-white/70 text-base leading-relaxed">
                IDV is the maximum amount you'll receive from your insurer if your car is stolen or damaged beyond repair (total loss). It represents the current market value of your vehicle minus depreciation. IDV directly impacts your premium - higher IDV means higher premium but better claim payout.
              </p>
            </div>

            {/* IDV Calculator Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h3 className="text-white text-xl font-thin mb-4">Calculate Your Car's IDV</h3>
                
                <div>
                  <label className="block text-white/70 text-sm font-thin mb-2">Car Manufacturer *</label>
                  <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none">
                    <option value="" className="bg-black">Select Manufacturer</option>
                    <option value="maruti" className="bg-black">Maruti Suzuki</option>
                    <option value="hyundai" className="bg-black">Hyundai</option>
                    <option value="tata" className="bg-black">Tata Motors</option>
                    <option value="mahindra" className="bg-black">Mahindra</option>
                    <option value="honda" className="bg-black">Honda</option>
                    <option value="toyota" className="bg-black">Toyota</option>
                    <option value="kia" className="bg-black">Kia</option>
                    <option value="mg" className="bg-black">MG Motor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-thin mb-2">Model *</label>
                  <Input 
                    type="text" 
                    placeholder="e.g., Swift, Creta, Nexon"
                    className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-thin mb-2">Variant *</label>
                  <Input 
                    type="text" 
                    placeholder="e.g., VXI, SX, XZ+"
                    className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-thin mb-2">Registration Year *</label>
                  <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none">
                    <option value="" className="bg-black">Select Year</option>
                    <option value="2024" className="bg-black">2024</option>
                    <option value="2023" className="bg-black">2023</option>
                    <option value="2022" className="bg-black">2022</option>
                    <option value="2021" className="bg-black">2021</option>
                    <option value="2020" className="bg-black">2020</option>
                    <option value="2019" className="bg-black">2019</option>
                    <option value="2018" className="bg-black">2018</option>
                    <option value="2017" className="bg-black">2017</option>
                    <option value="2016" className="bg-black">2016</option>
                    <option value="2015" className="bg-black">2015</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-thin mb-2">Registration City *</label>
                  <Input 
                    type="text" 
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                    className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-thin px-8 py-3 text-base rounded-xl">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate IDV
                </Button>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  <h4 className="text-white text-lg font-thin mb-4">IDV Depreciation Chart</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <span className="text-white/70 text-sm">Less than 6 months</span>
                      <span className="text-cyan-400 font-medium">5% depreciation</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <span className="text-white/70 text-sm">6 months - 1 year</span>
                      <span className="text-cyan-400 font-medium">15% depreciation</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <span className="text-white/70 text-sm">1 - 2 years</span>
                      <span className="text-cyan-400 font-medium">20% depreciation</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <span className="text-white/70 text-sm">2 - 3 years</span>
                      <span className="text-cyan-400 font-medium">30% depreciation</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <span className="text-white/70 text-sm">3 - 4 years</span>
                      <span className="text-cyan-400 font-medium">40% depreciation</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <span className="text-white/70 text-sm">4 - 5 years</span>
                      <span className="text-cyan-400 font-medium">50% depreciation</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <span className="text-white/70 text-sm">Above 5 years</span>
                      <span className="text-cyan-400 font-medium">Mutually agreed value</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="text-white text-lg font-thin mb-4">Example Calculation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Ex-showroom Price (2021):</span>
                      <span className="text-white">₹8,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Current Age:</span>
                      <span className="text-white">3 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Depreciation Rate:</span>
                      <span className="text-white">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Depreciation Amount:</span>
                      <span className="text-white">₹2,40,000</span>
                    </div>
                    <div className="h-px bg-white/20 my-3"></div>
                    <div className="flex justify-between font-medium">
                      <span className="text-white">Current IDV:</span>
                      <span className="text-cyan-400 text-lg">₹5,60,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
                <h4 className="text-white text-sm font-thin mb-1">Accurate Valuation</h4>
                <p className="text-white/60 text-xs">Based on current market rates and IRDAI guidelines</p>
              </div>
              <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                <TrendingUp className="w-6 h-6 text-blue-400 mb-2" />
                <h4 className="text-white text-sm font-thin mb-1">Premium Impact</h4>
                <p className="text-white/60 text-xs">IDV affects 2-4% of premium calculation</p>
              </div>
              <div className="p-4 rounded-xl border border-orange-500/20 bg-orange-500/5">
                <AlertTriangle className="w-6 h-6 text-orange-400 mb-2" />
                <h4 className="text-white text-sm font-thin mb-1">Choose Wisely</h4>
                <p className="text-white/60 text-xs">Don't undervalue - affects total loss claims</p>
              </div>
            </div>
          </div>
        </section>

        {/* Electric Car Insurance Section */}
        <section id="electric-car-insurance" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Electric Car Insurance - Specialized EV Coverage</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                  <h3 className="text-white text-2xl font-thin">Why Electric Vehicles Need Special Insurance</h3>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                  Electric vehicles have unique components like high-voltage batteries, electric motors, and charging equipment that require specialized coverage. Standard car insurance may not adequately protect these expensive EV-specific parts.
                </p>

                <div className="space-y-3 mt-6">
                  <h4 className="text-white text-lg font-thin">What Makes EV Insurance Different</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 text-sm font-thin">Battery Coverage</p>
                        <p className="text-white/60 text-xs">Covers battery damage, fire, water damage - battery costs 30-40% of car value</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 text-sm font-thin">Charging Equipment</p>
                        <p className="text-white/60 text-xs">Covers home chargers, cables, and public charging station damage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 text-sm font-thin">Motor & Electronics</p>
                        <p className="text-white/60 text-xs">Covers electric motor, inverter, regenerative braking system</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 text-sm font-thin">Battery Degradation</p>
                        <p className="text-white/60 text-xs">Some policies cover gradual battery capacity loss over time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 text-sm font-thin">Emergency Charging</p>
                        <p className="text-white/60 text-xs">Roadside assistance with mobile charging if battery runs out</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                  <h4 className="text-white text-lg font-thin mb-4">Popular EV Models & Premium Range</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <div>
                        <p className="text-white text-sm">Tata Nexon EV</p>
                        <p className="text-white/50 text-xs">₹14.5L - ₹19L</p>
                      </div>
                      <span className="text-green-400 text-sm font-medium">₹18K-₹25K/year</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <div>
                        <p className="text-white text-sm">MG ZS EV</p>
                        <p className="text-white/50 text-xs">₹21L - ₹26L</p>
                      </div>
                      <span className="text-green-400 text-sm font-medium">₹28K-₹38K/year</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <div>
                        <p className="text-white text-sm">Hyundai Kona Electric</p>
                        <p className="text-white/50 text-xs">₹23L - ₹24L</p>
                      </div>
                      <span className="text-green-400 text-sm font-medium">₹30K-₹40K/year</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <div>
                        <p className="text-white text-sm">BYD Atto 3</p>
                        <p className="text-white/50 text-xs">₹33L - ₹34L</p>
                      </div>
                      <span className="text-green-400 text-sm font-medium">₹42K-₹52K/year</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                      <div>
                        <p className="text-white text-sm">Tesla Model 3</p>
                        <p className="text-white/50 text-xs">₹50L+</p>
                      </div>
                      <span className="text-green-400 text-sm font-medium">₹70K-₹95K/year</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="text-white text-lg font-thin mb-4">Premium Savings for EVs</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Percent className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 text-sm">15% Govt Discount</p>
                        <p className="text-white/60 text-xs">IRDAI mandated discount on third-party premium</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Percent className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 text-sm">Lower Claim Frequency</p>
                        <p className="text-white/60 text-xs">EVs have fewer moving parts = less maintenance claims</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Percent className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/90 text-sm">NCB Benefits</p>
                        <p className="text-white/60 text-xs">Same 20-50% No Claim Bonus as regular cars</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EV Insurance Quote Form */}
            <div className="mt-8 p-6 rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
              <h4 className="text-white text-xl font-thin mb-6 text-center">Get Electric Vehicle Insurance Quote</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white/70 text-sm font-thin mb-2">EV Model *</label>
                  <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 outline-none">
                    <option value="" className="bg-black">Select EV Model</option>
                    <option value="nexon" className="bg-black">Tata Nexon EV</option>
                    <option value="zs" className="bg-black">MG ZS EV</option>
                    <option value="kona" className="bg-black">Hyundai Kona</option>
                    <option value="atto3" className="bg-black">BYD Atto 3</option>
                    <option value="tesla" className="bg-black">Tesla Model 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-thin mb-2">Registration Year *</label>
                  <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 outline-none">
                    <option value="" className="bg-black">Select Year</option>
                    <option value="2024" className="bg-black">2024</option>
                    <option value="2023" className="bg-black">2023</option>
                    <option value="2022" className="bg-black">2022</option>
                    <option value="2021" className="bg-black">2021</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-thin mb-2">Mobile Number *</label>
                  <Input 
                    type="tel" 
                    placeholder="Enter mobile number"
                    className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-green-500/50 focus:ring-green-500/20"
                  />
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-thin px-8 py-3">
                <Zap className="w-5 h-5 mr-2" />
                Get EV Insurance Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Comprehensive Insurance Details Section */}
        <section id="comprehensive-insurance-details" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Comprehensive Car Insurance - Complete Coverage Explained</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <p className="text-white/70 text-base leading-relaxed">
                Comprehensive car insurance is the most complete form of motor insurance that covers damage to your own vehicle along with third-party liabilities. Unlike third-party insurance (which is mandatory), comprehensive insurance is optional but highly recommended for complete financial protection.
              </p>
            </div>

            {/* Coverage Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="text-white text-xl font-thin flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-400" />
                  What's Covered (Own Damage)
                </h3>
                <div className="space-y-2">
                  <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Accident Damage</p>
                        <p className="text-white/60 text-xs">Collision with another vehicle, objects, or single-car accidents</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Theft & Burglary</p>
                        <p className="text-white/60 text-xs">Complete vehicle theft or theft of parts like mirrors, batteries, wheels</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Fire Damage</p>
                        <p className="text-white/60 text-xs">Fire from any source - short circuit, explosion, self-ignition, external fire</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Natural Calamities</p>
                        <p className="text-white/60 text-xs">Floods, earthquakes, landslides, lightning, cyclones, hailstorms</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Man-Made Disasters</p>
                        <p className="text-white/60 text-xs">Riots, strikes, terrorist activities, malicious acts, vandalism</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Transit Damage</p>
                        <p className="text-white/60 text-xs">Damage during transportation via road, rail, inland waterway, air, or lift</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white text-xl font-thin flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-400" />
                  Third-Party Liability Coverage
                </h3>
                <div className="space-y-2">
                  <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Death or Bodily Injury</p>
                        <p className="text-white/60 text-xs">Unlimited coverage for third-party death or permanent disability</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Property Damage</p>
                        <p className="text-white/60 text-xs">Up to ₹7.5 lakh for damage to third-party vehicle or property</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Legal Liability</p>
                        <p className="text-white/60 text-xs">Legal defense costs and compensation as per Motor Vehicles Act</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white text-xl font-thin flex items-center gap-2 mt-6">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                    What's NOT Covered
                  </h3>
                  <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Mechanical/Electrical Breakdown</p>
                        <p className="text-white/60 text-xs">Engine failure, gearbox issues, battery failure due to normal wear</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Drunk Driving / No License</p>
                        <p className="text-white/60 text-xs">Accidents while driving without valid license or under influence</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Normal Wear & Tear</p>
                        <p className="text-white/60 text-xs">Depreciation, tire wear, brake pad wear, routine maintenance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons Available */}
            <div className="mt-8">
              <h3 className="text-white text-2xl font-thin mb-6 flex items-center gap-2">
                <Award className="w-7 h-7 text-purple-400" />
                Popular Add-ons to Enhance Your Comprehensive Cover
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <h4 className="text-white font-thin mb-2">Zero Depreciation</h4>
                  <p className="text-white/60 text-sm mb-2">Get full claim without depreciation deduction on parts</p>
                  <p className="text-cyan-400 text-xs">+15-20% premium</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <h4 className="text-white font-thin mb-2">Engine Protection</h4>
                  <p className="text-white/60 text-sm mb-2">Covers engine damage due to water ingress, oil leakage</p>
                  <p className="text-cyan-400 text-xs">+3-5% premium</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <h4 className="text-white font-thin mb-2">Return to Invoice</h4>
                  <p className="text-white/60 text-sm mb-2">Get invoice value in total loss instead of IDV</p>
                  <p className="text-cyan-400 text-xs">+10-15% premium</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <h4 className="text-white font-thin mb-2">Roadside Assistance</h4>
                  <p className="text-white/60 text-sm mb-2">Towing, fuel delivery, flat tire, battery jumpstart 24/7</p>
                  <p className="text-cyan-400 text-xs">+₹500-1,500/year</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <h4 className="text-white font-thin mb-2">NCB Protection</h4>
                  <p className="text-white/60 text-sm mb-2">Protects No Claim Bonus even after making 1 claim</p>
                  <p className="text-cyan-400 text-xs">+₹200-800/year</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <h4 className="text-white font-thin mb-2">Consumables Cover</h4>
                  <p className="text-white/60 text-sm mb-2">Covers engine oil, nuts, bolts, screws, washers, grease</p>
                  <p className="text-cyan-400 text-xs">+₹300-1,000/year</p>
                </div>
              </div>
            </div>

            {/* Premium Comparison */}
            <div className="mt-8 p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-indigo-500/5">
              <h4 className="text-white text-xl font-thin mb-6">Comprehensive vs Third-Party Premium Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-thin border-b border-white/10">Car Type</th>
                      <th className="px-4 py-3 text-left text-white font-thin border-b border-white/10">Third-Party Only</th>
                      <th className="px-4 py-3 text-left text-white font-thin border-b border-white/10">Comprehensive</th>
                      <th className="px-4 py-3 text-left text-white font-thin border-b border-white/10">Extra Protection Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3 text-white/80 font-thin">Hatchback (₹5-8L)</td>
                      <td className="px-4 py-3 text-white/60 font-thin">₹2,094</td>
                      <td className="px-4 py-3 text-cyan-400 font-thin">₹12,000 - ₹18,000</td>
                      <td className="px-4 py-3 text-green-400 text-sm">Own damage up to ₹5-8L</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3 text-white/80 font-thin">Sedan (₹10-15L)</td>
                      <td className="px-4 py-3 text-white/60 font-thin">₹2,094</td>
                      <td className="px-4 py-3 text-cyan-400 font-thin">₹20,000 - ₹30,000</td>
                      <td className="px-4 py-3 text-green-400 text-sm">Own damage up to ₹10-15L</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3 text-white/80 font-thin">SUV (₹15-25L)</td>
                      <td className="px-4 py-3 text-white/60 font-thin">₹3,416</td>
                      <td className="px-4 py-3 text-cyan-400 font-thin">₹28,000 - ₹45,000</td>
                      <td className="px-4 py-3 text-green-400 text-sm">Own damage up to ₹15-25L</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-xs mt-4">*Third-party premium is fixed by IRDAI. Comprehensive premium varies based on IDV, add-ons, NCB.</p>
            </div>
          </div>
        </section>

        {/* Car Valuation Section */}
        <section id="car-valuation" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Car Valuation - Know Your Vehicle's True Market Value</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <p className="text-white/70 text-base leading-relaxed">
                Car valuation is crucial for insurance as it determines your IDV (Insured Declared Value), which directly impacts premium and claim settlement. An accurate valuation ensures you're neither overpaying premium nor underinsured during claims.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Valuation Calculator */}
              <div className="space-y-6">
                <h3 className="text-white text-xl font-thin">Get Instant Car Valuation</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Registration Number (Optional)</label>
                    <Input 
                      type="text" 
                      placeholder="e.g., MH 02 AB 1234"
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-orange-500/50 focus:ring-orange-500/20 uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Car Brand *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 outline-none">
                      <option value="" className="bg-black">Select Brand</option>
                      <option value="maruti" className="bg-black">Maruti Suzuki</option>
                      <option value="hyundai" className="bg-black">Hyundai</option>
                      <option value="tata" className="bg-black">Tata Motors</option>
                      <option value="mahindra" className="bg-black">Mahindra</option>
                      <option value="honda" className="bg-black">Honda</option>
                      <option value="toyota" className="bg-black">Toyota</option>
                      <option value="ford" className="bg-black">Ford</option>
                      <option value="volkswagen" className="bg-black">Volkswagen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Model & Variant *</label>
                    <Input 
                      type="text" 
                      placeholder="e.g., Swift VXI, Creta SX"
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm font-thin mb-2">Mfg Year *</label>
                      <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 outline-none">
                        <option value="" className="bg-black">Year</option>
                        <option value="2024" className="bg-black">2024</option>
                        <option value="2023" className="bg-black">2023</option>
                        <option value="2022" className="bg-black">2022</option>
                        <option value="2021" className="bg-black">2021</option>
                        <option value="2020" className="bg-black">2020</option>
                        <option value="2019" className="bg-black">2019</option>
                        <option value="2018" className="bg-black">2018</option>
                        <option value="2017" className="bg-black">2017</option>
                        <option value="2016" className="bg-black">2016</option>
                        <option value="2015" className="bg-black">2015</option>
                        <option value="older" className="bg-black">Older</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-thin mb-2">KMs Driven *</label>
                      <Input 
                        type="number" 
                        placeholder="e.g., 45000"
                        className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-orange-500/50 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Ownership *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 outline-none">
                      <option value="" className="bg-black">Select Ownership</option>
                      <option value="1" className="bg-black">First Owner</option>
                      <option value="2" className="bg-black">Second Owner</option>
                      <option value="3" className="bg-black">Third Owner</option>
                      <option value="4+" className="bg-black">Fourth or More</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Car Condition *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 outline-none">
                      <option value="" className="bg-black">Select Condition</option>
                      <option value="excellent" className="bg-black">Excellent (Like new, no issues)</option>
                      <option value="good" className="bg-black">Good (Minor wear, well maintained)</option>
                      <option value="average" className="bg-black">Average (Some dents/scratches)</option>
                      <option value="poor" className="bg-black">Poor (Major damage/issues)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">City *</label>
                    <Input 
                      type="text" 
                      placeholder="e.g., Mumbai, Bangalore"
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-thin px-8 py-3 text-base rounded-xl">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Get Instant Valuation
                  </Button>
                </div>
              </div>

              {/* Valuation Factors */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-red-500/10">
                  <h4 className="text-white text-lg font-thin mb-4">Factors Affecting Car Valuation</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Age & Depreciation</p>
                        <p className="text-white/60 text-xs">Car loses 15-20% value in first year, 10-15% annually after</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Mileage/Usage</p>
                        <p className="text-white/60 text-xs">Higher km driven = lower value. Avg 10,000-15,000 km/year is normal</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Condition & Maintenance</p>
                        <p className="text-white/60 text-xs">Service history, accidents, damages affect value by 10-30%</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Ownership History</p>
                        <p className="text-white/60 text-xs">First owner cars valued 5-10% higher than multiple owners</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Location/City</p>
                        <p className="text-white/60 text-xs">Metro city cars valued 5-15% higher than smaller cities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-thin">Model Popularity</p>
                        <p className="text-white/60 text-xs">Demand for specific models affects resale value significantly</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="text-white text-lg font-thin mb-4">Valuation Methods</h4>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-white text-sm font-thin mb-1">1. Market Comparison</p>
                      <p className="text-white/60 text-xs">Compare similar cars selling in your city</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-white text-sm font-thin mb-1">2. Depreciation Method</p>
                      <p className="text-white/60 text-xs">Original price minus age-based depreciation</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-white text-sm font-thin mb-1">3. Online Valuation Tools</p>
                      <p className="text-white/60 text-xs">Use dealer/insurer online calculators</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-white text-sm font-thin mb-1">4. Professional Inspection</p>
                      <p className="text-white/60 text-xs">Get certified valuation from experts</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
                  <h4 className="text-white text-lg font-thin mb-3">Why Accurate Valuation Matters</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/70 text-sm">Correct IDV = Accurate premium (not overpaying)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/70 text-sm">Fair claim settlement in total loss/theft</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/70 text-sm">Better resale value negotiation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/70 text-sm">Loan/refinance applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive FAQs */}
        <section id="faqs" className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {categorizedFAQs.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-white text-xl mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
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
                      <AccordionContent className="text-white/60 pb-4 text-sm leading-relaxed">
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
        <section className="relative rounded-2xl overflow-hidden border border-cyan-500/30 py-12 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-black to-blue-500/20"></div>
          <div className="relative z-10 text-center space-y-6 px-6">
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Get Your Vehicle Insured Today</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Compare quotes from top insurers, choose the best plan, and buy online in minutes. Instant policy issuance with 5,000+ network garages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 h-12 px-8">
                <Calculator className="w-4 h-4 mr-2" />
                Compare Motor Insurance Plans
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
