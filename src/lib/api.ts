import { ProductData } from './types';

// This function fetches the product data from the API.
export async function fetchProductData(slug: string, lang: 'en' | 'bn'): Promise<ProductData | null> {
  const API_URL = `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}`;
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // This header is crucial as mentioned in the requirements for SEO data.
        'X-TENMS-SOURCE-PLATFORM': 'web',
      },
      // Using ISR: Revalidate the data every 1 hour (3600 seconds)
      next: { revalidate: 600 }, 
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data.data ; // The actual data is nested in a `data` property
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return null; // Return null on error so the page can handle it gracefully.
  }
}