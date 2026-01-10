import { ArrowLeft, Activity, Info } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface BMICalculatorPageProps {
  onBack: () => void;
}

export default function BMICalculatorPage({ onBack }: BMICalculatorPageProps) {
  const [height, setHeight] = useState<string>('170');
  const [weight, setWeight] = useState<string>('70');
  const [system, setSystem] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    healthyWeightRange: string;
  } | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) return;

    let bmi: number;
    let heightInMeters: number;

    if (system === 'metric') {
      heightInMeters = h / 100;
      bmi = w / (heightInMeters * heightInMeters);
    } else {
      // Imperial: weight in lbs, height in inches
      bmi = (w / (h * h)) * 703;
      heightInMeters = h * 0.0254;
    }

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    // Calculate healthy weight range (BMI 18.5-24.9)
    const minHealthyWeight = 18.5 * heightInMeters * heightInMeters;
    const maxHealthyWeight = 24.9 * heightInMeters * heightInMeters;

    let weightRange: string;
    if (system === 'metric') {
      weightRange = `${minHealthyWeight.toFixed(1)} - ${maxHealthyWeight.toFixed(1)} kg`;
    } else {
      weightRange = `${(minHealthyWeight * 2.20462).toFixed(1)} - ${(maxHealthyWeight * 2.20462).toFixed(1)} lbs`;
    }

    setResult({
      bmi: parseFloat(bmi.toFixed(1)),
      category,
      healthyWeightRange: weightRange
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
          <h1 className="text-4xl md:text-5xl font-thin mb-4">BMI Calculator</h1>
          <p className="text-white/60 text-lg font-thin max-w-2xl mx-auto">
            Calculate your Body Mass Index to assess your healthy weight range
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 mb-8">
          {/* Unit System Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setSystem('metric')}
              className={`flex-1 py-3 px-6 rounded-xl font-thin transition-all ${system === 'metric'
                ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                }`}
            >
              Metric (cm, kg)
            </button>
            <button
              onClick={() => setSystem('imperial')}
              className={`flex-1 py-3 px-6 rounded-xl font-thin transition-all ${system === 'imperial'
                ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30'
                : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                }`}
            >
              Imperial (in, lbs)
            </button>
          </div>

          {/* Input Fields */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-white/80 mb-2 font-thin">
                Height ({system === 'metric' ? 'cm' : 'inches'})
              </label>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder={system === 'metric' ? '170' : '67'}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2 font-thin">
                Weight ({system === 'metric' ? 'kg' : 'lbs'})
              </label>
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={system === 'metric' ? '70' : '154'}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateBMI}
            className="w-full bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-thin py-6"
          >
            Calculate BMI
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-thin mb-6 text-center">Your Results</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-4xl font-thin text-[#39FF14] mb-2">{result.bmi}</div>
                <div className="text-white/60 text-sm font-thin">BMI</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-thin text-white mb-2">{result.category}</div>
                <div className="text-white/60 text-sm font-thin">Category</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-lg font-thin text-white mb-2">{result.healthyWeightRange}</div>
                <div className="text-white/60 text-sm font-thin">Healthy Weight Range</div>
              </div>
            </div>

            {/* BMI Categories Info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-[#39FF14]" />
                <h3 className="font-thin text-white">BMI Categories</h3>
              </div>
              <div className="space-y-2 text-sm font-thin text-white/60">
                <div className="flex justify-between">
                  <span>Underweight</span>
                  <span>&lt; 18.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Normal weight</span>
                  <span>18.5 - 24.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Overweight</span>
                  <span>25 - 29.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Obese</span>
                  <span>≥ 30</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
