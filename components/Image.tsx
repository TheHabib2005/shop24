"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ src }: { src: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="relative w-full h-64">
            {inView ? (
                <img src={src} alt="product.title" className="w-auto h-auto m-auto" />
            ) : (
                <div className="min-w-full bg-red-400 min-h-full"></div>
            )}
        </div>
    );
};

export default LazyImage;
