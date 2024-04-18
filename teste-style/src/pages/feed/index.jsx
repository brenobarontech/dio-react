// import { Link }  from 'react-router-dom'
import { Header } from "../../compenents/Header/index.jsx";
import { Card } from "../../compenents/Card/index.jsx";
import { UserInfo } from "../../compenents/UserInfo/index.jsx";
import { Container,Column ,TituloHighLight,Titulo} from "./style.js";


// Tela de feed com todos os post
const Feed = () => {
    return (<>
        <Header autenticado={true}></Header>
        <Container>
            <Column flex={3}>
                <Titulo>FEED</Titulo>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

                   
            </Column>
           
            <Column flex={1}>
                <TituloHighLight># RANKING DA SEMANA</TituloHighLight>
                <UserInfo nome='Breno'  image={"https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"} percentual={30} />
                <UserInfo nome='Breno'  image={"https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"} percentual={40} />
                <UserInfo nome='Breno'  image={"https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"} percentual={80} />
                <UserInfo nome='Breno'  image={"https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"} percentual={90} />
                <UserInfo nome='Breno'  image={"https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"} percentual={75} />
                <UserInfo nome='Breno'  image={"https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"} percentual={55} />
                <UserInfo nome='Breno'  image={"https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"} percentual={27} />
                <UserInfo nome='Breno'  image={"https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"} percentual={8} />
            </Column>
           
        
           
        </Container>
       
        
    </>);
}
  
export { Feed };
  