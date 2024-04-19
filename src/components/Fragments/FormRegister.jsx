import InputForm from "../Elements/Input";
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action="">
            <div className="mb-6">
                <InputForm
                    label="Fullname"
                    name="fullname"
                    type="text"
                    placeholder="Insert your name here...">
                </InputForm>
            </div>
            <div className="mb-6">
                <InputForm
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com">
                </InputForm>
            </div>
            <div className="mb-6">
                <InputForm
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="********">
                </InputForm>
            </div>
            <div className="mb-6">
                <InputForm
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="********">
                </InputForm>
            </div>
            <Button variant="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister;