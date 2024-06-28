"use client";
import { calculateDiscountedPrice, encryptObject } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import Images from "./Image";
interface IProps {
    product: any;
}
const ProductCard: FC<IProps> = ({ product }) => {
    const router = useRouter();

    return (
        <div className="relative m-1 flex  flex-col overflow-hidden rounded-lg  min-w-full bg-zinc-200 dark:bg-zinc-900/50 shadow-md mx-auto cursor-pointer col-span-1" onClick={() => {
            let text = encryptObject(product);
            localStorage.setItem("current-product", text);
            window.open(`/item?id=${product.id}`)
        }}>
            <div
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl cursor-pointer"
            >
                {/* <Images src={product.thumbnail} /> */}
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium  text-white">
                    {Math.round(product.discountPercentage)}% OFF
                </span>
            </div>
            <div className="mt-4 px-5 pb-2">
                <a href="#">
                    <h5 className="text-xl tracking-tight  text-zinc-800 dark:text-white">
                        {product.title.substring(0, 30)}
                        {product.title.length > 30 && <span className="ml-5  text-zinc-800 dark:text-white">{"..."}</span>}
                    </h5>
                </a>
                <div className="mt-2 mb-5">
                    <p>
                        <span className="text-3xl font-bold  text-zinc-800 dark:text-white ">
                            ${calculateDiscountedPrice(product.price, product.discountPercentage).toFixed(2)}

                        </span>
                        <span className="text-sm  text-zinc-800 dark:text-white  line-through">
                            ${product.price}
                        </span>
                    </p>
                    <div className="flex items-center">
                        {
                            Array(5).fill("").map((_, i) => {
                                if (i < Math.round(product.rating)) {
                                    return <IoMdStar color="yellow" fontSize={20} key={i} />
                                } else {
                                    return <IoMdStarHalf color="yellow" fontSize={20} key={i} />
                                }
                            })
                        }
                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-black">
                            {product.rating}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProductCard);
