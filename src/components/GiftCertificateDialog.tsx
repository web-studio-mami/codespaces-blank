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
import { useState, type ChangeEvent, type SetStateAction } from "react";
import { Gift, Check } from "lucide-react";

interface GiftCertificateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PRESET_AMOUNTS = [1000, 3000, 5000, 10000];

export function GiftCertificateDialog({
  open,
  onOpenChange,
}: GiftCertificateDialogProps) {
  const [selectedAmount, setSelectedAmount] = useState<
    number | null
  >(null);
  const [customAmount, setCustomAmount] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || parseInt(customAmount);
    if (amount && recipientEmail) {
      setSubmitted(true);
      setTimeout(() => {
        onOpenChange(false);
        setSubmitted(false);
        setSelectedAmount(null);
        setCustomAmount("");
        setRecipientEmail("");
        setMessage("");
      }, 2500);
    }
  };
  

  const finalAmount =
    selectedAmount || parseInt(customAmount) || 0;

  function handleChange(_event: ChangeEvent<HTMLTextAreaElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <ResponsiveDialog open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent className="max-w-3xl">
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Подарочный сертификат
          </ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Выберите сумму и оформите подарочный сертификат на
            email получателя
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl mb-2">
              Сертификат оформлен!
            </h3>
            <p className="text-muted-foreground">
              Мы отправили подарочный сертификат на указанный
              email
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <Label className="mb-3 block">
                    Выберите сумму
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {PRESET_AMOUNTS.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`py-4 border transition-all flex items-center justify-center ${
                          selectedAmount === amount
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        {amount.toLocaleString("ru-RU")} ₽
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="customAmount">
                    Или введите свою сумму
                  </Label>
                  <Input
                      id="customAmount"
                      type="number"
                      placeholder="Минимум 500 ₽"
                      value={customAmount}
                      className="mt-1"
                      min="500" onChange={undefined}                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="recipientEmail">
                    Email получателя
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="recipientEmail"
                    type="email"
                    placeholder="recipient@email.com"
                    value={recipientEmail}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) =>
                      setRecipientEmail(e.target.value)
                    }
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">
                    Поздравительное сообщение
                  </Label>
                  <textarea
                    id="message"
                    placeholder="Напишите пожелание получателю..."
                    value={message}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none bg-background text-foreground"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg">Итого к оплате:</span>
                <span className="text-3xl">
                  {finalAmount.toLocaleString("ru-RU")} ₽
                </span>
              </div>

              <Button
                type="submit"
                disabled={!finalAmount || !recipientEmail}
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-12 disabled:opacity-50 justify-center"
              >
                Оформить подарочный сертификат
              </Button>

              <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground space-y-2">
                <p>
                  • Сертификат отправляется на email в течение 5
                  минут
                </p>
                <p>• Срок действия сертификата — 1 год</p>
                <p>• Можно использовать частями</p>
                <p>
                  • Сертификат действует на всю продукцию
                  магазина
                </p>
              </div>
            </div>
          </form>
        )}
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}