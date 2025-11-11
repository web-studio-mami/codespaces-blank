import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Timer, ArrowRight } from "lucide-react";
import { Button } from "./ui/button.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { AnimatedSection } from "./AnimatedSection.js";
import { useEffect, useState } from "react";
function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;
            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) /
                        (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);
    return (_jsx("div", { className: "flex gap-2 sm:gap-4", children: [
            { label: "Дней", value: timeLeft.days },
            { label: "Часов", value: timeLeft.hours },
            { label: "Минут", value: timeLeft.minutes },
            { label: "Секунд", value: timeLeft.seconds },
        ].map((item) => (_jsxs("div", { className: "text-center flex-1", children: [_jsx("div", { className: "text-2xl sm:text-3xl tabular-nums", children: String(item.value).padStart(2, "0") }), _jsx("div", { className: "text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1", children: item.label })] }, item.label))) }));
}
export function LimitedCollections({ collections, onNotify, }) {
    return (_jsx("section", { id: "limited", className: "py-12 md:py-24 bg-muted/30 overflow-hidden", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(AnimatedSection, { className: "mb-16", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "w-12 h-12 bg-[rgb(224,78,125)] flex items-center justify-center", children: _jsx(Timer, { className: "w-6 h-6 text-white" }) }), _jsx("h2", { className: "text-4xl md:text-5xl uppercase tracking-tight", children: "Limited Editions" })] }), _jsx("p", { className: "text-muted-foreground max-w-2xl", children: "\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0432 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u043C \u0442\u0438\u0440\u0430\u0436\u0435. \u0412\u0434\u043E\u0445\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0443\u043B\u0438\u0447\u043D\u043E\u0439 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043E\u0439 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432." })] }), _jsx("div", { className: "space-y-24", children: collections.map((collection, index) => (_jsxs(AnimatedSection, { delay: index * 100, className: `grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`, children: [_jsxs("div", { className: `relative ${index % 2 === 1 ? "md:col-start-2" : ""}`, children: [_jsx("div", { className: "relative aspect-[4/5] overflow-hidden", children: _jsx(ImageWithFallback, { src: collection.imageUrl, alt: collection.name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "absolute bottom-0 right-0 md:-bottom-6 md:-right-6 bg-foreground text-background px-4 py-3 md:px-8 md:py-6 uppercase tracking-wider", children: [_jsx("div", { className: "text-xs mb-1", children: "\u0422\u0438\u0440\u0430\u0436" }), _jsx("div", { className: "text-xl md:text-2xl", children: "100 \u0448\u0442" })] })] }), _jsxs("div", { className: `space-y-8 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`, children: [collection.city && (_jsx("div", { className: "inline-block border-2 border-foreground px-4 py-2 uppercase tracking-wider", children: collection.city })), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-3xl md:text-4xl uppercase tracking-tight", children: collection.name }), _jsx("p", { className: "text-muted-foreground text-lg", children: collection.description })] }), _jsxs("div", { className: "bg-card p-6 border border-border", children: [_jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-4", children: "\u0414\u043E \u0441\u0442\u0430\u0440\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436" }), _jsx(CountdownTimer, { targetDate: collection.releaseDate })] }), _jsx("div", { className: "flex flex-col sm:flex-row gap-3 md:gap-4", children: _jsxs(Button, { size: "lg", className: "bg-foreground text-background uppercase tracking-wider group justify-center", onClick: () => onNotify?.(collection.name), children: ["\u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043E \u0441\u0442\u0430\u0440\u0442\u0435", _jsx(ArrowRight, { className: "ml-2 w-5 h-5 md:group-hover:translate-x-1 md:transition-transform" })] }) }), _jsx("div", { className: "flex items-center gap-2 md:gap-3 pt-4" })] })] }, index))) })] }) }));
}
//# sourceMappingURL=LimitedCollections.js.map