interface CollabDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    collab: {
        artist: string;
        title: string;
        description: string;
        imageUrl: string;
        type: string;
    } | null;
}
export declare function CollabDialog({ open, onOpenChange, collab, }: CollabDialogProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=CollabDialog.d.ts.map