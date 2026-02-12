import { Metadata } from "next";
import PPCClient from "./client";

export const metadata: Metadata = {
  title: "Paid Advertising Services Focused on Leads & ROI",
  description: "Launch performance-driven ads campaigns that deliver instant visibility, qualified leads, and measurable ROI across search and paid social platforms.",
  keywords: "PPC advertising, pay per click, Google Ads, Bing Ads, PPC management, paid search, PPC campaigns, digital advertising, SEM",
};

export default function PPCPage() {
  return <PPCClient />;
}