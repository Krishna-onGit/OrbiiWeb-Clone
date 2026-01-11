import { ArrowLeft, Shield, Brain, Zap, BarChart3, TrendingUp, Lock, CheckCircle, Users, Globe, FileText, Eye, Gauge, AlertCircle, Clock, DollarSign, Database, Cpu, Target, RefreshCw, Award, Sparkles, Network, Boxes } from 'lucide-react';
import { Button } from './ui/button';

interface ForInsurersPageProps {
  onBack: () => void;
}

export default function ForInsurersPage({ onBack }: ForInsurersPageProps) {
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
              <Brain className="w-4 h-4 text-[#39FF14]" />
              <span className="text-[#39FF14] text-sm font-medium tracking-wide">VIORATECH FOR INSURERS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              The Intelligence, Automation, and AI Layer for
              <span className="text-[#39FF14]"> Modern Insurance Companies</span>
            </h1>
            <p className="text-2xl text-white/70 mb-6 max-w-4xl mx-auto leading-relaxed">
              Insurance today is not limited by risk capacity — it is limited by fragmented systems, slow decisions, and manual processes.
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              Vioratech is a full-stack, AI-native insurance operating platform built for insurers to automate operations, integrate intelligence across systems, and continuously improve underwriting, pricing, and claims outcomes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#39FF14] hover:bg-[#32dd12] text-black font-semibold px-10 py-7 text-lg rounded-xl">
                Request a Demo
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-10 py-7 text-lg rounded-xl">
                Schedule Technical Deep Dive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem Section */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">The Core Problem Inside Insurers</h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                Most insurers operate with disconnected systems and manual processes that limit growth and efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card border border-white/20 rounded-2xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <AlertCircle className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">Disconnected Systems</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Actuarial models disconnected from live underwriting and claims data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Manual underwriting workflows layered on top of static rules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Pricing engines updated infrequently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Claims systems that execute payouts but generate little intelligence</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">The Result</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Slow time-to-decision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Inconsistent risk selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Higher loss leakage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Limited automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Poor feedback between teams</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-card border-2 border-[#39FF14]/30 rounded-3xl p-12 text-center bg-gradient-to-br from-[#39FF14]/10 to-[#39FF14]/5">
              <p className="text-2xl md:text-3xl text-white leading-relaxed">
                <span className="font-bold text-[#39FF14]">Vioratech solves this</span> by unifying intelligence, automation, and AI into one operating layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Vioratech Is */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">What Vioratech Is</h2>
              <p className="text-2xl text-white/70 mb-4">
                Vioratech is not a point solution.
              </p>
              <p className="text-lg text-white/60 max-w-4xl mx-auto leading-relaxed">
                It is a central insurance intelligence and automation layer that sits across your entire insurance operation, converting insurance from a manual, static process into a self-learning, automated system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <BarChart3 className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Actuarial Modeling</h3>
                <p className="text-white/60 leading-relaxed">Live actuarial intelligence, not offline spreadsheets</p>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Shield className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Underwriting</h3>
                <p className="text-white/60 leading-relaxed">AI-driven risk assessment with human control</p>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <DollarSign className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Pricing</h3>
                <p className="text-white/60 leading-relaxed">Dynamic, adaptive pricing engines</p>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <FileText className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Policy Lifecycle</h3>
                <p className="text-white/60 leading-relaxed">End-to-end automation from quote to renewal</p>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Gauge className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Claims</h3>
                <p className="text-white/60 leading-relaxed">Intelligent claims as learning inputs</p>
              </div>

              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/50 transition-all group">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39FF14]/20 transition-all">
                  <Network className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Integrations</h3>
                <p className="text-white/60 leading-relaxed">Connects with existing insurer systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Platform Architecture</h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                How Vioratech Works: A Layered System
              </p>
            </div>

            <div className="space-y-8">
              {/* Layer 1 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold">1</div>
                      <h3 className="text-3xl font-bold text-white">Data & Integration Layer</h3>
                    </div>
                    <ul className="space-y-4 text-white/70 text-lg">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Ingests data from proposals, policies, claims, payments, and external sources</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Integrates with core insurance systems, CRMs, TPAs, hospital networks, reinsurers, and data providers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Real-time and batch ingestion supported</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Layer 2 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold">2</div>
                      <h3 className="text-3xl font-bold text-white">Intelligence & Modeling Layer</h3>
                    </div>
                    <p className="text-white/60 mb-6 text-lg italic">This layer produces decisions, not just insights.</p>
                    <ul className="space-y-4 text-white/70 text-lg">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Actuarial models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Risk scoring engines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>AI/ML models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Portfolio analytics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Simulation and forecasting engines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Layer 3 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold">3</div>
                      <h3 className="text-3xl font-bold text-white">Automation & Orchestration Layer</h3>
                    </div>
                    <ul className="space-y-4 text-white/70 text-lg">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Automates underwriting, pricing, claims, and policy workflows</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Orchestrates decisions across systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Enforces governance, approvals, and human-in-the-loop controls</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Layer 4 */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center text-black font-bold">4</div>
                      <h3 className="text-3xl font-bold text-white">Experience & Control Layer</h3>
                    </div>
                    <ul className="space-y-4 text-white/70 text-lg">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Dashboards for actuaries, underwriters, claims teams, and leadership</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Explainability views for AI decisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#39FF14] mt-1 flex-shrink-0" />
                        <span>Audit, compliance, and reporting tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actuary OS */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-8">
                <Cpu className="w-4 h-4 text-[#39FF14]" />
                <span className="text-[#39FF14] text-sm font-medium tracking-wide">FOUNDATION OF THE PLATFORM</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-white">Actuary OS</h2>
              <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
                The core engine of Vioratech that allows actuarial teams to operate on live insurance data, not offline spreadsheets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card border border-white/20 rounded-3xl p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Capabilities</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Frequency–severity modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Experience and exposure rating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Portfolio and cohort analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Stress testing and scenario simulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Capital adequacy and margin analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Product profitability modeling</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Impact</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Faster pricing cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Transparent assumptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Continuous portfolio visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Stronger regulatory confidence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Core Intelligence Modules</h2>
              <p className="text-xl text-white/60">
                Four integrated modules that power modern insurance operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* AI-Driven Underwriting */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Shield className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">AI-Driven Underwriting Automation</h3>
                <p className="text-white/60 mb-8 text-lg">Vioratech automates underwriting while preserving control.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">What Is Automated</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Risk assessment across multiple parameters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Accept / refer / decline decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Case prioritization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Flagging of anomalies and edge cases</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">AI Capabilities</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Predictive risk scoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Pattern detection across cohorts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Behavioral risk indicators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Explainable decision logic</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Governance</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Configurable thresholds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Human-in-the-loop overrides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Full decision audit trails</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dynamic Pricing */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <DollarSign className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Dynamic Pricing & Product Automation</h3>
                <p className="text-white/60 mb-8 text-lg">Pricing in Vioratech is adaptive, not static.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Pricing Automation</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Real-time premium computation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Cohort-based pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Personalized risk-adjusted premiums</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Elasticity-aware pricing logic</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Product Automation</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Product simulations before launch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Pricing impact analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Portfolio impact forecasting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card border border-[#39FF14]/30 rounded-xl p-6 bg-[#39FF14]/5">
                    <p className="text-white/90 font-medium">
                      This enables faster product innovation with controlled risk.
                    </p>
                  </div>
                </div>
              </div>

              {/* Claims Automation */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Gauge className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Claims Automation & Intelligence</h3>
                <p className="text-white/60 mb-8 text-lg">Vioratech treats claims as intelligence inputs, not just transactions.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Claims Automation</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>FNOL intake automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Claim segmentation and routing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Automated adjudication for standard cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Workflow orchestration across TPAs and providers</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">AI in Claims</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Fraud probability scoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Claim severity prediction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Outlier detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Loss trend analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Outcome</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Faster settlements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Reduced fraud</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Lower claims leakage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Closed-Loop Learning */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <RefreshCw className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Closed-Loop Learning System</h3>
                <p className="text-white/60 mb-8 text-lg">Traditional insurance systems stop at claims. Vioratech feeds claims outcomes back into the system.</p>

                <div className="space-y-6">
                  <p className="text-white/70 text-lg font-medium">Claims data continuously updates:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-lg">Pricing assumptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-lg">Underwriting thresholds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-lg">Risk models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-lg">Portfolio strategies</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card border border-[#39FF14]/30 rounded-xl p-6 bg-[#39FF14]/5 mt-8">
                  <p className="text-white font-semibold text-lg">
                    This creates a self-improving insurance engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Policy Lifecycle */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <FileText className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">End-to-End Policy Lifecycle Automation</h3>
                <p className="text-white/60 mb-8 text-lg">Every policy stage is connected and automated.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Quote generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Binding and issuance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Endorsements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Renewals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#39FF14] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-lg">Policy-level profitability tracking</span>
                  </li>
                </ul>
                <div className="glass-card border border-[#39FF14]/30 rounded-xl p-6 bg-[#39FF14]/5">
                  <p className="text-white/90 font-medium text-lg">All teams work on the same source of truth.</p>
                </div>
              </div>

              {/* AI Integrations */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Network className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">AI Integrations & Extensibility</h3>
                <p className="text-white/60 mb-8 text-lg">Vioratech is designed to integrate, not replace.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Integration Capabilities</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Core insurance systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>CRM and distribution platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>TPAs and hospital networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Fraud databases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Reinsurance systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Third-party AI and data services</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">AI Integration</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Plug-and-play ML models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>External AI services via APIs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Model versioning and governance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation with Control */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card border-2 border-[#39FF14]/30 rounded-3xl p-16 text-center bg-gradient-to-br from-[#39FF14]/10 to-[#39FF14]/5">
              <div className="w-20 h-20 bg-[#39FF14]/20 border border-[#39FF14]/40 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Lock className="w-10 h-10 text-[#39FF14]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Automation with Control</h2>
              <p className="text-2xl text-white/70 mb-3">Not Blind Automation</p>
              <p className="text-white/60 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
                Every automated decision in Vioratech is traceable, explainable, auditable, and overrideable.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="glass-card border border-white/20 rounded-2xl p-6 hover:border-[#39FF14]/40 transition-all">
                  <CheckCircle className="w-10 h-10 text-[#39FF14] mx-auto mb-4" />
                  <p className="font-bold text-lg">Traceable</p>
                </div>
                <div className="glass-card border border-white/20 rounded-2xl p-6 hover:border-[#39FF14]/40 transition-all">
                  <CheckCircle className="w-10 h-10 text-[#39FF14] mx-auto mb-4" />
                  <p className="font-bold text-lg">Explainable</p>
                </div>
                <div className="glass-card border border-white/20 rounded-2xl p-6 hover:border-[#39FF14]/40 transition-all">
                  <CheckCircle className="w-10 h-10 text-[#39FF14] mx-auto mb-4" />
                  <p className="font-bold text-lg">Auditable</p>
                </div>
                <div className="glass-card border border-white/20 rounded-2xl p-6 hover:border-[#39FF14]/40 transition-all">
                  <CheckCircle className="w-10 h-10 text-[#39FF14] mx-auto mb-4" />
                  <p className="font-bold text-lg">Overrideable</p>
                </div>
              </div>
              <p className="text-white/60 text-lg">
                This ensures regulatory safety and operational trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Enterprise */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Built for Enterprise Insurers</h2>
              <p className="text-xl text-white/60">
                Production-grade infrastructure designed for real-world insurance operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Boxes className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">API-First Architecture</h3>
                <p className="text-white/60">Modular, scalable design</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Cloud-Native</h3>
                <p className="text-white/60">High availability and fault tolerance</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Enterprise Security</h3>
                <p className="text-white/60">Industry-standard compliance</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Scalability</h3>
                <p className="text-white/60">Production-scale performance</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Compliance-Ready</h3>
                <p className="text-white/60">Audit logs and reporting</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Production-Ready</h3>
                <p className="text-white/60">Designed for real insurers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses Vioratech */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Who Uses Vioratech</h2>
              <p className="text-xl text-white/60">
                Inside an insurer, Vioratech serves multiple teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Actuarial & Pricing Teams</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Underwriting Teams</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Gauge className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Claims & Fraud Teams</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Product & Risk Leadership</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Strategy Teams</h3>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl text-white">Finance Teams</h3>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl md:text-3xl text-[#39FF14] font-bold">
                One platform. Shared intelligence. Automated execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vioratech */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Why Insurers Choose Vioratech</h2>
              <p className="text-xl text-white/60">
                Measurable outcomes that transform insurance operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Reduced Turnaround Time</h3>
                <p className="text-white/60">Faster underwriting decisions</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Improved Pricing Accuracy</h3>
                <p className="text-white/60">Data-driven premium calculations</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Lower Loss Ratios</h3>
                <p className="text-white/60">Better risk selection</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Higher Efficiency</h3>
                <p className="text-white/60">Automated operations</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <RefreshCw className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Continuous Learning</h3>
                <p className="text-white/60">Self-improving system</p>
              </div>
              <div className="glass-card border border-white/20 rounded-2xl p-8 hover:border-[#39FF14]/40 transition-all">
                <div className="w-14 h-14 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Future-Ready</h3>
                <p className="text-white/60">Modern insurance operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-white">The Future of Insurance Operations</h2>
            <p className="text-2xl text-white/70 mb-16">Insurance is evolving:</p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <p className="text-white/50 mb-3 text-sm uppercase tracking-wide">From</p>
                <p className="text-3xl font-bold mb-6 text-white">Manual</p>
                <div className="w-16 h-1 bg-gradient-to-r from-white/20 to-[#39FF14] mx-auto mb-6"></div>
                <p className="text-white/50 mb-3 text-sm uppercase tracking-wide">To</p>
                <p className="text-3xl font-bold text-[#39FF14]">Automated</p>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <p className="text-white/50 mb-3 text-sm uppercase tracking-wide">From</p>
                <p className="text-3xl font-bold mb-6 text-white">Static</p>
                <div className="w-16 h-1 bg-gradient-to-r from-white/20 to-[#39FF14] mx-auto mb-6"></div>
                <p className="text-white/50 mb-3 text-sm uppercase tracking-wide">To</p>
                <p className="text-3xl font-bold text-[#39FF14]">Adaptive</p>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <p className="text-white/50 mb-3 text-sm uppercase tracking-wide">From</p>
                <p className="text-3xl font-bold mb-6 text-white">Reactive</p>
                <div className="w-16 h-1 bg-gradient-to-r from-white/20 to-[#39FF14] mx-auto mb-6"></div>
                <p className="text-white/50 mb-3 text-sm uppercase tracking-wide">To</p>
                <p className="text-3xl font-bold text-[#39FF14]">Predictive</p>
              </div>
            </div>

            <p className="text-3xl md:text-4xl text-white font-bold">
              Vioratech is the system that enables this transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-transparent via-[#39FF14]/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card border-2 border-[#39FF14]/40 rounded-3xl p-16 text-center bg-gradient-to-br from-[#39FF14]/10 to-[#39FF14]/5">
              <div className="w-20 h-20 bg-[#39FF14]/20 border border-[#39FF14]/40 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Award className="w-10 h-10 text-[#39FF14]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Move Beyond Fragmented Systems</h2>
              <p className="text-xl md:text-2xl text-white/70 mb-4 max-w-3xl mx-auto leading-relaxed">
                Operate insurance as an intelligent, automated platform.
              </p>
              <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
                Deploy Vioratech as your insurance intelligence and automation layer.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-10">
                <Button className="bg-[#39FF14] hover:bg-[#32dd12] text-black font-semibold px-10 py-7 text-lg rounded-xl">
                  Request a Demo
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-10 py-7 text-lg rounded-xl">
                  Schedule Technical Deep Dive
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 justify-center text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14]" />
                  <span className="text-lg">Enterprise-grade platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14]" />
                  <span className="text-lg">Production-ready deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#39FF14]" />
                  <span className="text-lg">Dedicated support team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
