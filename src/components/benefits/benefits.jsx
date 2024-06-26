import React from "react";
import style from "./benefits.module.css";
// "../../assets/img/curved-images/curved13.jpg
import img1 from "../../assets/img1.png";
import img2 from '../../assets/img2.png';

const Benefits=()=>{
    return(
        <>
            <section id="benefits" className="">
                <div className="container-fluid px-0"/>
                    <div className="row justify-content-center text-center m-0">
                        <div className="col-3 px-md-0"></div>
                        <div className="position-relative p-0">
                            <div className="row">
                                    <div className="col-md-7 col-12 text-start m-auto">
                                        <div className="text-start border-radius-lg">
                                            <h2 className={`text-center ${style.title}`}>¿Por qué tener tu página web?</h2>
                                            <p className="text-dark text-center text-lg mt-3">
                                                Contar con un sitio web para tu negocio puede ofrecerte múltiples beneficios. ¡Conocé algunos!
                                                {/* <a href="javascript:;" className="text-info font-weight-normal">contact@soft.com</a>. */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.container}>
                                    <div className={`row p-0 m-0 posicion-relative ${style.itemsContainer}`}>
                                        {/* <div className="col-xl-3 position-relative bottom-25 m-0 d-xl-block d-none">
                                            <img className={` ${style.img}`} src={img1} alt="image"/>
                                        </div> */}
                                        <div className="col-xl-12 w-100 p-0">
                                            <div className="row w-100 m-0 col-12 justify-content-center">
                                                <div className="col-xl-3 col-md-3 py-2 py-md-5">
                                                    <div className={`text-start bg-white shadow-lg p-2 col-xl-11 m-auto ${style.middleData}`}>
                                                        <h5 className="mt-3 text-center fs-3">Mayor alcance y disponibilidad</h5>
                                                        <p className="py-2 text-center fs-6">Tu negocio puede estar disponible las 24 horas todos los días de la semana para clientes potenciales de todo el mundo.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-3 py-2 py-md-5">
                                                    <div className={`text-start bg-white shadow-lg p-2 col-xl-11 m-auto ${style.middleData}`}>
                                                        <h5 className="mt-3 text-center fs-3">Credibilidad y profesionalismo</h5>
                                                        <p className="text-center py-2 fs-6">Una página web no solo muestra profesionalismo, sino que también genera confianza. Podés reforzar tu reputación.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-3 py-2 py-md-5">
                                                    <div className={`text-start bg-white shadow-lg p-2 col-xl-11 m-auto ${style.middleData}`}>
                                                        <h5 className="mt-3 text-center fs-3">Marketing digital y ventas efectivas</h5>
                                                        <p className="py-2 text-center fs-6">Una página web es una inversión flexible. A medida que tu negocio crece, tu sitio puede evolucionar con vos. Las posibilidades sin ilimitadas.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-3 py-2 py-md-5">
                                                    <div className={`text-start bg-white shadow-lg p-2 col-xl-11 m-auto ${style.middleData}`}>
                                                        <h5 className="mt-3 text-center fs-3">Análisis y optimizaciones</h5>
                                                        <p className="py-2 text-center fs-6">Podés monitorear el comportamiento de los usuarios para mejorar su experiencia y ajustar estrategias para un crecimiento constante.</p>
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
                <div className={style.img2Container}>
                                                    <img src={img2} alt="Sem solutions" className={style.img2}/>
                                                </div>
            </section>
        </>
    )
}

export default Benefits;

// "../../assets/img/pattern-points.png"