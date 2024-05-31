import React from "react";
import style from "./trabajos.module.css";
// "../../assets/img/curved-images/curved13.jpg
import bg3 from "../../assets/bg3.jpg";

const Trabajos=()=>{
    return(
        <>
            <section className="py-5">
                <div className="container-fluid px-0"/>
                    <div className="row justify-content-center text-center">
                        <div className="col-3 px-md-0"></div>
                        <div className="col-12 position-relative">
                            <div className="row">
                            <div className="col-xl-3"></div>
                                <div className="col-xl-5 col-md-8 col-12 text-start">
                                    <div className="p-3 text-start border-radius-lg">
                                        <h2>¿Por que tener tu pagina web?</h2>
                                        <p className="text-dark text-lg mt-3">
                                            <span className="font-weight-bold">The time</span>
                                            is now for it to be okay to be great. People in this world shun people for being great.
                                            For being a bright color. Contact us at <a href="javascript:;" className="text-info font-weight-normal">contact@soft.com</a>.</p>
                                    </div>
                                </div>
                            </div>
                                <div className={`bg-warning-soft bottom-0 ${style.container}`}>
                                    <div className="row">
                                        <div className="col-xl-3 position-relative">
                                            <img className={`position-relative  ${style.img}`} src={bg3} alt="image"/>
                                        </div>
                                        <div className="col-xl-9">
                                            <div className="row">
                                                <div className="col-xl-3 col-md-4 py-md-5 py-3">
                                                    <div className="p-3  border-radius-lg">

                                                        <h5 className="mt-3">Fast</h5>
                                                        <p>Creativity starts with an empty calendar and ends with a full one.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 py-md-5 py-3">
                                                    <div className="p-3 text-start bg-white border-radius-lg shadow-lg">
                                                        <h5 className="mt-3">Responsive</h5>
                                                        <p>We get insulted by others, lose trust for those We get back.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-md-4 py-md-5 py-3">
                                                    <div className="p-3 text-start border-radius-lg">
                                                        <h5 className="mt-3">Unified</h5>
                                                        <p>When playing, surround yourself with people happier than you.</p>
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