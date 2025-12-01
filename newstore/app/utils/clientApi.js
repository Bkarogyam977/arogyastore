// utils/clientApi.js
'use client'
import { useQuery } from '@tanstack/react-query';

async function clientGetAPI(endpoint) {
  const apiUrl = 'https://healdiway.bkarogyam.com/erp-api/';
  const token = localStorage.getItem('authToken'); // or your token storage method

  const response = await fetch(`${apiUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return await response.json();
}

export function useAPIQuery(queryKey, endpoint, options = {}) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => clientGetAPI(endpoint),
    ...options,
  });
}