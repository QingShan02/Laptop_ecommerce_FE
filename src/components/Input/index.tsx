import "./index.css";

interface InputProps {
    type: string,
    value?: string,
    className: string,
    placeholder?: string
    defaultChecked?: boolean
}

const Input = ({ ...props }: InputProps) => {
    return (
        <input {...props} />
    );
}
export default Input;