import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import Dog from'./Dog.jsx';
//import Properties from './Properties.jsx';
//import List from './List.jsx';<Dog/>
    //<Properties value= {5} />
    //<List />


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
