interface HeroCollection {
    title: string;
    subtitle: string;
    imageUrl: string;
    ctaText: string;
    badge?: string;
}
interface LimitedCollection {
    name: string;
    description: string;
    imageUrl: string;
    releaseDate: Date;
    city?: string;
}
interface Collaboration {
    artist: string;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
}
interface HomePageProps {
    heroCollections: HeroCollection[];
    limitedCollections: LimitedCollection[];
    collaborations: Collaboration[];
    onNotify?: (collectionName: string) => void;
    onViewCatalog: () => void;
    onCollabClick?: (collab: Collaboration) => void;
    onGiftCertificateClick?: () => void;
}
export declare function HomePage({ heroCollections, limitedCollections, collaborations, onNotify, onViewCatalog, onCollabClick, onGiftCertificateClick, }: HomePageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HomePage.d.ts.map