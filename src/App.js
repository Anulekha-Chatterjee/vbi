
import './App.css';

import Songs from "./components/Songs";
import PlayList from "./components/PlayList";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className = "App">
      <nav>
        <ul>
          <li>
            <Link to="/">Songs</Link>
          </li>
          <li>
            <Link to="/playlist/">PlayLists</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Songs} />
      <Route path="/playlist/" component={PlayList} />
    </div>
  </Router>
  );
}

export default App;
