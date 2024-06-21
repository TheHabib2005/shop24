import CryptoJS from "crypto-js";

export const delay = async (time: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

export const fetchProduct = async (query: string) => {
  try {
    let response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    let result = await response.json();
    return result.products;
  } catch (error) {
    return { message: "Failed to fetch products", error: error };
  }
};
