"use client";
import { productCategories } from "@/utils/constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoriesList = () => {


    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();
    const router = useRouter();
    const [categoryLists, setCategoryLists] = useState(productCategories);
    const [isListOpen, setIsListOpen] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState(
        params.get("category")?.split(" ") || []
    );
    const handleChange = (
        e: any,
        brand: any,
        index: number
    ) => {
        let updateBrandList = [...categoryLists];
        if (e.target.checked === true) {
            updateBrandList[index].isChecked = true;
        } else {
            updateBrandList[index].isChecked = false;
        }

        setCategoryLists(updateBrandList);
        let me = updateBrandList.filter((b) => {
            if (b.isChecked === true) {
                return b.name;
            }
        });
        let selectBrand = me.map((b) => b.name);
        setSelectedBrand(selectBrand);
        if (selectBrand.length > 0) {
            params.set("category", selectBrand.join(" "));
            router.replace(`${path}?${params}`);
        } else {
            params.delete("category");
            router.replace(`${path}?${params}`);
        }
    };
    const updateState = () => {
        let updateBrandList = [...categoryLists];

        updateBrandList.map((brand, index) => {
            if (selectedBrand.includes(brand.name.toLowerCase())) {
                updateBrandList[index].isChecked = true;
            } else {
                updateBrandList[index].isChecked = false;
            }
        });
        setCategoryLists(updateBrandList);
    };
    useEffect(() => {
        updateState();
    }, []);

    return (
        <>
            <div className="pt-5">
                <div className=" border-t  border-zinc-300 dark:border-zinc-800 px-4 py-3 select-none">
                    <div className="flex items-center justify-between cursor-pointer">
                        <h1 className="text-zinc-800 dark:text-white font-bold">Choose Category</h1>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    {isListOpen && (
                        <ul className="flex flex-col gap-y-3 my-3 px-2">
                            {/* rendering a brands list */}
                            {categoryLists.map((item, index) => {
                                return (
                                    <label
                                        htmlFor={item.name}
                                        key={item.id}
                                        className="flex items-center gap-x-4 cursor-pointer"
                                    >
                                        <input
                                            className="cursor-pointer"
                                            type="checkbox"
                                            checked={item.isChecked}
                                            name={item.name}
                                            id={item.name}
                                            onChange={(e) => handleChange(e, item, index)}
                                        />
                                        <span className="capitalize text-zinc-800 dark:text-white">{item.name}</span>
                                    </label>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default CategoriesList;
