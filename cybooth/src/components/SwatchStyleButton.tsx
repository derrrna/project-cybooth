import {motion} from "motion/react";

interface swatchStyleButtonProps {
    color: string;
}

export default function SwatchStyleButton({color}: swatchStyleButtonProps) {
    return (
        <motion.button
            className={`border-4 border-white p-4 rounded-xl w-12 h-12  z-[25] shadow-md cursor-pointer bg-[#${color}]`}
            whileHover={{borderColor: "#EBE8E2", scale:1.15}}>
        </motion.button>
    )
}