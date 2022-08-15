import React, { useEffect, useState } from 'react';
import PartyRoom from '../../components/CommonHome/PartyRoom';
import ToBalance from '../../components/MyHome/ToBalance';
import WatchBalance from '../../components/CommonHome/WatchBalance';
import axios from 'axios';
import ShareLayout from '../../components/CommonHome/ShareLayout';
import { useLocation } from 'react-router-dom';

const MyHome = ({ res }) => {
  const location = useLocation();
  const [info,setInfo]=useState('');
  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [birth,setBirth]=useState('');
  const [provider,setProvider]=useState('');
  let token='';
  /* 아래 부분은 로그인후를 위한거라.. 그냥 url에 /myParty를 입력하면 아래부분때문에 오류남! 그래서 코딩할땐 주석처리하고 진행하면될듯!! */
  if (!window.location.href.includes('access_token')) {
    res = location.state.res;
    console.log(res);
    // console.log(res);
  }

  const getToken = () => {
    token = window.location.href.split('=')[1].split('&')[0];
    const userData = axios.get(
      'https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/nid/me',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': `${window.location.href}`,
          'Access-Control-Allow-Credentials': true,
        },
      }
    ).then(response=>{
      // console.log(userData);
      // console.log(userData.data);
      // console.log(userData.data.response);
      // console.log();
      // setInfo(response.data.response);
      // setUsername(info.name);
      // setBirth(info.birthyear+'-'+info.birthday);
      // setEmail(info.email);
      axios.post(
        'https://cors-anywhere.herokuapp.com/http://43.200.193.74:8000/user/signin/',
        {
          email:response.data.response.email,
          username: response.data.response.name,
          provider:'naver',
          birth:response.data.response.birthyear+"-"+response.data.response.birthday
          // email:email,
          // username: username,
          // provider:'naver',
          // birth:birth
          // token,
        },
        {
          withCredentials: false,
        }
      )
      .then((res) => {
        console.log("됐니 ㅜㅜ");
        console.log(res);
        console.log(res.data);
      }).catch(function (error) {
        console.log(error);
      });
      console.log(response.data);
    }
    );
    //CORS에러 뜨는게 당연함 !! 구래서 ARC로 헤더 넣어서 get 요청하면 제대로뜸
  };

  useEffect(() => {
    window.location.href.includes('access_token') && getToken();
  }, []);
  return (
    <ShareLayout>
      <PartyRoom />
      <ToBalance />
      {/*생일 당일이 되면, ToBalancce대신 롤링페이퍼 보기 버튼으로*/}
      <WatchBalance who={'나'} token={token} />
    </ShareLayout>
  );
};

export default MyHome;
