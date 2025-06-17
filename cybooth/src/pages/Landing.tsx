import { motion } from "motion/react";
import {Link} from "react-router-dom";

export default function Landing(){
    return (
        <motion.div
            className={'overflow-hidden w-screen h-screen flex'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5.0 }}
        >

            <div className={'w-3/5 flex flex-col'}>
                <div className={' bg-black h-1/4'}>
                    <h2 className={'font-Vipna text-[#FF4A8B] text-lg p-20'}>cybooth</h2>
                </div>

                <div className={'pl-30'}>
                    <h1 className={'text-[#FF4A8B] font-neuropol-x text-5xl pt-10'}>
                       your digital <br/> photobooth.
                    </h1>

                    <p className={' mt-3 text-[#98C2E9]'}>
                        a photobooth experience from your own home, in three steps. <br/>
                        Snap photos, customize the photostrip and download immediately!
                    </p>

                    <motion.div
                        className={'bg-[#FF4A8B] rounded-lg w-1/8 flex justify-center mt-20'}
                        whileHover={{ backgroundColor: '#E4447E' }}
                    >
                        <Link to={'/photobooth'}>
                            <p className={'text-white font-press2p text-[0.6em] tracking-wide p-2'}>start</p>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className={'bg-fuchsia-100 w-2/5'}>

            </div>

        </motion.div>
    )
}