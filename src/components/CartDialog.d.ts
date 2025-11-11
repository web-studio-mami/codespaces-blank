interface CartItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    size: string;
    quantity: number;
}
interface CartDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    items: CartItem[];
    onUpdateQuantity: (id: string, size: string, quantity: number) => void;
    onRemoveItem: (id: string, size: string) => void;
}
export declare function CartDialog({ open, onOpenChange, items, onUpdateQuantity, onRemoveItem, }: CartDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CartDialog.d.ts.map