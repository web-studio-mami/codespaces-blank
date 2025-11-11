import { useState } from "react";
import { Filter, ChevronRight } from "lucide-react";
import { Button } from "./ui/button.js";
import { ProductCard } from "./ProductCard.js";
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

export function CatalogSection({
  products,
  onAddToCart,
  onProductClick,
  favoriteIds = [],
  onToggleFavorite,
}: {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
  favoriteIds?: string[];
  onToggleFavorite?: (product: Product) => void;
}) {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("all");
  const [selectedGender, setSelectedGender] =
    useState<string>("all");
  const [selectedCollection, setSelectedCollection] =
    useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<string>("all");
  const [showOnlyNew, setShowOnlyNew] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (
      selectedCategory !== "all" &&
      product.category !== selectedCategory
    ) {
      return false;
    }
    if (
      selectedGender !== "all" &&
      product.gender !== selectedGender
    ) {
      return false;
    }
    if (
      selectedCollection !== "all" &&
      product.collection !== selectedCollection
    ) {
      return false;
    }
    if (
      selectedSubcategory !== "all" &&
      product.subcategory !== selectedSubcategory
    ) {
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

  return (
    <section
      id="catalog"
      className="py-12 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-foreground"></div>
            <h2 className="text-4xl md:text-5xl uppercase tracking-tight">
              Каталог
            </h2>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span className="uppercase tracking-wider">
              Фильтры
            </span>
          </div>

          {/* New Items Toggle */}
          <div className="space-y-2">
            <div className="text-sm uppercase tracking-wider text-muted-foreground">
              Новинки
            </div>
            <Button
              variant={showOnlyNew ? "default" : "outline"}
              onClick={() => setShowOnlyNew(!showOnlyNew)}
              className="uppercase tracking-wider justify-center"
            >
              {showOnlyNew ? "Только новинки" : "Все товары"}
            </Button>
          </div>

          {/* Collection Filter */}
          <div className="space-y-2">
            <div className="text-sm uppercase tracking-wider text-muted-foreground">
              Коллекция
            </div>
            <div className="flex flex-wrap gap-2">
              {collectionOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={
                    selectedCollection === option.value
                      ? "default"
                      : "outline"
                  }
                  onClick={() => {
                    setSelectedCollection(option.value);
                    setSelectedSubcategory("all");
                  }}
                  className="uppercase tracking-wider justify-center"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Subcategory Filter (visible when collection is selected) */}
          {selectedCollection !== "all" && (
            <div className="space-y-2 pl-4 border-l-2 border-[rgb(224,78,125)]">
              <div className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                Подкатегория коллекции "{selectedCollection}"
              </div>
              <div className="flex flex-wrap gap-2">
                {availableSubcategories.map((option) => (
                  <Button
                    key={option.value}
                    variant={
                      selectedSubcategory === option.value
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setSelectedSubcategory(option.value)
                    }
                    className="uppercase tracking-wider justify-center"
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Gender Filter */}
          <div className="space-y-2">
            <div className="text-sm uppercase tracking-wider text-muted-foreground">
              Пол
            </div>
            <div className="flex flex-wrap gap-2">
              {genderOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={
                    selectedGender === option.value
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    setSelectedGender(option.value)
                  }
                  className="uppercase tracking-wider justify-center"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <div className="text-sm uppercase tracking-wider text-muted-foreground">
              Категория товара
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={
                    selectedCategory === option.value
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    setSelectedCategory(option.value)
                  }
                  className="uppercase tracking-wider justify-center"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-muted-foreground">
              Найдено товаров: {filteredProducts.length}
            </div>
            {(selectedCategory !== "all" ||
              selectedGender !== "all" ||
              selectedCollection !== "all" ||
              selectedSubcategory !== "all" ||
              showOnlyNew) && (
              <Button
                variant="ghost"
                onClick={resetFilters}
                className="uppercase tracking-wider"
              >
                Сбросить фильтры
              </Button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => onAddToCart?.(product)}
              onClick={() => onProductClick?.(product)}
              isFavorite={favoriteIds.includes(product.id)}
              onToggleFavorite={() =>
                onToggleFavorite?.(product)
              }
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              По выбранным фильтрам товары не найдены
            </p>
            <Button
              variant="outline"
              onClick={resetFilters}
              className="mt-4 uppercase tracking-wider"
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}