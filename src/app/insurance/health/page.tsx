"use client";

import HealthInsurancePage from "@/components/insurance/HealthInsurancePage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <HealthInsurancePage
            onBack={() => router.push(ROUTES.home)}
            onSelectProduct={(id) => router.push(ROUTES.insurance.productDetail(id))}
        />
    );
}
