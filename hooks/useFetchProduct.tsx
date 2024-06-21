"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";

const useFetchProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const ssearchParams = useSearchParams();
    const params = new URLSearchParams(ssearchParams);
    const searchQuery = params.get("q");

    const fetchProduct = async () => {
        try {
            let response = await fetch(
                `https://dummyjson.com/products/search?q=${searchQuery ? searchQuery : ""
                }`
            );
            let result = await response.json();
            return result.products;
        } catch (error) {
            return error || "something was wrong";
        }
    };

    const { isLoading, isError, isFetching, error, refetch, status } = useQuery({
        queryKey: ["fetch-product", searchQuery, params.toString()],
        queryFn: fetchProduct,

        // Callbacks
        onSuccess: (data) => {
            setProducts(data);
        },
        onError: (error) => {
            console.error("Error fetching products:", error);
        },
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        // Caching
        cacheTime: 5 * 60 * 1000, // Time in milliseconds, data remains in cache (5 minutes)
        staleTime: 0, // Time in milliseconds before data is considered stale
        keepPreviousData: true,
        placeholderData: []// Keep previous data while fetching new data
    });

    return { isLoading, isFetching, products, isError };
};

export default useFetchProduct;
