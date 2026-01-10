import { ArrowLeft, Calculator, Car, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface CarInsuranceCalculatorPageProps {
  onBack: () => void;
}

export default function CarInsuranceCalculatorPage({ onBack }: CarInsuranceCalculatorPageProps) {
  const [carValue, setCarValue] = useState('800000');
  const [carAge, setCarAge] = useState('2');
  const [cityType, setCityType] = useState<'metro' | 'non-metro'>('metro');
  const [policyType, setPolicyType] = useState<'comprehensive' | 'third-party'>('comprehensive');
  const [idv, setIdv] = useState('');
  const [addOns, setAddOns] = useState({
    zeroDepreciation: false,
    engineProtection: false,
    returnToInvoice: false,
    roadside: false,
    consumables: false
  });
  const [result, setResult] = useState<{
    idv: number;
    basePremium: number;
    addOnCost: number;
    ncbDiscount: number;
    subtotal: number;
    gst: number;
    totalPremium: number;
    monthlyPremium: number;
  } | null>(null);

  const calculateCarInsurance = () => {
    const value = parseFloat(carValue);
    const age = parseFloat(carAge);

    // Calculate IDV (Insured Declared Value) with depreciation
    let depreciationRate = 0.05;
    if (age <= 1) depreciationRate = 0.05;
    else if (age <= 2) depreciationRate = 0.10;
    else if (age <= 3) depreciationRate = 0.15;
    else if (age <= 4) depreciationRate = 0.20;
    else if (age <= 5) depreciationRate = 0.25;
    else depreciationRate = 0.40;

    const calculatedIDV = value * (1 - depreciationRate);
    const finalIDV = idv ? parseFloat(idv) : calculatedIDV;

    // Base premium calculation
    let basePremium = 0;
    if (policyType === 'comprehensive') {
      // Comprehensive premium (OD + TP)
      const odPremium = finalIDV * 0.03; // Approximately 3% of IDV
      const tpPremium = cityType === 'metro' ? 2200 : 1800; // Third party premium
      basePremium = odPremium + tpPremium;
    } else {
      // Only third party
      basePremium = cityType === 'metro' ? 2200 : 1800;
    }

    // Add-on costs
    let addOnCost = 0;
    if (addOns.zeroDepreciation) addOnCost += basePremium * 0.20;
    if (addOns.engineProtection) addOnCost += finalIDV * 0.005;
    if (addOns.returnToInvoice) addOnCost += finalIDV * 0.01;
    if (addOns.roadside) addOnCost += 500;
    if (addOns.consumables) addOnCost += 1500;

    // NCB (No Claim Bonus) - assuming no claims
    const ncbDiscount = age > 0 ? basePremium * 0.20 : 0; // 20% NCB assumed

    // GST
    const totalBeforeGST = basePremium + addOnCost - ncbDiscount;
    const gst = totalBeforeGST * 0.18;
    const totalPremium = totalBeforeGST + gst;

    setResult({
      idv: finalIDV,
      basePremium: basePremium,
      addOnCost: addOnCost,
      ncbDiscount: ncbDiscount,
      subtotal: totalBeforeGST,
      gst: gst,
      totalPremium: totalPremium,
      monthlyPremium: totalPremium / 12
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
              <Car className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">Car Insurance Calculator</h1>
              <p className="text-white/70 text-lg">
                Calculate car insurance premium with comprehensive and third-party coverage options
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
                Calculate Car Insurance
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Car Current Value (₹)</label>
                  <Input
                    type="number"
                    value={carValue}
                    onChange={(e) => setCarValue(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="800000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Car Age (years)</label>
                  <Input
                    type="number"
                    value={carAge}
                    onChange={(e) => setCarAge(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Insured Declared Value (IDV) - Optional</label>
                  <Input
                    type="number"
                    value={idv}
                    onChange={(e) => setIdv(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Auto-calculated if left empty"
                  />
                  <p className="text-white/50 text-xs mt-1">Leave empty for automatic calculation based on depreciation</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">City Type</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setCityType('metro')}
                      className={`flex-1 px-4 py-2 rounded-lg border ${cityType === 'metro'
                          ? 'bg-[#39FF14] text-black border-[#39FF14]'
                          : 'bg-white/5 text-white border-white/10'
                        }`}
                    >
                      Metro City
                    </button>
                    <button
                      onClick={() => setCityType('non-metro')}
                      className={`flex-1 px-4 py-2 rounded-lg border ${cityType === 'non-metro'
                          ? 'bg-[#39FF14] text-black border-[#39FF14]'
                          : 'bg-white/5 text-white border-white/10'
                        }`}
                    >
                      Non-Metro
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Policy Type</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setPolicyType('comprehensive')}
                      className={`flex-1 px-4 py-2 rounded-lg border ${policyType === 'comprehensive'
                          ? 'bg-[#39FF14] text-black border-[#39FF14]'
                          : 'bg-white/5 text-white border-white/10'
                        }`}
                    >
                      Comprehensive
                    </button>
                    <button
                      onClick={() => setPolicyType('third-party')}
                      className={`flex-1 px-4 py-2 rounded-lg border ${policyType === 'third-party'
                          ? 'bg-[#39FF14] text-black border-[#39FF14]'
                          : 'bg-white/5 text-white border-white/10'
                        }`}
                    >
                      Third Party Only
                    </button>
                  </div>
                </div>

                {policyType === 'comprehensive' && (
                  <div>
                    <label className="block text-sm font-medium mb-3 text-white/80">Add-Ons (Optional)</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={addOns.zeroDepreciation}
                          onChange={(e) => setAddOns({ ...addOns, zeroDepreciation: e.target.checked })}
                          className="w-4 h-4 rounded accent-[#39FF14]"
                        />
                        <span className="text-white/80">Zero Depreciation Cover</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={addOns.engineProtection}
                          onChange={(e) => setAddOns({ ...addOns, engineProtection: e.target.checked })}
                          className="w-4 h-4 rounded accent-[#39FF14]"
                        />
                        <span className="text-white/80">Engine Protection</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={addOns.returnToInvoice}
                          onChange={(e) => setAddOns({ ...addOns, returnToInvoice: e.target.checked })}
                          className="w-4 h-4 rounded accent-[#39FF14]"
                        />
                        <span className="text-white/80">Return to Invoice</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={addOns.roadside}
                          onChange={(e) => setAddOns({ ...addOns, roadside: e.target.checked })}
                          className="w-4 h-4 rounded accent-[#39FF14]"
                        />
                        <span className="text-white/80">Roadside Assistance</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={addOns.consumables}
                          onChange={(e) => setAddOns({ ...addOns, consumables: e.target.checked })}
                          className="w-4 h-4 rounded accent-[#39FF14]"
                        />
                        <span className="text-white/80">Consumables Cover</span>
                      </label>
                    </div>
                  </div>
                )}

                <Button
                  onClick={calculateCarInsurance}
                  className="w-full bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold"
                >
                  Calculate Premium
                </Button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Premium Breakdown</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Insured Declared Value (IDV)</span>
                    <span className="text-lg font-bold text-white">₹{result.idv.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">Base Premium</span>
                    <span className="text-lg font-bold text-white">₹{result.basePremium.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  {result.addOnCost > 0 && (
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/70">Add-Ons Cost</span>
                      <span className="text-lg font-bold text-[#39FF14]">+ ₹{result.addOnCost.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>
                  )}

                  {result.ncbDiscount > 0 && (
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/70">NCB Discount (20%)</span>
                      <span className="text-lg font-bold text-[#39FF14]">- ₹{result.ncbDiscount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/70">GST (18%)</span>
                    <span className="text-lg font-bold text-white">₹{result.gst.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xl font-bold text-white">Annual Premium</span>
                    <span className="text-2xl font-bold text-[#39FF14]">₹{result.totalPremium.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Monthly Equivalent</span>
                    <span className="text-lg font-bold text-white">₹{result.monthlyPremium.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            {/* About */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">About Car Insurance</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Car insurance is mandatory in India under the Motor Vehicles Act. It provides financial protection against damages
                to your vehicle and third-party liabilities arising from accidents.
              </p>
              <p className="text-white/70 leading-relaxed">
                Third-party insurance covers damage to others, while comprehensive insurance covers both own damage and third-party liabilities.
              </p>
            </div>

            {/* Formula */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#39FF14]" />
                How It&apos;s Calculated
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#39FF14] font-semibold mb-2">IDV Calculation:</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80">
                    IDV = Car Value × (1 - Depreciation Rate)
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    Depreciation: 5% (0-1 yr), 10% (1-2 yr), 15% (2-3 yr), 20% (3-4 yr), 25% (4-5 yr), 40% (5+ yrs)
                  </p>
                </div>

                <div>
                  <p className="text-[#39FF14] font-semibold mb-2">Premium Formula:</p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm text-white/80">
                    Premium = (OD Premium + TP Premium + Add-ons - NCB) + GST
                  </div>
                  <p className="text-white/60 text-sm mt-2">
                    OD = Own Damage (~3% of IDV), TP = Third Party (fixed by IRDAI)
                  </p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">When to Get Car Insurance</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Purchasing a new or used car (mandatory)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Renewing existing policy before expiry</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Upgrading from third-party to comprehensive</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Comparing quotes from different insurers</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Planning annual vehicle expenses and budget</p>
                </div>
              </div>
            </div>

            {/* Add-Ons Explained */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Understanding Add-Ons</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white mb-1">Zero Depreciation</p>
                  <p className="text-white/60 text-sm">No depreciation deducted on parts during claim settlement</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Engine Protection</p>
                  <p className="text-white/60 text-sm">Covers engine and gearbox damage from water ingression or oil leakage</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Return to Invoice</p>
                  <p className="text-white/60 text-sm">Pays invoice value in case of total loss or theft</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Roadside Assistance</p>
                  <p className="text-white/60 text-sm">24x7 towing, fuel delivery, flat tire assistance</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Consumables Cover</p>
                  <p className="text-white/60 text-sm">Covers cost of consumables like engine oil, nuts, bolts, screws</p>
                </div>
              </div>
            </div>

            {/* NCB Information */}
            <div className="glass-card rounded-2xl p-8 bg-[#39FF14]/5 border border-[#39FF14]/20">
              <h3 className="text-2xl font-bold mb-4 text-white">No Claim Bonus (NCB)</h3>
              <p className="text-white/70 mb-4">Earn discount for claim-free years:</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">1st Year:</span>
                  <span className="text-[#39FF14] font-bold">20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">2nd Year:</span>
                  <span className="text-[#39FF14] font-bold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">3rd Year:</span>
                  <span className="text-[#39FF14] font-bold">35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">4th Year:</span>
                  <span className="text-[#39FF14] font-bold">45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">5th Year+:</span>
                  <span className="text-[#39FF14] font-bold">50%</span>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4">
                NCB is linked to you, not the vehicle. Transfer it when changing cars!
              </p>
            </div>

            {/* Tips */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Don&apos;t let policy lapse - continuous coverage maintains NCB</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Install anti-theft devices for additional discounts</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Opt for voluntary deductible to reduce premium costs</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Buy policy online for lower premiums (no agent commission)</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#39FF14] font-bold">•</span>
                  <p className="text-white/70">Consider zero depreciation for cars less than 5 years old</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
