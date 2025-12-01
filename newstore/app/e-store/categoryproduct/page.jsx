// app/category/[slug]/page.js

import { serverGetAPI } from "@/app/utils/serverApi";
import CategoryProductPage from "./CategoryProductPage";
import { notFound } from 'next/navigation';

// Fetch categories with optional parent ID
async function getCategoryProducts(parentId) {
  try {
    const url = parentId 
      ? `inv_category/category_statgetwo/?parent_id=${parentId}`
      : 'inv_category/category_statgetwo/';
    return await serverGetAPI(url);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fetch products with optional category ID
// async function getProducts(categoryId) {
//   try {
//     const url = categoryId
//       ? `products/?category_id=${categoryId}`
//       : 'products/';
//     return await serverGetAPI(url);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   }
// }

export default async function Page({ params, searchParams }) {
  // Get category_id from URL query parameters
  const {categoryId} = await (params);
  
  // Fetch data in parallel
  const [categories, products] = await Promise.all([
    getCategoryProducts(categoryId),[]
    // getProducts(categoryId)
  ]);

  // Handle empty results
  // if (!categories?.length || !products?.length) {
  //   return notFound();
  // }

  return (
    <CategoryProductPage 
      initialCategories={categories} 
      initialProducts={products} 
    />
  );
}