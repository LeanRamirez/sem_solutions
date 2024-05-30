import style from './../home/home.module.css';
import bg from './../../assets/bg1.png';

const Home =() => {
    
    return (
        <div className={style.container}>
            <img className={style.bgImage} src={bg} alt="" />
        </div>

    )
}

export default Home;


