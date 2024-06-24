import React from 'react'
import { IoPricetagsOutline } from 'react-icons/io5'

const ProductTags = ({ tags }: { tags: string[] }) => {
    return (
        <div className='flex items-center gap-3 text-white mt-5'>
            <IoPricetagsOutline />
            <div className='flex w-fit items-center gap-3 flex-wrap'>
                {
                    tags.map((tag: string, i: number) => {
                        return <span key={i} className='cursor-pointer text-gray-300  capitalize font-semibold border py-1 px-2  rounded-md'>{tag}</span>
                    })
                }


            </div>
        </div>
    )
}

export default ProductTags