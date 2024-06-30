"use client";
import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { useInView } from "react-intersection-observer";
import { ClipLoader } from "react-spinners";

const LazyImage = ({ src }: { src: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [show, setshow] = useState(false);
    return (
        <div ref={ref} className="relative w-full h-64">
            {inView && (
                (show ? <img src={src} alt="product.title" className="w-auto h-auto m-auto" /> : <div className="w-full h-full relative">
                    <Blurhash
                        hash="LKEVpS00?^xt4n-=D*ad4.%MMxj?"
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                        className="min-w-full min-h-full"
                    />

                </div>)
            )
                //  : (
                //     <div className="min-w-full bg-zinc-900 min-h-full flex items-center justify-center">
                //         <ClipLoader size={30} color="#2563EB" />
                //     </div>
                // )
            }
            {inView && <img src={src} onLoad={() => {
                setTimeout(() => {
                    setshow(true)
                }, 200);
            }} alt="product.title" className="w-auto h-auto m-auto" hidden />}
        </div>
    )
};

export default LazyImage;
