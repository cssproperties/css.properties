import { providePropsDesignSystem } from "./design-system.js";

export * from "./design-system.js";
import { allComponents } from "./components/index.js";

export const PropsDesignSystem = providePropsDesignSystem().register(allComponents);
