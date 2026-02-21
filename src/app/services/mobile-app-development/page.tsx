import { Metadata } from "next";
import MobileAppDevelopmentClient from "./client";

export const metadata: Metadata = {
    title: "Mobile App Development Services | iOS, Android & Cross-Platform – Altiora Infotech",
    description: "Expert mobile app development for iOS, Android, React Native & Flutter. Altiora Infotech builds high-performance, user-loved apps that drive real business growth.",
    keywords: "mobile app development, iOS app development, Android app development, React Native, Flutter, cross-platform apps, mobile UI/UX, app development company Canada USA",
};

export default function MobileAppDevelopmentPage() {
    return <MobileAppDevelopmentClient />;
}
