import style from './../home/home.module.css';
import bg from './../../assets/bg1.png';

const Home =() => {
    
    return (
        <div className={style.container}>
            <img className={style.bgImage} src={bg} alt="" />
            <div className={`fs-6 fw-bolder text-center text-light ${style.title}`}>
                <h1 className=''>Insertá tu negocio en el mundo digital</h1>
                <h5 className='fw-light'>Contactanos y llegá a más personas en cualquier parte del mundo</h5>
            </div>
            <div className={` ${style.floatData} card-body blur shadow translate-middle start-50 justify-content-center text-center mt-n5 mb-4 position-absolute bg-light`}>
            <h4 className="mb-0 pt-4">Nuestros números</h4>
            <p className='pb-3'>Sem Solutions</p>
            <div className="row justify-content-center text-center fs-5">
              <div className="col-lg-4 col-4 ">
                <h5 className="text-info mb-0 fs-1">+30</h5>
                <small>Clientes satisfechos</small>
              </div>
              <div className="col-lg-4 col-4">
                <h5 className="text-info mb-0 fs-1">+800</h5>
                <small>Horas trabajadas</small>
              </div>
              <div className="col-lg-4 col-4">
                <h5 className="text-info mb-0 fs-1">24/7</h5>
                <small>Nuestro soporte</small>
              </div>
            </div>
          </div>
        </div>

    )
}

export default Home;


