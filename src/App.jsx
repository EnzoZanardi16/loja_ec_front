import logo from './logo.svg';
import './App.css';
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import Carrinho from "./Screens/Carrinho"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Logo from "./Assets/logo-teste.png";

function App() {
  return (
   <BrowserRouter>

<nav className="navbar navbar-expand-lg navbar-custom" >

     <a className="navbar-brand img-custom" href="#">
      <img src={Logo} alt="Loja EC" width="50" height="45" class='rounded-circle'/>
    </a>

  <div class="container-fluid">
    <a class="navbar-brand" href="#">Loja EC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <Link className="links" to="/">Home</Link>
          </a>
        </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <Link className="links" to="/Login">Login</Link>
          </a>
        </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <Link className="links" to="/Carrinho">Carrinho</Link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/Login' element={<Login />}></Route>
       <Route path='/Carrinho' element={<Carrinho />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
