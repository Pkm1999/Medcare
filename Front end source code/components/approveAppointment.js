import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ApproveAppointment()
{
    const [list,setList]=useState([])
    let navigate=useNavigate();

    useEffect(() => {
        const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).id;
        console.log("hello..."+uid);
        fetch("http://localhost:8081/approveAppointment?id="+uid)
        .then(res=>res.json())
        .then(data=>setList(data))
        
      },[]);

      const approve=(id)=>{
          console.log(id+" =====");
          fetch("http://localhost:8081/approve/"+id)
        .then(res=>res.json())
        .then(data=>{})
      }
      
      const decline=(id)=>{
        console.log(id+" bsjabsduhjfgjdfdbf");
        fetch("http://localhost:8081/decline/"+id)
      .then(res=>res.json())
      .then(data=>{})
    }

    return (
         <div className="container">
        <div style={{backgroundColor:"cadetblue",textAlign:"center",height:"100px"}}>
        <h1><u>Requested Appointment</u></h1>
        </div>
        <div style={{textAlign:"center"}}>
            <table className="table table-bordered table-striped table-active" style={{"borderWidth":"1px", 'borderColor':"black", 'borderStyle':'solid',textAlign:"center"}}>
                <tr style={{backgroundColor:"coral", height:"50px"}}>
                    <th>PATIENT NAME</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th colspan="2">STATUS</th>
                </tr>
               { list.map((ev)=>{
                   return(
                       <tr>
                           <td>{ev.uid.name}</td>
                           <td>{ev.date}</td>
                           <td>{ev.time}</td>
                            <td> <button type={"button"} onClick={()=>{approve(ev.id)}}>APPROVE</button></td>
                            <td> <button type={"button"} onClick={()=>{decline(ev.id)}}>DECLINE</button></td>
                            <hr/>
                       </tr>
                   )
                })}
            </table>
            </div>
            <Link to='/doctorHome' >BACK TO DOCTOR HOME</Link>
    </div>)
}