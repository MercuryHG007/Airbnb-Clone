'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div
            className="flex flex-row items-center gap-1 cursor-pointer"
        >
            <Image
                alt="logo"
                className="" 
                height="30"
                width="30"
                src='/images/logo.png'
            />
            <p
                className="hidden md:block text-rose-500 font-extrabold text-xl pt-1"
            >
                Mercurybnb
            </p>
        </div>
    )
}

export default Logo;