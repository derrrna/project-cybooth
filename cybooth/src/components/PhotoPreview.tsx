import DynamicImage from "./DynamicImage.tsx";
import {Link} from "react-router-dom";
import {useEffect} from "react";

/**
 * Props passed to PhotoPreview.
 */
interface PhotoPreviewProps {
    imageList: Array<{id: string, image: string}>;
}

/**
 * PhotoPreview Component.
 *
 * @param imageList An array of the 5 most recently taken photos.
 */
export default function PhotoPreview({imageList}: PhotoPreviewProps) {

    useEffect(() => {}, [imageList]);

    return (
        <div className={'bg-[#CDB4DB] z-[11] h-4/5 w-1/8 self-center p-2 rounded-2xl flex flex-col items-center'}>
            <h1 className={'text-[#FFFFFF] pt-4 font-Vipna tracking-widest text-xs'}>my photos</h1>

            {/* Takes the images given to it and displays it */}
            {imageList.map((image) => (
                <div className={'w-full h-1/5'}>
                    <DynamicImage imageSource={image.image}
                                  key={image.id}
                                  imageStyle={`object-cover rounded-xl transition-opacity duration-1000 ease-in-out `}
                                  originalScale={'scale-80'}
                                  scaleUp={'scale-90'}/>
                </div>
            ))}

            {/* Button leading to editor page */}
            <Link to="/editor" className={'w-1/8 h-1/8'}>
                <img src={'icons/download-icon.svg'} alt={'download button'} className={'w-full h-full self-center'} />
            </Link>

        </div>
    )
}