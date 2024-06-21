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

//
// Encrypt function
export const encryptObject = (object, key) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(object),
    key
  ).toString();
  return ciphertext;
};

// Decrypt function
export const decryptObject = (ciphertext, key) => {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.error("Error decrypting:", error);
    return null; // Or handle the error as needed
  }
};
