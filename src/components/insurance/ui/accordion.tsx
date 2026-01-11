import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    type?: string;
    collapsible?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Accordion = ({ children, className, type: _type, collapsible: _collapsible, ...props }: AccordionProps) => (
    <div className={cn("space-y-2", className)} {...props}>
        {children}
    </div>
)

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    value?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AccordionItem = ({ children, className, value: _value, ...props }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className={cn("border-b border-white/10", className)} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<{ isOpen?: boolean; setIsOpen?: (isOpen: boolean) => void }>, { isOpen, setIsOpen })
                }
                return child
            })}
        </div>
    )
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}

const AccordionTrigger = ({ children, className, isOpen, setIsOpen, ...props }: AccordionTriggerProps) => (
    <button
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
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

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    isOpen?: boolean;
}

const AccordionContent = ({ children, className, isOpen, ...props }: AccordionContentProps) => (
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
