import { Activity, ArrowRight, Calculator, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface MacroCalculatorPageProps {
  onBack: () => void;
}

export default function MacroCalculatorPage({ onBack }: MacroCalculatorPageProps) {
  const [age, setAge] = useState<string>('30');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('170');
  const [weight, setWeight] = useState<string>('70');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [goal, setGoal] = useState<string>('maintain');
  const [showResults, setShowResults] = useState(false);

  const calculateMacros = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) return null;

    // Calculate BMR
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // Activity multipliers
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    let tdee = bmr * activityMultipliers[activityLevel];

    // Adjust for goal
    if (goal === 'lose') tdee -= 500;
    else if (goal === 'gain') tdee += 500;

    // Calculate macros
    // Protein: 2g per kg body weight (muscle building/preservation)
    const proteinGrams = w * 2;
    const proteinCalories = proteinGrams * 4;

    // Fat: 25-30% of total calories
    const fatCalories = tdee * 0.275;
    const fatGrams = fatCalories / 9;

    // Carbs: Remaining calories
    const carbCalories = tdee - proteinCalories - fatCalories;
    const carbGrams = carbCalories / 4;

    return {
      calories: Math.round(tdee),
      protein: Math.round(proteinGrams),
      carbs: Math.round(carbGrams),
      fat: Math.round(fatGrams),
      proteinCal: Math.round(proteinCalories),
      carbCal: Math.round(carbCalories),
      fatCal: Math.round(fatCalories),
      proteinPercent: Math.round((proteinCalories / tdee) * 100),
      carbPercent: Math.round((carbCalories / tdee) * 100),
      fatPercent: Math.round((fatCalories / tdee) * 100)
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateMacros() : null;

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
            <span className="text-white">Macro Calculator</span>
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
              <h1 className="text-white mb-3">Macro Calculator</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Calculate your optimal macronutrient distribution - protein, carbohydrates, and fats. 
                Get personalized recommendations based on your goals and activity level.
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
                {/* Gender */}
                <div>
                  <Label className="text-white mb-2 block">Gender</Label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setGender('male')}
                      className={`flex-1 py-2 px-4 rounded-lg font-thin transition-all ${
                        gender === 'male'
                          ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                          : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setGender('female')}
                      className={`flex-1 py-2 px-4 rounded-lg font-thin transition-all ${
                        gender === 'female'
                          ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                          : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="age" className="text-white mb-2 block">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height" className="text-white mb-2 block">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="bg-white/5 border-white/10 text-white"
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
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="activity" className="text-white mb-2 block">Activity Level</Label>
                  <select
                    id="activity"
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#39FF14] focus:outline-none"
                  >
                    <option value="sedentary" className="bg-black">Sedentary (little/no exercise)</option>
                    <option value="light" className="bg-black">Light (exercise 1-3 days/week)</option>
                    <option value="moderate" className="bg-black">Moderate (exercise 3-5 days/week)</option>
                    <option value="active" className="bg-black">Active (exercise 6-7 days/week)</option>
                    <option value="veryActive" className="bg-black">Very Active (intense daily exercise)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="goal" className="text-white mb-2 block">Your Goal</Label>
                  <select
                    id="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#39FF14] focus:outline-none"
                  >
                    <option value="lose" className="bg-black">Lose Weight (Fat Loss)</option>
                    <option value="maintain" className="bg-black">Maintain Weight</option>
                    <option value="gain" className="bg-black">Gain Weight (Muscle Gain)</option>
                  </select>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full btn-glow"
                >
                  Calculate Macros
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="glass-card rounded-lg p-6 mt-6 border-l-4 border-[#39FF14]">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#39FF14]" />
                Macro Tips
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Protein: Essential for muscle building and repair</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Carbs: Primary energy source for workouts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Fats: Crucial for hormone production and health</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Track consistently for best results</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div>
            {showResults && results ? (
              <div className="space-y-6">
                <div className="glass-card rounded-lg p-8 border border-[#39FF14]/20">
                  <h3 className="text-white mb-6">Your Daily Macros</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-white/60 text-sm mb-2">Daily Calories</p>
                      <p className="text-4xl font-semibold text-[#39FF14]">
                        {results.calories} cal
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      <div className="text-center">
                        <p className="text-white/60 text-xs mb-1">Protein</p>
                        <p className="text-3xl font-semibold text-[#39FF14]">{results.protein}g</p>
                        <p className="text-white/40 text-xs mt-1">{results.proteinPercent}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-white/60 text-xs mb-1">Carbs</p>
                        <p className="text-3xl font-semibold text-blue-400">{results.carbs}g</p>
                        <p className="text-white/40 text-xs mt-1">{results.carbPercent}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-white/60 text-xs mb-1">Fat</p>
                        <p className="text-3xl font-semibold text-yellow-400">{results.fat}g</p>
                        <p className="text-white/40 text-xs mt-1">{results.fatPercent}%</p>
                      </div>
                    </div>

                    {/* Visual Distribution */}
                    <div className="pt-4">
                      <p className="text-white/60 text-sm mb-3">Calorie Distribution</p>
                      <div className="h-8 bg-white/5 rounded-full overflow-hidden flex">
                        <div 
                          className="bg-[#39FF14] flex items-center justify-center text-xs text-black font-semibold"
                          style={{ width: `${results.proteinPercent}%` }}
                        >
                          {results.proteinPercent > 15 && 'P'}
                        </div>
                        <div 
                          className="bg-blue-400 flex items-center justify-center text-xs text-black font-semibold"
                          style={{ width: `${results.carbPercent}%` }}
                        >
                          {results.carbPercent > 15 && 'C'}
                        </div>
                        <div 
                          className="bg-yellow-400 flex items-center justify-center text-xs text-black font-semibold"
                          style={{ width: `${results.fatPercent}%` }}
                        >
                          {results.fatPercent > 15 && 'F'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meal Distribution */}
                <div className="glass-card rounded-lg p-8">
                  <h3 className="text-white mb-4">Sample Meal Distribution</h3>
                  <p className="text-white/60 text-sm mb-6">Divide your macros across meals</p>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Breakfast</span>
                        <span className="text-white/60 text-sm">25%</span>
                      </div>
                      <div className="text-xs text-white/60 space-y-1">
                        <div>Protein: {Math.round(results.protein * 0.25)}g</div>
                        <div>Carbs: {Math.round(results.carbs * 0.25)}g</div>
                        <div>Fat: {Math.round(results.fat * 0.25)}g</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Lunch</span>
                        <span className="text-white/60 text-sm">35%</span>
                      </div>
                      <div className="text-xs text-white/60 space-y-1">
                        <div>Protein: {Math.round(results.protein * 0.35)}g</div>
                        <div>Carbs: {Math.round(results.carbs * 0.35)}g</div>
                        <div>Fat: {Math.round(results.fat * 0.35)}g</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Dinner</span>
                        <span className="text-white/60 text-sm">30%</span>
                      </div>
                      <div className="text-xs text-white/60 space-y-1">
                        <div>Protein: {Math.round(results.protein * 0.30)}g</div>
                        <div>Carbs: {Math.round(results.carbs * 0.30)}g</div>
                        <div>Fat: {Math.round(results.fat * 0.30)}g</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Snacks</span>
                        <span className="text-white/60 text-sm">10%</span>
                      </div>
                      <div className="text-xs text-white/60 space-y-1">
                        <div>Protein: {Math.round(results.protein * 0.10)}g</div>
                        <div>Carbs: {Math.round(results.carbs * 0.10)}g</div>
                        <div>Fat: {Math.round(results.fat * 0.10)}g</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-glow">
                  Get Meal Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="glass-card rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <Activity className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/60">
                  Enter your details to get personalized macro targets
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
            {/* What are Macros */}
            <section>
              <h2 className="text-white mb-4">What are Macronutrients?</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Macronutrients (macros) are the three main nutrients your body needs in large amounts: protein, 
                carbohydrates, and fats. Each plays a unique role in your health, performance, and body composition. 
                Tracking macros allows for more flexible and precise nutrition planning compared to just counting calories.
              </p>
              <p className="text-white/70 leading-relaxed">
                Unlike generic calorie counting, macro tracking ensures you're getting the right balance of nutrients 
                for your specific goals. Whether building muscle, losing fat, or improving athletic performance, 
                your macro distribution matters as much as your total calorie intake.
              </p>
            </section>

            {/* The Three Macros */}
            <section>
              <h2 className="text-white mb-4">Understanding Each Macro</h2>
              <div className="space-y-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-[#39FF14] mb-2">Protein (4 calories per gram)</h4>
                  <p className="text-white/60 text-sm mb-3">
                    Essential for building and repairing muscle tissue, supporting immune function, and maintaining 
                    satiety. Crucial for anyone looking to build muscle or preserve muscle during fat loss.
                  </p>
                  <p className="text-white/40 text-xs">
                    Sources: Chicken, fish, eggs, dairy, legumes, tofu
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-blue-400 mb-2">Carbohydrates (4 calories per gram)</h4>
                  <p className="text-white/60 text-sm mb-3">
                    Primary energy source for high-intensity exercise and brain function. Replenishes glycogen stores 
                    and supports workout performance and recovery.
                  </p>
                  <p className="text-white/40 text-xs">
                    Sources: Rice, oats, potatoes, fruits, vegetables, whole grains
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-yellow-400 mb-2">Fats (9 calories per gram)</h4>
                  <p className="text-white/60 text-sm mb-3">
                    Critical for hormone production, vitamin absorption, brain health, and cell function. Don't fear 
                    fats - they're essential for optimal health and performance.
                  </p>
                  <p className="text-white/40 text-xs">
                    Sources: Avocado, nuts, olive oil, fatty fish, eggs, seeds
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
                    Do I need to hit my macros exactly?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Aim for ±5g on each macro. Consistency over time matters more than daily perfection. Focus on 
                    hitting protein targets first, then fill in carbs and fats.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    Should I adjust macros on rest days?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    You can reduce carbs slightly on rest days while maintaining protein and fats, but keeping macros 
                    consistent daily is perfectly fine and often simpler to follow.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    How often should I recalculate?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Recalculate every 4-6 weeks or when your weight changes by 5+ kg. As you lose or gain weight, 
                    your calorie and macro needs will change.
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
            <h2 className="text-white mb-4">Fuel Your Health Goals</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Protect your wellness journey with comprehensive health insurance and nutrition support.
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
