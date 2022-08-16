import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LoginButton = styled.div`
  width: 50px;
  height: 20px;
`;

const Naver = () => {
  const { naver } = window;
  const NAVER_CLIENT_ID = 'n0uYMSZfV8FBZpE_Qbgc'; // 발급 받은 Client ID 입력
  const NAVER_CALLBACK_URL = 'http://rememb.site:3000/myParty/'; // 작성했던 Callback URL 입력

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      callbackHandle: true,
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: 'green', type: 3, height: '40' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();

    getNaverToken();
    naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log('로그인상태');
      }
    });
  };
  const location = useLocation();

  const getNaverToken = () => {
    if (!location.hash) {
      return;
    }

    const token = location.hash.split('=')[1].split('&')[0];
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    console.log(token);
  };

  useEffect(() => {
    initializeNaverLogin();
    //사실 이니셜라이즈만 의미있긴함.. 나중에 클리닝하자~~
    userAccessToken();
  }, []);

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  return (
    <>
      <div id="naverIdLogin">
        <LoginButton src="../../../img/balanceIcon/lock.png" />
        ee
      </div>
    </>
  );
};

export default Naver;
