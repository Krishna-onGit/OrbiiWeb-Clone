import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const Select = ({ children, value, onValueChange, className }: any) => {
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

const SelectTrigger = ({ children, className }: any) => <div>{children}</div>
const SelectValue = ({ placeholder }: any) => <span>{placeholder}</span>
const SelectContent = ({ children }: any) => <>{children}</>
const SelectItem = ({ value, children }: any) => <option value={value} className="bg-black">{children}</option>

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
