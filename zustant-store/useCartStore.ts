import { updateCartdb } from "@/utils";
import toast from "react-hot-toast";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
interface ProductType {
  id: number;
  title: string;
  price: number;
  stringPrice: string;
  productImage: string;
  quantity: number;
  category: string;
}
interface CartItemType {
  cart: ProductType[];
  totalAmount: number;
  ProductaddToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}
export const useCartStore = create<CartItemType>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        totalAmount: 0,
        ProductaddToCart: (product) => {
          const existingProduct = [...get().cart].find(
            (item: ProductType) => item?.id === product.id
          );
          let updatedCart: any = [...get().cart];
          if (existingProduct) {
            updatedCart = updatedCart.map((item: ProductType) => {
              if (item.id === product.id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              } else {
                return {
                  ...item,
                };
              }
            });
            toast.success("Cart Updated successfully");
          } else {
            updatedCart.push(product);
            toast.success("Product Added successfully");
          }
          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc: any, item: any) => acc + item.quantity * item.price,
              0
            ),
          });

          updateCartdb(updatedCart);
        },
        removeFromCart: (id) => {
          let updatedCart = [...get().cart].filter((c) => c.id !== id);
          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
          toast.success("Product Remove successfully");
        },
        incrementQuantity: (id) => {
          let updatedCart = [...get().cart];
          updatedCart = updatedCart.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            } else {
              return product;
            }
          });

          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
          toast.success("Cart Updated successfully");
        },
        decrementQuantity: (id) => {
          let updatedCart: any[] = [...get().cart];
          updatedCart = updatedCart.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                quantity: product.quantity > 1 && product.quantity - 1,
              };
            } else {
              return product;
            }
            toast.success("Cart Updated successfully");
          });

          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
        },
      }),
      {
        name: "cart",
      }
    )
  )
);
