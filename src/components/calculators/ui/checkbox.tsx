import * as React from "react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
    <input
        type="checkbox"
        ref={ref}
        className={cn(
            "h-4 w-4 rounded border-white/20 bg-white/5 text-brand focus:ring-brand",
            className
        )}
        {...props}
    />
))
Checkbox.displayName = "Checkbox"

export { Checkbox }
