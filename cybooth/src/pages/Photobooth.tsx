import DynamicImage from "../components/DynamicImage.tsx";


export default function Photobooth() {
    return (
        <div className={'overflow-hidden w-screen h-screen'}>
            {/* grid background*/}
            <div className="absolute w-screen overflow-hidden h-screen bg-[size:25px_25px] opacity-40 z-[-50]
            bg-[linear-gradient(to_right,#FFAFCC_0.5px,transparent_1px),linear-gradient(to_bottom,#FFAFCC_0.5px,transparent_1px)]"/>

            {/* blob layer background 1 - visible only on laptop*/}
            <div className="hidden lg:flex flex-col absolute z-[-40] w-screen h-screen overflow-hidden">
                <img src="/blob2.png" alt="blob" className="w-1/2 h-4/5 -translate-y-2/5  object-contain"/>
                <img src="/blob2.png" alt="blob"
                     className="w-1/2 h-3/7 -translate-y-1/8 translate-x-8/9 rotate-180 object-contain"/>
            </div>

            {/* blob layer background 2 - visible for mobile, ipads, laptop*/}
            <div className="w-full h-full absolute z-[-39] overflow-hidden flex">
                <div className="w-1/2 h-full relative">
                    <img src="/blob1.png"
                         className="scale-180 lg:scale-70 translate-y-1/3 -translate-x-2/7 absolute bottom-0 left-0"/>
                </div>
                <div className="w-1/2 h-full relative">
                    <img src="/blob1.png"
                         className="scale-130 translate-x-1/5 -translate-y-1/3 lg:scale-80 rotate-180 absolute right-0"/>
                </div>
            </div>


            {/*Flower layer visible on mobile and laptop */}
            <div className={"w-full h-full flex z-[-38]"}>
                <div className={"w-1/2 h-full"}>
                    <DynamicImage imageSource={"Flower1.png"} imageStyle={'rotate-90 translate-y-3/7 -translate-x-1/4 lg:-translate-x-0'}
                                  scaleUp={'lg:scale-45 scale-90'} originalScale={'lg:scale-40 scale-80'}/>
                </div>
                <div className={"w-1/2 h-full"}>
                    <DynamicImage imageSource={"Flower1.png"} imageStyle={'rotate-180 -translate-y-4/9 -translate-x-2/5 lg:-translate-y-2/5 lg:-translate-x-1/7'}
                                  scaleUp={'lg:scale-45 scale-80'} originalScale={'lg:scale-40 scale-70'}/>
                </div>

            </div>


            {/* content layer*/}
            <div className="w-full h-full flex z-[0]">
            </div>


        </div>
    )
}

