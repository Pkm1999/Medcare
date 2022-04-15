import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myStore from "./store";

export default function AppointmentSchedule()
{

    const [list,setList]=useState([]);
    
    useEffect(() => {
        const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).id;
        console.log("hello..."+uid);
        fetch("http://localhost:8081/getSchedule?id="+uid)
        .then(res=>res.json())
        .then(data=>{setList(data)
            console.log( (JSON.parse(localStorage.getItem("loggedinuser"))).uid.name+"-----");
        
        })
        
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
        <h1><u>Appointment Schedule</u></h1>
       </div>

       <div style={{textAlign:"center",padding:"80px 80px 80px 80px"}}>
            <table className="table table-bordered table-striped table-active" style={{"borderWidth":"1px", 'borderColor':"black", 'borderStyle':'solid'}}>
                <tr style={{backgroundColor:"coral", height:"50px"}}>
                    <th>PATIENT NAME</th>
                    <th>DATE</th>
                    <th>TIME</th>
                </tr>
               { list.map((ev)=>{
                   return(
                       <tr>
                           <td>{ev.uid.name}</td>
                           <td>{ev.date}</td>
                           <td>{ev.time}</td>
                            <hr/>
                       </tr>
                   )
                })}
            </table>
            </div>

            <Link to='/doctorHome' >BACK TO DOCTOR HOME</Link>
    </div>)

}