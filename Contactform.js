import React,{useState} from "react";
import "./Contactformstyle.css";

 
const Contactform=()=>{
    const [data,setData]=useState({
        uname:'',
        email:'',
        password:'',
    }
       
    )
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler=e=>{
        e.preventDefault();
        if(data.password.length <8){
            alert("provide atleast 8 letters");
        }
        else if(data.uname==""){
            alert("User Name is not empty");
        }
        else if(data.email==""){
            alert("emial is not empty");
        }
        
        console.log(data);
    }
    return(
        <div className="center1">
            <center>
                <h1 className="head">FILL THIS FORM</h1><br/>
                <form onSubmit={submitHandler} className="form1">
                <br/><label>User Name:</label>
                    <input type="text" name="uname" placeholder="enter your email" onChange={changeHandler}/><br/> <br/>
                    <label>EMail:</label>
                    <input  type="text" name="email" style={{'width':'70%'}} placeholder="enter your email" onChange={changeHandler}/><br/><br/>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="enter your password" onChange={changeHandler}/><br/><br/>
                    <button className="but" type="submit">Submit</button> 
                </form>
            </center>
        </div>
    )
}
export default Contactform;