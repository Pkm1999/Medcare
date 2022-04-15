import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function GiveConsultation()
{

    const [response,setResponse]=useState("")
    const [list,setList]=useState([])
    const [msg,setMsg]=useState("")

    let navigate =useNavigate;
    useEffect(() => {
        const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).id;
        fetch("http://localhost:8081/consultationList?id="+uid)
        .then(res=>res.json())
        .then(data=>setList(data))
        
      },[]);

      const sendData=(cid)=>{
       
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
            
               response:response,
               id:cid
                
            })
            
        }

        fetch("http://localhost:8081/sendResponse",reqData)
        .then(resp => resp.json())
        .then(data =>{
            if(data!=null)
            {
              setMsg("Response send successfully");
            }
        })
        
        
    }

      return (
        <div className="container">
       <div style={{backgroundColor:"cadetblue",textAlign:"center",height:"100px"}}>
       <h1><u>Requested Consultation</u></h1>
       </div>
       <div style={{textAlign:"center"}}>
       { list.map((ev)=>{
                   return(
                    <div>
                    <h3>{ev.uid.name}</h3>
                    <h2><u>{ev.symptoms}</u></h2>
                    <h3>{ev.date}</h3>
                    <h4>Provide Response Here :</h4>
                    <textarea
                    name="response"  rows={5}
                    cols={50}
                    onChange={(ev)=>setResponse(ev.target.value)}/><br/>
                    <input type="submit" value="SEND" onClick={sendData(ev.id)} />
                    <h3>{msg}</h3>
                    <hr/>
                    </div>
                   )
                })}
             
          
        </div>
        <Link to='/doctorHome' >BACK TO DOCTOR HOME</Link>
   </div>)
}