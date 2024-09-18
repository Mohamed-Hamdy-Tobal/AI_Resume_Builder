import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <SignIn/>
            </div>
            <div className="hidden bg-muted lg:block">
                
            </div>
        </div>
    )
}
export default SignInPage