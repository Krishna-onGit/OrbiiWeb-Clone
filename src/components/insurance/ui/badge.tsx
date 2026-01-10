import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'brand'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
    const variants = {
        default: "border-transparent bg-white/10 text-white",
        secondary: "border-transparent bg-white/5 text-white/70",
        destructive: "border-transparent bg-red-500/10 text-red-500",
        outline: "text-white border border-white/10",
        brand: "border-brand/20 bg-brand/10 text-brand"
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
