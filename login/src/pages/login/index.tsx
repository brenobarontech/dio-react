import { useForm } from "react-hook-form"
import  React from "react";
import { Container,Titulo ,LoginContainer,Column,Espacamento} from "./styles";
import Button from "../../componentes/Button/index";
import Input from "../../componentes/Input/index";
import { defaultValues, IFormLogin } from "./types";
import { yupResolver } from "@hookform/resolvers/yup"


import * as yup from "yup"


const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required(),
    password: yup.string().min(6, "No minimo 6 caracteres").required(),
  })
  .required();


const Login = () => {  

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues,
        reValidateMode: "onChange",
      });

      
    const onSubmit = (formData) => {
        console.log(formData);

        console.log(isValid);
    
    
    }



    return (
         <>
            <Container>        
                <LoginContainer>
                    <Column>
                        <Titulo>Login</Titulo> 
                        <Espacamento></Espacamento> 
                    
                        
                        <form  onSubmit={handleSubmit(onSubmit)} method="POST">
                            <Column>
                            <Input
                                name="email"
                                placeholder="Email"
                                control={control}
                                errorMensagem={errors?.email?.message}
                            />
                                <Espacamento></Espacamento> 
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Senha"
                                    control={control}
                                    errorMensagem={errors?.password?.message}
                                />
                                
                            </Column>
                            <Espacamento></Espacamento> 

                            {isValid ? (
                                <Button title='Entrar' type='submit' disabled></Button>
                            ) : (
                                <Button title='Entrar' type='submit' disabled></Button>
                             )}

                        </form>


                    </Column>
                    
                </LoginContainer>  
            
            </Container>
        </>
 
    );
}
  
export {Login};