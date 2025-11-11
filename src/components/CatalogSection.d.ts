interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    isLimited?: boolean;
    isNew?: boolean;
    collection?: string;
    category?: string;
    gender?: string;
    subcategory?: string;
}
export declare function CatalogSection({ products, onAddToCart, onProductClick, favoriteIds, onToggleFavorite, }: {
    products: Product[];
    onAddToCart?: (product: Product) => void;
    onProductClick?: (product: Product) => void;
    favoriteIds?: string[];
    onToggleFavorite?: (product: Product) => void;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CatalogSection.d.ts.map