import React from 'react'

const ProductDescription = ({ description }: { description: string }) => {
    return (
        <div className='p-5'>
            <p className='text-md font-semibold text-zinc-300 line-clamp-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi in nulla, nisi quae at! Laudantium cumque nam quisquam necessitatibus aspernatur? Ab, aspernatur eligendi ratione possimus iusto quia dolore. Laboriosam adipisci incidunt aperiam. Quibusdam ipsa similique, beatae non odit  </p>

            <div className='mt-5'>
                <h3 className='text-zinc-800 dark:text-white font-semibold text-lg'>
                    Features
                </h3>
                <ol className='flex flex-col gap-3 text-gray-300 mt-3'>
                    <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span>  Made with full cotton</li>
                    <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span> Slim fit for any body</li>
                    <li className='flex items-center gap-4'><span className='p-1 h-1 bg-gray-300 rounded-full'></span> Quality control by JC</li>
                </ol>
            </div>

        </div>
    )
}

export default ProductDescription