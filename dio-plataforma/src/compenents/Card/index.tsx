import React from "react";
import { SlLike } from "react-icons/sl";
import { CardContainer,ImageBackground,Content,UserInfo ,UserPicture,PostInfo,HasInfo} from "./style";

import img from '../../assets/imagem/img1.png'


// Card dos post dentro de feed
const Card = () => {
    return (<>
        <CardContainer>
            <ImageBackground src={ img ? img : null }/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://lh3.googleusercontent.com/ogw/AF2bZyi6wlehV0SXJ3uKTuypVdbm8IG-kJBPo-AJo72nP4AnDI4D=s32-c-mo"/>
                    <div>
                        <h4>Titulo Breno</h4>
                        <p>Titulo Breno</p>
                    </div>

                </UserInfo>
                <PostInfo>
                    <h4>Projeto</h4>
                    <p>Projeto com detalis</p>
                </PostInfo>
                <HasInfo>
                    <h4>Projeto</h4>
                    <p>Projeto com detalis <strong>Saiba mais....</strong></p>
                </HasInfo>
                <p>
                    <SlLike /> 25
                </p>
                


            </Content>


        </CardContainer>

        
        
        
    </>);
}
  
export  { Card };