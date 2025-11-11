import { jsx as _jsx } from "react/jsx-runtime";
import { ReactNode, useEffect, useRef, useState } from "react";
export function AnimatedSection({ children, className = "", delay = 0, onClick, }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            });
        }, { threshold: 0.1 });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);
    return (_jsx("div", { ref: ref, onClick: onClick, className: `transition-all duration-700 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"} ${className}`, children: children }));
}
//# sourceMappingURL=AnimatedSection.js.map