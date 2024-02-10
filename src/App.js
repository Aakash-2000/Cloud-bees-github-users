import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route path="/user/:userName" component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
