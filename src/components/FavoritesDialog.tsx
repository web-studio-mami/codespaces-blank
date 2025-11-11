import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { Button } from "./ui/button.js";
import { Heart, X, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  collection: string;
}

interface FavoritesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items?: FavoriteItem[];
  onRemove?: (itemId: string) => void;
  onAddToCart?: (item: FavoriteItem) => void;
}

export function FavoritesDialog({
  open,
  onOpenChange,
  items = [],
  onRemove,
  onAddToCart,
}: FavoritesDialogProps) {
  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-600 fill-red-600" />
            Избранное
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Ваши любимые товары, сохраненные для быстрого
            доступа
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>

        {items.length === 0 ? (
          <div className="py-12 text-center text-gray-500">
            <Heart className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p>Избранное пусто</p>
            <p className="text-sm mt-2">
              Добавляйте понравившиеся товары в избранное
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border border-gray-200 p-4 hover:border-gray-400 transition-colors"
              >
                <div className="w-32 h-32 flex-shrink-0 bg-gray-100 overflow-hidden">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">
                      {item.collection}
                    </p>
                    <h4 className="font-medium mb-1">
                      {item.name}
                    </h4>
                    <p className="text-lg">
                      {item.price.toLocaleString("ru-RU")} ₽
                    </p>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 justify-center flex-1"
                      onClick={() => onAddToCart?.(item)}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />В
                      корзину
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="justify-center"
                      onClick={() => onRemove?.(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="border-t pt-4 mt-6">
              <p className="text-sm text-gray-600 mb-3">
                Товаров в избранном: {items.length}
              </p>
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => onOpenChange(false)}
              >
                Продолжить покупки
              </Button>
            </div>
          </div>
        )}
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}