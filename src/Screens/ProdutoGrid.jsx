import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProdutosGrid() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/produtos")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row g-3">

        {produtos.map(produto => (
          <div key={produto.id} className="col-6 col-md-4 col-lg-3">
            
            <div 
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/produto/${produto.id}`)}
            >
              <img
                src={`http://localhost:8000/storage/${produto.imagem}`}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
                alt=""
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{produto.nome}</h6>

                <p className="text-success fw-bold mt-auto">
                  R$ {produto.preco}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}