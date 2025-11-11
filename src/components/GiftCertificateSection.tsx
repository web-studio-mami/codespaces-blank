import { Gift, ArrowRight } from "lucide-react";
import { Button } from "./ui/button.js";
import { Card } from "./ui/card.js";
import { AnimatedSection } from "./AnimatedSection.js";

interface GiftCertificateSectionProps {
  onClick?: () => void;
}

export function GiftCertificateSection({
  onClick,
}: GiftCertificateSectionProps) {
  const onOpenDialog = onClick;
  const amounts = [3000, 5000, 10000, 15000];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-gift-section-from to-gift-section-to text-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[rgb(224,78,125)] mb-6">
              <Gift className="w-10 h-10" />
            </div>

            <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-4">
              Подарочные сертификаты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Идеальный подарок для тех, кто ценит стиль.
              Уникальный дизайн карты в эстетике бренда Urban
              Bloom.
            </p>
          </AnimatedSection>

          {/* Certificate Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {amounts.map((amount, index) => (
              <AnimatedSection key={amount} delay={index * 100}>
                <Card
                  className="relative overflow-hidden bg-card p-8 md:hover:shadow-2xl md:transition-all cursor-pointer group border-2 border-transparent md:hover:border-red-600"
                  onClick={onOpenDialog}
                >
                  <div className="relative space-y-4">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Сертификат
                    </div>
                    <div className="text-4xl text-foreground">
                      {amount.toLocaleString("ru-RU")} ₽
                    </div>
                    <div className="w-12 h-1 bg-red-600 mx-auto"></div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Custom Amount */}
          <AnimatedSection className="mb-12">
            <Card className="bg-card backdrop-blur-sm border-border p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl uppercase tracking-wider mb-2 text-foreground">
                    Любая сумма
                  </h3>
                  <p className="text-muted-foreground">
                    Выберите индивидуальную сумму сертификата от
                    1000 ₽
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-[rgb(224,78,125)] text-white uppercase tracking-wider shrink-0 justify-center"
                  onClick={onOpenDialog}
                >
                  Выбрать сумму
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-red-600 mx-auto mb-4"></div>
              <div className="uppercase tracking-wider">
                Мгновенная доставка
              </div>
              <p className="text-muted-foreground">
                На email сразу после оплаты
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-foreground mx-auto mb-4"></div>
              <div className="uppercase tracking-wider">
                Без срока действия
              </div>
              <p className="text-muted-foreground">
                Используйте когда удобно
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-600 mx-auto mb-4"></div>
              <div className="uppercase tracking-wider">
                Уникальный дизайн
              </div>
              <p className="text-muted-foreground">
                В стиле Urban Bloom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}