import { Wallet, ArrowRight, Calculator, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface CompoundInterestCalculatorPageProps {
  onBack: () => void;
}

export default function CompoundInterestCalculatorPage({ onBack }: CompoundInterestCalculatorPageProps) {
  const [principal, setPrincipal] = useState<string>('100000');
  const [rate, setRate] = useState<string>('8');
  const [time, setTime] = useState<string>('5');
  const [frequency, setFrequency] = useState<string>('12'); // Monthly
  const [showResults, setShowResults] = useState(false);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(frequency);

    // A = P(1 + r/n)^(nt)
    const amount = P * Math.pow(1 + r / n, n * t);
    const compoundInterest = amount - P;

    return {
      maturityAmount: Math.round(amount),
      principalAmount: Math.round(P),
      interestEarned: Math.round(compoundInterest)
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateCompoundInterest() : null;

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
            <span className="text-white">Compound Interest Calculator</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 glass-card rounded-lg">
              <Wallet className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-3">Compound Interest Calculator</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Calculate the power of compound interest on your investments. See how your money grows exponentially
                over time with regular compounding.
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
                Enter Investment Details
              </h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="principal" className="text-white mb-2 block">
                    Principal Amount (₹)
                  </Label>
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="1000"
                    step="1000"
                  />
                  <p className="text-xs text-white/40 mt-1">Initial investment amount</p>
                </div>

                <div>
                  <Label htmlFor="rate" className="text-white mb-2 block">
                    Annual Interest Rate (%)
                  </Label>
                  <Input
                    id="rate"
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="0.1"
                    max="30"
                    step="0.1"
                  />
                  <p className="text-xs text-white/40 mt-1">Expected annual return rate</p>
                </div>

                <div>
                  <Label htmlFor="time" className="text-white mb-2 block">
                    Time Period (Years)
                  </Label>
                  <Input
                    id="time"
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="1"
                    max="50"
                  />
                  <p className="text-xs text-white/40 mt-1">Investment duration</p>
                </div>

                <div>
                  <Label htmlFor="frequency" className="text-white mb-2 block">
                    Compounding Frequency
                  </Label>
                  <select
                    id="frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#39FF14] focus:outline-none"
                  >
                    <option value="1" className="bg-black">Annually</option>
                    <option value="2" className="bg-black">Semi-Annually</option>
                    <option value="4" className="bg-black">Quarterly</option>
                    <option value="12" className="bg-black">Monthly</option>
                    <option value="365" className="bg-black">Daily</option>
                  </select>
                  <p className="text-xs text-white/40 mt-1">How often interest is compounded</p>
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full btn-glow"
                >
                  Calculate Returns
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="glass-card rounded-lg p-6 mt-6 border-l-4 border-[#39FF14]">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#39FF14]" />
                Pro Tips
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>More frequent compounding increases returns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Time is your biggest ally in compound growth</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Even small differences in rates compound significantly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Reinvest returns to maximize compounding benefits</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div>
            {showResults && results ? (
              <div className="space-y-6">
                <div className="glass-card rounded-lg p-8 border border-[#39FF14]/20">
                  <h3 className="text-white mb-6">Your Investment Growth</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/60 text-sm mb-2">Maturity Amount</p>
                      <p className="text-4xl font-semibold text-[#39FF14]">
                        ₹{results.maturityAmount.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-white/60 text-sm mb-2">Principal</p>
                        <p className="text-2xl font-semibold text-white">
                          ₹{results.principalAmount.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-2">Interest Earned</p>
                        <p className="text-2xl font-semibold text-white">
                          ₹{results.interestEarned.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/60 text-sm">Principal</span>
                        <span className="text-white text-sm">
                          {((results.principalAmount / results.maturityAmount) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white/30"
                          style={{ width: `${(results.principalAmount / results.maturityAmount) * 100}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center mb-2 mt-4">
                        <span className="text-white/60 text-sm">Interest</span>
                        <span className="text-[#39FF14] text-sm">
                          {((results.interestEarned / results.maturityAmount) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#39FF14]"
                          style={{ width: `${(results.interestEarned / results.maturityAmount) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/60 text-sm mb-2">Growth Rate</p>
                      <p className="text-2xl font-semibold text-[#39FF14]">
                        {((results.maturityAmount / results.principalAmount - 1) * 100).toFixed(2)}%
                      </p>
                      <p className="text-white/40 text-sm mt-1">Total wealth multiplication</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-glow">
                  View Investment Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="glass-card rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <Wallet className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/60">
                  Enter your investment details to see compound growth
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
            {/* What is Compound Interest */}
            <section>
              <h2 className="text-white mb-4">What is Compound Interest?</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                compound interest can turn small, regular investments into massive wealth over time. It&apos;s theposit or loan. In other words,
                it&apos;s interest on interest. This makes your money grow at a faster rate compared to simple interest,
                which is calculated only on the principal amount.
              </p>
              <p className="text-white/70 leading-relaxed">
                Albert Einstein reportedly called compound interest &quot;the eighth wonder of the world,&quot; stating that
                &quot;he who understands it, earns it; he who doesn&apos;t, pays it.&quot; This powerful force can work for or
                against you depending on whether you&apos;re investing or borrowing.
              </p>
            </section>

            {/* Formula */}
            <section>
              <h2 className="text-white mb-4">Compound Interest Formula</h2>
              <div className="glass-card rounded-lg p-6 bg-white/5">
                <p className="text-white mb-4 font-mono text-sm">
                  A = P(1 + r/n)^(nt)
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">A</span>
                    <span className="text-white/70">Final amount (principal + interest)</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">P</span>
                    <span className="text-white/70">Principal amount (initial investment)</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">r</span>
                    <span className="text-white/70">Annual interest rate (decimal)</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">n</span>
                    <span className="text-white/70">Number of times interest compounds per year</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">t</span>
                    <span className="text-white/70">Time in years</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-white mb-4">Power of Compound Interest</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Exponential Growth</h4>
                  <p className="text-white/60 text-sm">
                    Unlike simple interest which grows linearly, compound interest grows exponentially,
                    dramatically increasing your wealth over time.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Time Advantage</h4>
                  <p className="text-white/60 text-sm">
                    Starting early gives you a massive advantage. Even small amounts invested early can
                    outperform larger amounts invested later.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Passive Wealth Building</h4>
                  <p className="text-white/60 text-sm">
                    Once invested, your money works for you automatically, generating returns on both
                    principal and accumulated interest.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Frequency Matters</h4>
                  <p className="text-white/60 text-sm">
                    More frequent compounding (daily vs yearly) increases your returns. Choose investments
                    with frequent compounding periods.
                  </p>
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
                    What&apos;s the difference between simple and compound interest?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Simple interest is calculated only on the principal amount, while compound interest is calculated
                    on both the principal and accumulated interest. Compound interest results in higher returns.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Which investments offer compound interest?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Fixed deposits, mutual funds, PPF, stocks (through dividend reinvestment), and most savings
                    accounts offer compound interest. Mutual funds and stocks offer particularly powerful compounding.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    How does compounding frequency affect returns?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Higher frequency means more compound periods, leading to slightly higher returns. For example,
                    monthly compounding gives better returns than annual compounding at the same interest rate.
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
            <h2 className="text-white mb-4">Start Your Compounding Journey</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Explore investment options that offer attractive compound interest rates and start building wealth today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                View Investment Plans
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
