"use client"
import { calculateDiscountedPrice, decryptObject } from '@/utils';
import { useCartStore } from '@/zustant-store/useCartStore';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa6';
import { GrCart } from 'react-icons/gr';
import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import { IoPricetagsOutline } from 'react-icons/io5';
import { MdOutlineDiscount, MdOutlineShare, MdOutlineStar } from 'react-icons/md';
import SpainerLoader from '../SpainerLoader';
// import ProductTags from './ProductTags';
// import TabsWrapper from './TabsWrapper';
import dynamic from 'next/dynamic';
const ProductDeatails = () => {
    let text = localStorage.getItem("current-product");
    let { thumbnail, title, price, tags, rating, discountPercentage, brand, images, reviews } = decryptObject(text!);
    let product = decryptObject(text!);
    const ProductTags = dynamic(() => import("./ProductTags"), {
        loading: () => <SpainerLoader />
    })
    const TabsWrapper = dynamic(() => import("./TabsWrapper"), {
        loading: () => <SpainerLoader />
    })

    const {
        ProductaddToCart
    } = useCartStore();
    return (
        <>
            <div className='lg:flex items-start mt-10  w-full'>
                <div className='flex items-start gap-x-5 flex-1 2xl:flex-row flex-col-reverse  '>
                    {/* <div className='2xl:flex-col flex items-center 2xl:mt-0 mt-5 2xl:gap-0 gap-2'>
                        <img src={thumbnail} alt="" className='2xl:w-[120px] w-[100px] rounded-md cursor-pointer 2xl:mb-3 mb-0 border border-zinc-800  ' />
                        <img src={thumbnail} alt="" className='2xl:w-[120px] w-[100px] rounded-md cursor-pointer 2xl:mb-3 mb-0 border border-zinc-800  ' />   <img src={thumbnail} alt="" className='2xl:w-[120px] w-[100px] rounded-md cursor-pointer 2xl:mb-3 mb-0 border border-zinc-800  ' />
                    </div> */}
                    <div>
                        <Image src={"/img-1946_optimized_10.webp"} width={400} height={5000000000} alt="prod-image" className='  rounded-md' loading='lazy' fetchPriority='high'

                            blurDataURL='/reviewer-default-avater-imge.png'

                        />
                    </div>


                </div>
                <div className='flex-1   md:pt-0 pt-10'>
                    <h1 className='text-zinc-800 dark:text-white text-3xl font-bold'>{title}</h1>
                    <div className='flex items-center gap-3 mt-3'>
                        <div className='text-yellow-500 flex items-center text-xl'>
                            {
                                Array(5).fill("").map((_, i) => {
                                    if (i < Math.round(rating)) {
                                        return <IoMdStar color="yellow" fontSize={20} key={i} />
                                    } else {
                                        return <IoMdStarHalf color="yellow" fontSize={20} key={i} />
                                    }
                                })
                            }
                        </div>
                        <span className='text-zinc-800 dark:text-white'>{reviews.length} Reviews</span>
                    </div>
                    <div className='mt-5 flex items-center gap-5'>
                        <span className='text-zinc-800 dark:text-white text-3xl'>${calculateDiscountedPrice(price, discountPercentage).toFixed(2)}</span>
                        <span className='text-2xl line-through text-gray-400'>${price}</span>

                    </div>
                    <div className='flex items-center mt-3'>
                        <MdOutlineDiscount className='text-gray-400' />

                        <span className='text-gray-400 ml-3'>Save {discountPercentage}% right now</span>
                    </div>
                    <div className='mt-5'>
                        <h3 className='text-zinc-800 dark:text-white font-semibold text-lg'>
                            Features
                        </h3>
                        <ol className='flex flex-col gap-3 text-gray-300 mt-3'>
                            <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span>  Made with full cotton</li>
                            <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span> Slim fit for any body</li>
                            <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span> Quality control by JC</li>
                        </ol>
                    </div>

                    <div className='flex items-center mt-5 gap-3'>
                        <button className='w-full py-4 flex items-center justify-center    text-xl text-white gap-5 bg-blue-600 hover:bg-blue-500 rounded-md' onClick={() => {
                            ProductaddToCart({ ...product, quantity: 1 })
                        }}> <GrCart />  Add to Cart</button>
                        <button className=' text-white bg-zinc-800 p-5 text-xl  hover:bg-zinc-700 rounded-md'><FaRegHeart /></button>
                        <button className=' text-white bg-zinc-800 p-5 text-xl  hover:bg-zinc-700 rounded-md'><MdOutlineShare /></button>
                    </div>
                    <ProductTags tags={tags} />
                </div>

            </div>
            {/* / */}


            <TabsWrapper reviews={reviews} />

        </>
    )
}

export default ProductDeatails