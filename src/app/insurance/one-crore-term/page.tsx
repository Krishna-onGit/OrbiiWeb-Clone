"use client";

import OneCroreTermPage from "@/components/insurance/OneCroreTermPage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <OneCroreTermPage
            onBack={() => router.push(ROUTES.home)}
            onSelectProduct={(id) => router.push(ROUTES.insurance.productDetail(id))}
        />
    );
}
