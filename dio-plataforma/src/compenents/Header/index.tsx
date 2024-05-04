import { useNavigate } from "react-router-dom";
import { Container,Row,Wrapper,LoginTitulo,BuscarInputContainer,Menu,MenuRight,Input, UserPicture } from "./style";

import {Button} from "../Button/index";
import React  from "react";
import { IHeader } from "./types";

const Header = ({autenticado} : IHeader) => {
    const navigate = useNavigate();

    const click = () => {
        navigate('/cadastro');
    }
    return (<>
        <Wrapper> 
            <Container>
                <Row>
                    { autenticado ? (
                       
                        <>
                            <LoginTitulo>DIO</LoginTitulo><BuscarInputContainer>
                            <Input placeholder="Buscar...." />
                            </BuscarInputContainer><Menu>Live Code</Menu><Menu>Global</Menu>
                            
                        </>

                       
                    ) : null}
                    
                  
                </Row>

                <Row>

                    { autenticado ? (
                        <>
                            <MenuRight href='/feed'>Home</MenuRight>  
                            <UserPicture src="https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo" />
        
                            </>       
                        ) : (
                                    
                            <>
                                               
                                <Button title='Cadastrar' type='button' onClick={click} > </Button>
                                <Button title='Login'></Button>
                            </>
                    )}

                </Row>

            </Container>
              
        </Wrapper>
    
        
    </>);
}
  
export { Header };