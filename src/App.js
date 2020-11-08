import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <Router>
      <section className="App">
        <br />
        <h1>React Router Animations</h1>
        <br />
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
        <aside>
          <Routes />
        </aside>
      </section>
    </Router>
  );
}

export default App;
