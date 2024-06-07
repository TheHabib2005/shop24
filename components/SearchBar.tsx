"use client"
import useDebounce from '@/hooks/useDebounce';
import { useRecentSearch } from '@/zustant-store/useRecentSearch';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { Reference } from 'yup';

const SearchBar = () => {


    const { searchItems, addRecentSearch } = useRecentSearch()

    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [reFetch, setReFetch] = useState(true)
    const [index, setIndex] = useState(-1)
    const [users, setUsers] = useState<any[]>([]);
    const debounceValue = useDebounce(inputValue)
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [showSuggestion, setSuggestions] = useState(false)
    const [recentSearchData, setRecentSearchData] = useState<any>([])
    const handleInput = (e: any) => {

        setInputValue(e.target.value);
    };
    const router = useRouter()

    useEffect(() => {
        if (inputValue === "") {
            setUsers([])
            setSuggestions(false)
        }
    }, [inputValue])

    const onSelectItem = (item: string) => {
        console.log(item);
        setInputValue(item);
        setSuggestions(false)
        setReFetch(false);
        // setRecentSearchData(prev => [...prev, item])
        addRecentSearch(item)
    };



    const fetchUsers = async () => {
        try {
            setIndex(-1)
            setIsLoading(true);
            let response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${inputValue}`);
            let result = await response.json();
            setUsers(result);
            setIsLoading(false)
            setSuggestions(true)
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
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                inputRef.current !== event.target
            ) {
                setSuggestions(false)
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <>
            <div className='flex items-center relative'>


                <input type="text" ref={inputRef}
                    onClick={() => {
                        inputValue.length > 0 && (setSuggestions(true), setReFetch(true), fetchUsers())
                    }}
                    onKeyDown={(e) => {
                        console.log(users.length);

                        if (e.key === "ArrowDown" && index < users.length - 1) {
                            setIndex(prev => prev + 1)

                            containerRef.current?.scrollBy({ top: 50, behavior: "smooth" })

                        }
                        if (e.key === "ArrowUp" && index > 0) {
                            setIndex(prev => prev - 1)

                            containerRef.current?.scrollBy({ top: -50, behavior: "smooth" })

                        }
                    }}
                    placeholder='search user...' className='p-3 outline-none rounded-md  w-full'
                    value={inputValue}
                    onChange={handleInput}
                />
                {isLoading ? <ClipLoader className='absolute top-2 right-6 z-10' color="#000" /> : ""}



            </div>
            {users.length > 0 && showSuggestion && <div className='mt-5 h-[600px] overflow-y-scroll bg-zinc-800 p-3' ref={containerRef}>
                {
                    users.map((user, i) => {

                        return (
                            <div key={user.id} className={`
                                  p-3 mb-3 bg-gray-100 rounded-md dark:bg-gray-800  cursor-pointer ${index == i ? "text-blue-800" : "text-white"}`}
                                onClick={() => onSelectItem(user.username)}
                            >
                                <h3 className='text-lg font-semibold'>{user.username}</h3>
                                <p className='text-sm'>{user.email}</p>
                            </div>
                        )
                    })
                }
            </div>
            }
            {users.length === 0 && showSuggestion && <div className='mt-5 h-[600px] overflow-y-scroll bg-zinc-800 p-3' ref={containerRef}>
                <span className='text-white'>no user found</span>
            </div>
            }
        </>
    )
}

export default SearchBar