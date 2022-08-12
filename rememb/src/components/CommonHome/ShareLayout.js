import React from "react";
import CommonNav from "./CommonNav";
import MainTitle from "./MainTitle";
import ShareBtn from "./ShareBtn";

const ShareLayout=(props)=>{

    return(
        <>
            <CommonNav/>
            <MainTitle/>
            <ShareBtn/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default ShareLayout;