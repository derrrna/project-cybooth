interface FlowerProps {
    imageSource: string;
    flowerStyle?: string
}

export default function BackgroundFlower( {imageSource, flowerStyle}: FlowerProps) {
    return (
        <div className="w-full h-1/2">
            <img src={imageSource} alt="flower" className={`h-full w-full object-contain ${flowerStyle}`}/>
        </div>
        )
}