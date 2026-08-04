import InputField from "./InputField"

const AuthForm = () => {
    return (
        <section className="p-8 md:p-y-12 px-20 border border-gray-200">
            <header>
                <span className="tracking-wider text-[#7fa8ce] text-xl md:text-2xl">Welcome back</span>
                <h2 className="text-white text-lg md:text-3xl py-4">Sign in</h2>
            </header>
            <form>
                <InputField type="email" onChange={() => { }} label="Email" />
                <InputField type="email" onChange={() => { }} label="Password" />
                <div className="flex items-center justify-between my-4">
                    <div className="flex items-center gap-2">
                        <input type="radio" className="w-5 h-5 appearance-none border-2 border-gray-300 rounded-full focus:outline p-2" />
                        <span className="text-gray-100 text-lg md:text-xl">Keep me signed in</span>
                    </div>
                    <span className="text-[#7fa8ce] text-lg md:text-xl font-bold tracking-tight">Forgot?</span>
                </div>
                <div className="flex flex-col gap-y-4">
                    <button className="leading-2 text-lg md:text-2xl tracking-wider w-full bg-[#5d8dba] border py-6 px-8">SIGN IN</button>
                    <button className="leading-2 text-lg md:text-xl tracking-tight w-full border border-gray-300 text-white  py-6 px-8">Continue With Google</button>
                    <div className="flex justify-center items-center gap-2">
                        <span className="text-gray-100 text-lg md:text-xl">No Account?</span>
                        <span className="text-[#7fa8ce] text-lg md:text-xl">Create one</span>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AuthForm;