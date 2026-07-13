"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";

const brands = [
  {
    name: "Apple",
    initial: "A",
    description: "Premium smartphones, laptops and smart devices",
  },
  {
    name: "Samsung",
    initial: "S",
    description: "Innovative electronics for modern lifestyles",
  },
  {
    name: "Dell",
    initial: "D",
    description: "Reliable laptops, desktops and workstations",
  },
  {
    name: "HP",
    initial: "HP",
    description: "Powerful computing devices for work and study",
  },
  {
    name: "Lenovo",
    initial: "L",
    description: "Smart laptops and productivity-focused devices",
  },
  {
    name: "ASUS",
    initial: "AS",
    description: "Gaming and high-performance technology products",
  },
  {
    name: "Xiaomi",
    initial: "MI",
    description: "Affordable smartphones and smart accessories",
  },
  {
    name: "Sony",
    initial: "S",
    description: "Premium entertainment and audio technology",
  },
];

export default function PopularBrandsSection() {
  return (
    <section className="overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-blue-600">
            <BadgeCheck size={18} />

            <p className="text-sm font-semibold uppercase tracking-wider">
              Popular Brands
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted Brands You Love
          </h2>

          <p className="mt-4 leading-relaxed text-slate-500">
            Explore electronics from leading global brands known for innovation,
            quality and reliable performance.
          </p>
        </motion.div>

        {/* Brand Cards */}

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -7,
              }}
            >
              <Link href={`/explore`} className="group block h-full">
                <div className="flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-xl sm:p-7">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-blue-500/20 sm:h-20 sm:w-20 sm:text-xl">
                    {brand.initial}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 sm:text-xl">
                    {brand.name}
                  </h3>

                  <p className="mt-2 hidden text-sm leading-relaxed text-slate-500 sm:block">
                    {brand.description}
                  </p>

                  <div className="mt-5 flex items-center text-sm font-semibold text-blue-600">
                    Explore Products
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
