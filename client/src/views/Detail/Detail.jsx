import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { countryById } from "../../redux/actions";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>Name:{props.name}</h1>
      <h2>ID:{props.id}</h2>
      <img src={props.imageFlag} alt="No found" />
      <p>Continent: {props.continent}</p>
      <p>Capital: {props.capital}</p>
      <p>Subregion: {props.Subregion}</p>
      <p>Area: {props.area}</p>
      <p>Population: {props.population}</p>
      <input value='Back' type='button' onClick="history.back()"/>
    </div>

  );
};

export default Detail;
