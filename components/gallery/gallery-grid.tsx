"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageType } from "@/lib/types";
import { ImageDialog } from "@/components/ui/image-dialog";

interface GalleryGridProps {
  images: ImageType[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-lg",
              index === 0 && "sm:col-span-2 sm:row-span-2"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={800}
              height={600}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-full items-center justify-center p-4">
                <p className="text-center text-base font-semibold text-white sm:text-lg">
                  {image.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageDialog 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </>
  );
}