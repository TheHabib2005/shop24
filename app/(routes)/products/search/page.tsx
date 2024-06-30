
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
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import React from 'react'

const Search = ({ searchParams }: { searchParams: any }) => {
    if (searchParams.q === "" || !searchParams.q) {
        redirect("/")
    }
    return (
        <section className=' '>
            <BreadGrum />
            <div className='flex items-center gap-1 py-5'>
                <span className='capitalize text-zinc-300 font-bold text-md '>{searchParams.q}</span>
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
                <div className=' 2xl:w-[75%]  w-full bg-black rounded-md pb-5 px-4'>
                    <ProductListWrapper />
                </div>

            </div>

        </section>
    )
}

export default Search