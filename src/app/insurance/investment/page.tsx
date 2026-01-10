"use client";

import InvestmentPage from "@/components/insurance/InvestmentPage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <InvestmentPage
            onBack={() => router.push(ROUTES.home)}
            onSelectProduct={(id) => router.push(ROUTES.insurance.productDetail(id))}
        />
    );
}
