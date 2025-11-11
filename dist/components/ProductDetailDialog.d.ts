interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    collection: string;
    category: string;
    gender: string;
}
interface ProductDetailDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    product: Product | null;
    onAddToCart: (size: string, quantity: number) => void;
}
export declare function ProductDetailDialog({ open, onOpenChange, product, onAddToCart, }: ProductDetailDialogProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=ProductDetailDialog.d.ts.map