"use client"
import useFetchProduct from '@/hooks/useFetchProduct'
import Image from 'next/image'
import React from 'react'

const SearchPage = () => {

    const { products, isLoading } = useFetchProduct()
    if (isLoading) {
        return <h1 className='text-white'>Loading...</h1>
    }
    return (
        <div className='text-white grid sm:grid-cols-3 '>
            {
                products.map(product => {
                    return <>
                        {/* component */}
                        <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                            <Image
                                width={500000000}
                                height={500000000}
                                className="h-48 w-full object-cover object-center"
                                src={product.thumbnail}
                                alt="Product Image"
                            />
                            <div className="p-4">
                                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                                    {product.title}
                                </h2>
                                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                                    {product.description}
                                </p>
                                <div className="flex items-center">
                                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                                        ${product.price}
                                    </p>
                                    <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                                        $25.00
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">{product.discountPercentage}% off</p>
                                </div>
                            </div>
                        </div>
                    </>

                })
            }
        </div>
    )
}

export default SearchPage