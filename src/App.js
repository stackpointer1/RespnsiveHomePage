// import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import Overview from "./Overview";
import Whoweare from "./Whoweare";
import Whatwedo from "./Whatwedo";
import Howwedo from "./Howwedo";
import WhyDigitas from "./whyDigitas";
 import Global from "./Globalreach";
 import Social from "./Social"




function App() {
  return (
    <Router>
      <Social/>
       <Header/>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/overView" component={Overview} />
         <Route exact path="/Who" component={Whoweare}/>
         <Route exact path="/What" component={Whatwedo}/>S
         <Route exact path="/How" component={Howwedo}/>
         <Route exact path="/why" component={WhyDigitas}/>
         <Route exact path="/global" component={Global}/> 
         
       </Switch>
     
      </Router>
    
  );
}

export default App;
