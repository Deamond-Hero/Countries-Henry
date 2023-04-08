import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.cardConteiner}>
      <div className={style.info}>
        <Link to={`/country/${props.id}`}>
          <h1>{props.name}</h1>
          <div className={style.conteinerImg}>
            <img src={props.imageFlag} alt="no disponible" />
          </div>
          <p>Continent: {props.continent}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
