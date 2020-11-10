import React from 'react';
import OnePack from './OnePack.jsx';
import web from "../src/img/jai.png"


const One = () => {
  var jai = () =>{
    alert("jai singh rathore");
    }
return(
    <>
  <OnePack
    name=" Jai Singh rathore"
    team="We are a team of talanted website developer"
    linky={jai}
    btn="Check Now"
    link="/gallery"
    img={web}
 
  />
    </>
);
}

export default One;