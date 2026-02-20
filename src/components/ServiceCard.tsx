import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  hideServiceTag?: boolean;
  iconVariant?: 'gold' | 'gray';
}

export default function ServiceCard({ title, description, icon, link, hideServiceTag = false, iconVariant = 'gold' }: ServiceCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="relative w-full bg-gradient-to-br from-[#0B0D2A] to-[#0B0D2A] text-white rounded-2xl p-6 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent group-hover:border-[#F4CC6F]/50 h-[280px] flex flex-col">
        {/* Top Right Icon */}
        {iconVariant === 'gold' ? (
          <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-[40px] flex items-start justify-end p-3">
            <div className="w-11 h-11 rounded-full bg-[#f4cc6f] flex items-center justify-center shadow-lg">
              <div className="text-[#0B0D2A] text-lg">
                {icon}
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute top-0 right-0 w-24 h-24 flex items-start justify-end p-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center shadow-lg">
              <div className="text-white">
                {icon}
              </div>
            </div>
          </div>
        )}

        {/* Service Tag */}
        {!hideServiceTag && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#f4cc6f] text-[#0B0D2A] text-sm rounded-full font-medium">
              Service
            </span>
          </div>
        )}

        {/* Content */}
        <div className={`${iconVariant === 'gray' ? 'pr-24' : 'pr-8'} flex-1 flex flex-col ${hideServiceTag ? 'pt-2' : ''}`}>
          <h3 className="text-xl font-bold mb-3 text-white tracking-wide group-hover:text-[#f4cc6f] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/80 tracking-wide leading-relaxed group-hover:text-white transition-colors duration-300 flex-1">
            {description}
          </p>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>
    </Link>
  );
}
