//@ts-nocheck
"use client"
import { useCartStore } from '@/zustant-store/useCartStore'
import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';

const AddTocartButton = ({ product }: { product: any }) => {
    const { ProductaddToCart } = useCartStore();
    const [isLoading, setIsLoading] = useState(false)

    const throttle = (fn, deley) => {
        return function (...args) {
            setIsLoading(true)
            setTimeout(() => {
                fn()
            }, deley)
        }
    }

    const my = throttle(() => {
        ProductaddToCart(product)
        setIsLoading(false)
    }, 2000)

    return (
        <>
            {
                isLoading && <div className='flex items-center justify-center fixed top-0 left-0 w-full h-screen bg-zinc-950 opacity-70 '>

                    <ClipLoader color='#2563EB' size={25} />
                </div>
            }
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-950" disabled={isLoading} onClick={my}>
                Add to Cart
            </button>
        </>
    )
}

export default AddTocartButton