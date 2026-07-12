"use client";

import { Search } from "lucide-react";

interface Props {
  search: string;

  setSearch: (value: string) => void;

  category: string;

  setCategory: (value: string) => void;

  minPrice: string;

  setMinPrice: (value: string) => void;

  maxPrice: string;

  setMaxPrice: (value: string) => void;

  sort: string;

  setSort: (value: string) => void;

  resetFilters: () => void;
}

export default function ProductFilters({
  search,
  setSearch,

  category,
  setCategory,

  minPrice,
  setMinPrice,

  maxPrice,
  setMaxPrice,

  sort,
  setSort,

  resetFilters,
}: Props) {
  return (
    <div
      className="
      mb-10
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        grid
        gap-4
        md:grid-cols-2
        lg:grid-cols-6
        "
      >
        {/* Search */}

        <div className="relative">
          <Search
            className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-slate-400
            "
            size={18}
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product..."
            className="
            h-12
            w-full
            rounded-xl
            border
            pl-10
            outline-none
            focus:border-blue-500
            "
          />
        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
          h-12
          rounded-xl
          border
          px-4
          "
        >
          <option value="">All Categories</option>

          <option>Smartphone</option>

          <option>Laptop</option>

          <option>Tablet</option>

          <option>Desktop</option>

          <option>Monitor</option>

          <option>Headphone</option>

          <option>Smart Watch</option>

          <option>Home Appliance</option>

          <option>Accessories</option>
        </select>

        {/* Min Price */}

        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min Price"
          className="
          h-12
          rounded-xl
          border
          px-4
          "
        />

        {/* Max Price */}

        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price"
          className="
          h-12
          rounded-xl
          border
          px-4
          "
        />

        {/* Sorting */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
          h-12
          rounded-xl
          border
          px-4
          "
        >
          <option value="newest">Newest First</option>

          <option value="price-low">Price Low - High</option>

          <option value="price-high">Price High - Low</option>
        </select>

        {/* Reset Button */}

        <button
          type="button"
          onClick={resetFilters}
          className="
          h-12
          rounded-xl
          border
          border-slate-200
          bg-white
          px-5
          text-sm
          font-medium
          text-slate-700
          transition
          hover:bg-slate-100
          "
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
