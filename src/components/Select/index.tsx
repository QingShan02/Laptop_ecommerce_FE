import { Select } from 'antd';


interface InputProps {
    id: string,
    placeholder: string,
    onChange?: (event: any, options: any) => void,
    onSearch?: (event: any) => void,
    options: { value: string, label: string }[] | undefined,
    className?: string
}

const SelectInput = ({ ...props }: InputProps) => {
    return (
        <>
            <Select listItemHeight={10} listHeight={250}
                showSearch
                placeholder={props.placeholder}
                // optionFilterProp="children"
                onChange={props.onChange}
                onSearch={props.onSearch}
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={props.options}
                // onBlur={props.onBlur}
                id={props.id}
                className={props.className}
            />
        </>
    );
}
export default SelectInput;