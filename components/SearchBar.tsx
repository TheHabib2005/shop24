"use client";
import useDebounce from "@/hooks/useDebounce";
import { useRecentSearch } from "@/zustant-store/useRecentSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";


const SearchBar = () => {
    const { searchItems, addRecentSearch, deleteRecentSearch } =
        useRecentSearch();

    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [reFetch, setReFetch] = useState(true);
    const [index, setIndex] = useState(-1);
    const [users, setUsers] = useState<any[]>([]);
    const debounceValue = useDebounce(inputValue);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [showSuggestion, setSuggestions] = useState(false);
    const [showRecentSearch, setRecentSearch] = useState(false);

    const handleInput = (e: any) => {
        setReFetch(true);
        setInputValue(e.target.value);
        if (e.target.value === "") {
            setUsers([]);
            setSuggestions(false);

        } else {
            setRecentSearch(false);
            setSuggestions(true);
        }
    };
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const path = usePathname();

    const onSelectItem = (item: string) => {
        console.log(item);
        setInputValue(item);
        setSuggestions(false);
        setReFetch(false);
        // setRecentSearchData(prev => [...prev, item])
        addRecentSearch({
            createdAt: new Date().getTime(),
            value: item,
        });
        params.set("q", item);
        router.replace(`${path}?${params}`);
    };

    searchItems.sort((a: any, b: any) => b.createdAt - a.createdAt);

    const fetchUsers = async () => {
        try {
            setIndex(-1);
            setIsLoading(true);
            let response = await fetch(
                `https://jsonplaceholder.typicode.com/users?q=${inputValue}`
            );
            let result = await response.json();
            console.log(result);

            setUsers(result);
            setIsLoading(false);
            // setSuggestions(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (inputValue.length > 0 && reFetch) {
            fetchUsers();
        }
    }, [debounceValue]);

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                inputRef.current !== event.target
            ) {
                setSuggestions(false);
                setRecentSearch(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <>
            <div className="flex items-center relative">
                <input
                    type="text"
                    ref={inputRef}
                    onClick={() => {
                        inputValue.length > 0
                            ? (setSuggestions(true), setReFetch(true), fetchUsers())
                            : setRecentSearch(true);
                    }}
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
                    className="p-3 outline-none rounded-md  w-full"
                    value={inputValue}
                    onChange={handleInput}
                />
                {isLoading ? (
                    <ClipLoader className="absolute top-2 right-6 z-10" color="#000" />
                ) : (
                    ""
                )}
            </div>
            {users.length > 0 && showSuggestion && (
                <div
                    className="mt-5 h-[600px] overflow-y-scroll bg-zinc-800 p-3"
                    ref={containerRef}
                >
                    {users.filter(doc =>
                        doc.username.toLowerCase().includes(inputValue.toLowerCase()) ||
                        doc.email.toLowerCase().includes(inputValue.toLowerCase() ||
                            doc.name.toLowerCase().includes(inputValue.toLowerCase())
                        )
                    ).map((user, i) => {
                        return (
                            <div
                                key={user.id}
                                className={`
                                  p-3  cursor-pointer bg-zinc-900 rounded-md mb-2 ${index == i ? "text-blue-600" : "text-white"
                                    }`}
                                onClick={() => onSelectItem(user.username)}
                            >
                                <h3 className="text-lg font-semibold">{user.username}</h3>

                            </div>
                        );
                    })}
                </div>
            )}
            {users.length === 0 && showSuggestion && (
                <div
                    className="mt-5 h-[600px] overflow-y-scroll bg-zinc-800 p-3"
                    ref={containerRef}
                >
                    <span className="text-white">no user found</span>
                </div>
            )}


        </>
    );
};

export default SearchBar;
