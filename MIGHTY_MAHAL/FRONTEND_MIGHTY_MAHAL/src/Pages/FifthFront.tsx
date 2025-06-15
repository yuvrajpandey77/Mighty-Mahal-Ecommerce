import { useEffect, useState, useCallback } from 'react';
import ProductCard from '../Ui/ProductCard';
import { PRODUCT_URL } from '../config';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Product {
    _id: string;
    title: string;
    image: string;
    price: number;      
    category: string;
    initialPrice: number;   
}

    const Button2 = ({ content, onClick, active, disabled }: { content: any, onClick: any, active: any, disabled: any }) => {
    return (
        <button
            className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
            ${active ? "bg-red-500 text-white" : "text-red-500"}
            ${
                !disabled
                    ? "bg-white hover:bg-red-500 hover:text-white"
                    : "text-red-300 bg-white cursor-not-allowed"
            }
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
};

const PaginationNav1 = ({ gotoPage, canPreviousPage, canNextPage, pageCount, pageIndex }: { gotoPage: any, canPreviousPage: any, canNextPage: any, pageCount: any, pageIndex: any } ) => {
    const renderPageLinks = useCallback(() => {
        if (pageCount === 0) return null;
        const visiblePageButtonCount = 3;
        let numberOfButtons =
            pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
        const pageIndices = [pageIndex];
        numberOfButtons--;
        [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
            const pageNumberBefore = pageIndices[0] - 1;
            const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
            if (
                pageNumberBefore >= 0 &&
                (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
            ) {
                pageIndices.unshift(pageNumberBefore);
            } else {
                pageIndices.push(pageNumberAfter);
            }
        });
        return pageIndices.map((pageIndexToMap) => (
            <li key={pageIndexToMap}>
                <Button2
                    content={pageIndexToMap + 1}
                    onClick={() => gotoPage(pageIndexToMap)}
                    active={pageIndex === pageIndexToMap}
                    disabled={false}
                />
            </li>
        ));
    }, [pageCount, pageIndex]);

    return (
        <ul className="flex gap-2">
            <li>
                <Button2
                    content={
                        <div className="flex ml-1">
                            <FaChevronLeft size="0.6rem" />
                            <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
                        </div>
                    }
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                    active={false}
                />
            </li>
            {renderPageLinks()}
            <li>
                <Button2
                    content={
                        <div className="flex ml-1">
                            <FaChevronRight size="0.6rem" />
                            <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
                        </div>
                    }
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                    active={false}
                />
            </li>
        </ul>
    );
};

export const FifthFront = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const productsPerPage = 20;
    const pageCount = 10; 

    useEffect(() => {
        fetchProducts();
    }, [pageIndex]);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${PRODUCT_URL}/?page=${pageIndex}&limit=${productsPerPage}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError("Error fetching products");
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="w-full min-h-screen bg-[#F8F5E9] p-4 md:p-6 lg:p-8 flex justify-center items-center">
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

    return (<div>
        <div className='w-full h-auto bg-[#F8F5E9] p-4 md:p-6 lg:p-8'>
            <div className='w-full mx-auto max-w-8xl px-4 relative top-30 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
                    {products.slice(pageIndex * productsPerPage, (pageIndex + 1) * productsPerPage).map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            category={product.category}
                            initialPrice={product.initialPrice}
                        />
                    ))}
                </div> 
               
                
            </div>
           
        </div>
         <div className='flex justify-center items-center relative top-0 mt-30 mb-10 left-1/2 -translate-x-1/2  z-1 w-60 h-10'>
         <PaginationNav1
             gotoPage={setPageIndex}
             canPreviousPage={pageIndex > 0}
             canNextPage={pageIndex < pageCount - 1}
             pageCount={pageCount}
             pageIndex={pageIndex}
         />
         </div>
         </div>
    );
};