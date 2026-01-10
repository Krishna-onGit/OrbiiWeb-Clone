import { ArrowLeft, Calculator, CheckCircle2, LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface GenericCalculatorPageProps {
  onBack: () => void;
  title: string;
  description: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

export default function GenericCalculatorPage({
  onBack,
  title,
  description,
  icon: Icon,
  comingSoon = true
}: GenericCalculatorPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container-custom py-8">
          <button
            onClick={onBack}
            className="mb-6 text-[#39FF14] hover:text-[#2ee610] flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Calculators
          </button>

          <div className="flex items-start gap-4">
            <div className="p-3 glass-card rounded-lg">
              <Icon className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-2">{title}</h1>
              <p className="text-white/70 text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {comingSoon ? (
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-[#39FF14]/10 flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-10 h-10 text-[#39FF14]" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Coming Soon</h2>
              <p className="text-white/70 text-lg mb-8">
                We&apos;re working on building a comprehensive {title.toLowerCase()} with detailed calculations,
                formulas, use cases, and expert guidance.
              </p>

              <div className="space-y-4 text-left max-w-md mx-auto mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Step-by-step calculation methodology</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Real-world use cases and examples</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Interactive visualizations and charts</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70">Expert tips and best practices</p>
                </div>
              </div>

              <Button
                onClick={onBack}
                className="bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold px-8"
              >
                Explore Other Calculators
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-white/70">Calculator functionality will be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
