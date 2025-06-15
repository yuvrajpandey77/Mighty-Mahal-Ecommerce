import { Button } from "../Ui/Button";


interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    id?: string;
    size?: 'small' | 'medium' | 'large';
    category?: string;
    initialPrice?: number;
    onClick?: () => void;
    Rating?: number;
    description?: string;
}

const sizeClasses = {
    small: 'h-80',
    medium: 'h-100',
    large: 'h-120',
}
export default function ProductCard(props: ProductCardProps) {
    return (
        <div className="relative  right-25">
            <div className={`w-270 h-135 bg-[#fefeff] border border-gray-200 relative bottom-100 left-70 rounded-lg shadow-sm hover:border-[#DF6D14]  ${props.size ? sizeClasses[props.size] : ''}`}>
                <a  className="overflow-hidden block rounded-lg cursor-pointer">
                    <img className="w-135 h-135 hover:scale-105 overflow-hidden transition-all duration-300" src={props.image} alt="product image" />
                </a>
                <div className="absolute bottom-125 left-142 text-2xl text-gray-500">
                    <Button text={props.category} variant="links" />
                </div>
            </div>
            <div className="mt-0 px-5 pb-5 relative  bottom-190 w-130 left-230">
                <a >
                    <h5 className="text-3xl relative bottom-35 right-18 cursor-pointer font-serif  h-auto text-slate-900 overflow-visible whitespace-wrap text-ellipsis">{props.title}</h5>
                </a>
                <div className="mt-2 mb-3 flex items-center justify-between">
                    <p className="relative top-40 right-18">
                        <span className="text-4xl font-bold text-[#3d8066]">${props.price}</span>
                        <span className="text-lg text-slate-600 line-through">${props.initialPrice}</span>
                    </p>
                    <div className="flex items-center relative  right-102 bottom-38 px-2">
                        <svg aria-hidden="true" className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg aria-hidden="true" className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg aria-hidden="true" className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg aria-hidden="true" className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg aria-hidden="true" className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        {/* Repeat the SVG for the stars as needed */}
                        <span className="mr-2 ml-3 rounded bg-yellow-400 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                    </div>
                
                </div>
                <div className="relative h-0 bottom-40 right-18">{props.description}</div>
                </div>
                <div className="px-2 w-75 absolute bottom-155 left-260">
                    <a href="#" className="flex items-center h-15 relative justify-center rounded-md bg-[#3d8066] px-5 py-2 text-center text-xl font-medium text-white font-mono hover:bg-[#9DC08B] focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                </a>
                </div>
                
            
        </div>
    )
}
