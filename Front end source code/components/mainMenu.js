
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AddDepartment from './addDepartment';
import AddDoctor from './addDoctor';
import AddHospital from './addHospital';
import AdminHome from './adminHome';
import Appointments from './appointment';
import AppointmentSchedule from './appointmentSchedule';
import ApproveAppointment from './approveAppointment';
import Blogs from './blogs';
import Content from './content';
import DoctorHome from './DoctorHome';
import Doctor from './doctors';
import ForgotPassword from './forgotPassword';
import GetConsultation from './getConsultation';
import GiveConsultation from './giveConsultation';
import Home from './home';
import HospitalHome from './hospitalHome';
import Hospitals from './hospitals';
import Insurance from './Insurance';
import InsuranceHome from './insuranceHome';
import Login from './Login';
import PatientHome from './patientHome';
import PublishBlog from './publishBlog';
import ShowAppointments from './showAppointments';
import ShowConsultation from './showConsultation';
import myStore from './store';

export default class MainMenu extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={flag:false};
    }

    render(){
        myStore.subscribe(()=>{this.setState({flag:myStore.getState().loggedin})});
        return (
            <div>
                
                    <div style={{display:this.state.flag?'none':'block'}}>   
         
                      <Link to='/home' >HOME</Link><span style={{margin:'10px'}}></span>
                      <Link to='/blogs' >BLOGS</Link><span style={{margin:'10px'}}></span>
                      <Link to='/insurance' >GET INSURANCE</Link><span style={{margin:'10px'}}></span>
                      <Link to='/login' >SIGNIN</Link><span style={{margin:'10px'}}></span>
                    </div>
     
                      <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/blogs' element={<Blogs/>}/>
                        <Route path='/insurance' element={<InsuranceHome/>}/>
                        <Route path='/getInsurance' element={<Insurance/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path="/hospitalList" element={<Hospitals/>} />
                        <Route path='/patientHome' element={<PatientHome/>}/>
                        <Route path='/getDoctors/:id' element={<Doctor/>}/>
                        <Route path='/appointment/:id' element={<Appointments/>}/>
                        <Route path='/consultation/:id' element={<GetConsultation/>}/>
                        <Route path='/showAppointments' element={<ShowAppointments/>}/>
                        <Route path='/hospitalHome' element={<HospitalHome/>}/>
                        <Route path='/addDoctor' element={<AddDoctor/>}/>
                        <Route path='/addDepartment' element={<AddDepartment/>}/>
                        <Route path='/doctorHome' element={<DoctorHome/>}/>
                        <Route path='/publishBlog' element={<PublishBlog/>}/>
                        <Route path='/schedule' element={<AppointmentSchedule/>}/>
                        <Route path='/approveAppointment' element={<ApproveAppointment/>}/>
                        <Route path='/adminHome' element={<AdminHome/>}/>
                        <Route path='/addHospital' element={<AddHospital/>}/>
                        <Route path='/giveConsultation' element={<GiveConsultation/>}/>
                        <Route path='/showConsultations' element={<ShowConsultation/>}/>
                        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
                        <Route element={<Content/>}/>
                        
                      </Routes>
                      
                     
           
            </div>
        )
    }
}