import React from 'react';
import Four from './Four.jsx';
import Three from './Three.jsx';
import Two from './Two.jsx';
import One from './One.jsx';
import Error from './Error.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import { Route ,Switch} from 'react-router-dom';

const App = () =>{
  return(
    <>
    <Nav />
 <Switch>
 <Route exact path="/" component={One}/>
 <Route exact path="/gallery" component={Two}/>
 <Route path="/about" component={Three}/>
 <Route exact path="/contact" component={Four}/>
 <Route component={Error}/>
 </Switch>
 <Footer/>
  </>
  );
}

export default App;