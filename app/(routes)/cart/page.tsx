"use client"
import CartItemWrapper from "@/components/carts-components/CartItemWrapper";
import { useCartStore } from "@/zustant-store/useCartStore";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const CartPage = () => {
    const { cart, totalAmount } = useCartStore()

    return (

        <section className="w-full px-4 ">

            {
                cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-xl font-bold text-zinc-700 dark:text-blue-700">
                            Your cart is empty
                        </h1>

                        <Link href={"/shop"} className="text-zinc-700 dark:text-blue-700 font-bold text-xl">
                            Continue Shopping
                        </Link>

                    </div>
                ) : (
                    <div className="grid grid-cols-6 w-full  gap-4 ">
                        <div className="md:col-span-4 col-span-6  bg-[#000000] rounded-md p-4  h-min">
                            {/* wrapper  */}

                            <div className="grid grid-cols-12">
                                <div className="col-span-8 text-center pb-3">
                                    <span className="font-semibold text-zinc-400">PRODUCT</span>
                                </div>
                                <div className="col-span-2  text-center">
                                    <span className="font-semibold text-zinc-400">PRICE</span>
                                </div>
                                <div className="col-span-2  text-center">
                                    <span className="font-semibold text-zinc-400">QUANTITY</span>
                                </div>

                            </div>
                            <CartItemWrapper />

                        </div>
                        <div className="md:col-span-2 col-span-6 h-min bg-black rounded-md p-6">
                            <div>
                                <h1 className="text-xl text-zinc-400">Cart Totals</h1>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-neutral-700">
                                <span className="text-lg text-zinc-400">Subtotal </span>
                                <span className="text-lg text-blue-600 ">{totalAmount}$</span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-neutral-700">
                                <span className="text-lg text-zinc-400">Shipping Cost </span>
                                <span className="text-lg text-blue-600 ">10 $</span>
                            </div>

                            <div className="flex items-center justify-between py-3 ">
                                <span className="text-lg text-zinc-400">Total

                                </span>
                                <span className="text-lg text-blue-600">{Math.round(totalAmount + 10)}$</span>
                            </div>
                            <button className="py-2 text-center w-full rounded-md bg-blue-600 cursor-pointer mt-3">
                                Proceed To Checkout</button>
                        </div>
                    </div>
                )
            }
        </section>

    );
};

export default CartPage;
