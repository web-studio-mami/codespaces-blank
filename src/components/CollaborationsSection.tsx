import { Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import { AnimatedSection } from "./AnimatedSection.js";

interface CollabProps {
  artist: string;
  title: string;
  description: string;
  imageUrl: string;
  type: string;
}

export function CollaborationsSection({
  collaborations,
  onCollabClick,
}: {
  collaborations: CollabProps[];
  onCollabClick?: (collab: CollabProps) => void;
}) {
  const collabs = collaborations;
  return (
    <section
      id="collabs"
      className="py-12 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-1 h-12 bg-foreground"></div>
            <Users className="w-12 h-12" />
            <div className="w-1 h-12 bg-foreground"></div>
          </div>
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Коллаборации
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Совместные проекты с локальными художниками,
            музыкантами и креаторами
          </p>
        </AnimatedSection>

        {/* Collabs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collabs.map((collab, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="group"
              onClick={() => onCollabClick?.(collab)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 cursor-pointer">
                <ImageWithFallback
                  src={collab.imageUrl}
                  alt={collab.title}
                  className="w-full h-full object-cover md:group-hover:scale-105 md:transition-transform md:duration-500"
                />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-card text-card-foreground px-4 py-2 uppercase tracking-wider">
                  {collab.type}
                </div>

                {/* Overlay - Always visible on mobile, shows on hover on desktop */}
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
                  <Button
                    variant="secondary"
                    className="uppercase tracking-wider justify-center px-6 h-12"
                    onClick={(e: { stopPropagation: () => void; }) => {
                      e.stopPropagation();
                      onCollabClick?.(collab);
                    }}
                  >
                    Смотреть коллаб
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-red-600">
                  {collab.artist}
                </p>
                <h3 className="text-xl uppercase tracking-wide">
                  {collab.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {collab.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}