import DigitalMarketingClient from "./DigitalMarketingClient";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Marketing Services for Blockchain, SaaS & Emerging Tech | Altiora Infotech",
  description: "Altiora Infotech helps Blockchain, SaaS, and emerging-tech companies achieve measurable growth through integrated digital marketing — SEO, content, social, paid media, and automation.",
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}
