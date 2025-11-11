import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion.js";
import {
  Truck,
  RefreshCw,
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

interface InfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "delivery" | "returns" | "contacts" | null;
}

export function InfoDialog({
  open,
  onOpenChange,
  type,
}: InfoDialogProps) {
  const renderContent = () => {
    switch (type) {
      case "delivery":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Truck className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">
                  Доставка и оплата
                </h3>
                <p className="text-[rgb(199,199,199)]">
                  Мы доставляем заказы по всей России и странам
                  СНГ
                </p>
              </div>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Доставка по России
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-[rgb(199,199,199)]">
                      Курьерская доставка:
                    </div>
                    <div>350 ₽ (бесплатно от 5000 ₽)</div>
                    <div className="text-[rgb(199,199,199)]">
                      Срок доставки:
                    </div>
                    <div>1-3 рабочих дня</div>
                    <div className="text-[rgb(199,199,199)]">
                      Пункты выдачи:
                    </div>
                    <div>250 ₽ (бесплатно от 3000 ₽)</div>
                    <div className="text-[rgb(199,199,199)]">
                      Срок доставки:
                    </div>
                    <div>2-5 рабочих дней</div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Международная доставка
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p className="text-sm text-[rgb(199,199,199)]">
                    Доставка в страны СНГ и Европу
                    осуществляется международными курьерскими
                    службами. Стоимость рассчитывается
                    индивидуально.
                  </p>
                  <div className="text-sm">
                    <div className="text-[rgb(199,199,199)]">
                      Срок доставки:
                    </div>
                    <div>5-14 рабочих дней</div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Способы оплаты
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm">
                  <p>
                    • Банковские карты (Visa, MasterCard, Мир)
                  </p>
                  <p>• Электронные кошельки</p>
                  <p>• Оплата при получении (для РФ)</p>
                  <p>• Рассрочка от банков-партнеров</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );

      case "returns":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <RefreshCw className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">
                  Возврат и обмен
                </h3>
                <p className="text-[rgb(199,199,199)]">
                  Мы гарантируем возврат или обмен товара в
                  течение 14 дней
                </p>
              </div>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Условия возврата
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-sm">
                  <p>
                    Вы можете вернуть товар надлежащего качества
                    в течение 14 дней с момента получения
                    заказа.
                  </p>
                  <p className="font-medium">Товар должен:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Быть в оригинальной упаковке</li>
                    <li>• Сохранять товарный вид</li>
                    <li>• Иметь все ярлыки и бирки</li>
                    <li>• Не иметь следов использования</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Как оформить возврат
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm">
                  <p>
                    1. Свяжитесь с нами через форму на сайте или
                    по email
                  </p>
                  <p>
                    2. Укажите номер заказа и причину возврата
                  </p>
                  <p>
                    3. Упакуйте товар в оригинальную упаковку
                  </p>
                  <p>4. Отправьте товар по указанному адресу</p>
                  <p>
                    5. Деньги вернутся в течение 7 рабочих дней
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Обмен товара
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm">
                  <p>
                    Обмен товара на другой размер или цвет
                    производится бесплатно.
                  </p>
                  <p>
                    Свяжитесь с нами для оформления обмена — мы
                    отправим новый товар сразу после получения
                    возврата.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );

      case "contacts":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-2">Контакты</h3>
                <p className="text-gray-600">
                  Свяжитесь с нами удобным для вас способом
                </p>
              </div>
            </div>

            <div className="space-y-6 overflow-x-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 min-w-0">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-600 mb-1">
                        Телефон
                      </p>
                      <a
                        href="tel:+78001234567"
                        className="hover:underline break-words"
                      >
                        +7 (800) 123-45-67
                      </a>
                      <p className="text-sm text-gray-500">
                        Бесплатно по России
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-600 mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@streetwear.ru"
                        className="hover:underline break-all"
                      >
                        info@streetwear.ru
                      </a>
                      <p className="text-sm text-gray-500">
                        Ответим в течение 24 часов
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-600 mb-1">
                        Время работы
                      </p>
                      <p>Пн-Пт: 10:00 - 20:00</p>
                      <p>Сб-Вс: 11:00 - 19:00</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 min-w-0">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Шоурум в Москве
                    </p>
                    <p className="mb-1">ул. Тверская, д. 10</p>
                    <p className="text-sm text-gray-500">
                      Посещение по предварительной записи
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Шоурум в Санкт-Петербурге
                    </p>
                    <p className="mb-1">
                      Невский проспект, д. 28
                    </p>
                    <p className="text-sm text-gray-500">
                      Посещение по предварительной записи
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Социальные сети
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="#"
                        className="px-3 py-2 text-sm border border-gray-300 hover:border-gray-400 transition-colors whitespace-nowrap"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="px-3 py-2 text-sm border border-gray-300 hover:border-gray-400 transition-colors whitespace-nowrap"
                      >
                        Telegram
                      </a>
                      <a
                        href="#"
                        className="px-3 py-2 text-sm border border-gray-300 hover:border-gray-400 transition-colors whitespace-nowrap"
                      >
                        VK
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "delivery":
        return "Доставка и оплата";
      case "returns":
        return "Возврат и обмен";
      case "contacts":
        return "Контакты";
      default:
        return "";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "delivery":
        return "Информация о доставке и способах оплаты";
      case "returns":
        return "Условия возврата и обмена товаров";
      case "contacts":
        return "Как с нами связаться";
      default:
        return "";
    }
  };

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>
            {getTitle()}
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            {getDescription()}
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>
        <div className="mt-4 overflow-x-hidden">
          {renderContent()}
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}