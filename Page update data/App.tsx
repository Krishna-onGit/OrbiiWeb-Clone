import { Menu, Search, Sparkles, Heart, Zap, FileCheck, Shield, Brain, Clock, Umbrella, TrendingUp, Globe, Lock, Activity, Pill, Car, Home, Plane, Users, Baby, PiggyBank, Briefcase, Bike, Stethoscope, FileText, Calculator, Building, List, Building2, Gauge, IndianRupee, HardHat, Wallet, Eye, ArrowRight, BarChart3, Bot, MessageSquare, Lightbulb, Target, CheckCircle2, Star, Receipt } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import Spline from '@splinetool/react-spline';
import HealthInsurancePage from './components/HealthInsurancePage';
import InsuranceCalculatorPage from './components/InsuranceCalculatorPage';
import TermInsurancePage from './components/TermInsurancePage';
import InvestmentPage from './components/InvestmentPage';
import CarInsurancePage from './components/CarInsurancePage';
import OtherInsurancePage from './components/OtherInsurancePage';
import OneCroreTermPage from './components/OneCroreTermPage';
import InsuranceDetailPage from './components/InsuranceDetailPage';
import DynamicPricingSimulator from './components/DynamicPricingSimulator';
import SmartProtectionPage from './components/SmartProtectionPage';
import InstantProcessingPage from './components/InstantProcessingPage';
import FullCoveragePage from './components/FullCoveragePage';
import ForInsurersPage from './components/ForInsurersPage';
import ActuarialTechPage from './components/ActuarialTechPage';
import CalculatorsHubPage from './components/CalculatorsHubPage';
import SIPCalculatorPage from './components/calculators/SIPCalculatorPage';
import IncomeTaxCalculatorPage from './components/calculators/IncomeTaxCalculatorPage';
import CompoundInterestCalculatorPage from './components/calculators/CompoundInterestCalculatorPage';
import HealthInsurancePremiumCalculatorPage from './components/calculators/HealthInsurancePremiumCalculatorPage';
import BMICalculatorPage from './components/calculators/BMICalculatorPage';
import IdealWeightCalculatorPage from './components/calculators/IdealWeightCalculatorPage';
import CalorieCalculatorPage from './components/calculators/CalorieCalculatorPage';
import DueDateCalculatorPage from './components/calculators/DueDateCalculatorPage';
import BMRCalculatorPage from './components/calculators/BMRCalculatorPage';
import BodyFatCalculatorPage from './components/calculators/BodyFatCalculatorPage';
import MacroCalculatorPage from './components/calculators/MacroCalculatorPage';
import OvulationCalculatorPage from './components/calculators/OvulationCalculatorPage';
import GenericHealthCalculatorPage from './components/calculators/GenericHealthCalculatorPage';
import GenericCalculatorPage from './components/calculators/GenericCalculatorPage';
import PensionCalculatorPage from './components/calculators/PensionCalculatorPage';
import NPSCalculatorPage from './components/calculators/NPSCalculatorPage';
import FDCalculatorPage from './components/calculators/FDCalculatorPage';
import PPFCalculatorPage from './components/calculators/PPFCalculatorPage';
import CarInsuranceCalculatorPage from './components/calculators/CarInsuranceCalculatorPage';
import GSTCalculatorPage from './components/calculators/GSTCalculatorPage';
import ULIPCalculatorPage from './components/calculators/ULIPCalculatorPage';
import HumanLifeValueCalculatorPage from './components/calculators/HumanLifeValueCalculatorPage';
import LifeInsuranceCalculatorPage from './components/calculators/LifeInsuranceCalculatorPage';
// import TermInsuranceCalculatorPage from './components/calculators/TermInsuranceCalculatorPage';
// import BikeInsuranceCalculatorPage from './components/calculators/BikeInsuranceCalculatorPage';
// import TravelInsuranceCalculatorPage from './components/calculators/TravelInsuranceCalculatorPage';
import { insuranceProducts } from './data/insuranceProducts';
import { allAdditionalProducts } from './data/additionalProducts';
import { allRemainingProducts } from './data/remainingProducts';
import { healthInsuranceExtension } from './data/healthInsuranceExtension';
import { healthMotorExtension } from './data/healthMotorExtension';
import { motorOtherExtension } from './data/motorOtherExtension';
import { finalExtensionProducts } from './data/finalExtension';
import rocketImage from './assets/ImageWithFallback.png';
import magnifyingGlassImage from './assets/Image.png';
import coinImage from './assets/CoinImage.png';
import productsImage from './assets/54e760e1b559bfa6c6d42a2408e35a9089b9535f.png';

// Merge all products
const allProducts = {
  ...insuranceProducts,
  ...allAdditionalProducts,
  ...allRemainingProducts,
  ...healthInsuranceExtension,
  ...healthMotorExtension,
  ...motorOtherExtension,
  ...finalExtensionProducts
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'health-insurance' | 'calculator' | 'term-insurance' | 'investment' | 'car-insurance' | 'other-insurance' | 'one-crore-term' | 'dynamic-pricing' | 'smart-protection' | 'instant-processing' | 'full-coverage' | 'for-insurers' | 'actuarial-tech' | string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  // Initialize spotlight effect on mount
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Apply spotlight to all interactive elements
    const selectors = [
      'button:not(.no-spotlight)',
      'a[href]:not(.no-spotlight)',
      'article:not(.no-spotlight)',
      '.spotlight-effect'
    ];

    const elements = document.querySelectorAll<HTMLElement>(selectors.join(', '));

    const cleanup: Array<() => void> = [];

    elements.forEach((element) => {
      let animationFrameId: number;
      let isHovering = false;

      const handleMouseMove = (e: MouseEvent) => {
        if (!isHovering) return;

        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }

        animationFrameId = requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          element.style.setProperty('--spotlight-x', `${x}px`);
          element.style.setProperty('--spotlight-y', `${y}px`);
        });
      };

      const handleMouseEnter = () => {
        isHovering = true;
        element.classList.add('spotlight-effect', 'spotlight-active');
      };

      const handleMouseLeave = () => {
        isHovering = false;
        element.classList.remove('spotlight-active');
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      element.addEventListener('mousemove', handleMouseMove);

      cleanup.push(() => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mousemove', handleMouseMove);
        element.classList.remove('spotlight-effect', 'spotlight-active');
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      });
    });

    return () => {
      cleanup.forEach(fn => fn());
    };
  }, []);

  const navItems = [
    { name: 'Insurances', href: '#insurances', onClick: () => setCurrentPage('calculator') },
    { name: 'Investments', href: '#investments' },
    { name: 'Calculators', href: '#calculators', onClick: () => setCurrentPage('calculators-hub') },
    { name: 'AI Pricing', href: '#dynamic-pricing', onClick: () => setCurrentPage('dynamic-pricing') },
    { name: 'Actuarial Tech', href: '#actuarial-tech', onClick: () => setCurrentPage('actuarial-tech') },
    { name: 'For Insurers', href: '#for-insurers', onClick: () => setCurrentPage('for-insurers') },
    { name: 'Resources', href: '#resources' },
  ];

  // Show specific product detail page
  if (selectedProductId && allProducts[selectedProductId]) {
    const product = allProducts[selectedProductId];
    return <InsuranceDetailPage
      product={product}
      onBack={() => {
        setSelectedProductId(null);
        setCurrentPage('calculator');
      }}
    />;
  }

  // Show 1 Crore Term Insurance standalone page
  if (currentPage === 'one-crore-term') {
    return <OneCroreTermPage
      onBack={() => setCurrentPage('calculator')}
      onSelectProduct={(productId: string) => {
        setSelectedProductId(productId);
      }}
    />;
  }

  // Show Health Insurance page if selected
  if (currentPage === 'health-insurance') {
    return <HealthInsurancePage
      onBack={() => setCurrentPage('home')}
      onSelectProduct={(productId: string) => {
        setSelectedProductId(productId);
      }}
    />;
  }

  // Show Calculator page if selected
  if (currentPage === 'calculator') {
    return <InsuranceCalculatorPage
      onBack={() => setCurrentPage('home')}
      onSelectInsurance={(type: string) => {
        if (type === 'health') {
          setCurrentPage('health-insurance');
        } else if (type === 'term') {
          setCurrentPage('term-insurance');
        } else if (type === 'investment') {
          setCurrentPage('investment');
        } else if (type === 'car') {
          setCurrentPage('car-insurance');
        } else if (type === 'other') {
          setCurrentPage('other-insurance');
        }
      }}
      onSelectProduct={(productId: string) => {
        setSelectedProductId(productId);
      }}
      onSelectPage={(pageId: string) => {
        setCurrentPage(pageId);
      }}
    />;
  }

  // Show Term Insurance page if selected
  if (currentPage === 'term-insurance') {
    return <TermInsurancePage
      onBack={() => setCurrentPage('calculator')}
      onSelectProduct={(productId: string) => {
        setSelectedProductId(productId);
      }}
    />;
  }

  // Show Investment page if selected
  if (currentPage === 'investment') {
    return <InvestmentPage
      onBack={() => setCurrentPage('calculator')}
      onSelectProduct={(productId: string) => {
        setSelectedProductId(productId);
      }}
    />;
  }

  // Show Car Insurance page if selected
  if (currentPage === 'car-insurance') {
    return <CarInsurancePage
      onBack={() => setCurrentPage('calculator')}
      onSelectProduct={(productId: string) => {
        setSelectedProductId(productId);
      }}
    />;
  }

  // Show Other Insurance page if selected
  if (currentPage === 'other-insurance') {
    return <OtherInsurancePage
      onBack={() => setCurrentPage('calculator')}
      onSelectProduct={(productId: string) => {
        setSelectedProductId(productId);
      }}
    />;
  }

  // Show Dynamic Pricing Simulator if selected
  if (currentPage === 'dynamic-pricing') {
    return <DynamicPricingSimulator onBack={() => setCurrentPage('home')} />;
  }

  // Show Smart Protection page if selected
  if (currentPage === 'smart-protection') {
    return <SmartProtectionPage onBack={() => setCurrentPage('home')} />;
  }

  // Show Instant Processing page if selected
  if (currentPage === 'instant-processing') {
    return <InstantProcessingPage onBack={() => setCurrentPage('home')} />;
  }

  // Show Full Coverage page if selected
  if (currentPage === 'full-coverage') {
    return <FullCoveragePage onBack={() => setCurrentPage('home')} />;
  }

  // Show For Insurers page if selected
  if (currentPage === 'for-insurers') {
    return <ForInsurersPage onBack={() => setCurrentPage('home')} />;
  }

  // Show Actuarial Tech page if selected
  if (currentPage === 'actuarial-tech') {
    return <ActuarialTechPage onBack={() => setCurrentPage('home')} />;
  }

  // Show Calculators Hub if selected
  if (currentPage === 'calculators-hub') {
    return <CalculatorsHubPage
      onNavigate={(calculatorId: string) => setCurrentPage(`calculator-${calculatorId}`)}
      onBack={() => setCurrentPage('home')}
    />;
  }

  // Show individual calculator pages
  if (currentPage === 'calculator-sip') {
    return <SIPCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-income-tax') {
    return <IncomeTaxCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-compound-interest') {
    return <CompoundInterestCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-health-insurance') {
    return <HealthInsurancePremiumCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  // Health Calculators
  if (currentPage === 'calculator-bmi') {
    return <BMICalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-ideal-weight') {
    return <IdealWeightCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-calorie') {
    return <CalorieCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-bmr') {
    return <BMRCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-body-fat') {
    return <BodyFatCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-ovulation') {
    return <OvulationCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-pregnancy') {
    return <GenericHealthCalculatorPage
      onBack={() => setCurrentPage('calculators-hub')}
      title="Pregnancy Calculator"
      description="Calculate pregnancy weeks and important milestones"
      icon={Baby}
    />;
  }

  if (currentPage === 'calculator-pregnancy-conception') {
    return <GenericHealthCalculatorPage
      onBack={() => setCurrentPage('calculators-hub')}
      title="Pregnancy Conception Calculator"
      description="Estimate conception date based on due date or last period"
      icon={Baby}
    />;
  }

  if (currentPage === 'calculator-pregnancy-weight-gain') {
    return <GenericHealthCalculatorPage
      onBack={() => setCurrentPage('calculators-hub')}
      title="Pregnancy Weight Gain Calculator"
      description="Track healthy weight gain during pregnancy"
      icon={Baby}
    />;
  }

  if (currentPage === 'calculator-due-date') {
    return <DueDateCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-macro') {
    return <MacroCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  // Investment & Savings Calculators
  if (currentPage === 'calculator-pension') {
    return <PensionCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-nps') {
    return <NPSCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-fd') {
    return <FDCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-ppf') {
    return <PPFCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  // Insurance Calculators
  if (currentPage === 'calculator-car-insurance') {
    return <CarInsuranceCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  // Tax Calculators
  if (currentPage === 'calculator-gst') {
    return <GSTCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-hra') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="HRA Calculator" description="Calculate House Rent Allowance exemption and tax benefits" icon={Home} />;
  }

  if (currentPage === 'calculator-gratuity') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Gratuity Calculator" description="Calculate gratuity amount based on salary and years of service" icon={Briefcase} />;
  }

  // Investment & Savings Calculators (remaining)
  if (currentPage === 'calculator-ulip') {
    return <ULIPCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-human-life-value') {
    return <HumanLifeValueCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-savings') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Savings Calculator" description="Calculate how much you need to save to reach your financial goals" icon={PiggyBank} />;
  }

  if (currentPage === 'calculator-save-regularly') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Save Regularly Calculator" description="Plan regular savings contributions to build wealth over time" icon={Clock} />;
  }

  if (currentPage === 'calculator-actual-savings') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Actual Savings Calculator" description="Track and calculate your real savings after expenses and inflation" icon={Wallet} />;
  }

  if (currentPage === 'calculator-investment') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Investment Calculator" description="General investment calculator for lump sum and periodic investments" icon={TrendingUp} />;
  }

  // Insurance Calculators (remaining)
  if (currentPage === 'calculator-bike-insurance') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Bike Insurance Calculator" description="Estimate two-wheeler insurance premium for your bike" icon={Bike} />;
  }

  if (currentPage === 'calculator-life-insurance') {
    return <LifeInsuranceCalculatorPage onBack={() => setCurrentPage('calculators-hub')} />;
  }

  if (currentPage === 'calculator-term-insurance') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Term Insurance Calculator" description="Calculate term insurance coverage and premium for financial protection" icon={Shield} />;
  }

  if (currentPage === 'calculator-lic') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="LIC Calculator" description="Calculate LIC policy maturity amount and premium payments" icon={FileText} />;
  }

  if (currentPage === 'calculator-travel-insurance') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Travel Insurance Calculator" description="Estimate travel insurance premium for domestic and international trips" icon={Plane} />;
  }

  if (currentPage === 'calculator-home-insurance') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Home Insurance Calculator" description="Calculate home insurance premium to protect your property" icon={Home} />;
  }

  if (currentPage === 'calculator-critical-illness') {
    return <GenericCalculatorPage onBack={() => setCurrentPage('calculators-hub')} title="Critical Illness Calculator" description="Determine coverage needed for critical illness insurance protection" icon={Heart} />;
  }

  return (
    <div className="w-full max-w-full bg-black overflow-x-hidden">
      {/* Hero Section with Navigation */}
      <section className="relative w-full max-w-full h-screen bg-black overflow-hidden flex flex-col" aria-label="Hero section with navigation">

        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Spline scene="https://prod.spline.design/mc3NLM2PsCMH77Ai/scene.splinecode" />
        </div>

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

        {/* Header with Navigation */}
        <header className="relative z-20 px-8 md:px-12 lg:px-16 py-4 flex-shrink-0">
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            {/* Logo/Home Link */}
            <div>
              <a
                href="#home"
                className="text-white font-thin text-sm tracking-wide hover:text-gray-300 transition-colors duration-300"
                aria-label="Vioratech Home"
              >
                Vioratech Insurance
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-8 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="text-white font-thin text-sm tracking-wide hover:text-gray-300 transition-colors duration-300 whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Auth Links */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#login"
                className="text-white font-thin text-sm tracking-wide hover:text-gray-300 transition-colors duration-300"
              >
                Login
              </a>
              <span className="text-white/30" aria-hidden="true">|</span>
              <a
                href="#signup"
                className="text-white font-thin text-sm tracking-wide hover:text-gray-300 transition-colors duration-300"
              >
                Sign up
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" strokeWidth={1} />
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-6 pt-6 border-t border-white/20" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white font-thin text-sm tracking-wide hover:text-gray-300 transition-colors duration-300"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/20 flex flex-col space-y-4">
                  <a
                    href="#login"
                    className="text-white font-thin text-sm tracking-wide hover:text-gray-300 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </a>
                  <a
                    href="#signup"
                    className="text-white font-thin text-sm tracking-wide hover:text-gray-300 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </nav>
          )}
        </header>

        {/* Hero Content */}
        <div className="relative z-20 flex-1 flex items-center justify-center">
          <div className="text-center px-5 sm:px-8 w-full max-w-full">
            {/* Mobile AI Badge */}
            <div className="lg:hidden mb-4 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 backdrop-blur-md">
                <Brain className="w-4 h-4 text-purple-400" strokeWidth={1.5} />
                <span className="text-white/90 text-xs font-thin">AI-Powered Insurance Platform</span>
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              </div>
            </div>

            <h1 className="text-white mb-4 text-[40px] md:text-[56px] lg:text-[72px]">
              The future of Intelligent Insurance
            </h1>

            {/* Mobile-specific subtitle */}
            <p className="lg:hidden text-white/80 text-base font-thin tracking-wide mb-6 max-w-md mx-auto">
              Get Personalized Insurance Plans with AI in 60 Seconds
            </p>
            {/* Desktop subtitle */}
            <p className="hidden lg:block text-white/80 text-lg md:text-xl lg:text-2xl font-thin tracking-wide mb-6 sm:mb-8 max-w-3xl mx-auto text-[32px]">
              AI Powered Insurance Technology services
            </p>

            {/* Mobile AI USP Cards - Only visible on mobile */}
            <div className="lg:hidden mb-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
              <div className="glass-card p-3 rounded-xl text-center">
                <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-white/80 text-xs font-thin">Smart Recommendations</p>
              </div>
              <div className="glass-card p-3 rounded-xl text-center">
                <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-white/80 text-xs font-thin">Instant Quotes</p>
              </div>
            </div>

            {/* Search Form */}
            <form className="max-w-3xl mx-auto px-5 sm:px-0 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center" role="search">
              <div className="relative flex-1 w-full min-w-0">
                <label htmlFor="ai-search" className="sr-only">Search for insurance plans</label>
                <Bot className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 lg:hidden" strokeWidth={1.5} aria-hidden="true" />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 hidden lg:block" strokeWidth={1.5} aria-hidden="true" />
                <Input
                  id="ai-search"
                  type="text"
                  placeholder="Ask AI: Find best insurance for me"
                  className="glass-input h-12 sm:h-14 pl-12 rounded-xl w-full border-white/15 text-white placeholder:text-white/50"
                />
              </div>
              <Button
                type="submit"
                className="bg-[#39FF14] text-black hover:bg-[#2ee610] h-12 sm:h-14 px-6 sm:px-8 rounded-xl whitespace-nowrap w-full sm:w-auto border border-[#39FF14]/20 transition-colors duration-200"
                variant="ghost"
              >
                <Sparkles className="w-4 h-4 mr-2" strokeWidth={1.5} aria-hidden="true" />
                <span className="hidden sm:inline">Search with AI</span>
                <span className="sm:hidden">AI Search</span>
              </Button>
            </form>

            {/* Mobile AI Features - Only visible on mobile */}
            <div className="lg:hidden mt-6 text-center">
              <p className="text-white/60 text-xs mb-3 font-thin">Powered by Advanced AI</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-thin inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" strokeWidth={1.5} />
                  Personalized
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-thin inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" strokeWidth={1.5} />
                  24/7 AI Support
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-thin inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" strokeWidth={1.5} />
                  Smart Pricing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile AI Quick Actions - Only visible on mobile */}
        <div className="lg:hidden relative z-10 w-full px-5 mb-6">
          <div className="max-w-md mx-auto">
            <h2 className="text-white text-sm font-thin mb-3 text-center">AI Quick Actions</h2>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setShowAIAssistant(true)}
                className="glass-card p-3 rounded-xl flex flex-col items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Bot className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                <span className="text-white/80 text-[10px] font-thin text-center">AI Assistant</span>
              </button>
              <button
                onClick={() => setCurrentPage('calculator')}
                className="glass-card p-3 rounded-xl flex flex-col items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Calculator className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                <span className="text-white/80 text-[10px] font-thin text-center">Smart Compare</span>
              </button>
              <button
                onClick={() => setCurrentPage('dynamic-pricing')}
                className="glass-card p-3 rounded-xl flex flex-col items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Gauge className="w-5 h-5 text-pink-400" strokeWidth={1.5} />
                <span className="text-white/80 text-[10px] font-thin text-center">AI Pricing</span>
              </button>
            </div>
          </div>
        </div>


      </section>

      {/* Main Content */}
      <main>
        {/* Mobile AI Recommendations Section - Only visible on mobile */}
        <section className="lg:hidden relative w-full bg-[#050505] py-8 border-t border-white/10">
          <div className="px-5 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-lg font-thin flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                AI Recommendations
              </h2>
              <span className="text-white/40 text-xs font-thin">For You</span>
            </div>

            {/* AI Recommended Plans */}
            <div className="space-y-3">
              <div
                onClick={() => setCurrentPage('health-insurance')}
                className="glass-card rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white text-sm font-thin">Family Health Insurance</h3>
                      <span className="px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-thin">
                        94% Match
                      </span>
                    </div>
                    <p className="text-white/60 text-xs font-thin mb-2">
                      AI suggests this based on your profile
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-thin">
                        Cashless
                      </span>
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-thin">
                        No Waiting
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 flex-shrink-0" strokeWidth={1.5} />
                </div>
              </div>

              <div
                onClick={() => setCurrentPage('car-insurance')}
                className="glass-card rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white text-sm font-thin">Comprehensive Car Cover</h3>
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-[10px] font-thin">
                        89% Match
                      </span>
                    </div>
                    <p className="text-white/60 text-xs font-thin mb-2">
                      Save ₹3,500 with AI-optimized plan
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-thin">
                        Zero Dep
                      </span>
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-thin">
                        24/7 Support
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 flex-shrink-0" strokeWidth={1.5} />
                </div>
              </div>

              <div
                onClick={() => setCurrentPage('term-insurance')}
                className="glass-card rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white text-sm font-thin">₹1 Crore Term Plan</h3>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[10px] font-thin">
                        Trending
                      </span>
                    </div>
                    <p className="text-white/60 text-xs font-thin mb-2">
                      Most chosen by users like you
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-thin">
                        ₹650/month
                      </span>
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-thin">
                        Tax Benefit
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 flex-shrink-0" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('calculator')}
              className="w-full mt-4 glass-card p-3 rounded-xl text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" strokeWidth={1.5} />
              <span className="text-white text-sm font-thin">View All AI Recommendations</span>
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="relative w-full bg-black py-24 md:py-32 border-t border-white/10 overflow-hidden" aria-labelledby="about-heading">
          {/* Enhanced Gradient Background */}
          <div className="absolute inset-0 w-full h-full" aria-hidden="true">
            {/* Layered gradient background for depth */}
            <div className="absolute inset-0 bg-black"></div>
          </div>

          <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-7xl relative z-10">
            {/* Section Header */}
            <header className="text-center mb-20">
              <h2 id="about-heading" className="text-white text-4xl md:text-5xl lg:text-6xl font-thin tracking-[0.02em] mb-6">
                What is Vioratech Insurance
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-thin leading-relaxed tracking-wide max-w-4xl mx-auto">
                A revolutionary AI-powered insurance platform that personalizes protection for every individual. We combine cutting-edge technology with comprehensive coverage to deliver insurance experiences that truly matter.
              </p>
            </header>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* Feature 1 - AI-Powered Protection */}
              <article className="flex flex-col items-center text-center group">
                <figure className="relative mb-8">
                  {/* Multi-layered glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400/40 to-gray-500/40 rounded-full blur-3xl opacity-80 scale-125" aria-hidden="true"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-gray-300/20 rounded-full blur-2xl opacity-60 scale-110 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-40 scale-105 group-hover:scale-125 transition-transform duration-500" aria-hidden="true"></div>
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <ImageWithFallback src={magnifyingGlassImage} alt="" className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </div>
                </figure>
                <h3 className="text-white mb-4">Smart Protection</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  AI analyzes your lifestyle and risk factors to recommend perfect coverage tailored for you.
                </p>
                <button
                  onClick={() => setCurrentPage('smart-protection')}
                  className="text-white/50 hover:text-white/80 transition-colors duration-300"
                >
                  Read More →
                </button>
              </article>

              {/* Feature 2 - Instant Processing */}
              <article className="flex flex-col items-center text-center group">
                <figure className="relative mb-8">
                  {/* Multi-layered glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300/40 to-gray-400/40 rounded-full blur-3xl opacity-80 scale-125" aria-hidden="true"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-gray-200/20 rounded-full blur-2xl opacity-60 scale-110 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-40 scale-105 group-hover:scale-125 transition-transform duration-500" aria-hidden="true"></div>
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <img src={rocketImage} alt="" className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </div>
                </figure>
                <h3 className="text-white mb-4">Instant Processing</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Get instant quotes, approval in minutes, and seamless claim settlements with no waiting.
                </p>
                <button
                  onClick={() => setCurrentPage('instant-processing')}
                  className="text-white/50 hover:text-white/80 transition-colors duration-300"
                >
                  Read More →
                </button>
              </article>

              {/* Feature 3 - Comprehensive Coverage */}
              <article className="flex flex-col items-center text-center group">
                <figure className="relative mb-8">
                  {/* Multi-layered glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400/40 to-gray-500/40 rounded-full blur-3xl opacity-80 scale-125" aria-hidden="true"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-gray-300/20 rounded-full blur-2xl opacity-60 scale-110 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-40 scale-105 group-hover:scale-125 transition-transform duration-500" aria-hidden="true"></div>
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <img src={coinImage} alt="" className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </div>
                </figure>
                <h3 className="text-white mb-4">Full Coverage</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Complete suite of insurance products to protect what matters most to you and your family.
                </p>
                <button
                  onClick={() => setCurrentPage('full-coverage')}
                  className="text-white/50 hover:text-white/80 transition-colors duration-300"
                >
                  Read More →
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* Mobile AI Benefits Section - Only visible on mobile */}
        <section className="lg:hidden relative w-full bg-black py-12 border-t border-white/10">
          <div className="px-5 max-w-md mx-auto">
            <h2 className="text-white text-xl font-thin text-center mb-3">
              Why Choose AI-Powered Insurance?
            </h2>
            <p className="text-white/60 text-xs font-thin text-center mb-6">
              Experience the future of insurance with intelligent automation
            </p>

            <div className="space-y-4">
              {/* Benefit 1 */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-thin mb-1">Smart Personalization</h3>
                    <p className="text-white/60 text-xs font-thin leading-relaxed">
                      AI analyzes your unique profile to recommend the perfect coverage, not generic plans
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600/20 to-cyan-600/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-thin mb-1">Instant Processing</h3>
                    <p className="text-white/60 text-xs font-thin leading-relaxed">
                      Get quotes in seconds, not hours. AI processes your data instantly for immediate results
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600/20 to-pink-600/10 flex items-center justify-center flex-shrink-0">
                    <IndianRupee className="w-6 h-6 text-pink-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-thin mb-1">Best Pricing</h3>
                    <p className="text-white/60 text-xs font-thin leading-relaxed">
                      AI compares thousands of plans to find you the best price without compromising coverage
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600/20 to-green-600/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-thin mb-1">Fraud Protection</h3>
                    <p className="text-white/60 text-xs font-thin leading-relaxed">
                      Advanced AI monitors claims 24/7 to protect you from fraud and ensure fast approval
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-600/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-orange-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-thin mb-1">24/7 AI Assistant</h3>
                    <p className="text-white/60 text-xs font-thin leading-relaxed">
                      Get instant answers anytime, anywhere. Our AI assistant never sleeps
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 text-center glass-card rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-white/80 text-xs font-thin mb-1">
                Rated 4.9/5 by 10,000+ users
              </p>
              <p className="text-white/60 text-[10px] font-thin">
                Join thousands who trust AI for their insurance needs
              </p>
            </div>

            {/* How AI Works - Mobile Section */}
            <div className="mt-8 glass-card rounded-xl p-5">
              <h3 className="text-white text-base font-thin text-center mb-4 flex items-center justify-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" strokeWidth={1.5} />
                How Our AI Works
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-400 text-xs font-thin">1</span>
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-thin mb-1">Tell AI about yourself</p>
                    <p className="text-white/50 text-[10px] font-thin">Share basic details - age, health, lifestyle</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs font-thin">2</span>
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-thin mb-1">AI analyzes 2000+ data points</p>
                    <p className="text-white/50 text-[10px] font-thin">Advanced algorithms find perfect matches</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-600/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pink-400 text-xs font-thin">3</span>
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-thin mb-1">Get personalized recommendations</p>
                    <p className="text-white/50 text-[10px] font-thin">Instant quotes tailored just for you</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage('dynamic-pricing')}
                className="w-full mt-4 btn-glow h-10 rounded-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-xs">Try AI Now</span>
              </button>
            </div>
          </div>
        </section>

        {/* Unique Features Section */}
        <section className="relative w-full bg-black py-24 md:py-32 border-t border-white/10 overflow-hidden" aria-labelledby="features-heading">
          {/* Gradient and Grid Background */}
          <div className="absolute inset-0 w-full h-full" aria-hidden="true">
            {/* Layered gradient background for depth */}
            <div className="absolute inset-0 bg-black"></div>
          </div>

          <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-7xl relative z-10">
            <header className="text-center mb-20">
              <h2 id="features-heading" className="text-white text-4xl md:text-5xl lg:text-6xl font-thin tracking-wide mb-6">
                What Makes Us Different
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-thin max-w-3xl mx-auto">
                Advanced technology meets human-centered design for insurance that adapts to your life
              </p>
            </header>

            {/* Main Feature - Large Card */}
            <article className="mb-8">
              <div className="relative rounded-3xl border border-white/10 p-8 md:p-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full" aria-hidden="true"></div>

                <div className="relative z-10">
                  <header className="flex flex-col md:flex-row items-center md:items-center gap-4 mb-6 text-center md:text-left">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md flex-shrink-0" aria-hidden="true">
                      <Sparkles className="w-10 h-10 text-white" strokeWidth={1} />
                    </div>
                    <div>
                      <h3 className="text-white text-2xl md:text-4xl font-thin mb-2">Neural Risk Assessment Engine</h3>
                      <p className="text-white/40 font-thin text-sm md:text-base">Powered by TensorFlow & Advanced ML Models</p>
                    </div>
                  </header>

                  <p className="text-white/70 font-thin leading-relaxed text-base md:text-lg mb-8 max-w-4xl text-center md:text-left mx-auto md:mx-0">
                    Our proprietary neural network analyzes over 2,000+ data points including lifestyle patterns, medical history, genetic predispositions, occupation hazards, and behavioral indicators to calculate your precise risk profile in real-time. The system continuously learns and adapts, ensuring your coverage evolves with your life changes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center" aria-hidden="true">
                        <Brain className="w-4 h-4 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-white font-thin mb-1">Deep Learning Analysis</h4>
                        <p className="text-white/50 font-thin text-sm">Real-time pattern recognition from millions of anonymized health records</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center" aria-hidden="true">
                        <Shield className="w-4 h-4 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-white font-thin mb-1">Predictive Coverage</h4>
                        <p className="text-white/50 font-thin text-sm">AI forecasts future health risks with 94% accuracy</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center" aria-hidden="true">
                        <TrendingUp className="w-4 h-4 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-white font-thin mb-1">Dynamic Pricing</h4>
                        <p className="text-white/50 font-thin text-sm">Premium adjusts based on verified healthy lifestyle choices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Secondary Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <article className="relative rounded-2xl border border-white/10 p-8 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md hover:border-white/30 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <Zap className="w-7 h-7 text-white" strokeWidth={1} />
                </div>
                <h3 className="text-white text-xl md:text-2xl font-thin mb-4">Claims Settled in Minutes</h3>
                <p className="text-white/60 font-thin leading-relaxed mb-4">
                  No paperwork hassles or endless waiting. Upload documents from your phone, and get instant approval. Money reaches your account the same day when you need it most.
                </p>
                <p className="text-white/40 font-thin text-sm">Most claims approved within 2 hours</p>
              </article>

              {/* Feature 2 */}
              <article className="relative rounded-2xl border border-white/10 p-8 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md hover:border-white/30 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <Heart className="w-7 h-7 text-white" strokeWidth={1} />
                </div>
                <h3 className="text-white text-xl md:text-2xl font-thin mb-4">Family Coverage That Grows</h3>
                <p className="text-white/60 font-thin leading-relaxed mb-4">
                  Protect your entire family with one plan. Add newborns instantly, include aging parents, and adjust coverage as your family evolves—all without reapplying.
                </p>
                <p className="text-white/40 font-thin text-sm">Cover up to 10 family members</p>
              </article>

              {/* Feature 3 */}
              <article className="relative rounded-2xl border border-white/10 p-8 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md hover:border-white/30 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <Shield className="w-7 h-7 text-white" strokeWidth={1} />
                </div>
                <h3 className="text-white text-xl md:text-2xl font-thin mb-4">Pay Only for What You Need</h3>
                <p className="text-white/60 font-thin leading-relaxed mb-4">
                  Customize every aspect of your coverage. Choose deductibles, add-ons, and protection levels that match your lifestyle. Get discounts for healthy habits and safe living.
                </p>
                <p className="text-white/40 font-thin text-sm">Save up to 40% with wellness rewards</p>
              </article>
            </div>

            {/* Dynamic Pricing Simulator Highlight */}
            <div className="mt-20 pt-20 border-t border-white/10">
              <article className="mb-16">
                <div className="relative rounded-3xl border-2 border-[#39FF14]/30 p-8 md:p-12 bg-gradient-to-br from-white/5 via-black/50 to-white/5 backdrop-blur-md hover:border-[#39FF14] transition-all duration-500 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_60px_rgba(57,255,20,0.8)] overflow-hidden cursor-pointer"
                  onClick={() => setCurrentPage('dynamic-pricing')}
                >
                  {/* Animated gradient border glow */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-[#39FF14] animate-pulse shadow-[0_0_30px_rgba(57,255,20,0.8),0_0_60px_rgba(57,255,20,0.5)]" aria-hidden="true"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs">
                        NEW FEATURE
                      </span>
                      <span className="px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs">
                        EDUCATIONAL DEMO
                      </span>
                    </div>

                    <header className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/30 flex items-center justify-center backdrop-blur-md flex-shrink-0" aria-hidden="true">
                        <Activity className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-white text-2xl md:text-3xl mb-2">Personalized & Dynamic Pricing Simulator</h3>
                        <p className="text-blue-400/80 text-sm md:text-base">Interactive demonstration of next-generation insurance pricing</p>
                      </div>
                    </header>

                    <p className="text-white/70 leading-relaxed text-base mb-6 max-w-4xl">
                      Explore how modern insurance pricing adapts to your individual risk profile and behavior patterns.
                      Adjust sliders to see real-time premium calculations, compare traditional vs personalized pricing,
                      and understand the factors that influence your insurance costs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <Calculator className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <div>
                          <p className="text-white text-sm">Real-Time Calculation</p>
                          <p className="text-white/40 text-xs">See premium changes instantly</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <div>
                          <p className="text-white text-sm">Behavior Impact</p>
                          <p className="text-white/40 text-xs">How you save with good habits</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <BarChart3 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <div>
                          <p className="text-white text-sm">Detailed Breakdown</p>
                          <p className="text-white/40 text-xs">Transparent pricing logic</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <div>
                          <p className="text-white text-sm">100% Educational</p>
                          <p className="text-white/40 text-xs">View-only simulation</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>View-only demo • No real pricing • No data collection</span>
                      </div>
                      <Button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-400 hover:text-blue-300">
                        Try Interactive Simulator <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Featured Insurance Products - Quick Access */}
            <div className="mt-12">
              <div className="text-center mb-12">
                <h3 className="text-white text-3xl md:text-4xl font-thin mb-4">Explore Our Insurance Products</h3>
                <p className="text-white/60 font-thin max-w-2xl mx-auto">Click any product to view detailed information, features, and FAQs</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 1 Crore Term Insurance */}
                <button
                  onClick={() => setCurrentPage('one-crore-term')}
                  className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group text-left"
                >
                  <Shield className="w-8 h-8 text-gray-400 mb-3" />
                  <h4 className="text-white mb-2">₹1 Crore Term Insurance</h4>
                  <p className="text-sm text-white/60 mb-3">Just ₹25/day for complete family protection</p>
                  <span className="text-xs text-gray-400 group-hover:underline">Learn More →</span>
                </button>

                {/* NRI Term Insurance */}
                <button
                  onClick={() => setSelectedProductId('term-insurance-nri')}
                  className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group text-left"
                >
                  <Plane className="w-8 h-8 text-gray-400 mb-3" />
                  <h4 className="text-white mb-2">NRI Term Insurance</h4>
                  <p className="text-sm text-white/60 mb-3">Buy from USA, UAE, UK, anywhere in the world</p>
                  <span className="text-xs text-gray-400 group-hover:underline">Learn More →</span>
                </button>

                {/* ULIP Plans */}
                <button
                  onClick={() => setSelectedProductId('ulip-plans')}
                  className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group text-left"
                >
                  <TrendingUp className="w-8 h-8 text-gray-400 mb-3" />
                  <h4 className="text-white mb-2">ULIP Plans</h4>
                  <p className="text-sm text-white/60 mb-3">Market-linked returns with life cover</p>
                  <span className="text-xs text-gray-400 group-hover:underline">Learn More →</span>
                </button>

                {/* Senior Citizen Health */}
                <button
                  onClick={() => setSelectedProductId('senior-citizen-health')}
                  className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group text-left"
                >
                  <Users className="w-8 h-8 text-gray-400 mb-3" />
                  <h4 className="text-white mb-2">Senior Citizen Health</h4>
                  <p className="text-sm text-white/60 mb-3">Coverage for parents aged 60-80 years</p>
                  <span className="text-xs text-gray-400 group-hover:underline">Learn More →</span>
                </button>

                {/* Critical Illness */}
                <button
                  onClick={() => setSelectedProductId('critical-illness')}
                  className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group text-left"
                >
                  <Heart className="w-8 h-8 text-gray-400 mb-3" />
                  <h4 className="text-white mb-2">Critical Illness</h4>
                  <p className="text-sm text-white/60 mb-3">₹5L-₹1Cr lump sum on diagnosis</p>
                  <span className="text-xs text-gray-400 group-hover:underline">Learn More →</span>
                </button>

                {/* Zero Dep Car */}
                <button
                  onClick={() => setSelectedProductId('zero-dep-car')}
                  className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group text-left"
                >
                  <Car className="w-8 h-8 text-gray-400 mb-3" />
                  <h4 className="text-white mb-2">Zero Dep Car</h4>
                  <p className="text-sm text-white/60 mb-3">100% claim without depreciation</p>
                  <span className="text-xs text-gray-400 group-hover:underline">Learn More →</span>
                </button>

                {/* International Travel */}
                <button
                  onClick={() => setSelectedProductId('international-travel')}
                  className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group text-left"
                >
                  <Plane className="w-8 h-8 text-gray-400 mb-3" />
                  <h4 className="text-white mb-2">International Travel</h4>
                  <p className="text-sm text-white/60 mb-3">$50K-$500K medical cover abroad</p>
                  <span className="text-xs text-gray-400 group-hover:underline">Learn More →</span>
                </button>

                {/* Child Education Plans */}
                <button
                  onClick={() => setSelectedProductId('child-plans')}
                  className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all group text-left"
                >
                  <Baby className="w-8 h-8 text-gray-400 mb-3" />
                  <h4 className="text-white mb-2">Child Education Plans</h4>
                  <p className="text-sm text-white/60 mb-3">Build ₹20-75L corpus for education</p>
                  <span className="text-xs text-gray-400 group-hover:underline">Learn More →</span>
                </button>
              </div>

              <div className="text-center mt-10">
                <Button
                  onClick={() => setCurrentPage('calculator')}
                  className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 h-12 rounded-xl"
                >
                  View All Insurance Products
                </Button>
              </div>
            </div>

            {/* Financial Calculators Section */}
            <div className="mt-20 pt-20 border-t border-white/10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calculator className="w-8 h-8 text-[#39FF14]" />
                  <h3 className="text-white text-3xl md:text-4xl font-thin">Financial Calculators</h3>
                </div>
                <p className="text-white/60 font-thin max-w-2xl mx-auto">
                  Make informed financial decisions with our comprehensive suite of 25 AI-powered calculators
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* SIP Calculator Card */}
                <article
                  onClick={() => setCurrentPage('calculator-sip')}
                  className="glass-card rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[#39FF14]/10 rounded-lg border border-[#39FF14]/20">
                      <TrendingUp className="w-6 h-6 text-[#39FF14]" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                    SIP Calculator
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Calculate returns on your Systematic Investment Plan with compound growth projections
                  </p>
                </article>

                {/* Income Tax Calculator Card */}
                <article
                  onClick={() => setCurrentPage('calculator-income-tax')}
                  className="glass-card rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[#39FF14]/10 rounded-lg border border-[#39FF14]/20">
                      <Receipt className="w-6 h-6 text-[#39FF14]" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                    Income Tax Calculator
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Calculate income tax liability under old and new tax regimes
                  </p>
                </article>

                {/* Compound Interest Calculator Card */}
                <article
                  onClick={() => setCurrentPage('calculator-compound-interest')}
                  className="glass-card rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[#39FF14]/10 rounded-lg border border-[#39FF14]/20">
                      <Wallet className="w-6 h-6 text-[#39FF14]" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                    Compound Interest Calculator
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    See how your money grows exponentially over time with compound interest
                  </p>
                </article>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setCurrentPage('calculators-hub')}
                  className="btn-glow px-8 h-12 rounded-xl"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  View All 25 Calculators
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile AI Trust Section - Only visible on mobile */}
      <section className="lg:hidden relative w-full bg-[#050505] py-8 border-t border-white/10">
        <div className="px-5 max-w-md mx-auto">
          <h2 className="text-white text-base font-thin text-center mb-4">
            Trusted AI Insurance Platform
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="glass-card rounded-xl p-3 text-center">
              <Lock className="w-6 h-6 text-green-400 mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-white/80 text-xs font-thin mb-1">256-bit Encryption</p>
              <p className="text-white/50 text-[10px] font-thin">Bank-level Security</p>
            </div>
            <div className="glass-card rounded-xl p-3 text-center">
              <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-white/80 text-xs font-thin mb-1">IRDAI Approved</p>
              <p className="text-white/50 text-[10px] font-thin">100% Compliant</p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
              <span className="text-white/90 text-sm font-thin">AI Powered by</span>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-thin">
                TensorFlow
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-thin">
                GPT-4
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-thin">
                AWS ML
              </span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-white/60 text-xs font-thin mb-2">
              Join 100,000+ Happy Customers
            </p>
            <div className="flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-400" strokeWidth={1.5} />
              <span className="text-white/80 text-[10px] font-thin">Fast Claims</span>
              <span className="text-white/30 mx-1">•</span>
              <CheckCircle2 className="w-3 h-3 text-green-400" strokeWidth={1.5} />
              <span className="text-white/80 text-[10px] font-thin">24/7 Support</span>
              <span className="text-white/30 mx-1">•</span>
              <CheckCircle2 className="w-3 h-3 text-green-400" strokeWidth={1.5} />
              <span className="text-white/80 text-[10px] font-thin">Best Prices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-black border-t border-white/10 py-16 overflow-hidden" role="contentinfo">
        {/* Gradient and Grid Background */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-black to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(192, 192, 192, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(192, 192, 192, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h2 className="text-white text-xl font-thin mb-4">Vioratech Insurance</h2>
              <p className="text-white/60 font-thin text-sm leading-relaxed mb-6">
                AI-powered insurance platform revolutionizing protection for modern India.
              </p>
              <address className="not-italic text-white/40 font-thin text-sm">
                <p>Mumbai, Maharashtra</p>
                <p className="mt-2">
                  <a href="mailto:support@vioratech.com" className="hover:text-white/60 transition-colors">
                    support@vioratech.com
                  </a>
                </p>
              </address>
            </div>

            {/* Products */}
            <nav aria-label="Product links">
              <h3 className="text-white font-thin mb-4">Products</h3>
              <ul className="space-y-3">
                <li><a href="#motor" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Motor Insurance</a></li>
                <li><a href="#health" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Health Insurance</a></li>
                <li><a href="#life" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Life Insurance</a></li>
                <li><a href="#travel" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Travel Insurance</a></li>
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company links">
              <h3 className="text-white font-thin mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">About Us</a></li>
                <li><a href="#careers" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Careers</a></li>
                <li><a href="#press" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Press</a></li>
                <li><a href="#contact" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Contact</a></li>
              </ul>
            </nav>

            {/* Legal */}
            <nav aria-label="Legal links">
              <h3 className="text-white font-thin mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#privacy" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Terms of Service</a></li>
                <li><a href="#claims" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Claims Process</a></li>
                <li><a href="#compliance" className="text-white/60 font-thin text-sm hover:text-white/80 transition-colors">Compliance</a></li>
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 font-thin text-sm">
              © {new Date().getFullYear()} Vioratech Insurance. All rights reserved. Regulated by IRDAI.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant Button - Mobile Only */}
      <button
        onClick={() => setShowAIAssistant(!showAIAssistant)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-110"
        aria-label="AI Assistant"
      >
        <Bot className="w-6 h-6 text-white" strokeWidth={2} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></span>
      </button>

      {/* AI Assistant Modal - Mobile Only */}
      {showAIAssistant && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center px-4 pb-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowAIAssistant(false)}
          ></div>
          <div className="relative w-full max-w-md glass-card rounded-2xl p-6 max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-white font-thin">AI Assistant</h3>
                  <p className="text-white/60 text-xs font-thin">How can I help you today?</p>
                </div>
              </div>
              <button
                onClick={() => setShowAIAssistant(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* AI Suggestions */}
            <div className="space-y-3 mb-4">
              <p className="text-white/80 text-xs font-thin mb-2">Quick Suggestions:</p>

              <button
                onClick={() => {
                  setShowAIAssistant(false);
                  setCurrentPage('health-insurance');
                }}
                className="w-full glass-card p-3 rounded-xl text-left hover:bg-white/10 transition-colors flex items-start gap-3"
              >
                <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white text-xs font-thin mb-1">Best Health Insurance</p>
                  <p className="text-white/60 text-[10px] font-thin">AI-recommended plans for your profile</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowAIAssistant(false);
                  setCurrentPage('car-insurance');
                }}
                className="w-full glass-card p-3 rounded-xl text-left hover:bg-white/10 transition-colors flex items-start gap-3"
              >
                <Car className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white text-xs font-thin mb-1">Smart Car Insurance</p>
                  <p className="text-white/60 text-[10px] font-thin">Compare & save with AI insights</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowAIAssistant(false);
                  setCurrentPage('calculator');
                }}
                className="w-full glass-card p-3 rounded-xl text-left hover:bg-white/10 transition-colors flex items-start gap-3"
              >
                <Calculator className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white text-xs font-thin mb-1">Compare All Plans</p>
                  <p className="text-white/60 text-[10px] font-thin">AI-powered comparison tool</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowAIAssistant(false);
                  setCurrentPage('dynamic-pricing');
                }}
                className="w-full glass-card p-3 rounded-xl text-left hover:bg-white/10 transition-colors flex items-start gap-3"
              >
                <Gauge className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white text-xs font-thin mb-1">AI Pricing Simulator</p>
                  <p className="text-white/60 text-[10px] font-thin">Get personalized pricing</p>
                </div>
              </button>
            </div>

            {/* AI Chat Input */}
            <div className="border-t border-white/10 pt-4">
              <p className="text-white/60 text-xs font-thin mb-2">Or ask me anything:</p>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Type your question..."
                  className="glass-input h-10 pr-10 text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors">
                  <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-white/40 text-[10px] font-thin mt-2 text-center">Powered by Advanced AI Technology</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}