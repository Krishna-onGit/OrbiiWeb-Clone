import { ArrowLeft, Calculator, Receipt, CheckCircle2, DollarSign, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface GSTCalculatorPageProps {
  onBack: () => void;
}

export default function GSTCalculatorPage({ onBack }: GSTCalculatorPageProps) {
  const [amount, setAmount] = useState('10000');
  const [gstRate, setGstRate] = useState('18');
  const [calculationType, setCalculationType] = useState<'exclusive' | 'inclusive'>('exclusive');
  const [result, setResult] = useState<any>(null);

  const calculateGST = () => {
    const baseAmount = parseFloat(amount);
    const rate = parseFloat(gstRate) / 100;

    let netAmount, gstAmount, totalAmount;

    if (calculationType === 'exclusive') {
      // GST is added to base amount
      netAmount = baseAmount;
      gstAmount = baseAmount * rate;
      totalAmount = baseAmount + gstAmount;
    } else {
      // GST is included in total amount
      totalAmount = baseAmount;
      netAmount = baseAmount / (1 + rate);
      gstAmount = baseAmount - netAmount;
    }

    // CGST and SGST are half of GST each (for intra-state)
    // IGST is full GST (for inter-state)
    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;
    const igst = gstAmount;

    setResult({
      netAmount: netAmount,
      gstAmount: gstAmount,
      totalAmount: totalAmount,
      cgst: cgst,
      sgst: sgst,
      igst: igst,
      gstRate: parseFloat(gstRate)
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
              <Receipt className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">GST Calculator</h1>
              <p className="text-white/70 text-lg">
                Calculate GST amount for goods and services with inclusive and exclusive options
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
                Calculate GST
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Calculation Type</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setCalculationType('exclusive')}
                      className={`flex-1 px-4 py-3 rounded-lg border ${
                        calculationType === 'exclusive'
                          ? 'bg-[#39FF14] text-black border-[#39FF14]'
                          : 'bg-white/5 text-white border-white/10'
                      }`}
                    >
                      <div>
                        <p className="font-semibold">GST Exclusive</p>
                        <p className="text-xs opacity-70">Add GST to amount</p>
                      </div>
                    </button>
                    <button
                      onClick={() => setCalculationType('inclusive')}
                      className={`flex-1 px-4 py-3 rounded-lg border ${
                        calculationType === 'inclusive'
                          ? 'bg-[#39FF14] text-black border-[#39FF14]'
                          : 'bg-white/5 text-white border-white/10'
                      }`}
                    >
                      <div>
                        <p className="font-semibold">GST Inclusive</p>
                        <p className="text-xs opacity-70">Remove GST from amount</p>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    {calculationType === 'exclusive' ? 'Net Amount (₹)' : 'Total Amount (₹)'}
                  </label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="10000"
                  />
                  <p className="text-white/50 text-xs mt-1">
                    {calculationType === 'exclusive' 
                      ? 'Enter base amount (GST will be added)' 
                      : 'Enter total amount (GST will be calculated)'
                    }
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">GST Rate (%)</label>
                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {['5', '12', '18', '28'].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setGstRate(rate)}
                        className={`px-3 py-2 rounded-lg border ${
                          gstRate === rate
                            ? 'bg-[#39FF14] text-black border-[#39FF14]'
                            : 'bg-white/5 text-white border-white/10'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                    <Input
                      type="number"
                      value={gstRate}
                      onChange={(e) => setGstRate(e.target.value)}
                      className="bg-white/5 border-white/10 text-white text-center"
                      placeholder="%"
                      step="0.1"
                    />
                  </div>
                  <p className="text-white/50 text-xs">Common rates: 5%, 12%, 18%, 28% or enter custom rate</p>
                </div>

                <Button 
                  onClick={calculateGST}
                  className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold"
                >
                  Calculate GST
                </Button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">GST Breakdown</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Net Amount (Taxable Value)</span>
                    <span className="text-xl font-bold text-white">₹{result.netAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">GST Amount ({result.gstRate}%)</span>
                    <span className="text-xl font-bold text-[#39FF14]">₹{result.gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xl font-bold text-white">Total Amount</span>
                    <span className="text-2xl font-bold text-[#39FF14]">₹{result.totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>

                  {/* GST Component Breakdown */}
                  <div className="mt-6 p-6 bg-white/5 rounded-xl space-y-4">
                    <p className="text-white font-semibold mb-3">GST Components:</p>
                    
                    <div>
                      <p className="text-white/60 text-sm mb-2">For Intra-State Transaction:</p>
                      <div className="space-y-2 ml-4">
                        <div className="flex justify-between">
                          <span className="text-white/70">CGST ({result.gstRate/2}%)</span>
                          <span className="text-white">₹{result.cgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">SGST ({result.gstRate/2}%)</span>
                          <span className="text-white">₹{result.sgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-white/60 text-sm mb-2">For Inter-State Transaction:</p>
                      <div className="flex justify-between ml-4">
                        <span className="text-white/70">IGST ({result.gstRate}%)</span>
                        <span className="text-white">₹{result.igst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
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
              <h3 className="text-2xl font-bold mb-4 text-white">About GST</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Goods and Services Tax (GST) is an indirect tax levied on the supply of goods and services in India. 
                It replaced multiple cascading taxes with a unified tax system.
              </p>
              <p className="text-white/70 leading-relaxed">
                GST is collected at every point of sale and is destination-based, meaning it's consumed at the point 
                of consumption, not origin.
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
                  <p className="text-[#39FF14] font-semibold mb-2">GST Exclusive (Add GST):</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80 space-y-1">
                    <div>GST Amount = Net Amount × GST Rate</div>
                    <div>Total Amount = Net Amount + GST Amount</div>
                  </div>
                </div>

                <div>
                  <p className="text-[#39FF14] font-semibold mb-2">GST Inclusive (Remove GST):</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80 space-y-1">
                    <div>Net Amount = Total Amount / (1 + GST Rate)</div>
                    <div>GST Amount = Total Amount - Net Amount</div>
                  </div>
                </div>
              </div>
            </div>

            {/* GST Rates */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Standard GST Rates</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">0% (NIL Rate)</span>
                    <span className="text-[#39FF14]">Exempt</span>
                  </div>
                  <p className="text-white/60 text-sm">Fresh vegetables, milk, bread, eggs, education, healthcare</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">5%</span>
                    <span className="text-[#39FF14]">Essential Goods</span>
                  </div>
                  <p className="text-white/60 text-sm">Sugar, tea, coffee, edible oils, domestic LPG, transport services</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">12%</span>
                    <span className="text-[#39FF14]">Standard Goods</span>
                  </div>
                  <p className="text-white/60 text-sm">Processed food, computers, mobile phones (without charger)</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">18%</span>
                    <span className="text-[#39FF14]">Most Common</span>
                  </div>
                  <p className="text-white/60 text-sm">IT services, telecom, banking, restaurants, clothing above ₹1000</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">28%</span>
                    <span className="text-[#39FF14]">Luxury Goods</span>
                  </div>
                  <p className="text-white/60 text-sm">Luxury cars, tobacco, aerated drinks, high-end electronics</p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">When to Use GST Calculator</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Preparing invoices and quotations for customers</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Calculating tax liability for GST returns filing</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Determining product pricing including taxes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Verifying GST charges on bills and receipts</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Planning business expense budgets with GST</p>
                </div>
              </div>
            </div>

            {/* GST Components */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Understanding GST Components</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">CGST (Central GST)</p>
                    <p className="text-white/60 text-sm">Tax collected by Central Government on intra-state transactions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">SGST (State GST)</p>
                    <p className="text-white/60 text-sm">Tax collected by State Government on intra-state transactions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">IGST (Integrated GST)</p>
                    <p className="text-white/60 text-sm">Tax on inter-state transactions and imports</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">UTGST (UT GST)</p>
                    <p className="text-white/60 text-sm">Tax for Union Territories without legislature</p>
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
                  <p className="text-white/70">Register for GST if annual turnover exceeds ₹40 lakhs (₹20L for services)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Claim input tax credit to reduce GST liability</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">File returns on time to avoid penalties and interest</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Keep proper invoices and documentation for compliance</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Use composition scheme for simplified compliance (eligible businesses)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
