import React from "react";
import styled from "styled-components";

const Btn=styled.div`
    /* position: relative; */
    position: absolute;
    top: 30rem;
    right: 10rem;
    width: 9rem;
    height: 9rem;
    background-color: #FFEFF3;
    border: none;
    border-radius: 50px;
    &:active{
        background-color:#FE4179;
    }
`; 
const BtnImg=styled.img`
    position: absolute;
    top: 1.3rem;
    left: 1.5rem;
    width: 5rem;
    height:6rem;
`;

const ShareBtn=()=>{
    const onShareClick=(e)=>{
        e.preventDefault();
        var url= window.location.href;
        var text=document.createElement('textarea');
        document.body.appendChild(text);
        text.value=url;
        text.select();
        document.execCommand('copy');
        console.log(window.location.href);
        document.body.removeChild(text);
        window.alert('링크가 복사되었습니다.');
    }
    return (
        <Btn onClick={onShareClick}>
            <BtnImg alt='shareBtn' src='/img/share.png' />
        </Btn>
    );
}

export default ShareBtn;