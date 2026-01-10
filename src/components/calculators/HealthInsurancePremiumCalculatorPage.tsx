import { Heart, ArrowRight, Calculator, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface HealthInsurancePremiumCalculatorPageProps {
  onBack: () => void;
}

export default function HealthInsurancePremiumCalculatorPage({ onBack }: HealthInsurancePremiumCalculatorPageProps) {
  const [age, setAge] = useState<string>('30');
  const [sumInsured, setSumInsured] = useState<string>('500000');
  const [members, setMembers] = useState<string>('1');
  const [preExisting, setPreExisting] = useState<string>('no');
  const [showResults, setShowResults] = useState(false);

  const calculatePremium = () => {
    const baseAge = parseInt(age);
    const coverage = parseInt(sumInsured);
    const numMembers = parseInt(members);
    const hasPreExisting = preExisting === 'yes';

    // Base premium calculation (simplified model)
    let basePremium = 3000; // Base for 30 year old

    // Age factor
    if (baseAge < 25) basePremium = 2500;
    else if (baseAge < 35) basePremium = 3500;
    else if (baseAge < 45) basePremium = 5500;
    else if (baseAge < 55) basePremium = 8500;
    else basePremium = 12000;

    // Coverage factor (per lakh)
    const coverageFactor = coverage / 100000;
    let premium = basePremium * coverageFactor * 0.8;

    // Member discount
    if (numMembers === 2) premium *= 1.6; // Family discount
    else if (numMembers === 3) premium *= 2.0;
    else if (numMembers >= 4) premium *= 2.3;

    // Pre-existing condition loading
    if (hasPreExisting) {
      premium *= 1.3;
    }

    const annualPremium = Math.round(premium);
    const monthlyPremium = Math.round(premium / 12);
    const gstAmount = Math.round(annualPremium * 0.18);
    const totalPremium = annualPremium + gstAmount;

    return {
      annualPremium,
      monthlyPremium,
      gstAmount,
      totalPremium,
      perMemberCost: Math.round(totalPremium / numMembers)
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculatePremium() : null;

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
            <span className="text-white">Health Insurance Premium Calculator</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 glass-card rounded-lg">
              <Heart className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-3">Health Insurance Premium Calculator</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Estimate your health insurance premium based on age, coverage amount, family size, and medical history. 
                Get instant quotes and plan your healthcare protection.
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
                Enter Your Details
              </h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="age" className="text-white mb-2 block">
                    Your Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="18"
                    max="80"
                  />
                  <p className="text-xs text-white/40 mt-1">Age of primary insured person</p>
                </div>

                <div>
                  <Label htmlFor="coverage" className="text-white mb-2 block">
                    Sum Insured (₹)
                  </Label>
                  <select
                    id="coverage"
                    value={sumInsured}
                    onChange={(e) => setSumInsured(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#39FF14] focus:outline-none"
                  >
                    <option value="300000" className="bg-black">₹3,00,000</option>
                    <option value="500000" className="bg-black">₹5,00,000</option>
                    <option value="1000000" className="bg-black">₹10,00,000</option>
                    <option value="1500000" className="bg-black">₹15,00,000</option>
                    <option value="2000000" className="bg-black">₹20,00,000</option>
                    <option value="2500000" className="bg-black">₹25,00,000</option>
                  </select>
                  <p className="text-xs text-white/40 mt-1">Maximum coverage amount</p>
                </div>

                <div>
                  <Label htmlFor="members" className="text-white mb-2 block">
                    Number of Members
                  </Label>
                  <select
                    id="members"
                    value={members}
                    onChange={(e) => setMembers(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#39FF14] focus:outline-none"
                  >
                    <option value="1" className="bg-black">Individual (1 person)</option>
                    <option value="2" className="bg-black">Couple (2 adults)</option>
                    <option value="3" className="bg-black">Family (2 adults + 1 child)</option>
                    <option value="4" className="bg-black">Family (2 adults + 2 children)</option>
                  </select>
                  <p className="text-xs text-white/40 mt-1">Family members to be covered</p>
                </div>

                <div>
                  <Label className="text-white mb-3 block">
                    Pre-existing Conditions
                  </Label>
                  <div className="space-y-3">
                    <div 
                      onClick={() => setPreExisting('no')}
                      className={`glass-card rounded-lg p-4 cursor-pointer transition-all ${
                        preExisting === 'no' ? 'border-2 border-[#39FF14]' : 'border border-white/10'
                      }`}
                    >
                      <div className="font-semibold text-white">No</div>
                      <div className="text-xs text-white/60">No pre-existing medical conditions</div>
                    </div>
                    <div 
                      onClick={() => setPreExisting('yes')}
                      className={`glass-card rounded-lg p-4 cursor-pointer transition-all ${
                        preExisting === 'yes' ? 'border-2 border-[#39FF14]' : 'border border-white/10'
                      }`}
                    >
                      <div className="font-semibold text-white">Yes</div>
                      <div className="text-xs text-white/60">Have pre-existing conditions</div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full btn-glow"
                >
                  Calculate Premium
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
                  <span>Buy health insurance early to get lower premiums</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Consider family floater plans for better value</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Higher sum insured provides better protection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Maintain a healthy lifestyle for no-claim bonuses</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div>
            {showResults && results ? (
              <div className="space-y-6">
                <div className="glass-card rounded-lg p-8 border border-[#39FF14]/20">
                  <h3 className="text-white mb-6">Your Premium Estimate</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-white/60 text-sm mb-2">Total Annual Premium (incl. GST)</p>
                      <p className="text-4xl font-semibold text-[#39FF14]">
                        ₹{results.totalPremium.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-white/60 text-sm mb-2">Monthly Premium</p>
                        <p className="text-xl font-semibold text-white">
                          ₹{results.monthlyPremium.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-2">GST (18%)</p>
                        <p className="text-xl font-semibold text-white">
                          ₹{results.gstAmount.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>

                    {parseInt(members) > 1 && (
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-white/60 text-sm mb-2">Cost Per Member</p>
                        <p className="text-2xl font-semibold text-white">
                          ₹{results.perMemberCost.toLocaleString('en-IN')}/year
                        </p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-white/10">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Base Premium</span>
                          <span className="text-white">₹{results.annualPremium.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">GST</span>
                          <span className="text-white">₹{results.gstAmount.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="h-px bg-white/10 my-2"></div>
                        <div className="flex justify-between">
                          <span className="text-white font-semibold">Total Payable</span>
                          <span className="text-[#39FF14] font-semibold">
                            ₹{results.totalPremium.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-glow">
                  View Health Insurance Plans
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <div className="glass-card rounded-lg p-6 bg-white/5">
                  <h4 className="text-white mb-3">What's Covered?</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">✓</span>
                      <span>Hospitalization expenses</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">✓</span>
                      <span>Pre & post hospitalization</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">✓</span>
                      <span>Daycare procedures</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#39FF14]">✓</span>
                      <span>Ambulance charges</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <Heart className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/60">
                  Enter your details to get premium estimate
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
            {/* What is */}
            <section>
              <h2 className="text-white mb-4">What is a Health Insurance Premium Calculator?</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                A Health Insurance Premium Calculator helps you estimate the cost of health insurance coverage based on 
                various factors like age, coverage amount, number of family members, and medical history. It provides 
                instant premium quotes to help you plan your healthcare budget.
              </p>
              <p className="text-white/70 leading-relaxed">
                The calculator considers industry-standard pricing models and regulations to give you accurate estimates, 
                though actual premiums may vary based on insurer-specific underwriting and additional riders.
              </p>
            </section>

            {/* Factors */}
            <section>
              <h2 className="text-white mb-4">Factors Affecting Premium</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Age</h4>
                  <p className="text-white/60 text-sm">
                    Younger individuals pay lower premiums. Premiums increase significantly after age 45-50 due to 
                    higher health risks.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Sum Insured</h4>
                  <p className="text-white/60 text-sm">
                    Higher coverage amounts result in higher premiums but provide better financial protection against 
                    medical expenses.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Pre-existing Conditions</h4>
                  <p className="text-white/60 text-sm">
                    Existing medical conditions may increase premiums by 20-50% depending on severity and type of 
                    condition.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Family Size</h4>
                  <p className="text-white/60 text-sm">
                    Family floater plans offer better value than individual plans, with discounts for covering multiple 
                    members.
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
                    What sum insured should I choose?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Aim for at least ₹5-10 lakhs for individuals and ₹10-15 lakhs for families. Consider higher coverage 
                    in metro cities due to expensive medical treatments.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Are pre-existing conditions covered?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Most policies cover pre-existing conditions after a waiting period of 2-4 years. Some insurers offer 
                    immediate coverage with higher premiums.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Can I get tax benefits?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Yes! Health insurance premiums are eligible for tax deduction under Section 80D - up to ₹25,000 for 
                    self/family and additional ₹25,000 for parents.
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
            <h2 className="text-white mb-4">Ready to Protect Your Health?</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Explore comprehensive health insurance plans from top insurers and get instant coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                View Health Plans
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
