import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Filter, ChevronRight } from "lucide-react";
import { Button } from "./ui/button.js";
import { ProductCard } from "./ProductCard";
import { AnimatedSection } from "./AnimatedSection.js";
export function CatalogSection({ products, onAddToCart, onProductClick, favoriteIds = [], onToggleFavorite, }) {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedGender, setSelectedGender] = useState("all");
    const [selectedCollection, setSelectedCollection] = useState("all");
    const [selectedSubcategory, setSelectedSubcategory] = useState("all");
    const [showOnlyNew, setShowOnlyNew] = useState(false);
    const filteredProducts = products.filter((product) => {
        if (selectedCategory !== "all" &&
            product.category !== selectedCategory) {
            return false;
        }
        if (selectedGender !== "all" &&
            product.gender !== selectedGender) {
            return false;
        }
        if (selectedCollection !== "all" &&
            product.collection !== selectedCollection) {
            return false;
        }
        if (selectedSubcategory !== "all" &&
            product.subcategory !== selectedSubcategory) {
            return false;
        }
        if (showOnlyNew && !product.isNew) {
            return false;
        }
        return true;
    });
    // Получаем доступные подкатегории на основе выбранной коллекции
    const availableSubcategories = [
        { value: "all", label: "Все" },
        ...(selectedCollection !== "all"
            ? [
                { value: "верх", label: "Верх" },
                { value: "низ", label: "Низ" },
                { value: "аксессуары", label: "Аксессуары" },
            ]
            : []),
    ];
    const genderOptions = [
        { value: "all", label: "Все" },
        { value: "men", label: "Мужское" },
        { value: "women", label: "Женское" },
        { value: "unisex", label: "Unisex" },
    ];
    const categoryOptions = [
        { value: "all", label: "Все" },
        { value: "hoodie", label: "Худи" },
        { value: "tshirt", label: "Футболки" },
        { value: "pants", label: "Брюки" },
        { value: "jacket", label: "Куртки" },
        { value: "accessories", label: "Аксессуары" },
    ];
    const collectionOptions = [
        { value: "all", label: "Все коллекции" },
        {
            value: "Уличный минимализм",
            label: "Уличный минимализм",
        },
        {
            value: "Технологичный комфорт",
            label: "Технологичный комфорт",
        },
        { value: "Урбан классика", label: "Урбан классика" },
        { value: "Москва 2025", label: "Москва 2025" },
        {
            value: "Питерский авангард",
            label: "Питерский авангард",
        },
        {
            value: "Екатеринбург метал",
            label: "Екатеринбург метал",
        },
        { value: "Новосибирск техно", label: "Новосибирск техно" },
        { value: "Basics", label: "Basics" },
    ];
    const resetFilters = () => {
        setSelectedCategory("all");
        setSelectedGender("all");
        setSelectedCollection("all");
        setSelectedSubcategory("all");
        setShowOnlyNew(false);
    };
    return (_jsx("section", { id: "catalog", className: "py-12 md:py-24 overflow-hidden", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx(AnimatedSection, { className: "mb-12", children: _jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "w-12 h-1 bg-foreground" }), _jsx("h2", { className: "text-4xl md:text-5xl uppercase tracking-tight", children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433" })] }) }), _jsxs("div", { className: "mb-12 space-y-6", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Filter, { className: "w-4 h-4" }), _jsx("span", { className: "uppercase tracking-wider", children: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "text-sm uppercase tracking-wider text-muted-foreground", children: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438" }), _jsx(Button, { variant: showOnlyNew ? "default" : "outline", onClick: () => setShowOnlyNew(!showOnlyNew), className: "uppercase tracking-wider justify-center", children: showOnlyNew ? "Только новинки" : "Все товары" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "text-sm uppercase tracking-wider text-muted-foreground", children: "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F" }), _jsx("div", { className: "flex flex-wrap gap-2", children: collectionOptions.map((option) => (_jsx(Button, { variant: selectedCollection === option.value
                                            ? "default"
                                            : "outline", onClick: () => {
                                            setSelectedCollection(option.value);
                                            setSelectedSubcategory("all");
                                        }, className: "uppercase tracking-wider justify-center", children: option.label }, option.value))) })] }), selectedCollection !== "all" && (_jsxs("div", { className: "space-y-2 pl-4 border-l-2 border-[rgb(224,78,125)]", children: [_jsxs("div", { className: "text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2", children: [_jsx(ChevronRight, { className: "w-4 h-4" }), "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \"", selectedCollection, "\""] }), _jsx("div", { className: "flex flex-wrap gap-2", children: availableSubcategories.map((option) => (_jsx(Button, { variant: selectedSubcategory === option.value
                                            ? "default"
                                            : "outline", onClick: () => setSelectedSubcategory(option.value), className: "uppercase tracking-wider justify-center", children: option.label }, option.value))) })] })), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "text-sm uppercase tracking-wider text-muted-foreground", children: "\u041F\u043E\u043B" }), _jsx("div", { className: "flex flex-wrap gap-2", children: genderOptions.map((option) => (_jsx(Button, { variant: selectedGender === option.value
                                            ? "default"
                                            : "outline", onClick: () => setSelectedGender(option.value), className: "uppercase tracking-wider justify-center", children: option.label }, option.value))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "text-sm uppercase tracking-wider text-muted-foreground", children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430" }), _jsx("div", { className: "flex flex-wrap gap-2", children: categoryOptions.map((option) => (_jsx(Button, { variant: selectedCategory === option.value
                                            ? "default"
                                            : "outline", onClick: () => setSelectedCategory(option.value), className: "uppercase tracking-wider justify-center", children: option.label }, option.value))) })] }), _jsxs("div", { className: "flex items-center justify-between pt-4", children: [_jsxs("div", { className: "text-sm text-muted-foreground", children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432: ", filteredProducts.length] }), (selectedCategory !== "all" ||
                                    selectedGender !== "all" ||
                                    selectedCollection !== "all" ||
                                    selectedSubcategory !== "all" ||
                                    showOnlyNew) && (_jsx(Button, { variant: "ghost", onClick: resetFilters, className: "uppercase tracking-wider", children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B" }))] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8", children: filteredProducts.map((product) => (_jsx(ProductCard, { ...product, onAddToCart: () => onAddToCart?.(product), onClick: () => onProductClick?.(product), isFavorite: favoriteIds.includes(product.id), onToggleFavorite: () => onToggleFavorite?.(product) }, product.id))) }), filteredProducts.length === 0 && (_jsxs("div", { className: "text-center py-12", children: [_jsx("p", { className: "text-muted-foreground text-lg", children: "\u041F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C \u0442\u043E\u0432\u0430\u0440\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B" }), _jsx(Button, { variant: "outline", onClick: resetFilters, className: "mt-4 uppercase tracking-wider", children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B" })] }))] }) }));
}
//# sourceMappingURL=CatalogSection.js.map