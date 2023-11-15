// import { FaCartArrowDown, FaGithub } from "react-icons/fa";
// import Cart from "./Cart";
import { useEffect, useState } from "react";
function App() {
  const [value, setValue] = useState(0);

  //1.render for the first time
  //2. anytime we do (side effect)
  //dependency list
  useEffect(() => {
    console.log("helllo");
    document.title = `increment(${value})`;
  }, [value]);
  return (
    <>
      {/* <div>
        <FaCartArrowDown />
      </div>
      <FaGithub />
      <Cart /> */}
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click here
      </button>
    </>
  );
}

export default App;
