import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ResponsiveDialog, ResponsiveDialogContent, ResponsiveDialogHeader, ResponsiveDialogTitle, ResponsiveDialogDescription, } from "./ui/responsive-dialog.js";
import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";
import { Label } from "./ui/label.js";
import { useState } from "react";
import { Gift, Check } from "lucide-react";
const PRESET_AMOUNTS = [1000, 3000, 5000, 10000];
export function GiftCertificateDialog({ open, onOpenChange, }) {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = selectedAmount || parseInt(customAmount);
        if (amount && recipientEmail) {
            setSubmitted(true);
            setTimeout(() => {
                onOpenChange(false);
                setSubmitted(false);
                setSelectedAmount(null);
                setCustomAmount("");
                setRecipientEmail("");
                setMessage("");
            }, 2500);
        }
    };
    const finalAmount = selectedAmount || parseInt(customAmount) || 0;
    return (_jsx(ResponsiveDialog, { open: open, onOpenChange: onOpenChange, children: _jsxs(ResponsiveDialogContent, { className: "max-w-3xl", children: [_jsxs(ResponsiveDialogHeader, { children: [_jsxs(ResponsiveDialogTitle, { className: "flex items-center gap-2", children: [_jsx(Gift, { className: "w-5 h-5" }), "\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442"] }), _jsx(ResponsiveDialogDescription, { children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0438 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0435 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043D\u0430 email \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F" })] }), submitted ? (_jsxs("div", { className: "py-12 text-center", children: [_jsx("div", { className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Check, { className: "w-10 h-10 text-green-600" }) }), _jsx("h3", { className: "text-2xl mb-2", children: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D!" }), _jsx("p", { className: "text-muted-foreground", children: "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 email" })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx(Label, { className: "mb-3 block", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443" }), _jsx("div", { className: "grid grid-cols-2 gap-3", children: PRESET_AMOUNTS.map((amount) => (_jsxs("button", { type: "button", onClick: () => {
                                                            setSelectedAmount(amount);
                                                            setCustomAmount("");
                                                        }, className: `py-4 border transition-all flex items-center justify-center ${selectedAmount === amount
                                                            ? "border-foreground bg-foreground text-background"
                                                            : "border-border hover:border-foreground/50"}`, children: [amount.toLocaleString("ru-RU"), " \u20BD"] }, amount))) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "customAmount", children: "\u0418\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u044E \u0441\u0443\u043C\u043C\u0443" }), _jsx(Input, { id: "customAmount", type: "number", placeholder: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 500 \u20BD", value: customAmount, onChange: (e) => {
                                                        setCustomAmount(e.target.value);
                                                        setSelectedAmount(null);
                                                    }, className: "mt-1", min: "500" })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs(Label, { htmlFor: "recipientEmail", children: ["Email \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx(Input, { id: "recipientEmail", type: "email", placeholder: "recipient@email.com", value: recipientEmail, onChange: (e) => setRecipientEmail(e.target.value), className: "mt-1", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "message", children: "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435" }), _jsx("textarea", { id: "message", placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044E...", value: message, onChange: (e) => setMessage(e.target.value), className: "w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none bg-background text-foreground", rows: 4 })] })] })] }), _jsxs("div", { className: "border-t pt-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("span", { className: "text-lg", children: "\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435:" }), _jsxs("span", { className: "text-3xl", children: [finalAmount.toLocaleString("ru-RU"), " \u20BD"] })] }), _jsx(Button, { type: "submit", disabled: !finalAmount || !recipientEmail, className: "w-full bg-foreground text-background hover:bg-foreground/90 h-12 disabled:opacity-50 justify-center", children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442" }), _jsxs("div", { className: "mt-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground space-y-2", children: [_jsx("p", { children: "\u2022 \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 email \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 5 \u043C\u0438\u043D\u0443\u0442" }), _jsx("p", { children: "\u2022 \u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 \u2014 1 \u0433\u043E\u0434" }), _jsx("p", { children: "\u2022 \u041C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0447\u0430\u0441\u0442\u044F\u043C\u0438" }), _jsx("p", { children: "\u2022 \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430 \u0432\u0441\u044E \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430" })] })] })] }))] }) }));
}
//# sourceMappingURL=GiftCertificateDialog.js.map