'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent } from 'react'
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Header() {

    const router = useRouter()

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const input = event.currentTarget.input.value
        router.push(`/search?q=${input}`)
    }

    return (
        <header className='bg-walmart flex space-x-5 py-7 px-10 items-center '>
            <Link href={'/'}>

                <Image
                    src='https://i.imgur.com/5V4wehM.png'
                    alt='logo'
                    width={150}
                    height={150}
                />

            </Link>

            <Link href={'/'} className='flex space-x-2 text-white text-sm font-bold items-center'>
                <Grid2X2 size={20} />
                <p>Departments</p>
            </Link>

            <Link href={'/'} className='flex space-x-2 text-white text-sm font-bold items-center'>
                <LayoutGrid size={20} />
                <p>Services</p>
            </Link>

            <form onSubmit={handleSubmit} className='border bg-white flex flex-1 items-center rounded-full w-full'>
                <input
                    type='text'
                    name='input'
                    placeholder='Search Everything...'
                    className='flex-1 px-5 rounded-l-full rounded-r-full placeholder:text-sm outline-none text-black'
                />
                <button type='submit'><Search className='rounded-full h-10 border px-2 w-10 bg-[#FFC220] cursor-pointer' /></button>
            </form>

            <div className='flex space-x-5'>

                <Link href={'/'} className='flex text-white text-sm font-bold items-center space-x-2'>
                    <Heart size={20} />
                    <div>
                        <p className='text-xs font-extralight'>ReOrder</p>
                        <p>My Items</p>
                    </div>
                </Link>

                <Link href={'/'} className='flex text-white text-sm font-bold items-center space-x-2'>
                    <User size={20} />
                    <div>
                        <p className='text-xs font-extralight'>Sign in</p>
                        <p>Account</p>
                    </div>
                </Link>

                <Link href={'/'} className='text-white text-sm  font-bold'>

                    <div className='flex justify-center'>
                        <ShoppingCart size={20} />
                    </div>

                    <p className='text-xs font-semibold '>0.00$</p>

                </Link>

            </div>

        </header>
    )
}

export default Header