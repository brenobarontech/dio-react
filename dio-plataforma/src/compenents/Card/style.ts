import styled  from "styled-components";

export const CardContainer = styled.div`
    width: 90%;
    background-color:#3B4651;
    position: relative;
    margin-bottom:24px; 

`

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
    border-bottom: 2px solid white;
`


export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    padding: 30px;


    p{
        margin-top:10px;
        color:#FFF;
    }
`


export const UserInfo = styled.div`
    display: flex;
    flex-direction:row;
    margin-bottom:15px;

    div{
        margin-left:20px;
    }

    h4{
        font-family : 'Open Sans';
        font-style : normal;
        font-weight:700;
        font-size :25px;
        line-height: 16px;
        color:#FFF;
       
    }

    p{
        color:red;
        font-size:20px;
    }
`

export const UserPicture = styled.img`
    width: 42px;
    height: 42px;
    border-radius:22px;
    border:3px solid #FFF;
  
`

export const PostInfo = styled.div`

    margin-bottom:12px;

   
    h4{
        font-family : 'Open Sans';
        font-style : normal;
        font-weight:400;
        font-size :18px;
        line-height: 16px;
        color:#FFF;
       
    }

    p{
        font-family : 'Open Sans';
        font-style : normal;
        font-weight:400;
        font-size :12px;
        line-height: 16px;
        color:#FFF;
    }
`


export const HasInfo = styled.div`

    margin-top:12px;

   
    h4{
        font-family : 'Open Sans';
        font-style : normal;
        font-weight:700;
        font-size :18px;
        line-height: 16px;
        color:#FFF;
       
    }

    p{
        font-family : 'Open Sans';
        font-style : normal;
        font-weight:400;
        font-size :14px;
        line-height: 16px;
        color:#FFF;
        margin-top:10px;
    }
`