import ProductCard from "../Ui/ProductCard";
import { Button } from "../Ui/Button";
interface MultiCardsProps {
    title?: string;
    title0?: string;
    title2?: string;
    title3?: string;
    title4?: string;
    price?: number;
}

export default function FourthFront(props: MultiCardsProps) {
    return (
        <div >
         <p className="text-2xl  relative left-0 bottom-8 z-1  font-semibold text-black  w-60 border-b-2 border-blue-600 h-10">{props.title0}</p>
                <div className='flex relative bottom-17 left-250 w-100 z-1  '>
                    <Button fontStyle='sans' variant='primary' text={props.title} size='linksSize' />
                    <Button fontStyle='sans' variant='primary' text={props.title2} size='medium' />
                    <Button fontStyle='sans' variant='primary' text={props.title3} size='medium' />
                    <Button fontStyle='sans' variant='primary' text={props.title4} size='medium' />
                </div>
            
            <div className='flex gap-4 flex-row justify-center items-center bg-[#F8F5E9]'>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
            </div>
            <div className='flex gap-4 flex-row justify-center items-center bg-[#F8F5E9] mt-4'>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
            </div>
        </div>
    )
}
