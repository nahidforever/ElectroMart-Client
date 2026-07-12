"use client";

import { useCallback, useEffect, useState } from "react";

import ProductSkeleton from "@/components/ProductSkeleton";
import ProductFilters from "@/components/ProductFilters";
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

export default function ExplorePage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  // Filters

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  const [sort, setSort] = useState("newest");

  // Pagination

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const resetFilters = () => {
    setSearch("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSort("newest");
    setPage(1);
  };

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (search) {
        params.append("search", search);
      }

      if (category) {
        params.append("category", category);
      }

      if (minPrice) {
        params.append("minPrice", minPrice);
      }

      if (maxPrice) {
        params.append("maxPrice", maxPrice);
      }

      params.append("sort", sort);

      params.append("page", String(page));

      params.append("limit", "8");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/products?${params.toString()}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();

      setProducts(data.products || []);

      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.log(error);

      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [search, category, minPrice, maxPrice, sort, page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => clearTimeout(timer);
  }, [fetchProducts]);

  return (
    <main
      className="
      min-h-screen
      bg-slate-50
      py-12
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

        <div className="mb-10">
          <h1
            className="
            text-4xl
            font-bold
            text-slate-900
            "
          >
            Explore Products
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            "
          >
            Find your favorite electronics from ElectroMart
          </p>
        </div>

        {/* Filters */}

        <ProductFilters
          search={search}
          setSearch={(value) => {
            setPage(1);
            setSearch(value);
          }}
          category={category}
          setCategory={(value) => {
            setPage(1);
            setCategory(value);
          }}
          minPrice={minPrice}
          setMinPrice={(value) => {
            setPage(1);
            setMinPrice(value);
          }}
          maxPrice={maxPrice}
          setMaxPrice={(value) => {
            setPage(1);
            setMaxPrice(value);
          }}
          sort={sort}
          setSort={(value) => {
            setPage(1);
            setSort(value);
          }}
          
          resetFilters={resetFilters}
        />

        {/* Product Grid */}

        <div
          className="
          grid
          gap-7
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          "
        >
          {loading ? (
            Array.from({
              length: 8,
            }).map((_, index) => <ProductSkeleton key={index} />)
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div
              className="
                col-span-full
                py-20
                text-center
                text-slate-500
                "
            >
              No products found
            </div>
          )}
        </div>

        {/* Pagination */}

        {totalPages > 1 && (
          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              "
          >
            <Button
              disabled={page === 1}
              variant="outline"
              onClick={() => setPage(page - 1)}
              className="rounded-xl"
            >
              Previous
            </Button>

            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <Button
                key={index}
                onClick={() => setPage(index + 1)}
                variant={page === index + 1 ? "default" : "outline"}
                className="rounded-xl"
              >
                {index + 1}
              </Button>
            ))}

            <Button
              disabled={page === totalPages}
              variant="outline"
              onClick={() => setPage(page + 1)}
              className="rounded-xl"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
