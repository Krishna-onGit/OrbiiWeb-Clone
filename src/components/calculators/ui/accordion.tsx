import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const Accordion = ({ children, className, ...props }: any) => (
    <div className={cn("space-y-2", className)} {...props}>
        {children}
    </div>
)

const AccordionItem = ({ children, className, value, ...props }: any) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className={cn("border-b border-white/10", className)} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { isOpen, setIsOpen })
                }
                return child
            })}
        </div>
    )
}

const AccordionTrigger = ({ children, className, isOpen, setIsOpen, ...props }: any) => (
    <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
            "flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            className
        )}
        {...props}
    >
        {children}
        <ChevronDown
            className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
        />
    </button>
)

const AccordionContent = ({ children, className, isOpen, ...props }: any) => (
    <div
        className={cn(
            "overflow-hidden text-sm transition-all",
            isOpen ? "max-h-96 pb-4 pt-0" : "max-h-0",
            className
        )}
        {...props}
    >
        {children}
    </div>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
