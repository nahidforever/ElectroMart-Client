import ProductCard from "./ProductCard";

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

export default function RelatedProducts({ products }: { products: Product[] }) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2
        className="
      text-3xl
      font-bold
      text-slate-900
      "
      >
        Related Products
      </h2>

      <div
        className="
      grid
      gap-7
      sm:grid-cols-2
      lg:grid-cols-4
      "
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
