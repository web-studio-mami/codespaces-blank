interface HeaderProps {
    onCartClick?: () => void;
    cartItemCount?: number;
    onLookbookClick?: () => void;
    onSearchClick?: () => void;
    onAccountClick?: () => void;
    onFavoritesClick?: () => void;
    theme?: "light" | "dark";
    onToggleTheme?: () => void;
    currentPage?: "home" | "catalog";
    onNavigate?: (page: "home" | "catalog") => void;
}
export declare function Header({ onCartClick, cartItemCount, onLookbookClick, onSearchClick, onAccountClick, onFavoritesClick, theme, onToggleTheme, currentPage, onNavigate, }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Header.d.ts.map