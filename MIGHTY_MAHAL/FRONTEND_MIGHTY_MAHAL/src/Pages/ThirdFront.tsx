// ... existing code ...
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Install react-icons if not already installed
import ProductCard from '../Ui/ProductCard';
 // Make sure to install axios
import {  PRODUCT_URL } from '../config';

interface Product {
    _id: string;
    title: string;
    image: string;
    price: number;
    category: string;
}

interface ProductCarouselProps {
    title: string;
}

export const ThirdFront = (props: ProductCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${PRODUCT_URL}/`);
            const data = await response.json();
            const limitedData = data.slice(0, 10);
            setProducts(limitedData);
            setIsLoading(false);
        } catch (error) {
            setError("Error fetching products");
            console.error("Error fetching products:", error);
        }finally{
            setIsLoading(false);
        }
    };

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

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen text-red-600">
                {error}
            </div>
        );
    }

    return (
        <div className='relative w-full h-screen bg-[#F8F5E9] p-8'>
            <p className="text-2xl font-semibold relative left-15 text-black w-60 border-b-2 border-blue-600 mb-8">
                {props.title}
            </p>
            
            {products.length > 0 ? (
                <div className='relative flex items-center justify-center'>
                    <button
                        onClick={prevSlide}
                        className='absolute left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100'
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    <div className='flex gap-4 overflow-hidden w-[90%]'>
                        <div
                            className='flex transition-transform duration-900 ease-in-out'
                            style={{
                                transform: `translateX(-${currentIndex * slideWidth}%)`,
                            }}
                        >
                            {products.map((product) => (
                                <div key={product._id} className='flex-shrink-0 w-[10%] px-2'>
                                    <ProductCard
                                        key={product._id}
                                        id={product._id}
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
            ) : (
                <div className="text-center text-gray-600">
                    No products available
                </div>
            )}
        </div>
    );
};

// ... existing code ...