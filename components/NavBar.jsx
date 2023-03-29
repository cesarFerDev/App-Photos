import { display } from "@mui/system";
import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";

export const NavBar = (props) => {

    let user = useSelector((state) => state.user);

    return (
        <div className="navbar">
        <h1 className="logo">Photi&Co.</h1>
        <ul className="menu">
            <NavLink className="menuText" to="/"><li className="menuItem">Collection</li></NavLink>
            <NavLink className="menuText" to="/my-photos"><li className="menuItem">My Photos</li></NavLink>
        </ul>
        </div>
    );
};