import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

async function getProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/products/${id}`,
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  return data.product;
}

async function getRelatedProducts(category: string, id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/products/related/${category}/${id}`,
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data.products || [];
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return <div className="py-20 text-center">Product Not Found</div>;
  }

  const relatedProducts = await getRelatedProducts(product.category, id);

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
        space-y-12
        "
      >
        {/* Main Product */}

        <ProductDetails product={product} />

        {/* Related Products */}

        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  );
}
