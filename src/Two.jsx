import React from 'react';
import TwoPack from './TwoPack';
import Data2 from './Data.jsx';



const Two = () => {
    return(
        <>
        <div className="container">
        <h1 style={{textAlign:"center",fontFamily: 'Goldman'}}>GALLERY</h1>

        <div className="row">
        {
            Data2.map((value)=>    
            <TwoPack
            src={value.src}
            name={value.name}
            title={value.title}
            btn={value.btn}
        />
            )
        }
      </div>
      </div>
        </>
    );
}
export default Two;