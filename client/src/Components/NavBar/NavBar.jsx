import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.NavContainer}>
      <div className={style.routes}>
        <Link to="/">Landing</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/Create">Create Activity</Link>
      </div>
    </div>
  );
};

export default NavBar;
