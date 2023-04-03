import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import FilterBar from "../Filter/FilterBar";
import style from "./CardsContainer.module.css";
import { useEffect, useRef, useState } from "react";
import { getAllCoutries, splicePages } from "../../redux/actions";



const CardsContainer = (props) => {
  
  const dispatch = useDispatch()

  let FIRST_INDEX_PER_PAGE = 0
  let ITEMS_PER_PAGE = 10;
  
  const allCountries = useSelector(state => state.countries)

  const pages = useSelector(state => state.pages)
   
  const [currentPage, setCurrentPage] = useState(0);
  

  const [firstIndexPerPage, setFirstIndexPerPage] = useState (FIRST_INDEX_PER_PAGE)
  
  const [itemsPerPage, setItemsPerPage] = useState (ITEMS_PER_PAGE)

  

  useEffect(()=>{
    dispatch(splicePages(firstIndexPerPage,itemsPerPage))
  },[ITEMS_PER_PAGE,FIRST_INDEX_PER_PAGE,pages,dispatch]
)


  function nextHandler() {
    const totalElements = allCountries.length;

    const nextPage = currentPage + 1;

    const firstIndex = nextPage * itemsPerPage;


    if(firstIndex === totalElements) return;

    // setFirstIndex(firstIndex:)
    setFirstIndexPerPage(firstIndex)
    setCurrentPage(nextPage)
  }


  function prevHandler() {
    

    const prevPage = currentPage - 1;
    
    const firstIndex = prevPage * itemsPerPage;
    
    if(prevPage < 0) return

    setFirstIndexPerPage(firstIndex)
    setCurrentPage(prevPage)

  }

  return (
    <div>
      <div>
        <FilterBar/>
      </div>
      <div className={style.cards}>
        {pages.map((e) => {
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
              key={e.id}
            />
          );
        })}
      </div>
      <div>
        <Paginated
          currentPage={currentPage}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          // currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
