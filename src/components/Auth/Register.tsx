import Brands from "./Brands"
import AuthForm from "./AuthForm"
import { useState } from "react"
import type { AuthFormProp } from "./auth-type"

export default function Register({ mode }: AuthFormProp) {

    const [authMode, setAuthMode] = useState(mode)

    const toggleMode = () => {
        setAuthMode(prev => prev === "sign-in" ? "sign-up" : "sign-in")
    }

    return (
        <div className="lg:grid grid-cols-2 md:min-h-screen flex flex-col" >
            <Brands />
            <div className="bg-[#1d1f20] h-full w-full items-center">
                <div className="flex justify-center items-center h-screen">
                    <AuthForm mode={authMode} onToggleMode={toggleMode} />
                </div>
            </div>
        </div >
    )
}