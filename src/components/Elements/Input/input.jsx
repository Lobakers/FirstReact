const Input = (props) => {
    const { text, placeholder, name } = props;
    return (
        <input
            type={text}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700"
            placeholder={placeholder}
            name={name}
            id={name}
        />
    )
}

export default Input;