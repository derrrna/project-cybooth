import BackgroundFlower from "../components/BackgroundFlower.tsx";

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
                         className="scale-180 md:w-[40vw] lg:w-[35vw] xl:max-w-[35vw] translate-y-1/4 -translate-x-1/5 absolute bottom-0 left-0"/>
                </div>
                <div className="w-1/2 h-full relative">
                    <img src="/blob1.png"
                         className="scale-130 translate-x-1/5  md:w-[40vw] lg:w-[30vw] xl:max-w-[30vw] rotate-180 absolute -top-[6vh] right-0"/>
                </div>
            </div>

            {/* flower layer background 1 - visible only on laptop*/}
            <div className="hidden absolute z-[-38] w-screen h-screen lg:flex flex-col overflow-hidden">
                <BackgroundFlower imageSource="/Flower2.png" flowerStyle="-rotate-90 -translate-x-2/5 -translate-y-1/3 scale-[90%]"/>
                <BackgroundFlower imageSource="" flowerStyle="-rotate-90"/>
            </div>

            {/* flpwer layer background 2 - visible for mobile, ipads, laptop*/}
            <div className="absolute z-[-38] w-screen h-screen flex flex-col overflow-hidden">
                <BackgroundFlower imageSource="/Flower1.png" flowerStyle="rotate-165 scale-80 -translate-y-2/5 lg:scale-100 lg:translate-x-2/7 lg:-translate-y-1/3"/>
                <BackgroundFlower imageSource="/Flower1.png" flowerStyle="rotate-65  scale-60 -translate-x-3/8 translate-y-2/5 lg:-translate-x-2/7 lg:translate-y-1/3"/>
            </div>


            {/* content layer*/}
            <div className="absolute w-screen h-screen flex z-[0]">
            </div>


        </>
    )
}

