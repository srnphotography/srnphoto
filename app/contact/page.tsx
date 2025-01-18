import { ContactHeader } from "@/components/contact/contact-header";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/contact-map";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('public/images/SRN logo Png-1 (1).png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
      </div>
      
      <div className="container relative px-4 py-12 sm:px-6 lg:px-8">
        <ContactHeader />
        <div className="mx-auto max-w-5xl rounded-2xl bg-background/80 p-8 shadow-lg backdrop-blur">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </div>
  );
}