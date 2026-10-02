import InputField from "./InputField"
import * as z from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { AuthFormProp } from "./auth-type"

type AuthFormData = {
    email: string,
    password: string,
    confirmPassword?: string
}

const AuthForm: React.FC<AuthFormProp> = ({ mode, onToggleMode }) => {

    console.log("this is the toggler: ", onToggleMode)

    const signInschema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        // confirmPassword: z.string().min(8)
    })

    const signUpschema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        confirmPassword: z.string().min(8).optional()
    }).refine((data) => data.password === data.confirmPassword, {
        message: "passwords do not much",
        path: ["confirmPassword"]
    })

    const { register, handleSubmit } = useForm<AuthFormData>(mode === "sign-in" ? { resolver: zodResolver(signInschema) } : { resolver: zodResolver(signUpschema) })

    console.log(register + " this is register")

    const isSignIn = mode === "sign-in"

    const submitFormData = (data: AuthFormData) => {
        console.log("data", data)
    }

    return (
        <section className="p-5.5 md:p-y-12 md:px-20 border border-dashed lg:border-solid border-gray-200">
            <header>
                <span className="tracking-wider text-[#7fa8ce] text-xl md:text-2xl">{isSignIn ? "Welcome back" : "Welcome"}</span>
                <h2 className="text-white text-xl md:text-3xl py-4">{isSignIn ? "Sign in" : "Sign Up"}</h2>
            </header>
            <form onSubmit={handleSubmit(submitFormData,
                (errors) => {
                    console.log("validation errors", errors)
                }
            )}>
                <InputField {...register("email")} label="Email" type="email" />
                <InputField {...register("password")} label="Password" type="password" />
                {!isSignIn &&
                    <div className="my-4">
                        <InputField {...register("confirmPassword")} label="Confirm Password" type="password" />
                    </div>}
                {isSignIn &&
                    <div className="flex items-center justify-between my-4">
                        <div className="flex items-center gap-2">
                            <input type="radio" className="w-5 h-5 appearance-none border-2 border-gray-300 rounded-full focus:outline p-2" />
                            <span className="text-gray-100 text-lg md:text-xl">Keep me signed in</span>
                        </div>
                        <span className="text-[#7fa8ce] text-lg md:text-xl font-bold tracking-tight">Forgot?</span>
                    </div>}

                <div className="flex flex-col gap-y-4">
                    <button type="submit" className="leading-2 text-lg md:text-2xl cursor-pointer tracking-wider w-full bg-[#5d8dba] border py-6 px-8">{isSignIn ? "SIGN IN" : "SIGN UP"}</button>
                    <button className="leading-2 text-lg md:text-xl tracking-tight w-full border border-gray-300 text-white  py-6 px-8">Continue With Google</button>
                    <div className="flex justify-center items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-100 text-lg md:text-xl">
                                {isSignIn ? "No Account?" : "Already Have An Account?"}
                            </span>

                            <button
                                onClick={onToggleMode}
                                type="button"
                                className="text-[#7fa8ce] text-lg md:text-xl cursor-pointer"
                            >
                                {isSignIn ? "Create one" : "Sign In"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section >
    )
}

export default AuthForm;