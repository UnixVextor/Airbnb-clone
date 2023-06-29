"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <Image 
            src="/images/logo.png"
            className="hidden md:block cursor-pointer pr-2"
            height="100"
            width="100"
            alt="Logo"
            priority
            style={{objectFit: "contain"}}
        />
    );
}
 
export default Logo;