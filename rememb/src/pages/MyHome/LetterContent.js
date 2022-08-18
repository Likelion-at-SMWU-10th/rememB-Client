import React, { useEffect, useState } from "react";
import EtcLayout from "../../components/CommonHome/EtcLayout";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { Btn,BtnImg } from "../../components/CommonHome/CircleBtn";
import axios from "axios";

const Letterback=styled.div`
  margin: 7rem 10rem;
  position:relative;
  padding: 5rem;
  background-color: ${props=>props.color ? props.color:'#FFEFF3'};
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
const LetterContent=()=>{
    const navi= useNavigate();
    const location = useLocation();
    const token=location.state.token;
    const id=location.state.id;
    const letterpk=location.state.letterpk;
    const [content,setContent]=useState('');
    const [imgfolder,setImgfolder]=useState('');
    const [imgN,setImgN]=useState('');
    const [color,setColor]=useState('#FE4179');
    const [img,setImg]=useState('/img/emoticons/1/1.png');
    useEffect(()=>{
        setImg("/img/emoticons/"+imgfolder+'/'+imgN+'.png');
    },[imgfolder,imgN]);
    const onBtnClick=()=>{
        navi(`/myParty/${id}`);
    }
    useEffect(()=>{
        axios.get(
          `https://cors-anywhere.herokuapp.com/http://43.200.193.74:8000/letter/${letterpk}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Access-Control-Allow-Origin': `${window.location.href}`,
              'Access-Control-Allow-Credentials': true,
            },
          }
          // {
          //   withCredentials: false,
          // }
        )
        .then((response) => {
          console.log(response.data);
          setContent(response.data.content);
          setImgfolder(response.data.imgfolder_no);
          setImgN(response.data.img_no);
        //   setTColor(response.data.text);
        //   setDday(response.data.left_birth);
        }).catch(function (error) {
          console.log(error);
        });
      },[]);
      useEffect(()=>{
        axios.get(
          `https://cors-anywhere.herokuapp.com/http://43.200.193.74:8000/partyroom/${id}/`,
          // {
          //   withCredentials: false,
          // }
        )
        .then((response) => {
          console.log(response.data);
        //   setName(response.data.username);
          setColor(response.data.background);
        //   setDday(response.data.left_birth);
        }).catch(function (error) {
          console.log(error);
        });
      },[id]);

    return(
        <EtcLayout id={id}>
            <Letterback color={color}>
                <img alt="선택한 일러스트" style={{float:'left',width:'20rem', height:'20rem', margin:'0 3rem 0 0',padding:'10px',borderRadius:'20px',backgroundColor:'white'}} src={img}/>
                <Content>
                    {content}
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