import axios from "axios";


export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const COUNTRY_BY_ID = "COUNTRY_BY_ID";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const POST_ACTIVITIE = "POST_ACTIVITIE";
export const SPLICE_PAGES = "SPLICE_PAGES"


export const getAllCoutries = () => {
    return async function(dispatch){
        const apiData = await axios.get('http://localhost:3001/countries');

        const countries = apiData.data;
        dispatch({type:GET_ALL_COUNTRIES, payload:countries})
    }
}

export const countryById = (id)=>{
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/countries/${id}`)
        const countrie = apiData.data;
        dispatch({type:COUNTRY_BY_ID, payload:countrie})
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


export const  splicePages = (firsIndex,idexPerPage) =>{
    return async function(dispatch){
        const countries = await axios.get('http://localhost:3001/countries')
        console.log(countries)
        const pages = countries.data.splice(firsIndex,idexPerPage)
        console.log(pages)

        dispatch({type:SPLICE_PAGES, payload:pages})
    }
}

