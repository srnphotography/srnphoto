"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = {
  address: {
    icon: MapPin,
    title: "Studio Address",
    lines: [
      "Sri Krishnalayam Complex",
      "Ettimadai Railway Station Road",
      "Coimbatore, Tamil Nadu",
      "India",
    ],
  },
  phone: {
    icon: Phone,
    title: "Phone",
    content: "+91 98092 11883",
    href: "tel:+919809211883",
  },
  email: {
    icon: Mail,
    title: "Email",
    content: "ragunath148@gmail.com",
    href: "mailto:ragunath148@gmail.com",
  },
};

export function ContactInfo() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {Object.entries(contactInfo).map(([key, info], index) => {
        const Icon = info.icon;
        return (
          <motion.div
            key={key}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">{info.title}</h3>
            {"lines" in info ? (
              <div className="text-muted-foreground">
                {info.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <a
                href={info.href}
                className="text-primary hover:underline"
              >
                {info.content}
              </a>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}