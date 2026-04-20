import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/produtos/${id}`)
      .then(res => res.json())
      .then(data => setProduto(data));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-6">
          <img 
            src={`http://localhost:8000/storage/${produto.imagem}`} 
            className="img-fluid rounded"
            alt=""
          />
        </div>

        <div className="col-md-6">
          <h2>{produto.nome}</h2>
          <h4 className="text-success">R$ {produto.preco}</h4>

          <p className="mt-3">
            {produto.descricao || "Sem descrição"}
          </p>

          <button className="btn btn-dark mt-3">
            Comprar
          </button>
        </div>

      </div>
    </div>
  );
}