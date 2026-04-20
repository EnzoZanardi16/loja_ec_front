import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Carrinho() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "Atenção",
        text: "Você precisa estar logado",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

      return;
    }

    // 🔐 valida sessão real
    fetch("http://localhost:8000/api/user", {
      credentials: "include",
    })
      .then(res => {
        if (!res.ok) {
          Swal.fire({
            icon: "warning",
            title: "Sessão expirada",
            text: "Faça login",
          });

          navigate("/login");
          return;
        }
      });

    // 🔥 csrf + pedidos
    fetch("http://localhost:8000/sanctum/csrf-cookie", {
      credentials: "include",
    }).then(() => {
      fetch("http://localhost:8000/api/pedidos", {
        credentials: "include",
      })
        .then(res => {
          if (res.status === 401) {
            Swal.fire({
              icon: "warning",
              title: "Atenção",
              text: "Faça login",
            });

            navigate("/login");
            return null;
          }

          return res.json();
        })
        .then(data => {
          if (!data) return;

          if (Array.isArray(data)) {
            setPedidos(data);
          } else if (Array.isArray(data.data)) {
            setPedidos(data.data);
          } else {
            setPedidos([]);
          }
        });
    });

  }, [isAuthenticated, navigate]);

  return (
    <div className="container mt-4">
      <h2>Meu Carrinho</h2>

      {pedidos.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div className="row">
          {Array.isArray(pedidos) &&
            pedidos.map(pedido => (
              <div key={pedido.id} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5>Pedido #{pedido.id}</h5>

                    {pedido.produtos?.map(prod => (
                      <div key={prod.id}>
                        <p>{prod.nome}</p>
                        <p>R$ {prod.preco}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}