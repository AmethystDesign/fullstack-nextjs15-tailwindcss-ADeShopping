import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { CATEGORY_PRODUCTS, PRODUCT_CATEGORIES } from "@/sanity/queries/query";
import { sanityFetch } from "@/sanity/lib/live";

export default async function CategoryPage({
  params, // Next.js passes a special async proxy
}: {
  params: Record<string, string>; // ✅ just tell TS it’s a string map
  }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // fetch categories + products server-side
  const { data: categories } = await sanityFetch({ query: PRODUCT_CATEGORIES });
  const { data: products } = await sanityFetch({
    query: CATEGORY_PRODUCTS,
    params: { categorySlug: slug },
  });

  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug}
          </span>
        </Title>
        <CategoryProducts
          categories={categories}
          slug={slug}
          products={products}
        />
      </Container>
    </div>
  );
}
