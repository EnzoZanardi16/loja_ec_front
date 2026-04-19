import { useEffect, useRef, useState } from "react";
import "../Components/CategoriaBar.css"

export default function CategoriasBar() {
    const [categorias, setCategorias] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:8000/api/categoria")
            .then(res => res.json())
            .then(data => {
                setCategorias(data);
            });
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div className="position-relative my-4">

            {/* botão esquerda */}
<button
  className="arrow-btn left"
  onClick={scrollLeft}
>
  ‹
</button>

            {/* lista */}
            <div
                ref={scrollRef}
                className="d-flex overflow-auto gap-2 px-4"
                style={{ scrollBehavior: "smooth" }}
            >
                {categorias.map(cat => (

                    <button
                        key={cat.id}
                        className="btn btn-outline-secondary rounded-pill px-3"
                    >
                        {cat.nome}
                    </button>
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