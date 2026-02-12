import CodeToCloudClient from "./CodeToCloudClient";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "From Code to Cloud, End to End | Web2 Services | Altiora Infotech",
  description: "High-performance websites and apps that drive revenue—so you ship faster, cut costs, and grow with confidence.",
};

export default function Web2ServicesPage() {
  return <CodeToCloudClient />;
}
