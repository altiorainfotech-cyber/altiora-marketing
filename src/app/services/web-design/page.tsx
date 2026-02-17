import { Metadata } from "next";
import WebDesignClient from "./client";

export const metadata: Metadata = {
  title: 'Web Design services - Altiora Infotech',
  description: 'Design beautiful interfaces with web design services at Altiora Infotech. We specialize in user experience and interface design.'
};

export default function WebDesignPage() {
  return <WebDesignClient />;
}

