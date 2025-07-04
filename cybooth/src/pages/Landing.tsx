import { motion } from "motion/react";
import {Link} from "react-router-dom";

export default function Landing(){
    return (
        <motion.div
            className={'overflow-hidden w-screen h-screen '}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0, ease: "easeIn" }}
        >
            {/* Background */}
            <div className={' absolute w-full h-full flex'}>

                {/*Visible on laptop only*/}
                <div className={'hidden lg:flex w-3/4 h-full'}>
                    <img src={'landingBg/chromix_10.png'} className={'opacity-50 ml-auto -translate-y-1/2 translate-x-1/4'}/>
                </div>

                {/*Visible on all screens*/}
                <div className={'w-full lg:w-1/2 h-full overflow-hidden'}>
                    <img src={'landingBg/chromix_35.png'}
                         className={'scale-150 -translate-x-1/2 -translate-y-1/3 lg:-translate-x-0 lg:scale-90 opacity-75 lg:-translate-y-1/4'}/>
                    <img src={'landingBg/chromix_31.png'} className={'hidden lg:flex -translate-y-1/2 scale-100 translate-x-[12.5%] opacity-30'}/>
                    <img src={'landingBg/chromix_10.png'} className={'scale-125 lg:hidden flex opacity-50 -translate-y-[12.5%] rotate-180'} />
                </div>

            </div>

            {/* Content */}
            <div className={'absolute w-full h-full flex flex-col lg:flex-row'}>

                {/* Text Content*/}
                <div className={'w-full lg:w-3/5 flex flex-col z-20 items-center justify-center cursor-default'}>

                    {/* Text */}
                    <div className={'lg:pt-20 lg:z-20 cursor-default'}>
                        <motion.h2
                            className={'font-Vipna text-[#FF4A8B] text-sm sm:text-base cursor-pointer'}
                            whileHover={{ color: '#E4447E' }}>
                            cybooth
                        </motion.h2>

                        <motion.h1
                            className={'font-neuropol-x text-3xl sm:text-4xl lg:text-7xl '}
                            animate={{ color: ["#FF4A8B", "#E4447E", "#FF4A8B"] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                            your digital <br/> photobooth.
                        </motion.h1>

                        <motion.p
                            className={' mt-3 text-[#98C2E9] font hidden lg:flex'}
                        >
                            a photobooth experience from your own home, in three steps. <br/>
                            Snap photos, customize the photostrip and download immediately!
                        </motion.p>

                        {/*Button*/}
                        <motion.div
                            className={'bg-[#FF4A8B] rounded-lg w-1/6 lg:w-[12.5%] flex justify-center mt-20 z-20'}
                            whileHover={{ backgroundColor: '#E4447E' }}
                            whileTap={{scale:0.9}}
                        >
                            <Link to={'/photobooth'}>
                                <p className={'text-white font-press2p text-[0.6em] tracking-wide p-2'}>start</p>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Sample Photostrip Image */}
                <div className={'w-1/2 sm:w-2/5 flex justify-center h-full lg:p-20'}>
                    <motion.img
                        src={'sample_photostrip.png'}
                        className={'-rotate-10 lg:-rotate-0 -translate-y-[12.5%] sm:-translate-y-[10%] rounded-2xl border-4 border-[#FFAFCC] object-fill ' +
                            'shadow-[5px_6px_11.9px_3px_rgba(0,0,0,0.15)] z-20 lg:-translate-y-0'}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>


        </motion.div>
    )
}