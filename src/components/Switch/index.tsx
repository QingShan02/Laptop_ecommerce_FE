
import React, { useEffect, useState } from 'react';
import { Switch } from 'antd';


const Switcher = ({ check, onToggle }: { check: boolean, onToggle: (checked: boolean) => void }) => {
    const [status, setStatus] = useState(check);

    useEffect(() => {
        setStatus(check);
    }, [check]);

    const onChange = (checked: boolean) => {
        setStatus(checked);
        onToggle(checked);
        console.log(`switch to ${checked}`);
    };
    return (
        <Switch checked={status} onChange={onChange} />
    )
}
export default Switcher;