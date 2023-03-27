import CardsContainer from "../../Components/CardsContainer/CardsContainer.jsx"
import {useEffect} from "react";
import {useDispatch} from "react-redux"
import { getAllCoutries } from "../../redux/actions.js";





const Countries = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCoutries())
    },[dispatch])


    return(
        <div>
         <h1>Home</h1>
         <CardsContainer></CardsContainer>
        </div>
    )
}



export default Countries;