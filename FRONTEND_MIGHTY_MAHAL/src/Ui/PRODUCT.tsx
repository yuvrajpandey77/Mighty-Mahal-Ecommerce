import Header from '../components/Header'
import Footer from '../components/Footer'
import { MainProduct}  from '../Product/MainProduct'
function Product() {
    return (
        <div className='flex flex-col bg-[#F8F5E9] min-h-screen'>
            <div className='w-full bg-[#F8F5E9] fixed top-0 z-50'>
                <Header />
            </div>
            <div className='flex flex-row justify-center items-center  bg-[#F8F5E9] relative h-450 bottom-30 w-full '>
                <MainProduct/>
            </div>
            <Footer />
        </div>
    )
}

export default Product
