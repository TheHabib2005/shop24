import BestSellingProdCard from "@/components/BestSellingProdCard";
import CategoryCard from "@/components/CategoryCard";
import { IoMdStar } from "react-icons/io";

export default function Home() {
  return (
    <>
      <section className=" grid  gap-4  pb-4 md:grid-cols-6 md:grid-rows-2   mx-auto mt-5">
        <div className="md:col-span-4 md:row-span-2">
          <a
            className="relative block aspect-square h-full w-full"
            href="/product/smartphone/Samsung Galaxy Z Fold4 (12/256GB) Smartphone - Unofficial"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
              <img
                alt=""
                loading="lazy"
                width={500}
                height={300}
                decoding="async"
                data-nimg={1}
                src="./google-tshirt.png"
                className="transition duration-300 ease-in-out group-hover:scale-105 sm:w-[500px] w-[200px] sm:w-[300px] w-[200px]"


                style={{ color: "transparent" }}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-8 pb-4 @container/label lg:px-25 lg:pb-[15%]">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2  capitalize text-[15px] flex-grow pl-2 leading-[25px] tracking-tight">
                    Samsung Galaxy Z Fold4 (12/256GB) Smartphone - Unofficial
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    ৳ 125,990
                    <span className="ml-1 inline  @[275px]/label:inline">BDT</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="md:col-span-2 md:row-span-1">
          <a
            className="relative block aspect-square h-full w-full"
            href="/product/smartphone/iphone 15 Pro Max 256GB/512GB/1TB (USA-LL/A) Smartphone Unofficial"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
              <img
                alt=""
                loading="lazy"
                width={300}
                height={300}
                decoding="async"
                data-nimg={1}
                className="transition duration-300 ease-in-out group-hover:scale-105 sm:w-[300px] w-[200px]"
                src="./product-2.webp"
                style={{ color: "transparent" }}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2  text-[15px] flex-grow pl-2 leading-none tracking-tight capitalize">
                    iphone 15 Pro Max 256GB/512GB/1TB (USA-LL/A) Smartphone Unofficial
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    $174990
                    <span className="ml-1 inline hidden @[275px]/label:inline">
                      USD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="md:col-span-2 md:row-span-1">
          <a
            className="relative block aspect-square h-full w-full"
            href="/product/acme-cup"
          >
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-800">
              <img
                alt=""
                loading="lazy"

                decoding="async"
                data-nimg={1}
                className="transition duration-300 ease-in-out group-hover:scale-105 sm:w-[400px] w-[200px]"
                src="./product-1.webp"
                style={{ color: "transparent" }}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2  text-[15px] flex-grow pl-2 leading-none tracking-tight capitalize">
                    Bangladesh T20 World Cup Jersey
                  </h3>
                  <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                    $121100
                    <span className="ml-1 inline hidden @[275px]/label:inline">
                      USD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="py-10">
        <div>
          <h1 className="text-zinc-800 dark:text-white font-semibold text-2xl">Browse By Category</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:py-10 py-5">
          <a href="/products/smartphone">
            <div className="w-full h-[200px] py-5 bg-zinc-900 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Fmobile.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                smartPhone
              </p>
            </div>
          </a>
          <a href="/products/laptop">
            <div className="w-full h-[200px] py-5 bg-zinc-900 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Flaptop.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                laptop
              </p>
            </div>
          </a>
          <a href="/products/skincare">
            <div className="w-full h-[200px] py-5 bg-zinc-900 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Fskincare.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                skinCare
              </p>
            </div>
          </a>
          <a href="/products/sunglass">
            <div className="w-full h-[200px] py-5 bg-zinc-900 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Fsunglass.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                sunglass
              </p>
            </div>
          </a>
          <a href="/products/t-shirt">
            <div className="w-full h-[200px] py-5 bg-zinc-900 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Ft-shirt.png&w=256&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                t-shirt
              </p>
            </div>
          </a>
          <a href="/products/watch">
            <div className="w-full h-[200px] py-5 bg-zinc-900 rounded-md flex flex-col gap-5 items-center justify-center">
              <img
                alt="image"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg={1}

                src="https://shop-24.vercel.app/_next/image?url=%2Fproduct-images%2Fwatch.png&w=128&q=75"
                style={{ color: "transparent" }}
              />
              <p className="text-[16px] 2xl:text-lg font-semibold text-white capitalize ">
                watch
              </p>
            </div>
          </a>
        </div>

      </section>
    </>

  );
}
