import { useState, useEffect } from "react";

export default function ImageCarousel() {
    const images = [
        "https://www.mightymahal.com/assets/images/16343906281630493865s3.jpg",
        "https://www.mightymahal.com/assets/images/16343905891630493728s2.jpg",
        "https://images.pexels.com/photos/994197/pexels-photo-994197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full">
            {/* Carousel Wrapper */}
            <div className="relative  overflow-hidden rounded-2xl h-110">
                {images.map((src, index) => (
                    <img
                        key={index}

                        src={src}
                        className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                        alt={`Carousel ${index + 1}`}
                    />

                ))}
            </div>

            {/* Slider Indicators */}
            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 z-30">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/30"} hover:bg-white/60`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
            {/* Controls */}
            <div className="opacity-0 hover:opacity-100 transition-opacity duration-100">
                <button onClick={prevSlide} className={"absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"}>
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full hover:bg-white/50">
                        ❮
                    </span>
                </button>
                <button onClick={nextSlide} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full hover:bg-white/50">
                        ❯
                    </span>
                </button>
            </div>
        </div>
    );
}
