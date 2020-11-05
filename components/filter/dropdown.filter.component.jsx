import React from "react";
import { ContainerColumn, Form_DropDown, Form_Lables } from './filter.style';

const DropDownComponent = ({
    label,
    id,
    name,
    value,
    options,
    handler,
}) => {
    return (
        <ContainerColumn>
            <Form_Lables htmlFor={label}>{label}</Form_Lables>
            <Form_DropDown
                name={name}
                id={id}
                value={value}
                onChange={handler}>
                <option value="">All</option>
                {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </Form_DropDown>
        </ContainerColumn>
    )
}

export default DropDownComponent;          