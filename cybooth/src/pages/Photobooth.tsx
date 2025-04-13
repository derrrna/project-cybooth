import DynamicImage from "../components/DynamicImage.tsx";
import Webcam from 'react-webcam';
import {useState, useId, useEffect} from "react";
import PhotoPreview from "../components/PhotoPreview.tsx";

export default function Photobooth() {

    const [savedPhotos, setSavedPhotos] = useState([
        {id: useId(), image: '/placeholder.jpg'},
        {id: useId(), image: '/placeholder.jpg'},
        {id: useId(), image: '/placeholder.jpg'},
        {id: useId(), image: '/placeholder.jpg'}
    ])

    useEffect(() => {})

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
                <div className={'bg-[#FF4A8B] z-[10] w-2/5 lg:w-1/5 p-3 rounded-tr-4xl rounded-tl-4xl flex justify-center'}>
                    {/*TODO font not working. Add buttons here for photo preview*/}
                    <p className={'text-[#FFFFFF]'}>cheese ♡</p>
                </div>

                {/* Webcam */}
                <Webcam
                    className={'z-[10] rounded-xl object-cover h-4/5 w-3/4 lg:w-1/2 lg:h-3/4'}
                    audio={false}
                    screenshotFormat={"image/jpeg"}
                    screenshotQuality={1}
                    imageSmoothing={true}
                />

                {/* Capture button */}
                <button
                    className={'bg-[#FF4A8B] w-1/5 h-1/15 md:w-1/6 lg:w-1/15 lg:h-1/15 z-[10] flex justify-center drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)] ' +
                        'rounded-br-3xl rounded-bl-3xl hover:bg-[#fa2d77] cursor-pointer'}>
                    <img src={'camera-icon.svg'} alt="camera icon" className={'w-1/4'}/>
                </button>
            </div>

            {/* Photo Preview component - visible on laptop only */}
            <div className={'w-full h-full absolute hidden lg:flex overflow-hidden justify-end pr-[6vw]'}>
                <PhotoPreview imageList={savedPhotos} />
            </div>

        </div>
    )
}

