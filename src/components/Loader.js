import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export function Loader() {
    const [isExiting, setIsExiting] = useState(false);
    useEffect(() => {
        // Start exit animation before unmounting
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs("div", { className: `fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"}`, children: [_jsxs("div", { className: "relative", children: [_jsxs("div", { className: "relative w-32 h-32 animate-spin-slow", children: [_jsx("div", { className: "absolute top-0 left-0 w-12 h-12 bg-red-600 animate-pulse-slow" }), _jsx("div", { className: "absolute top-0 right-0 w-12 h-12 rounded-full bg-black animate-pulse-slow animation-delay-300" }), _jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-b-[40px] border-l-transparent border-r-transparent border-b-blue-600 animate-pulse-slow animation-delay-600" })] }), _jsx("div", { className: "absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap tracking-[0.3em] uppercase animate-fade-in", children: "Urban Bloom" })] }), _jsx("style", { children: `
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 1.5s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
      ` })] }));
}
//# sourceMappingURL=Loader.js.map