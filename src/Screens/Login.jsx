import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Alert } from "bootstrap";

export default function Login() {

  const [alert, setAlert] = useState(null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    Swal.fire({
      title: "Entrando...",
      text: "Aguarde um momento",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    e.preventDefault(); // evita recarregar a página



    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "Login realizado com sucesso",
          timer: 1500,
          showConfirmButton: false
        });
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate("/");
        }, 1500);

      } else {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "Informações inválidas"
        });
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className="login-container p-4 rounded-4 shadow">

        {/* ✅ ALERTA AQUI */}
        {alert && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.message}
            <button
              type="button"
              className="btn-close"
              onClick={() => setAlert(null)}
            ></button>
          </div>
        )}

        <h1 className="text-center">Login</h1>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check"
            />
            <label className="form-check-label" htmlFor="check">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>

        </form>
      </div>
    </section>
  );
}