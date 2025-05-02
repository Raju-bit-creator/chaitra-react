import React, { useEffect, useState } from "react";

const Function = (props) => {
  // component initialization
  const [count, setCount] = useState(0);

  //mounting

  useEffect(() => {
    console.log("component did mount");
    // props.toggleMode();

    return () => {
      console.log("component will unmount");
    };
  }, [count]);

  //updating
  const handleIncrement = () => {
    setCount(count + 5);
  };

  return (
    <div className={`container  bg-${props.mode}  mt-5`}>
      this is function based compontent
      <div>
        <button onClick={handleIncrement}>click me to increase</button>

        <p>you click {count} time in click me button</p>
        <p>click the change name button to change name : </p>
      </div>
      <div className="container">
        <h4>Welcome back to login page</h4>
      </div>
    </div>
  );
};

export default Function;
