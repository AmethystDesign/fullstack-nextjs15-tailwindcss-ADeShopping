import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";
import { CATEGORY_PRODUCTS, PRODUCT_CATEGORIES } from "@/sanity/queries/query";
import { sanityFetch } from "@/sanity/lib/live";

type CategoryPageProps = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const slug = params.slug;

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
            {slug && slug}
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
};

