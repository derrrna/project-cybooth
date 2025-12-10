import {createContext, ReactNode, useState} from "react";

export interface PhotoBgContextValue {
    photoBackground: string;
    changeBackground(newBg: string): void;
}

export const PhotoBgContext = createContext<PhotoBgContextValue| null> (null);

export function PhotoBgProvider({children}: {children: ReactNode}) {

    const [photoBackground, setPhotoBackground] = useState("bg-[url(photostripThemes/black-theme.jpg)]");

    const changeBackground = (newBg: string) => {
        setPhotoBackground(newBg)
    }

    return (
        <PhotoBgContext.Provider value = {{photoBackground, changeBackground}}>
            {children}
        </PhotoBgContext.Provider>
    )
}
