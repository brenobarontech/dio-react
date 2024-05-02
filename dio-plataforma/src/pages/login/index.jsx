import {useNavigate} from "react-router-dom";
import {MdEmail ,MdLock} from 'react-icons/md';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button} from "../../compenents/Button"
import { Header } from "../../compenents/Header/index.jsx";
import { Input } from "../../compenents/Input/index.jsx";
import { Column, Wrapper ,Row,TituloLogin,Titulo,SubTituloLogin,Esquecitext,Container,CriarText } from "./style.js";
// import img1  from  "../../assets/imagem/img1.png" 
import {Api} from "../../servicos/api";


const schema = yup.object({
    email : yup.string().email('Email não é valido.').required('Campo obrigatorio'),
    senha : yup.string().min(3,'Senha inválida.').required('Campo obrigatorio'),
});

const Login = () => {
    
    const navigate = useNavigate();    

    const {control,handleSubmit,formState: { errors},} = useForm({
        resolver: yupResolver(schema),
        mode : 'OnChange',
    });


    // Consultando api para buscar dados
    const onSubmit = async FormData => {
        
            // Uma forma de buscar com filtro dentro de uma api json-server
            console.log(FormData);
            // Api é pode ser assicrona com um tempo de resposta para buscar
            const { data } = await Api.get(`users?email=${FormData.email}&senha=${FormData.senha}`);
            
            if(data.length === 1)
            {
                alert('Login Efetuado');
                navigate('/feed');   
            }
            else
            {
                alert('Usuario ou senha errada.');
                
            }

       
    
    };

   


    return (<>
       
        <Header/>
        <Container>
            <Column>
                <Titulo>
                    A plataforma para voce aprender com experts,dominar as principais tecnogias e entrar mais rapido nas empresa mais desejadas.
                    
                </Titulo>
               
                
            </Column>
           
            <Column>
                <Wrapper>
                    <TituloLogin>Faça seu cadastro</TituloLogin>
                    <SubTituloLogin>Faça seu Login e make the change.</SubTituloLogin>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} erroMsg={errors?.email?.message}  name="email"  placeholder='E-mail' leftIcon={<MdEmail  />}/>
                        <Input control={control} erroMsg={errors?.senha?.message}  name="senha" placeholder='Senha' type='password' leftIcon={<MdLock />}  />
                        <Button title="Entrar" variant="secondary"   type='submit'/>


                    </form>
                    <Row>
                        <Esquecitext>Esqueci minha senha</Esquecitext>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>                
            </Column> 
           
        </Container>
       
    </>);
}
  
export { Login };