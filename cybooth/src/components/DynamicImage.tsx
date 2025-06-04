import { motion } from "motion/react";
import {useState} from "react";

interface DynamicImageProps {
    imageSource: string;
    imageStyle?: string;
    scaleUp?: string;
    originalScale: string;
}

export default function DynamicImage({imageSource, imageStyle, scaleUp, originalScale}: DynamicImageProps) {

    const [isHovering, setIsHovering] = useState(false);

    return (
            <motion.img
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}
                src={imageSource} alt="image"
                onMouseOver={()=>setIsHovering(true)}
                onTouchStart={()=>setIsHovering(true)}
                onMouseLeave={()=>setIsHovering(false)}
                onTouchEnd={()=>setIsHovering(false)}
                className={`h-full w-full transform transition-transform duration-500 ${imageStyle} ${isHovering ? `${scaleUp}` : `${originalScale}`}`}
            />
        )
}