//@ts-nocheck
// app/page.js
import ProductCard from '@/components/ProductCard';
import { delay } from '@/utils';
import React, { Suspense } from 'react';

async function fetchData(q) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${q || ""}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    let data = await response.json();


    return data.products
}

async function DataComponent({ q }) {

    const products = await fetchData(q);




    return (

        <>
            <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3   pb-5   ">
                {
                    products.length > 0 && products?.map((prod: any) => {
                        return <ProductCard key={prod.id} product={prod} />
                    })
                }
            </div>
            {
                products.length === 0 &&
                <div className='  flex items-center justify-center  '>
                    <h1 className='font-bold text-xl capitalize text-zinc-400'>No Product Found</h1>
                </div>
            }


        </>
    );
}

function LoadingComponent() {
    return <div>Loading...</div>;
}

function ErrorComponent({ error }) {
    return <div>Error: {error.message}</div>;
}

export default function Page({ searchParams }) {
    return (
        <div className='text-white'>
            <h1>Welcome to Next.js 14 with App Router</h1>
            <Suspense fallback={<LoadingComponent />}>
                <DataComponent q={searchParams.q} />
            </Suspense>
        </div>
    );
}
