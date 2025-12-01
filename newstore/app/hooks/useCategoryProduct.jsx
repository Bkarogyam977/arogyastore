'use client'

import { useQuery, useInfiniteQuery } from '@tanstack/react-query'

const apiurl = 'https://healdiway.bkarogyam.com/erp-api/'

async function fetchCategories(parent_id) {
  const url = parent_id 
    ? `${apiurl}inv_category/?parent_id=${parent_id}`
    : `${apiurl}inv_category/category_statgetwo/`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch categories')
  const contentType = res.headers.get('content-type')
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Invalid response format')
  }
  return res.json()
}

async function fetchProducts({ categoryId, page = 1 }) {
  const url = categoryId 
    ? `${apiurl}inventory_item/?category_id=${categoryId}&page=${page}`
    : `${apiurl}inventory_item/?practice=5&page=${page}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch products')
  const contentType = res.headers.get('content-type')
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Invalid response format')
  }
  return res.json()
}

export function useCategories(parent_id) {
  return useQuery({
    queryKey: ['categories', parent_id],
    queryFn: () => fetchCategories(parent_id),
    staleTime: 60 * 1000
  })
}

export function useProducts(categoryId) {
  return useInfiniteQuery({
    queryKey: ['products', categoryId],
    queryFn: ({ pageParam = 1 }) => fetchProducts({ 
      categoryId, 
      page: pageParam 
    }),
    getNextPageParam: (lastPage) => lastPage.next || undefined,
    initialPageParam: 1,
    staleTime: 60 * 1000
  })
}