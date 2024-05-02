import {useNavigate} from "react-router-dom";
import { Button} from "../../compenents/Button"
import { Header } from "../../compenents/Header/index.jsx";
import { Container, Titulo ,TituloHighLight,TextContent } from "./style.js";
import img1  from  "../../assets/imagem/img1.png" 


const Home = () => {

    // Funcao para fazer navegação entre as paginas
    const navigate = useNavigate();

    const click = () => {
        navigate('/login')
    }

    return (<>
       
        <Header/>
        <Container>
            <div>
                <Titulo > 
                    <TituloHighLight>
                        Implemente <br />
                    </TituloHighLight>
                    o seu futuro global agora.
                </Titulo>
                <TextContent>                    
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>' '
                <Button title="Começar Agora." variant="secondary" onClick={click}> </Button>
            </div>
            <div>
                <img src={img1} alt='imagem' width={700}></img>
            </div>
           
            
           
        </Container>
       
    </>);
}
  
export { Home };