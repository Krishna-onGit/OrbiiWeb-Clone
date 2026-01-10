export const ROUTES = {
    home: '/',
    insurance: {
        index: '/insurance',
        health: '/insurance/health',
        term: '/insurance/term',
        car: '/insurance/car',
        investment: '/insurance/investment',
        other: '/insurance/other',
        oneCroreTerm: '/insurance/one-crore-term',
        productDetail: (id: string) => `/insurance/products/${id}`,
    },
    calculators: {
        hub: '/calculators',
        premium: '/calculators/insurance',
        specific: (slug: string) => `/calculators/${slug}`,
    },
    tools: {
        dynamicPricing: '/tools/dynamic-pricing',
    },
    tech: {
        actuarial: '/tech/actuarial',
    },
    business: {
        insurers: '/business/insurers',
    }
};

export type RouteKey = keyof typeof ROUTES;
