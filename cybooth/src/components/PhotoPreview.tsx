import DynamicImage from "./DynamicImage.tsx";

interface PhotoPreviewProps {
    imageList: Array<string>;
}

export default function PhotoPreview({imageList}: PhotoPreviewProps) {
    return (
        <div className={'bg-[#CDB4DB] z-[10] h-4/5 w-1/8 self-center p-2 rounded-2xl flex flex-col items-center'}>
            <h1 className={'text-[#FFFFFF] p-4'}>my photos</h1>

            {/* Takes the images given to it and displays it */}
            {imageList.map((image, index) => (
                <div className={'w-full h-1/5'}>
                    <DynamicImage imageSource={image} key={index}
                                  imageStyle={'object-fill rounded-xl'} originalScale={'scale-80'} scaleUp={'scale-90'}/>
                </div>
            ))}

            {/* TODO implement button */}
            <button className={'p-4'}>
                download
            </button>

        </div>
    )
}