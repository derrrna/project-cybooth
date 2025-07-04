import { motion } from "motion/react";
import LogoBorder from "../components/LogoBorder.tsx";
import SaveOptionButton from "../components/SaveOptionButton.tsx";
import SwatchStyleButton from "../components/SwatchStyleButton.tsx";

export default function PhotoEditor() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0, ease: "easeIn" }}>

            {/* Background */}
            <div className={'w-full h-full absolute flex overflow-hidden opacity-90'}>
                <div className={'w-1/2 h-full'}>
                    <img src={'/editorBg/chromix_15.png'} className={'scale-70 -translate-y-2/5 -translate-x-1/8'}/>
                    <img src={'/editorBg/chromix_39.png'} className={'scale-80 -translate-y-2/3 -translate-x-1/8'}/>
                </div>

                <div className={'w-1/2 h-full'}>
                    <img src={'/editorBg/chromix_40.png'} className={'scale-75 -translate-y-1/5 rotate-20'}/>
                    <img src={'/editorBg/chromix_26.png'} className={'scale-75 -translate-y-3/7 translate-x-1/5 '}/>
                </div>
            </div>

            <LogoBorder/>

            {/* Customization Layer */}
            <div className={'w-full h-full absolute overflow-hidden flex'}>
                <div className={'w-1/2 h-full flex justify-center items-center'}>

                    {/* Save Section */}
                    <div className={'bg-[#FFF2F7] w-1/3 h-1/5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-3xl p-6 flex flex-col'}>
                        <h2 className={'w-full text-center text-[#FF4A8B] font-press2p'}>save</h2>
                        <div className={'flex w-full mt-5 gap-5 justify-center'}>
                            <SaveOptionButton iconSrc={'icons/pdf-icon.svg'}/>
                            <SaveOptionButton iconSrc={'icons/image-icon.svg'}/>
                            <SaveOptionButton iconSrc={'icons/print-icon.svg' }/>
                        </div>
                    </div>
                </div>

                {/* Style & Orientation Settings*/}
                <div className={'w-1/2 h-full flex flex-col justify-center items-center'}>

                    {/* Style Section */}
                    <div className={'bg-[#FFF2F7] w-1/3 h-1/3 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-3xl p-6 flex items-center flex-col z-[20]'}>
                        <h3 className={'text-[#FF4A8B] mb-5 font-w95fa text-xl'}>style</h3>

                        {/* Themed */}
                        <div className={'w-full  flex justify-between z-[25]'}>
                            <SwatchStyleButton/>
                            <SwatchStyleButton/>
                            <SwatchStyleButton/>
                            <SwatchStyleButton/>
                        </div>

                        {/* Simple*/}
                        <div className={'w-full flex m-4 justify-between'}>
                            <SwatchStyleButton/>
                            <SwatchStyleButton/>
                            <SwatchStyleButton/>
                            <SwatchStyleButton/>
                        </div>

                    </div>

                    {/* Orientation Section */}
                    <div className={'flex bg-[#FFF2F7] w-[22%] h-1/15 mt-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl p-5 justify-between items-center mr-45'}>
                        <h3 className={'font-w95fa text-[#FF4A8B] text-xl'}>orientation</h3>
                        <motion.button
                            className={'bg-[#FF4A8B] rounded-lg w-1/4 p-2 z-[25] cursor-pointer'}
                            whileHover={{backgroundColor: "#fa2d77"}}>
                            <img src={'/icons/rotate-icon.svg'}/>
                        </motion.button>
                    </div>

                </div>
            </div>

            {/* Photo-strip Preview */}
            <div className={'w-full h-full absolute flex overflow-hidden flex justify-center items-center z-[10]'}>
                <img src={'sample_photostrip.png'} className={'rounded-2xl border-4 border-[#FFAFCC] ' +
                    'shadow-[5px_6px_11.9px_3px_rgba(0,0,0,0.15)] z-20 h-5/6'}/>
            </div>

        </motion.div>
    )

}