import { Link, useNavigate } from "react-router-dom";
import myStore from "./store";

export default function AdminHome()
{

    let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }

    return (
       
       
        <div style={{backgroundColor:"aqua",textAlign:'center'}}>
            <h1>Admin Home </h1> 
             <h1>Welcome {(JSON.parse(localStorage.getItem("loggedinuser"))).name}</h1>
           
            
            
                <Link to="/addHospital">ADD HOSPITAL</Link><span style={{margin:'10px'}}></span>
                <a href="#" onClick={handleLogout}> LOGOUT </a>
             
           
        </div>
     
    )
}