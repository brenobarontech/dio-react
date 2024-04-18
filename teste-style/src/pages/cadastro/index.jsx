import {useNavigate} from "react-router-dom";
import {MdEmail ,MdLock} from 'react-icons/md';
import { RiUserSettingsFill } from "react-icons/ri";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button} from "../../compenents/Button"
import { Header } from "../../compenents/Header/index.jsx";
import { Input } from "../../compenents/Input/index.jsx";
import { Container,Wrapper,Titulo,SubTitulo,Column,ContainerText,CriarText,CriarTextLogin} from "./style.js";
// import img1  from  "../../assets/imagem/img1.png" 


//Validaão dos campos para quandoe enviar
const schema = yup.object({
    nome: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras')
    .required('Campo obrigatório'),
    email : yup.string().email('Email não é valido.').required('Campo obrigatorio'),
    senha : yup.string().min(3,'Senha inválida.').required('Campo obrigatorio'),
});


//Componente da tela cadastro
const Cadastro = () => {

    //Mavagação
    const navigate = useNavigate();    

    //quando clicar vai pra login
    const login= () => {
        navigate('/login');
    }


    //Tratamento do form como vamos manipular
    const {control,handleSubmit,formState: { errors},} = useForm({
        resolver: yupResolver(schema),
        mode : 'OnChange',
    });


    //Toda vez que o for é submit , vai tratar os dados
    const onSubmit = (formData) => {
        console.log(formData.email.lenght);

       
        navigate('/feed');
    
    }
    


    return (<>
       
        <Header/>
        <Container>
            <Column>
                <ContainerText>
                    <p>
                        A plataforma para você  aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                        
                    </p>    
                       
                </ContainerText>
               
            </Column>
            <Column>
                
                <Wrapper>
                    <Titulo>Comece agora grátis</Titulo>
                    <SubTitulo>Crie sua conta e make the change </SubTitulo>
                    <form  onSubmit={handleSubmit(onSubmit)} method="POST">
                        <Input control={control} erroMsg={errors?.nome?.message}  name="nome" placeholder='Nome' type='text' leftIcon={<RiUserSettingsFill  />}  />
                        <Input control={control} erroMsg={errors?.email?.message}  name="email"  placeholder='E-mail' leftIcon={<MdEmail  />}/>
                        <Input control={control} erroMsg={errors?.senha?.message}  name="senha" placeholder='Senha' type='password' leftIcon={<MdLock />}  />

                        <Button title="Entrar" variant="secondary"   type='submit'/>


                    </form>
                    <CriarText>

                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </CriarText>
                    <CriarTextLogin>
                        Ja tenho conta. <button onClick={login}> <p> Fazer Login </p></button> 
                    </CriarTextLogin>
 

                </Wrapper>
            </Column>
            
        </Container>
       
    </>);
}
  
export { Cadastro };