import Crossicon from "../Icons/Crossicon";
import { Button } from "../Ui/Button";
import { useNavigate } from "react-router-dom";
interface UserInfoProps {
    name: string;
    email: string;
}

export function UserInfo(props: UserInfoProps) {
    const navigate = useNavigate();
    const logout1 = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <div className="flex justify-center bg-[#F8F5E9] items-center h-10 ">
               <div className="relative left-77 top-6 z-1  " onClick={() => navigate('/dashboard')}><Crossicon /></div>
            <div className='flex flex-col gap-3 justify-center font-serif items-center h-80 w-80 border-1 rounded-xl border-[#DF6D14] bg-white relative top-40'>
                <div className='text-3xl font-medium font-serif text-[#3d8066]'>MY ACCOUNT</div>
                <div className='font-mono text-md w-full relative left-4 text-[#3d8066]'>{props.name} 
                "Every ending is a new beginning. Choose wisely."</div>
                <div className='text-[#3d8066]'>{props.email}</div>

                <button
                    onClick={logout1}
                    className="w-40 bg-[#3d8066] text-white py-2.5 rounded-lg hover:bg-[#DF6D14] transition"
                >
                    Logout
                </button>
                <button
                    onClick={logout1}
                    className="w-40 bg-[#3d8066] text-white py-2.5 rounded-lg hover:bg-[#DF6D14] transition"
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
}
