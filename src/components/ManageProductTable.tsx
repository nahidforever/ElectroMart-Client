import Link from "next/link";

import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import EditProductModal from "./EditProductModal";
import DeleteProductButton from "./DeleteProductButton";

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
