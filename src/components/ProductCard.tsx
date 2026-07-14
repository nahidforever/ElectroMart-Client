import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Boxes, PackageCheck, Tag } from "lucide-react";

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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productUrl = `/products/${product._id}`;

  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  const formattedPrice = new Intl.NumberFormat("en-BD").format(product.price);

  const stockText = isOutOfStock
    ? "Out of Stock"
    : isLowStock
      ? `Only ${product.stock} Left`
      : `${product.stock} Available`;

  const conditionStyle =
    product.condition.toLowerCase() === "new"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-amber-100 text-amber-700";

  const stockStyle = isOutOfStock
    ? "text-red-600"
    : isLowStock
      ? "text-amber-600"
      : "text-emerald-600";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70">
      {/* Product Image */}

      <Link
        href={productUrl}
        aria-label={`View details of ${product.title}`}
        className="relative block aspect-[4/3] overflow-hidden bg-slate-100"
      >
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.title}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            (max-width: 1280px) 33vw,
            25vw
          "
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

        {/* Category Badge */}

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md">
          <Tag size={13} className="text-blue-600" />

          {product.category}
        </span>

        {/* Condition Badge */}

        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-md ${conditionStyle}`}
        >
          {product.condition}
        </span>
      </Link>

      {/* Card Content */}

      <div className="flex flex-1 flex-col p-5">
        {/* Brand */}

        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            {product.brand}
          </p>

          <div className="flex items-center gap-1.5">
            <span
              className={`h-2 w-2 rounded-full ${
                isOutOfStock
                  ? "bg-red-500"
                  : isLowStock
                    ? "bg-amber-500"
                    : "bg-emerald-500"
              }`}
            />

            <span className={`text-xs font-semibold ${stockStyle}`}>
              {isOutOfStock ? "Unavailable" : "In Stock"}
            </span>
          </div>
        </div>

        {/* Product Title */}

        <Link href={productUrl}>
          <h2 className="mt-3 line-clamp-2 min-h-14 text-xl font-bold leading-7 text-slate-900 transition duration-200 group-hover:text-blue-600">
            {product.title}
          </h2>
        </Link>

        {/* Description */}

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-relaxed text-slate-500">
          {product.shortDescription ||
            "View complete product details, condition and availability."}
        </p>

        {/* Product Information */}

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3.5">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <PackageCheck size={16} />
              </span>

              <div className="min-w-0">
                <p className="text-xs text-slate-400">Condition</p>

                <p className="truncate text-sm font-semibold text-slate-800">
                  {product.condition}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3.5">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  isOutOfStock
                    ? "bg-red-100 text-red-600"
                    : isLowStock
                      ? "bg-amber-100 text-amber-600"
                      : "bg-emerald-100 text-emerald-600"
                }`}
              >
                <Boxes size={16} />
              </span>

              <div className="min-w-0">
                <p className="text-xs text-slate-400">Availability</p>

                <p
                  className={`truncate text-sm font-semibold ${stockStyle}`}
                  title={stockText}
                >
                  {stockText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Price */}

        <div className="mt-auto pt-5">
          <div className="border-t border-slate-100 pt-5">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Product Price
                </p>

                <p className="mt-1 text-2xl font-extrabold tracking-tight text-blue-600">
                  ৳{formattedPrice}
                </p>
              </div>

              {isLowStock && (
                <span className="rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-semibold text-amber-700">
                  Limited Stock
                </span>
              )}
            </div>

            {/* Full Width Button */}

            <Link
              href={productUrl}
              aria-label={`View details of ${product.title}`}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              View Product Details
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
