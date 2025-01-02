import React from "react";
import { useParams } from "react-router-dom";

function Func(){
  const { id } = useParams();

  return (
    <div>
      <h2>New Page</h2>
      <p>New Page Number is shown here: {id}</p>
    </div>
  );
};

export default Func;