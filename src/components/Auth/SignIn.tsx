import Brands from "./Brands"
import AuthForm from "./AuthForm"

const SignIn = () => {
    return (
        <div className="lg:grid grid-cols-2 md:min-h-screen flex flex-col">
            <Brands />
            <div className="bg-[#1d1f20] h-full w-full items-center">
                <div className="flex justify-center items-center h-screen">
                    <AuthForm mode="sign-in" />
                </div>
            </div>
        </div>
    )
}

export default SignIn
