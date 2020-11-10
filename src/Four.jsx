import React, { useState } from 'react';

const Four = () => {

    const[pre,nau]=useState(
        {
            fname:"",
            phone:"",
            mail:"",
            message:"",
        }
    );
    

    const chng= (event) =>{
        const name=event.target.name;
        const value=event.target.value;

        nau((pre)=>{
            return{
                ...pre,
                [name]:value,
            }
        });
    }


    const sub = () => {
       (pre.fname == "" || pre.phone == ""|| pre.mail == ""|| pre.message == "" )? alert("kuch to lick"): alert(`The firstName is ${pre.fname},phone number is ${pre.phone}.E-mail is ${pre.mail} and ${pre.message} is message`);
    }


    
    return(
            <>
    <h1 style={{textAlign:"center"}}>Contact</h1><br/>
    
<div className="container">
    <div className="form-group">
      <label for="uname">Fname</label>
      <input onChange={chng} type="text" className="form-control" id="uname" placeholder="Enter fullname" name="fname" value={pre.fname} required/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label for="pwd">Phone</label>
      <input  onChange={chng} type="number" className="form-control" id="pwd" placeholder="Enter number" name="phone" value={pre.phone} required/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label for="pwd">Email address</label>
      <input  onChange={chng} type="email" className="form-control" id="pwd" placeholder="Enter e-mail" name="mail" value={pre.mail} required/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label for="pwd">Message</label>
      <input  onChange={chng} type="textarea" className="form-control" id="pwd" placeholder="Message" value={pre.message} name="message" required/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    
    <button type="submit" className="btn btn-primary" onClick={sub}>Submit</button>

  </div> <br/>

            </>
    );
}

export default Four;