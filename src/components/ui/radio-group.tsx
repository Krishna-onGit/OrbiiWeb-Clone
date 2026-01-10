import * as React from "react"
import { cn } from "@/lib/utils"

const RadioGroupContext = React.createContext<{
    value?: string
    onValueChange?: (value: string) => void
}>({})

export const RadioGroup = ({
    className,
    value,
    onValueChange,
    children,
    ...props
}: any) => {
    return (
        <RadioGroupContext.Provider value={{ value, onValueChange }}>
            <div className={cn("grid gap-2", className)} {...props}>
                {children}
            </div>
        </RadioGroupContext.Provider>
    )
}

export const RadioGroupItem = React.forwardRef<
    HTMLInputElement,
    any
>(({ className, value, id, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext)
    const checked = context.value === value

    return (
        <div
            className={cn(
                "aspect-square h-4 w-4 rounded-full border border-white/20 text-white ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center cursor-pointer",
                checked && "border-[#39FF14]",
                className
            )}
            onClick={() => context.onValueChange?.(value)}
        >
            {checked && (
                <div className="h-2.5 w-2.5 rounded-full bg-[#39FF14]" />
            )}
            <input
                type="radio"
                className="hidden"
                value={value}
                checked={checked}
                readOnly
                {...props}
            />
        </div>
    )
})
RadioGroupItem.displayName = "RadioGroupItem"
