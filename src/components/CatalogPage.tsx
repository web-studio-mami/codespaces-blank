import { CatalogSection } from "./CatalogSection.js";
import { AnimatedSection } from "./AnimatedSection.js";


interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  isLimited?: boolean;
  isNew?: boolean;
  collection?: string;
  category?: string;
  gender?: string;
  subcategory?: string;
}

interface CatalogPageProps {
  products?: Product[];
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
  favoriteIds?: string[];
  onToggleFavorite?: (product: Product) => void;
}

export function CatalogPage({
  products,
  onAddToCart,
  onProductClick,
  favoriteIds = [],
  onToggleFavorite,
}: CatalogPageProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-[rgb(224,78,125)] text-white uppercase tracking-wider">
                  <div className="w-2 h-2 bg-white"></div>
                  <span>Полный каталог</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl uppercase tracking-tight leading-none mb-6">
                Все товары
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl">
                Исследуйте полную коллекцию уличной одежды.
                Используйте фильтры для поиска идеального
                образа.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Catalog Section */}
      <CatalogSection
        products={products ?? []}
        onAddToCart={onAddToCart}
        onProductClick={onProductClick}
        favoriteIds={favoriteIds}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}