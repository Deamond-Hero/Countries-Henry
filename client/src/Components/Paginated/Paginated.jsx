import { useSelector } from "react-redux";
import style from "./Paginated.module.css";

const Paginated = (props) => {
  const countries = useSelector((state) => state.countriesFilter);

  return (
    <div className={style.PaginatedContainer}>
      <div>
        <h1>{props.currentPage}</h1>
      </div>
      <div className={style.Pages}>
        <button onClick={props.prevHandler }className={style.prev}>Prev</button>
        {console.log(props.pageCountries)}
        {props.totalPages.map((e) => {
          return (
            <button
              onClick={props.actualPage}
              value={props.totalPages.indexOf(e)+1}
            >
              {props.totalPages.indexOf(e)+1}
            </button>
            
          );
        })}

        <button onClick={props.nextHandler }className={style.prev}>Next</button>
      </div>
    </div>
  );
};

export default Paginated;
