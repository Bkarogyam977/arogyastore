'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCategories, useProducts } from '@/app/hooks/useCategoryProduct'
import { useCustContext } from '../provider'
import AddtoCartproduct from '../addtocartfn'
import LoginModal from '../allproducts/loginmodal'
import { useAppContext } from '@/app/providers'

const CategoryProductPage = ({ initialCategories, initialProducts }) => {
   const { customerdata, userdata, loading, error } = useCustContext();
   const {state, cart} = useAppContext();
  const router = useRouter()
  const [categoryStack, setCategoryStack] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [usingInitialCategory, setUsingInitialCategory] = useState(false)
  const [activeProductCategory, setActiveProductCategory] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Initialize state on first render
  useEffect(() => {
    if (initialCategories?.length > 0 && !activeCategory) {
      if (initialProducts?.length === 0) {
        setUsingInitialCategory(true)
      } else {
        setActiveCategory({ id: null, name: 'All Categories' })
      }
    }
  }, [initialCategories, initialProducts])

  // Fetch categories
  const {
    data: categories = initialCategories,
    isLoading: isCategoriesLoading
  } = useCategories(activeCategory?.id)

  // When categories are loaded, determine which category to use for products
  useEffect(() => {
    if (categories && activeCategory?.id) {
      if (categories.length > 0) {
        setActiveProductCategory({
          id: categories[0].id,
          name: categories[0].name
        })
      } else {
        setActiveProductCategory(activeCategory)
      }
    } else if (usingInitialCategory && initialCategories?.[0]?.id) {
      setActiveProductCategory({
        id: initialCategories[0].id,
        name: initialCategories[0].name
      })
    } else {
      setActiveProductCategory({ id: null, name: 'All Products' })
    }
  }, [categories, activeCategory, usingInitialCategory, initialCategories])

  // Fetch products with pagination
  const {
    data: productsData,
    isLoading: isProductsLoading,
    isFetching: isProductsFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useProducts(activeProductCategory?.id)

  // Flatten all pages of products
  const products = productsData?.pages.flatMap(page => page.results) || initialProducts

  // Handle category selection
  const handleCategorySelect = (category) => {
    setCategoryStack(prev => [...prev, activeCategory])
    setActiveCategory(category)
    setUsingInitialCategory(false)
  }

  // Handle going back in category hierarchy
  const handleGoBack = () => {
    if (categoryStack.length > 0) {
      const previousCategory = categoryStack[categoryStack.length - 1]
      setCategoryStack(prev => prev.slice(0, -1))
      setActiveCategory(previousCategory)
    } else {
      setActiveCategory({ id: null, name: 'All Categories' })
    }
  }

  // Get breadcrumbs for UI
  const breadcrumbs = [
    ...categoryStack.map(item => item?.name || 'All Categories'),
    activeCategory?.name || 'All Categories'
  ]

  // Determine current category name for display
  const currentCategoryName = activeProductCategory?.name || 'All Products'

  // Determine which category is active in UI
  const isCategoryActive = (categoryId) => {
    if (usingInitialCategory) {
      return initialCategories?.[0]?.id === categoryId
    }
    return activeCategory?.id === categoryId
  }

  // Get total product count from first page
  const totalProducts = productsData?.pages[0]?.count || products?.length || 0


 const handleAddToCart = (product,tracking_id, domaintracking) => {
    cart.addToCart({
      id: product.id,
      name: product.name,
      price: product.retail_with_tax,
      image: product.thumbnail,
      tracking_id : tracking_id ?? null,
      domaintracking : domaintracking ?? null
    });
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-50 m-4 md:mt-28">
      {/* Categories Sidebar - 20% width on mobile */}
      <div className={`${isMobile ? 'w-1/5' : 'w-64 xl:w-72'} bg-white shadow-lg h-screen sticky top-0 overflow-y-auto`}>
        <div className="p-2 lg:p-4 border-b flex items-center justify-between">
          {!isMobile && (
            <h2 className="text-xl font-bold text-gray-800">Categories</h2>
          )}
          {categoryStack.length > 0 && (
            <button
              onClick={handleGoBack}
              className="text-blue-600 hover:text-blue-800 text-xs lg:text-sm font-medium"
            >
              {isMobile ? '←' : '← Back'}
            </button>
          )}
        </div>

        <nav className="p-1 lg:p-4 overflow-y-auto h-[calc(100%-64px)]">
          {isCategoriesLoading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`${isMobile ? 'flex flex-col items-center' : 'h-10'} bg-gray-200 rounded-lg animate-pulse`}></div>
              ))}
            </div>
          ) : (
            <>
              {/* "All Categories" option */}
              <button
                onClick={() => handleCategorySelect({ id: null, name: 'All Categories' })}
                className={`w-full ${isMobile ? 'flex flex-col items-center' : 'flex items-center gap-3'} p-2 rounded-lg transition-all ${!activeCategory?.id && !usingInitialCategory
                    ? 'bg-blue-100 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {isMobile ? (
                  <>
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-center">All</span>
                  </>
                ) : (
                  <span>All Categories</span>
                )}
              </button>

              {/* Category list */}
              {(activeCategory?.id ? categories : initialCategories)?.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect({
                    id: category.id,
                    name: category.name,
                    image: category.image
                  })}
                  className={`w-full ${isMobile ? 'flex flex-col items-center' : 'flex items-center gap-3'} p-2 rounded-lg transition-all ${isCategoryActive(category.id)
                      ? 'bg-blue-100 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {isMobile ? (
                    <>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 overflow-hidden bg-gray-100">
                        {category.image ? (
                          <Image
                            height={40}
                            width={40}
                            src={`https://healdiway.bkarogyam.com/media/${category.image}`}
                            alt={category.name}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              e.target.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
                              e.target.style.objectFit = 'contain';
                            }}
                          />
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-center truncate max-w-[60px]">{category.name}</span>
                        {/* <span className="text-[10px] text-gray-500">({category.product_count || 0})</span> */}
                      </div>
                    </>
                  ) : (
                    <>
                      {category.image && (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <Image
                            height={24}
                            width={24}
                            src={`https://healdiway.bkarogyam.com/media/${category.image}`}
                            alt={category.name}
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        </div>
                      )}
                      <span className="truncate">{category.name}</span>
                      {/* <span className="ml-auto bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        {category.product_count || 0}
                      </span> */}
                    </>
                  )}
                </button>
              ))}
            </>
          )}
        </nav>
      </div>

      {/* Products Area - 80% on mobile */}
      <div className={`${isMobile ? 'w-4/5' : 'flex-1'} p-2 lg:p-6 lg:p-8`}>
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs lg:text-sm text-gray-600 mb-2 lg:mb-4">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-1 lg:mx-2">/</span>}
              <span className={index === breadcrumbs.length - 1 ? 'font-medium text-gray-900' : ''}>
                {crumb}
              </span>
            </div>
          ))}
          {activeProductCategory?.id !== activeCategory?.id && activeProductCategory?.name && (
            <>
              <span className="mx-1 lg:mx-2">/</span>
              <span className="font-medium text-gray-900">{activeProductCategory.name}</span>
            </>
          )}
        </div>

        <div className="mb-4 lg:mb-6">
          <h1 className="text-lg lg:text-3xl font-bold text-gray-900">
            {currentCategoryName}
          </h1>
          <p className="text-gray-600 mt-1 lg:mt-2 text-xs lg:text-base">
            {totalProducts} products
            {(isProductsFetching || isFetchingNextPage) && (
              <span className="ml-1 lg:ml-2 text-blue-500">Updating...</span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {isProductsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 animate-pulse"></div>
                <div className="p-2 lg:p-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  <div className="flex justify-between mt-2 lg:mt-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded-full animate-pulse w-12 lg:w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {products?.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden relative">
                  {/* Special Offer Tag */}
                  {product.isSpecialOffer && (
                    <div className="absolute top-1 lg:top-2 right-1 lg:right-2 bg-red-500 text-white text-xs font-bold px-1 lg:px-2 py-0.5 lg:py-1 rounded-full z-10 animate-pulse">
                      SALE!
                    </div>
                  )}

                  <Link href={`/e-store/productdetails/${product.id}`}>
                    <div className="relative aspect-square">
                      <Image
                        src={product.thumbnail ?
                          `https://healdiway.bkarogyam.com/media/${product.thumbnail}` :
                          '/images/e-store/combo2.png'}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        onError={(e) => {
                          e.target.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
                          e.target.style.objectFit = 'contain';
                          e.target.style.backgroundColor = '#f3f4f6';
                        }}
                      />
                      {/* In Stock Tag */}
                      <div className="absolute bottom-1 lg:bottom-2 left-1 lg:left-2 bg-green-500 text-white text-xs font-bold px-1 lg:px-2 py-0.5 lg:py-1 rounded-full z-10">
                        IN STOCK
                      </div>
                    </div>
                    <div className="p-2 lg:p-4">
                      <h3 className="font-medium text-gray-900 truncate text-sm lg:text-base">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-xs lg:text-sm mt-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: product.description }} />
                      <div className="mt-2 lg:mt-3 flex items-center justify-between">
                        <span className="font-bold text-green-900 text-sm lg:text-base">
                          ₹{product.retail_with_tax?.toFixed(2) || '0.00'}
                          {product.originalPrice && (
                            <span className="ml-1 lg:ml-2 text-xs lg:text-sm text-gray-400 line-through">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </span>
                        <button
                          className="text-xs lg:text-sm bg-blue-600 hover:bg-blue-700 text-white px-2 lg:px-3 py-0.5 lg:py-1 rounded-full transition-colors"
                          onClick={() => {
                                              // if (userdata == null) {
                                              //   setIsModalOpen(true); // Open modal for login
                                              // } else {
                                              //   AddtoCartproduct(userdata, [product.id],null, state.domaindata !== null || state.domaindata ? state.domaindata.id : null); // Example product ID
                                              // }

                                              handleAddToCart(product,null, state.domaindata !== null || state.domaindata ? state.domaindata.id : null )
                                              
                                              }
                                            }
                        >
                          Add
                        </button>
                      </div>
                    </div>

                  </Link>
                </div>
              ))}
            </div>

            {hasNextPage && (
              <div className="mt-4 lg:mt-8 flex justify-center">
                <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="px-3 lg:px-4 py-1 lg:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors text-sm lg:text-base"
                >
                  {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}

          </>
        )}
      </div>
      {isModalOpen && <LoginModal isVisible={isModalOpen} setmodal={setIsModalOpen} />}
    </div>
  )
}

export default CategoryProductPage