import { Receipt, ArrowRight, Calculator, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface IncomeTaxCalculatorPageProps {
  onBack: () => void;
}

export default function IncomeTaxCalculatorPage({ onBack }: IncomeTaxCalculatorPageProps) {
  const [annualIncome, setAnnualIncome] = useState<string>('1000000');
  const [regime, setRegime] = useState<'old' | 'new'>('new');
  const [deductions, setDeductions] = useState<string>('50000');
  const [showResults, setShowResults] = useState(false);

  const calculateTax = () => {
    const income = parseFloat(annualIncome);
    const deduction = regime === 'old' ? parseFloat(deductions) : 50000; // Standard deduction only in new regime
    const taxableIncome = income - deduction;

    let tax = 0;

    if (regime === 'new') {
      // New Tax Regime (FY 2023-24)
      if (taxableIncome <= 300000) tax = 0;
      else if (taxableIncome <= 600000) tax = (taxableIncome - 300000) * 0.05;
      else if (taxableIncome <= 900000) tax = 15000 + (taxableIncome - 600000) * 0.10;
      else if (taxableIncome <= 1200000) tax = 45000 + (taxableIncome - 900000) * 0.15;
      else if (taxableIncome <= 1500000) tax = 90000 + (taxableIncome - 1200000) * 0.20;
      else tax = 150000 + (taxableIncome - 1500000) * 0.30;
    } else {
      // Old Tax Regime
      if (taxableIncome <= 250000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
      else tax = 112500 + (taxableIncome - 1000000) * 0.30;
    }

    // Add 4% cess
    const totalTax = tax * 1.04;
    const effectiveRate = (totalTax / income) * 100;
    const takeHome = income - totalTax;

    return {
      taxableIncome: Math.round(taxableIncome),
      totalTax: Math.round(totalTax),
      effectiveRate: effectiveRate.toFixed(2),
      takeHome: Math.round(takeHome),
      monthlyTakeHome: Math.round(takeHome / 12)
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateTax() : null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumb */}
      <div className="border-b border-white/10">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <button onClick={onBack} className="hover:text-[#39FF14] transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={onBack} className="hover:text-[#39FF14] transition-colors">
              Calculators
            </button>
            <span>/</span>
            <span className="text-white">Income Tax Calculator</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 glass-card rounded-lg">
              <Receipt className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-3">Income Tax Calculator</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Calculate your income tax liability under both old and new tax regimes. Make informed decisions
                about which regime offers better tax savings for your income level.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Input Form */}
          <div>
            <div className="glass-card rounded-lg p-8">
              <h3 className="text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#39FF14]" />
                Enter Income Details
              </h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="income" className="text-white mb-2 block">
                    Annual Income (₹)
                  </Label>
                  <Input
                    id="income"
                    type="number"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="0"
                    step="10000"
                  />
                  <p className="text-xs text-white/40 mt-1">Total income from all sources</p>
                </div>

                <div>
                  <Label className="text-white mb-3 block">
                    Tax Regime
                  </Label>
                  <RadioGroup value={regime} onValueChange={(value: string) => setRegime(value as 'old' | 'new')}>
                    <div className="glass-card rounded-lg p-4 mb-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new" id="new" className="border-white/20" />
                        <Label htmlFor="new" className="text-white cursor-pointer flex-1">
                          <div>
                            <div className="font-semibold">New Tax Regime</div>
                            <div className="text-xs text-white/60">Lower rates, limited deductions</div>
                          </div>
                        </Label>
                      </div>
                    </div>
                    <div className="glass-card rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="old" id="old" className="border-white/20" />
                        <Label htmlFor="old" className="text-white cursor-pointer flex-1">
                          <div>
                            <div className="font-semibold">Old Tax Regime</div>
                            <div className="text-xs text-white/60">Higher rates, more deductions</div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {regime === 'old' && (
                  <div>
                    <Label htmlFor="deductions" className="text-white mb-2 block">
                      Total Deductions (₹)
                    </Label>
                    <Input
                      id="deductions"
                      type="number"
                      value={deductions}
                      onChange={(e) => setDeductions(e.target.value)}
                      className="bg-white/5 border-white/10 text-white"
                      min="0"
                      step="10000"
                    />
                    <p className="text-xs text-white/40 mt-1">80C, 80D, HRA, etc.</p>
                  </div>
                )}

                <Button
                  onClick={handleCalculate}
                  className="w-full btn-glow"
                >
                  Calculate Tax
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Tax Slabs Info */}
            <div className="glass-card rounded-lg p-6 mt-6 border-l-4 border-[#39FF14]">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#39FF14]" />
                Tax Slab Information
              </h4>
              <div className="space-y-2 text-sm">
                {regime === 'new' ? (
                  <>
                    <div className="flex justify-between text-white/70">
                      <span>Up to ₹3,00,000</span>
                      <span className="text-white">Nil</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>₹3,00,001 - ₹6,00,000</span>
                      <span className="text-white">5%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>₹6,00,001 - ₹9,00,000</span>
                      <span className="text-white">10%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>₹9,00,001 - ₹12,00,000</span>
                      <span className="text-white">15%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>₹12,00,001 - ₹15,00,000</span>
                      <span className="text-white">20%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Above ₹15,00,000</span>
                      <span className="text-white">30%</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between text-white/70">
                      <span>Up to ₹2,50,000</span>
                      <span className="text-white">Nil</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>₹2,50,001 - ₹5,00,000</span>
                      <span className="text-white">5%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>₹5,00,001 - ₹10,00,000</span>
                      <span className="text-white">20%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Above ₹10,00,000</span>
                      <span className="text-white">30%</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            {showResults && results ? (
              <div className="space-y-6">
                <div className="glass-card rounded-lg p-8 border border-[#39FF14]/20">
                  <h3 className="text-white mb-6">Your Tax Summary</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/60 text-sm mb-2">Total Tax Liability</p>
                      <p className="text-4xl font-semibold text-[#39FF14]">
                        ₹{results.totalTax.toLocaleString('en-IN')}
                      </p>
                      <p className="text-white/40 text-sm mt-1">
                        Effective rate: {results.effectiveRate}%
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-white/60 text-sm mb-2">Taxable Income</p>
                        <p className="text-xl font-semibold text-white">
                          ₹{results.taxableIncome.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-2">Take Home</p>
                        <p className="text-xl font-semibold text-white">
                          ₹{results.takeHome.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/60 text-sm mb-2">Monthly Take Home</p>
                      <p className="text-2xl font-semibold text-white">
                        ₹{results.monthlyTakeHome.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Gross Income</span>
                          <span className="text-white text-sm">100%</span>
                        </div>
                        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-white/30 w-full" />
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Tax Deducted</span>
                          <span className="text-[#39FF14] text-sm">
                            {((results.totalTax / parseFloat(annualIncome)) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#39FF14]"
                            style={{ width: `${(results.totalTax / parseFloat(annualIncome)) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-lg p-6 bg-white/5">
                  <h4 className="text-white mb-3">Tax Saving Tips</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">•</span>
                      <span>Maximize Section 80C deductions (₹1.5 lakh limit)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">•</span>
                      <span>Claim health insurance premium under 80D</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">•</span>
                      <span>Consider home loan interest deductions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">•</span>
                      <span>Compare both regimes before filing</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <Receipt className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/60">
                  Enter your income details to see your tax liability
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="border-t border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* What is */}
            <section>
              <h2 className="text-white mb-4">What is an Income Tax Calculator?</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                An Income Tax Calculator is a tool that helps you estimate your tax liability based on your annual
                income and applicable deductions. It considers both the old and new tax regimes introduced by the
                Government of India, helping you choose the most beneficial option.
              </p>
              <p className="text-white/70 leading-relaxed">
                The calculator applies the latest tax slabs, rates, and exemptions to provide accurate tax estimates,
                enabling better financial planning and tax optimization.
              </p>
            </section>

            {/* Old vs New Regime */}
            <section>
              <h2 className="text-white mb-4">Old vs New Tax Regime</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-3">New Tax Regime</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">+</span>
                      <span>Lower tax rates across slabs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">+</span>
                      <span>Simplified tax structure</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">−</span>
                      <span>No deductions except standard deduction</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">−</span>
                      <span>No exemptions on allowances</span>
                    </li>
                  </ul>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-3">Old Tax Regime</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">+</span>
                      <span>Multiple deductions available (80C, 80D)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">+</span>
                      <span>HRA, LTA exemptions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">−</span>
                      <span>Higher tax rates</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">−</span>
                      <span>Complex calculation with many rules</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Which tax regime should I choose?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    If you have significant deductions (80C, home loan, health insurance), the old regime might be
                    better. If you have minimal deductions, the new regime&apos;s lower rates could save more tax.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    What is standard deduction?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Standard deduction of ₹50,000 is available to all salaried individuals in both regimes. It reduces
                    your taxable income automatically without requiring any investment or expenditure proof.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    What is health and education cess?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    A 4% cess is added to your calculated tax amount. This cess funds health and education initiatives
                    by the government and is mandatory for all taxpayers.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="glass-card rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Need Tax-Saving Investment Plans?</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Explore insurance and investment plans that offer tax benefits under Section 80C, 80D, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                View Tax-Saving Plans
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={onBack}
                className="bg-white/5 text-white hover:bg-white/10 border border-white/10"
              >
                Explore More Calculators
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
