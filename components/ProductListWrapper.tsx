"use client";
import useFetchProduct from '@/hooks/useFetchProduct';
import React from 'react'
import dynamic from "next/dynamic"
import SpainerLoader from './SpainerLoader';
import ProductCardSkeleton from './ProductCardSkelection';
import { ClipLoader } from 'react-spinners';
import ProductCard from './ProductCard';
import { animated, useSpring } from 'react-spring';

const ProductListWrapper = () => {

    const { products, isError, error, isFetching } = useFetchProduct()
    if (isFetching) {
        return <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3   pb-5   ">
            {
                Array(10).fill("").map((prod, index) => {
                    return <ProductCardSkeleton key={index} />
                })
            }
        </div>
    }
    if (isError || error) {
        return <div className='w-full min-h-full flex items-center justify-center'>
            <h1>Failed To Search Product 😢😢</h1>
        </div>
    }

    if (products.length <= 0 && !isFetching) {
        return <div className='w-full min-h-full flex items-center justify-center text-white text-2xl py-20'>
            <h1>OPPS! - Search Product Not Found 😢😢</h1>
        </div>
    }
    return (

        <>
            <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3   pb-5   ">
                {
                    products.length > 0 && products?.map(prod => {
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

export default ProductListWrapper
