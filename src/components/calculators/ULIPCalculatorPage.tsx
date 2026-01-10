import { ArrowLeft, Calculator, Shield, TrendingUp, DollarSign, Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface ULIPCalculatorPageProps {
  onBack: () => void;
}

export default function ULIPCalculatorPage({ onBack }: ULIPCalculatorPageProps) {
  const [premiumAmount, setPremiumAmount] = useState('50000');
  const [policyTerm, setPolicyTerm] = useState('15');
  const [expectedReturn, setExpectedReturn] = useState('10');
  const [sumAssured, setSumAssured] = useState('500000');
  const [result, setResult] = useState<any>(null);

  const calculateULIP = () => {
    const P = parseFloat(premiumAmount);
    const n = parseFloat(policyTerm);
    const r = parseFloat(expectedReturn) / 100;
    const SA = parseFloat(sumAssured);

    // Charges (approximately 3-5% in first year, decreasing thereafter)
    const avgCharges = 0.025; // 2.5% average
    const netPremium = P * (1 - avgCharges);

    // Calculate maturity value using FV formula
    const maturityValue = netPremium * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const totalInvested = P * n;
    const totalCharges = totalInvested * avgCharges;
    const netInvested = totalInvested - totalCharges;
    const totalReturns = maturityValue - netInvested;

    setResult({
      maturityValue: maturityValue,
      totalInvested: totalInvested,
      totalCharges: totalCharges,
      netInvested: netInvested,
      totalReturns: totalReturns,
      sumAssured: SA,
      policyTerm: n
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
              <Shield className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">ULIP Calculator</h1>
              <p className="text-white/70 text-lg">
                Calculate Unit Linked Insurance Plan returns combining investment and insurance benefits
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
                Calculate ULIP Returns
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Annual Premium (₹)</label>
                  <Input type="number" value={premiumAmount} onChange={(e) => setPremiumAmount(e.target.value)} className="bg-white/5 border-white/10 text-white" placeholder="50000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Policy Term (years)</label>
                  <Input type="number" value={policyTerm} onChange={(e) => setPolicyTerm(e.target.value)} className="bg-white/5 border-white/10 text-white" placeholder="15" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Expected Annual Return (%)</label>
                  <Input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} className="bg-white/5 border-white/10 text-white" placeholder="10" step="0.1" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Sum Assured (₹)</label>
                  <Input type="number" value={sumAssured} onChange={(e) => setSumAssured(e.target.value)} className="bg-white/5 border-white/10 text-white" placeholder="500000" />
                </div>
                <Button onClick={calculateULIP} className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold">
                  Calculate Maturity Value
                </Button>
              </div>
            </div>

            {result && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Maturity Projection</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Total Premium Paid</span>
                    <span className="text-xl font-bold text-white">₹{result.totalInvested.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Total Charges (approx)</span>
                    <span className="text-lg font-bold text-orange-400">- ₹{result.totalCharges.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Net Investment</span>
                    <span className="text-lg font-bold text-white">₹{result.netInvested.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Estimated Returns</span>
                    <span className="text-xl font-bold text-[#39FF14]">₹{result.totalReturns.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Maturity Value</span>
                    <span className="text-2xl font-bold text-[#39FF14]">₹{result.maturityValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="mt-6 p-4 bg-white/5 rounded-xl">
                    <p className="text-white/70 text-sm mb-2">Life Insurance Cover</p>
                    <p className="text-2xl font-bold text-white">₹{result.sumAssured.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">About ULIP</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                ULIP (Unit Linked Insurance Plan) is a unique product combining life insurance and investment. 
                Part of your premium provides life cover while the rest is invested in equity, debt, or balanced funds.
              </p>
              <p className="text-white/70 leading-relaxed">
                ULIPs have a 5-year lock-in period and offer flexibility to switch between funds based on market conditions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Dual Benefit</p>
                    <p className="text-white/60 text-sm">Combines life insurance protection with wealth creation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Flexibility</p>
                    <p className="text-white/60 text-sm">Switch between equity and debt funds as per market</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Tax Benefits</p>
                    <p className="text-white/60 text-sm">Premium eligible for 80C deduction, maturity tax-free under 10(10D)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Lock-in Period</p>
                    <p className="text-white/60 text-sm">5 years mandatory lock-in to ensure long-term investment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">When to Choose ULIP</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Need both insurance and investment in single product</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Long-term financial goals with tax benefits</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Want flexibility to switch between fund types</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Can commit to 5+ year investment horizon</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/5 border border-[#39FF14]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Compare charges across different ULIP providers before investing</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Choose adequate sum assured - at least 10x annual income</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Review fund performance annually and switch if needed</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Post lock-in, consider term insurance + mutual funds for better returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
