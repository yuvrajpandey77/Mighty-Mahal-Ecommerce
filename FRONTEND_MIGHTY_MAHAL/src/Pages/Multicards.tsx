import ProductCard from "../Ui/ProductCard";
import { Button } from "../Ui/Button";
interface MultiCardsProps {
    title?: string;
    title2?: string;
    title3?: string;
    title4?: string;
    price?: number;
}

export default function MultiCards(props: MultiCardsProps) {
    return (
        <div >
         
                <div className='flex   relative h-10 mb-20  z-1  '>
                    <Button fontStyle='sans' variant='primary' text={props.title} size='medium' />
                    <Button fontStyle='sans' variant='primary' text={props.title2} size='medium' />
                    <Button fontStyle='sans' variant='primary' text={props.title3} size='medium' />
                    <Button fontStyle='sans' variant='primary' text={props.title4} size='medium' />
                </div>
            
            <div className='flex gap-4 flex-row relative bottom-40 z-auto justify-center items-center h-screen w-full bg-[#F8F5E9]'>
                <div className='flex flex-row justify-center items-center relative bottom-10'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center relative bottom-10'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center relative bottom-10'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center relative bottom-10'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
                <div className='flex flex-row justify-center items-center relative bottom-10'>
                    <ProductCard title='Men Shirt custom Shirts Hot Sale Me...'
                        image='https://www.mightymahal.com/assets/images/1634134720QX6Hedf90cf6656546e7a8548d4980edc5bda.jpg'
                        price={100}
                    />
                </div>
            </div>



        </div>
    )
}
