import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/Menu">MENU</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
