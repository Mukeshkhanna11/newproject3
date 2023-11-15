// import { FaCartArrowDown, FaGithub } from "react-icons/fa";
// import Cart from "./Cart";
import { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
  const handleChnage = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`you typed:${username}`);
    setUsername("");
  };
  return (
    <>
      {/* <div>
        <FaCartArrowDown />
      </div>
      <FaGithub />
      <Cart /> */}
      <h1>form demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChnage} />
        <button>submit</button>
      </form>
    </>
  );
}

export default App;
