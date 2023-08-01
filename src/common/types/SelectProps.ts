import { UseFormRegisterReturn } from "react-hook-form";

export interface SelectProps {
    id: string,
    className: string,
    name: string,
    onChange?: (event: any) => void,
    options: { value: string | number, label: string }[],
    register?: UseFormRegisterReturn,
    defaultValue?: number | string | undefined
}