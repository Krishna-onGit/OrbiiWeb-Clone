import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface SelectProps {
    children: React.ReactNode;
    value: string;
    onValueChange: (value: string) => void;
    className?: string;
}

const Select = ({ children, value, onValueChange, className }: SelectProps) => {
    return (
        <div className={cn("relative w-full", className)}>
            <select
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                className="w-full h-10 px-3 bg-white/5 border border-white/10 rounded-md text-white appearance-none focus:outline-none focus:ring-1 focus:ring-brand"
            >
                {children}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
        </div>
    )
}

interface SelectTriggerProps {
    children: React.ReactNode;
    className?: string;
}

const SelectTrigger = ({ children, className }: SelectTriggerProps) => <div className={className}>{children}</div>
const SelectValue = ({ placeholder }: { placeholder?: string }) => <span>{placeholder}</span>
const SelectContent = ({ children }: { children: React.ReactNode }) => <>{children}</>

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
}

const SelectItem = ({ value, children }: SelectItemProps) => <option value={value} className="bg-black">{children}</option>

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
