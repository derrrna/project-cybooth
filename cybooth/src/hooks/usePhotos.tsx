import {useContext} from "react";
import {PhotoContext} from "../context/PhotoContext.tsx";

export function usePhotos() {
    const context = useContext(PhotoContext)
    if (context == null) {
        throw new Error("Context for usePhotos is null.")
    }
    return context
}