import { useState } from "react";

export default function ForgotPassword()
{
    const [uname,setUname]=useState("");
    const [pwd,setPwd]=useState("");
    const [msg,setMsg]=useState("");

    const sendData=(ev)=>{
        //ev.preventDefault();
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
               
                username: uname,
               
            })
            
        }

        fetch("http://localhost:8081/getPassword",reqData)
        .then(resp => resp.json())
        .then(data => {
            if(data!=null)
                setMsg("Here is you password : "+data.password);
            else
                setMsg("Invalid Username");
        })
        
    }

    return (<div style={{backgroundColor:"aqua"}}>
    <form style={{padding:"200px" }}>
        <table>
            <tr>
                <td>Enter Username : </td>
                <td><input type="text" name="uname" value={uname}
        onChange={e=>setUname(e.target.value)} /> </td>
            </tr>
            <tr>
                <td><input type="button" value="GET PASSWORD" 
        onClick={sendData} /></td>
            </tr>
            <tr>
                <td>{msg}</td>
            </tr>
           
        </table>

    </form>
  
</div>)

}