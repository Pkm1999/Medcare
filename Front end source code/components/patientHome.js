import { BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom';
import Content from './content';
import Home from './home';
import Hospitals from './hospitals';
import myStore from './store';
 function PatientHome()
{
    let navigate=useNavigate();
    const handleLogout=()=>{
        myStore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        navigate("/home");
    }
   
    //console.log((JSON.parse(localStorage.getItem("loggedinuser"))).name);
    return (
       
       
        <div style={{backgroundColor:"aqua",textAlign:'center'}}>
            <h1>Patient Home </h1> 
             <h1>Welcome {(JSON.parse(localStorage.getItem("loggedinuser"))).name}</h1>
           
            
            
                <Link to="/hospitalList">HOSPITALS</Link><span style={{margin:'10px'}}></span>
                <Link to="/showAppointments">APPOINTMENTS</Link><span style={{margin:'10px'}}></span>
                <Link to="/showConsultations">CONSULTATIONS</Link><span style={{margin:'10px'}}></span>
                <a href="#" onClick={handleLogout}> LOGOUT </a>
             
           
        </div>
     
    )
}

export default PatientHome;

