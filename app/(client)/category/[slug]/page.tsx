import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";
import { CATEGORY_PRODUCTS, PRODUCT_CATEGORIES } from "@/sanity/queries/query";
import { sanityFetch } from "@/sanity/lib/live";

export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // ✅ Await both params and searchParams
  const [params, searchParams] = await Promise.all([
    props.params,
    props.searchParams,
  ]);

  const { slug } = params;

  // fetch categories + products server-side
  const { data: categories } = await sanityFetch({
    query: PRODUCT_CATEGORIES,
  });

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
          // searchParams={searchParams || {}}
        />
      </Container>
    </div>
  );
}
