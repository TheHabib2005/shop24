// import BrandLists from '@/components/BrandLists';
import BrandLists from '@/components/BrandLists';
import BreadGrum from '@/components/BreadGrum'
import CategoriesList from '@/components/CategoriesList';
import CountProduct from '@/components/CountProduct';
import LayoutShiftIcon from '@/components/LayoutShiftIcon';
import PriceRange from '@/components/PriceRange';
import ProductListWrapper from '@/components/ProductListWrapper';
import RatingStar from '@/components/RatingStar';
import ResetFilter from '@/components/ResetFilter';
import SortDropDownBox from '@/components/SortDropDownBox';
import SpainerLoader from '@/components/SpainerLoader';
import { delay } from '@/utils';

import dynamic from 'next/dynamic';
import React from 'react'

const CategoryPage = async ({ params }: { params: { category: string } }) => {

    // const ProductList = dynamic(() => import('@/components/ProductListWrapper'), {
    //     loading: () => <SpainerLoader />,
    // })
    // const BrandLists = dynamic(() => import('@/components/BrandLists'), {
    //     loading: () => <SpainerLoader />,
    // })

    return (
        <section className=' '>

            <BreadGrum />

            <div className='flex items-center gap-1 py-5'>
                <span className='capitalize text-zinc-300 font-bold text-md '>{params.category}</span>
                <span className='text-zinc-500'>- <CountProduct /> items</span>
            </div>

            <div className='flex items-start gap-4    overflow-x-hidden font-semibold' >

                <div className=' 2xl:w-[25%] md:w-[30%] lg:block hidden bg-black rounded-md pt-4'>
                    <header className='flex items-center justify-between px-4 '>
                        <h1 className='text-zinc-800 dark:text-white font-semibold'>Filters</h1>
                        <ResetFilter />
                    </header>

                    <BrandLists />
                    <RatingStar />
                    <PriceRange />
                </div>
                <div className=' 2xl:w-[75%]  w-full  bg-black  rounded-md pb-5 '>
                    <header className="flex items-center justify-between  mt-3">

                        <div></div>
                        <div className='flex items-center justify-between '>

                            <SortDropDownBox />
                        </div>
                    </header>
                    <ProductListWrapper />

                    {/* <Pagination paginationItems={6} /> */}
                </div>

            </div>

        </section>
    )
}

export default CategoryPage