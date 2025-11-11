import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
} from "./ui/responsive-dialog.js";
import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";
import { Label } from "./ui/label.js";
import { useState } from "react";
import { Bell, Check } from "lucide-react";

interface NotifyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  collectionName: string;
}

export function NotifyDialog({
  open,
  onOpenChange,
  collectionName,
}: NotifyDialogProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email || phone) {
      setSubmitted(true);
      setTimeout(() => {
        onOpenChange(false);
        setSubmitted(false);
        setEmail("");
        setPhone("");
      }, 2000);
    }
  };

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-md">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Уведомить о старте продаж
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Подпишитесь на уведомление о начале продаж коллекции
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl mb-2">Готово!</h3>
            <p className="text-muted-foreground">
              Мы отправим вам уведомление, когда начнутся
              продажи
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Оставьте свои контакты, и мы сообщим вам о
                старте продаж коллекции{" "}
                <span className="font-medium">
                  {collectionName}
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">
                  Телефон (опционально)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (900) 123-45-67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button
                type="submit"
                disabled={!email && !phone}
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-12 disabled:opacity-50 justify-center"
              >
                Подписаться на уведомления
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Мы не передаем ваши данные третьим лицам
              </p>
            </div>
          </form>
        )}
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}