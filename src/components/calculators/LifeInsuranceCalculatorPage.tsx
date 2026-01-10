import { ArrowLeft, Calculator, Shield, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface LifeInsuranceCalculatorPageProps {
  onBack: () => void;
}

export default function LifeInsuranceCalculatorPage({ onBack }: LifeInsuranceCalculatorPageProps) {
  const [age, setAge] = useState('30');
  const [annualIncome, setAnnualIncome] = useState('1000000');
  const [outstandingLoans, setOutstandingLoans] = useState('2000000');
  const [dependents, setDependents] = useState('3');
  const [yearsOfSupport, setYearsOfSupport] = useState('20');
  const [existingCoverage, setExistingCoverage] = useState('500000');
  const [result, setResult] = useState<{
    totalCoverageNeeded: number;
    existingCoverage: number;
    additionalCoverageNeeded: number;
    estimatedAnnualPremium: number;
    estimatedMonthlyPremium: number;
    incomeReplacement: number;
    loanCoverage: number;
    futureExpenses: number;
  } | null>(null);

  const calculateInsurance = () => {
    const income = parseFloat(annualIncome);
    const loans = parseFloat(outstandingLoans);
    const deps = parseFloat(dependents);
    const years = parseFloat(yearsOfSupport);
    const existing = parseFloat(existingCoverage);

    // Income replacement method
    const incomeReplacement = income * years;

    // Future expenses (education, marriage etc)
    const futureExpenses = deps * 1000000; // 10L per dependent

    // Total coverage needed
    const totalCoverageNeeded = incomeReplacement + loans + futureExpenses;
    const additionalCoverageNeeded = Math.max(0, totalCoverageNeeded - existing);

    // Estimated premium (term insurance - approx 0.05% of sum assured per year for 30 year old)
    const ageMultiplier = 1 + (parseFloat(age) - 30) * 0.02;
    const estimatedPremium = (totalCoverageNeeded * 0.0005 * ageMultiplier);

    setResult({
      totalCoverageNeeded: totalCoverageNeeded,
      existingCoverage: existing,
      additionalCoverageNeeded: additionalCoverageNeeded,
      estimatedAnnualPremium: estimatedPremium,
      estimatedMonthlyPremium: estimatedPremium / 12,
      incomeReplacement: incomeReplacement,
      loanCoverage: loans,
      futureExpenses: futureExpenses
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10">
        <div className="container-custom py-8">
          <button onClick={onBack} className="mb-6 text-[#39FF14] hover:text-[#2ee610] flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Calculators
          </button>
          <div className="flex items-start gap-4">
            <div className="p-3 glass-card rounded-lg">
              <Shield className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">Life Insurance Calculator</h1>
              <p className="text-white/70 text-lg">
                Calculate adequate life insurance coverage to protect your family&apos;s financial future
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#39FF14]" />
                Calculate Coverage Needed
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Your Age (years)</label>
                  <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Annual Income (₹)</label>
                  <Input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Outstanding Loans (₹)</label>
                  <Input type="number" value={outstandingLoans} onChange={(e) => setOutstandingLoans(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                  <p className="text-white/50 text-xs mt-1">Home loan, car loan, personal loan, etc.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Number of Dependents</label>
                  <Input type="number" value={dependents} onChange={(e) => setDependents(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Years of Income Replacement</label>
                  <Input type="number" value={yearsOfSupport} onChange={(e) => setYearsOfSupport(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Existing Coverage (₹)</label>
                  <Input type="number" value={existingCoverage} onChange={(e) => setExistingCoverage(e.target.value)} className="bg-white/5 border-white/10 text-white" />
                </div>
                <Button onClick={calculateInsurance} className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold">
                  Calculate Coverage
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {result && (
              <>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Coverage Recommendation</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/70">Total Coverage Needed</span>
                      <span className="text-2xl font-bold text-[#39FF14]">₹{result.totalCoverageNeeded.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/70">Existing Coverage</span>
                      <span className="text-lg font-bold text-white">₹{result.existingCoverage.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xl font-bold text-white">Additional Coverage Needed</span>
                      <span className="text-2xl font-bold text-[#39FF14]">₹{result.additionalCoverageNeeded.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/5 rounded-xl">
                    <p className="text-white/70 text-sm mb-3">Coverage Breakdown:</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-white/60 text-sm">Income Replacement</span>
                        <span className="text-white">₹{result.incomeReplacement.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60 text-sm">Loan Coverage</span>
                        <span className="text-white">₹{result.loanCoverage.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60 text-sm">Future Expenses</span>
                        <span className="text-white">₹{result.futureExpenses.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/10 border border-[#39FF14]/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Estimated Premium</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Annual Premium</span>
                      <span className="text-2xl font-bold text-[#39FF14]">₹{result.estimatedAnnualPremium.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Monthly Equivalent</span>
                      <span className="text-lg font-bold text-white">₹{result.estimatedMonthlyPremium.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-xs mt-4">*Approximate premium for term insurance. Actual rates may vary based on health and insurer.</p>
                </div>
              </>
            )}

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Why Life Insurance?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Replaces lost income for family&apos;s daily expenses</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Pays off outstanding debts and loans</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Funds children&apos;s education and marriage</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Maintains family&apos;s standard of living</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/5 border border-[#39FF14]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Buy early - premiums are lower at younger age</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Term insurance offers maximum coverage at lowest cost</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Coverage should be 10-15x your annual income</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Review coverage every 3-5 years or after life events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
