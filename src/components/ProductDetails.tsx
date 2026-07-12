import Image from "next/image";

import { Tag, Boxes, Package, CheckCircle, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface Product {
  _id: string;

  title: string;

  brand: string;

  category: string;

  price: number;

  stock: number;

  condition: string;

  shortDescription: string;

  description: string;

  image: string;
}

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="space-y-8">
      {/* Top Section */}

      <Card
        className="
        overflow-hidden
        rounded-3xl
        border-0
        shadow-lg
        "
      >
        <CardContent
          className="
          grid
          gap-8
          p-8
          md:grid-cols-2
          "
        >
          {/* Image */}

          <div className="relative h-[500px] overflow-hidden rounded-3xl bg-slate-50">
            <Image
              src={product.image || "/placeholder.png"}
              alt={product.title}
              fill
              sizes="100%"
              className="
              object-cover
              "
              unoptimized
            />
          </div>

          {/* Info */}

          <div
            className="
            flex
            flex-col
            justify-center
            "
          >
            <h1
              className="
              text-4xl
              font-bold
              text-slate-900
              "
            >
              {product.title}
            </h1>

            <p
              className="
              mt-3
              text-slate-500
              "
            >
              {product.shortDescription}
            </p>

            <div
              className="
              mt-6
              text-3xl
              font-bold
              text-blue-600
              "
            >
              ৳ {product.price.toLocaleString()}
            </div>

            <div
              className="
              mt-8
              space-y-4
              "
            >
              <InfoRow
                icon={<Tag size={18} />}
                label="Brand"
                value={product.brand}
              />

              <InfoRow
                icon={<Package size={18} />}
                label="Category"
                value={product.category}
              />

              <InfoRow
                icon={<Boxes size={18} />}
                label="Stock"
                value={`${product.stock} Available`}
              />

              <InfoRow
                icon={<CheckCircle size={18} />}
                label="Condition"
                value={product.condition}
              />
            </div>

            <button
              className="
              mt-8
              h-12
              rounded-xl
              bg-blue-600
              font-medium
              text-white
              transition
              hover:bg-blue-700
              "
            >
              Add To Cart
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Description */}

      <Card
        className="
        rounded-3xl
        border-0
        shadow-md
        "
      >
        <CardContent className="p-8">
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Description / Overview
          </h2>

          <p
            className="
            mt-4
            leading-7
            text-slate-600
            "
          >
            {product.description}
          </p>
        </CardContent>
      </Card>

      {/* Specification */}

      <Card
        className="
        rounded-3xl
        border-0
        shadow-md
        "
      >
        <CardContent className="p-8">
          <h2
            className="
            flex
            items-center
            gap-2
            text-2xl
            font-bold
            "
          >
            <Star className="text-yellow-500" />
            Key Information
          </h2>

          <div
            className="
            mt-6
            grid
            gap-4
            md:grid-cols-3
            "
          >
            <Spec title="Brand" value={product.brand} />

            <Spec title="Category" value={product.category} />

            <Spec title="Condition" value={product.condition} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      text-sm
      "
    >
      <span className="text-blue-600">{icon}</span>

      <span className="font-medium">{label}:</span>

      <span className="text-slate-600">{value}</span>
    </div>
  );
}

function Spec({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="
      rounded-2xl
      bg-slate-100
      p-5
      "
    >
      <p className="text-sm text-slate-500">{title}</p>

      <p
        className="
        mt-1
        font-semibold
        "
      >
        {value}
      </p>
    </div>
  );
}
