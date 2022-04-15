import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import myStore from "./store";

export default function GetConsultation()
{
    const [symptoms,setSymptoms]=useState("")
    const [msg,setMsg]=useState("")
    {/*const [fever,setFever]=useState("")
    const [exhaust,setExhaust]=useState("")
    const [sneez,setSneez]=useState("")
    const [blockednose,setBlockednose]=useState("")
    const [sorethroat,setSorethroat]=useState("")
    const [caugh,setCough]=useState("")
    const [vomit,setVomit]=useState("")
    const [diarrhoea,setDiarrhoea]=useState("")
    const [headache,setHeadache]=useState("")
    const [jointpain,Jointpain]=useState("")
const [other,SetOther]=useState("")*/}

    const search = useLocation().search;
    const {id} =useParams();
    const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).id;

    let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }

    

    const sendData=(ev)=>{
        ev.preventDefault();
       
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                uid:uid,
                did:id,
                symptoms: symptoms,
               
                
            })
            
        }

        fetch("http://localhost:8081/getConsult",reqData)
        .then(resp => resp.json())
        .then(data =>{
            if(data!=null)
                setMsg("Query Send To Doctor")
        })
        
        
    }

    return (
        <div style={{textAlign:"center",backgroundColor:"cadetblue"}}>
            <h1><u>Get Consultation</u></h1>
            <a href="#" onClick={handleLogout} style={{textAlign:"right"}}> LOGOUT </a>
            <form>
               <h3>Write Symptoms :</h3>
               
               <textarea
                    name="symptoms"  rows={5}
                    cols={50}
                    onChange={(ev)=>setSymptoms(ev.target.value)}/>

                    <br/>
                    <input type="submit" value="SEND" onClick={sendData} />
                    {/*<div style={{textAlign:"left",paddingLeft:500}}>
                    <input type="checkbox" name="fever" value="Fever" />Fever<br/>
                    <input type="checkbox" name="exhaust" value="Feeling tired or exhausted" />Feeling tired or exhausted<br/>
                    <input type="checkbox" name="sneez" value="Sneezing" />Sneezing<br/>
                    <input type="checkbox" name="blockednose" value="Runny/Blocked Nose"  />Runny/Blocked Nose<br/>
                    <input type="checkbox" name="sorethroat" value="Sore throat" />Sore throat<br/>
                    <input type="checkbox" name="caugh" value="Caugh" />Cough<br/>
                    <input type="checkbox" name="vomit" value="Vomiting" />Vomiting<br/>
                    <input type="checkbox" name="diarrhoea" value="Diarrhoea Stomach Ache" />Diarrhoea Stomach Ache<br/>
                    <input type="checkbox" name="headache" value="Headache"  />Headache<br/>
                    <input type="checkbox" name="jointpain" value="Muscle/Joint Pain" />Muscle/Joint Pain<br/>
                    Other Symptoms :
                    <input type="text" name={other} value={other} onChange={(ev)=>{SetOther(ev.target.value)}}/>
                    <input type="submit" value="SUBMIT" onClick={handleData}/>
                    </div>*/}
                    <h3>{msg}</h3>
            </form>
            <Link to='/patientHome' >BACK TO PATIENT HOME</Link>
        </div>
    )
}