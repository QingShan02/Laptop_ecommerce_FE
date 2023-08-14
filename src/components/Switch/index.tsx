
import React, { useState } from 'react';
import { Switch } from 'antd';


const Switcher = ({check}:any) => {
    const [status,setStatus] = useState(check);

    const onChange = (checked: boolean) => {
        setStatus(checked);
        console.log(`switch to ${checked}`);
    };
    return (
        <Switch checked={status} onChange={onChange} />
    )
}
export default Switcher;