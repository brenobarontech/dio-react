import styled from "styled-components";


export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const LoginContainer = styled.div`
    width: 100%;
    max-width: 380px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 10px;
    padding: 30px 30px;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;


    &:hover{
        box-shadow: 5px 5px 5px 5px #888888;
    }
`


export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`





export const Titulo = styled.p`
    width:100%;
    color:#000;
    font-size:50px;
    text-align:center;
`

export const Espacamento = styled.div`
    margin: 10px 0;
`