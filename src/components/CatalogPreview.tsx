import { ArrowRight, Grid3x3, Sparkles } from "lucide-react";
import { Button } from "./ui/button.js";
import { AnimatedSection } from "./AnimatedSection.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

interface CatalogPreviewProps {
  onViewCatalog: () => void;
}

export function CatalogPreview({
  onViewCatalog,
}: CatalogPreviewProps) {
  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <div className="flex items-center gap-2 px-4 py-2 bg-foreground text-background uppercase tracking-wider">
                    <Grid3x3 className="w-4 h-4" />
                    <span>Весь ассортимент</span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl uppercase tracking-tight leading-none">
                  Исследуй полный каталог
                </h2>

                <p className="text-lg text-muted-foreground max-w-md">
                  Более 30 моделей из разных коллекций.
                  Продвинутые фильтры по коллекциям, категориям
                  и подкатегориям помогут найти именно то, что
                  нужно.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[rgb(224,78,125)] flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="uppercase tracking-wider mb-1">
                      8 коллекций
                    </div>
                    <p className="text-sm text-muted-foreground">
                      От лимитированных капсул до базового
                      гардероба
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[rgb(224,78,125)] flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="uppercase tracking-wider mb-1">
                      Умные фильтры
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Подкатегории по верху, низу и аксессуарам
                      для каждой коллекции
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[rgb(224,78,125)] flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="uppercase tracking-wider mb-1">
                      Новинки первыми
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Быстрый доступ к последним поступлениям
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-foreground text-background uppercase tracking-wider group justify-center"
                  onClick={onViewCatalog}
                >
                  Открыть каталог
                  <ArrowRight className="ml-2 w-5 h-5 md:group-hover:translate-x-1 md:transition-transform" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Images Grid */}
          <AnimatedSection
            delay={200}
            className="order-1 md:order-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1711387718409-a05f62a3dc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwaG9vZGllJTIwYmxhY2t8ZW58MXx8fHwxNzYyNzgyMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Streetwear collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[rgb(224,78,125)] text-white px-3 py-1 uppercase tracking-wider text-sm">
                  New
                </div>
              </div>

              {/* Small Image 1 */}
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1618677603544-51162346e165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdHNoaXJ0JTIwd2hpdGV8ZW58MXx8fHwxNzYyNzgyMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="T-shirts"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Image 2 */}
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758267928031-a87e5a5c6c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwcGFudHMlMjBjYXJnb3xlbnwxfHx8fDE3NjI3ODIwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute bottom-4 right-4 bg-foreground text-background p-4 md:p-6 uppercase tracking-wider shadow-lg">
              <div className="text-2xl md:text-3xl">30+</div>
              <div className="text-xs mt-1">Моделей</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}