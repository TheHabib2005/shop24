"use client"
import React from 'react';
import Blurhash from 'react-blurhash';

const ImageWithBlurhash = () => {
    return (<div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Blurhash hash={"L69jcc~X0f0y4.x]tSWE%yEJI9v~"} width='100%' height='100%' />
        <img
            src={"https://static-01.daraz.com.bd/p/f817bb377c0a5fa9169bcb08e455016e.jpg_300x0q75.webp"}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            alt='Full Image'
        />
    </div>)
};

export default ImageWithBlurhash;
