"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Toaster as Sonner, ToasterProps } from "sonner";
const Toaster = ({ ...props }) => {
    return (_jsx(Sonner, { theme: "light", className: "toaster group", style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)",
        }, ...props }));
};
export { Toaster };
//# sourceMappingURL=sonner.js.map