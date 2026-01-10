import { Calculator, TrendingUp, PiggyBank, Shield, FileText, Briefcase, Home, Car, Bike, Plane, Heart, IndianRupee, Receipt, Building2, Wallet, Clock, Activity, Baby, Scale } from 'lucide-react';

export type CalculatorCategory = 'investment' | 'insurance' | 'tax' | 'health';

export interface CalculatorInfo {
  id: string;
  name: string;
  description: string;
  category: CalculatorCategory;
  icon: string;
  route: string;
}

export const calculators: CalculatorInfo[] = [
  // Investment & Savings (12 calculators)
  {
    id: 'sip',
    name: 'SIP Calculator',
    description: 'Calculate returns on your Systematic Investment Plan with compound growth projections',
    category: 'investment',
    icon: 'TrendingUp',
    route: '/calculators/sip'
  },
  {
    id: 'compound-interest',
    name: 'Compound Interest Calculator',
    description: 'Determine compound interest earnings on investments and savings over time',
    category: 'investment',
    icon: 'TrendingUp',
    route: '/calculators/compound-interest'
  },
  {
    id: 'pension',
    name: 'Pension Calculator',
    description: 'Plan your retirement corpus and estimate monthly pension income',
    category: 'investment',
    icon: 'Wallet',
    route: '/calculators/pension'
  },
  {
    id: 'nps',
    name: 'NPS Calculator',
    description: 'Calculate National Pension Scheme returns and retirement benefits',
    category: 'investment',
    icon: 'Building2',
    route: '/calculators/nps'
  },
  {
    id: 'ulip',
    name: 'ULIP Calculator',
    description: 'Estimate returns on Unit Linked Insurance Plans with investment and insurance',
    category: 'investment',
    icon: 'Shield',
    route: '/calculators/ulip'
  },
  {
    id: 'human-life-value',
    name: 'Human Life Value Calculator',
    description: 'Determine the economic value of life for adequate insurance coverage',
    category: 'investment',
    icon: 'Heart',
    route: '/calculators/human-life-value'
  },
  {
    id: 'savings',
    name: 'Savings Calculator',
    description: 'Calculate how much you need to save to reach your financial goals',
    category: 'investment',
    icon: 'PiggyBank',
    route: '/calculators/savings'
  },
  {
    id: 'save-regularly',
    name: 'Save Regularly Calculator',
    description: 'Plan regular savings contributions to build wealth over time',
    category: 'investment',
    icon: 'Clock',
    route: '/calculators/save-regularly'
  },
  {
    id: 'actual-savings',
    name: 'Actual Savings Calculator',
    description: 'Track and calculate your real savings after expenses and inflation',
    category: 'investment',
    icon: 'Wallet',
    route: '/calculators/actual-savings'
  },
  {
    id: 'fd',
    name: 'FD Calculator',
    description: 'Calculate maturity amount and interest on Fixed Deposits',
    category: 'investment',
    icon: 'FileText',
    route: '/calculators/fd'
  },
  {
    id: 'investment',
    name: 'Investment Calculator',
    description: 'General investment calculator for lump sum and periodic investments',
    category: 'investment',
    icon: 'TrendingUp',
    route: '/calculators/investment'
  },
  {
    id: 'ppf',
    name: 'PPF Calculator',
    description: 'Calculate Public Provident Fund maturity amount and tax benefits',
    category: 'investment',
    icon: 'Building2',
    route: '/calculators/ppf'
  },
  
  // Insurance (9 calculators)
  {
    id: 'health-insurance',
    name: 'Health Insurance Premium Calculator',
    description: 'Estimate health insurance premiums based on age, coverage, and medical history',
    category: 'insurance',
    icon: 'Heart',
    route: '/calculators/health-insurance'
  },
  {
    id: 'car-insurance',
    name: 'Car Insurance Calculator',
    description: 'Calculate car insurance premium with comprehensive and third-party options',
    category: 'insurance',
    icon: 'Car',
    route: '/calculators/car-insurance'
  },
  {
    id: 'bike-insurance',
    name: 'Bike Insurance Calculator',
    description: 'Estimate two-wheeler insurance premium for your bike',
    category: 'insurance',
    icon: 'Bike',
    route: '/calculators/bike-insurance'
  },
  {
    id: 'life-insurance',
    name: 'Life Insurance Calculator',
    description: 'Determine adequate life insurance coverage based on your financial needs',
    category: 'insurance',
    icon: 'Shield',
    route: '/calculators/life-insurance'
  },
  {
    id: 'term-insurance',
    name: 'Term Insurance Calculator',
    description: 'Calculate term insurance coverage and premium for financial protection',
    category: 'insurance',
    icon: 'Shield',
    route: '/calculators/term-insurance'
  },
  {
    id: 'lic',
    name: 'LIC Calculator',
    description: 'Calculate LIC policy maturity amount and premium payments',
    category: 'insurance',
    icon: 'FileText',
    route: '/calculators/lic'
  },
  {
    id: 'travel-insurance',
    name: 'Travel Insurance Calculator',
    description: 'Estimate travel insurance premium for domestic and international trips',
    category: 'insurance',
    icon: 'Plane',
    route: '/calculators/travel-insurance'
  },
  {
    id: 'home-insurance',
    name: 'Home Insurance Calculator',
    description: 'Calculate home insurance premium to protect your property',
    category: 'insurance',
    icon: 'Home',
    route: '/calculators/home-insurance'
  },
  {
    id: 'critical-illness',
    name: 'Critical Illness Calculator',
    description: 'Determine coverage needed for critical illness insurance protection',
    category: 'insurance',
    icon: 'Heart',
    route: '/calculators/critical-illness'
  },
  
  // Tax & Financial Planning (4 calculators)
  {
    id: 'income-tax',
    name: 'Income Tax Calculator',
    description: 'Calculate income tax liability under old and new tax regimes',
    category: 'tax',
    icon: 'Receipt',
    route: '/calculators/income-tax'
  },
  {
    id: 'gst',
    name: 'GST Calculator',
    description: 'Calculate GST amount for goods and services with inclusive/exclusive options',
    category: 'tax',
    icon: 'Receipt',
    route: '/calculators/gst'
  },
  {
    id: 'hra',
    name: 'HRA Calculator',
    description: 'Calculate House Rent Allowance exemption and tax benefits',
    category: 'tax',
    icon: 'Home',
    route: '/calculators/hra'
  },
  {
    id: 'gratuity',
    name: 'Gratuity Calculator',
    description: 'Calculate gratuity amount based on salary and years of service',
    category: 'tax',
    icon: 'Briefcase',
    route: '/calculators/gratuity'
  },
  
  // Health & Wellness (11 calculators)
  {
    id: 'bmi',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index to assess healthy weight range',
    category: 'health',
    icon: 'Activity',
    route: '/calculators/bmi'
  },
  {
    id: 'ideal-weight',
    name: 'Ideal Weight Calculator',
    description: 'Determine your ideal body weight based on height and gender',
    category: 'health',
    icon: 'Scale',
    route: '/calculators/ideal-weight'
  },
  {
    id: 'calorie',
    name: 'Calorie Calculator',
    description: 'Calculate daily calorie needs for weight management',
    category: 'health',
    icon: 'Activity',
    route: '/calculators/calorie'
  },
  {
    id: 'bmr',
    name: 'BMR Calculator',
    description: 'Calculate Basal Metabolic Rate - calories burned at rest',
    category: 'health',
    icon: 'Activity',
    route: '/calculators/bmr'
  },
  {
    id: 'body-fat',
    name: 'Body Fat Calculator',
    description: 'Estimate body fat percentage using multiple measurements',
    category: 'health',
    icon: 'Activity',
    route: '/calculators/body-fat'
  },
  {
    id: 'ovulation',
    name: 'Ovulation Calculator',
    description: 'Track ovulation cycle and fertile window for family planning',
    category: 'health',
    icon: 'Heart',
    route: '/calculators/ovulation'
  },
  {
    id: 'pregnancy',
    name: 'Pregnancy Calculator',
    description: 'Calculate pregnancy weeks and important milestones',
    category: 'health',
    icon: 'Baby',
    route: '/calculators/pregnancy'
  },
  {
    id: 'pregnancy-conception',
    name: 'Pregnancy Conception Calculator',
    description: 'Estimate conception date based on due date or last period',
    category: 'health',
    icon: 'Baby',
    route: '/calculators/pregnancy-conception'
  },
  {
    id: 'pregnancy-weight-gain',
    name: 'Pregnancy Weight Gain Calculator',
    description: 'Track healthy weight gain during pregnancy',
    category: 'health',
    icon: 'Baby',
    route: '/calculators/pregnancy-weight-gain'
  },
  {
    id: 'due-date',
    name: 'Due Date Calculator',
    description: 'Calculate expected delivery date from last menstrual period',
    category: 'health',
    icon: 'Baby',
    route: '/calculators/due-date'
  },
  {
    id: 'macro',
    name: 'Macro Calculator',
    description: 'Calculate macronutrient needs - protein, carbs, and fats',
    category: 'health',
    icon: 'Activity',
    route: '/calculators/macro'
  }
];

export const calculatorCategories = {
  investment: {
    title: 'Investment & Savings',
    description: 'Plan your financial future with investment and savings calculators',
    icon: 'TrendingUp'
  },
  insurance: {
    title: 'Insurance',
    description: 'Calculate insurance premiums and coverage requirements',
    icon: 'Shield'
  },
  tax: {
    title: 'Tax & Financial Planning',
    description: 'Optimize your tax planning and financial decisions',
    icon: 'Receipt'
  },
  health: {
    title: 'Health & Wellness',
    description: 'Track fitness metrics, pregnancy milestones, and nutritional needs',
    icon: 'Heart'
  }
};