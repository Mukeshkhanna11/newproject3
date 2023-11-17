import { useState } from "react";
import "./App.css";
import Text from "./Text";
function App() {
  const [showtext, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showtext);
        }}
      >
        show text
      </button>
      {showtext && <Text />}
    </div>
  );
}

export default App;
