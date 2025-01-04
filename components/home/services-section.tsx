"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing your special day with elegance and emotion",
    image: "https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/440943472_3794033757587843_7725094828190554523_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9uHvpirY9isQ7kNvgEn7-FY&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=AQFfdmnm6BwnN2XorK3n4TN&oh=00_AYDSkNNp1679dWuFLJNg13iU1GhuVgTIRGK0uv2iGklbpA&oe=67511B93",
  },
  {
    title: "Portrait Sessions",
    description: "Professional portraits that showcase your personality",
    image: "https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/434925782_3777062869284932_3279623480798456709_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GMk_lkm_5PQQ7kNvgH6bqc0&_nc_zt=23&_nc_ht=scontent.fmaa2-2.fna&_nc_gid=An4F-COMpglSkpq2vWbE9xl&oh=00_AYAqHw6DeNLMPv2nS28KHQQR6qmCRhpXSjY83Rm3CcJUEQ&oe=6750F755",
  },
  {
    title: "Event Coverage",
    description: "Comprehensive coverage for all your special events",
    image: "https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/438301115_3794011954256690_4654920267565675257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p5E3Zqc-M0QQ7kNvgGgw2iT&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=ABk-ymVRzQSaOfrWHWr6j58&oh=00_AYCKIGfe-YwdwjHNc-h0eS03-vzKK-O4MIErY-PJwiyS7A&oe=67511AAA",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}