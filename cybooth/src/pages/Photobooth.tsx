import DynamicImage from "../components/DynamicImage.tsx";
import Webcam from 'react-webcam';
import {useState, useRef, useEffect} from "react";
import PhotoPreview from "../components/PhotoPreview.tsx";
import { v4 as uuidv4 } from 'uuid';
import LogoBorder from "../components/LogoBorder.tsx";
import { motion } from "motion/react";

/**
 * Photobooth Page.
 */
export default function Photobooth() {

    /**
     * The current total number of photos.
     */
    const [totalNumPhotos, setTotalNumPhotos] = useState(0)

    /**
     * TODO
     */
    const webcamRef = useRef(null);

    /**
     * Boolean set to True if countdown should be displayed.
     */
    const [showCountdown, setShowCountdown] = useState(false);

    /**
     * Current value of the countdown as an integer. Initialised to 5.
     */
    const [currentCountdown, setCurrentCountdown] = useState(5);

    /**
     * Array containing the 5 most recent photos taken.
     * Formatted as ID and image source.
     */
    const [savedPhotos, setSavedPhotos] = useState([
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'}
    ])
    
    const [toggleViewPhotos, setToggleViewPhotos] = useState(false)

    /**
     * Called when the capture button is pressed.
     */
    const handleCaptureClick = () => {

        // Set countdown to be active.
        if (!showCountdown) {
            setShowCountdown(true)

            setTimeout(()=> {
                // Set the countdown to be inactive only once the countdown is finished.
                setShowCountdown(false)
                setCurrentCountdown(5);

                // Calculate the index of the new photo and create a copy of the current saved photos.
                const tempPhotos = [...savedPhotos]
                const newPhotoIndex = totalNumPhotos % 4

                // Take the new photo and save it into the array with its correct index.
                const newPhoto = webcamRef.current.getScreenshot(1920, 1080)
                tempPhotos[newPhotoIndex] = {id: uuidv4(), image: newPhoto}
                setSavedPhotos(tempPhotos)

                // Update the total number of photos.
                setTotalNumPhotos(prevTotalNumPhotos => prevTotalNumPhotos + 1)

            }, 5000)
        }
    }

    /**
     * Changes the value of the countdown given the countdown is active and the current
     * countdown value is more than 0.
     */
    useEffect(() => {

        // If countdown is active and the current countdown value is more than 0,
        if (showCountdown && currentCountdown > 0) {
            // Continue to decrement the countdown display value.
            const intervalId = setInterval(() => setCurrentCountdown(prevSecond => prevSecond - 1), 1000)
            return () => clearInterval(intervalId )
        }

    }, [showCountdown, currentCountdown]);

    return (

        <motion.div
            className={'overflow-hidden w-screen h-screen flex'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0, ease: "easeIn"}}
        >

            {/* chromix layer photoboothBg 1 - visible for all */}
            <div className={"w-full h-full absolute flex overflow-hidden opacity-40"}>
                <img src={'photoboothBg/chromix_29.png'} className={'scale-90 lg:scale-90 md:scale-100 lg:translate-y-1/5 lg:-translate-x-2/9 ' +
                    'lg:object-contain lg:rotate-0 rotate-180 object-cover'} />
            </div>

            {/* chromix layer photoboothBg 1 - visible for laptop only */}
            <div className={'hidden w-full h-full absolute lg:flex overflow-hidden opacity-40'}>
                <img src={'photoboothBg/chromix_40.png'} className={'scale-25 -translate-y-5/11 translate-x-1/4'}/>
                <img src={'photoboothBg/chromix_28.png'} className={'scale-40  translate-y-2/5 rotate-10'}/>
                <img src={'photoboothBg/chromix_34.png'} className={'scale-65 -translate-x-3/5 -translate-y-2/7 rotate-165'}/>
            </div>

            {/* flower layer photoboothBg 1 - visible for mobile, ipads, laptop */}
            <div className={"w-full h-full absolute flex overflow-hidden"}>
                <DynamicImage imageSource={"photoboothBg/Flower1.png"}
                              imageStyle={'z-[20] rotate-90 translate-y-4/9 -translate-x-2/5 lg:-translate-x-1/6 object-contain'}
                              scaleUp={'lg:scale-45 md:scale-35 scale-50'} originalScale={'lg:scale-40 md:scale-30 scale-40'}/>
                <DynamicImage imageSource={"photoboothBg/Flower1.png"}
                              imageStyle={'z-[20] -rotate-85 lg:rotate-180 -translate-y-5/11 -translate-x-5/8 lg:-translate-y-2/5 ' +
                                  'lg:-translate-x-4/9 xl:-translate-x-2/9 object-contain'}
                              scaleUp={'lg:scale-40 md:scale-45 scale-60'} originalScale={'lg:scale-30 md:scale-40 scale-50'}/>
            </div>

            {/* flower layer photoboothBg 2 - visible only on laptop */}
            <div className={'hidden w-full h-full absolute lg:flex overflow-hidden'}>
                {/*<DynamicImage imageSource={"photoboothBg/Flower2.png"} originalScale={'scale-20'} scaleUp={'scale-25'}*/}
                {/*              imageStyle={'z-[20] rotate-45 translate-y-2/5 translate-x-4/9 object-contain'}/>*/}
            </div>

            {/* logo logoborder photoboothBg - visible on both mobile and laptop TODO resize*/}
            <LogoBorder/>

            {/* content layer */}
            <div className={'w-full h-full absolute flex flex-col overflow-hidden justify-center items-center'}>

                {/* Topbar */}
                <div className={'bg-[#FF4A8B] z-[28] w-3/5 lg:w-1/6 p-2 lg:mt-[4vh] rounded-tr-4xl rounded-tl-4xl flex ' +
                    ' drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] justify-center '}>

                    <p className={'text-[#FFFFFF] text-xs lg:text-md font-neuropol-x m-0.5'}>cheese ★</p>

                    <motion.button
                        className={`w-1/5 h-full cursor-pointer z-[20] rounded-3xl p-1 ml-3 flex ${toggleViewPhotos ? 'justify-end' : 'justify-start'}`}
                        onClick={() => setToggleViewPhotos(!toggleViewPhotos)}
                        animate={{backgroundColor: toggleViewPhotos ? '#ffffff' : '#E4447E',}}
                        transition={{backgroundColor: {duration: 0.2, ease: 'easeInOut'}}}>

                        <motion.div
                            className={'w-2/5 h-full bg-white z-[38] rounded-3xl'}
                            layout
                            animate={{ backgroundColor: toggleViewPhotos ? '#E4447E' : '#ffffff'}}
                            whileHover={{ backgroundColor: toggleViewPhotos ? '#E40087': '#ECECEC'}}
                            transition={{type: "spring", visualDuration: 0.2, bounce: 0.2}}
                        />
                    </motion.button>

                </div>

                {/* Webcam */}
                <Webcam
                    className={'z-[19] rounded-3xl object-cover h-3/5 w-3/4 lg:w-3/7 lg:h-5/7'}
                    audio={false}
                    screenshotFormat={"image/jpeg"}
                    screenshotQuality={1}
                    imageSmoothing={true}
                    ref={webcamRef}
                />

                {/* Capture button */}
                <motion.button
                    className={'bg-[#FF4A8B] w-1/5 h-1/15 md:w-1/6 lg:w-1/15 lg:h-1/15 z-[28] flex justify-center ' +
                        'drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] rounded-br-3xl rounded-bl-3xl cursor-pointer'}

                    whileHover={{backgroundColor: "#fa2d77"}}

                    onClick = {handleCaptureClick}>
                    <motion.img src={'icons/camera-icon.svg'} alt="camera icon" className={'w-1/4'}
                                whileHover={{scale:1.2}} whileTap={{scale: 1.05}}/>
                </motion.button>
            </div>

            {/* Photo Preview component - visible on laptop only */}
            <motion.div className={`w-full h-full absolute flex overflow-hidden lg:pr-[6vw] lg:z-[18] justify-center lg:justify-end`}
                        animate = {{opacity: toggleViewPhotos ? 0 : 1}}
                        transition={{opacity: {duration: 0.2}}}>
                <PhotoPreview imageList={savedPhotos} />
            </motion.div>

            {/* Countdown - active when capture button is pressed. */}
            <div className={`w-full h-full absolute flex justify-center items-center ${showCountdown ? '' : 'hidden'}`}>
                <p className={'text-white text-6xl z-30 animate-[ping_1.1s_ease-in-out_5] font-press2p'}>{currentCountdown}</p>
            </div>

        </motion.div>
    )
}

