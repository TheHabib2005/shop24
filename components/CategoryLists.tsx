"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CategoryLists = () => {


    const [categoryList] = useState([
        {
            id: 1,
            name: "smartPhone",
            path: "smartphone",
            imageUrl: "/product-images/mobile.png",
        },
        {
            id: 2,
            name: "laptop",
            path: "laptop",
            imageUrl: "/product-images/laptop.png",
        },
        {
            id: 3,
            name: "skinCare",
            path: "skincare",
            imageUrl: "/product-images/skincare.png",
        },
        {
            id: 4,
            name: "sunglass",
            path: "sunglass",
            imageUrl: "/product-images/sunglass.png",
        },
        {
            id: 5,
            name: "t-shirt",
            path: "t-shirt",
            imageUrl: "/product-images/t-shirt.png",
        },
        {
            id: 6,
            name: "watch",
            path: "watch",
            imageUrl: "/product-images/watch.png",
        },
    ]);
    return (
        <section className="px-3">
            <h1 className="md:mt-10 mt-5 md:text-left text-center text-xl md:text-2xl capitalize font-semibold ">
                popular categories
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:py-10 py-5">
                {categoryList.map((category) => {
                    return (
                        <Link href={`/products/${category.path}/`} key={category.id}>
                            <div className="w-full h-[200px] py-5 bg-[#252424] rounded-md flex flex-col gap-5 items-center justify-center">
                                <Image
                                    src={category.imageUrl}
                                    width={100}
                                    height={100}
                                    alt="image"
                                />
                                <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                                    {category.name}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default CategoryLists;
