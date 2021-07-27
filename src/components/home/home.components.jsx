import styled from "styled-components"

export const HomeWrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   background-color: white;
   display: flex;
   justify-content: space-between;
   padding-top: 10vh;
   position: relative;
`

export const UsersSec = styled.div`
   background-color: #C4C4C4;
   width: 25%;
   display: flex;
   flex-direction: column;
   padding-top: 15px; 
`

export const PostsSec = styled.div`
   background-color: #C4C4C4;
   width: 73%;
   padding-top: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: start;
`

export const UserCard = styled.div`
   background-color: ${({ isActive }) => isActive ? '#AAA3FE' : 'white'};
   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
   height: 56px;
   display: flex;
   align-items: center;
   width: 95%;
   margin: 7px;
   color: black;
   cursor:pointer;
   padding-left: 35px;

   &:hover {
       background-color: #AAA3FE;
       transition: background-color 0.3s ease;
   }
`

export const UserTitle = styled.div`
   background-color: white;
   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
   min-height: 56px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 7px 0;
   min-width: 400px;
`

export const Post = styled.div`
   background-color: white;
   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
   min-height: 56px;
   display: flex;
   align-items: center;
   margin: 7px;
   cursor:pointer;
   min-width: 80%;
   padding: 0 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   &:active {
      background-color: #AAA3FE;
   }

   & > a {
      width: 80%;
      color: black;
   }

   & > span {
      
   }
`

export const AddRemoveBtn = styled.span`
   background-color: white;
      padding: 5px;
      border: 1px solid #AAA3FE;
      cursor: pointer;

      &:hover {
         background-color: #AAA3FE;
      }
`

export const CardBtn = styled.div`
   position: fixed;
   top: 85vh;
   right: 30px;
   background-color: white;
   width: 70px;
   height: 70px;
   border-radius: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`