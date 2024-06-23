
import BreadGrum from '@/components/BreadGrum'
import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import dynamic from "next/dynamic";
import SpainerLoader from '@/components/SpainerLoader';
const ProductDeatails = dynamic(() => import("@/components/productDetails-components/ProductDeatails"), {
    loading: () => <SpainerLoader />
});
const ProductDetails = ({ params }: { params: any }) => {


    return (
        <section className='mt-5'>

            <BreadGrum category={params.category} />

            <ProductDeatails />

        </section>
    )
}

export default ProductDetails