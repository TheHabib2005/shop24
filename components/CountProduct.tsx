"use client"
import useFetchProduct from '@/hooks/useFetchProduct'
import React from 'react'

const CountProduct = () => {
    const { products, isFetching } = useFetchProduct();
    return (
        <>{isFetching ? "Loading..." : products.length || 0}</>
    )
}

export default CountProduct