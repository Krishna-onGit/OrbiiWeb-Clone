"use client";

import { useParams, useRouter } from "next/navigation";
import InsuranceDetailPage from "@/components/insurance/InsuranceDetailPage";
import { getProductById } from "@/data/insurance";
import { ROUTES } from "@/config/routes";

export default function Page() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                <p className="mb-8 opacity-70">The insurance product you are looking for does not exist.</p>
                <button onClick={() => router.push(ROUTES.home)} className="btn-primary">
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <InsuranceDetailPage
            product={product}
            onBack={() => router.back()}
        />
    );
}
