"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
interface sortOptionProps {
    name: string;
    value: string;
}
const SortDropDownBox = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(
        params.get("sort-by") || "asc"
    );
    const [isoptionsOpen, setIsOptionsOpen] = useState(false);
    const [sortOption, setSortOption] = useState<sortOptionProps[]>([

        {
            name: "low-to-high",
            value: "asc",
        },
        {
            name: "high-to-low",
            value: "desc",
        },
    ]);

    const handleSelect = (option: sortOptionProps) => {
        let updateSeletedOption = option.value;
        setSelectedOption(updateSeletedOption);
        setIsOptionsOpen(false);

        if (selectedOption.length > 0) {
            params.set("sort-by", updateSeletedOption);
            router.replace(`${path}?${params}`);
        } else {
            params.delete("sort-by");
            router.replace(`${path}?${params}`);
        }
    };

    let body = useRef(document.querySelector("body"));

    console.log(body);

    body.current?.addEventListener("click", (event: any) => {
        let updatedState = isoptionsOpen;
        if (event?.target?.id !== "sort-item" && updatedState === true) {
            setIsOptionsOpen(false);
        }
    })



    return (
        <div className="relative sm:mt-0 mt-3 w-[160px] "

        >
            <div
                className="border border-neutral-300 dark:border-neutral-700 py-2 px-2 rounded-md cursor-pointer  text-sm select-none text-zinc-800 dark:text-white"
                id="sort-button"
                onClick={() => setIsOptionsOpen(!isoptionsOpen)}

            >
                Sort By :{" "}
                <span className="capitalize text-zinc-800 dark:text-white" id="sort-button">
                    {selectedOption === "asc" ? "Ascending" : "Descending"}
                </span>
            </div>
            {isoptionsOpen && (
                <ul className="bg-zinc-400 dark:bg-zinc-700 flex flex-col gap-y-2 p-2 rounded-sm  w-full absolute top-[120%] z-10 left-0">
                    {sortOption.map((option, index) => {
                        return (
                            <li
                                key={index}
                                id="sort-item"
                                onClick={() => handleSelect(option)}
                                className={`text-sm capitalize text-white  ${selectedOption === option.value
                                    ? "bg-[#2563EB] hover:bg-[#2563EB] "
                                    : "hover:bg-[#2563EB]"
                                    } p-2 cursor-pointer rounded-sm`}
                            >
                                {option.name}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default SortDropDownBox;
