import Webcam from 'react-webcam';
import {useState, useRef, useEffect} from "react";
import PhotoPreview from "../components/PhotoPreview.tsx";
import LogoBorder from "../components/LogoBorder.tsx";
import { motion } from "motion/react";
import { usePhotos } from "../hooks/usePhotos.tsx";
import MobilePage from "../components/MobilePage.tsx";

/**
 * Photobooth Page Component
 */
export default function Photobooth() {

    const COUNTDOWN_LENGTH = 5;
    const PHOTO_WIDTH = 1080;
    const PHOTO_HEIGHT = 1920;

    const [currentCountdown, setCurrentCountdown] = useState(COUNTDOWN_LENGTH);
    const [showCountdown, setShowCountdown] = useState(false);
    const webcamRef = useRef(null);
    const {addPhoto} = usePhotos()

    // Tracks whether photo preview should be displayed
    const [toggleViewPhotos, setToggleViewPhotos] = useState(false)

    // Function that is called when the capture button is pressed.
    const handleCaptureButton = () => {
        setCurrentCountdown(COUNTDOWN_LENGTH);
        setShowCountdown(true)
    }

    const takePhoto = () => {
        console.log('takePhoto called');

        // Grab photo from the webcam
        const newPhoto = webcamRef.current.getScreenshot(PHOTO_HEIGHT, PHOTO_WIDTH)
        if (newPhoto) {
            addPhoto(newPhoto);
        }
    }

    //TODO: causing double photo taken. need to fix.

    // Tracks showCountdown.
    useEffect(() => {

        // If the countdown should be displayed.
        if (showCountdown) {

            // Run a function that is conducted every one second.
            // Use functional setState here because its dependent on previous value
            const intervalId = setInterval(() => {

                //TODO
                console.log("tick", intervalId, Date.now());

                setCurrentCountdown(prevSecond => {
                    // Every second, the countdown value is decremented by one.
                    const currentSecond = prevSecond - 1;

                    // Once the counter reaches zero,
                    if (currentSecond <= 0) {
                        // Clear interval
                        clearInterval(intervalId)
                        // Hide the countdown (don't use functional since we don't care about the prev state)
                        setShowCountdown(false)

                    }
                    return currentSecond
                })

            }, 1000)

            // Take the photo
            const timeoutId = setTimeout(takePhoto, 5000)

            return () => {
                clearInterval(intervalId)
                clearTimeout(timeoutId)
            }
        }
    }, [showCountdown]);

    return (

        <motion.div
            className={'overflow-hidden w-screen h-screen relative'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeIn"}}
        >

            <MobilePage/>

            <div className={'hidden lg:flex'}>
                {/* BACKGROUND SECTION */}

                {/* Chromix Blobs - Visible for all screens */}
                <img src={'background/chromix_29.png'} aria-hidden={true} alt={""}
                     className={'absolute opacity-40 lg:scale-[45%] lg:left-[35%] lg:-top-[85%] lg:rotate-10'}/>

                {/* Chromix Blobs - Visible for laptop only */}
                <img src={'background/chromix_40.png'} aria-hidden={true} alt={""}
                     className={'absolute hidden opacity-50 lg:block lg:scale-[15%] lg:-bottom-[12%] lg:right-[10%]'}/>
                <img src={'background/chromix_28.png'} aria-hidden={true} alt={""}
                     className={'absolute hidden opacity-45 lg:block lg:scale-[20%] lg:left-[25%] lg:-top-[18%]'}/>
                <img src={'background/chromix_34.png'} aria-hidden={true} alt={""}
                     className={'hidden absolute opacity-40 lg:block lg:scale-[45%] lg:right-[30%] lg:-top-[35%]'}/>

                {/* Flowers - Visible for all screen */}
                <div className={"w-full h-full absolute flex overflow-hidden"}>
                    <motion.img
                        src={"background/Flower1.png"} aria-hidden={true} alt={""}
                        initial={{ scale: 0.4 }} whileHover={{ scale: 0.48 }} transition={{ duration: 0.3, ease: "easeOut" }}
                        className={'z-[50] rotate-90 translate-y-4/9 -translate-x-2/5 lg:-translate-x-1/6 object-contain'}/>
                    <motion.img
                        src={"background/Flower1.png"} aria-hidden={true} alt={""}
                        initial={{ scale: 0.3 }} whileHover={{ scale: 0.4 }} transition={{ duration: 0.3, ease: "easeOut" }}
                        className={'z-[40] -rotate-85 lg:rotate-180 -translate-y-5/11 -translate-x-5/8 lg:-translate-y-2/5 ' +
                            'lg:-translate-x-4/9 xl:-translate-x-2/9 object-contain'}/>
                </div>

                {/* LOGO BORDER */}
                <LogoBorder/>

                {/* CONTENT */}
                <div className={'w-screen h-screen absolute flex flex-col justify-center items-center'}>

                    {/* Topbar Section - Above Webcam */}
                    <div className={'bg-[#FF4A8B] lg:w-1/5 p-2 lg:mt-[4vh] rounded-tr-4xl rounded-tl-4xl flex ' +
                        'drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] justify-center z-[30]'}>

                        <p className={'text-[#FFFFFF] text-xs lg:text-md font-neuropol-x m-0.5'}>cheese ★</p>

                        {/* Toggle View PhotoPreview Button */}
                        <motion.button
                            className={`w-1/5 h-full cursor-pointer z-[38] rounded-3xl p-1 ml-3 flex ${toggleViewPhotos ? 'justify-end' : 'justify-start'}`}
                            onClick={() => setToggleViewPhotos(!toggleViewPhotos)}
                            animate={{backgroundColor: toggleViewPhotos ? '#ffffff' : '#E4447E',}}
                            transition={{backgroundColor: {duration: 0.2, ease: 'easeInOut'}}}>
                            <motion.div
                                className={'w-2/5 h-full bg-white z-[38] rounded-3xl p-1'} layout
                                animate={{ backgroundColor: toggleViewPhotos ? '#E4447E' : '#ffffff'}}
                                whileHover={{ backgroundColor: toggleViewPhotos ? '#E40087': '#ECECEC'}}
                                transition={{type: "spring", visualDuration: 0.2, bounce: 0.2}}>

                                {/*TODO */}
                                <img src={'icons/eye-icon.svg'}/>

                            </motion.div>
                        </motion.button>

                    </div>

                    {/* Webcam */}
                    <Webcam
                        className={'z-[38] rounded-3xl object-cover h-3/5 w-3/4 lg:w-3/7 lg:h-5/7'}
                        audio={false}
                        screenshotFormat={"image/jpeg"}
                        screenshotQuality={1}
                        imageSmoothing={true}
                        ref={webcamRef}
                    />

                    {/* Capture Button */}
                    <motion.button
                        className={'bg-[#FF4A8B] w-1/5 h-1/15 md:w-1/6 lg:w-1/15 lg:h-1/15 z-[38] flex justify-center ' +
                            'drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] rounded-br-3xl rounded-bl-3xl cursor-pointer'}
                        whileHover={{backgroundColor: "#fa2d77"}} onClick = {handleCaptureButton}>
                        <motion.img src={'icons/camera-icon.svg'} alt={"camera icon"} className={'w-1/4'}
                                    whileHover={{scale:1.2}} whileTap={{scale: 1.05}}/>
                    </motion.button>
                </div>

                {/* Photo Preview Component - visible on laptop only */}
                <motion.div className={`w-full h-full absolute flex overflow-hidden lg:pr-[6vw] justify-center lg:justify-end`}
                            animate = {{opacity: toggleViewPhotos ? 0 : 1}}
                            transition={{opacity: {duration: 0.2}}}>
                    <PhotoPreview/>
                </motion.div>

                {/* Countdown - active when capture button is pressed. */}
                <div className={`w-full h-full absolute flex justify-center items-center ${showCountdown ? '' : 'hidden'}`}>
                    <p className={'text-white text-6xl z-30 animate-[ping_1.1s_ease-in-out_5] font-press2p z-[40]'}>{currentCountdown}</p>
                </div>
            </div>

        </motion.div>
    )
}

