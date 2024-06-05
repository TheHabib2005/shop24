"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'

const CheckIndex = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const email = params.get('email');
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
            <div className="max-w-xl px-5 text-center">
                <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Check your inbox</h2>
                <p className="mb-2 text-lg text-zinc-500"> We’ve sent you a verification link to the email address <Link href={"https://mail.google.com/"} className="font-medium text-indigo-500">{email}</Link>.</p>
                <Link href={"/login"}>Go To Login</Link>
            </div>
        </div>
    )
}

export default CheckIndex