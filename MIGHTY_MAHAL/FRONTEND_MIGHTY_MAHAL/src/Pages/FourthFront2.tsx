import ProductCard from "../Ui/ProductCard";
interface SecondFrontProps {
    title?: string;
    price?: number;
}

export default function FourthFront2(props: SecondFrontProps) {
    return (
        <div >
             
           <div className='flex gap-4 flex-row relative bottom-40 z-auto justify-center items-center h-screen w-full bg-[#f2f4f6]'>
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
