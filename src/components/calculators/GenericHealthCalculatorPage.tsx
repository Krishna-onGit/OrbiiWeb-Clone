import { ArrowLeft, LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface GenericHealthCalculatorPageProps {
  onBack: () => void;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function GenericHealthCalculatorPage({
  onBack,
  title,
  description,
  icon: Icon
}: GenericHealthCalculatorPageProps) {
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
            <Icon className="w-8 h-8 text-[#39FF14]" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-thin mb-4">{title}</h1>
          <p className="text-white/60 text-lg font-thin max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="glass-card p-12 rounded-2xl border border-white/10 text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center mx-auto mb-6">
            <Icon className="w-10 h-10 text-[#39FF14]" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-thin mb-4">Calculator Coming Soon</h2>
          <p className="text-white/60 font-thin mb-8 max-w-md mx-auto">
            We&apos;re working on bringing you this comprehensive health calculator.
            Check back soon for full functionality!
          </p>
          <Button
            onClick={onBack}
            className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-thin"
          >
            Browse Other Calculators
          </Button>
        </div>

        {/* Info Card */}
        <div className="mt-8 glass-card p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-thin mb-4">What This Calculator Will Offer</h3>
          <div className="space-y-3 text-white/60 font-thin">
            <p>• Accurate calculations based on medical research and proven formulas</p>
            <p>• Easy-to-use interface with real-time results</p>
            <p>• Detailed explanations and health recommendations</p>
            <p>• Mobile-friendly design for calculations on the go</p>
          </div>
        </div>
      </main>
    </div>
  );
}
