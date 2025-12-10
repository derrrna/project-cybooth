import { motion } from "motion/react";
import LogoBorder from "../components/LogoBorder.tsx";
import SaveOptionButton from "../components/SaveOptionButton.tsx";
import SwatchStyleButton from "../components/SwatchStyleButton.tsx";
import {usePhotos} from "../hooks/usePhotos.tsx";
import {useRef} from "react";
import html2canvas from "html2canvas";
import {usePhotoBackground} from "../hooks/usePhotoBackground.tsx";

export default function PhotoEditor() {

    const {photos} = usePhotos();
    const photoRef = useRef(null);

    const {photoBackground} = usePhotoBackground()

    const handleSaveButton = async () => {

        if (photoRef.current) {
            // Create the canvas, convert to a blob
            const canvas = await html2canvas(photoRef.current)
            canvas.toBlob((blob) => {

                // If blob is not empty.
                if (blob) {
                    // Save as link.
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = "photostrip.png";
                    link.click()
                }
            }, "image/jpeg");
        }
    }

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
                <div className={'w-1/2 h-full flex justify-end items-center'}>

                    {/* Save Section */}
                    <div className={'bg-[#FFF2F7] w-1/3 h-1/5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-3xl p-6 flex flex-col'}>
                        <h2 className={'w-full text-center text-[#FF4A8B] font-press2p'}>save</h2>
                        <div className={'flex w-full mt-5 gap-5 justify-center'}>
                            <SaveOptionButton iconSrc={'icons/pdf-icon.svg'} handler={handleSaveButton}/>
                            <SaveOptionButton iconSrc={'icons/image-icon.svg'} handler={handleSaveButton}/>
                            <SaveOptionButton iconSrc={'icons/print-icon.svg' } handler={handleSaveButton}/>
                        </div>

                    </div>

                    {/* Line decoration*/}
                    <div className={'w-[35%]'}>
                        <hr className={' border-[#FF4A8B] border-dotted'}/>
                    </div>

                </div>

                {/* Style & Orientation Settings*/}
                <div className={'w-1/2 h-full flex flex-col justify-center items-center'}>

                    {/* Style Section */}
                    <div className={'bg-[#FFF2F7] w-1/3 h-1/3 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-3xl p-6 flex items-center flex-col z-[20]'}>
                        <h3 className={'text-[#FF4A8B] mb-5 font-w95fa text-xl'}>style</h3>

                        {/* Themed */}
                        <div className={'w-full flex justify-between z-[25]'}>
                            <SwatchStyleButton color={"#fcd2af"}/>
                            <SwatchStyleButton color={"#FFFFFF"}/>
                            <SwatchStyleButton color={"#ffc2d1"}/>
                            <SwatchStyleButton color={"#d7c8f3"}/>
                        </div>

                        {/* Simple*/}
                        <div className={'w-full flex m-4 justify-between'}>
                            <SwatchStyleButton color={"url(photostripThemes/black-theme.jpg)"}/>
                            <SwatchStyleButton color={"url(photostripThemes/pink-theme.png)"}/>
                            <SwatchStyleButton color={"url(photostripThemes/green-theme.png)"}/>
                            <SwatchStyleButton color={"url(photostripThemes/purple-theme.png)"}/>
                        </div>

                    </div>

                    {/* Orientation Section */}
                    <div className={'flex bg-[#FFF2F7] w-[22%] h-1/15 mt-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl p-5 justify-between items-center mr-45'}>
                        <h3 className={'font-w95fa text-[#FF4A8B] text-xl'}>orientation</h3>
                        <motion.button
                            className={'bg-[#FF4A8B] rounded-lg w-1/4 p-2 z-[25] cursor-pointer'}
                            whileHover={{backgroundColor: "#fa2d77", scale: 1.1}}>
                            <img src={'/icons/rotate-icon.svg'}/>
                        </motion.button>
                    </div>

                </div>
            </div>

            {/* Photo-strip Preview */}
            <div className={'w-full h-full absolute flex overflow-hidden flex justify-center items-center'}>
                <motion.div className={'overflow-hidden h-full w-full lg:h-4/5 lg:w-1/8 lg:rounded-2xl flex flex-col ' +
                    'drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] justify-center items-center z-10'}
                    animate={{ background: `${photoBackground}`, backgroundSize: 'cover' }}
                    transition={{ duration: 0.5, ease: "easeIn"}}
                    ref={photoRef}>

                    {photos.map((image) => (
                        <div key={image.id} className={'w-8/9 h-1/5 pt-2 pb-2 pr-3 pl-3'}>
                            <motion.img
                                src={image.image} alt={"captured image"}
                                className={'h-full w-full object-cover rounded-xl'}
                                initial={'0.5'} whileHover={{scale: 0.9}}/>
                        </div>
                    ))}

                    {/*<p className={'pt-5 font-w95fa text-2xl'}>*/}
                    {/*    cybooth!*/}
                    {/*</p>*/}

                </motion.div>


            </div>

        </motion.div>
    )

}