import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Btn,BtnImg } from "../../../components/CommonHome/CircleBtn";
// import Modal from 'react-modal';
// import { ReactPortal } from "react";
const Img=styled.div`
    position: relative;
    top:18rem;
    z-index: 3;
    margin: auto;
    display: flex;
    width: 35rem;
    height: 35rem;
    overflow: hidden;
    text-align: center;
    justify-content:center;
    background-color:#FACAD6;
    border-radius: 100px;
`;
const Logo=styled.img`
  margin-top: 12rem;
  margin-bottom: 4rem;
  width: 25rem;
  height: 20rem;
`;
const PangBack=styled.div`
  z-index: 1;
  position: relative;
  margin: 7rem 10rem;
  padding: 7rem;
  background-color: #FFEFF3;
  border-radius: 30px;
  height:50vh;
`;
const Deco1=styled.img`
    position: absolute;
    top: 5rem;
    right: 5rem;
    width: 22rem;
    height: 25rem;
    z-index: 2;
`;
const Deco2=styled.img`
    position: absolute;
    height:35rem;
    width:25rem;
    bottom:5rem;
    left: 5rem;
`;
const Info=styled.div`
    z-index: 3;
    position:absolute;
    top:65rem;
    left: 20rem;
    font-size:3.5rem;
`;
const Pang=({whichimg})=>{
    const location=useLocation();
    const navi=useNavigate();
    whichimg=location.state.img;
    // useEffect(() => {
    //     setTimeout(()=>navi('/others'),2500);
    //   }, []);
    const onBtnClick=()=>{
        navi('/others');
    }
    return(
        <>
            <Logo src="/img/pangLogo.png" alt='panglogo' />
            <PangBack>
                <Deco1 src="/img/pang1.png" alt="background"/>
                <Deco2 src="/img/pang2.png" alt='background' />
                <Img><img alt="선택한 일러스트" style={{zIndex:'3',width:'35rem',padding:'7rem'}} src={whichimg} /> </Img>
                <Info>
                    편지가 전송됐어요!<br/>
                    멋사님의 생일이 되면<br/>
                    멋사님께 공개될 예정이에요!
                </Info>
                <Btn onClick={onBtnClick} style={{top:'52vh',left:'70rem'}}>
                    <BtnImg src="/img/home.png" alt="homeBtn"/>
                </Btn>
            </PangBack>
            {/* <ReactPortal elementId="modal-root">
            <ModalOverlay visible={visible} /> 
            <ModalWrapper
                className={className}
                onClick={maskClosable ? onMaskClick : null}
                tabIndex="-1"
                visible={visible}
            >
                <ModalInner tabIndex="0" className="modal-inner">
                    <ModalInner2>
                        <ImgStyle>
                            <a href="https://www.pping.kr" rel="noopener noreferrer" target={'_blank'} cursor="pointer">
                                <img src={img} style={{ width: '100%', height: '100%' }} alt="" />
                            </a>
                        </ImgStyle>
                        {closable && (
                            <CloseStyle>
                                <Close className="modal-close" onClick={Dayclose}>
                                    오늘 하루 닫기
                                </Close>
                                <Close className="modal-close" onClick={close}>
                                    닫기
                                </Close>
                            </CloseStyle>
                        )}
                    </ModalInner2>
                </ModalInner>
            </ModalWrapper>
        </ReactPortal> */}
        </>
    );
}

export default Pang;