import { DesignSystem } from "@microsoft/fast-foundation";

export function providePropsDesignSystem(element?: HTMLElement): DesignSystem {
    return DesignSystem.getOrCreate(element).withPrefix("props");
}
