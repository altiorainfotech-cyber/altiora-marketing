import { Metadata } from "next";
import SEOClient from "./client";

export const metadata: Metadata = {
  title: " Professional SEO Services That Generate Customers",
  description: "Turn your website into a predictable lead source. We optimize search intent, technical SEO and authority so your business ranks and converts consistently.",
  keywords: "SEO services, search engine optimization, keyword research, on-page SEO, technical SEO, link building, organic traffic, Google rankings",
};

export default function SEOPage() {
  return <SEOClient />;
}