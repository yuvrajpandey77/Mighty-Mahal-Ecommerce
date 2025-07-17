// ... existing code ...
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Install react-icons if not already installed


import ProductCard3 from '../Ui/ProductCard3';
interface ProductCarouselProps {
    title: string;
}
export const SmWideProduct = (props: ProductCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const products = [
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        }, 
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        },
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        },
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        },
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        },{
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        },
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        },
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
        },
        {
            title: 'Men Leather Jacket Men New High Quality Collar...',
            image: 'https://www.mightymahal.com/assets/images/1634134738rC1H7e01b6c3e996405db8555c5e81c8ade0b.jpg',
            price: 100,
            category: 'Mens Clothing'
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
        <div className='relative w-full p-8'>
            <p className="text-2xl font-semibold relative left-102 text-black w-80 border-b-2 border-blue-600 mb-8">
                {props.title}
            </p>
            
            <div className='relative flex items-center justify-center'>
                <button
                    onClick={prevSlide}
                    className='absolute left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100'
                >
                    <FaChevronLeft size={20} />
                </button>

                <div className='overflow-hidden w-[54%]'>
                    <div
                        className='grid grid-cols-5 gap-3 auto-rows-auto w-470 transition-transform duration-500'
                        style={{
                            transform: `translateX(-${currentIndex * slideWidth}%)`,
                            gridAutoFlow: 'column',
                            gridTemplateRows: 'repeat(4, minmax(0, 1fr))'
                        }}
                    >
                        {products.map((product, index) => (
                            <div key={index} className='flex-shrink-0'>
                                <ProductCard3
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