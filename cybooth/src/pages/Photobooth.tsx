import DynamicImage from "../components/DynamicImage.tsx";


export default function Photobooth() {
    return (
        <>
            {/* grid background*/}
            <div className="absolute w-screen h-screen bg-[size:25px_25px] opacity-40 z-[-50]
            bg-[linear-gradient(to_right,#FFAFCC_0.5px,transparent_1px),linear-gradient(to_bottom,#FFAFCC_0.5px,transparent_1px)]"/>

            {/* blob layer background 1 - visible only on laptop*/}
            <div className="hidden lg:flex flex-col absolute z-[-40] w-screen h-screen overflow-hidden">
                <img src="/blob2.png" alt="blob" className="w-1/2 h-4/5 -translate-y-2/5  object-contain"/>
                <img src="/blob2.png" alt="blob"
                     className="w-1/2 h-3/7 -translate-y-1/8 translate-x-8/9 rotate-180 object-contain"/>
            </div>

            {/* blob layer background 2 - visible for mobile, ipads, laptop*/}
            <div className="w-screen h-screen absolute z-[-39] overflow-hidden flex">
                <div className="w-1/2 h-full relative">
                    <img src="/blob1.png"
                         className="scale-180 lg:scale-70 translate-y-1/3 -translate-x-2/7 absolute bottom-0 left-0"/>
                </div>
                <div className="w-1/2 h-full relative">
                    <img src="/blob1.png"
                         className="scale-130 translate-x-1/5 -translate-y-1/3 lg:scale-80 rotate-180 absolute right-0"/>
                </div>
            </div>

            {/*Flower layer */}
            <div className={"w-screen h-screen relative"}>
                <div className={"w-full h-full absolute"}>

                </div>

            </div>

            <DynamicImage imageSource={"Flower1.png"} imageStyle={'rotate-180'} scaleUp={'scale-40'} originalScale={'scale-20'}/>


            {/* content layer*/}
            <div className="absolute w-screen h-screen flex z-[0]">
            </div>


        </>
    )
}

