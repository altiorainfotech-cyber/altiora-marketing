// components/FallbackImage.tsx
"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function FallbackImage(props: ImageProps) {
  const { src, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src ?? "/icons/tools/placeholder.svg");
  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/icons/tools/placeholder.svg")}
      {...rest}
    />
  );
}
