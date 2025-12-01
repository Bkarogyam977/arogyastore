'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'

export function ProvidersQuery(props) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 10 * 60 * 1000, // 10 minutes
            refetchOnWindowFocus: false, // Don't refetch when window regains focus
            refetchOnReconnect: false, // Don't refetch when regaining network connection
            refetchOnMount: false, // Only refetch if data is stale
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
  )
}
