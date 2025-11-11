import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { AnimatedSection } from "./AnimatedSection.js";
import { useState } from "react";

interface HeroCollection {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  badge?: string;
}

interface HeroProps {
  collections: HeroCollection[];
  onCtaClick?: () => void;
}

export function Hero({ collections, onCtaClick }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : collections.length - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < collections.length - 1 ? prev + 1 : 0,
    );
  };

  const currentCollection = collections[currentIndex];

  return (
    <section
      id="new"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 bg-[rgb(224,78,125)] text-white uppercase tracking-wider mt-8 md:mt-0">
                  <div className="w-2 h-2 bg-white"></div>
                  <span>
                    {currentCollection?.badge || "Limited Drop"}
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl uppercase tracking-tight leading-none">
                {currentCollection?.title}
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                {currentCollection?.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-foreground text-background uppercase tracking-wider group justify-center"
                onClick={onCtaClick}
              >
                {currentCollection?.ctaText}
                <ArrowRight className="ml-2 w-5 h-5 md:group-hover:translate-x-1 md:transition-transform" />
              </Button>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 pt-4 md:pt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background h-10 w-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {collections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-foreground"
                        : "w-2 bg-muted-foreground/30"
                    }`}
                    aria-label={`Перейти к коллекции ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background h-10 w-10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection delay={200} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src={currentCollection?.imageUrl}
                alt={currentCollection?.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Overlay Graphic Element */}
              {/* <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-16 md:h-16 bg-red-600 mix-blend-multiply"></div> */}
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-0 left-0 md:-bottom-6 md:-left-6 bg-foreground text-background p-4 md:p-6 uppercase tracking-wider">
              <div className="text-2xl md:text-3xl">
                {String(currentIndex + 1).padStart(2, "0")}
              </div>
              <div className="text-xs mt-1">Коллекция</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}