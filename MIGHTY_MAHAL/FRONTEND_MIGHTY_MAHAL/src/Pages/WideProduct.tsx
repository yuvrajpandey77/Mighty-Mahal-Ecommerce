// ... existing code ...
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Install react-icons if not already installed

import ProductCard2 from '../Ui/ProductCard2';
interface ProductCarouselProps {
    title: string;
}
export const WideProduct = (props: ProductCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const products = [
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        }, 
        {
            title: 'Dropshipping EIS 2.4 inch LCD Full HD 1080P Recording Camera',
            image: 'https://www.mightymahal.com/assets/images/1634134831EzTH75345266923349e280d5f5e5fd5c71e5a.jpg',
            price: 100,
            category: 'Electronics'
        },
        
        


        // Add more products here
    ];

    const productsPerView = 4;
    const slideWidth = 100 / productsPerView;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - productsPerView ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - productsPerView : prevIndex - 1
        );
    };

    return (
        <div className='relative w-full h-screen  p-8'>
            <p className="text-2xl font-semibold relative left-15 text-black w-35 border-b-2 border-blue-600 mb-8">
                {props.title}
            </p>
            
            <div className='relative flex items-center justify-center'>
                <button
                    onClick={prevSlide}
                    className='absolute left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100'
                >
                    <FaChevronLeft size={20} />
                </button>

                <div className='flex gap-4 overflow-hidden  w-[90%]'>
                    <div
                        className='flex transition-transform duration-900 ease-in-out'
                        style={{
                            transform: `translateX(-${currentIndex * slideWidth}%)`,
                        }}
                    >
                        {products.map((product, index) => (
                            <div key={index} className='flex-shrink-0 w-[50%] px-2'>
                                <ProductCard2
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    category={product.category}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className='absolute right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100'
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

// ... existing code ...