import { ArrowLeft, Phone, Calculator, CheckCircle, Shield, TrendingUp, Users, IndianRupee, Target, Heart, Baby, Home as HomeIcon, Briefcase, Building2, Clock, Award, HelpCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';
import { InsuranceProduct } from '../data/insuranceProducts';

interface InsuranceDetailPageProps {
  product: InsuranceProduct;
  onBack: () => void;
}

export default function InsuranceDetailPage({ product, onBack }: InsuranceDetailPageProps) {
  const [calculatorValues, setCalculatorValues] = useState<Record<string, string>>({});

  // Icon mapping
  const iconMap: Record<string, any> = {
    Shield, TrendingUp, Users, IndianRupee, Target, Heart, Baby, HomeIcon, Briefcase, Building2, Clock, Award, HelpCircle, AlertCircle
  };

  const IconComponent = iconMap[product.icon] || Shield;

  // Gradient colors
  const gradientClasses = `from-${product.heroGradient.from} to-${product.heroGradient.to}`;
  const glowColor = product.heroGradient.from.split('-')[0];

  return (
    <div className="w-full max-w-full bg-black overflow-x-hidden min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="ghost"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-thin hover:bg-white/20 hover:border-white/30 transition-all duration-300 h-10 px-4 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Back
          </Button>
          <Button className={`hidden sm:flex bg-gradient-to-r ${gradientClasses} text-white font-thin h-10 px-5 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
            <Phone className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Talk to Expert
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br from-${product.heroGradient.from}/10 via-black to-${product.heroGradient.to}/10`}></div>
          <div className={`absolute top-20 left-1/4 w-[500px] h-[500px] bg-${product.heroGradient.from}/20 rounded-full blur-[150px]`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-${product.heroGradient.from}/30 to-${product.heroGradient.to}/30 border-2 border-${product.heroGradient.from}/40 mb-6 backdrop-blur-md`}>
              <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 text-${glowColor}-400`} strokeWidth={1.5} />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-wide mb-6">
              {product.title}
            </h1>
            <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-thin max-w-4xl mx-auto mb-4">
              {product.subtitle}
            </p>
            <p className="text-white/50 text-sm sm:text-base font-thin max-w-3xl mx-auto">
              {product.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="text-2xl sm:text-3xl text-white mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-6">
        <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
          <h2 className="text-white font-thin mb-4 text-center">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Key Features', 'Benefits', 'Coverage Details', 'Eligibility', 'Premium Calculator', 'Documents Required', 'How to Apply', 'FAQs'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-thin hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
                <CheckCircle className={`w-5 h-5 text-${glowColor}-400 flex-shrink-0 mt-0.5`} strokeWidth={2} />
                <span className="text-sm text-white/70">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Comprehensive Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <h3 className={`text-lg text-${glowColor}-400 mb-3`}>{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why You Need This */}
      {product.whyNeed && product.whyNeed.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl text-white mb-4">Why You Need This</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.whyNeed.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-black/40">
                  <h3 className="text-xl text-white mb-2">{item.title}</h3>
                  {item.amount && (
                    <div className={`text-2xl text-${glowColor}-400 mb-3`}>{item.amount}</div>
                  )}
                  <p className="text-sm text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coverage & Premium */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Coverage & Premium</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-6 rounded-2xl border border-${glowColor}-500/20 bg-${glowColor}-500/10 text-center`}>
              <p className="text-sm text-white/60 mb-2">Minimum Coverage</p>
              <p className={`text-2xl text-${glowColor}-400`}>{product.coverage.min}</p>
            </div>
            <div className={`p-6 rounded-2xl border border-${glowColor}-500/20 bg-${glowColor}-500/10 text-center`}>
              <p className="text-sm text-white/60 mb-2">Maximum Coverage</p>
              <p className={`text-2xl text-${glowColor}-400`}>{product.coverage.max}</p>
            </div>
            <div className={`p-6 rounded-2xl border border-green-500/20 bg-green-500/10 text-center`}>
              <p className="text-sm text-white/60 mb-2">Premium Range</p>
              <p className="text-2xl text-green-400">{product.coverage.premium}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className={`bg-gradient-to-r ${gradientClasses} hover:opacity-90 text-white h-12 px-8 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)]`}>
              Get Quotes Now
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {product.faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-xl border border-white/10 bg-black/40 px-6"
              >
                <AccordionTrigger className={`text-white hover:text-${glowColor}-400 text-left py-4`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-sm leading-relaxed pb-4 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">Ready to Get Protected?</h2>
          <p className="text-white/60 text-lg mb-8">
            Compare plans from India's top insurers. Get instant quotes online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className={`bg-gradient-to-r ${gradientClasses} hover:opacity-90 text-white h-12 px-8 rounded-xl`}>
              Compare Plans
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8 rounded-xl">
              <Phone className="w-4 h-4 mr-2" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
