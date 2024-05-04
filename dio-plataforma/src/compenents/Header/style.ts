import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    max-width:100%;   
    padding: 20px 80px;    
    background:black;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
   
`

export const LoginTitulo = styled.p`
    font-size:25px;
    color:white;
`

export const Cadastroitulo = styled.p`
    padding-left: 10px;
    text-decoration:none;
    font-size:25px;
    color:white; 
`

export const Row = styled.div `
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    color:white; 
    font-size: 25px;
    margin-top:20px;
`

export const Column = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const Wrapper = styled.div `
    width: 100%;
    height:47px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 15px
`


export const BuscarInputContainer = styled.div `
    width: 175px;
    height:30px;
    background : #2D2D37;
    border-radius: 8px;
    padding: 0px 10px;
    margin : 0 12px;
    display:flex;
    align-items:center;
   
`


export const Menu = styled.a`
    font-family : 'Open Sans';
    text-decoration : none;
    font-style : normal;
    font-size :20px;
    line-height: 25px;
    margin-right: 12px;
    color: #FFFFFF;
`

export const MenuRight = styled.a`
    font-family : 'Open Sans';
    text-decoration : none;
    font-style : normal;
    font-size : 20px;
    line-height: 25px;
    margin-right: 12px;
    color: #FFFFFF;
`

export const UserPicture= styled.img `
    width:32px;
    height: 32px;
    border-radius: 22px;
    border : 2px solid #FFFFFF;
`


export const Input= styled.input `
    background: transparent;
    flex: 1;
    border:0;
    color:#FFFFFF;
 
`

