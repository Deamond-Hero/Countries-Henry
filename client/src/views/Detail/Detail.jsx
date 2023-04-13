import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { countryById } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const props = useSelector((state) => state.detail);

  const dispatch = useDispatch();

  const param = useParams();
  console.log(param);

  useEffect(() => {
    dispatch(countryById(param.id));
  }, [param.id, dispatch]);

  console.log(props);

  return (
    <div className={style.background}>
      <div className={style.detailContainer}>
        <div>
          <h1>Name: {props.name}</h1>
          <h2>ID: {props.id}</h2>
          <img src={props.imageFlag} alt="No found" />
          <p>Continent: {props.continent}</p>
          <p>Capital: {props.capital}</p>
          {props.Subregion && <p>Subregion: {props.Subregion}</p>}
          <p>Area: {props.area}</p>
          <p>Population: {props.population}</p>

        </div>
          <div>
            <Link to="/countries">
              <button type="button" >Go to Countries</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Detail;
