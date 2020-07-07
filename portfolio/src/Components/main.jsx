import React from 'react'
import Home  from './Pages/Home';
import {Switch, Route} from  'react-router-dom'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';



const Main = () => (
 <switch>
  <Route exact path = "/" component = {Home}/>
  <Route exact path = "/about" component = {About}/>
  <Route exact path = "/contact " component = {Contact}/>
  <Route exact path = "/portfolio" component = {Portfolio}/>
 </switch>
)


export default Main; 