import Link from "next/link";

import { Package, Tag, Boxes, Eye } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      className="
      overflow-hidden
      rounded-3xl
      border-0
      p-0
      shadow-md
      transition
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      {/* Product Image */}

      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-5">
        <h2
          className="
          line-clamp-1
          text-lg
          font-bold
          text-slate-900
          "
        >
          {product.title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">{product.brand}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Tag size={16} className="text-blue-600" />

            <span>{product.category}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Boxes size={16} className="text-green-600" />

            <span>Stock: {product.stock}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Package size={16} className="text-purple-600" />

            <span>{product.condition}</span>
          </div>
        </div>

        <div className="mt-5">
          <p
            className="
          text-2xl
          font-bold
          text-blue-600
          "
          >
            ৳ {product.price.toLocaleString()}
          </p>
        </div>

        <Link href={`/products/${product._id}`}>
          <Button
            className="
            mt-5
            h-11
            w-full
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            "
          >
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
