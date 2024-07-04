import BrandLists from '@/components/BrandLists';
import ProductCard from '@/components/ProductCard';

import React from 'react'

const fetchProduct = async (url: string) => {
    let response = await fetch(url,
        {
            cache: "force-cache",

            // next:{revalidate:5}
        }
    );
    let result = await response.json();
    return result.products;
};

const Server = async ({ searchParams }: { searchParams: any }) => {


    let url = `https://dummyjson.com/products/search?q=${searchParams.q || ""}&limit=9`;

    // if (searchParams.q) {
    //     url = `https://dummyjson.com/products/search?q=${searchParams.q}&limit=9`;
    // }


    if (searchParams.category) {
        url = `https://dummyjson.com/products/category/${searchParams.category}`;
    }
    const products = await fetchProduct(url);



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
    )
}

export default Server