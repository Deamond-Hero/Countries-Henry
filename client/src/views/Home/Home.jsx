import CardsContainer from "../../Components/CardsContainer/CardsContainer.jsx"
import {useEffect} from "react";
import {useDispatch} from "react-redux"
import { getAllCountries } from "../../redux/actions.js";
import style from "./Home.module.css"





const Countries = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])



    return(
        <div className={style.Home}>
      
         <CardsContainer />
        </div>
    )
}



export default Countries;