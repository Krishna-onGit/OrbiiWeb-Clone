import { ArrowLeft, Calculator, TrendingUp, DollarSign, Clock, AlertCircle, CheckCircle2, Building2, Shield, PiggyBank } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface NPSCalculatorPageProps {
  onBack: () => void;
}

export default function NPSCalculatorPage({ onBack }: NPSCalculatorPageProps) {
  const [currentAge, setCurrentAge] = useState('30');
  const [monthlyContribution, setMonthlyContribution] = useState('5000');
  const [expectedReturn, setExpectedReturn] = useState('10');
  const [annuityReturn, setAnnuityReturn] = useState('6');
  const [result, setResult] = useState<any>(null);

  const calculateNPS = () => {
    const age = parseFloat(currentAge);
    const contribution = parseFloat(monthlyContribution);
    const rate = parseFloat(expectedReturn) / 100 / 12;
    const annuityRate = parseFloat(annuityReturn) / 100 / 12;

    if (age >= 60) {
      alert('Please enter age less than 60 years');
      return;
    }

    const yearsToRetirement = 60 - age;
    const monthsToRetirement = yearsToRetirement * 12;

    // Calculate maturity amount using FV formula
    const maturityAmount = contribution * (((Math.pow(1 + rate, monthsToRetirement) - 1) / rate) * (1 + rate));

    // Total contributions
    const totalInvested = contribution * monthsToRetirement;

    // At maturity, minimum 40% must be used to purchase annuity
    const minAnnuityAmount = maturityAmount * 0.4;
    const maxLumpsum = maturityAmount * 0.6;

    // Calculate monthly pension from 40% annuity
    const monthlyPension = (minAnnuityAmount * annuityRate);

    // Tax benefit (80CCD(1) - up to 10% of salary, max 1.5L + 80CCD(1B) - additional 50K)
    const annualContribution = contribution * 12;
    const taxBenefit = Math.min(annualContribution, 200000) * 0.3; // Assuming 30% tax bracket

    setResult({
      maturityAmount: maturityAmount,
      totalInvested: totalInvested,
      totalReturns: maturityAmount - totalInvested,
      yearsToRetirement: yearsToRetirement,
      minAnnuityAmount: minAnnuityAmount,
      maxLumpsum: maxLumpsum,
      monthlyPension: monthlyPension,
      annualPension: monthlyPension * 12,
      annualTaxBenefit: taxBenefit
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
              <h1 className="text-white mb-2">NPS Calculator</h1>
              <p className="text-white/70 text-lg">
                Calculate National Pension Scheme returns, retirement benefits, and tax savings
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
                Calculate Your NPS Returns
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Current Age (years)</label>
                  <Input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="30"
                  />
                  <p className="text-white/50 text-xs mt-1">NPS allows exit at age 60</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Monthly Contribution (₹)</label>
                  <Input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="5000"
                  />
                  <p className="text-white/50 text-xs mt-1">Minimum ₹500 per month</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Expected Annual Return (%)</label>
                  <Input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="10"
                    step="0.1"
                  />
                  <p className="text-white/50 text-xs mt-1">Historical NPS returns: 9-12%</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Annuity Return Rate (%)</label>
                  <Input
                    type="number"
                    value={annuityReturn}
                    onChange={(e) => setAnnuityReturn(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="6"
                    step="0.1"
                  />
                  <p className="text-white/50 text-xs mt-1">Typical annuity returns: 5-7%</p>
                </div>

                <Button 
                  onClick={calculateNPS}
                  className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold"
                >
                  Calculate NPS Maturity
                </Button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Your NPS Projection at Age 60</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Investment Period</span>
                    <span className="text-xl font-bold text-white">{result.yearsToRetirement} years</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Total Investment</span>
                    <span className="text-xl font-bold text-white">₹{result.totalInvested.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Estimated Returns</span>
                    <span className="text-xl font-bold text-[#39FF14]">₹{result.totalReturns.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Maturity Amount</span>
                    <span className="text-2xl font-bold text-[#39FF14]">₹{result.maturityAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="mt-6 p-4 bg-white/5 rounded-xl">
                    <p className="text-white/60 text-sm mb-3">Withdrawal Options at Maturity:</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Max Lumpsum (60%)</span>
                        <span className="text-lg font-bold text-white">₹{result.maxLumpsum.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Min Annuity (40%)</span>
                        <span className="text-lg font-bold text-white">₹{result.minAnnuityAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70">Monthly Pension</span>
                          <span className="text-xl font-bold text-[#39FF14]">₹{result.monthlyPension.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Annual Pension</span>
                        <span className="text-lg font-bold text-white">₹{result.annualPension.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-[#39FF14]/10 border border-[#39FF14]/20 rounded-xl">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#39FF14] font-semibold mb-1">Annual Tax Benefit</p>
                        <p className="text-2xl font-bold text-white mb-1">₹{result.annualTaxBenefit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                        <p className="text-white/60 text-sm">
                          Assuming 30% tax bracket. NPS offers deduction up to ₹2 lakh under 80CCD
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
              <h3 className="text-2xl font-bold mb-4 text-white">About National Pension Scheme (NPS)</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                NPS is a government-sponsored pension scheme designed to provide retirement income to Indian citizens. 
                It's a voluntary, long-term investment where contributions are invested in diversified portfolios of 
                equity, corporate bonds, and government securities.
              </p>
              <p className="text-white/70 leading-relaxed">
                One of the key advantages of NPS is the additional tax benefit of ₹50,000 under Section 80CCD(1B), 
                over and above the ₹1.5 lakh limit under Section 80C, making it highly tax-efficient.
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
                  <p className="text-[#39FF14] font-semibold mb-2">Maturity Amount Formula:</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80">
                    FV = PMT × [((1 + r)^n - 1) / r] × (1 + r)
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    Where PMT = monthly contribution, r = monthly return rate, n = number of months
                  </p>
                </div>

                <div>
                  <p className="text-[#39FF14] font-semibold mb-2">Monthly Pension Formula:</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80">
                    Pension = (Annuity Amount × Annuity Rate) / 12
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    Minimum 40% of maturity corpus must be used to purchase annuity
                  </p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">When to Use NPS</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Planning long-term retirement savings with tax benefits</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Looking for additional tax deduction beyond 80C limit</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Self-employed individuals without employer pension</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Building a diversified retirement portfolio</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Government employees after Jan 2004 (mandatory Tier-I)</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Features of NPS</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Extra Tax Benefit</p>
                    <p className="text-white/60 text-sm">₹50,000 additional deduction under 80CCD(1B)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Market-Linked Returns</p>
                    <p className="text-white/60 text-sm">Invested in equity, corporate bonds, and government securities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Portable</p>
                    <p className="text-white/60 text-sm">Continue same account across jobs and cities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Flexible</p>
                    <p className="text-white/60 text-sm">Choose investment options and pension fund managers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Withdrawal Rules */}
            <div className="glass-card rounded-2xl p-8 bg-orange-500/5 border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Withdrawal Rules</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Normal exit at age 60: Maximum 60% as lumpsum (tax-free), 40% for annuity</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Premature exit (before 60): Only 20% lumpsum, 80% for annuity</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Partial withdrawal: Up to 25% after 3 years for specific purposes</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Corpus below ₹5 lakh: Can withdraw 100% as lumpsum</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/5 border border-[#39FF14]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Start early to maximize tax-free compounding benefits</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Choose Active Choice for higher equity allocation if young</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Increase contributions annually with salary increments</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Review and rebalance portfolio allocation periodically</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Ensure minimum annual contribution to keep account active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
