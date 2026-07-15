import ManageProductTable from "@/components/ManageProductTable";
import ProductOverviewChart from "@/components/ProductOverviewChart";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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

async function getProducts() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/manage/products`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data.products || [];
}

export default async function ManageProductsPage() {
  const products: Product[] = await getProducts();

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
        <div className="mb-10 rounded-2xl px-5 py-8 text-center sm:px-8 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Product Management
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Manage Your Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            View, update and remove your available product listings from one
            place.
          </p>
        </div>

        {products.length > 0 && <ProductOverviewChart products={products} />}

        <ManageProductTable products={products} />
      </div>
    </main>
  );
}
