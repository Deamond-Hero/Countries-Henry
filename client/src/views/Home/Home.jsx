import CardsContainer from "../../Components/CardsContainer/CardsContainer.jsx"
import {useEffect} from "react";
import {useDispatch} from "react-redux"
import { getAllCoutries } from "../../redux/actions.js";
import style from "./Home.module.css"





const Countries = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCoutries())
    },[dispatch])



    return(
        <div className={style.home}>
      
         <CardsContainer />
        </div>
    )
}



export default Countries;