import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
