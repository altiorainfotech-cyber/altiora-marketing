import { Metadata } from "next";
import GraphicDesignClientPage from "./_components/GraphicDesignClientPage";

export const metadata: Metadata = {
  title: "Professional Graphic Design Services | Altiora Infotech",
  description: "Creative graphic design services that connect, convert & communicate your brand. Logo design, marketing collateral, digital graphics & more.",
  keywords: "graphic design services, logo design, brand identity, social media graphics, marketing collateral, UI/UX design, packaging design",
};

export default function GraphicDesignPage() {
  return <GraphicDesignClientPage />;
}
