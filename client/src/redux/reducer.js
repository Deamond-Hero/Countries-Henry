import {
  GET_ALL_COUNTRIES,
  GET_ALL_ACTIVITIES,
  COUNTRY_BY_ID,
  FILTER_BY_ACTIVITIES,
  FILTER_BY_CONTINENT,
  FILTER_BY_NAME,
  SORT,
  COUNTRY_BY_NAME,
} from "./actions";

const initialState = {
  countries: [], //este estado posee todos los elementos, nos permite hacer consultas
  detail: [],
  activities: [],
  countriesFilter: [], //este estado posee los elementos filtrados
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFilter: action.payload,
      };

    case COUNTRY_BY_ID:
      return { ...state, detail: action.payload };

    case GET_ALL_ACTIVITIES:
      return { ...state, activities: action.payload };

    case COUNTRY_BY_NAME:
      return {
        ...state,
        countriesFilter: action.payload,
      };

    case FILTER_BY_CONTINENT:
        const filteBycontinent =
        action.payload === 'All'
          ? state.countries
          : state.countries.filter((c) => c.continent === action.payload)
      return {
        ...state,
        countriesFilter: filteBycontinent,
      }

      case FILTER_BY_ACTIVITIES:
        const filteredByAct =
        action.payload === 'All'
          ? state.countries
          : state.countriesFilter.filter(
              (c) =>
                c.Activities &&
                c.Activities.filter((a) => (action.payload).includes(a.name)).length
            )
      return {
        ...state,
        countriesFilter: filteredByAct
    }

    case SORT:
    let sorted;
        if(action.payload === "selectFilter") {
        sorted= state.countries
        }
    
     if(action.payload.length === 2) {
        sorted =
          action.payload === 'AZ'
            ? state.countries.sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                return 0
              })
            : state.countries.sort((a, b) => {
                if (a.name > b.name) return -1
                if (a.name < b.name) return 1
                return 0
              })
              console.log(state.countries)
              console.log(action.payload)
      } else {
        sorted =
          action.payload === 'populationAsc'
            ? state.countries.sort((a, b) => a.population - b.population)
            : state.countries.sort((a, b) => b.population - a.population)
            console.log(sorted)
        }
        return {
            ...state,
            countriesFilter: sorted,
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
