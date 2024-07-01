
"use client";
import React, { FC, FormEvent, useEffect, useMemo, useRef, useState, useCallback } from "react";
import Input from "./Input";

import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fetchProduct } from "@/utils";
import SearchSuggestionList from "./searchSuggestionList";
import { Product } from "@/utils/interfaces";
import { ClipLoader } from "react-spinners";

interface IProps {
    responsiveMode: boolean;
}

const AutoCompleteBar: FC<IProps> = ({ responsiveMode }) => {
    const [openSearchSuggestionPopup, setOpenSearchSuggestionPopup] = useState(false);
    const [searchResult, setSearchResult] = useState<Product[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isReFetching, setIsReFetching] = useState(true);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams as unknown as string);
    const router = useRouter();
    const path = usePathname();
    const [inputValue, setInputValue] = useState<string>(params.get("q") || "");
    const debounceValue = useDebounce(inputValue);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIsReFetching(true);
        const value = e.target.value.trim();
        setInputValue(value);
        setOpenSearchSuggestionPopup(value.length > 0);
    }, []);

    const handleInputClick = () => {
        if (searchResult.length > 0) {
            setOpenSearchSuggestionPopup(true);
            setIsReFetching(true);
        } else {
            setOpenSearchSuggestionPopup(false);
            setSearchResult([]);
        }
    };

    const handleSelectSuggestion = useCallback((item: string) => {
        setIsReFetching(false);
        setInputValue(item);
        setOpenSearchSuggestionPopup(false);
        params.set("q", item);
        router.replace(`/products/search?${params}`);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    }, [params, router]);

    const { isFetching, isError } = useQuery<Product[], Error>({
        queryKey: ["fetch-suggestions", debounceValue || openSearchSuggestionPopup],
        queryFn: () => fetchProduct(debounceValue),
        enabled: debounceValue.length > 0 && isReFetching,
        onSuccess: (data) => setSearchResult(data),
        onError: () => setSearchResult([]),
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        // Caching
        cacheTime: 5 * 60 * 1000, // Time in milliseconds, data remains in cache (5 minutes)
        staleTime: 0, // Time in milliseconds before data is considered stale
        keepPreviousData: true,
    });

    const handleDelete = () => {
        setInputValue("");
        setSearchResult([]);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        params.set("q", inputValue);
        router.replace(`/products/search?${params}`);
        setOpenSearchSuggestionPopup(false);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                inputRef.current !== event.target
            ) {
                setOpenSearchSuggestionPopup(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const searchSuggestions = useMemo(() => {
        if (openSearchSuggestionPopup && searchResult.length > 0) {
            return (
                <SearchSuggestionList
                    handleSelectSuggestion={handleSelectSuggestion}
                    inputValue={inputValue}
                    containerRef={containerRef}
                    list={searchResult}
                />
            );
        }
        return null;
    }, [openSearchSuggestionPopup, searchResult, inputValue, handleSelectSuggestion]);

    return (
        <div
            className={`${responsiveMode ? "w-full relative md:hidden block mt-5" : "w-1/3 relative md:block hidden"}`}
        >
            <Input
                handleSubmit={handleSubmit}
                loading={isFetching}
                onClick={handleInputClick}
                inputRef={inputRef}
                onChange={handleInputChange}
                value={inputValue}
                aria-label="Search input"
            />
            <div
                ref={containerRef}
                className="w-10 h-10 absolute right-0 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-500 top-[8%]"
            >
                {isFetching && (
                    <div className="flex items-center justify-center w-full h-full bg-zinc-950">
                        <ClipLoader size={20} color="#fff" />
                    </div>
                )}
                {!isFetching && inputValue === "" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                        aria-label="Search icon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                )}
                {!isFetching && inputValue.length > 0 && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-zinc-600 cursor-pointer"
                        onClick={handleDelete}
                        aria-label="Clear input"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </div>
            {searchSuggestions}
        </div>
    );
};

export default AutoCompleteBar;
