"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[750px] flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Glow */}

      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-8">
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="order-2 lg:order-1"
        >
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="inline-block rounded-full bg-blue-500/20 px-5 py-2 text-sm font-medium text-blue-300"
          >
            Premium Electronics Store
          </motion.span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Latest Technology,
            <br />
            <span className="text-blue-400">Smart Choice</span>
            <br />
            For Everyone
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Discover smartphones, laptops, accessories and modern electronic
            devices with genuine quality, competitive prices and trusted
            service.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/explore">
              <Button
                size="lg"
                className="h-12 w-full rounded-xl bg-blue-600 px-8 text-base hover:bg-blue-700 sm:w-auto"
              >
                <ShoppingCart className="mr-2" size={20} />
                Shop Now
              </Button>
            </Link>

            <Link href="/explore">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-xl border-white/30 bg-white/10 px-8 text-base text-white hover:bg-white/20 sm:w-auto"
              >
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">500+</h3>

              <p className="text-xs text-slate-400 sm:text-sm">Products</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">24/7</h3>

              <p className="text-xs text-slate-400 sm:text-sm">Support</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">100%</h3>

              <p className="text-xs text-slate-400 sm:text-sm">Original</p>
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="order-1 flex justify-center lg:order-2"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[650px]"
          >
            <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

            <Image
              src="/hero-product.png"
              alt="Electronics products"
              width={750}
              height={750}
              priority
              className="relative z-10 h-auto w-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
