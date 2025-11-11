import { useState } from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { Button } from "./ui/button.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs.js";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  collection: string;
  category: string;
  gender: string;
}

interface ProductDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
  onAddToCart: (size: string, quantity: number) => void;
}

export function ProductDetailDialog({
  open,
  onOpenChange,
  product,
  onAddToCart,
}: ProductDetailDialogProps) {
  const [selectedSize, setSelectedSize] = useState<
    string | null
  >(null);
  const [quantity, setQuantity] = useState(1);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  if (!product) return null;

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(selectedSize, quantity);
      setSelectedSize(null); // Reset size after adding to cart
      setQuantity(1); // Reset quantity
      onOpenChange(false); // Close the dialog
    }
  };

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>
            Детали товара
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Полная информация о товаре, описание и уход
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>

        <div className="space-y-8">
          {/* Product Image */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="aspect-[3/4] bg-muted overflow-hidden rounded-lg">
              <ImageWithFallback
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {product.collection}
              </p>
              <h2 className="text-2xl mb-3">{product.name}</h2>
              <p className="text-3xl">
                {product.price.toLocaleString("ru-RU")} ₽
              </p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div>
                <h3 className="mb-3">Выберите размер</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={
                        selectedSize === size
                          ? "default"
                          : "outline"
                      }
                      className={`h-12 ${
                        selectedSize === size
                          ? "bg-foreground text-background hover:bg-foreground/90"
                          : "hover:bg-accent"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              {!selectedSize && (
                <p className="text-sm text-muted-foreground">
                  Пожалуйста, выберите размер
                </p>
              )}
            </div>

            {/* Quantity Selection */}
            <div className="space-y-3">
              <h3>Количество</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                  className="w-10 h-10 border border-border hover:bg-accent transition-colors flex items-center justify-center rounded"
                >
                  −
                </button>
                <span className="w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border hover:bg-accent transition-colors flex items-center justify-center rounded"
                >
                  +
                </button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="w-full bg-foreground text-background hover:bg-foreground/90 h-12 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Добавить в корзину
            </Button>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 gap-3 p-2 h-auto">
                <TabsTrigger
                  value="description"
                  className="px-6 py-4 text-sm min-h-[52px] h-auto whitespace-normal leading-tight"
                >
                  Описание
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="px-6 py-4 text-sm min-h-[52px] h-auto whitespace-normal leading-tight"
                >
                  Детали
                </TabsTrigger>
                <TabsTrigger
                  value="care"
                  className="px-6 py-4 text-sm min-h-[52px] h-auto whitespace-normal leading-tight"
                >
                  Уход
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="description"
                className="space-y-3 mt-4 p-6 bg-muted rounded-lg"
              >
                <p className="leading-relaxed">
                  Эксклюзивная модель из коллекции{" "}
                  {product.collection}. Современный дизайн,
                  вдохновленный уличной культурой и
                  минимализмом.
                </p>
                <p className="leading-relaxed">
                  Изготовлено из высококачественных материалов с
                  особым вниманием к деталям. Идеально подходит
                  для создания современного urban-образа.
                </p>
              </TabsContent>

              <TabsContent
                value="details"
                className="space-y-2 mt-4 p-6 bg-muted rounded-lg"
              >
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-muted-foreground">
                    Коллекция:
                  </div>
                  <div>{product.collection}</div>
                  <div className="text-muted-foreground">
                    Категория:
                  </div>
                  <div className="capitalize">
                    {product.category}
                  </div>
                  <div className="text-muted-foreground">
                    Пол:
                  </div>
                  <div className="capitalize">
                    {product.gender}
                  </div>
                  <div className="text-muted-foreground">
                    Материал:
                  </div>
                  <div>100% хлопок премиум</div>
                  <div className="text-muted-foreground">
                    Производство:
                  </div>
                  <div>Россия</div>
                </div>
              </TabsContent>

              <TabsContent
                value="care"
                className="space-y-2 mt-4 p-6 bg-muted rounded-lg text-sm"
              >
                <p className="leading-relaxed">
                  • Машинная стирка при температуре до 30°C
                </p>
                <p className="leading-relaxed">
                  • Не использовать отбеливатель
                </p>
                <p className="leading-relaxed">
                  • Гладить при низкой температуре
                </p>
                <p className="leading-relaxed">
                  • Не подвергать химчистке
                </p>
                <p className="leading-relaxed">
                  • Сушить в вертикальном положении
                </p>
              </TabsContent>
            </Tabs>

            <div className="border-t pt-6 space-y-3">
              <h3 className="font-medium">Особенности</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Премиальные материалы</li>
                <li>✓ Уникальный дизайн</li>
                <li>✓ Удобная посадка</li>
                <li>✓ Произведено в России</li>
                <li>✓ Ограниченный тираж</li>
              </ul>
            </div>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}