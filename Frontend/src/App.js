import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import ClientHomeScreen from './Screens/ClientHomeScreen'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/app/login/:clientID' component={LoginScreen} />
        <Route exact path='/app/home' component={ClientHomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
