import Link from 'next/link';
import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
const BestSellingProdCard = () => {
    return (
        <div className="flex flex-col gap-3">

            <div className="bg-zinc-300 dark:bg-zinc-900 w-[270px] h-[250px] flex items-center justify-center rounded-md relative">
                <div className=' z-10 absolute right-2 top-2 cursor-pointer p-2 rounded-md  hover:bg-zinc-950'>
                    <IoMdHeartEmpty className='text-zinc-500   dark:text-zinc-400' fontSize={23} />
                </div>
                <img src="./best-selling-product-1.png" alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <Link href={""} className="text-zinc-700 dark:text-white font-semibold text-xl">Gucci duffle bag</Link>
                <div className="flex items-center gap-4 ">
                    <h5 className="text-[#2563EB] text-xl font-bold ">$260</h5>
                    <h5 className="line-through text-zinc-400 font-bold text-md">$360</h5>
                </div>
                <div className="flex items-center gap-1  ">
                    <IoMdStar className='text-yellow-600' fontSize={22} />
                    <IoMdStar className='text-yellow-600' fontSize={22} />
                    <IoMdStar className='text-yellow-600' fontSize={22} />
                    <IoMdStar className='text-yellow-600' fontSize={22} />
                    <IoMdStar className='text-yellow-600' fontSize={22} />

                </div>
            </div>
        </div>
    )
}

export default BestSellingProdCard