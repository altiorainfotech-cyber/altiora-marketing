import { Metadata } from "next";
import SocialMediaManagementClient from "./client";

export const metadata: Metadata = {
  title: "Social Media Management Services | Altiora Infotech",
  description: "Grow your brand with Social Media Management Services. Altiora Infotech helps businesses build engagement, brand trust, and loyal audiences through data-driven strategies.",
  keywords: "social media management, SMM, Facebook management, Instagram management, LinkedIn management, Twitter management, social media strategy, content creation, community management",
};

export default function SocialMediaManagementPage() {
  return <SocialMediaManagementClient />;
}
