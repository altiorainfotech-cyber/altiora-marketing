import { Metadata } from "next";
import BusinessConsultingClient from "./client";

export const metadata: Metadata = {
  title: "Business Consulting Services — Strategy & Growth | Altiora Infotech",
  description: "Expert business consulting for companies in Canada & USA. Strategic guidance, growth roadmaps, operational improvement & execution support to accelerate your business.",
  keywords: "business consulting, strategy consulting, growth consulting, operational improvement, business strategy, digital transformation, financial advisory, leadership consulting",
};

export default function BusinessConsultingPage() {
  return <BusinessConsultingClient />;
}
