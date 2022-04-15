import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myStore from "./store";

export default function ShowConsultation()
{
    const [list,setList]=useState([]);
    const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).id;
    
    useEffect(() => {
        //console.log("hello...");
        fetch("http://localhost:8081/getList/"+uid)
        .then(res=>res.json())
        .then(data=>setList(data))
      },[]);

      let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }
   


      return (
        <div className="container">
             <div style={{backgroundColor:"cadetblue",textAlign:"center",height:"100px"}}>
             <h1><u>Consultations</u></h1>
             <a href="#" onClick={handleLogout} style={{textAlign:"right"}}> LOGOUT </a>
            </div>
            
            { list.map((ev)=>{
                   return (<div>
                       <h4>{ev.date}</h4>
                       <h4>Symptoms :</h4>
                       <h3> {ev.symptoms}</h3>
                       <h4>Response :</h4>
                      <h3>{ev.response}</h3>
                      
                      <hr/>
                      </div>
                   )
                })}
            <Link to='/patientHome' >GO BACK TO PATIENT HOME</Link><span style={{margin:'10px'}}></span>
        </div>
    )
}