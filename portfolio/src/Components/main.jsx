import React from 'react'
import Home  from './Pages/Home';
import {Switch, Route} from  'react-router-dom'

import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';



const Main = () => (
 <Switch>
  <Route exact path = "/" component = {Home}/>
  <Route exact path = "/contact" component = {Contact}/>
  <Route exact path = "/portfolio" component = {Portfolio}/>
 </Switch>
)


export default Main; 