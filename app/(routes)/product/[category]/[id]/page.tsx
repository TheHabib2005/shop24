"use client"
import BreadGrum from '@/components/BreadGrum'
import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from 'next/navigation';

const ProductDetails = ({ params }: { params: any }) => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const price = searchParams.get('price');
    const brand = searchParams.get('id');
    // const id = searchParams.get('id');

    const name = searchParams.get('title');
    const description = searchParams.get('description');
    const images = searchParams.get('thumbnail')

    console.log(name);

    return (
        <section className='mt-5'>
            <div>
                <BreadGrum category={params.category} />
            </div>
            <div className='lg:flex items-start mt-10  w-full'>
                <div className='flex items-start gap-x-5 flex-1 2xl:flex-row flex-col-reverse '>
                    {/* <div className='2xl:flex-col flex items-center 2xl:mt-0 mt-5 2xl:gap-0 gap-2'>
                        <img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-2.png" alt="" className='2xl:w-[150px] w-[120px] rounded-md cursor-pointer 2xl:mb-3 mb-0 h-[100px]  ' />
                        <img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-3.png" alt="" className='2xl:w-[150px] w-[120px] rounded-md cursor-pointer 2xl:mb-3 mb-0 h-[100px] ' />
                        <img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-4.png" alt="" className='2xl:w-[150px] w-[120px] rounded-md cursor-pointer 2xl:mb-3 mb-0 h-[100px] ' />
                        <img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-5.png" alt="" className='2xl:w-[150px] w-[120px] rounded-md cursor-pointer 2xl:mb-3 mb-0 h-[100px] ' />
                    </div> */}
                    <div>
                        <img src={images} alt="prod-image" className=' 2xl:w-[700px] w-full rounded-md' />
                    </div>


                </div>
                <div className='flex-1 2xl:ml-20 md:ml-10'>
                    <h1 className='text-zinc-800 dark:text-white text-3xl font-bold'>{name}</h1>
                    <div className='flex items-center gap-3 mt-3'>
                        <div className='text-yellow-500 flex items-center text-xl'>
                            <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />
                        </div>
                        <span className='text-zinc-800 dark:text-white'>120 Reviews</span>
                    </div>
                    <div className='mt-5 flex items-center gap-5'>
                        <span className='text-zinc-800 dark:text-white text-3xl'>${price}</span>
                        <span className='text-2xl line-through text-gray-400'>$99</span>

                    </div>
                    <div className='flex items-center mt-3'>
                        <MdOutlineDiscount className='text-gray-400' />

                        <span className='text-gray-400 ml-3'>Save 50% right now</span>
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
                        <button className='w-full py-4 flex items-center justify-center    text-xl text-white gap-5 bg-blue-600 hover:bg-blue-500 rounded-md'> <GrCart />  Add to Cart</button>
                        <button className=' text-white bg-zinc-800 p-5 text-xl  hover:bg-zinc-700 rounded-md'><FaRegHeart /></button>
                        <button className=' text-white bg-zinc-800 p-5 text-xl  hover:bg-zinc-700 rounded-md'><MdOutlineShare /></button>
                    </div>

                    <div className='flex items-center gap-3 text-white mt-5'>
                        <IoPricetagsOutline />
                        <div className='flex w-fit items-center gap-3 flex-wrap'>
                            <span className='cursor-pointer text-gray-300  capitalize font-semibold border py-1 px-2  rounded-md'>dress</span>
                            <span className='cursor-pointer text-gray-300  capitalize font-semibold border py-1 px-2  rounded-md'>woman dress</span>
                            <span className='cursor-pointer text-gray-300  capitalize font-semibold border py-1 px-2  rounded-md'>green cloth</span>
                            <span className='cursor-pointer text-gray-300  capitalize font-semibold border py-1 px-2  rounded-md'>stylesh cloth</span>

                        </div>
                    </div>


                </div>

            </div>
            <div className='flex  items-center gap-4 text-white mt-10 pb-5 border-b border-zinc-600'>
                <div className='font-semibold bg-blue-600 text-white p-2 rounded-md cursor-pointer '>Description</div>
                <div className='cursor-pointer'>Reviews <span className='p-1 rounded-full ml-2 bg-gray-600 text-zinc-400'>157</span></div>
                <div>Support</div>
            </div>
            <div>
                <div className=' p-5 w-full flex  md:flex-row flex-col gap-4'>

                    <div className='md:w-1/2 w-full'>
                        <div className=' flex items-start gap-5 mt-5'>
                            <div className='w-[100px]'><img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/avatar-1.png" alt="" className='w-[50px] object-contain' /></div>
                            <div className='flex flex-col gap-3 text-white'>
                                <div className='text-yellow-500 flex items-center text-xl'>
                                    <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />
                                </div>
                                <p>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.</p>
                                <b>Kristin Watson</b>
                                <span className='text-gray-400'>March 14, 2021</span>
                            </div>
                        </div>
                        {/*  */}
                        <div className=' flex items-start gap-5 mt-5'>
                            <div className='w-[100px]'><img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/avatar-1.png" alt="" className='w-[50px] object-contain' /></div>
                            <div className='flex flex-col gap-3 text-white'>
                                <div className='text-yellow-500 flex items-center text-xl'>
                                    <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />
                                </div>
                                <p>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.</p>
                                <b>Kristin Watson</b>
                                <span className='text-gray-400'>March 14, 2021</span>
                            </div>
                        </div>
                        {/*  */}
                        <div className=' flex items-start gap-5 mt-5'>
                            <div className='w-[100px]'><img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/avatar-1.png" alt="" className='w-[50px] object-contain' /></div>
                            <div className='flex flex-col gap-3 text-white'>
                                <div className='text-yellow-500 flex items-center text-xl'>
                                    <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />
                                </div>
                                <p>You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.</p>
                                <b>Kristin Watson</b>
                                <span className='text-gray-400'>March 14, 2021</span>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='md:w-1/2 px-4 w-full '>
                        <div>
                            <h3 className='text-zinc-700 dark:text-white font-semibold text-xl'>Write your review</h3>
                            <p className='text-zinc-300 text-lg'>Your email address will not be published. Required fields are marked*</p>
                        </div>


                        <form className='flex flex-col gap-y-4 mt-10 w-full'>

                            <div className='w-full'>
                                <label htmlFor="email" className='text-zinc-700 dark:text-white text-lg mb-3 inline-flex font-semibold'>Email *</label>
                                <input type="text" name='email' id='email' className='p-3 w-full outline-none  rounded-md' placeholder='Example@gmail.com' />
                            </div>
                            <div className='w-full mt-3'>
                                <label htmlFor="email" className='text-zinc-700 dark:text-white text-lg mb-3 inline-flex font-semibold'>Your Review *</label>

                                <textarea name='email' id='email' className='p-3 w-full h-[150px] outline-none  rounded-md' placeholder='This is Nice Product!' ></textarea>
                            </div>
                            <select name="rating-star" id="rating-star" className='p-3 rounded-md cursor-pointer outline-none'>
                                <option value="5">5 Star</option>
                                <option value="4">4 Star</option>
                                <option value="3">3 Star</option>
                                <option value="2">2 Star</option>
                                <option value="1">1 Star</option>
                            </select>

                            <button className='w-full bg-blue-600 cursor-pointer text-white textlg- font-semibold p-3 rounded-md mt-3 '>Send Review</button>

                        </form>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default ProductDetails