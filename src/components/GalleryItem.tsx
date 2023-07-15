// GalleryItem.tsx
import React from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

export default GalleryItem;
