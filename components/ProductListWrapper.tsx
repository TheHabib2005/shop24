"use client";
import useFetchProduct from '@/hooks/useFetchProduct';
import React from 'react'
import ProductCard from './ProductCard';
import { ClipLoader } from 'react-spinners';

const ProductListWrapper = () => {
    const { products, isLoading, isError, error, isFetching } = useFetchProduct()
    if (isFetching) {
        return <div className='w-full min-h-full flex items-center justify-center'>
            <ClipLoader color='#2563EB' />
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

        <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3  pb-5  ">
            {
                products.length > 0 && products?.map(prod => {
                    return <ProductCard key={prod.id} product={prod} />
                })
            }
        </div>
    )
}

export default ProductListWrapper
