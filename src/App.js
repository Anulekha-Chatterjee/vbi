import './App.css';
import { Menu, Container } from 'semantic-ui-react';
import Songs from "./components/Songs";
import PlayList from "./components/PlayList";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Container>
        <Menu>
          <Menu.Item><Link to="/">Songs</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/playlist/">PlayLists</Link>
          </Menu.Item>
        </Menu>
        <Route path="/" exact component={Songs} />
        <Route path="/playlist/" component={PlayList} />
      </Container>
    </Router>
  );
}

export default App;
