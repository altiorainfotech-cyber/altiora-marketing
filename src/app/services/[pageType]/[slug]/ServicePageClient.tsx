'use client';

import React from 'react';
import Header from '@/assets/Header';
import Footer from '@/assets/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ServicePageData } from '@/lib/servicePages';

interface ServicePageClientProps {
  pageData: ServicePageData;
}

export default function ServicePageClient({ pageData }: ServicePageClientProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section 
          className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: pageData.heroSection.backgroundImage 
              ? `url(${pageData.heroSection.backgroundImage})` 
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {pageData.heroSection.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">
              {pageData.heroSection.subtitle}
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {pageData.heroSection.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {pageData.heroSection.ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    button.variant === 'primary'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/30'
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {pageData.stats && pageData.stats.length > 0 && (
          <section className="py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {pageData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Overview Section */}
        {pageData.overviewSection && (
          <section className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-white mb-6 text-center">
                {pageData.overviewSection.title}
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center">
                {pageData.overviewSection.description}
              </p>
            </div>
          </section>
        )}

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                {pageData.servicesSection.title}
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                {pageData.servicesSection.subtitle}
              </p>
              <p className="text-gray-400 max-w-3xl mx-auto">
                {pageData.servicesSection.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.servicesSection.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-300 mb-4">{card.description}</p>
                  {!card.comingSoon ? (
                    <Link
                      href={card.link}
                      className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center"
                    >
                      {card.cta} →
                    </Link>
                  ) : (
                    <span className="text-yellow-400 font-semibold">Coming Soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blockchain CTA Section */}
        {pageData.blockchainCTA && (
          <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {pageData.blockchainCTA.title}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {pageData.blockchainCTA.description}
              </p>
              <Link
                href={pageData.blockchainCTA.buttonLink}
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                {pageData.blockchainCTA.buttonText}
              </Link>
            </div>
          </section>
        )}

        {/* Why Choose Section */}
        {pageData.whyChooseSection && (
          <section className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {pageData.whyChooseSection.title}
                </h2>
                <p className="text-xl text-gray-300">
                  {pageData.whyChooseSection.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pageData.whyChooseSection.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="text-blue-400 font-semibold">{item.trustMetric}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How We Work Section */}
        {pageData.howWeWorkSection && (
          <section className="py-20 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {pageData.howWeWorkSection.title}
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  {pageData.howWeWorkSection.subtitle}
                </p>
                <p className="text-gray-400 max-w-3xl mx-auto">
                  {pageData.howWeWorkSection.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {pageData.howWeWorkSection.steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
              {pageData.howWeWorkSection.readyToBuild && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {pageData.howWeWorkSection.readyToBuild.title}
                  </h3>
                  <p className="text-xl text-white/90 mb-6">
                    {pageData.howWeWorkSection.readyToBuild.description}
                  </p>
                  <Link
                    href={pageData.howWeWorkSection.readyToBuild.buttonLink}
                    className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    {pageData.howWeWorkSection.readyToBuild.buttonText}
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Final CTA Section */}
        {pageData.finalCTASection && (
          <section className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                {pageData.finalCTASection.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {pageData.finalCTASection.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {pageData.finalCTASection.buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.link}
                    className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      button.variant === 'primary'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                        : 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/30'
                    }`}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
