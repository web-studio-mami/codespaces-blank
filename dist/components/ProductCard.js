import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "./ui/button.js";
import { Badge } from "./ui/badge.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { AnimatedSection } from "./AnimatedSection.js";
import { toast } from "sonner";
export function ProductCard({ name, price, imageUrl, isLimited, isNew, collection, onAddToCart, onClick, isFavorite = false, onToggleFavorite, }) {
    const heartButtonRef = useRef(null);
    const createFlyingHeart = (startElement) => {
        // Find the favorites icon in header
        const favIcon = document.getElementById("favorites-icon") ||
            document.getElementById("favorites-icon-mobile");
        if (!favIcon)
            return;
        // Get positions
        const startRect = startElement.getBoundingClientRect();
        const endRect = favIcon.getBoundingClientRect();
        // Create flying heart element
        const flyingHeart = document.createElement("div");
        flyingHeart.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.05 3 5.5l7 7Z"/></svg>';
        flyingHeart.style.position = "fixed";
        flyingHeart.style.left = `${startRect.left + startRect.width / 2}px`;
        flyingHeart.style.top = `${startRect.top + startRect.height / 2}px`;
        flyingHeart.style.width = "24px";
        flyingHeart.style.height = "24px";
        flyingHeart.style.zIndex = "9999";
        flyingHeart.style.pointerEvents = "none";
        flyingHeart.style.transition =
            "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        flyingHeart.style.opacity = "1";
        document.body.appendChild(flyingHeart);
        // Trigger animation
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                flyingHeart.style.left = `${endRect.left + endRect.width / 2}px`;
                flyingHeart.style.top = `${endRect.top + endRect.height / 2}px`;
                flyingHeart.style.transform = "scale(0.5)";
                flyingHeart.style.opacity = "0.8";
            });
        });
        // Remove after animation
        setTimeout(() => {
            flyingHeart.remove();
        }, 800);
    };
    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        // Create flying animation only when adding to favorites
        if (!isFavorite && heartButtonRef.current) {
            createFlyingHeart(heartButtonRef.current);
        }
        onToggleFavorite?.();
    };
    return (_jsxs(AnimatedSection, { className: "group relative", children: [_jsxs("div", { className: "relative aspect-[3/4] overflow-hidden bg-muted mb-4 cursor-pointer", onClick: onClick, children: [_jsx(ImageWithFallback, { src: imageUrl, alt: name, className: "w-full h-full object-cover md:group-hover:scale-105 md:transition-transform md:duration-500" }), _jsxs("div", { className: "absolute top-4 left-4 flex flex-col gap-2", children: [isNew && (_jsx(Badge, { className: "bg-blue-600 text-white uppercase tracking-wider text-[12px]", children: "New" })), isLimited && (_jsx(Badge, { className: "bg-[#E04E7D] text-white uppercase tracking-wider", children: "Limited" }))] }), _jsx("div", { className: "absolute top-4 right-4 flex flex-col gap-2 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity", children: _jsx(Button, { ref: heartButtonRef, size: "icon", variant: "secondary", className: "rounded-full bg-card", onClick: handleFavoriteClick, children: _jsx(Heart, { className: `w-4 h-4 ${isFavorite ? "fill-red-600 text-red-600" : ""}` }) }) }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent md:opacity-0 md:group-hover:opacity-100 md:transition-opacity", children: _jsxs(Button, { className: "w-full bg-foreground text-background uppercase tracking-wider justify-center", onClick: (e) => {
                                e.stopPropagation();
                                onAddToCart?.();
                            }, children: [_jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }), "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"] }) })] }), _jsxs("div", { className: "space-y-2", children: [collection && (_jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: collection })), _jsx("h3", { className: "uppercase tracking-wide", children: name }), _jsxs("p", { className: "text-lg", children: [price.toLocaleString("ru-RU"), " \u20BD"] })] })] }));
}
//# sourceMappingURL=ProductCard.js.map