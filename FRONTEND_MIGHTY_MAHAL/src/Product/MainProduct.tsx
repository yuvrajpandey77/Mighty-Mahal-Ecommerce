import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PRODUCT_URL } from '../config';

import MainProductCard from './MainProductCard';
interface Product {
    id: string;
    title: string;
    image: string;
    price: number;
    category: string;
    Rating: number;
    initialPrice: number;
    description: string;
}

export  const MainProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProductById = async (productId: string) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${PRODUCT_URL}/${productId}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            setError("Error fetching product");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchProductById(id);
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="w-full min-h-screen bg-[#f2f4f6] p-4 md:p-6 lg:p-8 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full min-h-screen bg-[#F8F5E9] p-4 md:p-6 lg:p-8 flex justify-center items-center">
                <div className="text-red-600 text-center">{error}</div>
            </div>
        );
    }

    return (
        <div className='w-full min-h-screen bg-[#F8F5E9] p-4 md:p-6 lg:p-8'>
            <div className='w-full bg-[#F8F5E9]  mx-auto max-w-8xl px-4 relative top-30 sm:px-6 lg:px-8'>
                {product && (
                    <MainProductCard
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                        Rating={product.Rating}
                        initialPrice={product.initialPrice}
                        description={product.description}
                    />
                )}
            </div>
        </div>
    );
};