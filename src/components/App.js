import SignUp from "./SignUp";
import DashBoard from "./DashBoard";
import Login  from "./Login";
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column" style={{minHeight: "100vh"}}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={DashBoard}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={Login}/>
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>  
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
