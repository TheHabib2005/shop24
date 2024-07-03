"use client"
import { accountMenus } from '@/utils/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const path = usePathname();
    const currentPath = path.split("/").filter(path => path);
    console.log(currentPath.length);

    return (
        <div className='pr-7 border-r border-zinc-800 flex flex-col gap-y-4'>
            {
                accountMenus.map((item) => {
                    return <Link key={item.id} href={`${item.path}`} className={`p-3 cursor-pointer text-white rounded-md ${currentPath.includes(item.title.toLowerCase()) || (currentPath.length === 1 && item.title.includes("Profile")) ? "bg-blue-700" : "bg-zinc-950"} text-md font-bold`} >{item.title}</Link>
                })
            }
            <Link href={``} className={`p-3 cursor-pointer text-white rounded-md bg-zinc-950  text-lg font-bold`} >Logout</Link>
        </div>
    )
}

export default Sidebar