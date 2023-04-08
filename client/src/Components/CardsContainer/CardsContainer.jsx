import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import FilterBar from "../Filter/FilterBar";
import style from "./CardsContainer.module.css";
import SearchBar from "../SearchBar/Searchbar";
import { useEffect, useState } from "react";
import {
  getAllCountries,
  filterByContinent,
  filterByActivities,
  filterByName,
  sort,
} from "../../redux/actions";

let FIRST_INDEX_PER_PAGE = 0;
let SECOND_INDEX_PER_PAGE = 10;

const CardsContainer = (props) => {
  const dispatch = useDispatch();

  const sliceCountries = useSelector((state) => state.countriesFilter);
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  console.log(sliceCountries);
  const allCountries = useSelector((state) => state.countries);

  const [firstIndexPerPage, setFirstIndexPerPage] =
    useState(FIRST_INDEX_PER_PAGE);

  const [secondIndexPerPage, setSecondIndexPerPage] = useState(
    SECOND_INDEX_PER_PAGE
  );

  const totalElements = sliceCountries.length;

  const totalPages = [];

 for (let index = 1; index < Math.ceil(totalElements/ 10) ; index++) {
   totalPages.push(index)
  
 } 

  console.log(totalPages)

  const [currentPage, setCurrentPage] = useState(1);

  const pageCountries = sliceCountries.slice(
    firstIndexPerPage,
    secondIndexPerPage
  );

  console.log(pageCountries);

  const nextHandler = () => {


    const nextPage = currentPage + 1;

    const firstIndex = firstIndexPerPage + 10;

    const secondIndex = secondIndexPerPage + 10;

    console.log(firstIndex);
    console.log(secondIndex);

    if (pageCountries.length < 10) return;

    if (firstIndex === totalElements) return;

    // setFirstIndex(firstIndex:)
    setFirstIndexPerPage(firstIndex);
    setSecondIndexPerPage(secondIndex);
    setCurrentPage(parseInt(nextPage));
    console.log(currentPage)

  };

  const actualPage = (event) => {
    event.preventDefault();

    const selectfirstIndex = currentPage * 10 - 10;

    const selectsecondIndex = selectfirstIndex + 10;

    setFirstIndexPerPage(selectfirstIndex);

    setSecondIndexPerPage(selectsecondIndex);

    setCurrentPage(parseInt(event.target.value));
    console.log(event.target.value)

    console.log(currentPage)
  };
  console.log(currentPage)

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    const prevFirstIndex = firstIndexPerPage - 10;

    const prevSecondIndex = secondIndexPerPage - 10;

    if (currentPage === 1) return;

    // setFirstIndexPerPage(firstIndex)

    setFirstIndexPerPage(prevFirstIndex);
    setSecondIndexPerPage(prevSecondIndex);
    setCurrentPage(parseInt(currentPage) - 1);
    console.log(currentPage)
  };


  function nameHandler(event) {
    dispatch(filterByName(event.target.value));
    console.log(event.target.value);
  }

  function activitiesHandler(event) {
    dispatch(filterByActivities(event.target.value));
    console.log(event.target.value);
  }

  function continentHandler(event) {
    dispatch(filterByContinent(event.target.value));
    console.log(event.target.value);
  }

  function orderHandler(event) {
    dispatch(sort(event.target.value));
    setCurrentPage(1);

    console.log(event.target.value);
  }
  console.log(pageCountries);

  return (
    <div>

      <div>
        <FilterBar
          currentPage={currentPage}
          nameHandler={nameHandler}
          activitiesHandler={activitiesHandler}
          continentHandler={continentHandler}
          orderHandler={orderHandler}
        />
      </div>
      <div className={style.cards}>
        {pageCountries.map((e) => {
          return (
            <Card
              name={e.name}
              id={e.id}
              imageFlag={e.imageFlag}
              continent={e.continent}
              capital={e.capital}
              subRegion={e.subRegion}
              area={e.area}
              population={e.population}
              activities={e.Activities}
              key={e.id}
            />
          );
        })}
      </div>
      <div>
        <Paginated
        totalPages={totalPages}
          actualPage={actualPage}
          pageCountries={pageCountries}
          currentPage={currentPage}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
