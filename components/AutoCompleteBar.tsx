"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Input from "./Input";
import SearchSuggestionList from "./searchSuggestionList";
import RecentSearchSuggestionList from "./RecentSearchSuggestionList";
import useDebounce from "@/hooks/useDebounce";
interface Iprops {
    responsiveMode: boolean;
}
const AutoCompleteBar: FC<Iprops> = ({ responsiveMode }) => {

    const [inputValue, setInputValue] = useState("");

    const [openSearchSuggestionPopup, setOpenSearchSuggestionPopup] =
        useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const debounceValue = useDebounce(inputValue);

    const [searchResult, setSearchResult] = useState<Product[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    // handle input change

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setInputValue(value);
        if (value.length > 0) {
            setOpenSearchSuggestionPopup(true);
        } else {
            setOpenSearchSuggestionPopup(false);
            setSearchResult([]);
        }
    };

    // handle input click

    const handleInputClick = () => {
        if (searchResult.length > 0) {
            setOpenSearchSuggestionPopup(true);
        } else {
            setOpenSearchSuggestionPopup(false);
        }
    };

    const fetchUsers = async () => {
        try {
            setIsLoading(true);
            let response = await fetch(
                `https://dummyjson.com/products/search?q=${inputValue}`
            );
            let result = await response.json();
            console.log(result);

            setSearchResult(result.products);
            setIsLoading(false);
            // setSuggestions(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (inputValue.length > 0) {
            fetchUsers();
        }
    }, [debounceValue]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                inputRef.current !== event.target
            ) {
                setOpenSearchSuggestionPopup(false);
                // setRecentSearch(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    console.log(inputRef);

    return (
        <div
            className={`${responsiveMode
                ? "w-full relative md:hidden block mt-5"
                : "w-1/3 relative md:block hidden"
                }  `}
        >
            <Input
                loading={isLoading}
                onClick={handleInputClick}
                inputRef={inputRef}
                onChange={handleInputChange}
                value={inputValue}
            />
            <div
                ref={containerRef}
                className=" w-10 h-10 absolute right-0 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-500  top-[8%] "
            >
                {isLoading && (
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-gray-200"></div>
                )}

                {!isLoading && inputValue === "" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                )}

                {!isLoading && inputValue.length > 0 && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-zinc-600 cursor-pointer"
                        onClick={() => {
                            setInputValue("");
                            setSearchResult([]);
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </div>
            {openSearchSuggestionPopup && searchResult.length > 0 && (
                <SearchSuggestionList inputValue={inputValue} containerRef={containerRef} list={searchResult} />
            )}

            {/* <RecentSearchSuggestionList /> */}
        </div>
    );
};

export default AutoCompleteBar;
