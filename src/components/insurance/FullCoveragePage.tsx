import { ArrowLeft, Shield, Heart, Car, Home, Plane, Users, Baby, PiggyBank, Briefcase, CheckCircle, Umbrella, TrendingUp, Lock, Award, Globe, Building } from 'lucide-react';
import { Button } from './ui/button';

interface FullCoveragePageProps {
  onBack: () => void;
}

export default function FullCoveragePage({ onBack }: FullCoveragePageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:text-[#39FF14] hover:bg-white/5"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-6">
              <Umbrella className="w-4 h-4 text-[#39FF14]" />
              <span className="text-[#39FF14] text-sm font-medium">Complete Protection Suite</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Full
              <span className="text-[#39FF14]"> Coverage</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Complete suite of insurance products to protect what matters most to you and your family. Comprehensive protection across all aspects of your life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#39FF14] hover:bg-[#32dd12] text-black font-semibold px-8 py-6 text-lg">
                Explore All Products
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-6 text-lg">
                Talk to Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Categories Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Protection Suite</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Six core insurance categories covering every aspect of your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health Insurance */}
            <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Health Insurance</h3>
              <p className="text-white/70 mb-6">
                Comprehensive medical coverage for you and your family with cashless hospitalization and preventive care.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Individual & Family Floater Plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Critical Illness Coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">No Claim Bonus Benefits</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Learn More
              </Button>
            </div>

            {/* Term Life Insurance */}
            <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Term Life Insurance</h3>
              <p className="text-white/70 mb-6">
                Pure life protection with high coverage amounts at affordable premiums to secure your family's future.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Coverage up to ₹10 Crore</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Return of Premium Options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Accidental Death Benefits</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Learn More
              </Button>
            </div>

            {/* Motor Insurance */}
            <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Motor Insurance</h3>
              <p className="text-white/70 mb-6">
                Complete protection for your vehicles with comprehensive coverage and zero depreciation benefits.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Car & Two-Wheeler Insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">24/7 Roadside Assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Engine Protection Cover</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Learn More
              </Button>
            </div>

            {/* Home Insurance */}
            <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Home Insurance</h3>
              <p className="text-white/70 mb-6">
                Protect your property and belongings against natural disasters, theft, and accidental damage.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Building & Contents Coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Natural Calamity Protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Liability Coverage Included</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Learn More
              </Button>
            </div>

            {/* Travel Insurance */}
            <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Travel Insurance</h3>
              <p className="text-white/70 mb-6">
                Comprehensive travel protection for domestic and international trips with medical and baggage coverage.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Emergency Medical Coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Trip Cancellation Protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Lost Baggage Compensation</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Learn More
              </Button>
            </div>

            {/* Investment Plans */}
            <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6">
                <PiggyBank className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Investment Plans</h3>
              <p className="text-white/70 mb-6">
                Wealth creation through ULIPs, endowment plans, and pension solutions with life coverage benefits.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Market-Linked Returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Tax Benefits Under 80C</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">Guaranteed Maturity Benefits</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Protection Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specialized Protection</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Additional coverage for unique needs and life situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card border border-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Baby className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Child Plans</h3>
              <p className="text-white/60 text-sm">
                Secure your child's education and future with dedicated savings plans.
              </p>
            </div>

            <div className="glass-card border border-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Senior Citizen</h3>
              <p className="text-white/60 text-sm">
                Specialized health plans for elderly with pre-existing disease coverage.
              </p>
            </div>

            <div className="glass-card border border-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Insurance</h3>
              <p className="text-white/60 text-sm">
                Protect your business assets and liability with comprehensive coverage.
              </p>
            </div>

            <div className="glass-card border border-white/10 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cyber Insurance</h3>
              <p className="text-white/60 text-sm">
                Protection against online fraud, identity theft, and cyber attacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Full Coverage?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Experience the benefits of comprehensive insurance protection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card border border-white/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Protection</h3>
              <p className="text-white/70">
                Unified coverage across all aspects of your life with a single trusted provider.
              </p>
            </div>

            <div className="glass-card border border-white/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Better Value</h3>
              <p className="text-white/70">
                Bundle discounts and loyalty rewards when you combine multiple insurance products.
              </p>
            </div>

            <div className="glass-card border border-white/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#39FF14]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family Security</h3>
              <p className="text-white/70">
                Comprehensive protection for every family member across all life stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Full Coverage Advantages</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to manage your insurance portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card border border-white/10 rounded-xl p-6 flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Single Dashboard</h3>
                <p className="text-white/60 text-sm">
                  Manage all your policies from one convenient location with unified billing.
                </p>
              </div>
            </div>

            <div className="glass-card border border-white/10 rounded-xl p-6 flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Multi-Policy Discounts</h3>
                <p className="text-white/60 text-sm">
                  Save up to 20% when you bundle multiple insurance products together.
                </p>
              </div>
            </div>

            <div className="glass-card border border-white/10 rounded-xl p-6 flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                <p className="text-white/60 text-sm">
                  Personal relationship manager for all your insurance needs and claims.
                </p>
              </div>
            </div>

            <div className="glass-card border border-white/10 rounded-xl p-6 flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Flexible Renewals</h3>
                <p className="text-white/60 text-sm">
                  Simplified renewal process with automatic premium adjustments and reminders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#39FF14] mb-2">50+</div>
              <div className="text-white/60">Insurance Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#39FF14] mb-2">20%</div>
              <div className="text-white/60">Bundle Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#39FF14] mb-2">5M+</div>
              <div className="text-white/60">Protected Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#39FF14] mb-2">24/7</div>
              <div className="text-white/60">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#39FF14]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card border border-[#39FF14]/30 rounded-3xl p-12 text-center">
              <Award className="w-16 h-16 text-[#39FF14] mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Get Complete Protection Today</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Explore our full range of insurance products and find the perfect coverage combination for your needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button className="bg-[#39FF14] hover:bg-[#32dd12] text-black font-semibold px-8 py-6 text-lg">
                  Explore All Products
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-6 text-lg">
                  Schedule Consultation
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>Personalized plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>Best prices guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
