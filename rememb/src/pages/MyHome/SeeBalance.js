import React, { useEffect } from 'react';
import Layout from '../../components/CommonHome/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MylistAfter = styled.div`
  background-color: #ffeff3;
  width: 90%;
  height: 100px;
  margin: auto;
  margin-top: 7px;
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
  display: inline-flex;
  justify-content: space-around;
  border-radius: 30px;
  align-items: center;
`;

const MylistBefore = styled.div`
  background-color: #e7e7e7;
  width: 90%;
  height: 100px;
  margin: auto;
  margin-top: 7px;
  font-size: 20px;
  padding: 10px;
  border-radius: 30px;
`;

const Img = styled.img`
  width: 15rem;
  height: 15rem;
  justify-content: center;
  align-items: center;
`;

const Answer = styled.div``;

const Question = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;

const SeeBalance = ({ token }) => {
  const navigate = useNavigate();
  const onClick1 = () => {
    // D-7 밸런스게임 페이지로
    navigate('');
  };
  const onClick2 = () => {
    // D-6 밸런스게임 페이지로
    navigate('');
  };

  const getToken = () => {
    console.log('제발수미나');
    const userData = axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://43.200.193.74:8000/balance/mylist/15/',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': `${window.location.href}`,
            'Access-Control-Allow-Credentials': true,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
  };
  useEffect(() => {
    console.log(token);
    getToken();
  }, []);
  return (
    <Layout>
      {/* map써서 컴포넌트들을 다 불러와야할듯
      그래서 그 컴포넌트들이 각각 판단해서 기간 됐으면 내용공개, 안지났으면 블러처리 일케 .. 
      아래는 걍 임시로 해둔거양*/}
      <Question>선물은 자고로 #1</Question>
      <MylistAfter onClick={onClick1}>
        <Answer>
          실용적
          <br />
          이어야 한다
        </Answer>
        {/* 사이 구분선 만들어야 함 */}
        {/* <hr
          style={{
            color: '#828282',
            width: '0px',
            height: '10px',
          }}
        /> */}
        <Answer>예뻐야 한다</Answer>
      </MylistAfter>
      <Question>선물은 자고로 #2</Question>
      <MylistAfter onClick={onClick2}>
        <Answer>나한테 없는 것</Answer>
        <Answer>자주 쓰는 것</Answer>
      </MylistAfter>
      <Question>D-5 공개</Question>
      <MylistBefore>
        <Img src="../../../img/balanceIcon/lock.png" />
      </MylistBefore>
      <Question>D-4 공개</Question>
      <MylistBefore></MylistBefore>
      <Question>D-3 공개</Question>
      <MylistBefore></MylistBefore>
      <Question>D-2 공개</Question>
      <MylistBefore></MylistBefore>
      <Question>D-1 공개</Question>
      <MylistBefore></MylistBefore>
      {/* <SevenBalance /> 이 파일 나중에 삭제해도 될듯*/}
    </Layout>
  );
};

export default SeeBalance;
