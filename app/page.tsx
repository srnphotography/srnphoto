import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ServicesSection } from "@/components/home/services-section";

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=2940&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative flex h-full items-center justify-center text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              We Snap it, When you Live
              <Heart className="ml-2 inline-block h-8 w-8 text-red-500" />
            </h1>
            <p className="text-lg text-gray-200">
              Capturing life's precious moments with artistic excellence
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/gallery">Browse Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
    </>
  );
}