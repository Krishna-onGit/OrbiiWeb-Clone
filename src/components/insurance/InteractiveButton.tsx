import { Button } from './ui/button';
import { ReactNode } from 'react';

interface InteractiveButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
  color?: 'purple' | 'green' | 'yellow' | 'red' | 'blue' | 'orange' | 'pink';
  size?: 'sm' | 'md' | 'lg';
}

export default function InteractiveButton({ 
  isActive, 
  onClick, 
  children, 
  color = 'purple',
  size = 'md'
}: InteractiveButtonProps) {
  
  const colorClasses = {
    purple: {
      active: 'bg-purple-500/30 border-purple-500 shadow-purple-500/50',
      hover: 'hover:border-purple-400 hover:bg-purple-500/10 hover:shadow-purple-500/30'
    },
    green: {
      active: 'bg-green-500/30 border-green-500 shadow-green-500/50',
      hover: 'hover:border-green-400 hover:bg-green-500/10 hover:shadow-green-500/30'
    },
    yellow: {
      active: 'bg-yellow-500/30 border-yellow-500 shadow-yellow-500/50',
      hover: 'hover:border-yellow-400 hover:bg-yellow-500/10 hover:shadow-yellow-500/30'
    },
    red: {
      active: 'bg-red-500/30 border-red-500 shadow-red-500/50',
      hover: 'hover:border-red-400 hover:bg-red-500/10 hover:shadow-red-500/30'
    },
    blue: {
      active: 'bg-blue-500/30 border-blue-500 shadow-blue-500/50',
      hover: 'hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-blue-500/30'
    },
    orange: {
      active: 'bg-orange-500/30 border-orange-500 shadow-orange-500/50',
      hover: 'hover:border-orange-400 hover:bg-orange-500/10 hover:shadow-orange-500/30'
    },
    pink: {
      active: 'bg-pink-500/30 border-pink-500 shadow-pink-500/50',
      hover: 'hover:border-pink-400 hover:bg-pink-500/10 hover:shadow-pink-500/30'
    }
  };

  const sizeClasses = {
    sm: 'min-w-[80px] py-4 px-4 text-sm',
    md: 'min-w-[100px] py-5 px-5',
    lg: 'min-w-[120px] py-6 px-6 text-lg'
  };

  return (
    <Button 
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        transition-all duration-300 ease-out
        border-2
        ${isActive 
          ? `${colorClasses[color].active} shadow-lg scale-105 font-semibold` 
          : `glass-card border-white/20 ${colorClasses[color].hover} hover:shadow-md active:scale-95`
        }
        touch-manipulation
        select-none
      `}
    >
      {children}
    </Button>
  );
}
