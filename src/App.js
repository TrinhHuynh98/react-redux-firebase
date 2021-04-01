import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import DetailProject from './components/project/DetailProject';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={DetailProject} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateProject} />
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
