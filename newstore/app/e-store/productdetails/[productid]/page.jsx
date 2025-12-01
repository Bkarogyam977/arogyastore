import React from 'react'
import ProductPage from './productpage';


  export async function generateMetadata({params}) {
    const {productid} = await params
    console.log(productid)
    
    const id  = productid
    try {
      const product = await fetch(`https://healdiway.bkarogyam.com/erp-api/inventory_item/${id}/`).then((res) => res.json());
      console.log(product.thumbnail)
      return {
        title: product.name,
        description: product.description,
        openGraph: {
          images: [`https://healdiway.bkarogyam.com/media/${product.thumbnail}`],
        },
      };
    } catch (error) {
      console.error("Error fetching product data:", error);
      return {
        title: "Product not found",
        openGraph: {
          images: [],
        },
      };
    }
  }

export default async function Page({ params }) {
  const { productid } = await params
  return (
    <ProductPage  params={productid} />
  )
}