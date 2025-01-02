import React from 'react';
import Hens from './Hens.jsx';

import { createContext, useState} from "react";
import Stomachs from "./Stomachs";
export const NameContext = createContext();

function Usecontext() {
  const [name, setName] = useState(false);

  const toggleName = () => {
    setName((prev)=>(!prev));
  };

  return (
    <NameContext.Provider value={name}>
       <button onClick={toggleName}>Toggle</button>
      <Stomachs />
    </NameContext.Provider>
  );
}
export default Usecontext;
