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

  
  //////Funciones de paginado///
  
  const [firstIndexPerPage, setFirstIndexPerPage] =
    useState(FIRST_INDEX_PER_PAGE);

  const [secondIndexPerPage, setSecondIndexPerPage] = useState(
    SECOND_INDEX_PER_PAGE
  );
  
 
  const totalElements = sliceCountries.length;

  const totalPages = [];

 for (let index = 1; index <= Math.ceil(totalElements/ 10)  ; index++) {
   totalPages.push(index)
  
 } 




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


    setCurrentPage(parseInt(event.target.value));

    console.log(event.target.value)
    
    let selectfirstIndex = parseInt(event.target.value) * 10 - 10;

    let selectsecondIndex = selectfirstIndex + 10;
    console.log(currentPage)
    console.log(selectfirstIndex)
    console.log(selectsecondIndex)

    setFirstIndexPerPage(selectfirstIndex);

    setSecondIndexPerPage(selectsecondIndex);


    console.log(currentPage)
  };
  console.log(firstIndexPerPage)
  console.log(secondIndexPerPage)
  console.log(currentPage)

  useEffect(() => {
    setFirstIndexPerPage(firstIndexPerPage)
    setSecondIndexPerPage(secondIndexPerPage)
  }, [currentPage]);



  
  

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
    setCurrentPage(1);
    setFirstIndexPerPage(FIRST_INDEX_PER_PAGE);
    setSecondIndexPerPage(SECOND_INDEX_PER_PAGE);
    console.log(event.target.value);
  }

  function activitiesHandler(event) {
    dispatch(filterByActivities(event.target.value));
    setCurrentPage(1);
    setFirstIndexPerPage(FIRST_INDEX_PER_PAGE);
    setSecondIndexPerPage(SECOND_INDEX_PER_PAGE);
    console.log(event.target.value);
  }

  function continentHandler(event) {
    dispatch(filterByContinent(event.target.value));
    setCurrentPage(1);
    setFirstIndexPerPage(FIRST_INDEX_PER_PAGE);
    setSecondIndexPerPage(SECOND_INDEX_PER_PAGE);
    console.log(event.target.value);
  }

  const [stateSort, setStateSort] = useState('')
  

  function orderHandler(event){
    setStateSort(event.target.value)
    setCurrentPage(1);
    setFirstIndexPerPage(FIRST_INDEX_PER_PAGE);
    setSecondIndexPerPage(SECOND_INDEX_PER_PAGE);

  }
  console.log(stateSort)

    useEffect(()=>{
     dispatch(sort(stateSort))
  },[stateSort,dispatch])




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
