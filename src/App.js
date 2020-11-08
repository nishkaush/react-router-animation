import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>hahahaha</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/first">First</Link>
          </li>
          <li>
            <Link to="/second">Second</Link>
          </li>
          <li>
            <Link to="/third">Third</Link>
          </li>
        </ul>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
