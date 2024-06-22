// "use client"
// import useFetchProduct from '@/hooks/useFetchProduct'
// import Image from 'next/image'
// import React from 'react'
// import { ClipLoader } from 'react-spinners'

// const SearchPage = () => {

//     const { products, isLoading } = useFetchProduct()
//     if (isLoading) {
//         return <div className='w-full min-h-full flex items-center justify-center'>
//             <ClipLoader color='#2563EB' />
//         </div>
//     }
//     return (
//         <div className='text-white grid sm:grid-cols-3 '>
//             {
//                 products.map(product => {
//                     return <>
//                         {/* component */}
//                         <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
//                             <Image
//                                 width={500000000}
//                                 height={500000000}
//                                 className="h-48 w-full object-cover object-center"
//                                 src={product.thumbnail}
//                                 alt="Product Image"
//                             />
//                             <div className="p-4">
//                                 <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
//                                     {product.title}
//                                 </h2>
//                                 <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
//                                     {product.description}
//                                 </p>
//                                 <div className="flex items-center">
//                                     <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
//                                         ${product.price}
//                                     </p>
//                                     <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
//                                         $25.00
//                                     </p>
//                                     <p className="ml-auto text-base font-medium text-green-500">{product.discountPercentage}% off</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </>

//                 })
//             }
//         </div>
//     )
// }

// export default SearchPage


import BrandLists from '@/components/BrandLists'
import BreadGrum from '@/components/BreadGrum'
import CategoriesList from '@/components/CategoriesList'
import LayoutShiftIcon from '@/components/LayoutShiftIcon'
import Pagination from '@/components/Pagination'
import PriceRange from '@/components/PriceRange'
import ProductCard from '@/components/ProductCard'
import ProductListWrapper from '@/components/ProductListWrapper'
import RatingStar from '@/components/RatingStar'
import ResetFilter from '@/components/ResetFilter'
import SortDropDownBox from '@/components/SortDropDownBox'
import { staticData } from '@/staticData'
import React from 'react'
import dynamic from 'next/dynamic'

const DynamicProductListWrapper = dynamic(() => import('@/components/ProductListWrapper'), {
    loading: () => <p>Loading...</p>,
})


const page = () => {
    return (
        <div className='flex items-start gap-4  my-6   overflow-x-hidden font-semibold' >

            <div className=' 2xl:w-[25%] md:w-[30%] lg:block hidden bg-zinc-100 dark:bg-zinc-950 rounded-md pt-4'>
                <header className='flex items-center justify-between px-4 '>
                    <h1 className='text-zinc-800 dark:text-white font-semibold'>Filters</h1>
                    <ResetFilter />
                </header>
                <CategoriesList />
                <BrandLists />
                <RatingStar />
                <PriceRange />
            </div>
            <div className=' 2xl:w-[75%]  w-full bg-zinc-100 dark:bg-zinc-950  rounded-md pb-5 px-4'>
                <header className="flex items-center justify-between  mt-3">
                    <BreadGrum />
                    <div className='flex items-center justify-between '>
                        <LayoutShiftIcon />
                        <SortDropDownBox />
                    </div>
                </header>
                <DynamicProductListWrapper />

                {/* <Pagination paginationItems={6} /> */}
            </div>

        </div>
    )
}

export default page


