import { Instagram, Send, Youtube, Mail } from "lucide-react";
import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";

interface FooterProps {
  onDeliveryClick?: () => void;
  onReturnsClick?: () => void;
  onContactsClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onGiftCertificateClick?: () => void;
}

export function Footer({
  onDeliveryClick,
  onReturnsClick,
  onContactsClick,
  onPrivacyClick,
  onTermsClick,
  onGiftCertificateClick,
}: FooterProps) {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="tracking-[0.2em] uppercase flex items-center gap-3">
              <div className="w-8 h-8 bg-current relative overflow-visible">
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-600"></div>
              </div>
              <span>Urban Bloom</span>
            </div>
            <p className="text-sm opacity-70">
              Современная уличная мода, вдохновлённая русским
              авангардом и локальной культурой.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hover:text-red-600 md:hover:bg-current/10"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hover:text-red-600 md:hover:bg-current/10"
              >
                <Send className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hover:text-red-600 md:hover:bg-current/10"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="uppercase tracking-wider mb-6">
              Магазин
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#new"
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  Новинки
                </a>
              </li>
              <li>
                <a
                  href="#catalog"
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#limited"
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  Limited Editions
                </a>
              </li>
              <li>
                <button
                  onClick={onGiftCertificateClick}
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  Подарочные сертификаты
                </button>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="uppercase tracking-wider mb-6">
              Информация
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  О бренде
                </a>
              </li>
              <li>
                <a
                  href="#collabs"
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  Коллаборации
                </a>
              </li>
              <li>
                <button
                  onClick={onDeliveryClick}
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  Доставка и оплата
                </button>
              </li>
              <li>
                <button
                  onClick={onReturnsClick}
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  Возврат и обмен
                </button>
              </li>
              <li>
                <button
                  onClick={onContactsClick}
                  className="opacity-70 md:hover:opacity-100 md:transition-opacity cursor-pointer"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="uppercase tracking-wider mb-6">
              Новости
            </h3>
            <p className="text-sm opacity-70 mb-4">
              Подпишитесь на рассылку и узнавайте первыми о
              новых коллекциях и дропах.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-current/10 border-current/20 placeholder:opacity-50" onChange={undefined}              />
              <Button
                size="icon"
                className="bg-[rgb(224,78,125)] text-white hover:bg-red-700"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-current/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-50">
            © 2025 Urban Bloom. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <button
              onClick={onPrivacyClick}
              className="opacity-50 md:hover:opacity-100 md:transition-opacity cursor-pointer"
            >
              Политика конфиденциальности
            </button>
            <button
              onClick={onTermsClick}
              className="opacity-50 md:hover:opacity-100 md:transition-opacity cursor-pointer"
            >
              Условия использования
            </button>
          </div>
        </div>

        {/* Geometric Bottom Accent */}
        <div className="flex justify-center gap-2 pb-8">
          {/* <div className="w-8 h-1 bg-red-600"></div>
          <div className="w-8 h-1 bg-current"></div>
          <div className="w-8 h-1 bg-blue-600"></div> */}
        </div>
      </div>
    </footer>
  );
}