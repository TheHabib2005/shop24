
import BrandLists from '@/components/BrandLists';
import BreadGrum from '@/components/BreadGrum';
import CategoriesList from '@/components/CategoriesList';
import CountProduct from '@/components/CountProduct';
import ProductCard from '@/components/ProductCard';
import ResetFilter from '@/components/ResetFilter';
import SortDropDownBox from '@/components/SortDropDownBox';
import { delay } from '@/utils';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
const MyComponent = dynamic(() => import('@/components/MyComponent.server'), { ssr: true });
export default function Page({ params }: { params: any }) {
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
                    <CategoriesList />
                    {/* <RatingStar />
                <PriceRange /> */}
                </div>
                <div className=' 2xl:w-[75%]  w-full  bg-black  rounded-md pb-5 '>
                    <header className="flex items-center justify-between  mt-3">

                        <div></div>
                        <div className='flex items-center justify-between '>

                            <SortDropDownBox />
                        </div>
                    </header>

                    <MyComponent />


                </div>

            </div>

        </section>
    );
}
