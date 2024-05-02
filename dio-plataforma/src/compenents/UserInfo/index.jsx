
import { Container,UserPicture,NameText,Progress} from "./style";


const UserInfo = ({nome,image,percentual}) => {
    return (<>
        <Container>

            <UserPicture src={image}/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>

            </div>
            


          
           
        </Container>
    
        
    </>);
}
  
export { UserInfo };