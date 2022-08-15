import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/MyHome/MyHome';
import AnswerBalance from './pages/MyHome/AnswerBalance';
import SeeBalance from './pages/MyHome/SeeBalance';
import SelectImg from './pages/YourHome/Letter/SelectImg';
import YourHome from './pages/YourHome/YourHome';
import WriteLetter from './pages/YourHome/Letter/WriteLetter';
import RollingPaper from './pages/Etc/RollingPaper';
import Tutorial from './pages/Tutorial/Tutorial';
import Login from './pages/Tutorial/Login';
import Sample from './pages/Etc/Sample';
import Pang from './pages/YourHome/Letter/Pang';
import Setting from './pages/Tutorial/Setting';
import './style.css';
import './style1.css';
import LetterContent from './pages/MyHome/LetterContent';
import Intro from './pages/Etc/Intro';

function App() {
  return (
    <Routes>
      {/* 튜토리얼 */}
      <Route path="/tutorial" element={<Tutorial />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/setting" element={<Setting />}></Route>
      {/* 내 페이지 볼 때 */}
      <Route path="/myParty" element={<Home />}></Route>
      <Route path="/myParty/ansBalance" element={<AnswerBalance />}></Route>
      <Route path="/myParty/seeBalance" element={<SeeBalance />}></Route>
      <Route path="/lettercontent" element={<LetterContent />}></Route>
      {/* 남의 페이지 볼 때 */}
      <Route path="/others" element={<YourHome />}></Route>`
      <Route path="/others/selectimg" element={<SelectImg />}></Route>
      <Route path="/others/writeletter" element={<WriteLetter />}></Route>
      <Route path="/others/sendletter" element={<Pang />}></Route>
      {/* 기타 페이지 (정보확인, 롤링페이퍼 등) */}
      <Route path="/etc/seeRP" element={<RollingPaper />}></Route>
      <Route path="/etc/sample" element={<Sample />}></Route>
      {/* 초기 페이지 */}
      <Route path="/introduce" element={<Intro />}></Route>
    </Routes>
  );
}

export default App;
