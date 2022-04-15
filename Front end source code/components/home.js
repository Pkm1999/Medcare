import React from "react";
export default function Home()
{
    return(<div style={{backgroundColor:"aqua"}}>
        <div style={{textAlign:"center",paddingTop:"30px",paddingBottom:"30px"}}>
        <img src={process.env.PUBLIC_URL+"home.jpg"}  height="500px"/>
        </div>
    </div>)
}