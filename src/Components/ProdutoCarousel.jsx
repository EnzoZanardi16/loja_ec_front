import { useEffect, useRef, useState } from "react";
// import { data } from "react-router-dom";


export default function ProdutoCarousel(){

    const [products, setProducts] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:8000/api/produtos")

            .then(res => res.json())
            .then(data => setProducts(data))
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

    <button className="btn btn-dark position-absolute start-0 top-50 z-3" onClick={scrollLeft}>
        ◀ 
    </button>
    <div ref={scrollRef} className="d-flex overflow-auto gap-3 p-3" style={{ scrollBehavior: "smooth"}}>
        {products.map(product => (
            <div key={product.id} className="card" style={{minWidth: "200px"}}>
                <img src={product.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h6>{product.name}</h6>
                    <p>R$ {product.price}</p>
                </div>
            </div>
        ))}
    </div>
          <button className="btn btn-dark position-absolute end-0 top-50 z-3" onClick={scrollRight}>
        ▶
      </button>

    </div>
);


}