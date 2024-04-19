import Label from "./label";
import Input from "./input";

const InputForm = (props) => {
    const { label, name, type, placeholder } = props;
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </>

    )
}

export default InputForm;