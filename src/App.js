import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import SingleUserDetail from "./components/SingleUserDetail";
import User from './components/User';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/users" exact component={User}></Route>
            <Route path="/userinfo/:userId" exact component={SingleUserDetail} ></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
