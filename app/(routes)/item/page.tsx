import AddTocartButton from '@/components/AddTocartButton';
import Images from '@/components/Image';
import SpainerLoader from '@/components/SpainerLoader';
// import TabsWrapper from '@/components/productDetails-components/TabsWrapper';
import { calculateDiscountedPrice } from '@/utils';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { Suspense } from 'react'
import { ClipLoader } from 'react-spinners';
async function fetchData(q: string) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${q}`, {
      next: { revalidate: 10 } // Enable ISR if needed
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return await res.json();
  } catch (error) {
    throw new Error('Network error');
  }
}


const page = ({ searchParams }: { searchParams: any }) => {


  const data = fetchData(searchParams.id);

  return (

    <Suspense fallback={<div className=' p-10   flex items-center justify-center'>
      <ClipLoader className='w-6 h-6 text-blue-700' color='#1d4ed8 ' />
    </div>}>
      <ServerComponentContent promise={data} />
    </Suspense>
  )
}

export default page

async function ServerComponentContent({ promise }: { promise: any }) {
  const product = await promise;
  const TabsWrapper = dynamic(() => import("@/components/productDetails-components/TabsWrapper"), {
    loading: () => <SpainerLoader />,
  })
  return (

    <div className=''>
      <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center">

            <Image
              width={5000000}
              height={500000}
              className='w-auto '
              alt=''
              loading='lazy'
              src={product.thumbnail} />

          </div>
          <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-zinc-200 mb-2">
              {product.title}
            </h1>
            <p className="text-zinc-400 mb-4">
              {product.description}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-zinc-300">
                {product.price}
              </span>
              <span className="ml-2 text-gray-500 line-through">
                ${calculateDiscountedPrice(product.price, product.discountPercentage).toFixed(2)}
              </span>
              <span className="ml-2 text-green-600">
                ({product.discountPercentage}% off)
              </span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-2">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
              <span className="text-zinc-500">({product.rating.toFixed(2)})</span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">Stock:</span>
              <span className="text-red-600">
                {product.availabilityStatus} of ({product.stock}
                left)
              </span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">Brand:</span>
              <span className="text-zinc-500">
                {product.brand}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">SKU:</span>
              <span className="text-zinc-500">
                {product.sku}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">Weight:</span>
              <span className="text-zinc-500">
                {product.weight} oz
              </span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">Dimensions:</span>
              <span className="text-zinc-500">
                {product.dimensions.width} x {
                  product.dimensions.height} x {product.dimensions.depth}{" "}
                cm
              </span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">Warranty:</span>
              <span className="text-zinc-500">
                {product.warrantyInformation}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">Shipping:</span>
              <span className="text-zinc-500">
                {product.shippingInformation}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">Return Policy:</span>
              <span className="text-zinc-500">
                {product.returnPolicy}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-zinc-300 font-semibold">
                Minimum Order Quantity:
              </span>
              <span className="text-zinc-500">
                {product.minimumOrderQuantity}
              </span>
            </div>
            <AddTocartButton product={{ ...product, quantity: 1 }} />
          </div>
        </div>
      </div>


      <div className='px-4'>
        <TabsWrapper reviews={product.reviews} />
      </div>

    </div >



  );
}
