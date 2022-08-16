import React from 'react';
import styled from 'styled-components';
import SocialLogin from '../../components/Tutorial/SocialLogin';

// const Div = styled.Div`
//   font-size: 5rem;
//   color: #787878;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 32px;
//   padding-top: 20px;
//   padding-bottom: 20px;
// `;

const Login = () => {
  // const [who,setWho]=useState('');
  return (
    <>
      {/* <Div>로그인 후 이용 가능합니다.</Div> */}
      <SocialLogin />
    </>
  );
};

export default Login;
