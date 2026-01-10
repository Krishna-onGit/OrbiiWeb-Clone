import { ArrowLeft, Brain, Target, Shield, TrendingUp, Users, Zap, CheckCircle, Sparkles, Activity, BarChart3, Award, Clock, FileText, Lock, Cpu, Eye, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

interface SmartProtectionPageProps {
  onBack: () => void;
}

export default function SmartProtectionPage({ onBack }: SmartProtectionPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none">
        <div className="container mx-auto px-6 py-4">
          <button onClick={onBack} className="text-[#39FF14] hover:text-[#2ee610] flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-8">
              <Brain className="w-4 h-4 text-[#39FF14]" />
              <span className="text-[#39FF14] text-sm font-medium tracking-wide">AI-POWERED INTELLIGENCE</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">Smart Protection</h1>
            <p className="text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-12">
              AI-powered insurance that analyzes your lifestyle, risk factors, and family needs to recommend perfect coverage tailored specifically for you. Protection that adapts as your life evolves.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold px-10 py-7 text-lg">
                Get Smart Recommendations
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-10 py-7 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Intelligence Section */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-8">
                <Cpu className="w-4 h-4 text-[#39FF14]" />
                <span className="text-[#39FF14] text-sm font-medium tracking-wide">INTELLIGENT ANALYSIS ENGINE</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-white">AI Risk Assessment & Matching</h2>
              <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
                Advanced machine learning algorithms analyze 150+ risk parameters to create your unique protection profile and recommend optimal coverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card border border-white/20 rounded-3xl p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">What AI Analyzes</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Age, gender, occupation, and income patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Lifestyle habits: smoking, alcohol, fitness levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Family medical history and genetic risk factors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Financial obligations: loans, dependents, expenses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Geographic risk: pollution, climate, accident rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Travel patterns and international exposure</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Smart Recommendations</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Optimal coverage amounts for each insurance type</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Priority ranking based on life stage and risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Budget-optimized plans with best value riders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Gap analysis of existing coverage vs. needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Time-sensitive alerts for life event changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Annual review with automatic plan adjustments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Modules */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Advanced Personalization Modules</h2>
              <p className="text-xl text-white/60">
                Four intelligent systems working together to deliver truly personalized protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Lifestyle Risk Profiling */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Activity className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Lifestyle Risk Profiling</h3>
                <p className="text-white/60 mb-8 text-lg">Dynamic risk assessment based on your daily habits and behaviors.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Health Factors</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>BMI, fitness levels, and exercise frequency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Smoking, alcohol consumption patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Sleep quality and stress indicators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Chronic condition management adherence</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Behavioral Patterns</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Travel frequency and destinations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Driving patterns and safety record</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Adventure sports participation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Work environment hazards</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Impact on Coverage</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Premium discounts for healthy lifestyles up to 20%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Customized rider recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Preventive care incentives and bonuses</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Family Protection Matrix */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Users className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Family Protection Matrix</h3>
                <p className="text-white/60 mb-8 text-lg">Holistic coverage planning for every family member across life stages.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Family Analysis</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Number of dependents and earning members</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Age gaps and life stage synchronization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Senior parents' healthcare requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Children's future education planning</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Coverage Coordination</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Individual vs. family floater optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Multi-generational health plan structuring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Income replacement calculation for earners</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Estate planning and wealth transfer</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Smart Features</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Auto-adjust coverage on family events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Bundle discounts across family policies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Unified dashboard for all family coverage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial Planning Integration */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <BarChart3 className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Financial Planning Integration</h3>
                <p className="text-white/60 mb-8 text-lg">Insurance recommendations aligned with your financial goals and budget.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Budget Analysis</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Monthly income and expense tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Affordable premium calculation (5-7% rule)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Existing financial obligations mapping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Emergency fund adequacy assessment</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Goal Alignment</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Retirement planning integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Child education corpus planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Home purchase protection planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Debt clearance strategy alignment</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Tax Optimization</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Section 80C, 80D deduction maximization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Tax-free maturity planning under 10(10D)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Post-tax cost analysis and savings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Predictive Life Event Planning */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Clock className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Predictive Life Event Planning</h3>
                <p className="text-white/60 mb-8 text-lg">Anticipate coverage needs before major life changes occur.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Life Stage Triggers</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Marriage: Combined coverage planning alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Pregnancy: Maternity and child coverage prep</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Home purchase: Property insurance initiation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Job change: Coverage continuity management</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Proactive Alerts</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Age milestone premium warnings (30, 40, 50)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Policy lapse risk with renewal reminders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Coverage gap identification and fixes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Market rate changes for better deals</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Continuous Adaptation</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Annual portfolio health check-ups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Automatic sum assured adjustments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Rider additions based on evolving needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Explainability */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-8">
                <Eye className="w-4 h-4 text-[#39FF14]" />
                <span className="text-[#39FF14] text-sm font-medium tracking-wide">TRANSPARENT AI</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-white">Explainable AI Decisions</h2>
              <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
                Every recommendation comes with clear explanations of why it's right for you. No black box algorithms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card border border-white/10 rounded-2xl p-8">
                <MessageSquare className="w-12 h-12 text-[#39FF14] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">Plain English Explanations</h3>
                <p className="text-white/60">
                  Every coverage recommendation includes a detailed explanation in simple language about why it's suited for your situation.
                </p>
              </div>

              <div className="glass-card border border-white/10 rounded-2xl p-8">
                <BarChart3 className="w-12 h-12 text-[#39FF14] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">Risk Factor Breakdown</h3>
                <p className="text-white/60">
                  See exactly which factors influenced your premium and coverage recommendations with transparent scoring.
                </p>
              </div>

              <div className="glass-card border border-white/10 rounded-2xl p-8">
                <Shield className="w-12 h-12 text-[#39FF14] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">Scenario Comparisons</h3>
                <p className="text-white/60">
                  Compare different coverage scenarios side-by-side with clear pros/cons to make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39FF14] mb-2">98.4%</div>
              <div className="text-white/60">Recommendation Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39FF14] mb-2">150+</div>
              <div className="text-white/60">Risk Parameters Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39FF14] mb-2">3 min</div>
              <div className="text-white/60">Average Analysis Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39FF14] mb-2">₹4.2L</div>
              <div className="text-white/60">Avg. Customer Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-transparent to-[#39FF14]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card border border-[#39FF14]/30 rounded-3xl p-12 text-center">
              <Award className="w-16 h-16 text-[#39FF14] mx-auto mb-6" />
              <h2 className="text-5xl font-bold mb-4 text-white">Experience Smart Protection</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let our AI analyze your unique profile and deliver personalized insurance recommendations in minutes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button className="bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold px-10 py-7 text-lg">
                  Start Smart Analysis
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-10 py-7 text-lg">
                  Talk to Expert
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>Free personalized analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>No obligation to buy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>Results in 3 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
