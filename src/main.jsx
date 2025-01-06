import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import Apps from './Apps.jsx';

//import { Link } from "react-router-dom";
// import './index.css'
// import App from './App.jsx'
// import Dog from'./Dog.jsx';
// import Properties from './Properties.jsx';
// import List from './List.jsx';
// import Useeffect from './Useeffect.jsx';
// import Useref from './Useref.jsx';
// import Hooks_task from './Hooks_task';
// import Hens from './Hens.jsx';
// import Usecontext from './Usecontext.jsx';*/
//     //<Properties value= {5} />
//     //<List />
//import Appparams from './Appparams.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <List/>
    <Useeffect/>
    <Useref/>
    <Hooks_task />
    <Hens name="Water"/> 
    <Usecontext/>  
    <Appparams/>  */}
    <Apps/>
  </StrictMode>, 
)
