import ManageProductTable from "@/components/ManageProductTable";

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/manage/products`,
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
        <div className="mb-10">
          <h1
            className="
            text-4xl
            font-bold
            text-slate-900
            "
          >
            Manage Products
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            "
          >
            Manage your available products
          </p>
        </div>

        <ManageProductTable products={products} />
      </div>
    </main>
  );
}
