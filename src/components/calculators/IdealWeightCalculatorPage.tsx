import { ArrowLeft, Scale, Info } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface IdealWeightCalculatorPageProps {
  onBack: () => void;
}

export default function IdealWeightCalculatorPage({ onBack }: IdealWeightCalculatorPageProps) {
  const [height, setHeight] = useState<string>('170');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [system, setSystem] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<{
    robinson: number;
    miller: number;
    devine: number;
    hamwi: number;
    average: number;
  } | null>(null);

  const calculateIdealWeight = () => {
    const h = parseFloat(height);
    if (!h || h <= 0) return;

    const heightInCm = system === 'metric' ? h : h * 2.54;
    const heightInInches = heightInCm / 2.54;

    // Robinson Formula (1983)
    let robinson = 0;
    if (gender === 'male') {
      robinson = 52 + 1.9 * (heightInInches - 60);
    } else {
      robinson = 49 + 1.7 * (heightInInches - 60);
    }

    // Miller Formula (1983)
    let miller = 0;
    if (gender === 'male') {
      miller = 56.2 + 1.41 * (heightInInches - 60);
    } else {
      miller = 53.1 + 1.36 * (heightInInches - 60);
    }

    // Devine Formula (1974)
    let devine = 0;
    if (gender === 'male') {
      devine = 50 + 2.3 * (heightInInches - 60);
    } else {
      devine = 45.5 + 2.3 * (heightInInches - 60);
    }

    // Hamwi Formula (1964)
    let hamwi = 0;
    if (gender === 'male') {
      hamwi = 48 + 2.7 * (heightInInches - 60);
    } else {
      hamwi = 45.5 + 2.2 * (heightInInches - 60);
    }

    const average = (robinson + miller + devine + hamwi) / 4;

    if (system === 'imperial') {
      // Convert to pounds
      setResult({
        robinson: robinson * 2.20462,
        miller: miller * 2.20462,
        devine: devine * 2.20462,
        hamwi: hamwi * 2.20462,
        average: average * 2.20462
      });
    } else {
      setResult({
        robinson,
        miller,
        devine,
        hamwi,
        average
      });
    }
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
            <Scale className="w-8 h-8 text-[#39FF14]" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-thin mb-4">Ideal Weight Calculator</h1>
          <p className="text-white/60 text-lg font-thin max-w-2xl mx-auto">
            Determine your ideal body weight based on height and gender using multiple formulas
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
          <div className="space-y-6 mb-8">
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
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateIdealWeight}
            className="w-full bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-thin py-6"
          >
            Calculate Ideal Weight
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-thin mb-6 text-center">Your Ideal Weight</h2>

            <div className="mb-8 text-center">
              <div className="inline-block p-8 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20">
                <div className="text-5xl font-thin text-[#39FF14] mb-2">
                  {result.average.toFixed(1)}
                </div>
                <div className="text-white/60 text-sm font-thin">
                  {system === 'metric' ? 'kg' : 'lbs'} (Average)
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-white/60 font-thin mb-1">Robinson Formula</div>
                <div className="text-2xl font-thin text-white">
                  {result.robinson.toFixed(1)} {system === 'metric' ? 'kg' : 'lbs'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-white/60 font-thin mb-1">Miller Formula</div>
                <div className="text-2xl font-thin text-white">
                  {result.miller.toFixed(1)} {system === 'metric' ? 'kg' : 'lbs'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-white/60 font-thin mb-1">Devine Formula</div>
                <div className="text-2xl font-thin text-white">
                  {result.devine.toFixed(1)} {system === 'metric' ? 'kg' : 'lbs'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-white/60 font-thin mb-1">Hamwi Formula</div>
                <div className="text-2xl font-thin text-white">
                  {result.hamwi.toFixed(1)} {system === 'metric' ? 'kg' : 'lbs'}
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-[#39FF14]" />
                <h3 className="font-thin text-white">About These Formulas</h3>
              </div>
              <p className="text-sm font-thin text-white/60">
                These formulas provide estimates based on scientific research. Individual ideal weight
                can vary based on body composition, muscle mass, bone density, and overall health.
                Consult with a healthcare provider for personalized guidance.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
