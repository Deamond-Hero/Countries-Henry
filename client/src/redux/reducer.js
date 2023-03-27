import {GET_ALL_COUNTRIES,
        GET_ALL_ACTIVITIES,
        COUNTRY_BY_ID,
        }from './actions'


const initialState = {
    countries :[],
    detail:[],
    activities:[]

}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_COUNTRIES:
            return {...state, countries : action.payload};

        case COUNTRY_BY_ID:
            return {...state, detail : action.payload};

        case GET_ALL_ACTIVITIES:
            return {...state, activities : action.payload}

  
            

            default: 
        
            return{...state}
    }
}


export default rootReducer