type InputFieldProps = {
    label: string,
    type: string,
}

const InputField: React.FC<InputFieldProps> = (
    props
) => {
    console.log("InputField props:", props)
    return (
        <div className="flex flex-col">
            <label className="text-gray-300 text-small tracking-wide leading-0.5 my-4">{props.label}</label>
            <input
                {...props}
                className="w-65 md:w-100 py-4 px-6 border-2 border-gray-300 text-gray-200 outline-none focus:outline-2"
            />
        </div>
    )
}

export default InputField
