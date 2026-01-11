import { ArrowLeft, Zap, CheckCircle, Sparkles, Timer, FileCheck, Award, Bot, FileText, Smartphone, Globe, Lock } from 'lucide-react';
import { Button } from './ui/button';

interface InstantProcessingPageProps {
  onBack: () => void;
}

export default function InstantProcessingPage({ onBack }: InstantProcessingPageProps) {
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
              <Zap className="w-4 h-4 text-[#39FF14]" />
              <span className="text-[#39FF14] text-sm font-medium tracking-wide">LIGHTNING-FAST OPERATIONS</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">Instant Processing</h1>
            <p className="text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-12">
              Get instant quotes in 30 seconds, policy approval in 5 minutes, and claims settled in 24 hours. Experience the future of insurance with zero waiting time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold px-10 py-7 text-lg">
                Get Instant Quote
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-10 py-7 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Benchmarks */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-8">
                <Timer className="w-4 h-4 text-[#39FF14]" />
                <span className="text-[#39FF14] text-sm font-medium tracking-wide">INDUSTRY-LEADING SPEED</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-white">Processing Speed Benchmarks</h2>
              <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
                Powered by AI and automation, we&apos;ve reduced insurance processing from days to seconds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card border border-white/20 rounded-3xl p-10 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="text-7xl font-bold text-[#39FF14] mb-6">30s</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Instant Quote Generation</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  Enter your details and receive accurate premium quotes across 30+ insurers in under 30 seconds with real-time pricing.
                </p>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="text-7xl font-bold text-[#39FF14] mb-6">5min</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Policy Approval</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  AI-powered underwriting and automated KYC verification delivers policy approval in just 5 minutes with digital issuance.
                </p>
              </div>

              <div className="glass-card border border-white/20 rounded-3xl p-10 text-center hover:border-[#39FF14]/40 transition-all">
                <div className="text-7xl font-bold text-[#39FF14] mb-6">24h</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Claim Settlement</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  Straightforward claims processed and settled within 24 hours with AI verification and instant bank transfers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Technology Stack */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Automation Technology Stack</h2>
              <p className="text-xl text-white/60">
                Four core automation systems powering instant insurance operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Underwriting Engine */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Bot className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">AI Underwriting Engine</h3>
                <p className="text-white/60 mb-8 text-lg">Machine learning models assess risk in real-time with 99.7% accuracy.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Automated Risk Assessment</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Health profile analysis using medical history patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Lifestyle risk scoring across 80+ parameters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Occupation hazard evaluation and classification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Geographic and demographic risk factors</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Instant Decisioning</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Accept/refer/decline decision in under 10 seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Straight-through processing for 85% of applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Rule-based override with compliance checks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Explainable AI with decision transparency</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Continuous Learning</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Models updated daily with claims data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Fraud pattern detection and prevention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Improved accuracy through feedback loops</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Digital KYC & Verification */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <FileCheck className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Digital KYC & Verification</h3>
                <p className="text-white/60 mb-8 text-lg">Instant identity verification and document processing with zero paperwork.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Biometric Authentication</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Face recognition with liveness detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Aadhaar-based eKYC in 30 seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>DigiLocker integration for instant documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Video KYC for remote onboarding</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Document Intelligence</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>OCR extraction from uploaded documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Automated data validation and verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Tamper detection and forgery prevention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Cross-database verification in real-time</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Compliance & Security</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>IRDAI-approved digital KYC processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Bank-grade 256-bit encryption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Audit trails for regulatory compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Smart Claims Processing */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Sparkles className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Smart Claims Processing</h3>
                <p className="text-white/60 mb-8 text-lg">AI-powered claims assessment and instant settlement for eligible cases.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">AI Damage Assessment</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Photo/video analysis for damage estimation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Computer vision for repair cost calculation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Medical bill verification and validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Fraud detection through pattern analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Instant Settlement</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Auto-approval for claims under ₹25,000</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Same-day settlement with instant NEFT/UPI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Cashless facility at 5000+ network hospitals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Real-time status tracking via app</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Customer Experience</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>WhatsApp claims filing and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>AI chatbot for instant claim guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>99.2% claim settlement ratio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Real-Time Integration Platform */}
              <div className="glass-card border border-white/20 rounded-3xl p-10 hover:border-[#39FF14]/40 transition-all">
                <div className="w-16 h-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-2xl flex items-center justify-center mb-8">
                  <Globe className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Real-Time Integration Platform</h3>
                <p className="text-white/60 mb-8 text-lg">Seamless connectivity with insurers, banks, and government databases.</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Insurer Connectivity</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>API integration with 30+ insurance providers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Real-time premium fetching and comparison</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Live policy status synchronization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Automated policy issuance workflows</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Banking Integration</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>UPI, net banking, card payment gateways</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Instant payment verification and receipt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Auto-debit for renewals with reminders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>Claim settlement direct bank transfers</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#39FF14] mb-4 text-sm tracking-wide uppercase">Government APIs</h4>
                    <ul className="space-y-3 text-white/70">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>UIDAI Aadhaar verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>RTO vehicle registration data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#39FF14] rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>PAN and GST validation services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-First Experience */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-8">
                <Smartphone className="w-4 h-4 text-[#39FF14]" />
                <span className="text-[#39FF14] text-sm font-medium tracking-wide">MOBILE-FIRST PLATFORM</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-white">Anytime, Anywhere Access</h2>
              <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
                Complete insurance journey from your mobile device with native app experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card border border-white/10 rounded-2xl p-8">
                <FileText className="w-12 h-12 text-[#39FF14] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">Paperless Operations</h3>
                <p className="text-white/60">
                  100% digital journey from quote to claim with zero physical documentation required.
                </p>
              </div>

              <div className="glass-card border border-white/10 rounded-2xl p-8">
                <Globe className="w-12 h-12 text-[#39FF14] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">24/7 Availability</h3>
                <p className="text-white/60">
                  Buy policies, file claims, and get support anytime without business hour restrictions.
                </p>
              </div>

              <div className="glass-card border border-white/10 rounded-2xl p-8">
                <Lock className="w-12 h-12 text-[#39FF14] mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">Secure & Compliant</h3>
                <p className="text-white/60">
                  ISO 27001 certified infrastructure with IRDAI-approved digital processes.
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
              <div className="text-5xl font-bold text-[#39FF14] mb-2">3.2M+</div>
              <div className="text-white/60">Instant Quotes Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39FF14] mb-2">96.4%</div>
              <div className="text-white/60">Straight-Through Processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39FF14] mb-2">18 sec</div>
              <div className="text-white/60">Avg. Quote Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#39FF14] mb-2">99.2%</div>
              <div className="text-white/60">Claim Settlement Ratio</div>
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
              <h2 className="text-5xl font-bold mb-4 text-white">Experience Instant Processing</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join 3M+ customers who&apos;ve experienced lightning-fast insurance operations. Get your quote in 30 seconds.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button className="bg-[#39FF14] hover:bg-[#2ee610] text-black font-semibold px-10 py-7 text-lg">
                  Get Instant Quote Now
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-10 py-7 text-lg">
                  Watch How It Works
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>No paperwork</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>30-second quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#39FF14]" />
                  <span>Instant approval</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
