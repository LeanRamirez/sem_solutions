import React from "react";
import style from "./footer.module.css"

const Footer = ()=>{
    return(
        <>
        {/* <!-- -------- START FOOTER 5 w/ DARK BACKGROUND ------- --> */}
            <div className="position-relative mt-8">
                <div className="container">
                    <div className={` z-index-3 ${style.card}` }>
                        <div className={style.cardBody}>
                            <div className="row">
                                <div className="col-md-8 mx-auto text-center">
                                    <h3 className="text-white">Be the first who see the news</h3>
                                    <p className="text-white opacity-8 mb-5 pe-5">
                                    Your company may not be in the software business,
                                    but eventually, a software company will be in your business.
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-5 ms-auto">
                                            <div className="input-group">
                                                <span className="input-group-text"><i class="fas fa-envelope"></i></span>
                                                <input type="text" className="form-control mb-sm-0 mb-2" placeholder="Email Here..." />
                                            </div>
                                        </div>
                                        <div className="col-sm-3 me-auto text-start">
                                            <button type="button" className="btn bg-white w-100 mb-0 h-100 position-relative z-index-2">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer pb-5 pt-10 bg-light mt-n8 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h6 className={style.footerItem}>Soft UI Design</h6>
                        </div>
                        <div className="col-lg-6 text-center">
                            <ul className="nav flex-row align-items-center mb-5 mt-sm-0 justify-content-center">
                                <li className="nav-item">
                                    <a clasNameclassNames={style.footerItem} href="/home" target="_blank">
                                    Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={style.footerItem} href="https://www.creative-tim.com/presentation" target="_blank">
                                    About
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className={style.footerItem} href="https://www.creative-tim.com/blog" target="_blank">
                                    Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link `} href="https://www.creative-tim.com" target="_blank">
                                    Services
                                    </a>
                                </li>
                            </ul>
                            <p className="mb-0">
                            Copyright © <script>
                                document.write(new Date().getFullYear())
                            </script> Soft by Creative Tim.
                            </p>
                        </div>
                        <div className="col-lg-3 text-end">
                            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                <span className="fab fa-dribbble text-lg"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                <span className="fab fa-twitter text-lg"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                <span className="fab fa-pinterest text-lg"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="text-secondary">
                                <span className="fab fa-github text-lg"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
{/* <!-- -------- END FOOTER 5 w/ DARK BACKGROUND ------- --> */}
        </>
    )
}

export default Footer;