import { Metadata } from "next";
import SocialMediaMarketingClient from "./client";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Altiora Infotech",
  description: "Grow your brand with Social Media Marketing Services. Altiora Infotech helps businesses build engagement, brand trust, and loyal audiences through data-driven strategies.",
  keywords: "social media marketing, SMM, Facebook marketing, Instagram marketing, LinkedIn marketing, Twitter marketing, social media strategy, content creation, community management",
};

export default function SocialMediaMarketingPage() {
  return <SocialMediaMarketingClient />;
}