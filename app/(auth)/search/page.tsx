"use client"

// import Prod from '@/components/prod';
import useFetchProduct from '@/hooks/useFetchProduct'
import React from 'react'
import dynamic from 'next/dynamic';
import ProductCardSkeleton from '@/components/ProductCardSkelection';
import SearchBar from '@/components/SearchBar';
import { ClipLoader } from 'react-spinners';
import ProductCard from '@/components/ProductCard';

const Serach = () => {
    const Prod = dynamic(() => import("@/components/prod"), {
        loading: () => <ProductCardSkeleton />
    })


    const { products, isFetching } = useFetchProduct();

    if (isFetching) {
        return <div className='text-blue-600 p-10 flex items-center justify-center '>
            <ClipLoader className='w-6 h-6 text-blue-700' />
        </div>
    }

    return (


        <div className='p-4 bg-zinc-950'>
            <SearchBar />
            <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3 bg-zinc-950  pb-5   ">
                {
                    products.length > 0 && products?.map(prod => {
                        return <ProductCard key={prod.id} product={prod} />
                    })
                }
            </div>
        </div>


    )
}

export default Serach