"use client"
import React, { FC } from "react";


interface Iprops {
    list: Product[];
    containerRef: React.RefObject<HTMLDivElement>
    inputValue: string;
    handleSelectSuggestion: () => void
}
const SearchSuggestionList: FC<Iprops> = ({ list, containerRef, inputValue, handleSelectSuggestion }) => {

    const getHighlightedText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi"));

        return (
            <span>
                {parts.map((part, index) => {
                    return part.toLowerCase() === highlight.toLowerCase() ? (
                        <span className="font-bold text-blue-600" key={index}>{part}</span>
                    ) : (
                        <span className=" text-md  text-white ">{part}</span>
                    );
                })}
            </span>
        );
    };

    return (
        <div className="absolute w-full  bg-[#212121] z-10 top-[100%] left-0 mt-2 py-2 rounded-lg" ref={containerRef}>
            {
                list.slice(0, 10).map((item, index) => {
                    return <div className="flex items-center mt-2 gap-2 hover:bg-[#2b2b2b] transition-all duration-100 ease-linear p-2 cursor-pointer" key={item.id} onClick={() => handleSelectSuggestion(item.title)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-zinc-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>

                        {getHighlightedText(item.title, inputValue)}
                    </div>
                })
            }


        </div>
    );
};

export default SearchSuggestionList;
