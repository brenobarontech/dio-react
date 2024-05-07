import React from "react";
import { InputContainer ,ErroMensagem } from "./styles";
import { IInputProps} from "./types";
import { Controller } from "react-hook-form";




const Input = ({control,errorMensagem,name,...rest} : IInputProps) => 
{
    return(<>
         
        <InputContainer>
            <Controller 
               control={control}
               name={name}
               render={({ field: { onChange, onBlur, value, ref } }) => (
                 <input
                   {...rest}
                   onChange={onChange}
                   onBlur={onBlur}
                   value={value}
                   ref={ref}
                 />
               )}
                


            />      
           
        </InputContainer>
        {errorMensagem ? <ErroMensagem>{errorMensagem}</ErroMensagem> : ''}

    </>)

}


export default Input;