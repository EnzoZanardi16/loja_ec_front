import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // evita recarregar a página

    try {
      console.log({ email, password });
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
        // salva token (ajuste conforme seu backend)
        console.log(data);
        //localStorage.setItem("token", data.token);
        alert("sucess");

        setIsAuthenticated(true);
        navigate("/");
      } else {
        alert(data.message || "Erro ao fazer login");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className="login-container p-4 rounded-4 shadow">
        
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