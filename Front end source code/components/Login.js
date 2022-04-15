
import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myStore from "./store";


export default function Login()
{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState("");
    const [user,setUser] = useState(null)
    const [doctor,setDoctor] = useState(null)
    const [hospital,setHospital] = useState(null)

    let navigate=useNavigate();

    const  sendData=(ev)=>{
        ev.preventDefault();
        
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
               
                username: username,
                password: password
               
            })
            
        }

        fetch("http://localhost:8081/login",reqData)
        .then(resp => resp.json())
        .then(data => {
               
                 localStorage.setItem("loggedinuser",JSON.stringify(data));
                 let role = (JSON.parse(localStorage.getItem("loggedinuser"))).login.role;
                 console.log(role);
                 console.log((JSON.parse(localStorage.getItem("loggedinuser"))).name)
                 myStore.dispatch({type:'LOGGEDIN'})
                if(role==="User")
                    navigate("/patientHome");
                else if(role=="Doctor")
                    navigate("/doctorHome");
                else if(role=="Hospital")
                    navigate("/hospitalHome");
               else
                    navigate("/adminHome")
               
           
        })
        
        
    }

    

    return (
        <div style={{backgroundColor:"aqua"}}>
            <form style={{padding:"200px" }}>
                <table>
                    <tr>
                        <td>Enter Username : </td>
                        <td><input type="text" name="username" value={username}
                onChange={e=>setUsername(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td>Enter Password : </td>
                        <td><input type="password" name="password" value={password}
                onChange={e=>setPassword(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="LOGIN" 
                onClick={sendData} /></td>
                    </tr>
                    <tr>
                        <td><Link to="/forgotPassword">Forgot Password</Link></td>
                    </tr>
                    <tr>
                        <td><h3>{errorMsg}</h3></td>
                    </tr>
                </table>

            </form>
          
        </div>
    )
}