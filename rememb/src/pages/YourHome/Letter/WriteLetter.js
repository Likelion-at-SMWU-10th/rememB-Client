import React from "react";
import { useLocation } from "react-router-dom";


const WriteLetter = ({whichimg}) => {
    const location = useLocation();
    whichimg=location.state.whichimg;
    const img='/img/emoticons/'+whichimg[0]+'/'+whichimg[1]+'.png'
  return (
    <div>
        <img style={{width:'5rem', height:'5rem'}} src={img}/>
        <div>
            νΈμ§ νν
        </div>
    </div>
  );
};

export default WriteLetter;