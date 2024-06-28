"use client"
import useFetchProduct from '@/hooks/useFetchProduct'
import React from 'react'

const CountProduct = () => {
    const { products, isFetching } = useFetchProduct();
    return (
        <>{isFetching ? "." : products.length || 0}</>
    )
}

export default CountProduct