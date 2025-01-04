import { GalleryTabs } from "@/components/gallery/gallery-tabs";

export default function GalleryPage() {
  return (
    <div className="container px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">Our Gallery</h1>
      <GalleryTabs />
    </div>
  );
}