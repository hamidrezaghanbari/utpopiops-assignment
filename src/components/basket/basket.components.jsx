import styled from "styled-components";

export const Item = styled.div`
   background-color: white;
   width: 80vw;
   padding: 0 10px;
   height: 56px;
   display: flex;
   align-items: center;
   justify-content: ${({empty}) => empty ? 'center' : 'space-between'};
   margin-bottom: 20px; 
`

export const BasketSec = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #c4c4c4;
   align-items: center;
   padding-top: 50px;
   margin-top: 5vh;
   width: 100%;
   min-height: 95vh;
`

export const Back = styled.div`
    background-color: white;
   width: 150px;
   height: 56px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor:pointer;
   
`