import { Button } from '../Ui/Button'
import CartIcon from '../Icons/CartIcon'
import UserIcon from '../Icons/UserIcon'
import CompanyLogo from '../Icons/CompanyLogo'
import { InputBox } from '../Ui/InputBox'
import SearchIcon from '../Icons/Search'
import { useNavigate } from 'react-router-dom';
import Plusicon from '../Icons/Plusicon';
export default function Header() {
    const navigate = useNavigate();
    return (
        <div className='relative border-b-1 border-[#DF6D14]'>
        <div className="xl:p-5 lg:p-5 md:p-6  md:relative xl:relative xl:left-1/12 lg:h-20  h-30 relative flex  xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-center items-center ">
            <div className='lg:absolute lg:left-2/90 relative lg:right-0 right-5 bottom-8 lg:bottom-3'><CompanyLogo /></div>
            <div className='flex justify-center text-[#3d8066] absolute items-center xl:absolute lg:absolute lg:top-0 lg:bottom-3  bottom-15 xl:left-1/8 md:left-1/10 lg:left-0 left-20   xl:top-3  '>
                <InputBox placeholder='Search' startIcon={<SearchIcon />} />
            </div>
            <div className='flex flex-row relative lg:gap-0  lg:left-0 lg:right-0 right-18 lg:ml-4  lg:mb-0 gap-0 md:gap-2 sm:gap-1 lg:mt-0 mt-20 sm:mt-0'>
                <Button fontStyle='sans' variant='primary' text='Home' size='linksSize' onclick={() => navigate('/dashboard')} />
                <Button fontStyle='sans' variant='primary' text='Shop' size='linksSize' onclick={() => navigate('/shop')} />
               
                <Button variant='primary' text='Sell' fontStyle='sans' size='linksSize' onclick={() => navigate('/addproduct')} />
                <Button fontStyle='sans' variant='primary' text='Contact' size='linksSize' />
                    <div className='flex items-center  justify-center relative left-8 end-0 w-1 '>   
                    <Button fontStyle='sans' variant='primary' text='You' size='linksSize' onclick={() => navigate('/userinfo')}  />
                    </div>
                    
                
            </div>
            <div className='flex items-center  justify-center lg:relative relative left-2 lg:bottom-0 bottom-7 w-0 lg:left-40 end-0 lg:w-1 '>
                    
                        <Button variant='links' startIcon={<CartIcon />} />
                  
                    </div>
        </div>
        </div>
    )
}
