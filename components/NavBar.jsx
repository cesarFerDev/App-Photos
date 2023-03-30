import { NavLink} from "react-router-dom";
import photo from '../assets/images-icon.png'
import like from '../assets/heart-icon.png'

export const NavBar = (props) => {

    return (
        <div className="navbar">
        <h1 className="logo">Photi&Co.</h1>
        <ul className="menu">
            <NavLink className="menuText" to="/"><li key="collection" className="menuItem"><img src={photo} alt="Photos-Section" />Collection</li></NavLink>
            <NavLink className="menuText" to="/my-photos"><li key="favorites" className="menuItem"><img src={like} alt="MyPhotos-Section" />My Photos</li></NavLink>
        </ul>
        </div>
    );
};