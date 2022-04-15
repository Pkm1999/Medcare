import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import myStore from "./store";

export default function Appointments()
{
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [aList,setList]=useState([]);
    const [err1,setErr1]=useState(false);
    const [err2,setErr2]=useState(false);
    const [err3,setErr3]=useState(false);
    const [err4,setErr4]=useState(false);
    const [err5,setErr5]=useState(false);
    const [err6,setErr6]=useState(false);
    const [msg,setMsg]=useState("")

    const search = useLocation().search;
    const {id} =useParams();
    const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).id;

    console.log(id+"------");
    console.log(uid+"------")

    
    let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }

    const handleTime=(ev)=>
    {
        setTime(ev.target.value);

    }

    const sendData=(ev)=>{

        ev.preventDefault();
        console.log(date);
        console.log(time);
        console.log(id);
        console.log(uid);
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                did:id,
                uid:uid,
                date: date,
                time: time
                
            })
            
        }

        fetch("http://localhost:8081/saveAppointment",reqData)
        .then(resp => resp.json())
        .then(data =>{
            if(data!=null)
            {
                setMsg("Appointment Requested Successfully")
            }
        })
        
        
    }

    const handleDate=(ev) => {
        const dt=ev.target.value;
        setDate(dt);
        console.log("hello...");
        fetch("http://localhost:8081/getAppointments/"+id+"/"+dt)
        .then(res=>res.json())
        .then(data=>{
              data.map((ev)=>{
                if(ev.time=="09:00 AM")
                setErr1(true);
               else if(ev.time=="10:00 AM")
                setErr2(true);
               else if(ev.time=="11:00 AM")
                setErr3(true);
               else if(ev.time=="05:00 PM")
                setErr4(true);
               else if(ev.time=="06:00 PM")
                setErr5(true);
               else
                setErr6(true);
                
                return (
                   <div>
                       
                   </div>
                )
             })
        })
      };

    return (
        <div style={{textAlign:"center",backgroundColor:"cadetblue"}}>
            <h1><u>Appointment Request</u></h1>
            <a href="#" onClick={handleLogout} style={{textAlign:"right"}}> LOGOUT </a>
            <form>
               
                <h3>Select Date :  </h3>
                <h6>(Please select upcoming date)</h6>
                <input type="Date" name={date} onChange={handleDate} value={date}/>
                <h3>Select Time :</h3> 
                
                <input type="text" name={time} value={time}/> <br/>
                
                <button type="button" onClick={handleTime} value="09:00 AM" disabled={err1}>09:00 AM</button>
                <button type="button"  onClick={handleTime} value="10:00 AM" disabled={err2}>10:00 AM</button>
                <button type="button"  onClick={handleTime} value="11:00 AM" disabled={err3}>11:00 AM</button><br/>
                <button type="button"  onClick={handleTime} value="05:00 PM" disabled={err4}>05:00 PM</button>
                <button type="button"  onClick={handleTime} value="06:00 PM" disabled={err5}>06:00 PM</button>
                <button type="button"  onClick={handleTime} value="07:00 PM" disabled={err6}>07:00 PM</button><br/><br/>
                <input type="submit" value="REQUEST APPOINTMENT" onClick={sendData} />
                <br/>
                <br/>
                <h3>{msg}</h3>
                <br/>
            </form>
            <Link to='/patientHome' >BACK TO PATIENT HOME</Link>
        </div>
    )
}