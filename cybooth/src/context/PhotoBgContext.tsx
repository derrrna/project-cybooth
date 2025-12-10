import {createContext, ReactNode, useState} from "react";

export interface PhotoBgContextValue {
    photoBackground: string;
    changeBackground(newBg: string): void;
}

export const PhotoBgContext = createContext<PhotoBgContextValue| null> (null);

export function PhotoBgProvider({children}: {children: ReactNode}) {

    const [photoBackground, setPhotoBackground] = useState("url(photostripThemes/black-theme.jpg)");

    //TODO
    const changeBackground = (newBg: string) => {
        setPhotoBackground(newBg)
    }

    return (
        <PhotoBgContext.Provider value = {{photoBackground, changeBackground}}>
            {children}
        </PhotoBgContext.Provider>
    )
}
