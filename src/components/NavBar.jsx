import { NavLink} from "react-router-dom";
import photo from '../assets/images-icon.png'
import like from '../assets/heart-icon.png'
import { useEffect, useState } from "react";

export const NavBar = (props) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => { 
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
        window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <div className="navbar">
        <h1 className="logo">Photi&Co.</h1>
        <ul className="menu">
            <NavLink to="/" className={({ isActive }) => 
            isActive ? "menuTextActive" : "menuTextInactive"}>
            <li key="collection" className="menuItem"><img src={photo} alt="Photos-Section" />{width > 1000 ? "Collection" : ""}</li></NavLink>

            <NavLink to="/my-photos" className={({ isActive }) =>
            isActive ? "menuTextActive" : "menuTextInactive"}>
            <li key="favorites" className="menuItem"><img src={like} alt="MyPhotos-Section" />{width > 1000 ? "My Photos" : ""}</li></NavLink>
        </ul>
        </div>
    );
};