"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ImageType } from "@/lib/types";

interface ImageDialogProps {
  image: ImageType | null;
  onClose: () => void;
}

export function ImageDialog({ image, onClose }: ImageDialogProps) {
  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl mx-4">
        <DialogTitle className="sr-only">
          {image?.title || "Image Preview"}
        </DialogTitle>
        {image && (
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}