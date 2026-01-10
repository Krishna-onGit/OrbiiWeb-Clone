import { ArrowLeft, Calculator, Heart, Shield, TrendingUp, CheckCircle2, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface HumanLifeValueCalculatorPageProps {
  onBack: () => void;
}

export default function HumanLifeValueCalculatorPage({ onBack }: HumanLifeValueCalculatorPageProps) {
  const [currentAge, setCurrentAge] = useState('30');
  const [retirementAge, setRetirementAge] = useState('60');
  const [annualIncome, setAnnualIncome] = useState('1200000');
  const [annualExpenses, setAnnualExpenses] = useState('400000');
  const [inflation, setInflation] = useState('6');
  const [expectedReturn, setExpectedReturn] = useState('8');
  const [existingInsurance, setExistingInsurance] = useState('1000000');
  const [existingSavings, setExistingSavings] = useState('500000');
  const [result, setResult] = useState<any>(null);

  const calculateHLV = () => {
    const age = parseFloat(currentAge);
    const retAge = parseFloat(retirementAge);
    const income = parseFloat(annualIncome);
    const expenses = parseFloat(annualExpenses);
    const inflRate = parseFloat(inflation) / 100;
    const returnRate = parseFloat(expectedReturn) / 100;
    const existingIns = parseFloat(existingInsurance);
    const existingSav = parseFloat(existingSavings);

    const yearsToRetirement = retAge - age;
    const netIncome = income - expenses;

    // Calculate present value of future earnings
    // PV = NetIncome × [(1 - (1 + g)^n / (1 + r)^n) / (r - g)]
    const realReturn = ((1 + returnRate) / (1 + inflRate)) - 1;
    
    let humanLifeValue;
    if (Math.abs(realReturn) < 0.0001) {
      // If real return is approximately 0
      humanLifeValue = netIncome * yearsToRetirement;
    } else {
      humanLifeValue = netIncome * ((1 - Math.pow((1 + inflRate) / (1 + returnRate), yearsToRetirement)) / (returnRate - inflRate));
    }

    const totalExisting = existingIns + existingSav;
    const insuranceNeeded = Math.max(0, humanLifeValue - totalExisting);
    const coverageAdequacy = totalExisting > 0 ? (totalExisting / humanLifeValue * 100) : 0;

    setResult({
      humanLifeValue: humanLifeValue,
      existingCoverage: totalExisting,
      insuranceNeeded: insuranceNeeded,
      coverageAdequacy: coverageAdequacy,
      yearsToRetirement: yearsToRetirement,
      annualNetIncome: netIncome
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10">
        <div className="container-custom py-8">
          <button onClick={onBack} className="mb-6 text-[#39FF14] hover:text-[#2ee610] flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Calculators
          </button>
          <div className="flex items-start gap-4">
            <div className="p-3 glass-card rounded-lg">
              <Heart className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">Human Life Value Calculator</h1>
              <p className="text-white/70 text-lg">
                Calculate your economic value to determine adequate life insurance coverage for family protection
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#39FF14]" />
                Calculate Your Human Life Value
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Current Age</label>
                    <Input type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Retirement Age</label>
                    <Input type="number" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Annual Income (₹)</label>
                  <Input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Annual Personal Expenses (₹)</label>
                  <Input type="number" value={annualExpenses} onChange={(e) => setAnnualExpenses(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                  <p className="text-white/50 text-xs mt-1">Your personal living expenses (not family expenses)</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Inflation Rate (%)</label>
                    <Input type="number" value={inflation} onChange={(e) => setInflation(e.target.value)} className="bg-white/5 border-white/10 text-white" step="0.1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Expected Return (%)</label>
                    <Input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} className="bg-white/5 border-white/10 text-white" step="0.1" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Existing Life Insurance (₹)</label>
                  <Input type="number" value={existingInsurance} onChange={(e) => setExistingInsurance(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Existing Savings & Investments (₹)</label>
                  <Input type="number" value={existingSavings} onChange={(e) => setExistingSavings(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                </div>
                <Button onClick={calculateHLV} className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold">
                  Calculate Life Value
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {result && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Your Life Value Assessment</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Human Life Value</span>
                    <span className="text-2xl font-bold text-[#39FF14]">₹{result.humanLifeValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Existing Coverage</span>
                    <span className="text-lg font-bold text-white">₹{result.existingCoverage.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Additional Insurance Needed</span>
                    <span className="text-xl font-bold text-[#39FF14]">₹{result.insuranceNeeded.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Coverage Adequacy</span>
                    <span className={`text-xl font-bold ${result.coverageAdequacy >= 100 ? 'text-[#39FF14]' : 'text-orange-400'}`}>
                      {result.coverageAdequacy.toFixed(1)}%
                    </span>
                  </div>
                  {result.coverageAdequacy < 100 && (
                    <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                      <p className="text-orange-400 font-semibold mb-1">Coverage Gap Alert</p>
                      <p className="text-white/70 text-sm">
                        Your current coverage is insufficient. Consider additional term insurance to protect your family's financial future.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">What is Human Life Value?</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Human Life Value (HLV) represents the present value of all future income that you would earn until retirement. 
                It's a scientific method to determine how much life insurance your family needs.
              </p>
              <p className="text-white/70 leading-relaxed">
                This calculation considers your income, expenses, inflation, and investment returns to arrive at the ideal coverage amount.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Why It Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Family Protection</p>
                    <p className="text-white/60 text-sm">Ensures family maintains lifestyle even in your absence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Adequate Coverage</p>
                    <p className="text-white/60 text-sm">Not under-insured or over-insured</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Financial Goals</p>
                    <p className="text-white/60 text-sm">Cover education, marriage, and retirement needs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/5 border border-[#39FF14]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Rule of thumb: Coverage should be 15-20x your annual income</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Term insurance is the most cost-effective way to get high coverage</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Review HLV every 3-5 years or after major life events</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Include future liabilities like home loan and education costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}