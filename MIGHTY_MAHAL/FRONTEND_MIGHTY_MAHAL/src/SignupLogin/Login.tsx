import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    async function login(e: React.FormEvent) {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        try {
            const response = await axios.post(`${BACKEND_URL}/login`, {
                email,
                password
            });
            localStorage.setItem('token', response.data.token);
            navigate("/dashboard");
        } catch (e) {
            console.log(e);
        }
        
    }

    return (
        <div className="flex justify-center bg-[#F8F5E9] items-center min-h-screen">
            <div className="w-full max-w-xl p-4 bg-white border font-serif border-[#DF6D14] rounded-2xl shadow-sm sm:p-6 md:p-8">
                <div className="space-y-4" onSubmit={login}>
                    <h5 className="text-3xl font-medium text-[#3d8066] text-center">Login to your account</h5>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-[#3d8066]"
                        >
                            Your email
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            id="email"
                            className="w-full p-2.5 rounded border border-[#DF6D14] text-black"
                            placeholder="name@company.com"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-[#3d8066]"
                        >
                            Your password
                        </label>
                        <input
                            ref={passwordRef}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full p-2.5 rounded border border-[#DF6D14] text-black"
                            required
                        />
                    </div>
                    <button
                        onClick={login}
                        type="submit"
                        className="w-full bg-[#3d8066] text-white py-2.5 rounded-lg hover:bg-[#9DC08B] transition"
                    >
                        Login
                    </button>
                    <div className="text-sm font-medium text-[#3d8066]">
                        Don't have an account?{" "}
                        <a href={"/signup"} className="text-blue-700 hover:underline dark:text-blue-500">
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

