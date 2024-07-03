import BrandLists from '@/components/BrandLists';
import ProductCard from '@/components/ProductCard';
import { fetchProduct } from '@/utils'
import { Product } from '@/utils/interfaces';
import React from 'react'

const Server = async ({ searchParams }: { searchParams: any }) => {
    const products = await fetchProduct(searchParams.q || "");

    return (
        <>


            <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3   pb-5   ">
                {
                    products.length > 0 && products?.map((prod: Product) => {
                        return <ProductCard key={prod.id} product={prod} />
                    })
                }
            </div>
            {
                products.length === 0 &&
                <div className='  flex items-center justify-center  '>
                    <h1 className='font-bold text-xl capitalize text-zinc-400'>No Product Found</h1>
                </div>
            }


        </>
    )
}

export default Server