import { Link } from "react-router-dom";
import style from "./NavBar.module.css"


const NavBar= () =>{
    return(
        <div className={style.navContainer}>
         <Link to="/">Landing</Link>
         <Link to="/countries">Countries</Link>
         <Link to="/Create">Create</Link>
        </div>
    )
}



export default NavBar;