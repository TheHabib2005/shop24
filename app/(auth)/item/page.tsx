import { calculateDiscountedPrice } from '@/utils';
import React, { Suspense } from 'react'
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

function LoadingComponent() {
  return <div>Loading...</div>;
}

function ErrorComponent({ error }) {
  return <div>Error: {error.message}</div>;
}
const page = ({ searchParams }) => {

  console.log(searchParams.id);


  const data = fetchData(searchParams.id);

  return (

    <Suspense fallback={<LoadingComponent />}>
      <ServerComponentContent promise={data} />
    </Suspense>
  )
}

export default page

async function ServerComponentContent({ promise }) {
  const product = await promise;
  return (

    <>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
            // className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-gray-800">
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
              <span className="text-gray-600">({product.rating.toFixed(2)})</span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">Stock:</span>
              <span className="text-red-600">
                {product.availabilityStatus} of ({product.stock}
                left)
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">Brand:</span>
              <span className="text-gray-600">
                {product.brand}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">SKU:</span>
              <span className="text-gray-600">
                {product.sku}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">Weight:</span>
              <span className="text-gray-600">
                {product.weight} oz
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">Dimensions:</span>
              <span className="text-gray-600">
                {product.dimensions.width} x {
                  product.dimensions.height} x {product.dimensions.depth}{" "}
                cm
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">Warranty:</span>
              <span className="text-gray-600">
                {product.warrantyInformation}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">Shipping:</span>
              <span className="text-gray-600">
                {product.shippingInformation}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">Return Policy:</span>
              <span className="text-gray-600">
                {product.returnPolicy}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-gray-800 font-semibold">
                Minimum Order Quantity:
              </span>
              <span className="text-gray-600">
                {product.minimumOrderQuantity}
              </span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
        <div className="space-y-4">
          {product.reviews.map(review =>
            <div className="border-t pt-4" key={review.rating}>
              <p className="text-gray-600">${review.comment}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                <span className="text-gray-500 text-sm">- {review.reviewerName}, {new Date(review.date).toISOString().split('T')[0]}</span>
              </div>
            </div>
          )}
        </div>
      </div>

    </>



  );
}
