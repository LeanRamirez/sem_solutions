import React from "react";
import style from "./services.module.css"

const Services = ()=>{
    return(
        <section className="py-3">
            <div className={`position-relative m-3 border-radius-xl ${style.bg}`}>
                {/* <img src="../../assets/img/shapes/waves-white.svg" alt="pattern-lines" className="position-absolute start-0 top-md-0 w-100 opacity-6"/> */}
                <div className="container pb-lg-9 pb-7 pt-7 postion-relative z-index-2">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center">
                            {/* <span className="badge bg-gradient-dark mb-2">Pricing</span> */}
                            <h1 className="">¿Como hacemos tu pagina?</h1>
                            <h5 className="">No te preocupes, nosotros nos encargamos de todo</h5>
                            <h5 className="">Nuestro equipo de expertos te asesorara y te acompañara durante todo el proceso para lograr los mejores resultados</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-n8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-lg-auto mb-4 my-auto p-md-0 ms-auto">
                            <div className="card border-radius-top-end-lg-0 border-radius-bottom-end-lg-0">
                                <div className="card-header text-center pt-4 pb-3">
                                    {/* <h6 className="text-dark opacity-8 mb-0">Starter</h6> */}
                                    <h1 className="font-weight-bolder">1</h1>
                                </div>
                                <div className={`card-body mx-auto pt-0 ${style.cardBody}`}>

                                    <div className="justify-content-start d-flex px-2 py-1">
                                        <div>
                                            <i className="fas fa-check text-dark opacity-6 text-sm"></i>
                                        </div>
                                        <div className="ps-2">
                                            <span className="text-sm">Te contactaremos para programar una llamada o videllamada para planear juntos tu web. <br/>Elegiremos la plantilla de diseño que mejor se adapte a tu actividad y la diseñaremos a tu medida</span>
                                        </div>
                                    </div>

                                    {/* <div className="justify-content-start d-flex px-2 py-1">
                                        <div>
                                            <i className="fas fa-check text-dark opacity-6 text-sm"></i>
                                        </div>
                                        <div className="ps-2">
                                            <span className="text-md">Elegiremos la plantilla de diseño que mejor se adapte a tu actividad y la diseñaremos a tu medida</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 p-md-0 mb-lg-auto mb-4 z-index-2">
                            <div className="card">
                                <div className="card-header text-center pt-4 pb-3">
                                    {/* <h6 className="text-dark opacity-8 text mb-0 mt-2">Pro</h6> */}
                                    <h1 className="font-weight-bolder"> 2 </h1>
                                       
                                    
                                </div>
                                <div className={`card-body mx-auto pt-0 ${style.cardBody}`}>
                                    <div className="justify-content-start d-flex px-2 py-1">
                                        <div>
                                            <i className="fas fa-check text-dark opacity-6 text-sm"></i>
                                        </div>
                                        <div className="ps-2">
                                            <span className="text-sm">Con la información recibida, nuestros diseñadores crearan tu web. Ademas compraremos el dominio y las cuentas de correo solicitadas </span>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* <div className="card-footer pt-0">
                                    <a href="javascript:;" className="btn btn-icon bg-gradient-primary d-block mb-0 icon-move-right">Try Pro
                                        <i className="fas fa-arrow-right ms-2" aria-hidden="true"></i>
                                    </a>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-3 mb-lg-auto mb-4 my-auto p-md-0 me-auto">
                            <div className="card border-radius-top-start-lg-0 border-radius-bottom-start-lg-0">
                                <div className="card-header text-center pt-4 pb-2">
                                    {/* <h6 className="text-dark opacity-8 text mb-0">Premium</h6> */}
                                    <h1 className="font-weight-bolder">3</h1>
                                </div>
                                    
                                <div className="card-body mx-auto pt-0">
                                    <div className="justify-content-start d-flex px-2 py-1 py-1">
                                        <div>
                                            <i className="fas fa-check text-dark opacity-6 text-sm"></i>
                                        </div>
                                        <div className="ps-2">
                                            <span className="text-sm">Recibiras un mail con el acceso a tu web para que puedas verificar tu información</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* <div class="card-footer pt-0">
                                    <a href="javascript:;" className="btn w-100 bg-gradient-dark mb-0">Buy now</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;