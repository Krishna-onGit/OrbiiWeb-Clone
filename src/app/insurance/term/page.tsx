"use client";

import TermInsurancePage from "@/components/insurance/TermInsurancePage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <TermInsurancePage
            onBack={() => router.push(ROUTES.home)}
            onSelectProduct={(id) => router.push(ROUTES.insurance.productDetail(id))}
        />
    );
}
