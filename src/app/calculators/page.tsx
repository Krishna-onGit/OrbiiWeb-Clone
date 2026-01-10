"use client";

import CalculatorsHubPage from "@/components/insurance/CalculatorsHubPage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <CalculatorsHubPage
            onBack={() => router.push(ROUTES.home)}
            onNavigate={(id) => router.push(ROUTES.calculators.specific(id))}
        />
    );
}
