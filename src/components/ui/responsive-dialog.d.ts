import * as React from "react";
interface ResponsiveDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}
interface ResponsiveDialogContentProps {
    className?: string;
    children: React.ReactNode;
}
interface ResponsiveDialogHeaderProps {
    children: React.ReactNode;
    className?: string;
}
interface ResponsiveDialogTitleProps {
    children: React.ReactNode;
    className?: string;
}
interface ResponsiveDialogDescriptionProps {
    children: React.ReactNode;
    className?: string;
}
export declare function ResponsiveDialog({ open, onOpenChange, children, }: ResponsiveDialogProps): import("react/jsx-runtime").JSX.Element;
export declare function ResponsiveDialogContent({ className, children, }: ResponsiveDialogContentProps): import("react/jsx-runtime").JSX.Element;
export declare function ResponsiveDialogHeader({ children, className, }: ResponsiveDialogHeaderProps): import("react/jsx-runtime").JSX.Element;
export declare function ResponsiveDialogTitle({ children, className, }: ResponsiveDialogTitleProps): import("react/jsx-runtime").JSX.Element;
export declare function ResponsiveDialogDescription({ children, className, }: ResponsiveDialogDescriptionProps): import("react/jsx-runtime").JSX.Element;
export declare function ResponsiveDialogClose({ children, }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=responsive-dialog.d.ts.map