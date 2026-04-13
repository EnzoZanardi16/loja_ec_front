import { useEffect, useRef, useState } from "react";
// import { data } from "react-router-dom";
import "../Components/ProdutoCarousel.css"



export default function ProdutoCarousel(){

    const [products, setProducts] = useState([]);
    const scrollRef = useRef(null);

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
  className="position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent px-2 z-3"
  onClick={scrollLeft}
>
  <span className="carousel-control-prev-icon" />
</button>
    <div ref={scrollRef} className="d-flex overflow-auto gap-3 p-3" style={{ scrollBehavior: "smooth"}}>
        {products.map(produto => (
            <div key={produto.id} className="card" style={{minWidth: "200px"}}>
                <img src={produto.imagem} className="card-img-top" alt="" />
                <div className="card-body">
                    <h6>{produto.nome}</h6>
                    <p>R$ {produto.preco}</p>
                </div>
            </div>
        ))}
    </div>
<button 
  className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent px-2 z-3"
  onClick={scrollRight}
>
  <span className="carousel-control-next-icon" />
</button>

    </div>
);


}