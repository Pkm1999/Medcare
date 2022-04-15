import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myStore from "./store";

export default function Hospitals()
{
    const [hospitalList,setList]=useState([]);

    
    useEffect(() => {
        console.log("hello...");
        fetch("http://localhost:8081/getHospitals")
        .then(res=>res.json())
        .then(data=>setList(data))
      },[]);

      let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }
    
    console.log(hospitalList)
    return (
        <div className="container">
             <div style={{backgroundColor:"cadetblue",textAlign:"center",height:"100px"}}>
             <h1><u>Hospitals Information</u></h1>
             <a href="#" onClick={handleLogout} style={{textAlign:"right"}}> LOGOUT </a>
            </div>
            
            { hospitalList.map((ev)=>{
                   return (<div>
                       <p> {ev.hid}</p>
                      <h2>{ev.name}</h2>
                      <h3>{ev.address}</h3>
                      <h3>Rating : {ev.rating}</h3>
                      <Link to={`/getDoctors/${ev.hid}`}  >Get Doctors List</Link>
                      <hr/>
                      </div>
                   )
                })}

        </div>
    )

}