import { Sparkles, Target, Heart, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { AnimatedSection } from "./AnimatedSection.js";

export function BrandSection() {
  const values = [
    {
      icon: Sparkles,
      title: "Индивидуальность",
      description:
        "Уникальные принты и дизайны, отражающие твою личность",
    },
    {
      icon: Target,
      title: "Качество",
      description:
        "Премиальные материалы и внимание к деталям в каждом изделии",
    },
    {
      icon: Heart,
      title: "Локальность",
      description:
        "Вдохновение от российской уличной культуры и авангарда",
    },
    {
      icon: Zap,
      title: "Эксклюзивность",
      description:
        "Лимитированные тиражи и специальные коллаборации",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-24 bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          {/* Text Content */}
          <AnimatedSection className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block border-2 border-foreground px-4 py-2 uppercase tracking-wider">
                О бренде
              </div>
              <h2 className="text-4xl md:text-5xl uppercase tracking-tight">
                Urban Bloom
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы создаем современную уличную моду, которая
                объединяет минимализм, русский авангард и
                локальную культуру. Каждая вещь — это история,
                вдохновленная динамикой города и стремлением к
                самовыражению.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Основанный в 2025 году, Urban Bloom стал
                платформой для творческой молодежи, которая ищет
                аутентичность в массовой культуре. Мы
                сотрудничаем с локальными художниками,
                музыкантами и дизайнерами, создавая уникальные
                коллекции ограниченным тиражом.
              </p>
              <p className="text-muted-foreground">
                Наша миссия — делать качественный стритвир
                доступным, сохраняя при этом эксклюзивность и
                индивидуальный подход к каждому продукту.
              </p>
            </div>

            {/* Geometric Accent */}
            <div className="flex items-center gap-2 md:gap-3 pt-4">
              {/* <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600"></div>
              <div className="w-12 h-12 md:w-16 md:h-16 border-2 md:border-4 border-black"></div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600"></div> */}
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={200} className="relative">
            <div className="relative aspect-[4/5]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730054159372-7d55931ab435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFmZml0aSUyMHdhbGwlMjBhcnR8ZW58MXx8fHwxNzYyNzQ4MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Urban culture"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                <div className="text-2xl md:text-4xl uppercase tracking-tight">
                  Уличная культура
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wider mt-2 opacity-80">
                  Вдохновение из города
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="uppercase tracking-wider">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}