import { Hero } from "./Hero.js";
import { LimitedCollections } from "./LimitedCollections.js";
import { CatalogPreview } from "./CatalogPreview.js";
import { CollaborationsSection } from "./CollaborationsSection.js";
import { BrandSection } from "./BrandSection.js";
import { GiftCertificateSection } from "./GiftCertificateSection.js";

interface HeroCollection {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  badge?: string;
}

interface LimitedCollection {
  name: string;
  description: string;
  imageUrl: string;
  releaseDate: Date;
  city?: string;
}

interface Collaboration {
  artist: string;
  title: string;
  description: string;
  imageUrl: string;
  type: string;
}

interface HomePageProps {
  heroCollections: HeroCollection[];
  limitedCollections: LimitedCollection[];
  collaborations: Collaboration[];
  onNotify?: (collectionName: string) => void;
  onViewCatalog: () => void;
  onCollabClick?: (collab: Collaboration) => void;
  onGiftCertificateClick?: () => void;
}

export function HomePage({
  heroCollections,
  limitedCollections,
  collaborations,
  onNotify,
  onViewCatalog,
  onCollabClick,
  onGiftCertificateClick,
}: HomePageProps) {
  return (
    <main>
      <Hero
        collections={heroCollections}
        onCtaClick={onViewCatalog}
      />

      <LimitedCollections
        collections={limitedCollections}
        onNotify={onNotify}
      />

      <CatalogPreview onViewCatalog={onViewCatalog} />

      <CollaborationsSection
        collaborations={collaborations}
        onCollabClick={onCollabClick}
      />

      <BrandSection />

      <GiftCertificateSection
        onClick={onGiftCertificateClick}
      />
    </main>
  );
}