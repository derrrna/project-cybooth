import {motion} from "motion/react";

interface saveOptionButtonProps {
    iconSrc: string;
}

export default function SaveOptionButton({iconSrc}: saveOptionButtonProps) {
    return (
        <motion.button
            className={'bg-[#FF4A8B] rounded-lg w-1/5 flex p-1 pl-2 pr-2 items-center justify-center z-[30] cursor-pointer'}
            whileHover={{backgroundColor: "#fa2d77"}}>
            <motion.img whileHover={{scale: 1.1}} src={iconSrc} className={'scale-75'}/>
        </motion.button>
    )
}