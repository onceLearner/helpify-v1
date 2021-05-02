import { Router } from "@reach/router"


import Login from "./components/login";
import Register from "./components/register"
import Home from "./Home"

import Edit from "./components/edit"
import About from "./components/about";
import Form from "./components/form";
import Form2 from "./components/form2";
import Dashboard from "./Dashboard";
import DashboardHelper from "./DashboardHelper";

function App() {
  return (

    <Router>

      <Home path="/" />
      <Register path="/register" />
      <Login path="/login" />
<Form path="/form" />
<Form2 path="/form2" />
      <Edit path="/edit" />
      <Dashboard path="/Dashboard" />
      <About path="/about" />
      <DashboardHelper path="/DashboardHelper" />
     

    </Router>

  );
}

export default App;
