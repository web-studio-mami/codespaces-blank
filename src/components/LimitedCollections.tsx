import { Timer, ArrowRight } from "lucide-react";
import { Button } from "./ui/button.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { AnimatedSection } from "./AnimatedSection.js";
import { useEffect, useState } from "react";

interface CollectionProps {
  name: string;
  description: string;
  imageUrl: string;
  releaseDate: Date;
  city?: string;
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60),
          ),
          minutes: Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60),
          ),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2 sm:gap-4">
      {[
        { label: "Дней", value: timeLeft.days },
        { label: "Часов", value: timeLeft.hours },
        { label: "Минут", value: timeLeft.minutes },
        { label: "Секунд", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="text-center flex-1">
          <div className="text-2xl sm:text-3xl tabular-nums">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function LimitedCollections({
  collections,
  onNotify,
}: {
  collections: CollectionProps[];
  onNotify?: (collectionName: string) => void;
}) {
  return (
    <section
      id="limited"
      className="py-12 md:py-24 bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[rgb(224,78,125)] flex items-center justify-center">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl uppercase tracking-tight">
              Limited Editions
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Эксклюзивные коллекции в ограниченном тираже.
            Вдохновленные уличной культурой российских городов.
          </p>
        </AnimatedSection>

        {/* Collections Grid */}
        <div className="space-y-24">
          {collections.map((collection, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "md:col-start-2" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImageWithFallback
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Elements */}
                  {/* <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-red-600 mix-blend-multiply"></div> */}
                  {/* <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 border-4 md:border-8 border-white mix-blend-difference"></div> */}
                </div>

                {/* Limited Badge */}
                <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 bg-foreground text-background px-4 py-3 md:px-8 md:py-6 uppercase tracking-wider">
                  <div className="text-xs mb-1">Тираж</div>
                  <div className="text-xl md:text-2xl">
                    100 шт
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-8 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
              >
                {collection.city && (
                  <div className="inline-block border-2 border-foreground px-4 py-2 uppercase tracking-wider">
                    {collection.city}
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl uppercase tracking-tight">
                    {collection.name}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {collection.description}
                  </p>
                </div>

                {/* Countdown */}
                <div className="bg-card p-6 border border-border">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    До старта продаж
                  </div>
                  <CountdownTimer
                    targetDate={collection.releaseDate}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    size="lg"
                    className="bg-foreground text-background uppercase tracking-wider group justify-center"
                    onClick={() => onNotify?.(collection.name)}
                  >
                    Уведомить о старте
                    <ArrowRight className="ml-2 w-5 h-5 md:group-hover:translate-x-1 md:transition-transform" />
                  </Button>
                </div>

                {/* Geometric Accent */}
                <div className="flex items-center gap-2 md:gap-3 pt-4">
                  {/* <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600"></div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-black"></div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600"></div> */}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}