import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import AutoCompleteBar from './AutoCompleteBar'

const Header = () => {
    return (
        <header className='py-6 '>
            <div className='flex items-center justify-between '>
                <div className='w-1/3 md:hidden block cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 dark:text-zinc-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className=' w-1/3  mx-auto flex items-center '>
                    <Link href={"/"}>
                        <img src="https://devshopbd.com/wp-content/uploads/2024/02/2.1-d-logo.png.webp" alt="" className='md:w-[180px] w-[150px]' />
                    </Link>
                    <div className=' xl:flex hidden items-center ml-5 gap-4 text-zinc-700 dark:text-zinc-400'>
                        <Link href={""} className='hover:text-zinc-400  font-semibold  text-lg'>Shop</Link>
                        <Link href={""} className='hover:text-zinc-400  font-semibold  text-lg '>Contact</Link>


                    </div>
                </div>
                <AutoCompleteBar responsiveMode={false} />
                {/* <SearchBar /> */}
                <div className=' md:w-1/3 flex-1 flex items-center gap-x-6 justify-end'>
                    <Link href={""} className='w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full dark:bg-zinc-900 dark:text-white' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                    </Link>
                    <Link href={""} className='w-12 h-12 md:flex bg-gray-100 hidden items-center justify-center rounded-full dark:bg-zinc-900 dark:text-white' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>


                    </Link>
                    <Link href={""} className='w-12 h-12 bg-[#2563EB] text-white md:flex hidden items-center justify-center rounded-full ' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>



                    </Link>
                </div>
            </div>



            <AutoCompleteBar responsiveMode={true} />
        </header>
    )
}

export default Header