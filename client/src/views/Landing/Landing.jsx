import style from './Landing.module.css'

const Landing = () =>{
    

    return(
        <div className={style.landing}>
         <a href="/countries"><button className={style.button}>Welcome</button></a>
        </div>
    )
}



export default Landing;