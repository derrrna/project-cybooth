import {useId, useRef} from "react";

interface useCaptureProps {
    totalNumPhotos: number;
    savedPhotos: Array<{id: string, image: string}>;
}

export default function useCapture(useCaptureProps: useCaptureProps) {

    // Set a delay

    // Initiate countdown


    // Take a screenshot
    const webcamRef = useRef(null)
    // @ts-ignore
    const newCapture = {id: useId(), image: webcamRef.current.getScreenshot(1920, 1080)}

    // Save the image into the array
    const index = useCaptureProps.totalNumPhotos


}