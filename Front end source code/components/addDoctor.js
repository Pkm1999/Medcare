import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AddDoctor()
{
    const [name,setName]=useState("");
    const [dob,setDob]=useState("");
    const [address,setAddress]=useState("");
    const [mobile,setMobile]=useState("");
    const [gender,setGender]=useState("");
    const [specialization,setSpecialization]=useState("");
    const [education,setEducation]=useState("");
    const [experience,setExperience]=useState("");
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");

   

    const [msg,setMsg]=useState([]);
    const uid= (JSON.parse(localStorage.getItem("loggedinuser"))).hid;
    console.log(uid);


    

  

   
const sendData=(ev)=>{

    ev.preventDefault();
    console.log({name});
    console.log({address});
    console.log({dob});
    console.log({gender});
    console.log({specialization});
    console.log({education});
    console.log({experience});
    console.log({uid});
    const reqData = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: name,
            dob:dob,
            address:address,
            mobile:mobile,
            gender:gender,
            spec:specialization,
            edu:education,
            exp:experience,
            uname:email,
            pwd:pwd,
            hid:uid
            
        })
        
    }

    fetch("http://localhost:8081/saveDoctor",reqData)
    .then(resp => resp.json())
    .then(data =>{
        if(data!=null)
        {
            setMsg("Doctor Added Successfully")
        }
        else{
            setMsg("Doctor Not Added ")
        }
    })
    
    
}




    return (
        <div className="container" style={{backgroundColor:"aqua"}}>
            <h1 style={{textAlign:"center"}}>Add Doctors Details</h1>
            <form style={{padding:"100px" }} >
                <table>
                    <tr>
                        <td> Enter Name :</td>
                        <td><input type="text" name="name" value={name}
                onChange={e=>setName(e.target.value)} /> <br/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Enter Address :</td>
                        <td><input type="text" name="address" value={address}
                onChange={e=>setAddress(e.target.value)} /> <br/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Enter Contact :</td>
                        <td><input type="text" name="mobile" value={mobile}
                onChange={e=>setMobile(e.target.value)} /> <br/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> Enter Gender :</td>
                        <td><input type="radio" id="male" name="gender" value="Male" onChange={e=>setGender(e.target.value)}/>
                        <label for="male">Male</label>
                        <input type="radio" id="fimale" name="gender" value="Fimale" onChange={e=>setGender(e.target.value)}/>
                        <label for="fimale">Fimale</label><br/></td>
                       
                        <td></td>
                    </tr>
                    <tr>
                            <td>Enter DOB :</td>
                            <td><input type="date" name="dob" value={dob}
                    onChange={e=>setDob(e.target.value)} /> <br/></td>
                            <td></td>
                        </tr>
                    
                    <tr>
                        <td>Enter Specialization :</td>
                        <td> <input type="text" name="specialization" value={specialization}
                onChange={e=>setSpecialization(e.target.value)} /> <br/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Enter Education :</td>
                        <td><input type="text" name="education" value={education}
                onChange={e=>setEducation(e.target.value)} /> <br/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Enter Experience :</td>
                        <td><input type="text" name="experience" value={experience}
                onChange={e=>setExperience(e.target.value)} /> <br/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> Enter Email :</td>
                        <td><input type="text" name="email" value={email}
                onChange={e=>setEmail(e.target.value)} /> <br/></td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <td> Create Password :</td>
                        <td><input type="text" name="pwd" value={pwd}
                onChange={e=>setPwd(e.target.value)} /> <br/></td>
                        <td></td>
                    </tr>
                    
                   
                    <tr>
                        <td><input type="submit" value="Save" 
                onClick={sendData} /></td>
                
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