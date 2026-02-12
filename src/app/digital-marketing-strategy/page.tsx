import { Metadata } from "next";
import DigitalMarketingStrategyClient from "./client";

export const metadata: Metadata = {
  title: "Digital Marketing Strategy for Scalable Business Growth",
  description: "Build a clear, data-driven digital marketing strategy that aligns channels, audience, and goals to drive consistent leads and revenue growth.",
  keywords: "digital marketing strategy, marketing strategy, strategic planning, digital transformation, marketing consulting, growth strategy, ROI optimization",
};

export default function DigitalMarketingStrategyPage() {
  return <DigitalMarketingStrategyClient />;
}