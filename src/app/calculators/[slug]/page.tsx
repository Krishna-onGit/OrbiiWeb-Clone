"use client";

import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import React, { ComponentType, Suspense } from "react";
import { ROUTES } from "@/config/routes";

const calculatorMap: Record<string, ComponentType<{ onBack: () => void }>> = {
    'sip': dynamic(() => import("@/components/calculators/SIPCalculatorPage")),
    'compound-interest': dynamic(() => import("@/components/calculators/CompoundInterestCalculatorPage")),
    'pension': dynamic(() => import("@/components/calculators/PensionCalculatorPage")),
    'nps': dynamic(() => import("@/components/calculators/NPSCalculatorPage")),
    'ulip': dynamic(() => import("@/components/calculators/ULIPCalculatorPage")),
    'human-life-value': dynamic(() => import("@/components/calculators/HumanLifeValueCalculatorPage")),
    'fd': dynamic(() => import("@/components/calculators/FDCalculatorPage")),
    'ppf': dynamic(() => import("@/components/calculators/PPFCalculatorPage")),
    'health-insurance': dynamic(() => import("@/components/calculators/HealthInsurancePremiumCalculatorPage")),
    'car-insurance': dynamic(() => import("@/components/calculators/CarInsuranceCalculatorPage")),
    'life-insurance': dynamic(() => import("@/components/calculators/LifeInsuranceCalculatorPage")),
    'income-tax': dynamic(() => import("@/components/calculators/IncomeTaxCalculatorPage")),
    'gst': dynamic(() => import("@/components/calculators/GSTCalculatorPage")),
    'bmi': dynamic(() => import("@/components/calculators/BMICalculatorPage")),
    'ideal-weight': dynamic(() => import("@/components/calculators/IdealWeightCalculatorPage")),
    'calorie': dynamic(() => import("@/components/calculators/CalorieCalculatorPage")),
    'bmr': dynamic(() => import("@/components/calculators/BMRCalculatorPage")),
    'body-fat': dynamic(() => import("@/components/calculators/BodyFatCalculatorPage")),
    'due-date': dynamic(() => import("@/components/calculators/DueDateCalculatorPage")),
    'ovulation': dynamic(() => import("@/components/calculators/OvulationCalculatorPage")),
    'macro': dynamic(() => import("@/components/calculators/MacroCalculatorPage")),
    // Fallbacks
    'bike-insurance': dynamic(() => import("@/components/calculators/CarInsuranceCalculatorPage")),
    'term-insurance': dynamic(() => import("@/components/calculators/LifeInsuranceCalculatorPage")),
};

export default function Page() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const CalculatorComponent = calculatorMap[slug];

    if (!CalculatorComponent) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-4xl font-bold mb-4">Calculator Not Found</h1>
                <button onClick={() => router.push(ROUTES.calculators.hub)} className="btn-primary">
                    Back to Calculators Hub
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
                <CalculatorComponent onBack={() => router.push(ROUTES.calculators.hub)} />
            </Suspense>
        </div>
    );
}
