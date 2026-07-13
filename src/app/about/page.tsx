"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Headphones,
  HeartHandshake,
  PackageSearch,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const marketplaceFeatures = [
  "Browse electronics from multiple categories",
  "Search products by title, brand or description",
  "Filter products by category and price range",
  "Sort products by newest, low price or high price",
  "View complete product information",
  "Add and manage listings after authentication",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust and Security",
    description:
      "Protected product management ensures that authenticated users can safely add, update and remove listings.",
  },
  {
    icon: Search,
    title: "Simple Discovery",
    description:
      "Search, filter and sorting features make it easier to discover suitable electronic products.",
  },
  {
    icon: BadgeCheck,
    title: "Clear Information",
    description:
      "Product price, stock, brand, category and condition information support better decisions.",
  },
  {
    icon: Headphones,
    title: "User-Focused Design",
    description:
      "Every section is designed to provide a clean, responsive and comfortable browsing experience.",
  },
];

const statistics = [
  {
    value: "8+",
    label: "Product Categories",
  },
  {
    value: "2",
    label: "Product Conditions",
  },
  {
    value: "24/7",
    label: "Marketplace Access",
  },
  {
    value: "100%",
    label: "Trustable Platform",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Introduction */}

      <section className="border-b border-slate-100 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Introduction Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
            }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <Sparkles size={16} />
              About ElectroMart
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              A Smarter Way to Explore
              <span className="block text-blue-600">Electronics Online</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              ElectroMart is a modern electronics marketplace where users can
              discover, compare, list and manage electronic products through a
              secure and responsive web application.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/explore"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore Products
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* About Summary Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Smartphone size={28} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                      ElectroMart
                    </p>

                    <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      Your Trusted Electronics Marketplace
                    </h2>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-slate-600">
                  Our platform combines easy product discovery with secure
                  listing management, helping users enjoy a simple and organized
                  marketplace experience.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <PackageSearch className="text-blue-600" size={25} />

                    <h3 className="mt-3 font-bold text-slate-900">
                      Easy Exploration
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      Find products using search, filters and sorting.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <ShieldCheck className="text-blue-600" size={25} />

                    <h3 className="mt-3 font-bold text-slate-900">
                      Secure Management
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      Manage product listings through authenticated access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}

      <section className="bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {statistics.map((statistic, index) => (
              <motion.div
                key={statistic.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-6"
              >
                <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                  {statistic.value}
                </p>

                <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                  {statistic.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story and Features */}

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Story */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center lg:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Created to Make Electronics Shopping Easier
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              Finding a suitable electronic product can become difficult when
              product information is incomplete or products are not properly
              organized.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              ElectroMart was developed to provide an organized marketplace
              where users can quickly find products, check complete information
              and manage their own listings from one platform.
            </p>

            <div className="mt-7 flex items-start justify-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left lg:justify-start">
              <HeartHandshake
                size={24}
                className="mt-0.5 shrink-0 text-blue-600"
              />

              <div>
                <h3 className="font-bold text-slate-900">
                  Built Around User Needs
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Every feature focuses on simplicity, transparency and a better
                  user experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature List */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-blue-100 p-3 text-blue-600">
                <ShoppingBag size={26} />
              </span>

              <div>
                <p className="text-sm font-semibold text-blue-600">
                  Marketplace Features
                </p>

                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Everything in One Platform
                </h3>
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              {marketplaceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Simple, Transparent and Reliable
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              Our mission is to provide a user-friendly and secure electronics
              marketplace that makes product discovery and listing management
              easier for everyone.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-xl sm:p-7"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 sm:text-xl">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Section */}

      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
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
          className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-blue-50 px-6 py-12 text-center sm:px-10 lg:py-16"
        >
          <Users className="mx-auto text-blue-600" size={42} />

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Discover the Right Technology with ElectroMart
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600">
            Browse available electronics, compare product details and choose an
            option that matches your needs and budget.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/explore"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Browse Products
              <ArrowRight className="ml-2" size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-blue-200 bg-white px-8 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:bg-blue-100"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
