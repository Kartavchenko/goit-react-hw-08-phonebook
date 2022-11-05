import styled from "@emotion/styled";

export const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
`;

export const FormModal = styled.form`
    position: absolute;
    top: 200px;
    left: 200px;
    padding: 20px;
    background-color: pink;
    border-radius: 10px;
    box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
`

export const InputForm = styled.input`
    border-radius: 5px;
    border-color: rgba(150, 150, 150, 0.7);
    background-color: rgba(200, 200, 200, 0.3);  
`