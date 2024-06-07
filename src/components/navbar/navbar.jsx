import React from "react";
// import style from "./navbar.module.css";
// import bg from "../../assets/bg1.png";



const NavBar =()=>{

  return(
  <div>
        <div className="container position-sticky z-index-sticky top-0 bg-gradient-primary min-vh-100 mt-3">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg blur blur-rounded position-absolute bg-light my-3 top-0 rounded-pill border-bottom py-3 z-index-3 shadow my-3 py-2 start-0 end-0 mx-4">
                        <div className="container">
                            <a className="navbar-brand px-3" href="" rel="tooltip" title="" data-placement="bottom" target="_blank">Sem Solutions</a>
                            <a href="javascript:;" className="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block">Buy Now</a>
                            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon mt-2">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
                                <ul className="navbar-nav navbar-nav-hover mx-auto">
                                    <li className="nav-item mx-2">
                                        <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                                        Beneficios
                                        {/* <img src="../../assets/img/down-arrow-dark.png" alt="down-arrow" className="arrow ms-1"/> */}
                                        </a>
                                    </li>

                                    <li className="nav-item mx-2">
                                        <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                                        Clientes
                                        {/* <img src="../../assets/img/down-arrow-dark.png" alt="down-arrow" className="arrow ms-1"/> */}
                                        </a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                                        Servicios
                                        {/* <img src="../../assets/img/down-arrow-dark.png" alt="down-arrow" className="arrow ms-1"/> */}
                                        </a>
                                    </li>

                                    <li className="nav-item mx-2">
                                        <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                                        Contactanos
                                        {/* <img src="../../assets/img/down-arrow-dark.png" alt="down-arrow" className="arrow ms-1"></img> */}
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav d-lg-block d-none">
                                    <li className="nav-item">
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn bg-white w-auto me-2 shadow rounded-pill">Ingresar</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}




export default NavBar;


