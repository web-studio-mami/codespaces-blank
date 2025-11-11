import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { Input } from "./ui/input.js";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({
  open,
  onOpenChange,
}: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Моковые результаты поиска
  const mockResults = [
    {
      id: "1",
      name: "Худи Конструктивизм",
      price: 6990,
      category: "Худи",
    },
    {
      id: "2",
      name: "Оверсайз футболка",
      price: 3490,
      category: "Футболки",
    },
    {
      id: "3",
      name: "Карго брюки Urban",
      price: 8990,
      category: "Брюки",
    },
    {
      id: "4",
      name: "Бомбер авангард",
      price: 12990,
      category: "Куртки",
    },
  ];

  const filteredResults = searchQuery
    ? mockResults.filter((item) =>
        item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      )
    : [];

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-3xl">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>
            Поиск товаров
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Введите название или категорию товара
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>

        <div className="space-y-6">
          {/* Поле поиска */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск..."
              className="pl-10 pr-10 h-12"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Результаты поиска */}
          <div className="space-y-3">
            {searchQuery && filteredResults.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Найдено товаров: {filteredResults.length}
                </p>
                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                  {filteredResults.map((item) => (
                    <a
                      key={item.id}
                      href="#catalog"
                      onClick={() => onOpenChange(false)}
                      className="flex items-center justify-between p-4 border border-gray-200 hover:border-gray-400 transition-colors group"
                    >
                      <div>
                        <p className="group-hover:text-red-600 transition-colors">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.category}
                        </p>
                      </div>
                      <p className="font-medium">
                        {item.price.toLocaleString("ru-RU")} ₽
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {searchQuery && filteredResults.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>Ничего не найдено</p>
                <p className="text-sm mt-2">
                  Попробуйте изменить поисковый запрос
                </p>
              </div>
            )}

            {!searchQuery && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Популярные запросы:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Худи",
                    "Футболки",
                    "Брюки",
                    "Куртки",
                    "Limited",
                  ].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-4 py-2 border border-gray-300 hover:border-gray-400 transition-colors text-sm flex items-center justify-center"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}