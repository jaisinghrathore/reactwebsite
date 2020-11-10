import React from 'react';
import OnePack from './OnePack.jsx';
import wab from "../src/img/siddhi.png"


let Three = () => {


    return(
        <>
        <h1 style={{textAlign:"center"}}>About</h1>
        <OnePack
    name=" Siddhi Sharma"
    team="We are a team of talanted Logo Designers"
    btn="Contact here"
    link="/contact"
    img={wab}
        />
        </>
    );
    }

export default Three;