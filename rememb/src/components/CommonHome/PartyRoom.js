import React, { useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import {BiChevronLeft,BiChevronRight} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BackImg=styled.div`
  margin: 7rem 10rem;
  padding: 7rem;
  background-color: #FFEFF3;
  border-radius: 30px;
  height:50vh;
  display: grid;
  grid-template-columns: repeat(auto-fill,15rem);
  grid-gap: 5vh 1rem; 
  
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: space-between; /* 수평 가운데 정렬 */
  `;
const Each=styled.div`
  width: 15rem;
  height: 15rem;

`;
const Img=styled.img`
  width: 15rem;
  height: 15rem;
`;
const DivPre = styled.div`
  position: absolute;
  left: 0rem;
  top:45%;
  z-index: 99;  
`;
const Div = styled.div`
  position: absolute;
  right: 10rem;
  top:45%;
  z-index: 99;
`;
const PartyRoom = () => {
  const navi=useNavigate();
  // const [img,setImg]=useState();
  const onImgClick=(e)=>{
    navi('/lettercontent',{state:{img:e},});
  }
  const gift=[
    '/img/emoticons/1/1.png','/img/emoticons/1/2.png','/img/emoticons/1/3.png',
    '/img/emoticons/2/1.png','/img/emoticons/2/2.png','/img/emoticons/2/3.png',
    '/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png',
    '/img/emoticons/0/0.png','/img/emoticons/0/1.png','/img/emoticons/0/2.png',
    '/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png','/img/emoticons/3/1.png','/img/emoticons/3/2.png','/img/emoticons/3/3.png'];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <Div >
        <BiChevronRight style={{color:'pink',position:'absolute',width:'10rem',height:'10rem'}}/>
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <BiChevronLeft style={{color:'pink',position:'absolute',width:'10rem',height:'10rem'}}/>
      </DivPre>
    ),
  };
  return (
    <Slider style={{position:'relative'}} {...settings}>
      <>
      <BackImg>      
        {gift.map((index)=>(
            <>
              <Each
                onClick={()=>onImgClick(index)} >
                <Img 
                  src={index} 
                  alt='gift' 
                />
                <span>유진</span>
              </Each>
            </>          
        ))}
      </BackImg>
      </>
      <>
      <BackImg>      
        {gift.map((index)=>(
            <>
              <Each
                onClick={()=>onImgClick(index)} >
                <Img 
                  src={index} 
                  alt='gift' 
                />
                <span>유진</span>
              </Each>
            </>          
        ))}
      </BackImg>
      </>
      <>
      <BackImg>      
        {gift.map((index)=>(
            <>
              <Each
                onClick={()=>onImgClick(index)} >
                <Img 
                  src={index} 
                  alt='gift' 
                />
                <span>유진</span>
              </Each>
            </>          
        ))}
      </BackImg>
      </>
      <>
      <BackImg>      
        {gift.map((index)=>(
            <>
              <Each
                onClick={()=>onImgClick(index)} >
                <Img 
                  src={index} 
                  alt='gift' 
                />
                <span>유진</span>
              </Each>
            </>          
        ))}
      </BackImg>
      </>
    </Slider>
  );
};

export default PartyRoom;