import React from 'react';
import { useEffect, useState } from 'react';
import style from './../home/home.module.css';
import bg from './../../assets/bg1.png';

const Home =() => {
  const [count, setCount] = useState(0)
  const [intervalTime, setIntervalTime] = useState(10)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount( prevCount=>{
        if( prevCount < 800){
          return prevCount + 5;
        }
        else{
          clearInterval(interval);
          return prevCount;
        }
      });
    }, intervalTime);
    return()=> clearInterval(interval)
  },[intervalTime]);

  useEffect(()=>{
    if(count >= 700 && count < 800){
      setIntervalTime(100)
    }
  },[count]); 

    return (
        <div className={style.container}>
            <img className={style.bgImage} src={bg} alt="" />
            <div className={`fs-6 fw-bolder text-center text-light ${style.title}`}>
                <h1 className='fs-0'>Integrá tu negocio al mundo digital</h1>
                <h5 className='fw-light'>Contactanos y llegá a más personas en cualquier parte del mundo.</h5>
            </div>
            <div className={` ${style.floatData} card-body blur shadow translate-middle start-50 justify-content-center text-center mt-n5 mb-4 position-absolute bg-light`}>
            <div className="row justify-content-center text-center fs-5 p-4">
              <div className="col-lg-4 col-4 ">
                <h5 className="text-info mb-0 fs-1 p-3">+30</h5>
                <small className='fs-5'>Clientes satisfechos</small>
                <h6 className='fw-light fs-6 p-3'>Contamos con la experiencia necesaria para hacer realidad tus proyectos.</h6>
              </div>
              <div className="col-lg-4 col-4">
                <h5 className="text-info mb-0 fs-1 p-3">+{count}</h5>
                <small className='fs-5'>Horas trabajadas</small>
                <h6 className='fw-light fs-6 p-3'>Brindamos amplia dedicación para lograr el producto que estás necesitando.</h6>
              </div>
              <div className="col-lg-4 col-4">
                <h5 className="text-info mb-0 fs-1 p-3">24/7</h5>
                <small className='fs-5'>Nuestro soporte</small>
                <h6 className='fw-light fs-6 p-3'>Te brindamos la mejor asesoría postventa por cualquier inquietud.</h6>
              </div>
            </div>
          </div>
        </div>

    )
}

export default Home;


