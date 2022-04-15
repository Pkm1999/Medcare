import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddHospital()
{
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [rating,setRating]=useState("");
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
    const [msg,setMsg]=useState("");

    const sendData=(ev)=>{

        ev.preventDefault();
        //console.log({name});
        //console.log({address});
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: name,
                address:address,
                ratings:rating,
                email:email,
                pwd:pwd
                
            })
            
        }
    
        fetch("http://localhost:8081/saveHospital",reqData)
        .then(resp => resp.json())
        .then(data =>{
            if(data!=null)
            {
                setMsg("Hospital Added Successfully")
            }
            else{
                setMsg("Hospital Not Added ")
            }
        })
        
        
    }
    

    return (
        <div className="container" style={{backgroundColor:"aqua"}}>
            <h1 style={{textAlign:"center"}}>Add Hospital Details</h1>
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
                        <td>Enter Ratings :</td>
                        <td><input type="text" name="rating" value={rating}
                onChange={e=>setRating(e.target.value)} /> <br/></td>
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
           
           
           
            <Link to='/adminHome' >BACK TO ADMIN HOME</Link>
           
        </div>
    )
}