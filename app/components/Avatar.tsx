'use client';
import Image from "next/image";

const Avvatar  = () => {
    return ( <div>
       <Image 
        className=" rounded-full"
        height={30}
        width={30}
        alt="Avatar"
        priority
        src="/images/placeholder.jpg"    
       /> 
    </div>  );
}
 
export default Avvatar ;