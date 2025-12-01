import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProductsSearch = ({ isNavbarSearch, onClose, showResultsInContainer }) => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isDefaultProducts, setIsDefaultProducts] = useState(true);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const BASE_URL = 'https://healdiway.bkarogyam.com/erp-api/inventory_item/';
  const PRACTICE_ID = 5;

  // Enhanced search parameters
  const getSearchParams = (query, page = 1) => {
    const params = {
      practice: PRACTICE_ID,
      maintain_inventory: true,
      page: page,
      page_size: 4,
      sort: 'asc',
      on: 'total_quantity'
    };

    if (query.startsWith('"') && query.endsWith('"')) {
      params.item_name = query.slice(1, -1);
    } else {
      params.search = query;
      params.item_name = query;
    }

    return params;
  };

  // Fetch default products
  const fetchDefaultProducts = async (page = 1) => {
    setIsLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          practice: PRACTICE_ID,
          maintain_inventory: true,
          page: page,
          page_size: 8,
          sort: 'desc',
          on: 'total_quantity'
        }
      });

      const defaultProducts = response.data.results.map(product => ({
        id: product.id,
        item_name: product.name,
        price: product.retail_with_tax,
        description: product.short_description || product.description,
        image: product.thumbnail,
        in_stock: product.total_quantity > 0
      }));

      if (page === 1) {
        setProducts(defaultProducts);
      } else {
        setProducts(prev => [...prev, ...defaultProducts]);
      }

      setHasMore(response.data.next !== null);
      setCurrentPage(page);
      setIsDefaultProducts(true);
    } catch (error) {
      console.error('Error fetching default products:', error);
    } finally {
      setIsLoading(false);
      setIsInitialLoad(false);
    }
  };

  // Fetch products with pagination
  const fetchProducts = async (query, page = 1) => {
    if (!query.trim()) {
      fetchDefaultProducts();
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(BASE_URL, {
        params: getSearchParams(query, page)
      });

      const newProducts = response.data.results.map(product => ({
        id: product.id,
        item_name: product.name,
        price: product.retail_with_tax,
        description: product.short_description || product.description,
        image: product.thumbnail,
        in_stock: product.total_quantity > 0
      }));

      if (page === 1) {
        setProducts(newProducts);
      } else {
        setProducts(prev => [...prev, ...newProducts]);
      }

      setHasMore(response.data.next !== null);
      setCurrentPage(page);
      setIsDefaultProducts(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load more products
  const loadMore = () => {
    if (!isLoading && hasMore) {
      if (isDefaultProducts) {
        fetchDefaultProducts(currentPage + 1);
      } else {
        fetchProducts(searchText, currentPage + 1);
      }
    }
  };

  // Search handler with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim() !== '') {
        fetchProducts(searchText, 1);
      } else if (!isInitialLoad) {
        fetchDefaultProducts(1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Auto-focus input and fetch default products on mount
  useEffect(() => {
    fetchDefaultProducts(1);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      fetchProducts(searchText, 1);
    } else {
      fetchDefaultProducts(1);
    }
  };

  return (
    <div ref={searchRef} className="w-full">
      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit}>
        <div className="relative w-full p-4 bg-gradient-to-r from-blue-50 to-white">
          <div className="relative max-w-4xl mx-auto">
            <input
              ref={inputRef}
              type="text"
              placeholder='Search your health solution here...'
              className="w-full py-2 px-4 pl-12 rounded-xl border-0 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="absolute left-3 top-2 text-gray-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchText && (
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setSearchText('');
                  fetchDefaultProducts(1);
                }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Search Results */}
      {showResultsInContainer && (
        <div className="bg-white p-4">
          <div className="max-w-6xl mx-auto">
            {isLoading && products.length === 0 ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : products.length > 0 ? (
              <>
                <h2 className="text-xl font-bold mb-6">
                  {searchText 
                    ? (searchText.startsWith('"') && searchText.endsWith('"')
                      ? `Exact matches for ${searchText}`
                      : `Results for "${searchText}"`)
                    : 'Featured Products'}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} onClose={onClose} />
                  ))}
                </div>
                {hasMore && (
                  <div className="text-center mt-6">
                    <button
                      onClick={loadMore}
                      disabled={isLoading}
                      className="px-20 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isLoading ? 'Loading...' : 'See More'}
                    </button>
                  </div>
                )}
              </>
            ) : searchText && !isLoading ? (
              <div className="text-center py-8">
                <div className="inline-block p-4 bg-blue-50 rounded-lg">
                  <svg className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium">No results found</h3>
                  <p className="text-gray-500">
                    Try different keywords or use &quot;quotes&quot; for exact match
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Product Card Component with Link
const ProductCard = ({ product, onClose }) => (
  <Link href={`/e-store/productdetails/${product.id}`} passHref>
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClose}
    >
      <div className="h-40 bg-gray-50 flex items-center justify-center relative">
        {product.image ? (
          <Image
            fill
            src={`https://healdiway.bkarogyam.com/media/${product.image}`}
            alt={product.item_name}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="text-gray-400">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold truncate">{product.item_name}</h3>
        <p className="text-blue-600 font-bold">₹{product.price}</p>
        <p
          className="text-gray-500 text-sm line-clamp-2"
          dangerouslySetInnerHTML={{ __html: product.description || 'No description' }}
        />
        <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${product.in_stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {product.in_stock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  </Link>
);

export default ProductsSearch;