import DynamicImage from "../components/DynamicImage.tsx";

export default function Photobooth() {
    return(
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
                <DynamicImage imageSource={"Flower1.png"} imageStyle={'z-[5] rotate-90 translate-y-3/7 -translate-x-1/4 lg:-translate-x-0'}
                              scaleUp={'lg:scale-45 scale-90'} originalScale={'lg:scale-40 scale-80'}/>
                <DynamicImage imageSource={"Flower1.png"} imageStyle={'z-[5] rotate-180 -translate-y-4/9 -translate-x-2/5 lg:-translate-y-2/5 lg:-translate-x-1/7'}
                              scaleUp={'lg:scale-45 scale-80'} originalScale={'lg:scale-40 scale-70'}/>
            </div>

            {/**/}
            <div className={'hidden w-full h-full absolute lg:flex overflow-hidden'}>
                <DynamicImage imageSource={"Flower2.png"} originalScale={'scale-30'} scaleUp={'scale-40'}
                              imageStyle={'z-[5] -rotate-90 -translate-y-3/7 -translate-x-1/3'} />
                <DynamicImage imageSource={"Flower2.png"} originalScale={'scale-30'} scaleUp={'scale-40'}
                              imageStyle={'z-[5] rotate-45 translate-y-4/9 translate-x-1/9'} />
            </div>

        </div>
    )
}

