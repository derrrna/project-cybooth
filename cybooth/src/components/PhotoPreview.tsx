import DynamicImage from "./DynamicImage.tsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

interface PhotoPreviewProps {
    imageList: Array<{id: string, image: string}>;
}

export default function PhotoPreview({imageList}: PhotoPreviewProps) {

    useEffect(() => {}, [imageList]);

    return (
        <div className={'bg-[#CDB4DB] z-[12] h-4/5 w-1/8 self-center p-2 rounded-2xl flex flex-col items-center'}>
            <h1 className={'text-[#FFFFFF] pt-4 font-Vipna tracking-widest'}>my photos</h1>

            {/* Takes the images given to it and displays it */}
            {imageList.map((image) => (
                <div className={'w-full h-1/5'}>
                    <DynamicImage imageSource={image.image} key={image.id}
                                  imageStyle={`object-cover rounded-xl transition-opacity duration-1000 ease-in-out`} originalScale={'scale-80'} scaleUp={'scale-90'}/>
                </div>
            ))}

            {/* TODO implement button. not showing up */}
            <Link to="/editor" className={'p-4 cursor-pointer overflow-visible flex'}>
                <img src={'/download-icon.svg'} alt={'download button'} className={'object-fill'}/>
            </Link>

        </div>
    )
}