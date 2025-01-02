
import { useContext } from "react";
import { NameContext } from "./Usecontext";

function Stomachs() {
  let name = useContext(NameContext);
  return (
    <div>
      <h1>Stomachs</h1>
      <h1>{name ? "true" : "false"}</h1>
    </div>
  );
}

export default Stomachs;
