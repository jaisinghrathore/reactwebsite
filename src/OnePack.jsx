import React from 'react';
import {NavLink} from 'react-router-dom';


 

const OnePack = (props) => {
return(
    <>
    <div className="container">
    <div className="row">
    <div className="col-md-5 col-10 mx-auto  order-last order-md-first" style={{height:"100vh",display:"flex",alignItems:"center"}}>
    <div style={{marginTop:"-100px"}}>
<h3>Grow Your Business With<span style={{color:'rgb(27, 171, 255)'}}>{props.name}</span></h3>
<p style={{marginBottom:"30px"}}>{props.team}</p>
<NavLink onClick={props.linky} className="buttton" style={{border:"1px solid rgb(27, 171, 255)",color:"rgb(27, 171, 255)",padding:"10px",borderRadius:"10px"}} to={props.link}>{props.btn}</NavLink>
</div>
    </div>
    <div className="col-md-7 col-10 mx-auto order-md-last order-first"  style={{height:"100vh",display:"flex",alignItems:"center"}}>
    <img src={props.img} className="img"/>
    </div>
    </div>
    </div>
    </>
);
}

export default OnePack;