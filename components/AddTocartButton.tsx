"use client"
import { useCartStore } from '@/zustant-store/useCartStore'
import React from 'react'

const AddTocartButton = ({ product }: { product: any }) => {
    const { ProductaddToCart } = useCartStore();
    return (
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={() => ProductaddToCart(product)}>
            Add to Cart
        </button>
    )
}

export default AddTocartButton