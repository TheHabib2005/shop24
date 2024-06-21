import CryptoJS from "crypto-js";

export const delay = async (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const fetchProduct = async (searchQuery: string) => {
  let response = await fetch(
    `https://dummyjson.com/products/search?q=${searchQuery}&`
  );
  let result = await response.json();
  return result.products;
};

const secretKey = "YourSecretKey123"; // Replace with your actual secret key

export function encryptObject(obj: Object) {
  const jsonString = JSON.stringify(obj);
  return CryptoJS.AES.encrypt(jsonString, secretKey).toString();
}

export function decryptObject(encryptedString: string) {
  const bytes = CryptoJS.AES.decrypt(encryptedString, secretKey);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
}
