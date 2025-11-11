import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Hero } from "./Hero.js";
import { LimitedCollections } from "./LimitedCollections.js";
import { CatalogPreview } from "./CatalogPreview.js";
import { CollaborationsSection } from "./CollaborationsSection.js";
import { BrandSection } from "./BrandSection.js";
import { GiftCertificateSection } from "./GiftCertificateSection.js";
export function HomePage({ heroCollections, limitedCollections, collaborations, onNotify, onViewCatalog, onCollabClick, onGiftCertificateClick, }) {
    return (_jsxs("main", { children: [_jsx(Hero, { collections: heroCollections, onCtaClick: onViewCatalog }), _jsx(LimitedCollections, { collections: limitedCollections, onNotify: onNotify }), _jsx(CatalogPreview, { onViewCatalog: onViewCatalog }), _jsx(CollaborationsSection, { collaborations: collaborations, onCollabClick: onCollabClick }), _jsx(BrandSection, {}), _jsx(GiftCertificateSection, { onClick: onGiftCertificateClick })] }));
}
//# sourceMappingURL=HomePage.js.map