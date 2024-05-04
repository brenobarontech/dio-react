import styled from "styled-components";
import { IFeedflex } from './types';

export const Container = styled.main`
    width:100%;
    max-width:100%;   
    padding: 20px 80px; 
    margin : 0 auto;
    margin-top:120px;
    display:flex;
    flex-direction:row;

`

export const Titulo = styled.h2`
    font-family: 'Open-Sans';
    font-weight: 700;
    font-size:18px;
    line-height:25px;
    color:#FFF;
    margin-bottom: 20px;
       

`

export const TituloHighLight = styled.span`
    font-family: 'Open-Sans';
    font-weight: 700;
    font-size:18px;
    line-height:25px;
    color:#FFF;
`




export const Column = styled.div<IFeedflex>`
    flex:${({flex}) => flex };
    padding-right:24px;
`

