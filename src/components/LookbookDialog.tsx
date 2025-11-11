import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface LookbookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LOOKBOOK_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1598087216773-d02ad98034f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBzdHlsZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2Mjc0NjE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Urban Minimalism",
    description: "Коллекция Москва 2025",
  },
  {
    url: "https://images.unsplash.com/photo-1614788404413-ca65466f81f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwbW9kZWwlMjBtYWxlfGVufDF8fHx8MTc2Mjc0ODAxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Street Essentials",
    description: "Базовые модели",
  },
  {
    url: "https://images.unsplash.com/photo-1660983414551-b3758336be15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBmZW1hbGV8ZW58MXx8fHwxNzYyNzQ4MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Avant-Garde",
    description: "Питерский авангард",
  },
  {
    url: "https://images.unsplash.com/photo-1632761486768-5a50cf7329cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjI2NzY5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Minimalist Design",
    description: "Чистые линии",
  },
  {
    url: "https://images.unsplash.com/photo-1730054159372-7d55931ab435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFmZml0aSUyMHdhbGwlMjBhcnR8ZW58MXx8fHwxNzYyNzQ4MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Urban Culture",
    description: "Граффити коллаборация",
  },
];

export function LookbookDialog({
  open,
  onOpenChange,
}: LookbookDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? LOOKBOOK_IMAGES.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === LOOKBOOK_IMAGES.length - 1 ? 0 : prev + 1,
    );
  };

  const currentImage = LOOKBOOK_IMAGES[currentIndex];

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-5xl p-0 bg-black border-0">
        <ResponsiveDialogTitle className="sr-only">
          Lookbook
        </ResponsiveDialogTitle>
        <ResponsiveDialogDescription className="sr-only">
          Просмотр фотографий из лукбука коллекции
        </ResponsiveDialogDescription>
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative">
          <div className="aspect-[3/4] md:aspect-[16/9] overflow-hidden bg-black">
            <ImageWithFallback
              src={currentImage?.url}
              alt={currentImage?.title}
              className="w-full h-full object-contain"
            />
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-2xl mb-1">
              {currentImage?.title}
            </h3>
            <p className="text-white/80">
              {currentImage?.description}
            </p>
            <div className="flex gap-2 mt-4">
              {LOOKBOOK_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 transition-all ${
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "w-4 bg-white/40"
                  }`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}