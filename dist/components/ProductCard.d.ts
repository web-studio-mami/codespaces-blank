interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    isLimited?: boolean;
    isNew?: boolean;
    collection?: string;
    onAddToCart?: () => void;
    onClick?: () => void;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
}
export declare function ProductCard({ name, price, imageUrl, isLimited, isNew, collection, onAddToCart, onClick, isFavorite, onToggleFavorite, }: ProductCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ProductCard.d.ts.map