/**
 * Border component for Photobooth and Editor Pages.
 * @constructor
 *
 * TODO make mobile responsive
 */
export default function LogoBorder(){
    return (
        <div className={'flex relative w-screen h-screen'}>

            {/* Chromix Blobs Near Logo - Visible for all screens */}
            <img className={'w-screen h-screen absolute z-[13] scale-[25%] -top-[50%] right-[45%]'}
                 src={'logoborder/chromix_12.svg'} aria-hidden={true} alt={""}/>
            <img className={'w-screen h-screen absolute z-[13] scale-[20%] -top-[38%] -left-[48%]'}
                 src={'logoborder/chromix_28.svg'} aria-hidden={true} alt={""}/>

            {/* WHITE BORDER */}

            {/* Large Screens*/}
            <img className={"w-screen h-screen z-[11] absolute hidden lg:block"}
                src={"/logoborder/lg_border.svg"} aria-hidden={true} alt={""}/>

            {/* Medium Screens */}
            <img className={"w-screen h-screen z-[11] absolute hidden md:block lg:hidden"}
                src={"/logoborder/md_border.svg"} aria-hidden={true} alt={""}/>

            {/* Small Screens */}
            <img className={"w-screen h-screen z-[11] absolute block md:hidden"}
                src={"/logoborder/sm_border.svg"} aria-hidden={true} alt={""}/>

            {/* TEXT CONTENT */}
            <div className={'w-screen h-screen absolute z-[12] flex flex-col '}>
                <h1 className={'font-Vipna text-[#FF659D] text-md pl-18 pt-1.5 sm:text-3xl sm:pl-14 sm:pt-2.5 lg:text-4xl lg:pl-30 lg:pt-5'}>::cybooth</h1>
                <h2 className={'font-neuropol-x text-[#98C2E9] hidden lg:block lg:text-sm lg:pl-40'}> your digital photobooth</h2>
                <h3 className={'self-center text-xs sm:text-md mt-auto font-ledlight text-[#FF659D] tracking-widest'}>Made by Danna</h3>
            </div>
        </div>

    )
}