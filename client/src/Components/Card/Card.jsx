import { Link } from "react-router-dom"
import style from "./Card.module.css"

const Card = (props) =>{
        return(
            <div className={style.card}>
            <Link to={`/country/${props.id}`} >
                <h1>Name:{props.name}</h1>
                <img src={props.imageFlag} alt="no disponible"/>
                <p>Continent:{props.continent}</p>
            </Link>
            </div>
        ) 
}


export default Card;