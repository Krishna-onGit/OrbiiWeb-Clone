import { ArrowLeft, Activity, Info } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface CalorieCalculatorPageProps {
  onBack: () => void;
}

export default function CalorieCalculatorPage({ onBack }: CalorieCalculatorPageProps) {
  const [age, setAge] = useState<string>('30');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('170');
  const [weight, setWeight] = useState<string>('70');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [goal, setGoal] = useState<string>('maintain');
  const [result, setResult] = useState<{
    bmr: number;
    maintenance: number;
    loseWeight: number;
    gainWeight: number;
    recommended: number;
  } | null>(null);

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) return;

    // Calculate BMR using Mifflin-St Jeor Equation
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

    const maintenance = bmr * activityMultipliers[activityLevel];
    const loseWeight = maintenance - 500; // Lose ~0.5kg per week
    const gainWeight = maintenance + 500; // Gain ~0.5kg per week

    let recommended = maintenance;
    if (goal === 'lose') recommended = loseWeight;
    else if (goal === 'gain') recommended = gainWeight;

    setResult({
      bmr: Math.round(bmr),
      maintenance: Math.round(maintenance),
      loseWeight: Math.round(loseWeight),
      gainWeight: Math.round(gainWeight),
      recommended: Math.round(recommended)
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-thin">Back to Calculators</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20 mb-6">
            <Activity className="w-8 h-8 text-[#39FF14]" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-thin mb-4">Calorie Calculator</h1>
          <p className="text-white/60 text-lg font-thin max-w-2xl mx-auto">
            Calculate your daily calorie needs for weight management
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 mb-8">
          <div className="space-y-6 mb-8">
            {/* Gender */}
            <div>
              <label className="block text-white/80 mb-2 font-thin">Gender</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setGender('male')}
                  className={`flex-1 py-3 px-6 rounded-xl font-thin transition-all ${gender === 'male'
                    ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                    : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                    }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`flex-1 py-3 px-6 rounded-xl font-thin transition-all ${gender === 'female'
                    ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                    : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                    }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age, Height, Weight */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white/80 mb-2 font-thin">Age (years)</label>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-thin">Height (cm)</label>
                <Input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-thin">Weight (kg)</label>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-white/80 mb-2 font-thin">Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-thin focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50"
              >
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Light (exercise 1-3 days/week)</option>
                <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                <option value="active">Active (exercise 6-7 days/week)</option>
                <option value="veryActive">Very Active (intense exercise daily)</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label className="block text-white/80 mb-2 font-thin">Your Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-thin focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50"
              >
                <option value="lose">Lose Weight</option>
                <option value="maintain">Maintain Weight</option>
                <option value="gain">Gain Weight</option>
              </select>
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateCalories}
            className="w-full bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-thin py-6"
          >
            Calculate Calories
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-thin mb-6 text-center">Your Daily Calorie Needs</h2>

            <div className="mb-8 text-center">
              <div className="inline-block p-8 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20">
                <div className="text-5xl font-thin text-[#39FF14] mb-2">
                  {result.recommended}
                </div>
                <div className="text-white/60 text-sm font-thin">
                  Calories per day (Recommended for your goal)
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-white/60 font-thin mb-1">BMR</div>
                <div className="text-2xl font-thin text-white">{result.bmr}</div>
                <div className="text-xs text-white/40 font-thin mt-1">Calories at rest</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-white/60 font-thin mb-1">Maintenance</div>
                <div className="text-2xl font-thin text-white">{result.maintenance}</div>
                <div className="text-xs text-white/40 font-thin mt-1">Maintain current weight</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-white/60 font-thin mb-1">Weight Loss</div>
                <div className="text-2xl font-thin text-white">{result.loseWeight}</div>
                <div className="text-xs text-white/40 font-thin mt-1">Lose ~0.5kg/week</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-[#39FF14]" />
                <h3 className="font-thin text-white">Important Notes</h3>
              </div>
              <ul className="text-sm font-thin text-white/60 space-y-2">
                <li>• These calculations use the Mifflin-St Jeor equation, one of the most accurate formulas</li>
                <li>• A 500 calorie deficit/surplus typically results in ~0.5kg weight change per week</li>
                <li>• Individual needs may vary based on metabolism, genetics, and health conditions</li>
                <li>• Consult a healthcare provider before making significant dietary changes</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
