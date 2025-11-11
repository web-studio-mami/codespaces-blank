interface HeroCollection {
    title: string;
    subtitle: string;
    imageUrl: string;
    ctaText: string;
    badge?: string;
}
interface HeroProps {
    collections: HeroCollection[];
    onCtaClick?: () => void;
}
export declare function Hero({ collections, onCtaClick }: HeroProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Hero.d.ts.map