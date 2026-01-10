import { Calculator, TrendingUp, Shield, Receipt, ArrowRight, Search, Heart } from 'lucide-react';
import { useState } from 'react';
import { calculators, calculatorCategories, type CalculatorCategory } from '../data/calculators';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface CalculatorsHubPageProps {
  onNavigate: (calculatorId: string) => void;
  onBack: () => void;
}

export default function CalculatorsHubPage({ onNavigate, onBack }: CalculatorsHubPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CalculatorCategory | 'all'>('all');

  const filteredCalculators = calculators.filter(calc => {
    const matchesSearch = calc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         calc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || calc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'investment': return TrendingUp;
      case 'insurance': return Shield;
      case 'tax': return Receipt;
      case 'health': return Heart;
      default: return Calculator;
    }
  };

  const getCalculatorsByCategory = (category: CalculatorCategory) => {
    return filteredCalculators.filter(calc => calc.category === category);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12 md:py-16">
          <button 
            onClick={onBack}
            className="mb-6 text-[#39FF14] hover:text-[#2ee610] flex items-center gap-2 transition-colors"
          >
            ← Back to Home
          </button>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 glass-card rounded-lg">
              <Calculator className="w-8 h-8 text-[#39FF14]" />
            </div>
            <div>
              <h1 className="text-white mb-3">Financial & Health Calculators</h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Make informed financial and health decisions with our comprehensive suite of 36 AI-powered calculators. 
                Plan investments, estimate insurance premiums, optimize your tax strategy, and monitor your health metrics.
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Search calculators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#39FF14]"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Button
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' 
                  ? 'bg-[#39FF14] text-black hover:bg-[#2ee610]' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }
              >
                All Calculators
              </Button>
              {Object.entries(calculatorCategories).map(([key, cat]) => {
                const Icon = getCategoryIcon(key);
                return (
                  <Button
                    key={key}
                    onClick={() => setSelectedCategory(key as CalculatorCategory)}
                    className={selectedCategory === key 
                      ? 'bg-[#39FF14] text-black hover:bg-[#2ee610]' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {cat.title}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Calculators Grid */}
      <div className="container-custom py-12 md:py-16">
        {selectedCategory === 'all' ? (
          // Show by categories when "all" is selected
          <div className="space-y-16">
            {Object.entries(calculatorCategories).map(([key, cat]) => {
              const CategoryIcon = getCategoryIcon(key);
              const categoryCalcs = getCalculatorsByCategory(key as CalculatorCategory);
              
              if (categoryCalcs.length === 0) return null;
              
              return (
                <div key={key}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 glass-card rounded-lg">
                      <CategoryIcon className="w-6 h-6 text-[#39FF14]" />
                    </div>
                    <div>
                      <h2 className="text-white mb-1">{cat.title}</h2>
                      <p className="text-white/60">{cat.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryCalcs.map((calc) => (
                      <CalculatorCard key={calc.id} calculator={calc} onNavigate={onNavigate} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Show filtered results
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCalculators.map((calc) => (
                <CalculatorCard key={calc.id} calculator={calc} onNavigate={onNavigate} />
              ))}
            </div>
            
            {filteredCalculators.length === 0 && (
              <div className="text-center py-16">
                <Calculator className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <h3 className="text-white mb-2">No calculators found</h3>
                <p className="text-white/60">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="glass-card rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Need Help Choosing?</h2>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Our AI-powered assistant can help you select the right calculators for your financial goals 
              and guide you through the calculation process.
            </p>
            <Button className="btn-glow">
              Talk to AI Assistant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CalculatorCardProps {
  calculator: {
    id: string;
    name: string;
    description: string;
    category: CalculatorCategory;
    icon: string;
  };
  onNavigate: (calculatorId: string) => void;
}

function CalculatorCard({ calculator, onNavigate }: CalculatorCardProps) {
  const Icon = Calculator;
  
  return (
    <article 
      className="glass-card rounded-lg p-6 hover:bg-white/10 transition-all cursor-pointer group"
      onClick={() => onNavigate(calculator.id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-[#39FF14]/10 rounded-lg border border-[#39FF14]/20">
          <Icon className="w-6 h-6 text-[#39FF14]" />
        </div>
        <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#39FF14] group-hover:translate-x-1 transition-all" />
      </div>
      
      <h3 className="text-white mb-2 group-hover:text-[#39FF14] transition-colors">
        {calculator.name}
      </h3>
      
      <p className="text-white/60 text-sm leading-relaxed">
        {calculator.description}
      </p>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <span className="text-xs text-white/40 uppercase tracking-wider">
          {calculator.category}
        </span>
      </div>
    </article>
  );
}
