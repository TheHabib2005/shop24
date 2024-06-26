import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from './Image-lazy-loading-no-library/Profile'


const Prod = ({ item }: { item: any }) => {
    return (
        <a href={`/item?id=${item.id}`} key={item.id}
            className="relative m-1 flex  flex-col overflow-hidden rounded-lg  bg-zinc-200 dark:bg-zinc-900 shadow-md mx-auto cursor-pointer"

        >

            <Profile image={item.thumbnail} />
            {/* {products.thumbnail} */}


            {item.title}


        </a>
    )
}

export default Prod