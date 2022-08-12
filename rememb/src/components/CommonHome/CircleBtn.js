import styled from "styled-components";

export const Btn=styled.div`
    /* position: relative; */
    position: absolute;
    top: 30rem;
    right: 10rem;
    width: 9rem;
    height: 9rem;
    background-color: #FFEFF3;
    border: none;
    border-radius: 50px;
    &:active{
        background-color:#FE4179;
    }
`; 
export const BtnImg=styled.img`
    position: absolute;
    top: 1.3rem;
    left: 1.5rem;
    width: auto;
    height:6rem;
`;
