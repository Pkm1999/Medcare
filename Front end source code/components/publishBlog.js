import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import myStore from "./store";

export default function PublishBlog()
{

    const [content,setContent]=useState("");
    const [msg,setMsg]=useState("");

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
                did:uid,
                content: content,
               
                
            })
            
        }

        fetch("http://localhost:8081/saveBlog",reqData)
        .then(resp => resp.json())
        .then(data =>{
            if(data!=null)
                setMsg("Blog Published Successfully")
            })
        
        
    }

    return (
        <div style={{textAlign:"center",backgroundColor:"cadetblue"}}>
            <h1><u>Publish Blogs</u></h1>
            <a href="#" onClick={handleLogout} style={{textAlign:"right"}}> LOGOUT </a>
            <form>
               
                <h3>Write content here :</h3>
                <textarea
                    name="content"  rows={5}
                    cols={50}
                    onChange={(ev)=>setContent(ev.target.value)}/>

                    <br/>
                    <input type="submit" value="PUBLISH" onClick={sendData} />
                    <h3>{msg}</h3>
            </form>
            <Link to='/doctorHome' >BACK TO DOCTOR HOME</Link>
        </div>
    )
}