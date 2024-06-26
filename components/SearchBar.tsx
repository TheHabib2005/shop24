"use client";
import useDebounce from "@/hooks/useDebounce";
import { useRecentSearch } from "@/zustant-store/useRecentSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";


const SearchBar = () => {
    const { searchItems, addRecentSearch, deleteRecentSearch } =
        useRecentSearch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();

    const [inputValue, setInputValue] = useState(params.get("q") || "");
    const [isLoading, setIsLoading] = useState(false);
    const [reFetch, setReFetch] = useState(true);
    const [index, setIndex] = useState(-1);
    const [users, setUsers] = useState<any[]>([]);
    const debounceValue = useDebounce(inputValue);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInput = (e: any) => {
        setInputValue(e.target.value);
    };





    return (
        <>
            <form className="flex items-center relative"
                onSubmit={(e) => {
                    e.preventDefault();
                    params.set("q", inputValue);
                    router.replace(`/search?${params}`)
                }}
            >
                <input
                    type="text"
                    ref={inputRef}

                    onKeyDown={(e) => {
                        console.log(users.length);

                        if (e.key === "ArrowDown" && index < users.length - 1) {
                            setIndex((prev) => prev + 1);

                            containerRef.current?.scrollBy({ top: 50, behavior: "smooth" });
                        }
                        if (e.key === "ArrowUp" && index > 0) {
                            setIndex((prev) => prev - 1);

                            containerRef.current?.scrollBy({ top: -50, behavior: "smooth" });
                        }
                    }}
                    placeholder="search user..."
                    className="p-3 outline-none text-white  w-full bg-zinc-900 rounded-md"
                    value={inputValue}
                    onChange={handleInput}
                />

            </form>



        </>
    );
};

export default SearchBar;
