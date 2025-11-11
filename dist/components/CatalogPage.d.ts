interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    isLimited?: boolean;
    isNew?: boolean;
    collection: string;
    category: string;
    gender: string;
    subcategory?: string;
}
interface CatalogPageProps {
    products: Product[];
    onAddToCart?: (product: Product) => void;
    onProductClick?: (product: Product) => void;
    favoriteIds?: string[];
    onToggleFavorite?: (product: Product) => void;
}
export declare function CatalogPage({ products, onAddToCart, onProductClick, favoriteIds, onToggleFavorite, }: CatalogPageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CatalogPage.d.ts.map