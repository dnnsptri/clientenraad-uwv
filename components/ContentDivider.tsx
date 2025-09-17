import React from "react";

interface ContentDividerProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ContentDivider({ src, alt = "", className = "" }: ContentDividerProps) {
  return (
    <div className={`mt-12 mb-14 flex w-full items-center justify-center ${className}`}>
      <img src={src} alt={alt} className="h-[80px] max-w-full" />
    </div>
  );
}
