import Header from '../components/Header'
import Footer from '../components/Footer'
import { FifthFront } from './FifthFront'
function Shop() {
    return (
        <div className='flex flex-col bg-[#F8F5E9] h-auto'>
            <div className='w-full bg-[#F8F5E9]  fixed top-0 z-50'>
                <Header />
            </div>
            <div className='flex flex-row justify-center items-center  bg-[#F8F5E9] relative h-auto bottom-0 w-full '>
                <FifthFront  />
            </div>
            <Footer />
        </div>
    )
}

export default Shop
