import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import UseEffectHook from "./components/UseEffectHook";
import User from "./components/User";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container text-center mt-4">
      <button onClick={() => setToggle(!toggle)} className="btn btn-danger">
        {toggle ? "Hide" : "Show"}
      </button>
      {/* {toggle && <LifeCycleMethods />} */}
      {/* {toggle && <UseEffectHook />} */}
      {toggle && <User />}
    </div>
  );
}

export default App;
