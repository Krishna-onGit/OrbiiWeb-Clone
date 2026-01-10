import React from 'react';
import { Umbrella, TrendingUp, Heart, Car, Grid3x3, ArrowLeft } from 'lucide-react';

// Mapping from item names to product IDs or page routes
const itemToRoute: Record<string, { type: 'product' | 'page', id: string }> = {
  // Life/Term Insurance products
  'List of Term Insurance Plan': { type: 'product', id: 'list-of-term-insurance' },
  'Term Insurance for NRI': { type: 'product', id: 'term-insurance-nri' },
  'What is Term Insurance': { type: 'product', id: 'what-is-term-insurance' },
  '1 Crore Term Insurance': { type: 'page', id: 'one-crore-term' },
  'Term Insurance Calculator': { type: 'product', id: 'term-insurance-calculator' },
  'Dedicated Claim Assistance': { type: 'product', id: 'dedicated-claim-assistance' },
  'Term Insurance for Women': { type: 'product', id: 'term-insurance-women' },
  'Term Insurance for HNI': { type: 'product', id: 'term-insurance-hni' },
  'Term Insurance Return of Premium': { type: 'product', id: 'return-of-premium' },
  
  // Investment products
  'Unit Linked Insurance Plans (ULIP)': { type: 'product', id: 'ulip-plans' },
  'Investment Plans for NRIs': { type: 'product', id: 'investment-plans-nri' },
  'SIP Calculator': { type: 'product', id: 'sip-calculator' },
  'Capital Guarantee Plans': { type: 'product', id: 'capital-guarantee-plans' },
  'Child Plans': { type: 'product', id: 'child-education-plans' },
  'Pension Plans': { type: 'product', id: 'pension-plans' },
  'Dollar Based Investment Plans': { type: 'product', id: 'dollar-based-investment' },
  'Guaranteed Return Plans': { type: 'product', id: 'guaranteed-return-plans' },
  'Tax Saving Investments': { type: 'product', id: 'tax-saving-investments' },
  'SIP (Systematic Investment Plan)': { type: 'product', id: 'sip-systematic-investment' },
  'Endowment Policy': { type: 'product', id: 'endowment-plans' },
  'LIC': { type: 'product', id: 'lic-life-insurance' },
  'Money Back Policy': { type: 'product', id: 'money-back-policy' },
  'Annuity Plans': { type: 'product', id: 'annuity-plans' },
  'Income Tax Calculator': { type: 'product', id: 'income-tax-calculator' },
  
  // Health products
  'Family Health Insurance': { type: 'product', id: 'family-health-insurance' },
  'Senior Citizen Health Insurance': { type: 'product', id: 'senior-citizen-health' },
  'Health Insurance for Parents': { type: 'product', id: 'health-insurance-parents' },
  'Maternity Insurance': { type: 'product', id: 'maternity-insurance' },
  'Network Hospitals': { type: 'product', id: 'network-hospitals' },
  'Critical Illness Insurance': { type: 'product', id: 'critical-illness' },
  
  // Motor products
  'Bike Insurance': { type: 'product', id: 'bike-insurance' },
  'Zero Dep Car Insurance': { type: 'product', id: 'zero-dep-car' },
  'Third Party Insurance': { type: 'product', id: 'third-party-car' },
  
  // Travel products
  'International Travel Insurance': { type: 'product', id: 'international-travel' }
};

const insuranceCategories = [
  {
    id: 'term',
    title: 'Term Insurance',
    icon: Umbrella,
    color: 'text-blue-400',
    items: [
      'Life Insurance',
      'List of Term Insurance Plan',
      'Term Insurance for NRI',
      'What is Term Insurance',
      '1 Crore Term Insurance',
      'Term Insurance Calculator',
      'Dedicated Claim Assistance',
      'Term Insurance for Women',
      'Term Insurance for HNI',
      'Term Insurance Return of Premium'
    ]
  },
  {
    id: 'investment',
    title: 'Investment Plans',
    icon: TrendingUp,
    color: 'text-yellow-400',
    items: [
      'Investment Plans with High Returns',
      'Unit Linked Insurance Plans (ULIP)',
      'Investment Plans for NRIs',
      'SIP Calculator',
      'Capital Guarantee Plans',
      'Child Plans',
      'Pension Plans',
      'Dollar Based Investment Plans',
      'Guaranteed Return Plans',
      'Tax Saving Investments',
      'SIP (Systematic Investment Plan)',
      'Endowment Policy',
      'LIC',
      'Money Back Policy',
      'Annuity Plans',
      'Income Tax Calculator'
    ]
  },
  {
    id: 'health',
    title: 'Health Insurance',
    icon: Heart,
    color: 'text-red-400',
    items: [
      'Book Free Home Visit',
      'Family Health Insurance',
      'Senior Citizen Health Insurance',
      'Health Insurance for Parents',
      'Maternity Insurance',
      'Network Hospitals',
      'Health Insurance Portability',
      'OPD Cover In Health Insurance',
      'Mediclaim Policy',
      'Critical Illness Insurance',
      'Health Insurance Calculator',
      'Health Insurance Companies',
      'Types of Health Insurance',
      'Health Insurance for NRIs'
    ]
  },
  {
    id: 'car',
    title: 'Car Insurance',
    icon: Car,
    color: 'text-cyan-400',
    items: [
      'Motor Insurance',
      'Bike Insurance',
      'Zero Dep Car Insurance',
      'Third Party Insurance',
      'Third Party Bike Insurance',
      'Car Insurance Calculator',
      'Bike Insurance Calculator',
      'Car Insurance Companies',
      'Pay As You Drive Insurance',
      'Commercial Vehicle Insurance',
      'Electric Car Insurance',
      'E-Bike Insurance',
      'IDV Calculator',
      'Comprehensive Insurance',
      'Car Valuation'
    ]
  },
  {
    id: 'other',
    title: 'Other Insurance',
    icon: Grid3x3,
    color: 'text-purple-400',
    items: [
      'Travel Insurance',
      'International Travel Insurance',
      'Schengen travel insurance',
      'Group Health Insurance',
      'Marine Insurance',
      'Workmen Compensation Policy',
      'Professional Indemnity',
      'Doctors Indemnity Insurance',
      'Fire Insurance'
    ]
  }
];

interface InsuranceCalculatorPageProps {
  onBack: () => void;
  onSelectInsurance: (type: string) => void;
  onSelectProduct?: (productId: string) => void;
  onSelectPage?: (pageId: string) => void;
}

export default function InsuranceCalculatorPage({ onBack, onSelectInsurance, onSelectProduct, onSelectPage }: InsuranceCalculatorPageProps) {
  const handleItemClick = (item: string, categoryId: string) => {
    const route = itemToRoute[item];
    
    if (route) {
      if (route.type === 'product' && onSelectProduct) {
        onSelectProduct(route.id);
      } else if (route.type === 'page' && onSelectPage) {
        onSelectPage(route.id);
      }
    } else {
      // Default: navigate to category page
      onSelectInsurance(categoryId);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={onBack}
              className="p-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Home</span>
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl">Insurance Products</h1>
          <p className="text-white/60 mt-2">Explore our comprehensive insurance solutions</p>
        </div>
      </div>

      {/* Quick Navigation */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-6">
        <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
          <h2 className="text-white font-thin mb-4 text-center">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Life Insurance', 'Health Insurance', 'Motor Insurance', 'Investment Plans', 'Other Insurance', 'Calculators', 'Compare Plans', 'Tax Benefits'].map((item, idx) => (
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

      {/* Insurance Categories Grid */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {insuranceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className={`w-5 h-5 ${category.color}`} strokeWidth={2} />
                  <h2 className={`text-lg ${category.color}`}>{category.title}</h2>
                </div>

                {/* Category Items */}
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={() => handleItemClick(item, category.id)}
                        className="text-left text-sm text-white/70 hover:text-white transition-colors w-full"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}