import { Activity, ArrowRight, Calculator, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface BodyFatCalculatorPageProps {
  onBack: () => void;
}

export default function BodyFatCalculatorPage({ onBack }: BodyFatCalculatorPageProps) {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('30');
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('170');
  const [neck, setNeck] = useState<string>('37');
  const [waist, setWaist] = useState<string>('85');
  const [hip, setHip] = useState<string>('95');
  const [showResults, setShowResults] = useState(false);

  const calculateBodyFat = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const n = parseFloat(neck);
    const wa = parseFloat(waist);
    const hi = parseFloat(hip);

    if (!w || !h || !n || !wa || w <= 0 || h <= 0 || n <= 0 || wa <= 0) return null;
    if (gender === 'female' && (!hi || hi <= 0)) return null;

    // U.S. Navy Method
    let bodyFatPercentage: number;

    if (gender === 'male') {
      bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(wa - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(wa + hi - n) + 0.22100 * Math.log10(h)) - 450;
    }

    // Calculate body fat mass and lean mass
    const bodyFatMass = (bodyFatPercentage / 100) * w;
    const leanMass = w - bodyFatMass;

    // Determine category
    let category = '';
    let categoryColor = '';

    if (gender === 'male') {
      if (bodyFatPercentage < 6) {
        category = 'Essential Fat';
        categoryColor = 'text-blue-400';
      } else if (bodyFatPercentage < 14) {
        category = 'Athletes';
        categoryColor = 'text-[#39FF14]';
      } else if (bodyFatPercentage < 18) {
        category = 'Fitness';
        categoryColor = 'text-green-400';
      } else if (bodyFatPercentage < 25) {
        category = 'Average';
        categoryColor = 'text-yellow-400';
      } else {
        category = 'Obese';
        categoryColor = 'text-red-400';
      }
    } else {
      if (bodyFatPercentage < 14) {
        category = 'Essential Fat';
        categoryColor = 'text-blue-400';
      } else if (bodyFatPercentage < 21) {
        category = 'Athletes';
        categoryColor = 'text-[#39FF14]';
      } else if (bodyFatPercentage < 25) {
        category = 'Fitness';
        categoryColor = 'text-green-400';
      } else if (bodyFatPercentage < 32) {
        category = 'Average';
        categoryColor = 'text-yellow-400';
      } else {
        category = 'Obese';
        categoryColor = 'text-red-400';
      }
    }

    return {
      bodyFatPercentage: bodyFatPercentage.toFixed(1),
      bodyFatMass: bodyFatMass.toFixed(1),
      leanMass: leanMass.toFixed(1),
      category,
      categoryColor
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateBodyFat() : null;

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
            <span className="text-white">Body Fat Calculator</span>
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
              <h1 className="text-white mb-3">Body Fat Calculator</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Estimate your body fat percentage using the U.S. Navy method. Track your progress and optimize
                your fitness goals with accurate body composition measurements.
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
                Enter Your Measurements
              </h3>

              <div className="space-y-6">
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

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age" className="text-white mb-2 block">Age (years)</Label>
                    <Input
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="bg-white/5 border-white/10 text-white"
                      min="15"
                      max="100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight" className="text-white mb-2 block">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="bg-white/5 border-white/10 text-white"
                      min="30"
                      max="300"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="height" className="text-white mb-2 block">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="100"
                    max="250"
                  />
                  <p className="text-xs text-white/40 mt-1">Your full height</p>
                </div>

                <div>
                  <Label htmlFor="neck" className="text-white mb-2 block">Neck Circumference (cm)</Label>
                  <Input
                    id="neck"
                    type="number"
                    value={neck}
                    onChange={(e) => setNeck(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="20"
                    max="60"
                    step="0.5"
                  />
                  <p className="text-xs text-white/40 mt-1">Measure at narrowest point</p>
                </div>

                <div>
                  <Label htmlFor="waist" className="text-white mb-2 block">Waist Circumference (cm)</Label>
                  <Input
                    id="waist"
                    type="number"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="40"
                    max="200"
                    step="0.5"
                  />
                  <p className="text-xs text-white/40 mt-1">Measure at navel level</p>
                </div>

                {gender === 'female' && (
                  <div>
                    <Label htmlFor="hip" className="text-white mb-2 block">Hip Circumference (cm)</Label>
                    <Input
                      id="hip"
                      type="number"
                      value={hip}
                      onChange={(e) => setHip(e.target.value)}
                      className="bg-white/5 border-white/10 text-white"
                      min="50"
                      max="200"
                      step="0.5"
                    />
                    <p className="text-xs text-white/40 mt-1">Measure at widest point</p>
                  </div>
                )}

                <Button
                  onClick={handleCalculate}
                  className="w-full btn-glow"
                >
                  Calculate Body Fat
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Measurement Guide */}
            <div className="glass-card rounded-lg p-6 mt-6 border-l-4 border-[#39FF14]">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#39FF14]" />
                Measurement Tips
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Measure in the morning before eating for best accuracy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Use a flexible measuring tape, not too tight or loose</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Stand relaxed with normal breathing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Take 2-3 measurements and use the average</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div>
            {showResults && results ? (
              <div className="space-y-6">
                <div className="glass-card rounded-lg p-8 border border-[#39FF14]/20">
                  <h3 className="text-white mb-6">Your Body Composition</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-white/60 text-sm mb-2">Body Fat Percentage</p>
                      <p className="text-5xl font-semibold text-[#39FF14]">
                        {results.bodyFatPercentage}%
                      </p>
                      <p className={`text-lg font-semibold mt-2 ${results.categoryColor}`}>
                        {results.category}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                      <div>
                        <p className="text-white/60 text-sm mb-2">Body Fat Mass</p>
                        <p className="text-2xl font-semibold text-white">
                          {results.bodyFatMass} kg
                        </p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-2">Lean Mass</p>
                        <p className="text-2xl font-semibold text-white">
                          {results.leanMass} kg
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Fat Categories */}
                <div className="glass-card rounded-lg p-8">
                  <h3 className="text-white mb-4">Body Fat Categories</h3>
                  <p className="text-white/60 text-sm mb-6">Reference ranges for {gender === 'male' ? 'men' : 'women'}</p>

                  <div className="space-y-3">
                    {gender === 'male' ? (
                      <>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Essential Fat</span>
                            <span className="text-blue-400 text-sm">2-5%</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Athletes</span>
                            <span className="text-[#39FF14] text-sm">6-13%</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Fitness</span>
                            <span className="text-green-400 text-sm">14-17%</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Average</span>
                            <span className="text-yellow-400 text-sm">18-24%</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Obese</span>
                            <span className="text-red-400 text-sm">25%+</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Essential Fat</span>
                            <span className="text-blue-400 text-sm">10-13%</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Athletes</span>
                            <span className="text-[#39FF14] text-sm">14-20%</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Fitness</span>
                            <span className="text-green-400 text-sm">21-24%</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Average</span>
                            <span className="text-yellow-400 text-sm">25-31%</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">Obese</span>
                            <span className="text-red-400 text-sm">32%+</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <Button className="w-full btn-glow">
                  Get Fitness Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="glass-card rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <Activity className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/60">
                  Enter your measurements to estimate body fat percentage
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
            {/* What is Body Fat */}
            <section>
              <h2 className="text-white mb-4">Understanding Body Fat Percentage</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Body fat percentage is the proportion of fat in your body compared to everything else (bones, muscles,
                organs, water, etc.). Unlike BMI, which only considers height and weight, body fat percentage provides
                a more accurate picture of your body composition and overall health.
              </p>
              <p className="text-white/70 leading-relaxed">
                This calculator uses the U.S. Navy method, which estimates body fat based on circumference measurements.
                While not as accurate as methods like DEXA scans or hydrostatic weighing, it&apos;s a practical and accessible
                way to track your body composition over time.
              </p>
            </section>

            {/* Why It Matters */}
            <section>
              <h2 className="text-white mb-4">Why Body Fat Percentage Matters</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Better Than BMI</h4>
                  <p className="text-white/60 text-sm">
                    Two people with the same BMI can have vastly different body compositions. Body fat percentage
                    distinguishes between muscle and fat.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Health Indicator</h4>
                  <p className="text-white/60 text-sm">
                    Excess body fat, especially visceral fat, is linked to increased risk of diabetes, heart
                    disease, and other health conditions.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Fitness Progress</h4>
                  <p className="text-white/60 text-sm">
                    Track real progress beyond the scale. You might be building muscle and losing fat while
                    maintaining the same weight.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Goal Setting</h4>
                  <p className="text-white/60 text-sm">
                    Set realistic fitness goals based on body composition rather than arbitrary weight targets.
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
                    How accurate is the U.S. Navy method?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    The Navy method is reasonably accurate with an error margin of ±3-4%. For best accuracy, ensure
                    measurements are taken consistently at the same time of day using proper technique.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    What&apos;s a healthy body fat percentage?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    For men, 10-20% is considered healthy; for women, 18-28%. Athletes typically have lower
                    percentages. Essential fat (minimum for health) is 2-5% for men and 10-13% for women.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Can I reduce body fat percentage?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Yes! Combine strength training to build muscle with cardio and a caloric deficit to lose fat.
                    Aim for 1-2% reduction per month for sustainable results.
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
            <h2 className="text-white mb-4">Optimize Your Health Journey</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Protect your health and fitness investments with comprehensive health insurance coverage.
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
