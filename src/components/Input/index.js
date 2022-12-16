import React from "react";
import { InputCustom } from "./styles"

const Input = ({
    name,
    placeholder,
    onChange,
    type
}) => {
    return ( 
        <InputCustom 
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        />
     );
}
 
export default Input;