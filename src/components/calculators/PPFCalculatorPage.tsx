import { ArrowLeft, Calculator, TrendingUp, DollarSign, Clock, CheckCircle2, Building2, Shield } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface PPFCalculatorPageProps {
  onBack: () => void;
}

export default function PPFCalculatorPage({ onBack }: PPFCalculatorPageProps) {
  const [yearlyInvestment, setYearlyInvestment] = useState('150000');
  const [tenure, setTenure] = useState('15');
  const [result, setResult] = useState<any>(null);

  const calculatePPF = () => {
    const P = parseFloat(yearlyInvestment);
    const n = parseFloat(tenure);
    const r = 0.071; // Current PPF rate 7.1% (as of 2024-2025)

    // PPF uses compound interest formula
    // FV = P * [((1 + r)^n - 1) / r] * (1 + r)
    const maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const totalInvested = P * n;
    const totalInterest = maturityAmount - totalInvested;

    // Tax benefit (assuming 30% tax bracket)
    const annualTaxSaved = Math.min(P, 150000) * 0.3;
    const totalTaxSaved = annualTaxSaved * n;

    setResult({
      maturityAmount: maturityAmount,
      totalInvested: totalInvested,
      totalInterest: totalInterest,
      annualTaxSaved: annualTaxSaved,
      totalTaxSaved: totalTaxSaved,
      tenure: n,
      currentRate: 7.1
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container-custom py-8">
          <button 
            onClick={onBack}
            className="mb-6 text-[#39FF14] hover:text-[#2ee610] flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Calculators
          </button>
          
          <div className="flex items-start gap-4">
            <div className="p-3 glass-card rounded-lg">
              <Building2 className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">PPF Calculator</h1>
              <p className="text-white/70 text-lg">
                Calculate Public Provident Fund maturity amount and tax benefits for long-term savings
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Section */}
          <div>
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#39FF14]" />
                Calculate PPF Maturity
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Yearly Investment (₹)</label>
                  <Input
                    type="number"
                    value={yearlyInvestment}
                    onChange={(e) => setYearlyInvestment(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="150000"
                  />
                  <p className="text-white/50 text-xs mt-1">Min: ₹500, Max: ₹1,50,000 per year</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Time Period (years)</label>
                  <Input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="15"
                  />
                  <p className="text-white/50 text-xs mt-1">Minimum 15 years (extendable in 5-year blocks)</p>
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Current PPF Interest Rate</span>
                    <span className="text-[#39FF14] font-bold">7.1% p.a.</span>
                  </div>
                  <p className="text-white/50 text-xs mt-2">Government-set rate, revised quarterly</p>
                </div>

                <Button 
                  onClick={calculatePPF}
                  className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold"
                >
                  Calculate PPF Returns
                </Button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Your PPF Projection</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Investment Period</span>
                    <span className="text-xl font-bold text-white">{result.tenure} years</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Total Investment</span>
                    <span className="text-xl font-bold text-white">₹{result.totalInvested.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Total Interest Earned</span>
                    <span className="text-xl font-bold text-[#39FF14]">₹{result.totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Maturity Value</span>
                    <span className="text-2xl font-bold text-[#39FF14]">₹{result.maturityAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="mt-6 p-4 bg-[#39FF14]/10 border border-[#39FF14]/20 rounded-xl">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#39FF14] font-semibold mb-1">Tax Benefits</p>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-white/70 text-sm">Annual Tax Saved (80C)</span>
                            <span className="text-white font-bold">₹{result.annualTaxSaved.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70 text-sm">Total Tax Saved ({result.tenure} years)</span>
                            <span className="text-[#39FF14] font-bold">₹{result.totalTaxSaved.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                          </div>
                        </div>
                        <p className="text-white/60 text-sm mt-2">
                          Interest and maturity amount are completely tax-free!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            {/* About */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">About Public Provident Fund (PPF)</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                PPF is a government-backed long-term savings scheme offering attractive interest rates and complete tax exemption 
                under EEE (Exempt-Exempt-Exempt) status. It's one of the safest investment options with no market risks.
              </p>
              <p className="text-white/70 leading-relaxed">
                The scheme has a mandatory lock-in period of 15 years, which can be extended in blocks of 5 years. It's ideal 
                for building a retirement corpus with guaranteed returns and tax benefits.
              </p>
            </div>

            {/* Formula */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#39FF14]" />
                How It's Calculated
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#39FF14] font-semibold mb-2">PPF Maturity Formula:</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80">
                    FV = P × [((1 + r)^n - 1) / r] × (1 + r)
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    Where P = annual investment, r = annual interest rate, n = number of years
                  </p>
                </div>

                <div>
                  <p className="text-white/60 text-sm">
                    <strong className="text-white">Note:</strong> Interest is compounded annually and calculated monthly on the lowest 
                    balance between the 5th and last day of each month.
                  </p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">When to Invest in PPF</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Building long-term retirement corpus (15+ years)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Risk-free investment with government backing</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Maximizing tax savings under Section 80C</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Children's education or marriage planning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Creating wealth with disciplined saving habit</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Features of PPF</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">100% Safe</p>
                    <p className="text-white/60 text-sm">Government-backed with sovereign guarantee</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Triple Tax Benefit (EEE)</p>
                    <p className="text-white/60 text-sm">Deduction on investment, tax-free interest & maturity</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Attractive Interest</p>
                    <p className="text-white/60 text-sm">Currently 7.1% compounded annually</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Loan Facility</p>
                    <p className="text-white/60 text-sm">Available from 3rd to 6th year at reasonable rates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Withdrawal & Loan Rules */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Withdrawal & Loan Rules</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white mb-1">Partial Withdrawal</p>
                  <p className="text-white/60 text-sm">
                    Allowed from 7th year onwards. Maximum 50% of balance at end of 4th preceding year or end of preceding year, whichever is lower.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Loan Against PPF</p>
                  <p className="text-white/60 text-sm">
                    Available from 3rd to 6th year. Maximum 25% of balance at end of 2nd preceding year. Interest charged at 2% above PPF rate.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Premature Closure</p>
                  <p className="text-white/60 text-sm">
                    Allowed after 5 years in specific cases (medical emergency, higher education). Interest reduced by 1%.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Extension</p>
                  <p className="text-white/60 text-sm">
                    After 15 years, can be extended in blocks of 5 years with or without fresh contributions.
                  </p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/5 border border-[#39FF14]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Invest before 5th of month to earn interest for that month</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Make maximum contribution (₹1.5L) early in financial year for better compounding</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Open PPF account for minor children to maximize family savings</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">After maturity, extend without contributions to keep earning tax-free interest</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Avoid missing annual contribution to keep account active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
