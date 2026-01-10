import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', ...props }, ref) => {
        const variants = {
            default: "bg-brand text-black hover:opacity-90",
            destructive: "bg-red-500 text-white hover:bg-red-600",
            outline: "border border-white/10 bg-transparent hover:bg-white/5 text-white",
            secondary: "bg-white/10 text-white hover:bg-white/20",
            ghost: "hover:bg-white/5 text-white",
            link: "text-brand underline-offset-4 hover:underline",
        }

        const sizes = {
            default: "h-10 px-6 py-2",
            sm: "h-9 px-4",
            lg: "h-12 px-8 text-[12px]",
            icon: "h-10 w-10",
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50 active:scale-95",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
