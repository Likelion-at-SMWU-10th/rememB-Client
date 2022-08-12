import React, { Dispatch, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../../components/CommonHome/Layout";

const Letterback=styled.div`
  margin: 7rem 10rem;
  position:relative;
  padding: 5rem;
  background-color: #FFEFF3;
  border-radius: 30px;
  height:50vh;
  background-color: #FFEFF3;
`;
const LetterFrom=styled.input`
  font-size: 4.5rem;
  right: 55rem;
  background:none;
  border:none;
  outline: none;
  /* size: 5 */
  text-align: left;
  width: 22rem;
  /* size: 1rem; */
`;
const LetterInput=styled.div`
  padding-top: 1rem;
  border: none;
  text-align: left;
  outline: none;
  font-size: 4rem;
  height: fit-content;
  &:empty:before {
  content: attr(placeholder);
  color: grey;
  display: inline-block;
};
`;

const LetterTo=styled.div`
  font-size: 4.5rem;
  text-align: left;
  font-weight: 500;
`;
const Btn=styled.div`
  position: absolute;
  bottom:3rem;
  right: 3rem;
  width: 17rem;
  padding:1rem 3rem;
  border:none;
  outline: none;
  text-align: center;
  font-size: 4.5rem;
  border-radius: 80px;
  background-color:#FFC1CC;
`;
const From=styled(Btn)`
  left: 3rem;
  background-color:#FFC1CC;
  width: 38rem;
  padding:1rem 3rem;
  border:none;
  outline: none;
  text-align: left;
  border-radius:20px;
  display: flex;
`;
const Max=styled.span`
  position: absolute;
  bottom:15rem;
  right: 5rem;
  /* background-color: white; */
  /* padding:1rem; */
  /* border-radius: 10px; */

`;

const WriteLetter = ({whichimg}) => {
  const navigate=useNavigate();
  const [max,setMax]=useState(0);
  const [from,setFrom]=useState('');
  const onNameChange=(event)=>{
    setFrom(event.target.value);
    console.log(from);
  }
  const [editable, setEditable] = useState(true);
  const ref = useRef(<LetterInput/>);
  
  // 최대 입력가능한 글자수
  const MAX_LENGTH = 150;
  var newValue = ref.current.innerText;


  const onClickInput=()=>{
    if (ref.current.innerText.length > 151) {
      setEditable(false);
    }
    else{
      setEditable(true)
    }
  }
  const handleInputEvent = () => {
    setMax(ref.current.innerText.length);
    if (ref.current.innerText.length>=150){
      setMax(150);
      let lengthCheckRegEx = new RegExp('^.{'+MAX_LENGTH+',}$');
      if(lengthCheckRegEx.test(ref.current.innerText)){//정규표현식 test 메서드로 최대길이 이상인지 체크
        //최대 길이 초과 차단
        newValue = ref.current.innerText.substr(0,MAX_LENGTH);// 최대 글자수만큼 잘라냄
        console.log(newValue);
        ref.current.innerText=newValue;
    }
      setEditable(false);
    }
  };
  const onBtnClick=()=>{
    // console.log(letter);
    // console.log(from);

    navigate('/others/sendletter',{
      // state:{from:from, content:letter},
      state:{img:img},
    });
  };
 
    const location = useLocation();
    whichimg=location.state.whichimg;
    const img='/img/emoticons/'+whichimg[0]+'/'+whichimg[1]+'.png'
  return (
    <Layout>
        <Letterback h='50vh'>
        <img alt="선택한 일러스트" style={{float:'left',width:'20rem', height:'20rem', margin:'0 3rem 0 0',padding:'10px',borderRadius:'20px',backgroundColor:'white'}} src={img}/>
            <LetterTo>To. 멋사</LetterTo>
            <LetterInput
              onClick={onClickInput}
              ref={ ref }
              placeholder="편지 내용을 작성하세요"
              contentEditable={editable}
              onInput={handleInputEvent}
              >
            </LetterInput>
            <Max>{max}/150</Max>
            <From>From.<LetterFrom type='input' maxLength='5' onChange={onNameChange} /></From>           
            <Btn onClick={onBtnClick}>전송</Btn>
        </Letterback>
        
    </Layout>
  );
};

export default WriteLetter;