export default function LogoBorder(){
    return (
        <div className={'flex'}>
            <div className="w-screen h-screen overflow-hidden absolute z-[11]">
                <svg className="w-full h-full z-[11]" viewBox="0 0 1920 1080" preserveAspectRatio="none"
                     xmlns="http://www.w3.org/2000/svg" fill="none">

                    <defs>
                        <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="black" flood-opacity="0.15"/>
                        </filter>
                    </defs>

                    <path
                        d="M0,0 H529.875 C540,0 550.125,15 545.625,30 L510,140 C507,150 500,155 490,155 H36 V1044 H1884
                        V36 H529.875 V0 H1920 V1080 H0 V0 Z"
                        fill="#FBFBFB"
                        filter="url(#dropShadow)"
                    />
                </svg>
            </div>

            <div className={'w-screen h-screen overflow-hidden z-[12] flex flex-col'}>
                <h1 className={'font-Vipna text-[#FF659D] text-5xl pl-35 pt-8'}>::cybooth</h1>
                <h2 className={'font-neuropol-x text-[#98C2E9] text-md pl-50'}> your digital photobooth</h2>
                <h3 className={'self-center mt-auto font-ledlight text-[#FF659D] tracking-widest'}>Made by Danna</h3>
            </div>
        </div>

    )
}