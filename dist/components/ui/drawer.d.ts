import * as React from "react";
interface DrawerProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}
declare function Drawer({ open, onOpenChange, children, }: DrawerProps): import("react/jsx-runtime").JSX.Element;
declare function DrawerTrigger({ className, children, ...props }: React.HTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
declare function DrawerPortal({ children, }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function DrawerClose({ className, children, asChild, ...props }: React.HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function DrawerOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element | null;
interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare function DrawerContent({ className, children, ...props }: DrawerContentProps): import("react/jsx-runtime").JSX.Element | null;
declare function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare function DrawerTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): import("react/jsx-runtime").JSX.Element;
declare function DrawerDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): import("react/jsx-runtime").JSX.Element;
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, };
//# sourceMappingURL=drawer.d.ts.map