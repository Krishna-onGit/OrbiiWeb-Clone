"use client";

import DynamicPricingSimulator from "@/components/insurance/DynamicPricingSimulator";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <DynamicPricingSimulator
            onBack={() => router.push(ROUTES.home)}
        />
    );
}
