"use client";

import { ReactNode } from 'react';
import ScrollRestorationProvider from './ScrollRestorationProvider';
import BackToTopButton from './BackToTopButton';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollRestorationProvider>
        {children}
      </ScrollRestorationProvider>
      <BackToTopButton />
    </>
  );
}
