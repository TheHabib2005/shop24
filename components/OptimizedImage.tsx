import Image from 'next/image';

import { getPlaiceholder } from "plaiceholder";

export default async function blur({ src }) {

    // const src = "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80";
    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
    })

    const { base64 } = await getPlaiceholder(buffer);

    return (
        <div>

            <div>
                <Image
                    src={src}
                    width={300}
                    height={30000000}
                    alt="image"
                    placeholder='blur'
                    blurDataURL={base64}
                />
            </div>
        </div>
    )
}