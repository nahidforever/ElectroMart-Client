"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  CircleDollarSign,
  FileText,
  PackageCheck,
  SearchCheck,
} from "lucide-react";

const buyingTips = [
  {
    icon: PackageCheck,
    title: "Check Product Condition",
    description:
      "Confirm whether the product is new or used before making your decision.",
  },
  {
    icon: CircleDollarSign,
    title: "Compare Price and Features",
    description:
      "Compare similar products to find the best balance between price, quality and features.",
  },
  {
    icon: SearchCheck,
    title: "Check Stock Availability",
    description:
      "Make sure the product is currently available before planning your purchase.",
  },
  {
    icon: FileText,
    title: "Read Product Details",
    description:
      "Carefully review the full description, brand, condition and specifications.",
  },
];

export default function BuyingTipsSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
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
              Smart Shopping Guide
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Smart Tips Before You Buy
          </h2>

          <p className="mt-4 leading-relaxed text-slate-500">
            Make confident shopping decisions by checking the most important
            product information before choosing an electronic device.
          </p>
        </motion.div>

        {/* Tips Cards */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {buyingTips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Decorative Shape */}

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100/60 transition duration-300 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={28} />
                    </div>

                    <span className="text-4xl font-bold text-slate-100 transition duration-300 group-hover:text-blue-100">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {tip.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {tip.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
