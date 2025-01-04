"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { galleryData } from "@/lib/gallery-data";

export function GalleryTabs() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-8 flex justify-center flex-wrap gap-2">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="weddings">Weddings</TabsTrigger>
        <TabsTrigger value="portraits">Portraits</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <GalleryGrid images={galleryData.all} />
      </TabsContent>
      <TabsContent value="weddings">
        <GalleryGrid images={galleryData.weddings} />
      </TabsContent>
      <TabsContent value="portraits">
        <GalleryGrid images={galleryData.portraits} />
      </TabsContent>
      <TabsContent value="events">
        <GalleryGrid images={galleryData.events} />
      </TabsContent>
    </Tabs>
  );
}