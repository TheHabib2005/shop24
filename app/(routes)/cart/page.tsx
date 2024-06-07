import Link from "next/link";
import React from "react";

const Cart = () => {
    return (
        <section className="p-5">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                    <Link
                        href={""}
                        className="text-zinc-700 dark:text-blue-700 font-bold text-xl"
                    >
                        SHOPPING CART
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8 text-zinc-700 dark:text-gray-600 text-xl"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href={""}
                        className="text-zinc-700 dark:text-white/50 font-bold text-xl"
                    >
                        CHECKOUT
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="dark:text-gray-600 text-xl"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-zinc-700 dark:text-white/50 font-bold text-xl">
                        ORDER COMPLETE
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8 text-white/50 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Cart;
