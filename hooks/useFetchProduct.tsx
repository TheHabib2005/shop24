"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";

const useFetchProduct = () => {

    const [products, setPorducts] = useState<Product[]>([]);
    const ssearchParams = useSearchParams();
    const params = new URLSearchParams(ssearchParams);
    const searchQuery = params.get("q");

    let filterQuery: any = {};


    if (searchQuery) {
        filterQuery.searchQuery = searchQuery || ""
    } else {
        filterQuery.searchQuery = ""

    }

    const fetchProduct = async () => {
        try {
            let response = await fetch(
                `https://dummyjson.com/products/search?q=${searchQuery ? searchQuery : ""}`,
            );
            let result = await response.json();
            return result.products;

        } catch (error) {
            return error || "something was wrong"
        }
    };

    const { isLoading, isError, } = useQuery({
        queryKey: ["fetch-product", searchQuery, params.toString()],
        queryFn: () => fetchProduct(),
        onSuccess: (data: Product[]) => {
            setPorducts(data);
        },
        // placeholderData:[]
    });


    return { isLoading, products, isError }
};

export default useFetchProduct;
