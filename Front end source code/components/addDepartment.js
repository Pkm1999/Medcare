import { useState } from "react"
import { Link } from "react-router-dom";

export default function AddDepartment()
{

    const [dno,setDno]=useState("");
    const [dname,setDname]=useState("");
    const [msg,setMsg]=useState("");
    const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).hid;
    console.log(uid);

    const  sendData=(ev)=>{
        ev.preventDefault();
        
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
               
                dno: dno,
                dname: dname,
                hid:uid
               
            })
            
        }

        fetch("http://localhost:8081/saveDepartment",reqData)
        .then(resp => resp.json())
        .then(data => {
                if(data!=null)
                {
                    setMsg("Department Successfully Added")
                }
                else{
                    setMsg("Department Not Added")
                }
                console.log(msg+"--------")
        })
        
        
    }


    return (
        <div style={{backgroundColor:"aqua"}}>
            
            <form style={{padding:"150px" }}>
                <table>
                    <tr>
                        <td>Enter Department Number : </td>
                        <td><input type="text" name="dno" value={dno}
                onChange={e=>setDno(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td>Enter Department Name : </td>
                        <td><input type="text" name="dname" value={dname}
                onChange={e=>setDname(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="SAVE" 
                 onClick={sendData}/></td>
                    </tr>
                    <tr>
                        <td><h3>{msg}</h3></td>
                        <td></td>
                    </tr>
                </table>

            </form>
            <Link to='/hospitalHome' >BACK TO HOSPITAL HOME</Link>
        </div>
    )
}