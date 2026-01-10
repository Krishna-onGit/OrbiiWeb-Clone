import { ArrowLeft, Calculator, TrendingUp, DollarSign, Clock, CheckCircle2, FileText, Shield, PiggyBank } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface FDCalculatorPageProps {
  onBack: () => void;
}

export default function FDCalculatorPage({ onBack }: FDCalculatorPageProps) {
  const [principal, setPrincipal] = useState('100000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [tenure, setTenure] = useState('5');
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years');
  const [compoundingFrequency, setCompoundingFrequency] = useState<'monthly' | 'quarterly' | 'halfyearly' | 'yearly'>('quarterly');
  const [result, setResult] = useState<any>(null);

  const calculateFD = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = tenureType === 'years' ? parseFloat(tenure) : parseFloat(tenure) / 12;

    // Determine compounding frequency
    let n = 4; // quarterly
    if (compoundingFrequency === 'monthly') n = 12;
    else if (compoundingFrequency === 'halfyearly') n = 2;
    else if (compoundingFrequency === 'yearly') n = 1;

    // Calculate maturity amount using compound interest formula
    const maturityAmount = P * Math.pow((1 + r / n), n * t);
    const totalInterest = maturityAmount - P;

    // Calculate TDS if interest > 40000 (for individuals < 60) or 50000 (seniors)
    const tdsApplicable = totalInterest > 40000;
    const tds = tdsApplicable ? totalInterest * 0.1 : 0;

    setResult({
      maturityAmount: maturityAmount,
      totalInterest: totalInterest,
      principal: P,
      tenureInYears: t,
      tds: tds,
      netAmount: maturityAmount - tds,
      tdsApplicable: tdsApplicable
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
              <FileText className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">FD Calculator</h1>
              <p className="text-white/70 text-lg">
                Calculate maturity amount and interest on Fixed Deposits with different compounding frequencies
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
                Calculate FD Maturity
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Principal Amount (₹)</label>
                  <Input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="100000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Annual Interest Rate (%)</label>
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="6.5"
                    step="0.1"
                  />
                  <p className="text-white/50 text-xs mt-1">Current FD rates: 5.5% - 7.5%</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Tenure</label>
                  <div className="flex gap-3">
                    <Input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                      className="bg-white/5 border-white/10 text-white flex-1"
                      placeholder="5"
                    />
                    <select
                      value={tenureType}
                      onChange={(e) => setTenureType(e.target.value as 'years' | 'months')}
                      className="bg-white/5 border border-white/10 rounded-lg px-4 text-white"
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Compounding Frequency</label>
                  <select
                    value={compoundingFrequency}
                    onChange={(e) => setCompoundingFrequency(e.target.value as any)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="halfyearly">Half-Yearly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>

                <Button 
                  onClick={calculateFD}
                  className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold"
                >
                  Calculate Maturity Amount
                </Button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Maturity Details</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Principal Amount</span>
                    <span className="text-xl font-bold text-white">₹{result.principal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Tenure</span>
                    <span className="text-xl font-bold text-white">{result.tenureInYears.toFixed(2)} years</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Total Interest Earned</span>
                    <span className="text-xl font-bold text-[#39FF14]">₹{result.totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Maturity Amount</span>
                    <span className="text-2xl font-bold text-[#39FF14]">₹{result.maturityAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  {result.tdsApplicable && (
                    <>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70">TDS Deducted (10%)</span>
                        <span className="text-lg font-bold text-orange-400">- ₹{result.tds.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Net Amount Received</span>
                        <span className="text-2xl font-bold text-white">₹{result.netAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                      </div>
                    </>
                  )}
                </div>

                {result.tdsApplicable && (
                  <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                    <p className="text-orange-400 font-semibold mb-1">TDS Information</p>
                    <p className="text-white/70 text-sm">
                      TDS is applicable as interest exceeds ₹40,000 per annum. You can claim refund while filing ITR if your total income is below taxable limit.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            {/* About */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">About Fixed Deposits</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                A Fixed Deposit (FD) is a safe investment option offered by banks where you deposit a lump sum for a fixed tenure 
                at a predetermined interest rate. It's one of the most secure investment options with guaranteed returns.
              </p>
              <p className="text-white/70 leading-relaxed">
                FDs are ideal for risk-averse investors looking for stable and predictable returns. They're covered under deposit 
                insurance up to ₹5 lakhs per bank per depositor.
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
                  <p className="text-[#39FF14] font-semibold mb-2">Compound Interest Formula:</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80">
                    A = P(1 + r/n)^(nt)
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    Where A = maturity amount, P = principal, r = annual interest rate, n = compounding frequency, t = time in years
                  </p>
                </div>

                <div>
                  <p className="text-[#39FF14] font-semibold mb-2">Simple Interest (for comparison):</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80">
                    SI = (P × r × t) / 100
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">When to Choose FD</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Parking emergency funds with guaranteed returns</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Short to medium-term financial goals (1-5 years)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Risk-averse investors seeking capital protection</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Senior citizens (higher interest rates available)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Diversifying investment portfolio with stable income</p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits of FD</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Safe & Secure</p>
                    <p className="text-white/60 text-sm">Deposit insurance up to ₹5 lakhs per bank</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Guaranteed Returns</p>
                    <p className="text-white/60 text-sm">Fixed interest rate locked at time of investment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Tax Saving FD</p>
                    <p className="text-white/60 text-sm">5-year tax-saver FD eligible for 80C deduction</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Flexible Tenure</p>
                    <p className="text-white/60 text-sm">Choose tenure from 7 days to 10 years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of FD */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Types of Fixed Deposits</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white mb-1">Regular FD</p>
                  <p className="text-white/60 text-sm">Standard fixed deposit with lump sum investment</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Tax Saver FD</p>
                  <p className="text-white/60 text-sm">5-year lock-in period, eligible for 80C tax deduction up to ₹1.5 lakh</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Senior Citizen FD</p>
                  <p className="text-white/60 text-sm">Additional 0.25% - 0.75% interest for those above 60 years</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Cumulative FD</p>
                  <p className="text-white/60 text-sm">Interest compounded and paid at maturity</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Non-Cumulative FD</p>
                  <p className="text-white/60 text-sm">Interest paid out monthly/quarterly/yearly</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/5 border border-[#39FF14]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Compare rates across banks before investing</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Choose cumulative FD for better returns through compounding</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Ladder FDs across different tenures for liquidity</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Submit Form 15G/15H to avoid TDS if income below taxable limit</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Premature withdrawal attracts penalty (typically 0.5% - 1%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
