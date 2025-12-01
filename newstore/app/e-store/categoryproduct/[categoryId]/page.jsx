// app/category/[slug]/page.js

import { serverGetAPI } from "@/app/utils/serverApi";
import CategoryProductPage from "../CategoryProductPage";



// Fetch categories with optional parent ID
async function getCategoryProducts(parentId) {
  try {
    const url = parentId 
      ? `inv_category?parent_id=${parentId}`
      : 'inv_category/category_statgetwo/';
    return await serverGetAPI(url);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function Page({ params, searchParams }) {
  // Get category_id from URL query parameters
  const {categoryId} = await (params);
  console.log(categoryId)
  // Fetch data in parallel
  const categories = await getCategoryProducts(categoryId);
  const products = []
    console.log(categories);
  return (
    <CategoryProductPage 
      initialCategories={categories} 
      initialProducts={products} 
    />
  );
}