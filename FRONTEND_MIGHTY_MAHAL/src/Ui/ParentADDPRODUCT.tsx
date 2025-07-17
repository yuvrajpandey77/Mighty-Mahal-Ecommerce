import Header from '../components/Header'
import Footer from '../components/Footer'
import AddProduct1 from './Addprocuct'
function ParentADDPRODUCT() {
    return (
        <div className='flex flex-col bg-[#f2f4f6] min-h-screen'>
             <div className='w-full bg-[#F8F5E9] fixed top-0 z-50'>
                <Header />
            </div>
            <div className='bg-[#F8F5E9] '>
            <div className='h-250 bg-[#F8F5E9] relative top-40 '>
                <AddProduct1  />
            </div>
            </div>
            
            <div className='bg-[#F8F5E9] relative bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default ParentADDPRODUCT
