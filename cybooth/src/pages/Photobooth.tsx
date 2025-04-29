import DynamicImage from "../components/DynamicImage.tsx";
import Webcam from 'react-webcam';
import {useState, useRef, useEffect} from "react";
import PhotoPreview from "../components/PhotoPreview.tsx";
import { v4 as uuidv4 } from 'uuid';
import LogoBorder from "../components/LogoBorder.tsx";

export default function Photobooth() {

    const [totalNumPhotos, setTotalNumPhotos] = useState(0)
    const webcamRef = useRef(null);
    const [showCountdown, setShowCountdown] = useState(false);
    const [currentCountdown, setCurrentCountdown] = useState(5);

    const [savedPhotos, setSavedPhotos] = useState([
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'}
    ])

    const handleCaptureClick = () => {

        // Set countdown to be active if it is already not.
        if (!showCountdown) {
            setShowCountdown(true)

            setTimeout(()=> {
                // Set the countdown to be inactive once the countdown is finished.
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

    useEffect(() => {

        // If countdown is active and the current countdown value is more than 0,
        if (showCountdown && currentCountdown > 0) {
            // Continue to decrement the countdown display value.
            const intervalId = setInterval(() => setCurrentCountdown(prevSecond => prevSecond - 1), 1000)
            return () => clearInterval(intervalId )
        }

    }, [showCountdown, currentCountdown]);

    return (
        <div className={'overflow-hidden w-screen h-screen flex'}>

            {/* chromix layer background 1 - visible for all */}
            <div className={"w-full h-full absolute flex overflow-hidden opacity-40"}>
                <img src={'background/chromix_29.png'} className={'scale-90 lg:scale-90 md:scale-100 lg:translate-y-1/5 lg:-translate-x-2/9 ' +
                    'lg:object-contain lg:rotate-0 rotate-180 object-cover'} />
            </div>

            {/* chromix layer background 1 - visible for laptop only */}
            <div className={'hidden w-full h-full absolute lg:flex overflow-hidden opacity-40'}>
                <img src={'background/chromix_40.png'} className={'scale-25 -translate-y-5/11 translate-x-1/4'}/>
                <img src={'background/chromix_28.png'} className={'scale-40  translate-y-2/5 rotate-10'}/>
                <img src={'background/chromix_34.png'} className={'scale-65 -translate-x-3/5 -translate-y-2/7 rotate-165'}/>
            </div>

            {/* flower layer background 1 - visible for mobile, ipads, laptop */}
            <div className={"w-full h-full absolute flex overflow-hidden"}>
                <DynamicImage imageSource={"background/Flower1.png"}
                              imageStyle={'z-[20] rotate-90 translate-y-4/9 -translate-x-2/5 lg:-translate-x-1/6 object-contain'}
                              scaleUp={'lg:scale-45 md:scale-35 scale-50'} originalScale={'lg:scale-40 md:scale-30 scale-40'}/>
                <DynamicImage imageSource={"background/Flower1.png"}
                              imageStyle={'z-[20] -rotate-85 lg:rotate-180 -translate-y-5/11 -translate-x-5/8 lg:-translate-y-2/5 ' +
                                  'lg:-translate-x-4/9 xl:-translate-x-2/9 object-contain'}
                              scaleUp={'lg:scale-40 md:scale-45 scale-60'} originalScale={'lg:scale-30 md:scale-40 scale-50'}/>
            </div>

            {/* flower layer background 2 - visible only on laptop */}
            <div className={'hidden w-full h-full absolute lg:flex overflow-hidden'}>
                <DynamicImage imageSource={"background/Flower2.png"} originalScale={'scale-20'} scaleUp={'scale-25'}
                              imageStyle={'z-[20] rotate-45 translate-y-2/5 translate-x-4/9 object-contain'}/>
            </div>

            {/* logo logoborder background - visible on both mobile and laptop TODO resize*/}
            <LogoBorder/>

            {/* content layer */}
            <div className={'w-full h-full absolute flex flex-col overflow-hidden justify-center items-center'}>
                <div className={'bg-[#FF4A8B] z-[18] w-3/5 lg:w-1/6 p-2 lg:mt-[4vh] rounded-tr-4xl rounded-tl-4xl flex justify-center items-center'}>
                    {/*TODO Add buttons here for photo preview*/}
                    <p className={'text-[#FFFFFF] text-xs lg:text-md font-neuropol-x m-0.5'}>cheese ★</p>
                </div>

                {/* Webcam */}
                <Webcam
                    className={'z-[18] rounded-3xl object-cover h-3/5 w-3/4 lg:w-3/7 lg:h-5/7'}
                    audio={false}
                    screenshotFormat={"image/jpeg"}
                    screenshotQuality={1}
                    imageSmoothing={true}
                    ref={webcamRef}
                />

                {/* Capture button */}
                <button
                    className={'bg-[#FF4A8B] w-1/5 h-1/15 md:w-1/6 lg:w-1/15 lg:h-1/15 z-[28] flex justify-center drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)] ' +
                        'rounded-br-3xl rounded-bl-3xl hover:bg-[#fa2d77] cursor-pointer'}
                    onClick = {handleCaptureClick}>
                    <img src={'icons/camera-icon.svg'} alt="camera icon" className={'w-1/4'}/>
                </button>
            </div>

            {/* Photo Preview component - visible on laptop only */}
            <div className={'w-full h-full absolute hidden lg:flex overflow-hidden justify-end pr-[6vw] z-18'}>
                <PhotoPreview imageList={savedPhotos} />
            </div>

            {/* Countdown - active when capture button is pressed. */}
            <div className={`w-full h-full absolute flex justify-center items-center ${showCountdown ? '' : 'hidden'}`}>
                <p className={'text-white text-6xl z-30 animate-[ping_1.1s_ease-in-out_5] font-press2p'}>{currentCountdown}</p>
            </div>

        </div>
    )
}

