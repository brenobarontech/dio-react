import { Controller } from "react-hook-form"

import {InputContainer,ErroText, InputText, IconContainer} from "./style";

const Input = ({leftIcon,name,control,erroMsg,...rest}) => {
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