import { insuranceProducts } from "./insuranceProducts";
import { allAdditionalProducts } from "./additionalProducts";
import { allRemainingProducts } from "./remainingProducts";
import { healthInsuranceExtension } from "./healthInsuranceExtension";
import { healthMotorExtension } from "./healthMotorExtension";
import { motorOtherExtension } from "./motorOtherExtension";
import { finalExtensionProducts } from "./finalExtension";

export const allProducts: Record<string, any> = {
    ...insuranceProducts,
    ...allAdditionalProducts,
    ...allRemainingProducts,
    ...healthInsuranceExtension,
    ...healthMotorExtension,
    ...motorOtherExtension,
    ...finalExtensionProducts
};

export const getProductById = (id: string) => allProducts[id];
