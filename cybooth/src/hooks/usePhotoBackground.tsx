import {useContext} from "react";
import {PhotoBgContext} from "../context/PhotoBgContext.tsx";

export function usePhotoBackground() {
    const context = useContext(PhotoBgContext)
    if (context == null) {
        throw new Error("Context for usePhotoBgContext is null.")
    }
    return context
}