import React from "react";
import { InputContainer } from "./styles";


const Input = ({id}) => 
{
    return(<>

        <InputContainer>
            <input type="text" id={id}  /> 
        </InputContainer>

    </>)

}


export default Input;