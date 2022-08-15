import React from 'react';
import Layout from '../../components/CommonHome/Layout';
import SevenBalance from '../../components/MyHome/SevenBalance';
import styled from 'styled-components';

const Mylist1 = styled.div`
  background-color: #ffeff3;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  font-size: 20px;
  padding: 10px;
`;

const ans1 = styled.div`
  font-size: 10px;
`;

const Mylist = styled.div`
  background-color: #d9d9d9;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  font-size: 20px;
  padding: 10px;
`;

const SeeBalance = () => {
  return (
    <Layout>
      {/* map써서 컴포넌트들을 다 불러와야할듯
      그래서 그 컴포넌트들이 각각 판단해서 기간 됐으면 내용공개, 안지났으면 블러처리 일케 .. 
      아래는 걍 임시로 해둔거양*/}
      <Mylist1>
        <ans1>
          실용적
          <br />
          이어야 한다
        </ans1>
        <ans2>예뻐야 한다</ans2>
      </Mylist1>
      <Mylist>D-6의 밸런스게임</Mylist>
      <Mylist>D-5의 밸런스게임</Mylist>
      <Mylist>D-4의 밸런스게임</Mylist>
      <Mylist>D-3의 밸런스게임</Mylist>
      {/* <SevenBalance /> 이 파일 나중에 삭제해도 될듯*/}
    </Layout>
  );
};

export default SeeBalance;
