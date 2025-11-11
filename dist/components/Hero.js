import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, ChevronLeft, ChevronRight, } from "lucide-react";
import { Button } from "./ui/button.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { AnimatedSection } from "./AnimatedSection.js";
import { useState, useEffect } from "react";
export function Hero({ collections, onCtaClick }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
        setCurrentIndex((prev) => prev > 0 ? prev - 1 : collections.length - 1);
    };
    const handleNext = () => {
        setCurrentIndex((prev) => prev < collections.length - 1 ? prev + 1 : 0);
    };
    const currentCollection = collections[currentIndex];
    return (_jsx("section", { id: "new", className: "relative min-h-screen flex items-center pt-20", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center", children: [_jsxs(AnimatedSection, { className: "space-y-8", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "inline-block", children: _jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-[rgb(224,78,125)] text-white uppercase tracking-wider mt-8 md:mt-0", children: [_jsx("div", { className: "w-2 h-2 bg-white" }), _jsx("span", { children: currentCollection.badge || "Limited Drop" })] }) }), _jsx("h1", { className: "text-5xl md:text-7xl uppercase tracking-tight leading-none", children: currentCollection.title }), _jsx("p", { className: "text-lg text-muted-foreground max-w-md", children: currentCollection.subtitle })] }), _jsx("div", { className: "flex flex-col sm:flex-row gap-4", children: _jsxs(Button, { size: "lg", className: "bg-foreground text-background uppercase tracking-wider group justify-center", onClick: onCtaClick, children: [currentCollection.ctaText, _jsx(ArrowRight, { className: "ml-2 w-5 h-5 md:group-hover:translate-x-1 md:transition-transform" })] }) }), _jsxs("div", { className: "flex items-center gap-4 pt-4 md:pt-8", children: [_jsx(Button, { variant: "outline", size: "icon", onClick: handlePrev, className: "rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background h-10 w-10", children: _jsx(ChevronLeft, { className: "w-5 h-5" }) }), _jsx("div", { className: "flex gap-2", children: collections.map((_, index) => (_jsx("button", { onClick: () => setCurrentIndex(index), className: `h-2 rounded-full transition-all ${index === currentIndex
                                                ? "w-8 bg-foreground"
                                                : "w-2 bg-muted-foreground/30"}`, "aria-label": `Перейти к коллекции ${index + 1}` }, index))) }), _jsx(Button, { variant: "outline", size: "icon", onClick: handleNext, className: "rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background h-10 w-10", children: _jsx(ChevronRight, { className: "w-5 h-5" }) })] })] }), _jsxs(AnimatedSection, { delay: 200, className: "relative", children: [_jsx("div", { className: "relative aspect-[3/4] overflow-hidden", children: _jsx(ImageWithFallback, { src: currentCollection.imageUrl, alt: currentCollection.title, className: "w-full h-full object-cover transition-opacity duration-300" }) }), _jsxs("div", { className: "absolute bottom-0 left-0 md:-bottom-6 md:-left-6 bg-foreground text-background p-4 md:p-6 uppercase tracking-wider", children: [_jsx("div", { className: "text-2xl md:text-3xl", children: String(currentIndex + 1).padStart(2, "0") }), _jsx("div", { className: "text-xs mt-1", children: "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F" })] })] })] }) }) }));
}
//# sourceMappingURL=Hero.js.map