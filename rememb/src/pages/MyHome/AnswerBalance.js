import React, { useState } from "react";
import Layout from "../../components/CommonHome/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BalCon=styled.div`
  background-color: #D9D9D9;
  width: 90rem;
  margin: auto;
  margin-top: 10vh;
  text-align: center;
  /* margin-bottom: 20px; */
  /* position: relative; */
  padding: 10px;
  height: 50vh;
`;
const BalA=styled.div`
  /* position: absolute; */
  width: fit-content;
  text-align: center;
  /* margin: auto; */
  font-size: 20px;
  text-align:center;
`;
const BalQ=styled.div`
  text-align: center;
  /* position: absolute; */
  font-weight: 500;
  top: 10%;
  font-size: 30px;
`;
const Answer=styled.button`
  display: block;
  margin: auto;
  border: none;
  text-align: center;
  width: 100%;
  background-color: #F4F4F4;
  margin-bottom:20px;
  padding: 5px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  &:active{
   box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
   position: relative;
   top:2px;
  };
  &:focus{
   position: relative;
   top:2px;
   background-color: #C7C5C5;
  }
`;
const Btn=styled.div`
  text-align: center;
  margin: auto;
  margin-top: 20px;
  width: 150px;
  background-color: #D9D9D9;
  font-size: 20px;
`;
const AnswerBalance = () => {
  const navi=useNavigate();
  const [myA,setMyA]=useState('');
  const onBtnClick=(e)=>{
    setMyA(e);
  }
  const onClick=()=>{
    // console.log(myA);
    alert('저장되었습니다');
    navi('/myParty/seeBalance');
  }
  return (
    <Layout>
      <BalCon>
      <BalQ>케이크는 자고로</BalQ>
      <BalA>
        <Answer onClick={()=>onBtnClick(0)}>달달하고 맛있어야 한다</Answer>
        <Answer onClick={()=>onBtnClick(1)}>귀엽고 깜찍해야 한다</Answer>
      </BalA>
      </BalCon>
      <Btn onClick={onClick}>SAVE</Btn>
    </Layout>
  )
};

export default AnswerBalance;