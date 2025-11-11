import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { Shield, FileText } from "lucide-react";

interface PolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "privacy" | "terms" | null;
}

export function PolicyDialog({
  open,
  onOpenChange,
  type,
}: PolicyDialogProps) {
  const renderContent = () => {
    switch (type) {
      case "privacy":
        return (
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 mt-1 flex-shrink-0 text-blue-600" />
              <div>
                <h3 className="font-medium text-base mb-2">
                  Политика конфиденциальности
                </h3>
                <p className="text-gray-600">
                  Последнее обновление: 10 ноября 2025
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <section>
                <h4 className="font-medium mb-2">
                  1. Сбор информации
                </h4>
                <p className="text-gray-700">
                  Мы собираем информацию, которую вы
                  предоставляете при регистрации, оформлении
                  заказа или подписке на рассылку. Это может
                  включать ваше имя, адрес электронной почты,
                  номер телефона, адрес доставки и платежную
                  информацию.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  2. Использование информации
                </h4>
                <p className="text-gray-700 mb-2">
                  Мы используем собранную информацию для:
                </p>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>• Обработки и доставки заказов</li>
                  <li>• Связи с вами по поводу заказов</li>
                  <li>• Улучшения качества обслуживания</li>
                  <li>
                    • Отправки маркетинговых материалов (с
                    вашего согласия)
                  </li>
                  <li>• Предотвращения мошенничества</li>
                </ul>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  3. Защита информации
                </h4>
                <p className="text-gray-700">
                  Мы применяем современные технологии
                  безопасности для защиты вашей персональной
                  информации. Платежные данные шифруются и
                  обрабатываются через защищенные платежные
                  шлюзы.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  4. Файлы cookie
                </h4>
                <p className="text-gray-700">
                  Наш сайт использует файлы cookie для улучшения
                  пользовательского опыта, анализа трафика и
                  персонализации контента. Вы можете настроить
                  параметры cookie в своем браузере.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  5. Передача данных третьим лицам
                </h4>
                <p className="text-gray-700">
                  Мы не продаем и не передаем вашу персональную
                  информацию третьим лицам, за исключением
                  случаев, необходимых для выполнения заказа
                  (служба доставки, платежные системы) или
                  требуемых законодательством.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  6. Ваши права
                </h4>
                <p className="text-gray-700 mb-2">
                  Вы имеете право:
                </p>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>• Запросить доступ к своим данным</li>
                  <li>• Исправить неточную информацию</li>
                  <li>• Удалить свои данные</li>
                  <li>
                    • Отозвать согласие на обработку данных
                  </li>
                  <li>• Отписаться от рассылок</li>
                </ul>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  7. Контакты
                </h4>
                <p className="text-gray-700">
                  По вопросам конфиденциальности обращайтесь:{" "}
                  <a
                    href="mailto:privacy@urbanbloom.ru"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@urbanbloom.ru
                  </a>
                </p>
              </section>
            </div>
          </div>
        );

      case "terms":
        return (
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 mt-1 flex-shrink-0 text-blue-600" />
              <div>
                <h3 className="font-medium text-base mb-2">
                  Условия использования
                </h3>
                <p className="text-gray-600">
                  Последнее обновление: 10 ноября 2025
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <section>
                <h4 className="font-medium mb-2">
                  1. Принятие условий
                </h4>
                <p className="text-gray-700">
                  Используя наш сайт и услуги, вы соглашаетесь с
                  настоящими условиями использования. Если вы не
                  согласны с какими-либо условиями, пожалуйста,
                  не используйте наш сайт.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  2. Учетная запись
                </h4>
                <p className="text-gray-700">
                  При регистрации вы обязуетесь предоставлять
                  точную и актуальную информацию. Вы несете
                  ответственность за сохранение
                  конфиденциальности своей учетной записи и
                  пароля.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  3. Заказы и оплата
                </h4>
                <p className="text-gray-700 mb-2">
                  При оформлении заказа:
                </p>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>
                    • Вы подтверждаете намерение приобрести
                    товары
                  </li>
                  <li>
                    • Все цены указаны в рублях и включают НДС
                  </li>
                  <li>
                    • Мы оставляем за собой право отменить заказ
                    при отсутствии товара
                  </li>
                  <li>
                    • Оплата производится безопасными способами
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  4. Доставка
                </h4>
                <p className="text-gray-700">
                  Сроки доставки являются ориентировочными. Мы
                  не несем ответственности за задержки,
                  вызванные действиями служб доставки или
                  форс-мажорными обстоятельствами.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  5. Возврат и обмен
                </h4>
                <p className="text-gray-700">
                  Вы можете вернуть товар в течение 14 дней с
                  момента получения при условии сохранения
                  товарного вида, упаковки и бирок. Подробнее о
                  процедуре возврата читайте в разделе "Возврат
                  и обмен".
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  6. Интеллектуальная собственность
                </h4>
                <p className="text-gray-700">
                  Все материалы сайта, включая дизайн, логотипы,
                  фотографии и тексты, защищены авторским правом
                  и принадлежат Urban Bloom или используются с
                  разрешения правообладателей.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  7. Ограничение ответственности
                </h4>
                <p className="text-gray-700">
                  Мы не несем ответственности за косвенные
                  убытки, возникшие в результате использования
                  нашего сайта или продукции. Наша
                  ответственность ограничена стоимостью
                  приобретенного товара.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  8. Изменение условий
                </h4>
                <p className="text-gray-700">
                  Мы оставляем за собой право изменять настоящие
                  условия. Изменения вступают в силу с момента
                  их публикации на сайте.
                </p>
              </section>

              <section>
                <h4 className="font-medium mb-2">
                  9. Контакты
                </h4>
                <p className="text-gray-700">
                  По вопросам условий использования:{" "}
                  <a
                    href="mailto:info@urbanbloom.ru"
                    className="text-blue-600 hover:underline"
                  >
                    info@urbanbloom.ru
                  </a>
                </p>
              </section>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "privacy":
        return "Политика конфиденциальности";
      case "terms":
        return "Условия использования";
      default:
        return "";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "privacy":
        return "Как мы собираем, используем и защищаем вашу информацию";
      case "terms":
        return "Правила использования сайта и услуг Urban Bloom";
      default:
        return "";
    }
  };

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>
            {getTitle()}
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            {getDescription()}
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>
        <div className="mt-4">{renderContent()}</div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}