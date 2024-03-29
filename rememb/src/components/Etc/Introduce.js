import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LogoImg = styled.img`
  margin-top: 5rem;
  margin-bottom: 3rem;
  width: 17rem;
  height: 17rem;
`;

const TeamImg = styled.img`
  margin-top: 5rem;
  width: 17rem;
  height: 17rem;
  text-align: center;
  justify-content: center;
  margin: 0px 4px;
`;

const MidText = styled.div`
  font-size: 4rem;
  font-weight: 500;
  line-height: 29px;
  color: #787878;
  margin-left: -60rem;
`;

const SmallText = styled.div`
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 29px;
  color: #787878;
  line-height: 20px;
  margin-bottom: 5rem;
`;

const InfoText = styled.div`
  font-size: 3rem;
  font-weight: 500;
  line-height: 29px;
  color: #787878;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  margin: 3px 15px;
`;

const Div1 = styled.div`
  justify-content: space-between;
  display: inline-flex;
`;

const Btn = styled.div`
  width: 60rem;
  border-radius: 20px;
  /* background-color: #ffc1d0; */
  background: linear-gradient(to right, #f3d6ea, #fcd5d0);
  height: 8rem;
  margin: auto;
  margin-top: 10rem;
  font-size: 4rem;
  font-weight: 500;
  line-height: 29px;
`;

const NoteText = styled.div`
  margin-top: 10px;
  font-size: 3rem;
  font-weight: 500;
  line-height: 20px;
  color: #fe4179;
`;

const Introduce = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/tutorial');
  };
  return (
    <>
      <h1
        style={{
          fontSize: '7.5rem',
          color: '#3A3A3A',
          fontStyle: 'normal',
          fontWeight: '700',
          marginTop: '15rem',
        }}
      >
        About Us
      </h1>
      <br />
      <LogoImg src="/img/emoticons/logo/logo3.png" />
      <MidText>Service</MidText>
      <SmallText>
        일 년에 한 번 뿐인 생일을 더욱 기대하고,
        <br />
        추억하게 만들 수 있는 서비스
        <br />
        <span style={{ color: '#FE4179', fontWeight: '700' }}>
          마음을 전하는 rememBirthday
        </span>
      </SmallText>
      <MidText>Team</MidText>
      <SmallText>
        숙명여자대학교 멋쟁이사자처럼 10기
        <br />
        team <span style={{ color: 'black', fontWeight: '700' }}>rememB</span>
      </SmallText>
      <TeamImg src="/img/team/유진.png" />
      <TeamImg src="/img/team/두영.png" />
      <TeamImg src="/img/team/수민.png" />
      <TeamImg src="/img/team/소윤.png" />
      <Div1>
        <InfoText>
          FE,
          <br />
          PM
          <br />
          나유진
        </InfoText>
        <InfoText>
          FE,
          <br />
          DESIGNER
          <br />
          고두영
        </InfoText>
        <InfoText>
          BE
          <br />
          이수민
        </InfoText>
        <InfoText>
          BE
          <br />
          박소윤
        </InfoText>
      </Div1>
      <Btn onClick={onClick}>rememB 사이트 구경하기</Btn>
      <NoteText>
        Tip. 서비스를 100% 즐기고 싶다면 <br /> 가입 시 생일을 '오늘' 날짜로
        설정해보세요!
      </NoteText>
    </>
  );
};

export default Introduce;
