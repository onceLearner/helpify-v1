import { Router } from "@reach/router"


import Login from "./components/login";
import Register from "./components/register"
import Home from "./Home"
import Dashboard from "./Dashboard";
function App() {
  return (

    <Router>

      <Home path="/" />
      <Register path="/register" />
      <Login path="/login" />
      <Dashboard path="/Dashboard" />
    </Router>

  );
}

export default App;
