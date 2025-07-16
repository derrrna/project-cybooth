import { motion } from "motion/react";
import {Link} from "react-router-dom";

// Transforms normal Link component into a Motion animate-able component.
const MotionLink = motion(Link)

/**
 * Landing Page Component
 *
 * TODO: make mobile responsive.
 * @constructor
 */
export default function Landing() {

    return (
        <motion.div
            className={'overflow-hidden w-screen h-screen relative'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeIn" }}
        >
            {/* BACKGROUND SECTION */}
            <div className={'absolute w-full h-full flex'}>

                {/* Chromix Blobs - Visible for all screens */}
                <div className={'hidden lg:block w-3/4 h-full relative'}>
                    <img src={'landingBg/chromix_10.png'}
                         className={'absolute opacity-50 bottom-[30%] left-[25%] scale-90 xl:bottom-[40%]'}
                         aria-hidden={true}
                         alt={""}/>
                </div>
                <div className={'w-full lg:w-1/2 h-full overflow-hidden relative'}>
                    <img src={'landingBg/chromix_35.png'}
                         aria-hidden={true}
                         alt={""}
                         className={'absolute opacity-75 bottom-[50%] rotate-80 scale-120 lg:rotate-0 lg:scale-90 ' +
                             'lg:bottom-[25%] xl:scale-130 xl:bottom-[45%] xl:left-[20%]'}/>

                    <img src={'landingBg/chromix_31.png'}
                         alt={""}
                         aria-hidden={true}
                         className={'hidden absolute opacity-30 lg:block lg:top-[50%] xl:scale-120 xl:left-[15%] xl:top-[60%]'}/>

                    <img src={'landingBg/chromix_10.png'}
                         alt={""}
                         aria-hidden={true}
                         className={'absolute opacity-50 rotate-180 scale-150 top-[70%] lg:hidden '} />
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className={'absolute w-full h-full flex flex-col lg:flex-row'}>

                <div className={'w-full lg:w-3/5 flex flex-col z-20 items-center justify-center cursor-default'}>

                    <div className={'pt-18 lg:pt-20 lg:z-20 cursor-default'}>

                        {/* Logo */}
                        <h2 className={'font-Vipna text-primary text-sm sm:text-sm text-[#FF4A8B]'}>
                            cybooth
                        </h2>

                        {/* Slogan */}
                        <motion.h1
                            className={'font-neuropol-x text-2xl sm:text-4xl lg:text-7xl '}
                            animate={{ color: ["#FF4A8B", "#E4447E", "#FF4A8B"] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                            your digital <br/> photobooth.
                        </motion.h1>

                        {/* Brief explanation */}
                        <motion.p className={' mt-3 text-[#98C2E9] font hidden lg:flex'}>
                            a photobooth experience from your own home, in three steps. <br/>
                            Snap photos, customize the photostrip and download immediately!
                        </motion.p>

                        {/* Start Button */}
                        <MotionLink
                            to={'/photobooth'}
                            whileHover={{ backgroundColor: '#E4447E' }}
                            whileTap={{scale:0.9}}
                            className={'text-white font-press2p text-[0.6em] tracking-wide p-2 bg-[#FF4A8B] ' +
                                'rounded-lg flex justify-center mt-20 z-2 w-[35%] ml-auto lg:w-[12.5%] lg:ml-0'}>
                            start
                        </MotionLink>
                    </div>
                </div>

                {/* Sample Photostrip Image */}
                <div className={'w-2/5 flex h-screen justify-center items-center'}>
                    <motion.img
                        src={'sample_photostrip.png'}
                        alt={'photostrip example image'}
                        className={'-rotate-10 lg:-rotate-0 rounded-2xl border-4 border-[#FFAFCC] ' +
                            'shadow-[5px_6px_11.9px_3px_rgba(0,0,0,0.15)] -translate-y-[20%] lg:max-w-1/3 lg:-translate-y-0'}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}/>
                </div>
            </div>
        </motion.div>
    )
}