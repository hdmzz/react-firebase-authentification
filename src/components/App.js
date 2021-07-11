import SignUp from "./authentication/SignUp";
import DashBoard from "./authentication/DashBoard";
import Login  from "./authentication/Login";
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column" style={{minHeight: "100vh"}}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={DashBoard}/>
            <PrivateRoute path='/update-profile' component={UpdateProfile}/>
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
