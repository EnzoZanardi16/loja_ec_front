import { useEffect, useRef, useState } from "react";
// import { data } from "react-router-dom";
import "../Components/ProdutoCarousel.css"
import { useNavigate } from "react-router-dom";



export default function ProdutoCarousel(){

    const [products, setProducts] = useState([]);
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/api/produtos")

            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(err => console.error(err))
},[]);
const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth"})

};
const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth"})
};

return (
    <div className="position-relative">
<button
  className="arrow-btn left"
  onClick={scrollLeft}
>
  ‹
</button>
    <div ref={scrollRef} className="d-flex overflow-auto gap-3 p-3" style={{ scrollBehavior: "smooth"}}>

        {products.map(produto => (
                    <div 
  key={produto.id} 
  className="card"
  style={{ minWidth: "200px", cursor: "pointer" }}
  onClick={() => navigate(`/produto/${produto.id}`)}
>
                <img src={produto.imagem} className="card-img-top" alt="" />
                <div className="card-body">
                    <h6>{produto.nome}</h6>
                    <p>R$ {produto.preco}</p>
                </div>
            </div>
        ))}
    </div>
<button
  className="arrow-btn right"
  onClick={scrollRight}
>
  ›
</button>

    </div>
);


}