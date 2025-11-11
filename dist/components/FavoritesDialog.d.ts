interface FavoriteItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    collection: string;
}
interface FavoritesDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    items?: FavoriteItem[];
    onRemove?: (itemId: string) => void;
    onAddToCart?: (item: FavoriteItem) => void;
}
export declare function FavoritesDialog({ open, onOpenChange, items, onRemove, onAddToCart, }: FavoritesDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FavoritesDialog.d.ts.map