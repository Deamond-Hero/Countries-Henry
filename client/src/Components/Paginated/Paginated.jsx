import style from "./Paginated.module.css"


const Paginated = (props) =>{

    return(
    <div>
        <h1>{props.currentPage}</h1>
        <button onClick={props.prevHandler}>Prev</button>
        <button onClick={props.nextHandler}>Next</button>

    </div>
    )

}




export default Paginated;