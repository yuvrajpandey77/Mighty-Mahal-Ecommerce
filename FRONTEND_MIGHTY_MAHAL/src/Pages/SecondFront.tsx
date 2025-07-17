import ProductCard from "../Ui/ProductCard";
interface SecondFrontProps {
    title?: string;
    price?: number;
}

export default function SecondFront(props: SecondFrontProps) {
    return (
        <div >
             <p className="text-2xl  relative left-1 bottom-15 z-1  font-semibold text-black  w-60 border-b-2 border-blue-600 h-10">{props.title}</p>
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
