import axios from "axios";



export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const COUNTRY_BY_ID = "COUNTRY_BY_ID";
export const COUNTRY_BY_NAME = "COUNTRY_BY_NAME";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const POST_ACTIVITIE = "POST_ACTIVITIE";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES"
export const FILTER_BY_ALPH = "FILTER_BY_ALPH"
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION"
export const SORT = "SORT"

// export const SPLICE_PAGES = "SPLICE_PAGES"


export const getAllCountries = () => {
    return async function(dispatch){
        const apiData = await axios.get('http://localhost:3001/countries');
        const countries = apiData.data;
        console.log(countries)
        dispatch({type:GET_ALL_COUNTRIES, payload:countries})
    }
}


// export const getAllCountries = () => {

//     return function(dispatch){
//         fetch.get('http://localhost:3001/countries')
//         .then(res => res.json())
//         .then(result => {return dispatch({type:GET_ALL_COUNTRIES, payload:result})})
        
//     }
// }

export const countryById = (id)=>{
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/countries/${id}`)
        const countrie = apiData.data;
        dispatch({type:COUNTRY_BY_ID, payload:countrie})
    }
}


export const countryByName = (name)=>{
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/countries?name=${name}`)
        const nameCountry = apiData.data;
        dispatch({type:COUNTRY_BY_NAME, payload:nameCountry})
    }
}


export const getAllActivities = () =>{
    return async function (dispatch){
        const apiData = await axios.get('http://localhost:3001/activities')
        const activities = apiData.data;
        dispatch({type:GET_ALL_ACTIVITIES, payload:activities})
    }
}


export const createActivities = (form) =>{
    return async function (dispatch){
        const newActivity = await axios.post('http://localhost:3001/activities',form)
        
        console.log(newActivity)
        return newActivity
    }
}


export const filterByName = (payload) =>{
    return{type:FILTER_BY_NAME, payload}    
}

export const filterByPopulation = (payload) =>{
    return {type:FILTER_BY_POPULATION, payload}
    }


export const filterByActivities = (payload) =>{
    return {type:FILTER_BY_ACTIVITIES, payload:payload}
    }


export const filterByContinent = (payload) =>{
    return {type:FILTER_BY_CONTINENT, payload:payload}
    
}


export const sort = (payload) =>{
    return{type:SORT, payload:payload }
        
}
