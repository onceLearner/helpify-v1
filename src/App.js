import { Router } from "@reach/router"


import Login from "./components/login";
import Register from "./components/register"
import Home from "./Home"
import Dashboard from "./Dashboard";
import DashboardHelper from "./DashboardHelper";
function App() {
  return (

    <Router>

      <Home path="/" />
      <Register path="/register" />
      <Login path="/login" />
      <Dashboard path="/Dashboard" />
      <DashboardHelper path="/DashboardHelper" />
    </Router>

  );
}

export default App;
