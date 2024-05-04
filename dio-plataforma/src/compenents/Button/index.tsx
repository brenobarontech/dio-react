import { ButtonContainer  } from "./style";
import { IButton } from './types';
import React from "react";


const Button = ({title,variant = "primary", onClick} : IButton) =>{
    return (
        <>
            <ButtonContainer variant={variant} onClick={onClick}>
                {title}
            </ButtonContainer>
        </>
    )
};


export { Button }