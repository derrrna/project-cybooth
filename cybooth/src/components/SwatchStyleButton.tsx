import {motion} from "motion/react";

export default function SwatchStyleButton() {
    return (
        <motion.button
            className={'border-4 border-white p-4 rounded-xl w-12 h-12  z-[25] bg-[#CDB4DB] shadow-md cursor-pointer'}
            whileHover={{borderColor: "#EBE8E2", scale:1.15}}>
        </motion.button>
    )
}