import { getCategoryProducts } from '@/lib/fetch';
import Image from 'next/image';
import React from 'react';

type Item = {
    id: string;
    title: string;
    name: string;
    images: string[];
};

async function ProductsResults() {
    const name = 2;
    const results = await getCategoryProducts();
    console.log(results)


    return (
        <div >
            <h1 className="text-3xl font-bold">Pick up your favorite</h1>

            <div className="grid  grid-cols-5 gap-4">
                {results.slice(0,5).map((c: Item) => (
                    <div key={c.id}>
                        <h2 className="text-md font-semibold">{c.title}</h2>
                        <div className=" gap-4">
                            {c.images.map((image) => (
                                <div>
                                    <Image
                                        src={image}
                                        className=""
                                        alt='photo'
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsResults;