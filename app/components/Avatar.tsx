'use client';
import Image from "next/image";

interface AvatarProps {
    src?: string | null | undefined;
}

const Avvatar: React.FC<AvatarProps>  = ({
    src
}) => {
    return ( <div>
       <Image 
        className=" rounded-full"
        height={30}
        width={30}
        alt="Avatar"
        priority
        src={src || "/images/placeholder.jpg" }   
       /> 
    </div>  );
}
 
export default Avvatar ;