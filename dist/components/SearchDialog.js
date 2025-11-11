import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ResponsiveDialog, ResponsiveDialogContent, ResponsiveDialogHeader, ResponsiveDialogTitle, ResponsiveDialogDescription, } from "./ui/responsive-dialog.js";
import { Input } from "./ui/input.js";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button.js";
export function SearchDialog({ open, onOpenChange, }) {
    const [searchQuery, setSearchQuery] = useState("");
    // Моковые результаты поиска
    const mockResults = [
        {
            id: "1",
            name: "Худи Конструктивизм",
            price: 6990,
            category: "Худи",
        },
        {
            id: "2",
            name: "Оверсайз футболка",
            price: 3490,
            category: "Футболки",
        },
        {
            id: "3",
            name: "Карго брюки Urban",
            price: 8990,
            category: "Брюки",
        },
        {
            id: "4",
            name: "Бомбер авангард",
            price: 12990,
            category: "Куртки",
        },
    ];
    const filteredResults = searchQuery
        ? mockResults.filter((item) => item.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()))
        : [];
    return (_jsx(ResponsiveDialog, { open: open, onOpenChange: onOpenChange, children: _jsxs(ResponsiveDialogContent, { className: "max-w-3xl", children: [_jsxs(ResponsiveDialogHeader, { children: [_jsx(ResponsiveDialogTitle, { children: "\u041F\u043E\u0438\u0441\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432" }), _jsx(ResponsiveDialogDescription, { children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0442\u043E\u0432\u0430\u0440\u0430" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }), _jsx(Input, { value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "\u041F\u043E\u0438\u0441\u043A...", className: "pl-10 pr-10 h-12", autoFocus: true }), searchQuery && (_jsx("button", { onClick: () => setSearchQuery(""), className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600", children: _jsx(X, { className: "w-5 h-5" }) }))] }), _jsxs("div", { className: "space-y-3", children: [searchQuery && filteredResults.length > 0 && (_jsxs("div", { className: "space-y-2", children: [_jsxs("p", { className: "text-sm text-gray-600", children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432: ", filteredResults.length] }), _jsx("div", { className: "space-y-2 max-h-[400px] overflow-y-auto", children: filteredResults.map((item) => (_jsxs("a", { href: "#catalog", onClick: () => onOpenChange(false), className: "flex items-center justify-between p-4 border border-gray-200 hover:border-gray-400 transition-colors group", children: [_jsxs("div", { children: [_jsx("p", { className: "group-hover:text-red-600 transition-colors", children: item.name }), _jsx("p", { className: "text-sm text-gray-500", children: item.category })] }), _jsxs("p", { className: "font-medium", children: [item.price.toLocaleString("ru-RU"), " \u20BD"] })] }, item.id))) })] })), searchQuery && filteredResults.length === 0 && (_jsxs("div", { className: "text-center py-12 text-gray-500", children: [_jsx("p", { children: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" }), _jsx("p", { className: "text-sm mt-2", children: "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441" })] })), !searchQuery && (_jsxs("div", { className: "space-y-3", children: [_jsx("p", { className: "text-sm text-gray-600", children: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: [
                                                "Худи",
                                                "Футболки",
                                                "Брюки",
                                                "Куртки",
                                                "Limited",
                                            ].map((tag) => (_jsx("button", { onClick: () => setSearchQuery(tag), className: "px-4 py-2 border border-gray-300 hover:border-gray-400 transition-colors text-sm flex items-center justify-center", children: tag }, tag))) })] }))] })] })] }) }));
}
//# sourceMappingURL=SearchDialog.js.map