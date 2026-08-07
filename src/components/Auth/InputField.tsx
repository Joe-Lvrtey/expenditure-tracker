type InputFieldProps = {
    type: string,
    label: string,
    value?: string,
    onChange: (e: any) => void
}

const InputField: React.FC<InputFieldProps> = ({
    type,
    label,
    value,
    onChange
}) => {
    return (
        <div className="flex flex-col">
            <label className="text-gray-300 text-small tracking-wide leading-0.5 my-4">{label}</label>
            <input
                className="w-65  md:w-100 py-4 px-6 border-2 border-gray-300 text-gray-200 outline-none focus:outline-2"
                type={type}
                value={value}
                onChange={() => onChange}
            ></input>
        </div>
    )
}

export default InputField