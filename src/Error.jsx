import React from "react";
import {NavLink} from 'react-router-dom';


const Error = () => {
    return(
            <>
            <div style={{width:"100vw",height:"80vh"}}>
            <h1 style={{textAlign:"center"}}>This is an error page: 404 Error</h1><br/><br/>
<NavLink className="buttton" style={{border:"1px solid rgb(27, 171, 255)",color:"black",padding:"10px",borderRadius:"10px"}} to="/">Go back</NavLink>
            </div>
            </>
    );
}

export default Error;