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
                <DrawerTrigger className='text-white pl-4'><Menu /></DrawerTrigger>
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
                    <div className='mx-5 space-y-5 '>

                        <DrawerHeader>
                            <div className='space-x-4 flex pb-5'>

                                <Link href={'/'}>
                                    <Image
                                        src='https://seeklogo.com/images/W/walmart-spark-logo-57DC35C86C-seeklogo.com.png'
                                        width={40}
                                        height={30}
                                        alt='logo'
                                    />
                                </Link>
                                <button className='rounded-full p-2 font-semibold bg-[#0071DC] text-white text-sm hover:bg-[#033a81]'>
                                    <p className='px-2'>Sign or create account</p>
                                </button>
                            </div>
                        </DrawerHeader>

                        <div className='space-y-4' >
                            <div className='border-b space-y-4 pb-4'>
                                <div className='flex'>
                                    <Link className='flex space-x-2 text-sm' href={'/'} >
                                        <Grid2X2 size={20} />
                                        <p>Departments</p>
                                    </Link>
                                </div>
                                <div className='flex'>
                                    <Link href={'/'} className='flex space-x-2 text-sm items-center'>
                                        <LayoutGrid size={20} />
                                        <p>Services</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex'>
                                <Link href={'/'} className='flex text-sm items-center space-x-2'>
                                    <Heart size={20} />
                                    <div>
                                        <p>My Items</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='flex'>
                                <Link href={'/'} className='flex text-sm items-center space-x-2'>
                                    <User size={20} />
                                    <div>
                                        <p>Account</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default DrawerWrapper