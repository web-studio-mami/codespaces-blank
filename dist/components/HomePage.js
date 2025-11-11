import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Hero } from "./Hero";
import { LimitedCollections } from "./LimitedCollections";
import { CatalogPreview } from "./CatalogPreview";
import { CollaborationsSection } from "./CollaborationsSection";
import { BrandSection } from "./BrandSection";
import { GiftCertificateSection } from "./GiftCertificateSection";
export function HomePage({ heroCollections, limitedCollections, collaborations, onNotify, onViewCatalog, onCollabClick, onGiftCertificateClick, }) {
    return (_jsxs("main", { children: [_jsx(Hero, { collections: heroCollections, onCtaClick: onViewCatalog }), _jsx(LimitedCollections, { collections: limitedCollections, onNotify: onNotify }), _jsx(CatalogPreview, { onViewCatalog: onViewCatalog }), _jsx(CollaborationsSection, { collaborations: collaborations, onCollabClick: onCollabClick }), _jsx(BrandSection, {}), _jsx(GiftCertificateSection, { onClick: onGiftCertificateClick })] }));
}
//# sourceMappingURL=HomePage.js.map