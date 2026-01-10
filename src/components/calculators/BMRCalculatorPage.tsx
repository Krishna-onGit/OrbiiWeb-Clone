import { Activity, ArrowRight, Calculator, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface BMRCalculatorPageProps {
  onBack: () => void;
}

export default function BMRCalculatorPage({ onBack }: BMRCalculatorPageProps) {
  const [age, setAge] = useState<string>('30');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('170');
  const [weight, setWeight] = useState<string>('70');
  const [system, setSystem] = useState<'metric' | 'imperial'>('metric');
  const [showResults, setShowResults] = useState(false);

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) return null;

    const heightInCm = system === 'metric' ? h : h * 2.54;
    const weightInKg = system === 'metric' ? w : w * 0.453592;

    // Mifflin-St Jeor Equation (most accurate)
    let mifflinStJeor: number;
    if (gender === 'male') {
      mifflinStJeor = 10 * weightInKg + 6.25 * heightInCm - 5 * a + 5;
    } else {
      mifflinStJeor = 10 * weightInKg + 6.25 * heightInCm - 5 * a - 161;
    }

    // Harris-Benedict Equation (revised)
    let harrisBenedict: number;
    if (gender === 'male') {
      harrisBenedict = 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * a + 88.362;
    } else {
      harrisBenedict = 9.247 * weightInKg + 3.098 * heightInCm - 4.330 * a + 447.593;
    }

    // Activity multipliers for TDEE
    const activityLevels = {
      sedentary: mifflinStJeor * 1.2,
      light: mifflinStJeor * 1.375,
      moderate: mifflinStJeor * 1.55,
      active: mifflinStJeor * 1.725,
      veryActive: mifflinStJeor * 1.9
    };

    return {
      bmr: Math.round(mifflinStJeor),
      harrisBenedict: Math.round(harrisBenedict),
      activityLevels: {
        sedentary: Math.round(activityLevels.sedentary),
        light: Math.round(activityLevels.light),
        moderate: Math.round(activityLevels.moderate),
        active: Math.round(activityLevels.active),
        veryActive: Math.round(activityLevels.veryActive)
      }
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateBMR() : null;

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
            <span className="text-white">BMR Calculator</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 glass-card rounded-lg">
              <Activity className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-3">BMR Calculator</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Calculate your Basal Metabolic Rate (BMR) - the number of calories your body burns at complete rest.
                Understand your baseline energy needs for effective weight management.
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
                {/* Unit System Toggle */}
                <div>
                  <Label className="text-white mb-2 block">Unit System</Label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSystem('metric')}
                      className={`flex-1 py-2 px-4 rounded-lg font-thin transition-all ${system === 'metric'
                          ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                          : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                        }`}
                    >
                      Metric
                    </button>
                    <button
                      onClick={() => setSystem('imperial')}
                      className={`flex-1 py-2 px-4 rounded-lg font-thin transition-all ${system === 'imperial'
                          ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                          : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                        }`}
                    >
                      Imperial
                    </button>
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <Label className="text-white mb-2 block">Gender</Label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setGender('male')}
                      className={`flex-1 py-2 px-4 rounded-lg font-thin transition-all ${gender === 'male'
                          ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                          : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                        }`}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setGender('female')}
                      className={`flex-1 py-2 px-4 rounded-lg font-thin transition-all ${gender === 'female'
                          ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                          : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                        }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="age" className="text-white mb-2 block">
                    Age (years)
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="15"
                    max="100"
                  />
                  <p className="text-xs text-white/40 mt-1">Your current age</p>
                </div>

                <div>
                  <Label htmlFor="height" className="text-white mb-2 block">
                    Height ({system === 'metric' ? 'cm' : 'inches'})
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="100"
                    max="250"
                  />
                  <p className="text-xs text-white/40 mt-1">Your height</p>
                </div>

                <div>
                  <Label htmlFor="weight" className="text-white mb-2 block">
                    Weight ({system === 'metric' ? 'kg' : 'lbs'})
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="30"
                    max="300"
                  />
                  <p className="text-xs text-white/40 mt-1">Your current weight</p>
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full btn-glow"
                >
                  Calculate BMR
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="glass-card rounded-lg p-6 mt-6 border-l-4 border-[#39FF14]">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#39FF14]" />
                Important Notes
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>BMR accounts for about 60-75% of total daily calories burned</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Muscle mass increases BMR significantly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>BMR naturally decreases with age</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Use TDEE (includes activity) for daily calorie targets</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div>
            {showResults && results ? (
              <div className="space-y-6">
                <div className="glass-card rounded-lg p-8 border border-[#39FF14]/20">
                  <h3 className="text-white mb-6">Your Basal Metabolic Rate</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/60 text-sm mb-2">BMR (Mifflin-St Jeor)</p>
                      <p className="text-4xl font-semibold text-[#39FF14]">
                        {results.bmr} cal/day
                      </p>
                      <p className="text-white/40 text-sm mt-1">Most accurate formula</p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/60 text-sm mb-2">BMR (Harris-Benedict)</p>
                      <p className="text-2xl font-semibold text-white">
                        {results.harrisBenedict} cal/day
                      </p>
                      <p className="text-white/40 text-sm mt-1">Alternative calculation</p>
                    </div>
                  </div>
                </div>

                {/* TDEE Breakdown */}
                <div className="glass-card rounded-lg p-8">
                  <h3 className="text-white mb-4">Daily Calorie Needs (TDEE)</h3>
                  <p className="text-white/60 text-sm mb-6">Based on your activity level</p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/80 text-sm">Sedentary (little/no exercise)</span>
                        <span className="text-[#39FF14] font-semibold">{results.activityLevels.sedentary}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/80 text-sm">Light (exercise 1-3 days/week)</span>
                        <span className="text-[#39FF14] font-semibold">{results.activityLevels.light}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/80 text-sm">Moderate (exercise 3-5 days/week)</span>
                        <span className="text-[#39FF14] font-semibold">{results.activityLevels.moderate}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/80 text-sm">Active (exercise 6-7 days/week)</span>
                        <span className="text-[#39FF14] font-semibold">{results.activityLevels.active}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/80 text-sm">Very Active (intense daily exercise)</span>
                        <span className="text-[#39FF14] font-semibold">{results.activityLevels.veryActive}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-glow">
                  Get Personalized Diet Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="glass-card rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <Activity className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/60">
                  Enter your details to discover your basal metabolic rate
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
            {/* What is BMR */}
            <section>
              <h2 className="text-white mb-4">What is Basal Metabolic Rate (BMR)?</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Basal Metabolic Rate (BMR) is the number of calories your body needs to perform basic life-sustaining
                functions while at complete rest. These functions include breathing, circulation, nutrient processing,
                and cell production. Your BMR represents the minimum energy required to keep your body functioning.
              </p>
              <p className="text-white/70 leading-relaxed">
                BMR accounts for approximately 60-75% of your total daily energy expenditure, making it the largest
                component of your calorie burn. Understanding your BMR is crucial for creating effective weight
                management strategies and nutrition plans.
              </p>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-white mb-4">Why Calculate Your BMR?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Weight Management</h4>
                  <p className="text-white/60 text-sm">
                    Know your baseline calorie needs to create effective weight loss or weight gain plans
                    based on scientific principles.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Personalized Nutrition</h4>
                  <p className="text-white/60 text-sm">
                    Design meal plans tailored to your body&apos;s specific energy requirements rather than
                    following generic diets.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Fitness Planning</h4>
                  <p className="text-white/60 text-sm">
                    Optimize your training nutrition by understanding how much energy your body needs at
                    rest versus during activity.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Health Monitoring</h4>
                  <p className="text-white/60 text-sm">
                    Track metabolic changes over time as you age, build muscle, or make lifestyle
                    adjustments.
                  </p>
                </div>
              </div>
            </section>

            {/* Factors */}
            <section>
              <h2 className="text-white mb-4">Factors Affecting BMR</h2>
              <div className="glass-card rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="text-white mb-2">Body Composition</h4>
                  <p className="text-white/60 text-sm">
                    Muscle tissue burns more calories than fat tissue. Individuals with higher muscle mass
                    have a higher BMR, even at rest.
                  </p>
                </div>
                <div>
                  <h4 className="text-white mb-2">Age</h4>
                  <p className="text-white/60 text-sm">
                    BMR decreases approximately 2% per decade after age 20 due to muscle loss and hormonal
                    changes.
                  </p>
                </div>
                <div>
                  <h4 className="text-white mb-2">Gender</h4>
                  <p className="text-white/60 text-sm">
                    Men typically have a higher BMR than women due to greater muscle mass and lower body
                    fat percentage.
                  </p>
                </div>
                <div>
                  <h4 className="text-white mb-2">Genetics</h4>
                  <p className="text-white/60 text-sm">
                    Some people are born with faster or slower metabolisms, though this typically accounts
                    for less variation than other factors.
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
                    What&apos;s the difference between BMR and TDEE?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    BMR is calories burned at complete rest, while TDEE (Total Daily Energy Expenditure) includes
                    all activity. TDEE = BMR × activity multiplier. Use TDEE for your daily calorie target.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Can I increase my BMR?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Yes! Building muscle through strength training is the most effective way to increase BMR.
                    Each pound of muscle burns approximately 6 calories per day at rest.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Should I eat below my BMR to lose weight?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    No. Eating below BMR can slow metabolism and cause muscle loss. Instead, eat between BMR and
                    TDEE for sustainable weight loss (typically 500 calories below TDEE).
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
            <h2 className="text-white mb-4">Get Your Personalized Health Plan</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Combine your BMR insights with expert guidance to achieve your health and fitness goals faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                View Health Insurance Plans
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
