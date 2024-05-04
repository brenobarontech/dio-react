import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    max-width:80%;
    margin : 0 auto;
    margin-top:50px;
  
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`

export const Wrapper = styled.div`  
    max-width:400px;
    margin-left:100px;
    padding: 20px;
`

export const Column = styled.div`
    flex:1;

`

export const Row = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    margin-top:20px;
`


export const ContainerText = styled.div`
    width: 100%;
    max-width:700px;
    padding: 30px;
    background-color:rgba(239, 227, 233, 0.2);
    border-radius: 30px;

    p{
        font-size:30px;
        color:white;
    }
`

export const Titulo = styled.h3`
    font-size:40px;
    font-weight:700;
    margin-bottom:10px;
    color:#FFF;

`

export const SubTitulo = styled.h4`
    font-size:20px;
    font-weight:700;
    margin-bottom:30px;
    color:#FFF;

`  


export const CriarText = styled.p`

    font-size:25px;
    font-style: 'Open-Sans';
    margin-top:10px;
    margin-bottom:30px;
    color:#FFF;

`  

export const CriarTextLogin = styled.p`
    display: flex;
    flex-direction:row;

    font-size:18px;
    font-style: 'Open-Sans';
    margin-top:10px;
    margin-bottom:30px;
    color:#FFF;

    p{
        color:#19e341;
        padding-left:5px;

    }

    button{
        background:transparent;
        border:0;
    }

`  


