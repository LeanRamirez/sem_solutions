import React from "react";
import img from "../../assets/fotoTestimonials.avif";
import style from "./testimonials.module.css";

const Testimonials = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h2>Testimonials</h2>
                <p>Algunas opiniones de nuestros clientes</p>
            </div>
            <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item active ${style.item}`}>
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
                <div className={`${style.indicator}`}>
                    <button type="button" 
                    data-bs-target="#testimonialsCarousel" 
                    data-bs-slide-to="0" 
                    className={`active ${style.buttonIndicator}`} 
                    aria-current="true" 
                    aria-label="Slide 1"></button>
                    <button type="button" 
                    data-bs-target="#testimonialsCarousel" 
                    data-bs-slide-to="1" 
                    className={`active ${style.buttonIndicator}`}
                    aria-label="Slide 2"></button>
                    <button type="button" 
                    data-bs-target="#testimonialsCarousel" 
                    data-bs-slide-to="2" 
                    className={`active ${style.buttonIndicator}`}
                    aria-label="Slide 3"></button>
                </div>
                <button className={`carousel-control-prev ${style.button}`} type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
                    <span className={`carousel-control-prev-icon ${style.spanButton}`} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className={`carousel-control-next ${style.button}`} type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
                    <span className={`carousel-control-next-icon ${style.spanButton}`} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;




// import React from "react";
// import img from "../../assets/fotoTestimonials.avif";
// import style from "./testimonials.module.css"

// const Testimonials = ()=>{
//     return (
//         <div className={style.container}>
//             <div className={style.title}>
//                 <h2>Testimonials</h2>
//                 <p>Algunas opiniones de nuestros clientes</p>
//             </div>
//             <div id="testimonialsCarousel" className="carousel slide" 
//             data-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className={`carousel-item active ${style.item}`}>
//                         <div className={style.testimonials}>
//                             <div className={style.testiImg}>
//                                 <img className={style.img} src={img} 
//                                 alt="Cliente 1" />
//                             </div>
//                             <div className={style.opinion}>
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facilis pariatur labore voluptates quisquam quia qui eveniet molestiae, alias tenetur, fugit placeat? Maiores dolore dolorem blanditiis. Esse dolorum nisi temporibus.</p>
//                                 <div className={style.nombre}>
//                                     <h4>NOMBRE</h4>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className={style.testimonials}>
//                             <div className={style.testiImg}>
//                                 <img className={style.img} src={img} 
//                                 alt="Cliente 2" />
//                             </div>
//                             <div className={style.opinion}>
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facilis pariatur labore voluptates quisquam quia qui eveniet molestiae, alias tenetur, fugit placeat? Maiores dolore dolorem blanditiis. Esse dolorum nisi temporibus.</p>
//                                 <div className={style.nombre}>
//                                     <h4>apellido</h4>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className={style.testimonials}>
//                             <div className={style.testiImg}>
//                                 <img className={style.img} src={img} 
//                                 alt="Cliente 3" />
//                             </div>
//                             <div className={style.opinion}>
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facilis pariatur labore voluptates quisquam quia qui eveniet molestiae, alias tenetur, fugit placeat? Maiores dolore dolorem blanditiis. Esse dolorum nisi temporibus.</p>
//                                 <div className={style.nombre}>
//                                     <h4>APELLIDO</h4>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button className={`carousel-control-prev ${style.button}`} 
//                 type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
//                     <span className={`carousel-control-prev-icon ${style.spanButton}`} 
//                     aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className={`carousel-control-next ${style.button}`} type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
//                     <span className={`carousel-control-next-icon ${style.spanButton}`} aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Testimonials;