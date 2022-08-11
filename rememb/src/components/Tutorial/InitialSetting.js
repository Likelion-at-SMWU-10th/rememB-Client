import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style1.css';
import styled from 'styled-components';

const InitialSetting = () => {
  const [color, setColor] = useState('#FFEFF3');
  const [textcolor, setTextcolor] = useState('#FE4179');
  const [btnActive, setBtnActive] = useState(false);
  const navigate = useNavigate();
  const setBtn = () => {
    navigate('');
  };
  return (
    <>
      <div class="setting-head">
        <img class="setting-head__logo" src="img/emoticons/logo/logo3.png" />
        <br />
        <span class="setting-head__text">
          가입이 완료되었어요!
          <br />
          기본 설정이 필요해요.
        </span>
      </div>
      <div class="setting-body">
        <span class="setting-body__text">
          이름
          <br />
        </span>
        <input class="setting-body__input" placeholder="김멋사"></input>
        <br />
        <span class="setting-body__text">
          생일
          <br />
        </span>
        <input class="setting-body__input" placeholder="10/16"></input>
        <br />
        <span class="setting-body__text text3">
          파티룸 배경 색상
          <br />
        </span>

        <ButtonContainer>
          <PinkButton
            onClick={() => {
              setColor('#FFEFF3');
              setTextcolor('#FE4179');
            }}
          />
          <RedButton
            onClick={() => {
              setColor('#FFDDDD');
              setTextcolor('#FF6161');
            }}
          />
          <OrangeButton
            onClick={() => {
              setColor('#FFEED9');
              setTextcolor('#FE7B1D');
            }}
          />
          <YellowButton
            onClick={() => {
              setColor('#FFF8CC');
              setTextcolor('#6C6C6C');
            }}
          />
          <GreenButton
            onClick={() => {
              setColor('#DEF0EB');
              setTextcolor('#42B494');
            }}
          />
          <BlueButton
            onClick={() => {
              setColor('#D8EEFF');
              setTextcolor('#1786DB');
            }}
          />
          <DarkBlueButton
            onClick={() => {
              setColor('#E2E8FF');
              setTextcolor('#3753C0');
            }}
          />
          <PurpleButton
            onClick={() => {
              setColor('#EDE9FF');
              setTextcolor('#7341C3');
            }}
          />
        </ButtonContainer>

        <div class="setting-body__view">
          <TextPallete textcolor={textcolor}>김멋사의 생일</TextPallete>
          <Pallete color={color} />
        </div>
      </div>
      <div class="setting-foot">
        <div class="setting-foot__btn" onClick={setBtn}>
          <span class="setting-foot__text">설정</span>
        </div>
      </div>
    </>
  );
};

const ButtonContainer = styled.div`
  display: grid;
  padding: 3rem 25rem 5rem 25rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 4rem;
  row-gap: 4rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 10rem;
  border-radius: 30px;
  border: 1.5px solid #787878;

  &.active {
    border-width: 3px;
  }
`;

const PinkButton = styled(Button)`
  background-color: #ffeff3;
`;

const RedButton = styled(Button)`
  background-color: #ffdddd;
`;

const OrangeButton = styled(Button)`
  background: #ffeed9;
`;

const YellowButton = styled(Button)`
  background: #fff8cc;
`;

const GreenButton = styled(Button)`
  background: #def0eb;
`;

const BlueButton = styled(Button)`
  background: #d8eeff;
`;

const DarkBlueButton = styled(Button)`
  background: #e2e8ff;
`;

const PurpleButton = styled(Button)`
  background: #ede9ff;
`;

const Pallete = styled.div`
  width: 200px;
  height: 90px;
  border-radius: 70px;
  margin-top: 3rem;
  margin-right: auto;
  margin-bottom: 10rem;
  margin-left: auto;
  background: ${(props) => props.color};
`;

const TextPallete = styled.div`
  margin-top: 3rem;
  font-size: 3.7rem;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.textcolor};
`;

export default InitialSetting;
