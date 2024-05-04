// import {useNavigate} from "react-router-dom";
// import {MdEmail ,MdLock} from 'react-icons/md';
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"

// import { Button} from "../../compenents/Button/index"
// import { Input } from "../../compenents/Input/index";
import  React from "react";

import { Container,Titulo ,LoginContainer,Column,Espacamento} from "./styles";


import Button from "../../componentes/Button/index";
import Input from "../../componentes/Input/index";

const Login = () => {  

    return (
         <>
            <Container>        
                <LoginContainer>
                    <Column>
                        <Titulo>Login</Titulo> 
                        <Espacamento></Espacamento> 
                        
                            <Column>
                                <Input id='Breno'/>
                                <Espacamento></Espacamento> 
                                <Input id='Breno'  />
                                
                            </Column>
                            
                            
                
                        <Espacamento></Espacamento> 
                        <Button title='Entrar' ></Button>
                            
                      
                    
                    
                    </Column>
                        
               
                    
                    
                </LoginContainer>  
            
            </Container>
        </>
 
    );
}
  
export {Login};