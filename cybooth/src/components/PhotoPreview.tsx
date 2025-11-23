import {Link} from "react-router-dom";
import {useEffect} from "react";
import { motion } from "motion/react";
import { usePhotos } from "../hooks/usePhotos.tsx";

/**
 * PhotoPreview Component.
 * @param imageList An array of the 5 most recently taken photos.
 */
export default function PhotoPreview() {

    const {photos} = usePhotos();
    useEffect(() => {}, photos);

    return (
        <div className={'bg-[#CDB4DB] h-full w-full lg:h-4/5 lg:w-1/8 self-center p-2 lg:rounded-2xl flex flex-col items-center ' +
            'drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] z-[30]'}>

            <h1 className={'text-[#FFFFFF] pt-4 font-Vipna tracking-widest text-xs'}>my photos</h1>

            {/* Takes the images given to it and displays it */}
            {photos.map((image) => (
                <div className={'w-full h-1/5 pt-2 pb-2 pr-3 pl-3'}>
                    <motion.img
                        key={image.id} src={image.image} alt={"captured image"}
                        className={'h-full w-full object-cover rounded-xl'}
                        initial={'0.5'} whileHover={{scale: 0.9}}/>
                </div>
            ))}

            {/* Button leading to editor page */}
            <Link to="/editor" className={'w-1/8 h-1/8'}>
                <motion.img
                    initial={{opacity: 0.7}}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={'icons/download-icon.svg'} alt={'download button'} className={'w-full h-full self-center'} />
            </Link>

        </div>
    )
}