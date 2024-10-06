import { SignIn } from "@clerk/clerk-react";
import './style.css'
import { Link } from "react-router-dom";

const SignInPage = () => {
    return (
        <div className="authentication w-full lg:grid lg:grid-cols-2 h-[100vh]">
            <div className="flex items-center justify-center py-12 h-full">
                <div>
                    <SignIn />
                    <div className="flex justify-center items-center mt-5">
                        <h3>Don’t have an account? </h3>
                        <Link to='/auth/sign-up' className="text-primary transition-all hover:underline">Sign up</Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block relative">
                <img
                    src="/imgs/resume-bg.jpg"
                    alt="Image"
                    className="h-full w-full object-cover"
                />
                <h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full text-white text-[40px] p-[30px] font-bold">Build a professional Resume with <span className="text-primary">AI</span></h1>
            </div>
        </div>
    )
}
export default SignInPage