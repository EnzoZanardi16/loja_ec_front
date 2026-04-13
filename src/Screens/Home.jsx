import banner from "../Assets/banner-teste.webp";
import "../Components/Home.css"
import ProdutoCarousel from "./ProdutoCarousel";
export default function Home() {
  return (
    <main>
            <div id="carouselExampleInterval" className="carousel slide carosel-custom" data-bs-ride="carousel">

                              <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={banner} className="d-block w-100" alt="banner azul de promoção"/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={banner} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={banner} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="section-products">
            <ProdutoCarousel />
          </div>

    </main>

  );
}