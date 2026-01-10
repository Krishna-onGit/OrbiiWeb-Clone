import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: number[]
    onValueChange: (value: number[]) => void
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
    ({ className, value, onValueChange, ...props }, ref) => {
        return (
            <input
                type="range"
                ref={ref}
                value={value[0]}
                onChange={(e) => onValueChange([parseInt(e.target.value)])}
                className={cn(
                    "w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#39FF14]",
                    className
                )}
                {...props}
            />
        )
    }
)
Slider.displayName = "Slider"
