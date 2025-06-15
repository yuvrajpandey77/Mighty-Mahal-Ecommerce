import { useState, useEffect } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import { UserInfo } from "./UserInfo"   
import axios from "axios";

export function UserInfor() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('/api/userinfo');
                setName(response.data.name);
                setEmail(response.data.email);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchUserInfo();
    }, []);

    return (<div>
            <div className='flex flex-col bg-[#F8F5E9] min-h-screen'>
            <div className='w-full bg-[#F8F5E9]  fixed top-0 z-50'>
                <Header />
            </div> 
            <div className='h-auto bg-[#F8F5E9]  relative top-50'> 
                <UserInfo name={name} email={email} />
            </div>
        </div>
        <Footer />
    </div>
)
}
