import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from './Image-lazy-loading-no-library/Profile'


const Prod = ({ item }: { item: any }) => {
    return (
        <Link href={`/item?id=${item.id}`} key={item.id}

            className='relative m-1 flex  flex-col overflow-hidden rounded-lg  bg-zinc-200 p-4 shadow-md mx-auto cursor-pointer'

        >

            <Profile image={item.thumbnail} />
            {/* {products.thumbnail} */}


            {item.title}


        </Link>
    )
}

export default Prod