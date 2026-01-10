import { ArrowLeft, TrendingUp, PiggyBank, Shield, Target, IndianRupee, Calculator, CheckCircle, Award, Baby, Clock, DollarSign, Briefcase, Home as HomeIcon, GraduationCap, Users, Plus, Phone, Building2, Percent, FileCheck, HelpCircle, AlertCircle, BarChart3, FileText, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';

interface InvestmentPageProps {
  onBack: () => void;
  onSelectProduct?: (productId: string) => void;
}

export default function InvestmentPage({ onBack, onSelectProduct }: InvestmentPageProps) {
  const [calculatorInputs, setCalculatorInputs] = useState({
    monthlyInvestment: '',
    investmentPeriod: '15',
    expectedReturn: '12',
    currentAge: '30',
    goal: 'education'
  });

  // Comprehensive Investment Plan Types
  const investmentTypes = [
    {
      icon: TrendingUp,
      title: 'ULIP (Unit Linked Insurance Plans)',
      description: 'Market-linked returns with life cover. Invest in equity, debt or balanced funds with insurance protection and tax benefits.',
      features: ['Market-linked returns', 'Life cover included', 'Tax benefits u/s 80C', 'Fund switching allowed', 'Top-up facility', 'Partial withdrawals'],
      idealFor: 'Risk-takers wanting wealth creation with insurance, long-term investors (10+ years)',
      returns: '10-15% p.a.',
      premium: '₹20,000 - ₹5L/year',
      lockIn: '5 years',
      riskLevel: 'Medium to High'
    },
    {
      icon: Shield,
      title: 'Endowment Plans',
      description: 'Guaranteed returns with life cover. Fixed maturity benefit with bonuses. Safe and stable investment with capital protection.',
      features: ['Guaranteed returns', 'Life protection', 'Maturity benefit', 'Bonus declarations', 'Loan facility', 'Tax-free maturity'],
      idealFor: 'Conservative investors wanting guaranteed returns, first-time investors, risk-averse',
      returns: '5-7% p.a.',
      premium: '₹15,000 - ₹3L/year',
      lockIn: '10-20 years',
      riskLevel: 'Low'
    },
    {
      icon: IndianRupee,
      title: 'Money Back Policy',
      description: 'Periodic payouts during policy term plus life cover. Get money at regular intervals (20-25% of sum assured) while staying insured.',
      features: ['Regular payouts', 'Life cover throughout', 'Survival benefits', 'Maturity bonus', 'Liquidity', 'Tax benefits'],
      idealFor: 'Those needing regular income with protection, funding periodic expenses',
      returns: '4-6% p.a.',
      premium: '₹18,000 - ₹2.5L/year',
      lockIn: '15-20 years',
      riskLevel: 'Low'
    },
    {
      icon: Baby,
      title: 'Child Education Plans',
      description: 'Secure your child\'s education with milestone-based payouts. Premium waiver on parent\'s death ensures plan continues.',
      features: ['Education milestones', 'Premium waiver on death', 'Maturity benefit', 'Partial withdrawals', 'Life cover', 'Tax benefits'],
      idealFor: 'Parents planning child\'s education, securing future expenses',
      returns: '8-12% p.a.',
      premium: '₹12,000 - ₹1.5L/year',
      lockIn: '10-18 years',
      riskLevel: 'Low to Medium'
    },
    {
      icon: Clock,
      title: 'Pension/Retirement Plans',
      description: 'Build retirement corpus with regular pension post-retirement. Annuity options provide lifelong income security.',
      features: ['Regular pension', 'Annuity options', 'Tax benefits (80C + 80CCD)', 'Lump sum at maturity', 'Vesting benefit', 'Deferred annuity'],
      idealFor: 'Individuals planning retirement income, 30-55 age group',
      returns: '7-10% p.a.',
      premium: '₹25,000 - ₹5L/year',
      lockIn: 'Till retirement',
      riskLevel: 'Low to Medium'
    },
    {
      icon: Target,
      title: 'Guaranteed Return Plans',
      description: 'Fixed guaranteed returns declared at policy start. Zero market risk with assured maturity amount for capital preservation.',
      features: ['Guaranteed returns', 'No market risk', 'Fixed maturity value', 'Life cover', 'Loyalty additions', 'Tax-free maturity'],
      idealFor: 'Risk-averse investors wanting certainty, capital preservation seekers',
      returns: '5-6% p.a.',
      premium: '₹20,000 - ₹3L/year',
      lockIn: '10-15 years',
      riskLevel: 'Very Low'
    },
    {
      icon: Award,
      title: 'Whole Life Insurance',
      description: 'Lifelong protection with savings. Coverage till 99/100 years with maturity or death benefit for estate planning.',
      features: ['Lifetime cover (99 years)', 'Savings component', 'Estate planning', 'Tax-free maturity', 'Loan facility', 'Guaranteed additions'],
      idealFor: 'Those wanting lifelong protection with savings, estate planning',
      returns: '4-5% p.a.',
      premium: '₹30,000 - ₹5L/year',
      lockIn: 'Lifetime',
      riskLevel: 'Very Low'
    },
    {
      icon: DollarSign,
      title: 'NRI Investment Plans',
      description: 'Dollar/foreign currency denominated plans for NRIs. Hedge against rupee depreciation with global investment options.',
      features: ['Dollar-based returns', 'Currency hedge', 'Global portfolio', 'NRI-specific benefits', 'Repatriation allowed', 'Tax advantages'],
      idealFor: 'Non-Resident Indians, foreign income earners, NRI families',
      returns: '6-10% p.a.',
      premium: '$500 - $10,000/year',
      lockIn: '10-15 years',
      riskLevel: 'Medium'
    }
  ];

  // Comprehensive Benefits
  const comprehensiveBenefits = [
    {
      category: 'Wealth Creation Benefits',
      icon: TrendingUp,
      benefits: [
        'Long-term wealth accumulation through power of compounding over 10-30 years',
        'Market-linked returns of 10-15% p.a. in equity-oriented ULIPs vs 4-6% in traditional',
        'Flexibility to switch between equity, debt, and balanced funds based on market conditions',
        'Systematic Investment Plan (SIP) mode for disciplined monthly investing from ₹2,000',
        'Top-up facility to invest additional amounts during bonus/windfall receipts',
        'Child education, retirement, wealth goals can be aligned with investment tenure'
      ]
    },
    {
      category: 'Life Insurance Protection',
      icon: Shield,
      benefits: [
        'Dual benefit of investment + life cover unlike pure mutual funds',
        'Sum assured payable to nominees in case of death during policy term',
        'Life cover typically 10x of annual premium as per IRDAI regulations',
        'Family financial security ensured even if policyholder dies prematurely',
        'Premium waiver rider: future premiums waived on critical illness/death',
        'Accidental death benefit rider for enhanced protection at low cost'
      ]
    },
    {
      category: 'Tax Benefits',
      icon: IndianRupee,
      benefits: [
        'Premium deduction up to ₹1.5 lakh under Section 80C of Income Tax Act',
        'Maturity proceeds 100% tax-free under Section 10(10D) if conditions met',
        'Additional ₹50,000 deduction under 80CCD for NPS/pension plans',
        'No TDS on maturity amount received by policyholder',
        'Tax-free wealth accumulation: final corpus not subject to capital gains tax',
        'Estate planning: Nominees receive death benefit tax-free without estate duty'
      ]
    },
    {
      category: 'Flexibility Features',
      icon: Target,
      benefits: [
        'Fund switching: Change between equity, debt, balanced funds 4-12 times/year free',
        'Partial withdrawals allowed after 5th year for emergency needs',
        'Premium payment flexibility: monthly, quarterly, half-yearly, annual modes',
        'Premium redirection: Change future premium allocation between funds',
        'Policy revival within 2-5 years if premium payment lapsed',
        'Surrender value available after 3-5 years if needed to exit early'
      ]
    },
    {
      category: 'Goal Planning',
      icon: BarChart3,
      benefits: [
        'Child Education: Plan for college fees 15-18 years away with education plans',
        'Retirement Planning: Build ₹1-5 Cr corpus for post-60 income needs',
        'Marriage Planning: Accumulate ₹20-50 lakh for child\'s marriage in 20-25 years',
        'Home Purchase: Save down payment of ₹20-40 lakh over 10-15 years',
        'Business Expansion: Fund business growth with maturity proceeds',
        'Vacation/Lifestyle: Plan for dream vacation, car purchase with maturity'
      ]
    },
    {
      category: 'Maturity & Bonuses',
      icon: Award,
      benefits: [
        'Guaranteed maturity benefit in traditional plans as per policy terms',
        'Reversionary bonus (3-5% of sum assured) added annually in participating plans',
        'Terminal/final bonus (30-100% of sum assured) at maturity for long-term policies',
        'Loyalty additions for completing policy term without lapses',
        'NAV-based returns in ULIPs based on fund performance (equity: 10-15%, debt: 6-8%)',
        'Maturity proceeds payable as lump sum or monthly income based on choice'
      ]
    }
  ];

  // Investment Goals with detailed info
  const investmentGoals = [
    {
      icon: GraduationCap,
      title: 'Child Education',
      period: '10-18 years',
      amount: '₹20L - ₹1Cr',
      description: 'Engineering, Medical, MBA fees + living expenses'
    },
    {
      icon: HomeIcon,
      title: 'Dream Home',
      period: '15-20 years',
      amount: '₹30L - ₹2Cr',
      description: 'Down payment + registration costs'
    },
    {
      icon: Clock,
      title: 'Retirement',
      period: '20-30 years',
      amount: '₹1Cr - ₹5Cr',
      description: 'Post-60 monthly income of ₹50K-₹2L'
    },
    {
      icon: Users,
      title: 'Daughter Marriage',
      period: '15-25 years',
      amount: '₹20L - ₹80L',
      description: 'Wedding expenses + gifts'
    },
    {
      icon: Briefcase,
      title: 'Business Expansion',
      period: '5-10 years',
      amount: '₹10L - ₹1Cr',
      description: 'Working capital, equipment'
    },
    {
      icon: Award,
      title: 'Wealth Creation',
      period: '15+ years',
      amount: '₹50L - ₹10Cr',
      description: 'Long-term financial independence'
    }
  ];

  // Network Statistics
  const networkStats = [
    { number: '₹1,00,000 Cr', label: 'Assets Under Management', icon: Building2 },
    { number: '8-12%', label: 'Average Returns (ULIP)', icon: TrendingUp },
    { number: '3 Cr+', label: 'Investment Policies', icon: Users },
    { number: '100%', label: 'Tax-free Maturity', icon: Percent }
  ];

  // Categorized FAQs
  const categorizedFAQs = [
    {
      category: 'Investment Basics',
      faqs: [
        {
          question: 'What is the difference between ULIP and Mutual Funds?',
          answer: 'ULIPs (Unit Linked Insurance Plans) and Mutual Funds both offer market-linked returns but have key differences: LIFE COVER: ULIPs provide life insurance (10x annual premium) along with investment. Mutual funds have no life cover - pure investment only. TAX BENEFITS: ULIPs: Premium deduction under 80C up to ₹1.5L + maturity tax-free under 10(10D). Mutual Funds: Only ELSS funds get 80C benefit, but maturity/capital gains are taxable (10% above ₹1L for equity, 20% for debt). LOCK-IN: ULIPs have 5-year mandatory lock-in. Mutual funds: ELSS 3 years, others no lock-in. CHARGES: ULIPs: Premium allocation charges (2-7%), fund management charges (0.5-1.5%), mortality charges. Mutual Funds: Expense ratio 0.5-2.5%, exit load if sold early. FLEXIBILITY: ULIPs: Fund switching 4-12 times/year free. Mutual Funds: Unlimited switches but may attract capital gains tax. RETURNS: Both offer similar 10-15% in equity, 6-8% in debt. RECOMMENDATION: If you need life cover + investment + tax benefits: Choose ULIP. If you only want investment with higher returns: Choose Mutual Funds.'
        },
        {
          question: 'How much should I invest in insurance investment plans?',
          answer: 'Investment amount depends on your financial goals, income, and life stage: INCOME RULE: Invest 10-20% of annual income in insurance investment plans. If income ₹10L/year, invest ₹1-2L/year. AGE-BASED ALLOCATION: Age 25-35: 15-20% (wealth building phase, higher equity), Age 35-45: 10-15% (balanced approach), Age 45-55: 8-12% (capital preservation focus), Age 55+: 5-10% (conservative allocation). GOAL-BASED CALCULATION: Child Education (18 years): ₹50L needed = ₹15K/month SIP for 15 years @ 12%, Retirement (30 years): ₹2 Cr needed = ₹10K/month for 30 years @ 12%, Home Down Payment (15 years): ₹40L needed = ₹12K/month for 15 years @ 10%. MINIMUM RECOMMENDED: Monthly SIP: ₹5,000 - ₹10,000 minimum, Annual: ₹60,000 - ₹1,20,000 for meaningful corpus building. PORTFOLIO MIX: Insurance Investment: 30-40% (ULIPs, Endowment, Child plans), Pure Investment: 40-50% (Mutual funds, stocks, PPF), Emergency Fund: 10-15% (FD, liquid funds), Pure Protection: 5-10% (Term insurance, health insurance). STEP-UP STRATEGY: Increase investment by 10% every year to match salary increments. Starting ₹10K becomes ₹26K in 10 years, creating ₹50L+ corpus.'
        },
        {
          question: 'What are the charges in investment insurance plans?',
          answer: 'Investment insurance plans have multiple charges that impact returns: PREMIUM ALLOCATION CHARGE (PAC): First year: 60-90% of premium goes to charges (₹1L premium = ₹40K invested), Years 2-5: 5-25% charges (₹1L premium = ₹75K-95K invested), Year 6 onwards: 0-5% charges (almost full premium invested). Total PAC over 10 years: ₹30K-₹60K on ₹10L cumulative premium. FUND MANAGEMENT CHARGE (FMC): 0.5% to 1.35% per annum deducted from NAV daily, On ₹10L fund value: ₹5K-₹13.5K per year charge, Equity funds: Higher charges (1-1.35%), Debt funds: Lower charges (0.5-0.8%). MORTALITY CHARGES: Cost of life insurance cover deducted monthly, Increases with age: Age 30: ₹1,500-₹3,000/year, Age 40: ₹3,000-₹6,000/year, Age 50: ₹6,000-₹12,000/year, Based on sum at risk (Sum assured - Fund value). POLICY ADMINISTRATION CHARGE: Fixed monthly/annual charge: ₹300-₹500/year, Some insurers waive after 5 years or for high premium policies. SWITCHING/WITHDRAWAL CHARGES: First 4-12 switches per year: Free, Beyond free limit: ₹100-₹250 per switch, Partial withdrawal: Free after 5th year, ₹500-₹1,000 per withdrawal in first 5 years. GST: 18% GST on all charges (not on investment amount). NET IMPACT: Total charges over 15 years on ₹15L investment: ₹2-4L (13-27%), Compare with Mutual Funds: ₹1.5-₹2.5L (10-17% over 15 years). LOWER CHARGE PLANS: Online ULIPs have 50-70% lower charges, Look for plans with <1% FMC and no PAC after year 5.'
        }
      ]
    },
    {
      category: 'Returns & Performance',
      faqs: [
        {
          question: 'What returns can I expect from investment insurance plans?',
          answer: 'Returns vary by plan type and fund allocation: ULIP RETURNS (Market-linked): Equity Fund: 10-15% p.a. historically (15-20 years). Example: ₹10K/month for 20 years = ₹1.2 Cr @ 12%. Debt Fund: 6-8% p.a. safer, lower volatility. Example: ₹10K/month for 20 years = ₹55L @ 7%. Balanced/Hybrid: 8-10% p.a. moderate risk. Past 10-year data: Top performers: 14-16% returns, Average performers: 10-12% returns, Poor performers: 6-8% returns. TRADITIONAL PLANS (Guaranteed): Endowment Plans: 5-6% p.a. guaranteed, Bonus: 3-5% of sum assured annually (₹10L sum = ₹30K-₹50K/year), Total effective return: 5-7% p.a. Money Back: 4-5% p.a. + periodic payouts (20-25% of sum assured every 5 years). Guaranteed Return Plans: Fixed 5-6% declared upfront at policy start. CHILD/PENSION PLANS: 7-10% p.a. mix of guaranteed + bonus + market-linked. COMPARISON WITH ALTERNATIVES: ULIP (12% average): Better than PPF (7.1%), FD (6%), better than/equal to Mutual Funds (12-15%). Endowment (5-6%): Lower than Mutual Funds but tax-free + life cover. IMPORTANT: Past returns don\'t guarantee future performance, Returns post charges and mortality deductions, Lock-in of 5 years mandatory in ULIPs, Tax-free maturity under 10(10D) makes effective post-tax return higher.'
        },
        {
          question: 'How is maturity amount calculated in investment plans?',
          answer: 'Maturity calculation depends on plan type: ULIP (MARKET-LINKED): Fund Value = (Monthly investment × months) + Returns - Charges. Formula: FV = P × [((1+r)^n - 1)/r] × (1+r) - Charges. Example: Premium ₹10K/month, 15 years, 12% return: Gross value = ₹48L, Minus charges (₹5L) = ₹43L maturity. NAV-based: Your units × Final NAV = Maturity value. ENDOWMENT (GUARANTEED): Basic Sum Assured + Guaranteed Additions + Reversionary Bonus + Terminal Bonus. Example: Sum Assured ₹10L, Premium ₹60K/year, 15 years: Guaranteed additions: ₹2L (₹4K/year × 50 years), Reversionary bonus: ₹4.5L (₹30K/year × 15 years @ ₹3K per ₹1L), Terminal bonus: ₹2L (20% of sum assured), Total Maturity: ₹10L + ₹2L + ₹4.5L + ₹2L = ₹18.5L, Total Premium Paid: ₹9L, Gain: ₹9.5L (106% return, ~5.5% CAGR). MONEY BACK POLICY: Periodic Payouts (20% of sum assured every 5 years) + Final Maturity + Bonus. Example: ₹10L sum assured, 20 years: Year 5: ₹2L paid, Year 10: ₹2L paid, Year 15: ₹2L paid, Year 20: ₹4L (40% balance) + ₹3L bonus = ₹7L, Total received: ₹2L + ₹2L + ₹2L + ₹7L = ₹13L. PENSION/ANNUITY: Accumulated Fund Value × Annuity Rate = Monthly Pension. Example: ₹50L corpus @ 6% annuity rate = ₹25K/month lifelong.'
        }
      ]
    },
    {
      category: 'Tax & Regulations',
      faqs: [
        {
          question: 'What tax benefits do I get on investment insurance plans?',
          answer: 'Investment insurance offers multiple tax benefits: SECTION 80C DEDUCTION (Premium Payment): Deduction up to ₹1.5 lakh per year on premium paid for self, spouse, children. Conditions: Premium ≤ 10% of sum assured (policies issued after 2012), Premium ≤ 20% of sum assured (policies before 2012). Tax Saved: 30% tax bracket: ₹1.5L premium = ₹46,500 tax saved, 20% bracket: ₹30,000 tax saved, 10% bracket: ₹15,000 tax saved. SECTION 10(10D) - TAX-FREE MATURITY: Maturity amount 100% tax-free if conditions met: Premium ≤ 10% of sum assured (20% for old policies), Policy term ≥ 5 years (ULIPs), No tax on entire maturity proceeds received. Example: ₹50L maturity tax-free vs Mutual Funds where ₹50L would attract ₹5L+ tax. SECTION 80CCD - PENSION PLANS: Additional ₹50,000 deduction for NPS/pension contributions over and above ₹1.5L of 80C. Total ₹2L deduction possible (₹1.5L + ₹50K). DEATH BENEFIT: 100% tax-free under Section 10(10D) for nominees. No TDS, no estate duty, immediate tax-free payout. WEALTH TAX: Investment insurance not counted in wealth tax calculation. NO LTCG/STCG: Unlike mutual funds, no long-term or short-term capital gains tax on maturity. CALCULATION EXAMPLE: Annual premium: ₹1L, Tax bracket: 30%, Annual tax saving: ₹30K, 15-year total tax saving: ₹4.5L, Maturity: ₹30L (tax-free vs ₹3L tax in mutual funds), Net benefit: ₹7.5L over 15 years from tax advantages alone.'
        }
      ]
    },
    {
      category: 'Plan Features & Benefits',
      faqs: [
        {
          question: 'Can I make partial withdrawals or take loan against policy?',
          answer: 'Yes, but with conditions varying by plan type: ULIP PARTIAL WITHDRAWALS: Allowed after: 5th policy year (lock-in period over), Withdrawal limit: Up to 20-25% of fund value, Frequency: 1-4 times per year, Tax: Withdrawals are tax-free, No impact on life cover if fund value sufficient. Example: Fund value ₹10L in 6th year, can withdraw ₹2-2.5L, Charge: ₹500-₹1,000 per withdrawal. TRADITIONAL PLAN LOANS: Available after: 3 years of premium payment, Loan amount: 80-90% of surrender value, Interest rate: 9-11% per annum, Repayment: Flexible, can repay anytime or at maturity. Example: Surrender value ₹5L, loan available ₹4-4.5L, Interest ₹40K-50K per year on ₹4L. SURRENDER VALUE: ULIP: After 5 years, get fund value minus surrender charges (0-3%), Traditional: After 3 years, get 30-90% of premiums paid (increases with time), Total surrender not recommended: Lose life cover, Tax benefits, Future bonus potential. RESTRICTIONS: First 5 years: No withdrawal in ULIPs, First 3 years: No loan in traditional plans, Premium dues: Loan/withdrawal not allowed if premiums unpaid. USE CASES: Partial withdrawal: Emergency medical, education fees, down payment, Loan: Short-term needs, avoid surrender, maintain policy benefits. RECOMMENDATION: Use only for genuine emergencies. Early withdrawal impacts final maturity value significantly.'
        },
        {
          question: 'What happens if I stop paying premiums?',
          answer: 'Consequences differ between plan types: ULIP (UNIT LINKED): GRACE PERIOD: 30 days for annual, 15 days for monthly mode, Policy active during grace period, premium + interest charged if paid. DISCONTINUANCE (within 5 years): If stop before 5 years, policy moves to "Discontinued Policy Fund", Lower returns (3-4% p.a. vs 10-12%), Fund value payable only after 5 years from start, Life cover ceases immediately, Lock-in rule still applies. LAPSE (after 5 years): Can withdraw fund value anytime, Life cover stops but fund continues to earn returns, Revival possible within 2-5 years by paying dues + interest + medical check. TRADITIONAL PLANS (Endowment/Money Back): GRACE PERIOD: 30 days for annual mode (policy active), If paid within grace, policy continues normally. LAPSE: Policy becomes inactive after grace period, No life cover from lapse date, Paid-up value activated. PAID-UP POLICY: Conditions: At least 3 years premiums paid, Paid-up sum assured = Original sum assured × (Premiums paid / Total premiums), Paid-up bonuses also reduced proportionately, Example: ₹10L sum assured, 20 year policy, 6 years premium paid: Paid-up sum assured = ₹10L × 6/20 = ₹3L, Will get ₹3L + proportionate bonus at maturity (14 years later). REVIVAL: Can revive within 2-5 years by paying: All arrears premium, Interest at 8-10% p.a. on arrears, Medical examination if required, Life cover restarts from revival date. RECOMMENDATION: Never let policy lapse. If financial difficulty, reduce sum assured, or opt for premium holiday (some plans allow).'
        },
        {
          question: 'Which is better for my child\'s future - ULIP or Child Education Plan?',
          answer: 'Both have merits depending on your risk appetite and goals: CHILD EDUCATION PLAN: Guaranteed returns: 7-9% assured, ideal for conservative parents. Premium waiver: If parent dies, future premiums waived but policy continues. Milestone payouts: Money at 18, 21 years for college/higher education. Life cover: Parent covered, ensuring child\'s education even if tragedy strikes. Predictability: Fixed maturity amount known upfront. Best for: Risk-averse parents, single income families, first child planning. ULIP (Child variant): Higher returns: 10-15% potential in equity funds over 15-18 years. Flexibility: Switch between equity/debt based on child\'s age (equity early, debt near goal). Same benefits: Premium waiver + life cover included. Market-linked: Returns vary, could be higher or lower. Top-up option: Invest windfall amounts (bonus, gifts) anytime. Best for: Risk-tolerant parents, dual income families, long horizon (15+ years). HYBRID APPROACH: Start with ULIP (age 0-10): Equity-heavy for growth phase, ₹10K/month = ₹45L in 18 years @ 12%. Switch to Child Plan (age 10-18): Lock gains, guaranteed corpus for college. Example: ₹8K/month ULIP + ₹7K/month Child Plan = Balanced risk + guaranteed corpus. RECOMMENDATION: Very long term (18+ years): ULIP for higher returns, Medium term (10-15 years): Child Education Plan for safety, Hybrid: 60% ULIP + 40% guaranteed for balanced approach.'
        },
        {
          question: 'Are NRI investment plans different from regular investment plans?',
          answer: 'Yes, NRI investment plans have specific features and considerations: CURRENCY DENOMINATION: NRI Plans: Can be in USD, GBP, EUR, AED for currency hedging. Regular Plans: Only INR denomination. Benefit: Hedge against rupee depreciation (historically 3-5% p.a.). Example: $10K premium = ₹8.2L today, might be ₹9L in 5 years due to rupee fall. PREMIUM PAYMENT: NRI: Can pay from NRE/NRO accounts or foreign bank accounts. Regular: Only from Indian resident accounts. Mode: International credit cards accepted for NRI plans. REPATRIATION: NRI Plans: Maturity proceeds repatriable to foreign country. Regular: Proceeds must stay in India, can\'t repatriate freely. Important for NRIs returning abroad permanently. TAX IMPLICATIONS: India: Both plans get same tax benefits (80C, 10(10D)). Foreign Country: May be taxable in residence country (USA, UK, etc.). FEMA compliance: NRI plans compliant with Foreign Exchange Management Act. ELIGIBILITY: NRI Plans: Only for PIO/OCI/NRI status holders. Regular: Only for Indian residents. Status change: If NRI becomes resident, can continue NRI plan. POPULAR NRI PLANS: HDFC Life International: USD-denominated ULIPs. ICICI Pru Signature: Multi-currency endowment. LIC NRI plans: Traditional guaranteed plans. RECOMMENDATION: If planning to settle abroad: Choose NRI plan for repatriation. If returning to India: Regular INR plan sufficient. Currency hedge: Useful if rupee depreciation concern.'
        },
        {
          question: 'How do pension plans differ from regular investment plans?',
          answer: 'Pension plans are specifically designed for retirement income, with key differences: STRUCTURE: Pension Plan: Accumulation phase (save for 20-30 years) + Vesting (choose annuity options). Regular Investment: Lump sum at maturity, no mandatory annuity. PAYOUT OPTIONS: Pension Plan: Annuity options - Life annuity (till death), Joint life (covers spouse), Annuity with return of purchase price, Increasing annuity (inflation-adjusted). Regular Investment: Single lump sum payout only. TAX BENEFITS: Pension Plan: 80C: ₹1.5L deduction, 80CCD(1B): Additional ₹50K deduction (NPS), 80CCC: ₹1.5L for pension plans. Total possible: ₹2L deduction. Regular Investment: Only 80C (₹1.5L), no additional benefit. WITHDRAWAL RULES: Pension Plan: 60% of corpus withdrawable, 40% must buy annuity. Mandatory annuitization for regular pension. Regular Investment: 100% withdrawal allowed, no annuity requirement. MATURITY AGE: Pension Plan: Vesting at 55-70 years (typically 60). Regular Investment: Any age, based on policy term. MONTHLY INCOME: Pension Plan: Example: ₹50L corpus = ₹25K-₹30K/month lifelong @ 6-7% annuity. Regular Investment: Need to manage corpus yourself for income. BEST PENSION OPTIONS: NPS (National Pension System): Lowest charges, govt-backed, 80CCD benefit. Corporate NPS: Employer contribution tax-free up to ₹7.5L. Insurance Pension: LIC, HDFC, ICICI pension plans with guaranteed returns. RECOMMENDATION: Start pension plan at age 30-35 for ₹2-5 Cr retirement corpus. Combine: 40% NPS (low cost) + 30% Insurance Pension (guaranteed) + 30% Investment plans (flexibility).'
        }
      ]
    }
  ];

  // Investment Myths
  const investmentMyths = [
    {
      myth: 'ULIPs have poor returns compared to mutual funds',
      reality: 'This was true for old ULIPs (pre-2010) with charges of 30-50%. New-age ULIPs (post-2010) have dramatically reduced charges (10-15% total over 15 years) and returns comparable to mutual funds. Post-tax comparison: ULIP 12% return is tax-free at maturity vs Mutual Fund 14% return - 10% LTCG tax = 12.6% post-tax. ULIP advantage: Life cover included (saves ₹10K-15K/year term insurance premium), Tax benefits u/s 80C (save ₹30K-45K tax annually). Real example: ₹10K/month for 15 years: ULIP: ₹43L tax-free + ₹50L life cover throughout, Mutual Fund: ₹48L minus ₹5L LTCG tax = ₹43L + separate term insurance ₹1.5L cost. Net result: Similar or ULIP slightly better when tax + life cover factored.',
      stat: 'Top ULIPs have delivered 12-15% returns over 10-15 years, matching equity mutual funds',
      icon: TrendingUp
    },
    {
      myth: 'Investment insurance gives very low returns of 4-5%',
      reality: 'This applies only to guaranteed traditional plans (Endowment, Money Back) which offer 5-7% guaranteed + tax-free. However, ULIPs offer market-linked returns of 10-15% comparable to mutual funds. Also consider: 5% tax-free = 7.1% taxable return (30% bracket), Life cover value worth 1-2% extra annual cost saved. Comparison: Endowment 5-6%: Conservative, capital protected, tax-free, with life cover, ULIP 10-15%: Market-linked, higher risk, tax-free maturity, with life cover, Mutual Fund 12-16%: Pure investment, taxable, no life cover. Choose based on risk appetite: Risk-averse → Endowment (5-6%), Moderate risk → Balanced ULIP (8-10%), High risk → Equity ULIP (10-15%). MYTH ORIGIN: This myth comes from comparing old ULIPs and traditional plans only. New ULIPs have changed the game.',
      stat: 'Equity ULIPs have outperformed FD, PPF, and traditional insurance by 4-8% annually over 15+ years',
      icon: BarChart3
    },
    {
      myth: 'I should invest in pure mutual funds, not mix insurance and investment',
      reality: 'Financial planners often say "Never mix insurance and investment." But this is oversimplified. Reality: You need BOTH term insurance (₹1Cr life cover for ₹10K/year) AND investments (mutual funds/ULIPs). The question is: Term + Mutual Fund OR Term + ULIP? ULIP ADVANTAGES: Single product (simplicity), Tax-free maturity (mutual funds taxable), 80C benefit on premium (mutual fund SIP not eligible except ELSS), Life cover included (convenient), Forced discipline (lock-in ensures you don\'t withdraw early). MUTUAL FUND ADVANTAGES: Lower charges (1-2% vs 2-3% in ULIP), Higher flexibility (withdraw anytime after 3 years in ELSS, anytime in others), Potentially 1-2% higher returns. RECOMMENDATION: Use BOTH strategically: ULIP: 30-40% for tax benefits, lock-in discipline, child education, Mutual Funds: 50-60% for flexibility, higher potential returns, Term Insurance: Separate ₹1Cr cover for ₹10K/year. Example portfolio: Term ₹1Cr life cover: ₹10K/year, ULIP ₹10K/month: ₹1.2L/year (child education goal), Mutual Fund ₹15K/month: ₹1.8L/year (retirement goal), Total: ₹3.1L/year with complete protection + wealth building.',
      stat: '40% of successful wealth creators use a mix of insurance investment and pure investment products',
      icon: Target
    },
    {
      myth: 'I can get better returns by investing the insurance premium myself',
      reality: 'This DIY approach sounds logical but fails in practice for most people. Challenges: Discipline: Most people don\'t invest the "saved premium" regularly. Miss 2-3 months = significantly lower corpus. Consistency: Market volatility causes panic. People stop SIPs during crashes, missing recovery. Tax efficiency: Mutual funds have LTCG tax (10% above ₹1L), ULIPs tax-free. Insurance benefit: Separate term insurance costs ₹10K-15K/year, already included in ULIP. REAL SCENARIO: Plan A (DIY): Buy ₹1Cr term (₹12K/year) + Invest ₹1.2L/year mutual fund. Total: ₹1.32L/year. Discipline challenge: 70% people reduce SIP during crashes. Plan B (ULIP): Single ₹1.2L/year ULIP premium = ₹50L life cover + investment. Lock-in ensures discipline, no panic withdrawals. OUTCOME (15 years): DIY: If disciplined 100%: ₹45L corpus, If normal behavior (skip 20% SIPs): ₹35L corpus, ULIP: Forced discipline: ₹42L corpus + never missed due to lock-in. VERDICT: If you are extremely disciplined investor with market knowledge: DIY wins by 5-10%, If you are normal human with emotions and busy life: ULIP wins by ensuring you complete the journey. For 80% of people, ULIP\'s forced discipline makes it better despite slightly higher charges.',
      stat: 'Studies show 60% of DIY investors underperform due to emotional decisions and inconsistent investments',
      icon: PiggyBank
    }
  ];

  // Calculate Returns
  const calculateMaturityValue = () => {
    const P = parseInt(calculatorInputs.monthlyInvestment) || 0;
    const n = parseInt(calculatorInputs.investmentPeriod) || 0;
    const r = parseFloat(calculatorInputs.expectedReturn) / 100 / 12 || 0;
    const months = n * 12;

    if (P && n && r) {
      const maturity = P * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
      const invested = P * months;
      const returns = maturity - invested;

      return {
        maturity: Math.round(maturity).toLocaleString('en-IN'),
        invested: invested.toLocaleString('en-IN'),
        returns: Math.round(returns).toLocaleString('en-IN')
      };
    }
    return null;
  };

  const result = calculateMaturityValue();

  return (
    <div className="w-full max-w-full bg-black overflow-x-hidden min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-none">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="ghost"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-thin hover:bg-white/20 hover:border-white/30 transition-all duration-300 h-10 px-4 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Back to Insurance List
          </Button>
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-thin hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 h-10 px-5 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <Phone className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Talk to Advisor
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-orange-500/10"></div>
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          {/* Centered Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-yellow-500/30 to-orange-500/30 border-2 border-yellow-500/40 mb-6 backdrop-blur-md">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" strokeWidth={1.5} />
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-thin tracking-wide mb-6">
              Investment Plans
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-thin mb-4">
                Grow Wealth with Life Insurance. Tax-Free Returns + Family Protection.
              </p>
              <p className="text-white/50 text-sm sm:text-base font-thin mb-8">
                Build ₹1-5 Crore corpus for retirement, education, marriage with guaranteed/market-linked returns.
              </p>

              {/* Network Statistics */}
              <div className="grid grid-cols-2 gap-4">
                {networkStats.map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <div className="text-3xl text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-white text-2xl sm:text-3xl font-thin mb-2">Start Your Investment Journey</h2>
                  <p className="text-white/60 text-sm sm:text-base font-thin">Get personalized investment plan recommendations</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-yellow-500/50 focus:ring-yellow-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Mobile Number *</label>
                    <Input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/40 font-thin focus:border-yellow-500/50 focus:ring-yellow-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Gender *</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 outline-none">
                      <option value="" className="bg-black">Select Gender</option>
                      <option value="male" className="bg-black">Male</option>
                      <option value="female" className="bg-black">Female</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-thin mb-2">Investment Goal</label>
                    <select className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white font-thin focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 outline-none">
                      <option value="" className="bg-black">Select Goal</option>
                      <option value="retirement" className="bg-black">Retirement Planning</option>
                      <option value="education" className="bg-black">Child Education</option>
                      <option value="marriage" className="bg-black">Child Marriage</option>
                      <option value="wealth" className="bg-black">Wealth Creation</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-thin px-8 py-6 text-base rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 mb-3">
                  <TrendingUp className="w-5 h-5 mr-2" strokeWidth={1.5} />
                  Get Your Policy Now
                </Button>
                <p className="text-white/50 text-xs font-thin text-center">*Tax-free returns + Life cover included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-6">
        <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
          <h2 className="text-white font-thin mb-4 text-center">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Types of Investment Plans', 'Why Invest', 'Returns Comparison', 'Tax Benefits', 'Risk Factors', 'Investment Calculator', 'How to Choose', 'Portfolio Planning', 'FAQs'].map((item, idx) => (
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

      {/* Investment Calculator */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-gradient-to-b from-black to-gray-900/50 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
              <Calculator className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">Investment Calculator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-white mb-2">Calculate Your Wealth</h2>
            <p className="text-white/60">See how much you can accumulate for your financial goals</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-white/70 mb-2">Monthly Investment (₹)</label>
                <Input
                  type="number"
                  placeholder="e.g., 10000"
                  value={calculatorInputs.monthlyInvestment}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, monthlyInvestment: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Investment Period (years)</label>
                <Input
                  type="number"
                  placeholder="e.g., 15"
                  value={calculatorInputs.investmentPeriod}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, investmentPeriod: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Expected Return (% p.a.)</label>
                <Input
                  type="number"
                  placeholder="e.g., 12"
                  value={calculatorInputs.expectedReturn}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, expectedReturn: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Your Age</label>
                <Input
                  type="number"
                  placeholder="e.g., 30"
                  value={calculatorInputs.currentAge}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, currentAge: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12"
                />
              </div>
            </div>

            {result && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <p className="text-sm text-white/60 mb-1">Total Invested</p>
                  <p className="text-2xl text-yellow-400">₹{result.invested}</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <p className="text-sm text-white/60 mb-1">Wealth Gained</p>
                  <p className="text-2xl text-green-400">₹{result.returns}</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <p className="text-sm text-white/60 mb-1">Maturity Value</p>
                  <p className="text-2xl text-blue-400">₹{result.maturity}</p>
                </div>
              </div>
            )}

            <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white h-12 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              Get Personalized Investment Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Types of Investment Plans</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose the right plan based on your risk appetite and financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentTypes.map((type, idx) => (
              <article key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-yellow-500/50 hover:bg-white/10 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <type.icon className="w-6 h-6 text-yellow-400" strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full mb-1">
                      {type.returns}
                    </div>
                    <div className="text-xs text-white/50">{type.riskLevel}</div>
                  </div>
                </div>

                <h3 className="text-xl text-white mb-2">{type.title}</h3>
                <p className="text-sm text-white/60 mb-4">{type.description}</p>

                <div className="space-y-2 mb-4">
                  {type.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-xs text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Premium:</span>
                    <span className="text-white">{type.premium}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Lock-in:</span>
                    <span className="text-white">{type.lockIn}</span>
                  </div>
                </div>

                <p className="text-xs text-white/40">
                  <strong className="text-white/60">Ideal for:</strong> {type.idealFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Benefits */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Comprehensive Investment Benefits</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Why investment insurance plans are perfect for long-term wealth creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveBenefits.map((category, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-yellow-400" strokeWidth={1.5} />
                  <h3 className="text-xl text-white">{category.category}</h3>
                </div>

                <ul className="space-y-3">
                  {category.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm text-white/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Goals */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Plan for Your Life Goals</h2>
            <p className="text-white/60">Align your investments with major life milestones</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentGoals.map((goal, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4">
                  <goal.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg text-white mb-2">{goal.title}</h3>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-white/50">Timeline:</span>
                  <span className="text-white">{goal.period}</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-white/50">Target Amount:</span>
                  <span className="text-yellow-400">{goal.amount}</span>
                </div>
                <p className="text-xs text-white/60">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">Everything you need to know about investment insurance plans</p>
          </div>

          {categorizedFAQs.map((category, catIdx) => (
            <div key={catIdx} className="mb-8">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-yellow-400" />
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIdx) => (
                  <AccordionItem
                    key={faqIdx}
                    value={`faq-${catIdx}-${faqIdx}`}
                    className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-yellow-400 text-left py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 text-sm leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table 1: Investment Plan Types Comparison */}
      <section id="plan-comparison" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Investment Plan Types Comparison</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Feature</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">ULIP</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Endowment</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Money Back</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Pension Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Return Type</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Market-Linked</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Guaranteed</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Guaranteed</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Mixed</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Expected Returns</td>
                  <td className="px-6 py-4 text-white/60 font-thin">10-15% p.a.</td>
                  <td className="px-6 py-4 text-white/60 font-thin">5-7% p.a.</td>
                  <td className="px-6 py-4 text-white/60 font-thin">4-6% p.a.</td>
                  <td className="px-6 py-4 text-white/60 font-thin">7-10% p.a.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Lock-in Period</td>
                  <td className="px-6 py-4 text-white/60 font-thin">5 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">10-20 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15-20 Years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Till Retirement</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Risk Level</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Medium-High</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Low</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Low</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Low-Medium</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Premium Range</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20K - ₹5L/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15K - ₹3L/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹18K - ₹2.5L/year</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25K - ₹5L/year</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Flexibility</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Fund Switching</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Limited</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Very Limited</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Annuity Options</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Liquidity</td>
                  <td className="px-6 py-4 text-white/60 font-thin">After 5 years</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Loan available</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Periodic payouts</td>
                  <td className="px-6 py-4 text-white/60 font-thin">At retirement</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Best For</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Long-term wealth</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Risk-averse</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Periodic income</td>
                  <td className="px-6 py-4 text-white/60 font-thin">Retirement planning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison Table 2: Top Investment Providers Comparison */}
      <section id="provider-comparison" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Top Investment Plan Providers 2024</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Insurer</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">ULIP Returns (10Y)</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Fund Options</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Charges (FMC)</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">HDFC Life</td>
                  <td className="px-6 py-4 text-white/60 font-thin">12.8%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">15+ Funds</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1.35%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★★</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">ICICI Prudential</td>
                  <td className="px-6 py-4 text-white/60 font-thin">13.2%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">18+ Funds</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1.25%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★★</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">SBI Life</td>
                  <td className="px-6 py-4 text-white/60 font-thin">11.5%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">12+ Funds</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1.30%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★☆</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Max Life</td>
                  <td className="px-6 py-4 text-white/60 font-thin">12.3%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">14+ Funds</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1.20%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★★</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Bajaj Allianz</td>
                  <td className="px-6 py-4 text-white/60 font-thin">11.9%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">10+ Funds</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1.35%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★☆</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Tata AIA</td>
                  <td className="px-6 py-4 text-white/60 font-thin">12.1%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">13+ Funds</td>
                  <td className="px-6 py-4 text-white/60 font-thin">1.25%</td>
                  <td className="px-6 py-4 text-white/60 font-thin">★★★★★</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison Table 3: Investment Returns by Tenure */}
      <section id="returns-comparison" className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
            <h2 className="text-white text-3xl sm:text-4xl font-thin">Maturity Values: ₹10,000/month Investment</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">Plan Type</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">10 Years</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">15 Years</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">20 Years</th>
                  <th className="px-6 py-4 text-left text-white font-thin border-b border-white/10">25 Years</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">ULIP Equity (12%)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹23.2L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹49.9L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹99.9L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1.89Cr</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">ULIP Balanced (10%)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹20.5L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹41.8L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹76.0L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹1.33Cr</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">ULIP Debt (7%)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹17.4L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹31.9L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹52.4L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹81.3L</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Endowment (5.5%)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15.8L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹26.8L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹41.2L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹60.3L</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-white/80 font-thin">Money Back (5%)</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹15.5L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹25.8L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹39.7L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹57.3L</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/80 font-thin">Total Invested</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹12.0L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹18.0L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹24.0L</td>
                  <td className="px-6 py-4 text-white/60 font-thin">₹30.0L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white/60 text-sm mt-4 text-center font-thin">Note: Returns are illustrative. Actual returns may vary based on market conditions and fund performance.</p>
        </div>
      </section>

      {/* Myths vs Reality */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Investment Plan Myths vs Reality</h2>
            <p className="text-white/60">Don&apos;t let these misconceptions stop you from building wealth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentMyths.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-yellow-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-red-400 uppercase mb-1">Myth</div>
                    <h3 className="text-lg text-white">{item.myth}</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-green-400 uppercase mb-1">Reality</div>
                    <p className="text-sm text-white/70">{item.reality}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-yellow-400" strokeWidth={1.5} />
                    <span className="text-xs text-white/50">Fact: {item.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">Start Your Wealth Journey Today</h2>
          <p className="text-white/60 text-lg mb-8">
            Compare investment plans from top insurers. Expert guidance for your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white h-12 px-8 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              Compare Investment Plans
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8 rounded-xl">
              <Phone className="w-4 h-4 mr-2" />
              Speak to Advisor
            </Button>
          </div>
          <p className="text-xs text-white/40 mt-6">
            Tax benefits under Section 80C • Maturity tax-free under Section 10(10D) • Life cover included
          </p>
        </div>
      </section>
    </div>
  );
}