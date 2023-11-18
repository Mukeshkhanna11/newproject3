import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const fetchData = () => {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
      .then((res) => res.json())
      .then((data) => setCatFact(data["0"].setup, data["0"].punchline));
  };
  const [catfact, setCatFact] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchData}>generate joke</button>
      <p>{catfact}</p>
    </div>
  );
}

export default App;
