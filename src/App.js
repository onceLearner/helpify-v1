import { Router } from "@reach/router"


import Login from "./components/login";
import Register from "./components/register";
import Home from "./Home";
import Forgetpassword from "./components/ForgetPassword";
import About from "./components/about";
import Edit from "./components/edit"
import Dashboard from "./Dashboard";
import DashboardHelper from "./DashboardHelper";


function App() {
  return (

    <Router>

      <Home path="/" />
      <Register path="/register" />
      <Login path="/login" />
      <About path="/about" />
      <Edit path="/edit" />
      <Dashboard path="/Dashboard" />
      <DashboardHelper path="/DashboardHelper" />
      <Forgetpassword path="/Forgetpassword"/>
     </Router>

  );
}

export default App;
