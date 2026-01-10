import { ArrowLeft, Calculator, TrendingUp, DollarSign, Clock, AlertCircle, CheckCircle2, Wallet, PiggyBank, Shield } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface PensionCalculatorPageProps {
  onBack: () => void;
}

export default function PensionCalculatorPage({ onBack }: PensionCalculatorPageProps) {
  const [currentAge, setCurrentAge] = useState('30');
  const [retirementAge, setRetirementAge] = useState('60');
  const [monthlyContribution, setMonthlyContribution] = useState('10000');
  const [expectedReturn, setExpectedReturn] = useState('10');
  const [inflationRate, setInflationRate] = useState('6');
  const [monthlyPensionNeeded, setMonthlyPensionNeeded] = useState('50000');
  const [result, setResult] = useState<any>(null);

  const calculatePension = () => {
    const current = parseFloat(currentAge);
    const retirement = parseFloat(retirementAge);
    const contribution = parseFloat(monthlyContribution);
    const rate = parseFloat(expectedReturn) / 100 / 12;
    const inflation = parseFloat(inflationRate) / 100 / 12;
    const pensionNeeded = parseFloat(monthlyPensionNeeded);

    if (current >= retirement) {
      alert('Retirement age must be greater than current age');
      return;
    }

    const yearsToRetirement = retirement - current;
    const monthsToRetirement = yearsToRetirement * 12;

    // Calculate retirement corpus using FV formula
    const futureValue = contribution * (((Math.pow(1 + rate, monthsToRetirement) - 1) / rate) * (1 + rate));

    // Calculate corpus needed for desired pension (assuming 30 years post-retirement)
    const postRetirementMonths = 30 * 12;
    const realReturnRate = ((1 + parseFloat(expectedReturn) / 100) / (1 + parseFloat(inflationRate) / 100) - 1) * 12;
    const corpusNeeded = pensionNeeded * (((1 - Math.pow(1 + realReturnRate / 12, -postRetirementMonths)) / (realReturnRate / 12)));

    // Calculate monthly pension from accumulated corpus
    const monthlyPension = futureValue * (realReturnRate / 12) / (1 - Math.pow(1 + realReturnRate / 12, -postRetirementMonths));

    // Total contributions
    const totalInvested = contribution * monthsToRetirement;

    setResult({
      retirementCorpus: futureValue,
      totalInvested: totalInvested,
      totalReturns: futureValue - totalInvested,
      monthlyPension: monthlyPension,
      corpusNeeded: corpusNeeded,
      shortfall: corpusNeeded - futureValue,
      yearsToRetirement: yearsToRetirement,
      adequacy: (futureValue / corpusNeeded * 100).toFixed(1)
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
              <Wallet className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">Pension Calculator</h1>
              <p className="text-white/70 text-lg">
                Plan your retirement corpus and estimate monthly pension income for a secure future
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
                Calculate Your Pension
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
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Retirement Age (years)</label>
                  <Input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="60"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Monthly Contribution (₹)</label>
                  <Input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="10000"
                  />
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
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Expected Inflation Rate (%)</label>
                  <Input
                    type="number"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="6"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Monthly Pension Needed (₹)</label>
                  <Input
                    type="number"
                    value={monthlyPensionNeeded}
                    onChange={(e) => setMonthlyPensionNeeded(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="50000"
                  />
                </div>

                <Button 
                  onClick={calculatePension}
                  className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold"
                >
                  Calculate Pension
                </Button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Your Retirement Plan</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Years to Retirement</span>
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
                    <span className="text-white/70">Retirement Corpus</span>
                    <span className="text-2xl font-bold text-[#39FF14]">₹{result.retirementCorpus.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Expected Monthly Pension</span>
                    <span className="text-xl font-bold text-white">₹{result.monthlyPension.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Corpus Needed</span>
                    <span className="text-xl font-bold text-white">₹{result.corpusNeeded.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Plan Adequacy</span>
                    <span className={`text-xl font-bold ${result.adequacy >= 100 ? 'text-[#39FF14]' : 'text-orange-400'}`}>
                      {result.adequacy}%
                    </span>
                  </div>
                </div>

                {result.adequacy < 100 && (
                  <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-orange-400 font-semibold mb-1">Shortfall Alert</p>
                        <p className="text-white/70 text-sm">
                          Your current plan has a shortfall of ₹{Math.abs(result.shortfall).toLocaleString('en-IN', { maximumFractionDigits: 0 })}. 
                          Consider increasing monthly contributions or investment duration.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {result.adequacy >= 100 && (
                  <div className="mt-6 p-4 bg-[#39FF14]/10 border border-[#39FF14]/20 rounded-xl">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#39FF14] font-semibold mb-1">On Track!</p>
                        <p className="text-white/70 text-sm">
                          Your retirement plan is adequate to meet your pension goals. Keep saving consistently!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            {/* About */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">About Pension Planning</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Pension planning is crucial for ensuring financial independence during retirement. This calculator helps you 
                estimate the corpus you need to build and the monthly pension you can expect based on your savings and investment strategy.
              </p>
              <p className="text-white/70 leading-relaxed">
                It factors in inflation to give you realistic estimates and helps you determine if your current savings plan 
                is adequate for your retirement goals.
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
                  <p className="text-[#39FF14] font-semibold mb-2">Retirement Corpus Formula:</p>
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
                    Pension = Corpus × (r / [1 - (1 + r)^-n])
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    Where r = real return rate (adjusted for inflation), n = post-retirement months
                  </p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">When to Use This Calculator</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Planning retirement savings and investment strategy</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Determining adequate monthly pension for lifestyle needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Evaluating pension fund performance and adequacy</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Comparing different retirement saving scenarios</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Setting realistic retirement goals based on age and income</p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits of Pension Planning</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Financial Security</p>
                    <p className="text-white/60 text-sm">Ensures steady income flow during retirement years</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Wealth Building</p>
                    <p className="text-white/60 text-sm">Long-term compounding generates substantial corpus</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Tax Benefits</p>
                    <p className="text-white/60 text-sm">Many pension schemes offer tax deductions under 80C</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Early Planning Advantage</p>
                    <p className="text-white/60 text-sm">Starting early significantly reduces monthly burden</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/5 border border-[#39FF14]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Start pension planning as early as possible to benefit from compounding</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Factor in inflation - your expenses will increase over time</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Diversify pension investments across equity, debt, and annuity plans</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Review and increase contributions as income grows</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Consider additional sources like NPS, PPF, and mutual funds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
