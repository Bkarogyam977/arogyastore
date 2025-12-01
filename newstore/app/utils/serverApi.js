// utils/serverApi.js
export async function serverGetAPI(endpoint) {
    const apiUrl = 'https://healdiway.bkarogyam.com/erp-api/';
    const response = await fetch(`${apiUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any server-side authentication headers here
        // (you might need to use a server-side token)
      },
    });
  
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
  
    return await response.json();
  }