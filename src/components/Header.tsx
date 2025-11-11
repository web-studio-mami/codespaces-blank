import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  User,
  Heart,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "./ui/button.js";

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

export function Header({
  onCartClick,
  cartItemCount = 0,
  onLookbookClick,
  onSearchClick,
  onAccountClick,
  onFavoritesClick,
  theme = "dark",
  onToggleTheme,
  currentPage = "home",
  onNavigate,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate?.("home")}
            className="tracking-[0.2em] uppercase flex items-center gap-3 text-foreground md:hover:opacity-80 md:transition-opacity"
          >
            <div className="w-0 h-0 bg-foreground relative overflow-visible"></div>
            <span>Urban Bloom</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {currentPage === "home" ? (
              <>
                <a
                  href="#new"
                  className="md:hover:text-red-600 md:transition-colors uppercase tracking-wider text-foreground"
                >
                  Новинки
                </a>
                <button
                  onClick={() => onNavigate?.("catalog")}
                  className="md:hover:text-red-600 md:transition-colors uppercase tracking-wider text-foreground"
                >
                  Каталог
                </button>
                <a
                  href="#limited"
                  className="md:hover:text-red-600 md:transition-colors uppercase tracking-wider text-foreground"
                >
                  Limited
                </a>
                <button
                  onClick={onLookbookClick}
                  className="md:hover:text-red-600 md:transition-colors uppercase tracking-wider text-foreground"
                >
                  Lookbook
                </button>
                <a
                  href="#collabs"
                  className="md:hover:text-red-600 md:transition-colors uppercase tracking-wider text-foreground"
                >
                  Коллаборации
                </a>
                <a
                  href="#about"
                  className="md:hover:text-red-600 md:transition-colors uppercase tracking-wider text-foreground"
                >
                  О бренде
                </a>
              </>
            ) : (
              <>
                <button
                  onClick={() => onNavigate?.("home")}
                  className="md:hover:text-red-600 md:transition-colors uppercase tracking-wider text-foreground"
                >
                  Главная
                </button>
                <button
                  onClick={onLookbookClick}
                  className="md:hover:text-red-600 md:transition-colors uppercase tracking-wider text-foreground"
                >
                  Lookbook
                </button>
              </>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-foreground"
              onClick={onSearchClick}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-foreground"
              onClick={onFavoritesClick}
              id="favorites-icon"
            >
              <Heart className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-foreground"
              onClick={onAccountClick}
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-foreground"
              onClick={onToggleTheme}
              title={
                theme === "light"
                  ? "Version 48 (Light)"
                  : "Version 49 (Dark)"
              }
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground"
              onClick={onCartClick}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(224,78,125)] rounded-full flex items-center justify-center text-[10px] text-white">
                  {cartItemCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {currentPage === "home" ? (
                <>
                  <a
                    href="#new"
                    className="uppercase tracking-wider py-2 text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Новинки
                  </a>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onNavigate?.("catalog");
                    }}
                    className="uppercase tracking-wider py-2 text-left text-foreground"
                  >
                    Каталог
                  </button>
                  <a
                    href="#limited"
                    className="uppercase tracking-wider py-2 text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Limited
                  </a>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onLookbookClick?.();
                    }}
                    className="uppercase tracking-wider py-2 text-left text-foreground"
                  >
                    Lookbook
                  </button>
                  <a
                    href="#collabs"
                    className="uppercase tracking-wider py-2 text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Коллаборации
                  </a>
                  <a
                    href="#about"
                    className="uppercase tracking-wider py-2 text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    О бренде
                  </a>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onNavigate?.("home");
                    }}
                    className="uppercase tracking-wider py-2 text-left text-foreground"
                  >
                    Главная
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onLookbookClick?.();
                    }}
                    className="uppercase tracking-wider py-2 text-left text-foreground"
                  >
                    Lookbook
                  </button>
                </>
              )}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onSearchClick?.();
                  }}
                >
                  <Search className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onFavoritesClick?.();
                  }}
                  id="favorites-icon-mobile"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onAccountClick?.();
                  }}
                >
                  <User className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onToggleTheme?.();
                  }}
                  title={
                    theme === "light"
                      ? "Version 48 (Light)"
                      : "Version 49 (Dark)"
                  }
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}