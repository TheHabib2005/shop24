"use client"
import CheckoutForm from "@/components/CheckoutForm";
import Steper from "@/components/checkout/Steper";
import { Product } from "@/utils/interfaces";
import { useCartStore } from "@/zustant-store/useCartStore";
import Link from "next/link";
import React from "react";

const CheckoutPage = () => {
    const { cart, totalAmount } = useCartStore()
    return (
        <div className="font-[sans-serif] bg-black  ">
            <div className="w-full   lg:grid  flex flex-col-reverse lg:grid-cols-7  ">
                <div className="col-span-4  p-6 max-w-full ">
                    <h1 className="text-2xl my-5 text-white font-semibold  text-center">
                        Checkout Form
                    </h1>
                    <div>
                        <h1 className="text-xl text-white font-semibold font-sans">
                            Contact
                        </h1>
                        <div className="relative mt-4">
                            <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                                Email or mobile phone number
                            </span>
                            <input
                                type="text"
                                className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                            />
                        </div>
                    </div>
                    <form className="mt-8">
                        <h1 className="text-xl text-white font-semibold font-sans">
                            Shipping address
                        </h1>
                        <div className="relative mt-4 flex flex-col">
                            <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                                Country or Religin
                            </span>
                            <select
                                name="country"
                                className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-zinc-400"
                            >
                                <option value="">bangladesh</option>
                                <option value="">bangladesh</option>{" "}
                                <option value="">bangladesh</option>{" "}
                                <option value="">bangladesh</option>{" "}
                                <option value="">bangladesh</option>
                            </select>
                        </div>
                        <div className="relative mt-4 flex flex-col">
                            <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                                City or state
                            </span>
                            <select
                                name="country"
                                className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-zinc-400 capitalize"
                            >
                                <option value="">dhaka</option>
                                <option value="">noakhali</option>{" "}
                                <option value="">rajshai</option>{" "}
                                <option value="">cummila</option>
                            </select>
                        </div>
                        <div className="relative mt-4">
                            <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                                Enter your username
                            </span>
                            <input
                                type="text"
                                className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                            />
                        </div>
                        <div className="relative mt-4">
                            <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                                Address
                            </span>
                            <input
                                type="text"
                                className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                            />
                        </div>

                        <div className="relative mt-4">
                            <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                                Payment Method
                            </span>

                            <div className="flex items-center gap-x-2 ">
                                <input type="radio" checked={true} name="" id="cod" />
                                <label htmlFor="cod" className="text-white font-semibold text-md cursor-pointer"> Cash on delivery</label>
                            </div>


                        </div>

                        <button className="w-full mt-10 p-4 cursor-pointer rounded-md bg-blue-700 hover:bg-blue-900 text-white font-semibold">
                            Place Order
                        </button>
                    </form>
                </div>
                <div className="col-span-3  border-l border-zinc-700 lg:pt-5 pt-10 px-5 max-w-full">
                    <h1 className="text-2xl my-5 text-white font-semibold  text-center">
                        Your Orders
                    </h1>
                    {
                        cart.length > 0 ? cart.map((prod: any) => {
                            return <Link href={""} key={prod.id} className="flex  mt-6 items-center w-full gap-3">
                                <div className="bg-zinc-800 p-1  relative rounded-md">
                                    <span className="absolute -top-2 -right-2 z-10 text-white bg-zinc-600  flex items-center justify-center w-5 h-5 rounded-full text-sm ">
                                        {prod.quantity}
                                    </span>
                                    <img
                                        src={prod.thumbnail}
                                        className="w-[80px] "
                                        alt=""
                                    />
                                </div>
                                <div className="flex items-center    w-full justify-between ">
                                    <h1 className="text-lg  text-zinc-400 font-semibold">
                                        {prod.title}
                                    </h1>

                                    <span className="text-lg font-semibold text-zinc-400"> ${prod.price}</span>
                                </div>
                            </Link>
                        }) : <div className="text-xl text-white font-bold">please frist select a Product</div>
                    }
                    {cart.length && <div className="flex flex-col gap-y-3 mt-8">
                        <div className="flex items-center justify-between text-zinc-300 font-semibold">

                            <span>Subtotal</span>
                            <span> ${totalAmount}</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-300 font-semibold">

                            <span>Shipping</span>
                            <span> $9.00</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-300 font-bold">

                            <span className="text-xl">Total</span>
                            <span className="text-xl"> ${totalAmount + 9}</span>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
