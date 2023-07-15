import React, { useState } from "react";

interface GalleryYearProps {
  year: number;
}

const GalleryYear: React.FC<GalleryYearProps> = ({ year }) => {
  // Dummy data for gallery images
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: "https://picsum.photos/id/1018/400/300", alt: "Image 1" },
    { id: 2, src: "https://picsum.photos/id/1025/400/300", alt: "Image 2" },
    { id: 3, src: "https://picsum.photos/id/1035/400/300", alt: "Image 3" },
    { id: 4, src: "https://picsum.photos/id/1040/400/300", alt: "Image 4" },
    { id: 5, src: "https://picsum.photos/id/1044/400/300", alt: "Image 5" },
    { id: 6, src: "https://picsum.photos/id/1050/400/300", alt: "Image 6" },
  ];

  const handleClick = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">
        Gallery - {year}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleClick(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-img"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="transition">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="selected-image"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryYear;
