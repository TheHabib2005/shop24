"use client"
import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Blurhash } from 'react-blurhash';

const LazyImage = ({ src }: { src: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });



    return (
        <div ref={ref} className="relative w-full h-64">
            {inView ? (
                <img

                    src={src}
                    alt="product.title"
                    className="w-auto h-auto"
                />
            ) : (
                <div className="min-w-full bg-red-400 min-h-full">
                    {/* <Blurhash
                        hash="LKO2:N%2Tw=w]~RBVZRi};RPxuwH"
                        className="min-w-full min-h-full"
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    /> */}
                </div>
            )}
        </div>
    );
};

export default LazyImage;
