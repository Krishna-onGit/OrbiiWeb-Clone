import { Heart, ArrowRight, Calculator, Info, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface OvulationCalculatorPageProps {
  onBack: () => void;
}

export default function OvulationCalculatorPage({ onBack }: OvulationCalculatorPageProps) {
  const [lastPeriodDate, setLastPeriodDate] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [showResults, setShowResults] = useState(false);

  const calculateOvulation = () => {
    if (!lastPeriodDate) return null;

    const lmp = new Date(lastPeriodDate);
    const cycle = parseInt(cycleLength) || 28;

    // Ovulation typically occurs 14 days before next period
    const ovulationDate = new Date(lmp);
    ovulationDate.setDate(ovulationDate.getDate() + cycle - 14);

    // Fertile window: 5 days before ovulation to 1 day after
    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(fertileStart.getDate() - 5);

    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(fertileEnd.getDate() + 1);

    // Next period
    const nextPeriod = new Date(lmp);
    nextPeriod.setDate(nextPeriod.getDate() + cycle);

    // Calculate next 3 ovulation dates
    const nextOvulations = [];
    for (let i = 1; i <= 3; i++) {
      const date = new Date(ovulationDate);
      date.setDate(date.getDate() + (cycle * i));
      nextOvulations.push(date);
    }

    return {
      ovulationDate,
      fertileStart,
      fertileEnd,
      nextPeriod,
      nextOvulations,
      cycleLength: cycle
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateOvulation() : null;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatShortDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

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
            <span className="text-white">Ovulation Calculator</span>
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
              <h1 className="text-white mb-3">Ovulation Calculator</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Track your ovulation cycle and identify your most fertile days. Perfect for family planning,
                whether you&apos;re trying to conceive or want to understand your cycle better.
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
                Calculate Your Ovulation
              </h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="lastPeriod" className="text-white mb-2 block">
                    First Day of Last Period
                  </Label>
                  <Input
                    id="lastPeriod"
                    type="date"
                    value={lastPeriodDate}
                    onChange={(e) => setLastPeriodDate(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    max={new Date().toISOString().split('T')[0]}
                  />
                  <p className="text-xs text-white/40 mt-1">When did your last period start?</p>
                </div>

                <div>
                  <Label htmlFor="cycleLength" className="text-white mb-2 block">
                    Average Cycle Length (days)
                  </Label>
                  <Input
                    id="cycleLength"
                    type="number"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    min="21"
                    max="35"
                  />
                  <p className="text-xs text-white/40 mt-1">
                    Count from first day of period to the day before next period (average is 28 days)
                  </p>
                </div>

                <Button
                  onClick={handleCalculate}
                  className="w-full btn-glow"
                  disabled={!lastPeriodDate}
                >
                  Calculate Ovulation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Important Info */}
            <div className="glass-card rounded-lg p-6 mt-6 border-l-4 border-[#39FF14]">
              <h4 className="text-white mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#39FF14]" />
                Important Information
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Ovulation calculators predict based on average cycles</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Individual cycles can vary month to month</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Consider ovulation tests for more accuracy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#39FF14]">•</span>
                  <span>Consult a doctor for fertility concerns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div>
            {showResults && results ? (
              <div className="space-y-6">
                {/* Ovulation Date */}
                <div className="glass-card rounded-lg p-8 border border-[#39FF14]/20">
                  <h3 className="text-white mb-6">Your Ovulation Date</h3>

                  <div className="text-center mb-8">
                    <div className="inline-block p-6 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20">
                      <p className="text-white/60 text-sm mb-2">Estimated Ovulation</p>
                      <p className="text-3xl font-semibold text-[#39FF14]">
                        {formatDate(results.ovulationDate)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/60 text-sm mb-1">Fertile Window</p>
                      <p className="text-white text-lg">
                        {formatShortDate(results.fertileStart)} - {formatShortDate(results.fertileEnd)}
                      </p>
                      <p className="text-white/40 text-xs mt-1">Best time to conceive</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/60 text-sm mb-1">Next Period Expected</p>
                      <p className="text-white text-lg">
                        {formatDate(results.nextPeriod)}
                      </p>
                      <p className="text-white/40 text-xs mt-1">{results.cycleLength}-day cycle</p>
                    </div>
                  </div>
                </div>

                {/* Fertility Calendar */}
                <div className="glass-card rounded-lg p-8">
                  <h3 className="text-white mb-4">Upcoming Ovulation Dates</h3>
                  <p className="text-white/60 text-sm mb-6">Next 3 months (estimated)</p>

                  <div className="space-y-3">
                    {results.nextOvulations.map((date, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold">{formatDate(date)}</p>
                            <p className="text-white/60 text-xs mt-1">
                              Fertile: {formatShortDate(new Date(date.getTime() - 5 * 24 * 60 * 60 * 1000))} - {formatShortDate(new Date(date.getTime() + 1 * 24 * 60 * 60 * 1000))}
                            </p>
                          </div>
                          <div className="w-3 h-3 rounded-full bg-[#39FF14]"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full btn-glow">
                  Track My Cycle
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="glass-card rounded-lg p-12 text-center h-full flex flex-col items-center justify-center">
                <Heart className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/60">
                  Enter your cycle information to predict ovulation
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
            {/* What is Ovulation */}
            <section>
              <h2 className="text-white mb-4">Understanding Ovulation</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Ovulation is the process when a mature egg is released from the ovary, pushed down the fallopian tube,
                and made available for fertilization. This typically occurs about 14 days before the start of your next
                menstrual period, regardless of cycle length.
              </p>
              <p className="text-white/70 leading-relaxed">
                The fertile window includes the 5 days before ovulation and the day of ovulation itself. This is because
                sperm can survive in the female reproductive tract for up to 5 days, while the egg survives for about
                12-24 hours after release.
              </p>
            </section>

            {/* Signs of Ovulation */}
            <section>
              <h2 className="text-white mb-4">Signs of Ovulation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Cervical Mucus Changes</h4>
                  <p className="text-white/60 text-sm">
                    Becomes clear, stretchy, and slippery (similar to egg whites) during the fertile window,
                    helping sperm travel to the egg.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Basal Body Temperature</h4>
                  <p className="text-white/60 text-sm">
                    Slight increase (0.5-1°F) after ovulation occurs. Tracking daily can help confirm ovulation
                    and predict future cycles.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Ovulation Pain</h4>
                  <p className="text-white/60 text-sm">
                    Some women experience mild pelvic pain or twinges on one side (mittelschmerz) when the
                    ovary releases an egg.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2">Increased Libido</h4>
                  <p className="text-white/60 text-sm">
                    Many women experience heightened sexual desire during their fertile window, a natural
                    biological signal.
                  </p>
                </div>
              </div>
            </section>

            {/* Improving Fertility */}
            <section>
              <h2 className="text-white mb-4">Tips for Conception</h2>
              <div className="glass-card rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="text-white mb-2">Timing is Key</h4>
                  <p className="text-white/60 text-sm">
                    Have intercourse every 1-2 days during your fertile window. The days leading up to ovulation
                    are actually most fertile.
                  </p>
                </div>
                <div>
                  <h4 className="text-white mb-2">Track Your Cycle</h4>
                  <p className="text-white/60 text-sm">
                    Keep a calendar of your periods for at least 3 months to better understand your average cycle
                    length and patterns.
                  </p>
                </div>
                <div>
                  <h4 className="text-white mb-2">Healthy Lifestyle</h4>
                  <p className="text-white/60 text-sm">
                    Maintain a healthy weight, reduce stress, avoid smoking and excessive alcohol, and eat a
                    balanced diet to optimize fertility.
                  </p>
                </div>
                <div>
                  <h4 className="text-white mb-2">Consider Ovulation Tests</h4>
                  <p className="text-white/60 text-sm">
                    Over-the-counter ovulation predictor kits can detect the LH surge that occurs 24-36 hours
                    before ovulation.
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
                    Can I get pregnant outside my fertile window?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    While possible, it&apos;s unlikely. Sperm can survive up to 5 days, so intercourse a few days before
                    ovulation can result in pregnancy. The fertile window provides the highest probability.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    What if my cycles are irregular?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    Ovulation calculators work best with regular cycles. If yours vary by more than a few days,
                    consider ovulation tests, basal body temperature tracking, or consult a healthcare provider.
                  </p>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h4 className="text-white mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                    How long should I try before seeing a doctor?
                  </h4>
                  <p className="text-white/60 text-sm ml-7">
                    If under 35, try for one year. If 35 or older, see a doctor after 6 months of trying. Seek
                    help sooner if you have known fertility issues or irregular cycles.
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
            <h2 className="text-white mb-4">Planning for Pregnancy?</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Ensure comprehensive coverage for your family planning journey with our maternity health insurance plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow">
                View Maternity Plans
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
