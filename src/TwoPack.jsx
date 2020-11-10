import React from 'react';



const TwoPack = (props) => {
    return(
        <>
       <div className="card  col-md-4 col-10 mx-auto my-4" style={{border:"none"}}>
    <img className="card-img-top" src={props.src} alt="Card image" style={{width:"100%",height:"250px"}}/>
    <div className="card-body">
      <h4 className="card-title">{props.name}</h4>
      <p className="card-text">{props.title}</p>
      <a href="#" className="btn btn-primary">{props.btn}</a>
    </div>
  </div>
        </>
    );
}
export default TwoPack;