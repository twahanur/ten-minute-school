import { ProductData } from './types';

// This function fetches the product data from the API.
export async function fetchProductData(slug: string|'ielts-course', lang: string|'bn'): Promise<ProductData | null> {
  const API_URL = `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}`;
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-TENMS-SOURCE-PLATFORM': 'web',
      },
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data.data ; 
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return null; 
  }
}