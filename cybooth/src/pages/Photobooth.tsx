import DynamicImage from "../components/DynamicImage.tsx";
import Webcam from 'react-webcam';
import {useState, useRef, useEffect} from "react";
import PhotoPreview from "../components/PhotoPreview.tsx";
import { v4 as uuidv4 } from 'uuid';

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
            {/* grid background*/}
            <div className="w-full absolute overflow-hidden h-full bg-[size:25px_25px] opacity-40 z-[1]
            bg-[linear-gradient(to_right,#FFAFCC_0.5px,transparent_1px),linear-gradient(to_bottom,#FFAFCC_0.5px,transparent_1px)]"/>

            {/* blob layer background 1 - visible only on laptop*/}
            <div className="hidden lg:flex absolute flex-col w-screen h-screen overflow-hidden">
                <img src="/blob2.png" alt="blob" className="w-1/2 h-4/5 -translate-y-2/5 z-[2] object-contain"/>
                <img src="/blob2.png" alt="blob"
                     className="w-1/2 h-3/7 -translate-y-1/8 translate-x-8/9 rotate-180 z-[2] object-contain"/>
            </div>

            {/* blob layer background 2 - visible for mobile, ipads, laptop*/}
            <div className="w-full h-full absolute overflow-hidden flex">
                <div className="w-1/2 h-full relative">
                    <img src="/blob1.png"
                         className="scale-180 lg:scale-70 translate-y-1/3 -translate-x-2/7 z-[3] absolute bottom-0 left-0"/>
                </div>
                <div className="w-1/2 h-full relative">
                    <img src="/blob1.png"
                         className="scale-130 translate-x-1/5 z-[3] -translate-y-1/3 lg:scale-80 rotate-180 absolute right-0"/>
                </div>
            </div>

            {/* flower layer background 1 - visible for mobile, ipads, laptop */}
            <div className={"w-full h-full absolute flex overflow-hidden"}>
                <DynamicImage imageSource={"Flower1.png"}
                              imageStyle={'z-[11] rotate-90 translate-y-3/7 -translate-x-2/5 lg:-translate-x-1/6 object-contain'}
                              scaleUp={'lg:scale-45 scale-60'} originalScale={'lg:scale-40 scale-50'}/>
                <DynamicImage imageSource={"Flower1.png"}
                              imageStyle={'z-[11] -rotate-85 lg:rotate-180 -translate-y-4/10 -translate-x-5/8 lg:-translate-y-2/5 ' +
                                  'lg:-translate-x-4/9 xl:-translate-x-2/9 object-contain'}
                              scaleUp={'lg:scale-45 scale-50'} originalScale={'lg:scale-40 scale-40'}/>
            </div>

            {/* flower layer background 2 - visible only on laptop */}
            <div className={'hidden w-full h-full absolute lg:flex overflow-hidden'}>
                <DynamicImage imageSource={"Flower2.png"} originalScale={'scale-30'} scaleUp={'scale-40'}
                              imageStyle={'z-[11] -rotate-90 -translate-y-3/7 -translate-x-1/3 object-contain'}/>
                <DynamicImage imageSource={"Flower2.png"} originalScale={'scale-30'} scaleUp={'scale-40'}
                              imageStyle={'z-[13] rotate-45 translate-y-4/9 translate-x-1/9 object-contain'}/>
            </div>

            {/* content layer */}
            <div className={'w-full h-full absolute flex flex-col overflow-hidden justify-center items-center'}>
                <div className={'bg-[#FF4A8B] z-[10] w-3/5 lg:w-1/5 p-3 rounded-tr-4xl rounded-tl-4xl flex justify-center items-center'}>
                    {/*TODO Add buttons here for photo preview*/}
                    <p className={'text-[#FFFFFF] text-xs lg:text-xl font-pressstart2p m-1'}>cheese</p>
                    <p className={'text-[#FFFFFF] text-2xl'}>♡</p>
                </div>

                {/* Webcam */}
                <Webcam
                    className={'z-[10] rounded-3xl object-cover h-4/5 w-3/4 lg:w-1/2 lg:h-3/4'}
                    audio={false}
                    screenshotFormat={"image/jpeg"}
                    screenshotQuality={1}
                    imageSmoothing={true}
                    ref={webcamRef}
                />

                {/* Capture button */}
                <button
                    className={'bg-[#FF4A8B] w-1/5 h-1/15 md:w-1/6 lg:w-1/15 lg:h-1/15 z-[10] flex justify-center drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)] ' +
                        'rounded-br-3xl rounded-bl-3xl hover:bg-[#fa2d77] cursor-pointer'}
                    onClick = {handleCaptureClick}>
                    <img src={'camera-icon.svg'} alt="camera icon" className={'w-1/4'}/>
                </button>
            </div>

            {/* Photo Preview component - visible on laptop only */}
            <div className={'w-full h-full absolute hidden lg:flex overflow-hidden justify-end pr-[6vw]'}>
                <PhotoPreview imageList={savedPhotos} />
            </div>

            <div className={`w-full h-full absolute flex justify-center items-center ${showCountdown ? '' : 'hidden'}`}>
                <p className={'text-white font-pressstart2p text-6xl z-15'}>{currentCountdown}</p>
            </div>

        </div>
    )
}

