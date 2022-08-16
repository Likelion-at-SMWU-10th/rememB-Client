import React, { useState } from "react";
import Layout from "../../components/CommonHome/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BalCon=styled.div`
  margin: auto;
  margin-top: 8vh;
  height: 50vh;
`;
const BalA=styled.div`
  display: flex;
  margin: auto;
  justify-content: space-evenly;
`;
const BalQ=styled.div`
  margin-bottom: 5vh;
  text-align: center;
  font-weight: 500;
  font-size: 7rem;
`;
const Answer=styled.button`
  position: relative;
  font-size: 5rem;
  font-weight: 500;
  border: ${props=>props.back?'none':"1.5px solid #828282"};
  text-align: center;
  width: 39rem;
  height: 30vh;
  background-color: ${props=>props.back?"#FFE0E8":"#FFFFFF"};
  border-radius: 20px;
  
`;
const Check=styled.img`
  width: 7rem;
  position: absolute;
  top: 4rem;
  left: 4rem;
`;
const Img=styled.img`
  width: 20rem;
  margin: 9rem 0;
`;
const Btn=styled.div`
  text-align: center;
  margin: auto;
  margin-top: 8rem;
  padding: 2rem 4rem;
  width: 30rem;
  font-size: 5rem;
  border-radius: 80px;
  background-color: #FFEFF3;
`;
const Warn=styled.div`
  font-size: 4.5rem;
  font-weight: 500;
  color: #545454;
`;
const AnswerBalance = () => {
  const navi=useNavigate();
  const [myA,setMyA]=useState('');
  const [left,setLeft]=useState(false);
  const [right,setRight]=useState(false);
  const [leftCheck,setLeftCheck]=useState('/img/check.png');
  const [rightCheck,setRightCheck]=useState('/img/check.png');
  const onLeftClick=()=>{
    setMyA(1);
    setLeftCheck('/img/pinkcheck.png');
    setRightCheck('/img/check.png');
    setLeft(true);
    setRight(false);
  }
  const onRightClick=()=>{
    setMyA(2);
    setLeftCheck('/img/check.png');
    setRightCheck('/img/pinkcheck.png');
    setLeft(false);
    setRight(true);
  }
  const onClick=()=>{
    alert('저장되었습니다');
    // navi('/myParty/seeBalance');
  }
  return (
    <Layout>
      <BalCon>
      <BalQ>케이크는?</BalQ>
      <BalA>
        <Answer onClick={onLeftClick} back={left} >
          <Check src={leftCheck}/>
          <Img src="/img/balanceIcon/6-1 1.png"/>
          <br/>맛이 중요
        </Answer>
        <Answer onClick={onRightClick}  back={right}>
          <Check src={rightCheck}/>
          <Img src="/img/balanceIcon/6-2 1.png"/>
          <br/>디자인이 중요
        </Answer>
      </BalA>
      </BalCon>
      <Warn>
        한 번 정한 대답은 변경할 수 없습니다. <br/>
        신중하게 선택해 주세요.
      </Warn>
      <Btn onClick={onClick}>저장</Btn>
    </Layout>
  )
};

export default AnswerBalance;