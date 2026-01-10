"use client";

import ActuarialTechPage from "@/components/insurance/ActuarialTechPage";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const router = useRouter();

    return (
        <ActuarialTechPage
            onBack={() => router.push(ROUTES.home)}
        />
    );
}
