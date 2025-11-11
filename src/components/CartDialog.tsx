import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { Button } from "./ui/button.js";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  quantity: number;
}

interface CartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onUpdateQuantity: (
    id: string,
    size: string,
    quantity: number,
  ) => void;
  onRemoveItem: (id: string, size: string) => void;
}

export function CartDialog({
  open,
  onOpenChange,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDialogProps) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Корзина
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Управление товарами в вашей корзине
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>

        {items.length === 0 ? (
          <div className="py-12 text-center text-muted-foreground">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p>Корзина пуста</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 border-b border-border pb-4"
                >
                  <div className="w-24 h-24 flex-shrink-0 bg-muted overflow-hidden">
                    <ImageWithFallback
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Размер: {item.size}
                        </p>
                        <p className="mt-1">
                          {item.price.toLocaleString("ru-RU")} ₽
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          onRemoveItem(item.id, item.size)
                        }
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            item.size,
                            item.quantity - 1,
                          )
                        }
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 flex items-center justify-center border border-border hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            item.size,
                            item.quantity + 1,
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center border border-border hover:bg-accent transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Итого:</span>
                <span className="text-2xl">
                  {total.toLocaleString("ru-RU")} ₽
                </span>
              </div>

              <Button
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-12 justify-center"
                onClick={() => {
                  toast.success("Переход к оформлению заказа", {
                    description:
                      "Функционал оформления заказа в разработке",
                  });
                }}
              >
                Оформить заказ
              </Button>
              <Button
                variant="outline"
                className="w-full mt-2 justify-center"
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