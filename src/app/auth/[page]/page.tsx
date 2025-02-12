'use client'

import RegisterationForm from '@/components/form/RegisterationForm'
import gsap from 'gsap'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

type PageParams = {
    page: 'login' | 'signup'
}

const page = () => {
    const params: PageParams = useParams();
    const formRef = useRef(null);

    useEffect(() => {
        gsap.from(formRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
        });
    }, [params]);

    return (
        <main className='flex items-end h-svh'>
            <div ref={formRef} className='bg-white rounded-t-lg px-20 pt-12 h-[90vh] space-y-5 xl:w-[40vw]'>
                <h1 className='text-2xl font-semibold'>Welcome to Fast-Connect</h1>
                <div className='space-y-1'>
                    <p className='text-sm font-bold'>{params.page === 'login' ? 'Login with Email' : 'Signup with Email'}</p>
                    <p className='text-sm font-medium'>
                        Already have an account?
                        <Link href={params.page === 'login' ? '/auth/signup' : '/auth/login'} className='link-style'>
                            {params.page === 'login' ? 'Sign up' : 'Sign in'}
                        </Link>
                    </p>
                </div>
                <RegisterationForm params={params.page} />
            </div>
        </main>
    )
}

export default page