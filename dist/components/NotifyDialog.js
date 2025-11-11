import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ResponsiveDialog, ResponsiveDialogContent, ResponsiveDialogHeader, ResponsiveDialogTitle, ResponsiveDialogDescription, } from "./ui/responsive-dialog.js";
import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";
import { Label } from "./ui/label.js";
import { useState } from "react";
import { Bell, Check } from "lucide-react";
export function NotifyDialog({ open, onOpenChange, collectionName, }) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email || phone) {
            setSubmitted(true);
            setTimeout(() => {
                onOpenChange(false);
                setSubmitted(false);
                setEmail("");
                setPhone("");
            }, 2000);
        }
    };
    return (_jsx(ResponsiveDialog, { open: open, onOpenChange: onOpenChange, children: _jsxs(ResponsiveDialogContent, { className: "max-w-md", children: [_jsxs(ResponsiveDialogHeader, { children: [_jsxs(ResponsiveDialogTitle, { className: "flex items-center gap-2", children: [_jsx(Bell, { className: "w-5 h-5" }), "\u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043E \u0441\u0442\u0430\u0440\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0436"] }), _jsx(ResponsiveDialogDescription, { children: "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E \u043D\u0430\u0447\u0430\u043B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438" })] }), submitted ? (_jsxs("div", { className: "py-8 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Check, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "text-xl mb-2", children: "\u0413\u043E\u0442\u043E\u0432\u043E!" }), _jsx("p", { className: "text-muted-foreground", children: "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0432\u0430\u043C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430\u0447\u043D\u0443\u0442\u0441\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438" })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx("div", { children: _jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: ["\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B, \u0438 \u043C\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u043C \u0432\u0430\u043C \u043E \u0441\u0442\u0430\u0440\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0436 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438", " ", _jsx("span", { className: "font-medium", children: collectionName })] }) }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "your@email.com", value: email, onChange: (e) => setEmail(e.target.value), className: "mt-1" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "phone", children: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D (\u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E)" }), _jsx(Input, { id: "phone", type: "tel", placeholder: "+7 (900) 123-45-67", value: phone, onChange: (e) => setPhone(e.target.value), className: "mt-1" })] })] }), _jsxs("div", { className: "space-y-3", children: [_jsx(Button, { type: "submit", disabled: !email && !phone, className: "w-full bg-foreground text-background hover:bg-foreground/90 h-12 disabled:opacity-50 justify-center", children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F" }), _jsx("p", { className: "text-xs text-center text-muted-foreground", children: "\u041C\u044B \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u043C \u0432\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C" })] })] }))] }) }));
}
//# sourceMappingURL=NotifyDialog.js.map