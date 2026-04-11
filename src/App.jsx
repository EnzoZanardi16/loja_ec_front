import logo from './logo.svg';
import './App.css';
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import Carrinho from "./Screens/Carrinho"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Carrinho">Carrinho</Link>
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
