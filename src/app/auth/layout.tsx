'use client'

import gsap from 'gsap';
import Image from 'next/image'
import React, { FC, useEffect, useRef } from 'react'

const layout: FC<LayoutProps> = ({ children }) => {
    const logoRef = useRef(null)

    useEffect(() => {
        gsap.from(logoRef.current, {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.5,
            ease: 'bounce.out',
        });
    }, []);
    return (
        <section className="flex justify-around items-center w-svw h-svh overflow-hidden">
            <Image
                src="/login_signup.jpg"
                alt="wallpaper for registeration page"
                className='hidden md:block contrast-150 brightness-110 saturate-100 -z-50'
                layout='fill'
                objectFit='cover'
                priority
            />
            <div ref={logoRef}>
                <Image
                    src="/fast-connect-2.svg"
                    alt="fast connect logo"
                    className='w-auto h-16'
                    width={200}
                    height={200}
                    priority
                />
            </div>
            {children}
        </section >
    )
}

export default layout