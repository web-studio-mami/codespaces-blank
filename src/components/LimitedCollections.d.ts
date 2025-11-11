interface CollectionProps {
    name: string;
    description: string;
    imageUrl: string;
    releaseDate: Date;
    city?: string;
}
export declare function LimitedCollections({ collections, onNotify, }: {
    collections: CollectionProps[];
    onNotify?: (collectionName: string) => void;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LimitedCollections.d.ts.map