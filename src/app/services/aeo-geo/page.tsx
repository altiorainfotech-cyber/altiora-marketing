import { Metadata } from "next";
import AEOGEOClient from "./client";

export const metadata: Metadata = {
  title: "AEO & GEO Services | Answer Engine & Generative Engine Optimization – Altiora Infotech",
  description: "Get found in AI search, ChatGPT, Google AI Overviews, Perplexity & voice search. Altiora Infotech's AEO & GEO services optimize your brand to appear in AI-generated answers and generative search results.",
  keywords: "AEO, answer engine optimization, GEO, generative engine optimization, AI search optimization, ChatGPT SEO, Google SGE, Google AI Overviews, Perplexity optimization, voice search optimization, AI visibility, featured snippets, structured data",
  openGraph: {
    title: "AEO & GEO Services | Answer Engine & Generative Engine Optimization – Altiora Infotech",
    description: "Get found in AI search, ChatGPT, Google AI Overviews, Perplexity & voice search. Optimize your brand for the era of generative AI.",
  },
  twitter: {
    title: "AEO & GEO Services | Answer Engine & Generative Engine Optimization – Altiora Infotech",
    description: "Get found in AI search, ChatGPT, Google AI Overviews, Perplexity & voice search. Optimize your brand for the era of generative AI.",
  },
};

export default function AEOGEOPage() {
  return <AEOGEOClient />;
}
