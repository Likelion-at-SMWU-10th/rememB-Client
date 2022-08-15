import React from "react";
import EtcLayout from "../../components/CommonHome/EtcLayout";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { Btn,BtnImg } from "../../components/CommonHome/CircleBtn";

const Letterback=styled.div`
  margin: 7rem 10rem;
  position:relative;
  padding: 5rem;
  background-color: #FFEFF3;
  border-radius: 30px;
  height:50vh;
  background-color: #FFEFF3;
`;
const Content=styled.div`
  padding-top: 1rem;
  border: none;
  text-align: left;
  outline: none;
  font-size: 4rem;
  height: fit-content;
`;
const From=styled.div`
  position: absolute;
  bottom:3rem;
  right: 3rem;
  width: 17rem;
  padding:1rem 3rem;
  width: fit-content;
  border:none;
  outline: none;
  text-align: center;
  font-size: 4.5rem;
  border-radius: 80px;
  background-color:#FFC1CC;
`;
const LetterContent=({img})=>{
    const navi= useNavigate();
    const location = useLocation();
    img=location.state.img;
    const onBtnClick=()=>{
        navi('/myParty');
    }
    return(
        <EtcLayout>
            <Letterback>
                <img alt="선택한 일러스트" style={{float:'left',width:'20rem', height:'20rem', margin:'0 3rem 0 0',padding:'10px',borderRadius:'20px',backgroundColor:'white'}} src={img}/>
                <Content>
                    To. 멋사에게<br/>
                    안녕 멋사야 나는 두영이야
                    너의 생일을 진심으로 축하해 
                    어쩌구저쩌구 블라블라블라블라블라블라숑숑 블라블라숑숑블라블라숑숑
                    어쩌구저쩌구 블라블라 숑숑블라블라 숑숑블라블라숑숑
                </Content>
                <From>From. 유진</From>           
            </Letterback>
            <Btn onClick={onBtnClick} style={{top:'72vh',left:'80rem'}}>
                <BtnImg src="/img/home.png" alt="homeBtn"/>
            </Btn>
        </EtcLayout>
    );
};

export default LetterContent;