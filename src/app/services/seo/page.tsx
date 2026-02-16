import { Metadata } from "next";
import SEOClient from "./client";

export const metadata: Metadata = {
  title: "Professional SEO Services | Altiora Infotech",
  description: "Improve rankings, drive organic traffic, and generate consistent leads with Altiora Infotech’s data-driven SEO services for long-term business growth.",
  keywords: "SEO services, search engine optimization, keyword research, on-page SEO, technical SEO, link building, organic traffic, Google rankings",
};

export default function SEOPage() {
  return <SEOClient />;
}