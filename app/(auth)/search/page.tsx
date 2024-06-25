// app/components/ServerComponent.server.js
import SearchBar from '@/components/SearchBar';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

async function fetchData(q: string) {
    try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${q || ""}&limit=50`, {
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

function ErrorComponent({ error }: { error: any }) {
    return <div>Error: {error.message}</div>;
}

const Search = ({ searchParams }: { searchParams: any }) => {
    const data = fetchData(searchParams.query);
    console.log(searchParams.query);


    return (
        <div>
            <SearchBar />

            <Suspense fallback={<LoadingComponent />}>
                <ServerComponentContent promise={data} />
            </Suspense>
        </div>
    );
}
export default Search
async function ServerComponentContent({ promise }: { promise: any }) {
    const { products } = await promise;
    return (
        <div>
            {/* Render your data */}
            {products.map((item: any) => (
                <Link href={`/item?id=${item.id}`} key={item.id}>

                    <Image
                        width={400}
                        height={400000}
                        alt=''
                        src={item.thumbnail}

                    />
                    {/* {products.thumbnail} */}


                    {item.title}


                </Link>
            ))}
        </div>
    );
}
