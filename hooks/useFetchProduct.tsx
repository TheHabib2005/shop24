"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useFetchProduct = () => {
    const [isFetchingProduct, setIsFetchingProduct] = useState<boolean>(false);
    const [products, setPorducts] = useState<Product[]>([]);
    const [isFetchingError, setIsFetchingError] = useState({
        error: false,
        message: "",
    });
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

    const { data, isLoading, isError, } = useQuery({
        queryKey: ["fetch-product", searchQuery],
        queryFn: () => fetchProduct(),
        onSuccess: (data: Product[]) => {
            setPorducts(data);
        },
        // placeholderData:[]
    });

    console.log(data);



    return { isLoading, products, isError }
};

export default useFetchProduct;
