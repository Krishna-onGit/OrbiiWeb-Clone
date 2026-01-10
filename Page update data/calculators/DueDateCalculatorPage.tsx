import { ArrowLeft, Baby, Info } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface DueDateCalculatorPageProps {
  onBack: () => void;
}

export default function DueDateCalculatorPage({ onBack }: DueDateCalculatorPageProps) {
  const [lastPeriodDate, setLastPeriodDate] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [result, setResult] = useState<{
    dueDate: Date;
    conceptionDate: Date;
    currentWeek: number;
    trimester: number;
    daysRemaining: number;
  } | null>(null);

  const calculateDueDate = () => {
    if (!lastPeriodDate) return;

    const lmp = new Date(lastPeriodDate);
    const cycle = parseInt(cycleLength) || 28;
    
    // Naegele's Rule: LMP + 280 days (40 weeks)
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);
    
    // Adjust for cycle length (standard is 28 days)
    const cycleDifference = cycle - 28;
    dueDate.setDate(dueDate.getDate() + cycleDifference);
    
    // Conception date is typically 14 days after LMP (for a 28-day cycle)
    const conceptionDate = new Date(lmp);
    conceptionDate.setDate(conceptionDate.getDate() + 14 + cycleDifference);
    
    // Calculate current week
    const today = new Date();
    const daysDiff = Math.floor((today.getTime() - lmp.getTime()) / (1000 * 60 * 60 * 24));
    const currentWeek = Math.floor(daysDiff / 7);
    
    // Determine trimester
    let trimester = 1;
    if (currentWeek >= 27) trimester = 3;
    else if (currentWeek >= 13) trimester = 2;
    
    // Days remaining
    const daysRemaining = Math.floor((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    setResult({
      dueDate,
      conceptionDate,
      currentWeek: Math.max(0, currentWeek),
      trimester,
      daysRemaining: Math.max(0, daysRemaining)
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
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
            <Baby className="w-8 h-8 text-[#39FF14]" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-thin mb-4">Due Date Calculator</h1>
          <p className="text-white/60 text-lg font-thin max-w-2xl mx-auto">
            Calculate your expected delivery date from your last menstrual period
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 mb-8">
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-white/80 mb-2 font-thin">
                First Day of Last Menstrual Period
              </label>
              <Input
                type="date"
                value={lastPeriodDate}
                onChange={(e) => setLastPeriodDate(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 font-thin">
                Average Cycle Length (days)
              </label>
              <Input
                type="number"
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
                placeholder="28"
                min="21"
                max="35"
                className="bg-white/5 border-white/10 text-white"
              />
              <p className="text-xs text-white/40 mt-1 font-thin">
                Typical cycle length is 21-35 days (average 28 days)
              </p>
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateDueDate}
            className="w-full bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-thin py-6"
            disabled={!lastPeriodDate}
          >
            Calculate Due Date
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            {/* Main Due Date */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 text-center">
              <h2 className="text-2xl font-thin mb-4">Your Estimated Due Date</h2>
              <div className="inline-block p-8 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20">
                <div className="text-4xl font-thin text-[#39FF14] mb-2">
                  {formatDate(result.dueDate)}
                </div>
                <div className="text-white/60 text-sm font-thin">
                  {result.daysRemaining} days remaining
                </div>
              </div>
            </div>

            {/* Pregnancy Details */}
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-thin mb-6">Pregnancy Details</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-sm text-white/60 font-thin mb-1">Current Week</div>
                  <div className="text-3xl font-thin text-[#39FF14]">{result.currentWeek}</div>
                  <div className="text-xs text-white/40 font-thin mt-1">weeks pregnant</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-sm text-white/60 font-thin mb-1">Trimester</div>
                  <div className="text-3xl font-thin text-[#39FF14]">{result.trimester}</div>
                  <div className="text-xs text-white/40 font-thin mt-1">
                    {result.trimester === 1 ? '1-12 weeks' : result.trimester === 2 ? '13-26 weeks' : '27-40 weeks'}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-sm text-white/60 font-thin mb-1">Conception Date</div>
                  <div className="text-lg font-thin text-white">
                    {result.conceptionDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <div className="text-xs text-white/40 font-thin mt-1">Estimated</div>
                </div>
              </div>
            </div>

            {/* Trimester Timeline */}
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-thin mb-6">Pregnancy Timeline</h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-xl border ${result.trimester === 1 ? 'bg-[#39FF14]/10 border-[#39FF14]/30' : 'bg-white/5 border-white/10'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-thin text-white">First Trimester</span>
                    <span className="text-sm font-thin text-white/60">Weeks 1-12</span>
                  </div>
                  <div className="text-xs font-thin text-white/60">
                    Early development of organs and systems
                  </div>
                </div>
                <div className={`p-4 rounded-xl border ${result.trimester === 2 ? 'bg-[#39FF14]/10 border-[#39FF14]/30' : 'bg-white/5 border-white/10'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-thin text-white">Second Trimester</span>
                    <span className="text-sm font-thin text-white/60">Weeks 13-26</span>
                  </div>
                  <div className="text-xs font-thin text-white/60">
                    Rapid growth and movement begins
                  </div>
                </div>
                <div className={`p-4 rounded-xl border ${result.trimester === 3 ? 'bg-[#39FF14]/10 border-[#39FF14]/30' : 'bg-white/5 border-white/10'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-thin text-white">Third Trimester</span>
                    <span className="text-sm font-thin text-white/60">Weeks 27-40</span>
                  </div>
                  <div className="text-xs font-thin text-white/60">
                    Final development and preparation for birth
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-thin text-white mb-2">Important Information</h3>
                  <ul className="text-sm font-thin text-white/60 space-y-2">
                    <li>• This calculator uses Naegele's Rule, the standard method for estimating due dates</li>
                    <li>• Only about 5% of babies are born on their exact due date</li>
                    <li>• Most babies are born between 37-42 weeks of pregnancy</li>
                    <li>• Your healthcare provider may adjust your due date based on ultrasound measurements</li>
                    <li>• Always consult with your doctor for personalized pregnancy care</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
