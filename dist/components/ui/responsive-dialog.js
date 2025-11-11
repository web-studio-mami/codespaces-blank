"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useIsMobile } from "./use-mobile";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "./dialog.js";
const ResponsiveDialogContext = React.createContext({ isMobile: false });
export function ResponsiveDialog({ open, onOpenChange, children, }) {
    const isMobile = useIsMobile();
    return (_jsx(ResponsiveDialogContext.Provider, { value: { isMobile }, children: _jsx(Dialog, { open: open, onOpenChange: onOpenChange, children: children }) }));
}
export function ResponsiveDialogContent({ className = "", children, }) {
    const { isMobile } = React.useContext(ResponsiveDialogContext);
    // На мобильных устройствах диалог прикрепляется к низу экрана
    const mobileClasses = isMobile
        ? "fixed bottom-0 top-auto left-0 right-0 translate-x-0 translate-y-0 rounded-t-2xl rounded-b-none border-t border-x-0 border-b-0 max-h-[85vh] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
        : "";
    return (_jsxs(DialogContent, { className: `${mobileClasses} ${className}`, children: [isMobile && (_jsx("div", { className: "mx-auto mt-2 mb-4 h-1.5 w-12 rounded-full bg-gray-300" })), children] }));
}
export function ResponsiveDialogHeader({ children, className = "", }) {
    const { isMobile } = React.useContext(ResponsiveDialogContext);
    return (_jsx(DialogHeader, { className: `${isMobile ? "px-4" : ""} ${className}`, children: children }));
}
export function ResponsiveDialogTitle({ children, className = "", }) {
    return (_jsx(DialogTitle, { className: className, children: children }));
}
export function ResponsiveDialogDescription({ children, className = "", }) {
    return (_jsx(DialogDescription, { className: className, children: children }));
}
export function ResponsiveDialogClose({ children, }) {
    return _jsx(_Fragment, { children: children });
}
//# sourceMappingURL=responsive-dialog.js.map