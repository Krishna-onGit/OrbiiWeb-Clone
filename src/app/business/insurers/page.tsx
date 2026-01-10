"use client";

import ForInsurersPage from "@/components/insurance/ForInsurersPage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <ForInsurersPage
            onBack={() => router.push(ROUTES.home)}
        />
    );
}
