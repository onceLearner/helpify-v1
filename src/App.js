import { Router } from "@reach/router"


import Login from "./components/login";
import Register from "./components/register";
import About from "./components/about";
import Home from "./Home"
function App() {
  return (

    <Router>

      <Home path="/" />
      <Register path="/register" />
      <Login path="/login" />
      <About path="/about" />
    </Router>

  );
}

export default App;
