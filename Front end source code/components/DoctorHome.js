import { Link, useNavigate } from "react-router-dom";
import myStore from "./store";

export default function DoctorHome()
{

    let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }


    return (
       
       
        <div style={{backgroundColor:"aqua",textAlign:'center'}}>
            <h1>Doctor Home </h1> 
             <h1>Welcome {(JSON.parse(localStorage.getItem("loggedinuser"))).name}</h1>
           
            
            
                <Link to="/approveAppointment">APPROVE APPOINTMENT</Link><span style={{margin:'10px'}}></span>
                <Link to="/giveConsultation">GIVE CONSULTATION</Link><span style={{margin:'10px'}}></span>
                <Link to="/publishBlog">PUBLISH BLOG</Link><span style={{margin:'10px'}}></span>
                <Link to="/schedule">DAILY SCHEDULE</Link><span style={{margin:'10px'}}></span>
                <a href="#" onClick={handleLogout}> LOGOUT </a>
             
           
        </div>
     
    )
}