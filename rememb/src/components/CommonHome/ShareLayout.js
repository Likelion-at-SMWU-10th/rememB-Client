import React from "react";
import CommonNav from "./CommonNav";
import MainTitle from "./MainTitle";
import ShareBtn from "./ShareBtn";

const ShareLayout=(props, {name, bday})=>{

    return(
        <>
            <CommonNav/>
            <MainTitle name={name} bday={bday}/>
            <ShareBtn/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default ShareLayout;