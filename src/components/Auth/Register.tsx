import Brands from "./Brands"
import AuthForm from "./AuthForm"
import { useState } from "react"


type AuthMode = "sign-in" | "sign-up"

type AuthFormProp = {
    mode: AuthMode
}

export default function Register({ mode }: AuthFormProp) {

    const [authMode, setAuthMode] = useState(mode)

    const toggleMode = () => {
        setAuthMode("sign-up")
    }

    return (
        <div className="lg:grid grid-cols-2 md:min-h-screen flex flex-col" >
            <Brands />
            <div className="bg-[#1d1f20] h-full w-full items-center">
                <div className="flex justify-center items-center h-screen">
                    {
                        mode === "sign-in" ? <AuthForm mode="sign-in" /> : <AuthForm mode="sign-up" />
                    }

                </div>
            </div>
        </div >
    )
}