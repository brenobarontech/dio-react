import styled from "styled-components";


export const InputContainer = styled.div`
    width:100%;
    max-width:auto;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items:center;
    margin-bottom:20px;
   
`;

export const IconContainer = styled.div`
    margin-right:10px;
    color:#FFF;

`


export const InputText = styled.input`
    background-color: transparent;
    color: #FFF;
    border: 0;
    height: 30px;
    width:100%;
`;

export const ErroText = styled.p`
    color:#e61207;
    font-weight:900px;
    font-size:16px;
    margin-top:-10px;
    margin-bottom:10px;
`