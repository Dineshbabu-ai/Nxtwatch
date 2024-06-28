import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
<<<<<<< HEAD
import ProtectedRoute from './components/ProtectedRoute'
=======
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457

import './App.css'

const App = () => (
  <Switch>
<<<<<<< HEAD
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
=======
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
>>>>>>> ddf958fd0a6a746d25c2015fa72763a65137f457
  </Switch>
)

export default App
