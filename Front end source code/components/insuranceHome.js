import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Insurance from "./Insurance";

export default function InsuranceHome()
{
    return (<div style={{backgroundColor:"GrayText"}} >
       <h1 style={{fontStyle:'italic',backgroundColor:"GrayText",textAlign:"center"}}>Caringly Yours MEDCARE Insurance</h1>
       <div style={{padding:"20px",backgroundColor:"aqua",textAlign:"center"}}><p><h3>Our country has opened up again, but it is important that we continue taking due precautions.
    Always remember to:<br/> 
    ✓ Wash your hands frequently for at least 20 seconds<br/>
    ✓ Always wear a mask while stepping out<br/>
    ✓ Practice social distancing of at least 6 ft.<br/>
    A bit of care you take now, will go a long way in keeping yourselves and your loved ones healthy and safe.</h3></p></div>
    <div style={{textAlign:"center",paddingTop:"30px",paddingBottom:"30px"}}>
    <img src={process.env.PUBLIC_URL+"ihome.jpg"} height="400px"/>
    </div>
    <br/>
    <br/>
    <a href="/getInsurance" style={{color:"blue",textAlign:"center"}}><h1>GET INSURANCE</h1></a>
    </div>)
}