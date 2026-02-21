import { Metadata } from "next";
import InfluencerUGCClient from "./client";

export const metadata: Metadata = {
  title: "Influencer & UGC Marketing Services | Authentic Creator Campaigns – Altiora Infotech",
  description: "Drive trust, reach & revenue with Influencer & UGC Marketing. Altiora Infotech connects your brand with vetted creators and builds authentic user-generated content campaigns that convert.",
  keywords: "influencer marketing, UGC marketing, user generated content, creator campaigns, micro influencer, macro influencer, TikTok influencers, Instagram influencers, UGC content, influencer strategy Canada",
  openGraph: {
    title: "Influencer & UGC Marketing Services | Altiora Infotech",
    description: "Drive trust, reach & revenue with Influencer & UGC Marketing. Connect your brand with vetted creators and authentic user-generated content campaigns.",
  },
  twitter: {
    title: "Influencer & UGC Marketing Services | Altiora Infotech",
    description: "Drive trust, reach & revenue with Influencer & UGC Marketing. Connect your brand with vetted creators and authentic user-generated content campaigns.",
  },
};

export default function InfluencerUGCPage() {
  return <InfluencerUGCClient />;
}
