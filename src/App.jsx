import logo from './logo.svg';
import './App.css';
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import Vendedor from "./Screens/Vendedor"
import Carrinho from "./Screens/Carrinho"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Logo from "./Assets/logo-teste.png";
import ProdutoDetalhe from "./Screens/ProdutoDetalhe";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
      const { user } = useContext(AuthContext);
  return (

   <BrowserRouter>

<nav className="navbar navbar-expand-lg navbar-custom" >

     <a className="navbar-brand img-custom" href="#">
      <img src={Logo} alt="Loja EC" width="50" height="45" className='rounded-circle'/>
    </a>

  <div className="container-fluid">
    <a className="navbar-brand" href="#">Loja EC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          
            <Link className="links nav-link active" aria-current="page" to="/">Home</Link>
          
        </li>
          <li className="nav-item">
          
            <Link className="links nav-link active" aria-current="page" to="/Login">Login</Link>
          
        </li>
          <li className="nav-item">
            <Link className="links nav-link active" aria-current="page" to="/Carrinho">Carrinho</Link>
          
        </li>
          <li className="nav-item">
{user?.is_vendedor && (
  <li className="nav-item">
    <Link
      className="links nav-link active"
      to="/Vendedor"
    >
      Painel do Vendedor
    </Link>
  </li>
)}
          
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/Login' element={<Login />}></Route>
       <Route path='/Carrinho' element={<Carrinho />}></Route>
       <Route path="/produto/:id" element={<ProdutoDetalhe />} />
       <Route
  path="/Vendedor"
  element={
    user?.is_vendedor
      ? <Vendedor />
      : <Home />
  }
/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
