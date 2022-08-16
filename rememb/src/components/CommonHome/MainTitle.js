import React, { useState } from "react";
import styled from "styled-components";

const Who=styled.div`
  margin-top: 12rem;
  font-size: 9rem;
  color: #FE4179;
  font-weight: 700;
  text-align: center;
`;
const Dday=styled.div`
  margin:1rem 0 3rem;
  text-align: center;
  font-weight:400;
  font-size: 6rem;
`;
const MainTitle = ({name, bday}) => {
    // const [name,setName]=useState("멋사");
    // const [bday,setBday]=useState(3);

  return (
    <>
      <Who>{name}의 생일</Who>
      <Dday>D - {bday}</Dday>
    </>
  );
};

export default MainTitle;