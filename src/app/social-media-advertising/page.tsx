import { Metadata } from "next";
import SocialMediaAdvertisingClient from "./client";

export const metadata: Metadata = {
  title: "Social Media Advertising Services | Targeted Paid Social Campaigns – Altiora Infotech",
  description: "Drive leads and sales with Social Media Advertising services. Altiora Infotech creates targeted, data-driven paid campaigns to boost visibility, engagement.",
  keywords: "social media advertising, Facebook ads, Instagram ads, LinkedIn ads, Twitter ads, social media marketing, paid social campaigns, social media ROI",
};

export default function SocialMediaAdvertisingPage() {
  return <SocialMediaAdvertisingClient />;
}