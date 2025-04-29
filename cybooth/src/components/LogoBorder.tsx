export default function LogoBorder(){
    return (
        <div className={'flex'}>

            <div className={'w-screen h-screen overflow-hidden absolute z-[13] flex flex-col items-start'}>
                {/* TODO resizing*/ }
                <img className={'scale-50 -translate-y-1/2 -translate-x-1/4'} src={'logoborder/chromix_12.svg'}/>
                <img className={'scale-50 -translate-y-3/2 -translate-x-2/5'} src={'logoborder/chromix_28.svg'}/>
            </div>

            <div className="w-screen h-screen overflow-hidden absolute z-[11]">
                {/* A different svg will load based on the breakpoint.*/}
                <img
                    className="w-screen h-screen z-[11] absolute hidden lg:block"
                    src="/logoborder/lg_border.svg"
                    alt="Logo Border"
                />

                <img
                    className="w-screen h-screen z-[11] absolute hidden md:block lg:hidden"
                    src="/logoborder/md_border.svg"
                    alt="Logo Border"
                />

                <img
                    className="w-screen h-screen z-[11] absolute block md:hidden"
                    src="/logoborder/sm_border.svg"
                    alt="Logo Border"
                />
            </div>

            <div className={'w-screen h-screen overflow-hidden absolute z-[12] flex flex-col '}>
                <h1 className={'font-Vipna text-[#FF659D] text-md pl-18 pt-1.5 sm:text-3xl sm:pl-14 sm:pt-2.5 lg:text-4xl lg:pl-30 lg:pt-5'}>::cybooth</h1>
                <h2 className={'font-neuropol-x text-[#98C2E9] hidden lg:block lg:text-sm lg:pl-40'}> your digital photobooth</h2>
                <h3 className={'self-center text-xs sm:text-md mt-auto font-ledlight text-[#FF659D] tracking-widest'}>Made by Danna</h3>
            </div>
        </div>

    )
}