import { UseFormRegisterReturn } from "react-hook-form";
import "./index.css";

interface InputProps {
    id?: string,
    name?: string,
    type: string,
    value?: string | number,
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
    register?: UseFormRegisterReturn,
    checked?: boolean
}

const Input = ({ ...props }: InputProps) => {
    return (
        <input defaultValue={props.defaultValue} type={props.type} checked={props.checked} className={props.className} id={props.id} name={props.name} placeholder={props.placeholder} onClick={props.onClick} onChange={props.onChange} {...props.register} />
    );
}
export default Input;