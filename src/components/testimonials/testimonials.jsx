import React from "react";
import img from "../../assets/fotoTestimonials.avif";
import style from "./testimonials.module.css"

const Testimonials = ()=>{
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h2>¿Qué opinan nuestros clientes?</h2>
                <p>Conocé algunas opiniones de personas que como vos buscaron mejorar sus oportunidades.</p>
            </div>
            <div id="testimonialsCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className={style.testimonials}>
                            <div className={style.testiImg}>
                                <img className={style.img} src={img} alt="Cliente 1" />
                            </div>
                            <div className={style.opinion}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facilis pariatur labore voluptates quisquam quia qui eveniet molestiae, alias tenetur, fugit placeat? Maiores dolore dolorem blanditiis. Esse dolorum nisi temporibus.</p>
                                <div className={style.nombre}>
                                    <h4>NOMBRE</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={style.testimonials}>
                            <div className={style.testiImg}>
                                <img className={style.img} src={img} alt="Cliente 2" />
                            </div>
                            <div className={style.opinion}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facilis pariatur labore voluptates quisquam quia qui eveniet molestiae, alias tenetur, fugit placeat? Maiores dolore dolorem blanditiis. Esse dolorum nisi temporibus.</p>
                                <div className={style.nombre}>
                                    <h4>apellido</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={style.testimonials}>
                            <div className={style.testiImg}>
                                <img className={style.img} src={img} alt="Cliente 3" />
                            </div>
                            <div className={style.opinion}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facilis pariatur labore voluptates quisquam quia qui eveniet molestiae, alias tenetur, fugit placeat? Maiores dolore dolorem blanditiis. Esse dolorum nisi temporibus.</p>
                                <div className={style.nombre}>
                                    <h4>APELLIDO</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;