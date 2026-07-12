"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ProductCard from "@/components/ProductCard";

import { Button } from "@/components/ui/button";

interface Product {
  _id: string;

  title: string;

  brand: string;

  category: string;

  price: number;

  stock: number;

  condition: string;

  shortDescription: string;

  image: string;
}

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URI}/products?limit=8`,
        );

        const data = await res.json();

        setProducts(data.products || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section
      className="
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Heading */}
        <motion.div
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
            duration: 0.6,
          }}
          className="
            mb-12
            flex
            flex-col
            items-center
            gap-6
            text-center
            md:flex-row
            md:items-end
            md:justify-between
            md:text-left
          "
        >
          <div
            className="
              max-w-2xl
            "
          >
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-blue-600
              "
            >
              Featured Collection
            </p>

            <h2
              className="
                text-3xl
                font-bold
                text-slate-900
                sm:text-4xl
              "
            >
              Latest Electronics
            </h2>

            <p
              className="
                mt-3
                text-slate-500
              "
            >
              Explore our newest smartphones, laptops and smart devices selected
              for you.
            </p>
          </div>

          <Link
            href="/explore"
            className="
              w-full
              md:w-auto
            "
          >
            <Button
              variant="outline"
              className="
                w-full
                rounded-xl
                sm:w-auto
              "
            >
              View All Products
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {loading
            ? Array.from({
                length: 8,
              }).map((_, index) => (
                <div
                  key={index}
                  className="
                    h-[380px]
                    animate-pulse
                    rounded-3xl
                    bg-slate-100
                  "
                />
              ))
            : products.map((product, index) => (
                <motion.div
                  key={product._id}
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
                    delay: index * 0.08,
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
