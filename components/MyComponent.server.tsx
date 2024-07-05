"use client"
// components/MyComponent.server.jsx
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useSearchParams } from 'next/navigation';
import ProductCardSkeleton from './ProductCardSkelection';

export default function MyComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    const searchParams = useSearchParams();
    const q = searchParams.get('q');
    let url = `https://dummyjson.com/products/search?q=${searchParams.get("q") || ""}&limit=9`;

    // if (searchParams.q) {
    //     url = `https://dummyjson.com/products/search?q=${searchParams.q}&limit=9`;
    // }


    if (searchParams.get("category")) {
        url = `https://dummyjson.com/products/category/${searchParams.get("category")}`;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    cache: "force-cache",
                    priority: "high",

                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.products);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchParams.toString()]);

    if (loading) {
        return <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3   pb-5   ">
            {
                Array(10).fill("").map((prod, index) => {
                    return <ProductCardSkeleton key={index} />
                })
            }
        </div>
    }

    if (error) {
        return <div className='text-white'>Error: {error.message}</div>;
    }




    return (
        <>


            <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3   pb-5   ">
                {
                    data.length > 0 && data?.map((prod: any) => {
                        return <ProductCard key={prod.id} product={prod} />
                    })
                }
            </div>
            {
                data.length === 0 &&
                <div className='  flex items-center justify-center  '>
                    <h1 className='font-bold text-xl capitalize text-zinc-400'>No Product Found</h1>
                </div>
            }


        </>
    );
}
