"use client";

import InsuranceCalculatorPage from "@/components/insurance/InsuranceCalculatorPage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <InsuranceCalculatorPage
            onBack={() => router.push(ROUTES.home)}
            onSelectInsurance={(page) => {
                const mapping: Record<string, string> = {
                    'health': ROUTES.insurance.health,
                    'term': ROUTES.insurance.term,
                    'car': ROUTES.insurance.car,
                    'investment': ROUTES.insurance.investment,
                    'other': ROUTES.insurance.other,
                    'health-insurance': ROUTES.insurance.health,
                    'term-insurance': ROUTES.insurance.term,
                    'car-insurance': ROUTES.insurance.car,
                    'other-insurance': ROUTES.insurance.other,
                };
                router.push(mapping[page] || ROUTES.home);
            }}
            onSelectPage={(page) => {
                const mapping: Record<string, string> = {
                    'one-crore-term': ROUTES.insurance.oneCroreTerm,
                    'dynamic-pricing': ROUTES.tools.dynamicPricing,
                    'calculators-hub': ROUTES.calculators.hub,
                };
                router.push(mapping[page] || ROUTES.home);
            }}
            onSelectProduct={(id) => router.push(ROUTES.insurance.productDetail(id))}
        />
    );
}
