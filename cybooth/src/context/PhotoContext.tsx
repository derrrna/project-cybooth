import {createContext, ReactNode, useState} from "react";
import {v4 as uuidv4} from "uuid";

export interface Photo {
    id: string;
    image: string;
}

export interface PhotoContextValue {
    photos: Photo[];
    addPhoto(image: string): void;
    clearPhotos(): void;
}

export const PhotoContext = createContext<PhotoContextValue | null>(null);

export function PhotoProvider({children}: {children: ReactNode} ) {

    const MAX_DISPLAYABLE_PHOTOS = 4;
    const [, setTotalNumPhotos] = useState(0)

    const [photos, setPhotos] = useState([
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'},
        {id: uuidv4(), image: '/placeholder.jpg'}
    ])

    // Function that adds a new photo into the array.
    const addPhoto = (image: string) => {
        console.log('addPhoto called');

        setTotalNumPhotos(prevState => {

            // Calculate index for the new photo
            const newPhotoIndex = prevState % MAX_DISPLAYABLE_PHOTOS

            // Save photo into the array
            setPhotos(prevState => {
                const tempPhotos = [...prevState]
                tempPhotos[newPhotoIndex] = {id: uuidv4(), image: image}
                return tempPhotos
            })

            // Increment the total number of photos
            return prevState + 1
        })
    }

    // Function that resets the array to placeholder photos.
    const clearPhotos = () => {
        setPhotos([
            {id: uuidv4(), image: '/placeholder.jpg'},
            {id: uuidv4(), image: '/placeholder.jpg'},
            {id: uuidv4(), image: '/placeholder.jpg'},
            {id: uuidv4(), image: '/placeholder.jpg'}
        ])
    }

    return (
        // Value is the things you want to pass down to the children
        <PhotoContext.Provider value = {{photos, addPhoto, clearPhotos}}>
            {children}
        </PhotoContext.Provider>
    )

}
