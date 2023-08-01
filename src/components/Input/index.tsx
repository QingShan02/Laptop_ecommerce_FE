import { UseFormRegisterReturn } from "react-hook-form";
import "./index.css";

interface InputProps {
    id?: string,
    name?: string,
    type: string,
    value?: string,
    className: string,
    placeholder?: string
    defaultChecked?: boolean,
    defaultValue?: string,
    disabled?: string,
    min?: number,
    max?: number,
    width?: number,
    onClick?: () => void,
    onChange?: (event: any) => void,
    register?: UseFormRegisterReturn;
}

const Input = ({ ...props }: InputProps) => {
    return (
        <input type={props.type} className={props.className} id={props.id} name={props.name} placeholder={props.placeholder} value={props.value} onClick={props.onClick} onChange={props.onChange} {...props.register} />
    );
}
export default Input;