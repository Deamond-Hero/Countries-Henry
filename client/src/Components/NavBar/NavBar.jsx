import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.NavContainer}>
      <div className={style.info}>
        <Link to="/">Landing</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/Create">Create</Link>
      </div>
    </div>
  );
};

export default NavBar;
