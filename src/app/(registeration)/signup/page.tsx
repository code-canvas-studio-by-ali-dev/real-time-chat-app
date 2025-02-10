import RegisterationForm from '@/components/form/RegisterationForm'
import { montserrat } from '@/fonts/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className={`${montserrat.className} antialiased flex justify-around items-center w-svw h-svh`}>
            <Image
                src="/login_signup.jpg"
                alt="wallpaper for registeration page"
                className='hidden md:block contrast-150 brightness-110 saturate-100 -z-50'
                fill
            />
            <div>
                <Image
                    src="/fast-connect-2.svg"
                    alt="fast connect logo"
                    className='w-auto h-16'
                    width={200}
                    height={200}
                />
            </div>
            <main className='flex items-end h-svh'>
                <div className='bg-white rounded-t-lg px-20 pt-12 h-[90vh] space-y-5 xl:w-[40vw]'>
                    <h1 className='text-2xl font-semibold'>Welcome to Fast-Connect</h1>
                    <div className='space-y-1'>
                        <p className='text-sm font-bold'>Signup with Email</p>
                        <p className='text-sm font-medium'>Already have an account? <Link href={'/login'} className='link-style'>Sign in</Link></p>
                    </div>
                    <RegisterationForm />
                </div>
            </main>
        </section >
    )
}

export default page