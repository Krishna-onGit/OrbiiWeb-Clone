"use client";

import CarInsurancePage from "@/components/insurance/CarInsurancePage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <CarInsurancePage
            onBack={() => router.push(ROUTES.home)}
            onSelectProduct={(id) => router.push(ROUTES.insurance.productDetail(id))}
        />
    );
}
