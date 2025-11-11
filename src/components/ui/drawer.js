"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "./utils.js";
const DrawerContext = React.createContext({
    open: false,
    onOpenChange: () => { },
});
function Drawer({ open = false, onOpenChange, children, }) {
    return (_jsx(DrawerContext.Provider, { value: { open, onOpenChange: onOpenChange || (() => { }) }, children: children }));
}
function DrawerTrigger({ className, children, ...props }) {
    const { onOpenChange } = React.useContext(DrawerContext);
    return (_jsx("button", { className: className, onClick: () => onOpenChange(true), ...props, children: children }));
}
function DrawerPortal({ children, }) {
    return _jsx(_Fragment, { children: children });
}
function DrawerClose({ className, children, asChild, ...props }) {
    const { onOpenChange } = React.useContext(DrawerContext);
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            onClick: (e) => {
                onOpenChange(false);
                if (children.props.onClick) {
                    children.props.onClick(e);
                }
            },
        });
    }
    return (_jsx("button", { className: className, onClick: () => onOpenChange(false), ...props, children: children }));
}
function DrawerOverlay({ className, ...props }) {
    const { open } = React.useContext(DrawerContext);
    if (!open)
        return null;
    return (_jsx("div", { className: cn("fixed inset-0 z-50 bg-black/50 transition-opacity", className), ...props }));
}
function DrawerContent({ className, children, ...props }) {
    const { open, onOpenChange } = React.useContext(DrawerContext);
    if (!open)
        return null;
    return (_jsxs(DrawerPortal, { children: [_jsx(DrawerOverlay, { onClick: () => onOpenChange(false) }), _jsxs("div", { className: cn("fixed bottom-0 left-0 right-0 z-50 bg-background", "max-h-[80vh] rounded-t-2xl border-t", "flex flex-col overflow-hidden", "animate-in slide-in-from-bottom duration-300", className), ...props, children: [_jsx("div", { className: "mx-auto mt-4 h-1.5 w-12 shrink-0 rounded-full bg-gray-300" }), children] })] }));
}
function DrawerHeader({ className, ...props }) {
    return (_jsx("div", { className: cn("flex flex-col gap-1.5 p-4", className), ...props }));
}
function DrawerFooter({ className, ...props }) {
    return (_jsx("div", { className: cn("mt-auto flex flex-col gap-2 p-4", className), ...props }));
}
function DrawerTitle({ className, ...props }) {
    return (_jsx("h2", { className: cn("text-foreground", className), ...props }));
}
function DrawerDescription({ className, ...props }) {
    return (_jsx("p", { className: cn("text-muted-foreground text-sm", className), ...props }));
}
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, };
//# sourceMappingURL=drawer.js.map