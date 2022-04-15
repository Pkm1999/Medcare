import { Link, useNavigate } from "react-router-dom";
import myStore from "./store";

export default function HospitalHome()
{

    let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }

    return (
       
       
        <div style={{backgroundColor:"aqua",textAlign:'center'}}>
            <h1>Hospital Home </h1> 
             <h1>Welcome {(JSON.parse(localStorage.getItem("loggedinuser"))).name}</h1>
           
            
            
                <Link to="/addDoctor">ADD DOCTOR</Link><span style={{margin:'10px'}}></span>
                <Link to="/addDepartment">ADD DEPARTMENTS</Link><span style={{margin:'10px'}}></span>
                <a href="#" onClick={handleLogout}> LOGOUT </a>
             
           
        </div>
     
    )
}