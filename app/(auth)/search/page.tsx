// app/components/ServerComponent.server.js
import SearchBar from '@/components/SearchBar';
import Prod from '@/components/prod';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import SpainerLoader from '@/components/SpainerLoader';
import { divide } from 'lodash';
// const Prod = dynamic(() => import("@/components/prod"), {
//     loading: () => <p>Loading yftherhrhr...</p>
// })
async function fetchData(q: string) {
    try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${q || ""}&limit=150`, {
            next: { revalidate: 10 },
            cache: "force-cache" // Enable ISR if needed
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

function ErrorComponent({ error }: { error: any }) {
    return <div>Error: {error.message}</div>;
}

const Search = ({ searchParams }: { searchParams: any }) => {
    const data = fetchData(searchParams.query);
    console.log(searchParams.query);
    return (
        <div>
            <SearchBar />

            <Suspense fallback={<div>

                Loading

            </div>}>
                <ServerComponentContent promise={data} />
            </Suspense>
        </div>
    );
}
export default Search
async function ServerComponentContent({ promise }: { promise: any }) {
    const { products } = await promise;
    return (

        <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3  pb-5   ">
            {products.map((item: any) => (
                <Prod item={item} key={item.id} />
            ))}
        </div>

    );
}
