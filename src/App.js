import './App.css';
import login from './components/login.js/login';
import { Router, Link } from "@reach/router"
import Login from './components/login.js/login';
import Signup from './components/login.js/Signup';
import MainPage from './components/MainPage';
import Cart from './components/cart';
function App() {
  return (
    <div className="App">
      <Router>
        <MainPage path="/" />
        <Login path="/login" />
        <Signup path="/signup" />
        <Cart path="/cart" />
      </Router>
    </div>
  );
}

export default App;
