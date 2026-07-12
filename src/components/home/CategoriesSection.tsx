"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cable,
  Computer,
  Headphones,
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
  Watch,
} from "lucide-react";

const categories = [
  {
    name: "Smartphone",
    icon: Smartphone,
    description:
      "Latest smartphones with powerful performance and advanced features",
  },
  {
    name: "Laptop",
    icon: Laptop,
    description: "High-performance laptops for work, study and creativity",
  },
  {
    name: "Tablet",
    icon: Tablet,
    description: "Portable tablets for entertainment and productivity",
  },
  {
    name: "Desktop",
    icon: Computer,
    description: "Powerful desktop computers for professional needs",
  },
  {
    name: "Monitor",
    icon: Monitor,
    description: "High-quality displays for gaming and office work",
  },
  {
    name: "Headphone",
    icon: Headphones,
    description: "Premium audio devices with immersive sound",
  },
  {
    name: "Smart Watch",
    icon: Watch,
    description: "Smart wearable technology for your lifestyle",
  },
  {
    name: "Accessories",
    icon: Cable,
    description: "Essential accessories for your devices",
  },
];

export default function CategoriesSection() {
  return (
    <section
      className="
        bg-slate-50
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
        "
      >
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
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-blue-600
            "
          >
            Browse Categories
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              text-slate-900
              sm:text-4xl
            "
          >
            Explore Our Product Categories
          </h2>

          <p
            className="
              mt-4
              text-slate-500
            "
          >
            Find the perfect technology products from our wide range of
            electronics categories.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div
          className="
            mt-12
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.name}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <Link
                  href={`/explore?category=${category.name}`}
                  className="block h-full"
                >
                  <div
                    className="
                      group
                      flex
                      h-full
                      flex-col
                      items-center
                      rounded-3xl
                      border
                      bg-white
                      p-6
                      text-center
                      shadow-sm
                      transition
                      hover:shadow-xl
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-100
                        text-blue-600
                        transition
                        group-hover:bg-blue-600
                        group-hover:text-white
                      "
                    >
                      <Icon size={28} />
                    </div>

                    <h3
                      className="
                        mt-6
                        text-xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {category.name}
                    </h3>

                    <p
                      className="
                        mt-3
                        flex-1
                        text-sm
                        leading-relaxed
                        text-slate-500
                      "
                    >
                      {category.description}
                    </p>

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-semibold
                        text-blue-600
                      "
                    >
                      Explore
                      <ArrowRight
                        size={16}
                        className="
                          ml-2
                          transition
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
