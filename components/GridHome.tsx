import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    image?: string;
    className: string;
}

function GridHome({ title, image, className }: Props) {
    return (
        <>
            <Link href={{
                pathname: '/search',
                query: { q: title }
            }}
                className={cn('relative p-5', className)}
            >

                <h1 className='relative z-50 font-bold text-2xl opacity-80 flex'>
                    <p className='text-black  bg-white'>
                        {title}
                    </p>
                </h1>

                {image &&
                    <Image
                        src={image}
                        alt={title}
                        layout='fill'
                        className='object-cover rounded-lg opacity-90'
                    />
                }

            </Link>
        </>
    )
}

export default GridHome