import { Metadata } from "next";
import SearchEngineMarketingClient from "./client";

export const metadata: Metadata = {
  title: "Search Engine Marketing Services | Altiora",
  description: "Boost visibility, capture high-intent traffic, and increase conversions with Altiora Infotech’s data-driven search engine marketing solutions.",
  keywords: "search engine marketing, SEM, search marketing, Google marketing, Bing marketing, search visibility, search strategy, search optimization",
};

export default function SearchEngineMarketingPage() {
  return <SearchEngineMarketingClient />;
}