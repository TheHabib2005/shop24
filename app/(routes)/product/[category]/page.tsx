// import React from 'react'

// const Category = ({ params }: { params: any }) => {
//     return (
//         <div>{params.category}</div>

//     )
// }

// export default Category
"use client"

import React, { useEffect, useRef } from 'react';

const AutoScrollComponent = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (containerRef.current) {
                const container = containerRef.current;
                const scrollAmount = 50;

                if (event.key === 'ArrowDown') {
                    const maxScrollTop = container.scrollHeight - container.clientHeight;
                    if (container.scrollTop + scrollAmount <= maxScrollTop) {
                        container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
                    } else {
                        container.scrollTo({ top: maxScrollTop, behavior: 'smooth' });
                    }
                } else if (event.key === 'ArrowUp') {
                    if (container.scrollTop - scrollAmount >= 0) {
                        container.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
                    } else {
                        container.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                height: '300px',
                overflowY: 'auto',
                border: '1px solid black',
                padding: '10px',
            }}
        >
            <div style={{ height: '800px', color: "white" }}>
                {/* Replace this with your actual content */}
                <p>Line 1</p>
                <p>Line 2</p>
                <p>Line 3</p>
                <p>Line 4</p>
                <p>Line 5</p>
                <p>Line 6</p>
                <p>Line 7</p>
                <p>Line 8</p>
                <p>Line 9</p>
                <p>Line 10</p>
                <p>Line 11</p>
                <p>Line 12</p>
                <p>Line 13</p>
                <p>Line 14</p>
                <p>Line 15</p>
                <p>Line 16</p>
            </div>
        </div>
    );
};

export default AutoScrollComponent;
