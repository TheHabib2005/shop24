"use client"
import React, { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash';

const Images = ({ src }: { src: string }) => {


    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setIsImageLoaded(true);
        }
        img.src = src;
    }, [src])

    return (

        <>

            {
                isImageLoaded ?
                    (<img
                        src={src}
                        alt={"product.title"}
                        className='w-auto h-auto'
                    // className="w-full h-auto rounded-lg"
                    />) : <div className='min-w-full bg-red-400'>

                        <Blurhash
                            hash="LKO2:N%2Tw=w]~RBVZRi};RPxuwH"
                            className='min-w-full min-h-full'
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                    </div>
            }


        </>


    )
}

export default Images