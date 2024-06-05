"use client"
import React, { useLayoutEffect } from 'react'
import { FaListUl } from "react-icons/fa6";
import { BsGrid } from "react-icons/bs";
import { useLayoutSwitcherState } from '@/zustant-store/globalTempStore';

const LayoutShiftIcon = () => {
    useLayoutEffect(() => {
        localStorage.setItem("gridRowClassName", "px-5 py-5 grid xl:grid-cols-4 place-items-center md:grid-cols-2 grid-cols-1 gap-5")
        localStorage.setItem("gridColClassName", "px-5 py-5 flex items-center flex-col gap-y-5 w-[100%]")
    }, [])
    let gridRowClassName = localStorage.getItem('gridRowClassName')
    let gridColClassName = localStorage.getItem('gridColClassName')
    const { switchLayout, isGrid } = useLayoutSwitcherState()
    return (
        <div className='sm:flex hidden items-center gap-x-3 mr-5 '>
            <BsGrid className={`${isGrid && "text-[#2563EB]"} text-zinc-800 dark:text-white cursor-pointer text-xl`} onClick={() => {
                switchLayout(true)
            }} />

            <FaListUl className={`${!isGrid && "text-[#2563EB]"} text-zinc-800 dark:text-white cursor-pointer text-xl`} onClick={() => {
                switchLayout(false)
            }} />


        </div>
    )
}

export default LayoutShiftIcon