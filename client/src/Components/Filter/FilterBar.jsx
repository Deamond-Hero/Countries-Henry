import { useDispatch, useSelector } from "react-redux";
import style from "./FilterBar.module.css";
import { useEffect, useRef, useState } from "react";
import {
  getAllCountries,
  getAllActivities,
  filterByContinent,
  filterByActivities,
  filterByName,
  sort,
} from "../../redux/actions";
import SearchBar from "../SearchBar/Searchbar";

const FilterBar = (props) => {
  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

 const orderRef = useRef(null);
 const continentRef = useRef(null);
 const activityRef = useRef(null);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);


  
    function reload(event) {
      event.preventDefault();
      orderRef.current.value = "selectFilter"
      continentRef.current.value = "All";
      activityRef.current.value = "All";
      dispatch(getAllCountries());
  }

  
  return (
    <div>
      <div className={style.FilterBarContainer}>


      <div className={style.SearchBar}>
        <SearchBar  />
        </div>
        <div>
          <label>Order:  </label>
          <select onChange={props.orderHandler} name="order" ref={orderRef}>
            <option value="selectFilter">Select Filter</option>
            <option value="AZ">Name A-Z</option>
            <option value="ZA">Name Z-A</option>
            <option value="populationAsc">Population Asc</option>
            <option value="populationDesc">Population Desc</option>
          </select>
        </div>
        <div>
          <label>Filter by Continent:  </label>
          <select onChange={props.continentHandler} name='continents' ref={continentRef}>
            <option value="All">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="South America">South America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>


        <div>
          <label>Filter by Activity:  </label>
          <select onChange={props.activitiesHandler} name="activities" ref={activityRef}>
            <option value="All">All</option>
            {allActivities.map((a) => {
              return (
                <option key={a.id} value={a.name}>
                  {a.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <button onClick={reload}>Reload</button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
