import Header from '../components/Header'
import Footer from '../components/Footer'
import Frontfirst from './Frontfirst'
import SecondFront from './SecondFront'
import MiddleCards from './MiddleCards'
import TextCards from './textCards'
import { ThirdFront } from './ThirdFront'
import MiddleCards2 from './MiddleCards2'
import MultiCards from './Multicards'
import { WideProduct } from './WideProduct'
import { SmWideProduct } from './SmWideProduct'
import FourthFront from './fourthFront'
import MiddleCards3 from './MiddleCards3'
function Dashboard() {
    return (
        <div className='flex flex-col bg-[#F8F5E9] min-h-screen'>
            <div className='w-full bg-[#F8F5E9] fixed top-0 z-50'>
                <Header />
            </div>
            <div className='flex relative max bg-[#F8F5E9] h-screen pt-20 '>
                <Frontfirst />
            </div>
            <div className='flex  gap-4 justify-center  bg-[#F8F5E9] items-center'>
                <TextCards />
            </div>
            <div className='flex flex-row justify-center items-center bg-[#F8F5E9] relative h-screen w-full '>
                <SecondFront title='Deals Of The Week' />
            </div>
            <div className='flex flex-row justify-center relative bottom-80 items-center h-170 w-full bg-[#F8F5E9] '>
                <MiddleCards />
            </div>
            <div className='flex flex-row justify-center relative bottom-90 items-center h-10 w-full bg-[#F8F5E9] '>
                <ThirdFront title='Popular Categories' />
            </div>
            <div className='flex flex-row justify-center relative bottom-50 items-center h-170 w-full bg-[#F8F5E9] '>
                <MiddleCards2 />
            </div>
            <div className='flex flex-row justify-center items-center bg-[#F8F5E9] relative h-screen bottom-130 w-full '>
                <MultiCards title='Featured Products' title2='Best Sellers' title3='Top Rated' title4='New Products' />
            </div>
            <div className='flex flex-row justify-center items-center  relative h-40 bottom-120 w-full '>
                <WideProduct title='Flash Deals' />
            </div>
            <div className='flex flex-col justify-center items-center  relative h-70 bottom-90 w-360 '>
                <SmWideProduct title='Beauty & Personal Care' />
            </div>
            <div className='flex flex-row justify-center relative bottom-0 items-center h-80 w-full bg-[#F8F5E9] '>
                <MiddleCards3 />
            </div>
            <div className='flex flex-col justify-center items-center bottom-30 bg-[#F8F5E9] relative h-230 w-full '>
                <FourthFront title0='Featured Categories' title='Men' title2='Women' title3='Kids' title4='Accessories' />
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
