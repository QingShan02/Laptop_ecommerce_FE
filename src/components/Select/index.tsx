import { SelectProps } from "src/common/types/SelectProps";


const SelectInput = ({ ...props }: SelectProps) => {
    return (
        <>
            <select name={props.name} className={props.className} id={props.id} onChange={props.onChange} {...props.register}>
                <option value={props.defaultValue}>{props.name.toUpperCase()}</option>
                {props.options.map((value, key) => (
                    <option value={value.value} key={key}>{value.label.toUpperCase()}</option>
                ))}
            </select>
        </>
    );
}
export default SelectInput;