import React from "react";
import CommonNav from "./CommonNav";
import styled from "styled-components";
import { Btn, BtnImg } from "./CircleBtn";
const Today=styled.div`
  margin-top: 12rem;
  font-size: 9rem;
  color: #FE4179;
  font-weight: 700;
  text-align: center;
`;
const Dday=styled.div`
  margin:1rem 0 3rem;
  text-align: center;
  font-weight:400;
  font-size: 6rem;
`;
const EtcLayout=(props)=>{

    return(
        <>
            <Today>2022.08.12</Today>
            <Dday>김멋사의 20번째 생일</Dday>
            <CommonNav/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default EtcLayout;