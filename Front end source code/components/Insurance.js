import React from "react";
import { useNavigate } from "react-router-dom";

export default class Insurance extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            
            name:"",
            address:"",
            contact:"",
            email:"",
            aadhar:"",
            dob:"",
            gender:"",
            pwd:"",
            accno:"",
            aname:"",

            errors:{
                nameError:"",
                addressError:"",
                contactError:"",
                emailError:"",
                aadharError:"",
                dobError:"",
                genderError:"",
                pwdError:"",
                accnoError:"",
                anameError:""
            },

            formValid:false,
            nameValid:false,
            addressValid:false,
            contactValid:false,
            emaliValid:false,
            aadharValid:false,
            dobValid:false,
            genderValid:false,
            pwdValid:false,
            accnoValid:false,
            anameValid:false,

           msg:""
        }
    }

   
    handleInput=(ev)=>{
        const nm = ev.target.name;
        const val = ev.target.value;
        let errors=this.state.errors;

        let formV=this.state.formValid;
        let nameV=this.state.nameValid;
        let contactV=this.state.contactValid;
        let addressV=this.state.addressValid;
        let emailV=this.state.emaliValid;
        let aadharV=this.state.aadharValid;
        let dobV=this.state.dobValid;
        let genderV=this.state.genderValid;
        let pwdV=this.state.pwdValid;
        let accnoV=this.state.accnoValid;
        let anameV=this.state.anameValid;
        
        
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
        const nameregexp=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
        const contactregexp=/^(\+\d{1,3}[- ]?)?\d{10}$/;
        const aadharregexp=/^\d{12}$/;
        const pwdregexp= /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{5,15}$/;
        const accnoregexp=/^\d{8}$/;
       

        switch(nm)
        {
            case 'name':
                if(!nameregexp.test(val))
                {
                    errors.nameError="Invalid name";
                    nameV=false;
                }
                else
                {
                    errors.nameError="";
                    nameV=true;

                }
                break;
            case 'address':
                if(val.length==0)
                {
                    errors.addressError="Plz fill address";
                    addressV=false;
                }
                else{
                    errors.addressError="";
                    addressV=true;
                }
                break;
            case 'contact':
                if(!contactregexp.test(val))
                {
                    errors.contactError="Invalid Contact no";
                    contactV=false;
                }
                else{
                    errors.contactError="";
                    contactV=true;
                }
                break;
            case 'email':
                if(!emailregexp.test(val))
                {
                    errors.emailError="Invalid Email ";
                    emailV=false;
                }
                else{
                    errors.emailError="";
                    emailV=true;
                }
                break;
            case 'aadhar':
                if(!aadharregexp.test(val))
                    {
                        errors.aadharError="Invalid Contact no";
                        aadharV=false;
                    }
                    else{
                        errors.aadharError="";
                        aadharV=true;
                    }
                    break;
            case 'dob':
                if(val.length==0)
                    {
                        errors.dobError="Plz select DOB";
                        dobV=false;
                    }
                    else{
                        errors.dobError="";
                        dobV=true;
                    }
                    break;
            case 'gender':
                if(val.length==0)
                {
                    errors.genderError="Plz select gender";
                    genderV=false;
                }
                else{
                    errors.genderError="";
                    genderV=true;
                }
                break;
            case 'pwd':
                if(!pwdregexp.test(val))
                {
                    errors.pwdError="plz create password";
                    pwdV=false;
                }
                else
                {
                    errors.pwdError="";
                    pwdV=true;
                }
                break;
            case 'accno':
                if(!accnoregexp.test(val))
                {
                    errors.accnoError="Invalid Account No.";
                    accnoV=false;
                }
                else
                {
                    errors.accnoError="";
                    accnoV=true;
                }
                break;
            case 'aname':
                if(!nameregexp.test(val))
                {
                    errors.nameError="Invalid Account Holder Name.";
                    anameV=false;
                }
                else
                {
                    errors.nameError="";
                    anameV=true;
                }
                break;

                
        }

        
        

        this.setState({errors,[nm]: val,nameValid:nameV,addressValid:addressV,contactValid:contactV,emaliValid:emailV,aadharValid:aadharV,dobValid:dobV,genderValid:genderV,pwdValid:pwdV,accnoValid:accnoV,anameValid:anameV},()=>{this.setState({formValid:this.state.nameValid&&this.state.addressValid&&this.state.contactValid&&this.state.emaliValid&&this.state.aadharValid&&this.state.dobValid&&this.state.genderValid&&this.state.pwdValid&&this.state.accnoValid&&this.state.anameValid})});
    }

    

    sendData=(ev)=>{
        ev.preventDefault();
        console.log(this.state);
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
               
                name: this.state.name,
                address: this.state.address,
                mobile: this.state.contact,
                email: this.state.email,
                aadhar: this.state.aadhar,
                dob: this.state.dob,
                gender: this.state.gender,
                pwd:this.state.pwd,
                accno:this.state.accno,
                ahname:this.state.aname
            })
            
        }

        fetch("http://localhost:8081/saveUser",reqData)
        .then(resp => resp.text())
        .then(data => this.setState({msg: data}))
        
        
    }


    render(){
        return (
            <div className="container" style={{backgroundColor:"aqua"}}>
                <h1 style={{textAlign:"center"}}>Stay Safe! Stay Healthy!</h1>
                <form style={{padding:"100px" }} action="/payment">
                    <table>
                        <tr>
                            <td> Enter Name :</td>
                            <td><input type="text" name="name" value={this.state.name}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.nameError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter Address :</td>
                            <td><input type="text" name="address" value={this.state.address}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.addressError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter Contact :</td>
                            <td><input type="text" name="contact" value={this.state.contact}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.contactError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter Email :</td>
                            <td> <input type="text" name="email" value={this.state.email}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.emailError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter Aadhar No. :</td>
                            <td><input type="text" name="aadhar" value={this.state.aadhar}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.aadharError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter DOB :</td>
                            <td><input type="date" name="dob" value={this.state.age}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.dobError}</h4></td>
                        </tr>
                        <tr>
                            <td> Enter Gender :</td>
                            <td><input type="radio" id="male" name="gender" value="Male" onChange={this.handleInput}/>
                            <label for="male">Male</label>
                            <input type="radio" id="fimale" name="gender" value="Fimale" onChange={this.handleInput}/>
                            <label for="fimale">Fimale</label><br/></td>
                           
                            <td><h4>{this.state.errors.genderError}</h4></td>
                        </tr>
                        
                        <tr>
                            <td> Create Password :</td>
                            <td><input type="text" name="pwd" value={this.state.pwd}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.pwdError}</h4></td>
                        </tr>
                        <tr>
                            <td> Bank Account No :</td>
                            <td><input type="text" name="accno" value={this.state.accno}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.accnoError}</h4></td>
                        </tr>
                        <tr>
                            <td> Account Holder Name :</td>
                            <td><input type="text" name="aname" value={this.state.aname}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.anameError}</h4></td>
                        </tr>
                        <tr>
                            <td> Amount :</td>
                            <td><input type="text" name="amount" value="20000"
                    disabled={true}/> <br/></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Save" 
                    onClick={this.sendData} disabled={!this.state.formValid}/></td>
                    
                        </tr>
                    
                    </table>
                </form>
               
               
                {this.state.msg}
                <a href="/home">LOGOUT</a>
               
            </div>
        )
    }
}