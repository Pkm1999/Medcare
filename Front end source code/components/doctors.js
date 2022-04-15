import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import myStore from "./store";
export default function Doctor(props)
{
    const [doctorList,setList]=useState([]);

    const search = useLocation().search;
    const {id} =useParams();

    useEffect(() => {
        console.log("hello...");
        fetch("http://localhost:8081/getDoctors/"+id)
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
             <h1><u>Doctors Information</u></h1>
             <a href="#" onClick={handleLogout} style={{textAlign:"right"}}> LOGOUT </a>
            </div>
           
            { doctorList.map((ev)=>{
                   return (<div>
                      <h2>Dr. {ev.name}</h2>
                      <h3>{ev.education}</h3>
                      <h3>Specialization : {ev.specilization}</h3>
                     <h3>Experience : {ev.experience} years</h3>
                     <Link to={`/appointment/${ev.id}`} >GET APPOINTMENT</Link><span style={{margin:'10px'}}></span>
                     <Link to={`/consultation/${ev.id}`} >GET CONSULTATION</Link><span style={{margin:'10px'}}></span>
                      <hr/>
                      </div>
                   )
                })}

        </div>
    )

}