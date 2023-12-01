 import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("C.DidMount+didUpdate");

  //     return () => {
  //       console.log(count);
  //     };
  //   }, [count]);

  const fetchData = () => {
    console.log("Data Fetching");
  };

  useEffect(() => {
    console.log("Mounting");
    const timer = setInterval(fetchData, 1000);

    return () => {
      clearInterval(timer);
      console.log("Unmounting");
    };
  }, [count]);

  console.log("Rendering");
  return (
    <div className="container text-center">
      <h1 className="text-danger">LIFECYCLE METHODS</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
