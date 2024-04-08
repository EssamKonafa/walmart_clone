import React from 'react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import miniLogo from '../public/miniLogo.png'

function DrawerWrapper() {
    return (
        <div className='flex lg:hidden '>
            <Drawer direction='left'>
                <DrawerTrigger className='text-white'><Menu /></DrawerTrigger>
                <DrawerContent>
                    {/* <DrawerHeader>
                        <DrawerTitle >logo</DrawerTitle>
                        <DrawerDescription>dic for logo</DrawerDescription>
                    </DrawerHeader> */}
                    {/* <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter> */}
                    <div className='ml-4 mr-8 space-y-5 '>

                        <div className='space-x-4 flex border-b pb-5'>
                            <Image
                                src='https://seeklogo.com/images/W/walmart-spark-logo-57DC35C86C-seeklogo.com.png'
                                width={40}
                                height={30}
                                alt='logo'
                            />
                            <button className='rounded-full p-2 font-semibold bg-[#0071DC] text-white text-sm hover:bg-[#033a81]'>
                                <p className='px-2'>Sign or create account</p>
                            </button>
                        </div>

                        <div className='space-y-4'>
                            <div className='border-b space-y-4 pb-4'>
                            <Link href={'/'} className='flex space-x-2 text-sm'>
                                <Grid2X2 size={20} />
                                <p>Departments</p>
                            </Link>
                            <Link href={'/'} className='flex space-x-2 text-sm items-center'>
                                <LayoutGrid size={20} />
                                <p>Services</p>
                            </Link>
                            </div>
                            <Link href={'/'} className='flex text-sm items-center space-x-2'>
                                <Heart size={20} />
                                <div>
                                    <p>My Items</p>
                                </div>
                            </Link>
                            <Link href={'/'} className='flex text-sm items-center space-x-2'>
                                <User size={20} />
                                <div>
                                    <p>Account</p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default DrawerWrapper