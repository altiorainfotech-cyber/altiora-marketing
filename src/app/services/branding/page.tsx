import { Metadata } from "next";
import BrandingClientPage from "./_components/BrandingClientPage";

export const metadata: Metadata = {
  title: "Branding Services That Build Trust & Drive Growth | Altiora Infotech",
  description: "Strategic branding services for businesses. Brand identity, strategy, messaging, guidelines & positioning that shape perception and influence decisions.",
  keywords: "branding services, brand identity, brand strategy, logo design, brand guidelines, brand positioning, visual identity, brand messaging",
};

export default function BrandingPage() {
  return <BrandingClientPage />;
}
