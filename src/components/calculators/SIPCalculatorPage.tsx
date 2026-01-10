import { TrendingUp, ArrowRight, Calculator, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface SIPCalculatorPageProps {
  onBack: () => void;
}

export default function SIPCalculatorPage({ onBack }: SIPCalculatorPageProps) {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('5000');
  const [expectedReturn, setExpectedReturn] = useState<string>('12');
  const [timePeriod, setTimePeriod] = useState<string>('10');
  const [showResults, setShowResults] = useState(false);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / 100 / 12; // Monthly rate
    const n = parseFloat(timePeriod) * 12; // Total months

    // SIP Formula: M = P × ({[1 + r]^n – 1} / r) × (1 + r)
    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const totalInvestment = P * n;
    const returns = futureValue - totalInvestment;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      returns: Math.round(returns)
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateSIP() : null;

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
            <span className="text-white">SIP Calculator</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 glass-card rounded-lg">
              <TrendingUp className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-3">SIP Calculator</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Calculate your Systematic Investment Plan (SIP) returns with precision. Plan your wealth creation 
                journey with accurate projections based on compound growth.
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
                  <Label htmlFor="monthly" className="text-white mb-2 block">
                    Monthly Investment (₹)
                  </Label>
                  <Input
                    id="monthly"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="500"
                    step="500"
                  />
                  <p className="text-xs text-white/40 mt-1">Minimum ₹500 per month</p>
                </div>

                <div>
                  <Label htmlFor="return" className="text-white mb-2 block">
                    Expected Return Rate (% per annum)
                  </Label>
                  <Input
                    id="return"
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="1"
                    max="30"
                    step="0.5"
                  />
                  <p className="text-xs text-white/40 mt-1">Typical range: 8-15% for equity mutual funds</p>
                </div>

                <div>
                  <Label htmlFor="period" className="text-white mb-2 block">
                    Time Period (Years)
                  </Label>
                  <Input
                    id="period"
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="1"
                    max="40"
                  />
                  <p className="text-xs text-white/40 mt-1">Recommended: 5+ years for equity investments</p>
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
                  <span>Start early to maximize compound growth benefits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Increase SIP amount annually with income growth</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Stay invested for at least 5 years for optimal returns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Diversify across multiple funds to reduce risk</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div>
            {showResults && results ? (
              <div className="space-y-6">
                <div className="glass-card rounded-lg p-8 border border-[#39FF14]/20">
                  <h3 className="text-white mb-6">Your Investment Summary</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-white/60 text-sm mb-2">Future Value</p>
                      <p className="text-4xl font-semibold text-[#39FF14]">
                        ₹{results.futureValue.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-white/60 text-sm mb-2">Total Investment</p>
                        <p className="text-2xl font-semibold text-white">
                          ₹{results.totalInvestment.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-2">Estimated Returns</p>
                        <p className="text-2xl font-semibold text-white">
                          ₹{results.returns.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/60 text-sm">Investment</span>
                        <span className="text-white text-sm">
                          {((results.totalInvestment / results.futureValue) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white/30"
                          style={{ width: `${(results.totalInvestment / results.futureValue) * 100}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center mb-2 mt-4">
                        <span className="text-white/60 text-sm">Returns</span>
                        <span className="text-[#39FF14] text-sm">
                          {((results.returns / results.futureValue) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#39FF14]"
                          style={{ width: `${(results.returns / results.futureValue) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full btn-glow"
                  onClick={() => {/* Navigate to plans */}}
                >
                  View Investment Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="glass-card rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <TrendingUp className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/60">
                  Enter your investment details to see projected returns
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
            {/* What is SIP */}
            <section>
              <h2 className="text-white mb-4">What is a SIP Calculator?</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                A SIP (Systematic Investment Plan) Calculator is a powerful tool that helps you estimate the returns 
                on your mutual fund investments made through systematic monthly contributions. It uses the power of 
                compound interest to project your wealth accumulation over time.
              </p>
              <p className="text-white/70 leading-relaxed">
                By investing a fixed amount regularly in mutual funds, you benefit from rupee cost averaging and the 
                compounding effect, which can significantly grow your wealth over the long term.
              </p>
            </section>

            {/* How to Use */}
            <section>
              <h2 className="text-white mb-4">How to Use the SIP Calculator</h2>
              <div className="space-y-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Step 1: Enter Monthly Investment</h4>
                  <p className="text-white/60 text-sm">
                    Decide how much you can invest every month. Even small amounts like ₹1,000-2,000 can grow 
                    substantially over time through regular investments.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Step 2: Set Expected Return Rate</h4>
                  <p className="text-white/60 text-sm">
                    Enter your expected annual return rate. Equity mutual funds typically deliver 12-15% returns 
                    over the long term, while debt funds offer 7-9% returns.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Step 3: Choose Time Period</h4>
                  <p className="text-white/60 text-sm">
                    Select your investment horizon. Longer periods allow compound interest to work its magic, 
                    potentially multiplying your wealth significantly.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Step 4: Calculate & Plan</h4>
                  <p className="text-white/60 text-sm">
                    Click calculate to see your projected returns. Use these insights to plan your financial goals 
                    and adjust your investment strategy accordingly.
                  </p>
                </div>
              </div>
            </section>

            {/* Formula */}
            <section>
              <h2 className="text-white mb-4">SIP Calculation Formula</h2>
              <div className="glass-card rounded-lg p-6 bg-white/5">
                <p className="text-white mb-4 font-mono text-sm">
                  FV = P × ((({`[1 + r]^n – 1`}) / r) × (1 + r))
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">FV</span>
                    <span className="text-white/70">Future Value of investment</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">P</span>
                    <span className="text-white/70">Monthly investment amount</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">r</span>
                    <span className="text-white/70">Expected rate of return (monthly)</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-[#39FF14] w-8">n</span>
                    <span className="text-white/70">Number of payments (months)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-white mb-4">Benefits of Using SIP Calculator</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Accurate Planning</h4>
                  <p className="text-white/60 text-sm">
                    Get precise estimates of your future wealth, helping you plan for specific financial goals 
                    like retirement, education, or home purchase.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Goal-Based Investing</h4>
                  <p className="text-white/60 text-sm">
                    Calculate how much you need to invest monthly to reach your target corpus, making goal 
                    achievement more systematic.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Compare Scenarios</h4>
                  <p className="text-white/60 text-sm">
                    Test different investment amounts, time periods, and return rates to find the optimal 
                    strategy for your financial situation.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Time-Saving</h4>
                  <p className="text-white/60 text-sm">
                    Get instant calculations without complex manual computations, allowing you to make quick, 
                    informed investment decisions.
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
                    What is the minimum amount to start a SIP?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Most mutual funds allow SIPs starting from ₹500 per month. However, investing higher amounts 
                    can help you build wealth faster and reach your financial goals sooner.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    What is a good expected return rate for SIP?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Historically, equity mutual funds have delivered 12-15% annualized returns over 10+ year periods. 
                    Debt funds typically offer 7-9% returns. Use conservative estimates for realistic planning.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Can I increase my SIP amount later?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Yes, you can increase your SIP amount through a Step-Up SIP or by starting an additional SIP. 
                    Increasing investments with rising income is a smart strategy for wealth building.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Is SIP better than lump sum investment?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    SIP offers rupee cost averaging, reducing timing risk by investing regularly regardless of market 
                    conditions. It's ideal for salaried individuals and those who want to build wealth systematically.
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
            <h2 className="text-white mb-4">Ready to Start Your SIP Journey?</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Explore our curated mutual fund plans and start investing with as little as ₹500 per month.
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