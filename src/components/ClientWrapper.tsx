"use client";

import BackToTopButton from "./BackToTopButton";
import ScrollRestorationProvider from "./ScrollRestorationProvider";

export default function ClientWrapper() {
  return (
    <>
      <ScrollRestorationProvider>
        <></>
      </ScrollRestorationProvider>
      <BackToTopButton />
    </>
  );
}