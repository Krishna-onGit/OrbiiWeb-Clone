import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext<{
    value: string;
    onValueChange: (value: string) => void;
}>({ value: '', onValueChange: () => { } });

interface TabsProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
    className?: string;
}

const Tabs = ({ defaultValue, value, onValueChange, children, className }: TabsProps) => {
    const [activeValue, setActiveValue] = React.useState(value || defaultValue);

    React.useEffect(() => {
        if (value) setActiveValue(value);
    }, [value]);

    const handleValueChange = (val: string) => {
        setActiveValue(val);
        if (onValueChange) onValueChange(val);
    };

    return (
        <TabsContext.Provider value={{ value: activeValue || '', onValueChange: handleValueChange }}>
            <div className={cn("w-full", className)}>{children}</div>
        </TabsContext.Provider>
    );
};

interface TabsListProps {
    children: React.ReactNode;
    className?: string;
}

const TabsList = ({ children, className }: TabsListProps) => (
    <div className={cn("inline-flex h-10 items-center justify-center rounded-lg bg-white/5 p-1 text-white/50", className)}>
        {children}
    </div>
);

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

const TabsTrigger = ({ value, children, className }: TabsTriggerProps) => {
    const { value: activeValue, onValueChange } = React.useContext(TabsContext);
    const isActive = activeValue === value;

    return (
        <button
            onClick={() => onValueChange(value)}
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                isActive ? "bg-brand text-black shadow-sm" : "hover:bg-white/5 hover:text-white",
                className
            )}
        >
            {children}
        </button>
    );
};

interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

const TabsContent = ({ value, children, className }: TabsContentProps) => {
    const { value: activeValue } = React.useContext(TabsContext);
    if (activeValue !== value) return null;

    return (
        <div className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}>
            {children}
        </div>
    );
};

export { Tabs, TabsList, TabsTrigger, TabsContent }
