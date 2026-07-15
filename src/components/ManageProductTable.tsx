import Link from "next/link";

import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import EditProductModal from "./EditProductModal";
import DeleteProductButton from "./DeleteProductButton";

import { PackageOpen } from "lucide-react";

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

export default function ManageProductTable({
  products,
}: {
  products: Product[];
}) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm sm:rounded-3xl sm:px-8 sm:py-20">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <PackageOpen size={30} />
        </div>

        <h2 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
          No Products Yet
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
          You have not added any products yet. Add your first product to start
          managing your listings.
        </p>

        <Link
          href="/products/add"
          className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Add Your First Product
        </Link>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-5">Product</th>

              <th className="p-5">Category</th>

              <th className="p-5">Price</th>

              <th className="p-5">Stock</th>

              <th className="p-5">Condition</th>

              <th className="p-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="p-5">
                  <div>
                    <p className="font-semibold text-slate-900">
                      {product.title}
                    </p>

                    <p className="text-sm text-slate-500">{product.brand}</p>
                  </div>
                </td>

                <td className="p-5">{product.category}</td>

                <td className="p-5 font-semibold">
                  ৳ {product.price.toLocaleString()}
                </td>

                <td className="p-5">{product.stock}</td>

                <td className="p-5">{product.condition}</td>

                <td className="p-5">
                  <div className="flex justify-center gap-2">
                    {/* View */}

                    <Link href={`/products/${product._id}`}>
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-xl"
                      >
                        <Eye size={17} />
                      </Button>
                    </Link>

                    {/* Edit Placeholder */}

                    <EditProductModal product={product} />

                    {/* Delete Placeholder */}

                    <DeleteProductButton
                      id={product._id}
                      title={product.title}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
