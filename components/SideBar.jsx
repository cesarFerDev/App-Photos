import { display } from "@mui/system";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideBar = (props) => {

    let user = useSelector((state) => state.user);

    return (
        <div className="sidebar">
        <h1 className="logo">App Photos</h1>
        <ul className="menu">
            <Link className="menuText" to="/"><li className="menuItem">Collection</li></Link>
            <Link style={user.logged ? {display:"block"} : {display:"none"}} className="menuText" to="/my-photos"><li className="menuItem">My Photos</li></Link>
            <Link className="menuText" to="/profile"><li className="menuItem">{user.logged ? "Profile" : "Log In"}</li></Link>
            <Link className="menuText" to="/contact"><li className="menuItem">Contact</li></Link>
        </ul>
        </div>
    );
};