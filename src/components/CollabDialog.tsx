import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { Button } from "./ui/button.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { User, Calendar, Package } from "lucide-react";
import { toast } from "sonner";

interface CollabDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  collab: {
    artist: string;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
  } | null;
}

export function CollabDialog({
  open,
  onOpenChange,
  collab,
}: CollabDialogProps) {
  if (!collab) return null;

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>
            Коллаборация
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Детали совместного проекта с {collab.artist}
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>

        <div className="space-y-8">
          {/* Collab Image */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg">
              <ImageWithFallback
                src={collab.imageUrl}
                alt={collab.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Collab Details */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-red-600 text-white px-3 py-1 text-sm uppercase tracking-wider mb-3">
                {collab.type}
              </div>
              <h2 className="text-3xl uppercase tracking-tight mb-2">
                {collab.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {collab.artist}
              </p>
            </div>

            <div className="prose prose-sm">
              <p className="text-gray-700">
                {collab.description}
              </p>
              <p className="text-gray-700">
                Эта уникальная коллаборация объединяет авторский
                стиль {collab.artist} с философией бренда Urban
                Bloom. Каждая вещь из коллекции — это результат
                творческого диалога и взаимного вдохновения.
              </p>
            </div>

            <div className="border-t pt-6 space-y-4">
              <h3 className="font-medium">О коллаборации</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Художник</p>
                    <p className="text-gray-600">
                      {collab.artist}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Дата релиза</p>
                    <p className="text-gray-600">Ноябрь 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Тираж</p>
                    <p className="text-gray-600">
                      Лимитированная серия
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full bg-foreground text-background hover:bg-foreground/90 min-h-[56px] h-auto justify-center text-sm px-6 py-4 whitespace-normal"
                onClick={() => {
                  toast.success(
                    "Переход к товарам коллаборации",
                  );
                  onOpenChange(false);
                }}
              >
                Смотреть товары коллаборации
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => onOpenChange(false)}
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}