import { useState } from "react";

const Carousel = () => {

    const image = [
        '/image/full depan.png',
        '/image/kuning.png',
        '/image/biwan.png'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? image.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className="relative w-full mx-auto">
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={image[currentIndex]}
                        alt={`Slide ${currentIndex}`} 
                        className="w-full max-h-[650px]"
                    />
                </div>
                <button
                onClick={prevSlide}
                className="absolute top-1/2 left-5 transform -translate-y-1/2 p-2 bg-[#0A3D62]/50 rounded-full text-white shadow-lg"
            > Prev
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-5 transform -translate-y-1/2 p-2 bg-[#0A3D62]/50 rounded-full text-white shadow-lg"
            > Next
            </button>
            </div>
            
        </>
    )
}

export default Carousel