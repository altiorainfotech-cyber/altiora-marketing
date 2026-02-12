"use client";
import { useEffect } from "react";

import Header from "../assets/Header";
import Footer from "../assets/Footer";

import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import QuickLinks from "../components/sections/QuickLinks"; 
import Solutions from "../components/sections/Solutions"; 
import SuccessStoriesSection from "../components/sections/SuccessStories"; 
import IndustriesGrid from "../components/sections/IndustriesGrid";
import ToolStack from "../components/sections/ToolStack";
import ClientTestimonials from "../components/sections/ClientTestimonials";
import BlogStrip from "../components/sections/BlogStrip";

export default function PageContent() {
  useEffect(() => {
    // Components loaded
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB]">
      <Header />
      <Hero />
      <Products />
      <QuickLinks /> 
      <Solutions />
      <SuccessStoriesSection />
      <IndustriesGrid /> 
      <ToolStack /> 
      <ClientTestimonials />
      <BlogStrip />  
      <Footer />
    </div>
  );
}