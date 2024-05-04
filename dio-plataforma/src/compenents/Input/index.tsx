import { Controller } from "react-hook-form"
import React from "react";
import {InputContainer,ErroText, InputText, IconContainer} from "./style";
import { IInput } from "./types";


const Input = ({leftIcon,name,control,erroMsg,...rest} : IInput) => {
    return (<>
        <InputContainer>
            {leftIcon ? (<IconContainer> {leftIcon }</IconContainer>) : null}
            <Controller 
                name={name}
                control={control}
                rules={{required: true}}
                render={({ field }) =>   <InputText {...field} {...rest}/>}
            />
                    
        </InputContainer>
        {erroMsg ? <ErroText>{erroMsg}</ErroText> : null}
    
        
    </>);
}
  
export { Input };