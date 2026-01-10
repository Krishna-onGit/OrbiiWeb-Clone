import { ArrowLeft, Shield, Brain, Zap, BarChart3, Lock, CheckCircle, Activity, FileText, Gauge, AlertCircle, Clock, DollarSign, Calculator, PieChart, Repeat, Scale, Bot, Target, RefreshCw, Settings, TrendingUp, Eye, Database } from 'lucide-react';
import { Button } from './ui/button';

interface ActuarialTechPageProps {
  onBack: () => void;
}

export default function ActuarialTechPage({ onBack }: ActuarialTechPageProps) {
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
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-8">
              <Calculator className="w-4 h-4 text-[#39FF14]" />
              <span className="text-[#39FF14] text-sm font-medium tracking-wide">VIORATECH ACTUARIAL OS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              The Operating System for
              <span className="text-[#39FF14]"> Actuarial Intelligence</span> in Insurance
            </h1>
            <p className="text-2xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
              Actuaries don&apos;t just calculate premiums. They define risk appetite, pricing discipline, capital efficiency, and long-term profitability.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Yet most actuarial work today still lives in:</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Offline spreadsheets</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-white/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Static models</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Delayed data</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-8 h-8 text-white/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Disconnected systems</h3>
              </div>
            </div>

            <div className="glass-card border-2 border-[#39FF14]/30 rounded-3xl p-12 text-center bg-gradient-to-br from-[#39FF14]/10 to-[#39FF14]/5">
              <p className="text-2xl md:text-3xl text-white leading-relaxed">
                <span className="font-bold text-[#39FF14]">Vioratech Actuarial OS</span> transforms actuarial work from periodic analysis into continuous, system-level intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Actuarial Problem Today */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">The Actuarial Problem Today</h2>
              <p className="text-xl text-white/60">Inside most insurers:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/40 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-white/70 text-lg">Pricing models are updated quarterly or annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/40 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-white/70 text-lg">Experience studies lag real business outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/40 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-white/70 text-lg">Portfolio risk is visible only after losses emerge</span>
                  </li>
                </ul>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/40 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-white/70 text-lg">Actuarial insights don&apos;t flow directly into underwriting or claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/40 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-white/70 text-lg">Decision-makers rely on static reports, not live signals</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl text-[#39FF14] font-bold">
                This creates reactive insurance, not controlled insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the Actuarial OS Is */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">What the Actuarial OS Is</h2>
              <p className="text-xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
                The Vioratech Actuarial OS is a production-grade actuarial intelligence engine embedded directly into insurance operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <h3 className="text-2xl font-bold mb-8 text-white">It enables actuaries to:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Model risk continuously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Monitor portfolio health in real time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Influence underwriting and pricing instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Simulate outcomes before decisions are made</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card border-2 border-[#39FF14]/30 rounded-3xl p-10 bg-gradient-to-br from-[#39FF14]/10 to-[#39FF14]/5">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-2xl text-white/70 mb-4">It is not a reporting tool.</p>
                  <p className="text-3xl font-bold text-[#39FF14]">It is the decision backbone of the insurer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where the Actuarial OS Sits */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Where the Actuarial OS Sits in the Insurer Stack</h2>
              <p className="text-xl text-white/60">The Actuarial OS operates across the entire insurance value chain:</p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Before sale</h3>
                    <p className="text-white/60">Pricing & product design</p>
                  </div>
                </div>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">At sale</h3>
                    <p className="text-white/60">Underwriting risk calibration</p>
                  </div>
                </div>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">After sale</h3>
                    <p className="text-white/60">Portfolio monitoring</p>
                  </div>
                </div>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">At claim</h3>
                    <p className="text-white/60">Loss learning and recalibration</p>
                  </div>
                </div>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">At renewal</h3>
                    <p className="text-white/60">Pricing and retention optimization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl text-[#39FF14] font-bold">Actuarial intelligence becomes always-on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Core Capabilities of the Actuarial OS</h2>
            </div>

            <div className="space-y-8">
              {/* Capability 1 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold text-sm">1</div>
                      <h3 className="text-3xl font-bold text-white">Risk & Loss Modeling Engine</h3>
                    </div>
                    <p className="text-xl text-white/60">The OS enables full actuarial modeling at scale.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">What It Does</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Frequency modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Severity modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Aggregate loss distributions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Tail risk analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cohort-level risk views</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Why It Matters</h4>
                    <p className="text-white/70 text-lg">Actuaries can see how risk is evolving, not just what happened last year.</p>
                  </div>
                </div>
              </div>

              {/* Capability 2 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold text-sm">2</div>
                      <h3 className="text-3xl font-bold text-white">Experience & Exposure Rating (Live)</h3>
                    </div>
                    <p className="text-xl text-white/60 mb-6">Traditional experience studies are slow and backward-looking.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">With Actuarial OS</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Experience data updates continuously</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Exposure-adjusted loss ratios are live</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Credibility-weighted insights at cohort level</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Early warning signals before deterioration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Outcome</h4>
                    <p className="text-white/70 text-lg">Pricing and underwriting assumptions stay aligned with reality.</p>
                  </div>
                </div>
              </div>

              {/* Capability 3 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold text-sm">3</div>
                      <h3 className="text-3xl font-bold text-white">Portfolio Intelligence & Cohort Analysis</h3>
                    </div>
                    <p className="text-xl text-white/60 mb-6">Actuarial OS shifts focus from individual policies to portfolio behavior.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Capabilities</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Risk clustering and segmentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cohort profitability tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Mix-of-business analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Concentration and accumulation risk</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Impact</h4>
                    <p className="text-white/70 text-lg">Insurers control portfolio shape, not just individual risks.</p>
                  </div>
                </div>
              </div>

              {/* Capability 4 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold text-sm">4</div>
                      <h3 className="text-3xl font-bold text-white">Pricing Model Management</h3>
                    </div>
                    <p className="text-xl text-white/60 mb-6">Actuaries regain control of pricing logic—without code chaos.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Features</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Centralized pricing assumptions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Factor-level transparency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Version control of pricing models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Impact analysis before deployment</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Benefit</h4>
                    <p className="text-white/70 text-lg mb-4">No more black-box pricing changes.</p>
                    <p className="text-white/70 text-lg">Every change is explainable and defensible.</p>
                  </div>
                </div>
              </div>

              {/* Capability 5 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold text-sm">5</div>
                      <h3 className="text-3xl font-bold text-white">Scenario & Stress Testing</h3>
                    </div>
                    <p className="text-xl text-white/60 mb-6">Before changing prices or underwriting rules, actuaries can simulate outcomes.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Simulations Include</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Loss ratio sensitivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Capital strain scenarios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Adverse selection impact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Catastrophic loss scenarios</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Result</h4>
                    <p className="text-white/70 text-lg">Decisions are tested before they are exposed to the market.</p>
                  </div>
                </div>
              </div>

              {/* Capability 6 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Scale className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold text-sm">6</div>
                      <h3 className="text-3xl font-bold text-white">Capital & Profitability Modeling</h3>
                    </div>
                    <p className="text-xl text-white/60 mb-6">The Actuarial OS connects risk to capital.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Capabilities</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Economic capital estimation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Margin and profitability attribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Risk-adjusted return analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Long-term sustainability modeling</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Impact</h4>
                    <p className="text-white/70 text-lg">This aligns actuarial work directly with CFO and CRO priorities.</p>
                  </div>
                </div>
              </div>

              {/* Capability 7 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8 mb-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Repeat className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold text-sm">7</div>
                      <h3 className="text-3xl font-bold text-white">Claims → Actuarial Feedback Loop</h3>
                    </div>
                    <p className="text-xl text-white/60 mb-6">Claims are not the end of actuarial responsibility.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">How It Works</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Claims outcomes update severity assumptions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Fraud and leakage signals feed loss models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Emerging loss patterns trigger recalibration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Result</h4>
                    <p className="text-white/70 text-lg">Loss learning becomes systematic, not manual.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Sections */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {/* Actuarial OS + Underwriting */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <h2 className="text-4xl font-bold mb-8 text-white">Actuarial OS + Underwriting</h2>
                <p className="text-xl text-white/60 mb-8">How They Work Together</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#39FF14] mb-4">The Actuarial OS feeds underwriting with:</h3>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Risk thresholds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Pricing guardrails</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cohort risk signals</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#39FF14] mb-4">Underwriting outcomes feed actuarial models with:</h3>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Acceptance patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Selection bias indicators</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 glass-card border border-[#39FF14]/30 rounded-xl p-6 bg-[#39FF14]/5">
                  <p className="text-white/90 font-medium text-lg">
                    This creates alignment between actuarial intent and underwriting execution.
                  </p>
                </div>
              </div>

              {/* Actuarial OS + Pricing */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <h2 className="text-4xl font-bold mb-8 text-white">Actuarial OS + Pricing</h2>
                <p className="text-xl text-white/60 mb-8">Dynamic Control</p>

                <div className="space-y-6">
                  <p className="text-white/70 text-lg">Instead of annual repricing cycles:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-lg">Actuarial OS continuously validates pricing assumptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-lg">Detects erosion or overpricing early</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-lg">Enables controlled, data-backed adjustments</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 glass-card border border-[#39FF14]/30 rounded-xl p-6 bg-[#39FF14]/5">
                  <p className="text-white/90 font-medium text-lg">
                    Pricing becomes adaptive but disciplined.
                  </p>
                </div>
              </div>

              {/* Actuarial OS + Leadership Dashboards */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <h2 className="text-4xl font-bold mb-8 text-white">Actuarial OS + Leadership Dashboards</h2>
                <p className="text-xl text-white/60 mb-8">Actuarial insights are no longer locked inside actuarial teams.</p>

                <div>
                  <h3 className="text-xl font-bold text-[#39FF14] mb-6">Executives see:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-card border border-white/10 rounded-xl p-6">
                      <CheckCircle className="w-8 h-8 text-[#39FF14] mb-3" />
                      <p className="text-white/70">Portfolio risk posture</p>
                    </div>
                    <div className="glass-card border border-white/10 rounded-xl p-6">
                      <CheckCircle className="w-8 h-8 text-[#39FF14] mb-3" />
                      <p className="text-white/70">Profitability trends</p>
                    </div>
                    <div className="glass-card border border-white/10 rounded-xl p-6">
                      <CheckCircle className="w-8 h-8 text-[#39FF14] mb-3" />
                      <p className="text-white/70">Capital stress indicators</p>
                    </div>
                    <div className="glass-card border border-white/10 rounded-xl p-6">
                      <CheckCircle className="w-8 h-8 text-[#39FF14] mb-3" />
                      <p className="text-white/70">Forward-looking scenarios</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 glass-card border border-[#39FF14]/30 rounded-xl p-6 bg-[#39FF14]/5">
                  <p className="text-white/90 font-medium text-lg">
                    All derived from actuarial logic, not vanity metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation & AI */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Automation */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Zap className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">Automation Inside the Actuarial OS</h2>
                <p className="text-white/60 mb-8 text-lg">The OS automates what should never be manual:</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Data ingestion and cleansing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Experience study refreshes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Model recalibration triggers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Reporting and regulatory outputs</span>
                  </li>
                </ul>
                <p className="text-[#39FF14] font-semibold text-lg">
                  Actuaries spend time thinking, not reconciling spreadsheets.
                </p>
              </div>

              {/* AI */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Brain className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">AI Inside the Actuarial OS</h2>
                <p className="text-white/60 mb-8 text-lg">AI augments actuarial judgment — it does not replace it.</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">AI Capabilities</h3>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Pattern detection across large portfolios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Early anomaly identification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Non-obvious cohort risk signals</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Safeguards</h3>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Full explainability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Human validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Actuarial override controls</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#39FF14] font-semibold text-lg mt-8">
                  AI accelerates insight without breaking actuarial discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Readiness */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card border-2 border-[#39FF14]/30 rounded-3xl p-16 bg-gradient-to-br from-[#39FF14]/10 to-[#39FF14]/5">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-[#39FF14]/20 border border-[#39FF14]/40 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Lock className="w-10 h-10 text-[#39FF14]" />
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white">Governance, Audit & Regulation Readiness</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-[#39FF14] mb-4">Every actuarial decision is:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      <span className="text-white/90 text-lg">Logged</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      <span className="text-white/90 text-lg">Versioned</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      <span className="text-white/90 text-lg">Traceable</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      <span className="text-white/90 text-lg">Reproducible</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#39FF14] mb-4">This supports:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      <span className="text-white/90 text-lg">Internal audits</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      <span className="text-white/90 text-lg">Regulatory reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      <span className="text-white/90 text-lg">Pricing justification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14]" />
                      <span className="text-white/90 text-lg">Board-level confidence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Who Uses the Actuarial OS</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Chief Actuaries</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Pricing actuaries</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <PieChart className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Portfolio actuaries</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Risk & capital teams</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Strategy leadership</h3>
              </div>
            </div>

            <div className="text-center">
              <p className="text-3xl text-[#39FF14] font-bold">One system. One actuarial truth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurers Adopt */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Why Insurers Adopt the Actuarial OS</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Faster pricing cycles</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Better risk control</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Improved loss ratios</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <Scale className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Stronger capital efficiency</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Fewer surprises</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Higher actuarial influence on business decisions</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Actuarial Tools */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">Advanced Actuarial Tools</h2>
              <p className="text-xl text-white/60">Professional-grade tools for actuaries, underwriters, and data scientists</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Loss Models */}
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Calculator className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Loss Models</h3>
                <p className="text-white/60 text-sm leading-relaxed">Frequency & severity modeling with advanced distributions</p>
              </div>

              {/* Trend Analysis */}
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <TrendingUp className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Trend Analysis</h3>
                <p className="text-white/60 text-sm leading-relaxed">Historical pattern recognition and future projections</p>
              </div>

              {/* Data Integration */}
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Database className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Data Integration</h3>
                <p className="text-white/60 text-sm leading-relaxed">Seamless connection to policy admin and claims systems</p>
              </div>

              {/* Portfolio Analytics */}
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <BarChart3 className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Portfolio Analytics</h3>
                <p className="text-white/60 text-sm leading-relaxed">Risk concentration and diversification analysis</p>
              </div>

              {/* Mortality Tables */}
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Activity className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Mortality Tables</h3>
                <p className="text-white/60 text-sm leading-relaxed">Life and annuity actuarial calculations</p>
              </div>

              {/* Rate Making */}
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Target className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Rate Making</h3>
                <p className="text-white/60 text-sm leading-relaxed">Pricing optimization and rate adequacy testing</p>
              </div>

              {/* Reserving */}
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Lock className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Reserving</h3>
                <p className="text-white/60 text-sm leading-relaxed">IBNR, case reserves, and development triangles</p>
              </div>

              {/* AI Automation */}
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Bot className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">AI Automation</h3>
                <p className="text-white/60 text-sm leading-relaxed">Machine learning for pattern detection and anomalies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-20 text-white">The Shift the Actuarial OS Enables</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <p className="text-white/50 mb-4 text-sm uppercase tracking-wide">From</p>
                <p className="text-2xl font-bold mb-6 text-white">Periodic</p>
                <div className="w-16 h-1 bg-gradient-to-r from-white/20 to-[#39FF14] mx-auto mb-6"></div>
                <p className="text-white/50 mb-4 text-sm uppercase tracking-wide">To</p>
                <p className="text-2xl font-bold text-[#39FF14]">Continuous</p>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <p className="text-white/50 mb-4 text-sm uppercase tracking-wide">From</p>
                <p className="text-2xl font-bold mb-6 text-white">Reactive</p>
                <div className="w-16 h-1 bg-gradient-to-r from-white/20 to-[#39FF14] mx-auto mb-6"></div>
                <p className="text-white/50 mb-4 text-sm uppercase tracking-wide">To</p>
                <p className="text-2xl font-bold text-[#39FF14]">Predictive</p>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <p className="text-white/50 mb-4 text-sm uppercase tracking-wide">From</p>
                <p className="text-2xl font-bold mb-6 text-white">Isolated</p>
                <div className="w-16 h-1 bg-gradient-to-r from-white/20 to-[#39FF14] mx-auto mb-6"></div>
                <p className="text-white/50 mb-4 text-sm uppercase tracking-wide">To</p>
                <p className="text-2xl font-bold text-[#39FF14]">Embedded</p>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <p className="text-white/50 mb-4 text-sm uppercase tracking-wide">From</p>
                <p className="text-2xl font-bold mb-6 text-white">Spreadsheet-driven</p>
                <div className="w-16 h-1 bg-gradient-to-r from-white/20 to-[#39FF14] mx-auto mb-6"></div>
                <p className="text-white/50 mb-4 text-sm uppercase tracking-wide">To</p>
                <p className="text-2xl font-bold text-[#39FF14]">System-driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-white">Seamless Integration</h2>
              <p className="text-xl text-white/60">Connect with your existing systems through our robust API infrastructure</p>
            </div>

            {/* Integration Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Policy Admin */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <FileText className="w-10 h-10 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Policy Admin</h3>
                <p className="text-white/60 leading-relaxed">Connect to any policy administration system</p>
              </div>

              {/* Core Systems */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Database className="w-10 h-10 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Core Systems</h3>
                <p className="text-white/60 leading-relaxed">Real-time data sync with legacy platforms</p>
              </div>

              {/* Analytics Tools */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <BarChart3 className="w-10 h-10 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Analytics Tools</h3>
                <p className="text-white/60 leading-relaxed">Export to Tableau, Power BI, and more</p>
              </div>
            </div>

            {/* API Methods */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="glass-card border border-white/20 rounded-full px-8 py-4 hover:border-[#39FF14]/40 transition-all">
                <span className="text-white font-medium">REST API</span>
              </div>
              <div className="glass-card border border-white/20 rounded-full px-8 py-4 hover:border-[#39FF14]/40 transition-all">
                <span className="text-white font-medium">GraphQL</span>
              </div>
              <div className="glass-card border border-white/20 rounded-full px-8 py-4 hover:border-[#39FF14]/40 transition-all">
                <span className="text-white font-medium">Webhooks</span>
              </div>
              <div className="glass-card border border-white/20 rounded-full px-8 py-4 hover:border-[#39FF14]/40 transition-all">
                <span className="text-white font-medium">SFTP</span>
              </div>
              <div className="glass-card border border-white/20 rounded-full px-8 py-4 hover:border-[#39FF14]/40 transition-all">
                <span className="text-white font-medium">EDI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-transparent via-[#39FF14]/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card border-2 border-[#39FF14]/40 rounded-3xl p-16 text-center bg-gradient-to-br from-[#39FF14]/10 to-[#39FF14]/5">
              <div className="w-20 h-20 bg-[#39FF14]/20 border border-[#39FF14]/40 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Calculator className="w-10 h-10 text-[#39FF14]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Actuarial intelligence should run the insurer — not sit on the side.</h2>
              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                Deploy the Vioratech Actuarial OS and turn actuarial science into operational control.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-[#39FF14] hover:bg-[#32dd12] text-black font-semibold px-10 py-7 text-lg rounded-xl">
                  Request an Actuarial Deep Dive
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-10 py-7 text-lg rounded-xl">
                  Schedule a Technical Walkthrough
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
