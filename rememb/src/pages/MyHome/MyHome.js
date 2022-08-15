import React, { useEffect } from 'react';
import PartyRoom from '../../components/CommonHome/PartyRoom';
import ToBalance from '../../components/MyHome/ToBalance';
import WatchBalance from '../../components/CommonHome/WatchBalance';
import axios from 'axios';
import ShareLayout from '../../components/CommonHome/ShareLayout';
import { useLocation } from 'react-router-dom';
import SeeRP from '../../components/Etc/SeeRP';
const MyHome = ({ res }) => {
  const location = useLocation();
  /* 아래 부분은 로그인후를 위한거라.. 그냥 url에 /myParty를 입력하면 아래부분때문에 오류남! 그래서 코딩할땐 주석처리하고 진행하면될듯!! */
  // if (!window.location.href.includes('access_token')) {
  //   res = location.state.res;
  //   console.log(res);
  //   // console.log(res);
  // }

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    //  axios.post(`${token}/user/naver-login`,{
    //         token
    //     },{
    //         withCredentials:true
    //     }
    //     ).then((res)=>{
    //         window.location.replace('/tutorial');
    //     })
    const userData = axios.get('https://openapi.naver.com/v1/nid/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
      <WatchBalance who={'나'} />
    </ShareLayout>
  );
};

export default MyHome;
