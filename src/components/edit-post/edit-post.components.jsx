import styled from "styled-components";

export const EditPageWrapper = styled.div`
   padding: 150px 0 0 200px;
`

export const FormWrapper = styled.form`
   display: flex;
   flex-direction: column;
`

export const Input = styled.div`
   width: 70%;
   
   position: relative;
   display: flex;
   flex-direction: column;
   margin-bottom: 40px;
   
    & > label {
        cursor:pointer;
       background-color: white;
       position: absolute;
       min-width: 45px;
       text-align: center;
       top: -10px;
       left: 45px;
       color: #6200EE
    }

    & > input, textarea {
        min-height: 54px;
        border: 1.5px solid #6200EE;
        padding-left: 20px;
        border-radius: 4px;
        font-size: 16px;
        outline: none;

        &:focus {
            border: 2px solid #6200EE;
        }
    }

    & > textarea {
        padding-top: 20px;
        min-height: 150px;
        line-height: 1.7;
    }
`

export const ButtonsSec = styled.div`
   display: flex;
   width: 70%;
   justify-content: space-between;
`

export const Btn = styled.button`
   background: #FFFFFF;
   border: none;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    padding: 16px 20px; 
    font-size: 16px;
    cursor: pointer;
    outline: none;
    display: inline-block;

    &:active {
        background-color: #6200EE;
        color: white;
    }
`

export const Err = styled.span`
   color: red;
   display: inline-block;
   margin: 5px 0 0 10px;
`

export const Msg = styled.div`
   width: 70%;
   margin-top: 20px;
   padding: 10px 20px;
   background-color: ${({success}) => success ? 'lightgreen': 'tomato'};
`