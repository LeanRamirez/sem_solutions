import React from "react";
import style from "./trabajos.module.css";
// "../../assets/img/curved-images/curved13.jpg
import img1 from "../../assets/img1.png";

const Trabajos=()=>{
    return(
        <>
            <section className="">
                <div className="container-fluid px-0"/>
                    <div className="row justify-content-center text-center">
                        <div className="col-3 px-md-0"></div>
                        <div className="col-12 position-relative">
                            <div className="row">
                            <div className="col-xl-3"></div>
                                <div className="col-xl-5 col-md-8 col-12 text-start">
                                    <div className="text-start border-radius-lg">
                                        <h2>¿Por que tener tu página web?</h2>
                                        <p className="text-dark text-lg mt-3">
                                            Contar con un sitio web para tu negocio puede ofrecerte múltiples beneficios. ¡Conoce algunos!
                                             {/* <a href="javascript:;" className="text-info font-weight-normal">contact@soft.com</a>. */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                                <div className={`bg-warning-soft bottom-0 ${style.container}`}>
                                    <div className="row">
                                        <div className="col-xl-3 position-relative d-xl-block d-none">
                                            <img className={`position-absolute top-0 ${style.img}`} src={img1} alt="image"/>
                                        </div>
                                        <div className="col-xl-9">
                                            <div className="row">
                                                <div className="col-xl-3 col-md-4 py-md-5">
                                                    <div className="p-3  border-radius-lg p-3">
                                                        <h5 className="mt-3">En cualquier momento y lugar</h5>
                                                        <p>Tu negocio puede estar disponible 24/7 para clientes potenciales de todo el mundo. Los clientes pueden ver tus productos y servicios en cualquier momento y desde cualquier lugar.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 py-md-5 p-3">
                                                    <div className="p-3 text-start bg-white border-radius-lg shadow-lg">
                                                        <h5 className="mt-3 text-center">Credibilidad y confiabilidad</h5>
                                                        <p className="text-center">Una página web no solo muestra profesionalismo, sino que también genera confianza. Puedes incluir testimonios y reseñas de clientes satisfechos para reforzar aún más tu reputación.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 py-md-5 p-3">
                                                    <div className="p-3 text-start border-radius-lg">
                                                        <h5 className="mt-3">Flexibilidad y crecimiento</h5>
                                                        <p>Una página web es una inversión flexible. A medida que tu negocio crece, tu sitio puede evolucionar con vos. Puedes agregar nuevas funcionalidades, actualizar contenido fácilmente y expandir tu alcance sin límites.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                            {/* <img className={`w-10 end-10 position-absolute mt-n6 ${style.img}`} src={bg3} alt="bg3"/> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trabajos;

// "../../assets/img/pattern-points.png"