import { NavLink} from "react-router-dom";
import photo from '../assets/images-icon.png'
import like from '../assets/heart-icon.png'
import { useEffect, useState } from "react";

export const NavBar = (props) => {

    const [width, setWidth] = useState(window.innerWidth); //Todo esto de mirar el ancho de la ventana viene de: en lugar de hacer un burguer menu
                                                           //me pareció guay quitar las letras del navbar al reducir los px de pantalla
                                                           //(dejar sólo los iconos)

    useEffect(() => { //La manera de capturar el ancho de pantalla es un copia/pega de una solución que vi por internet
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
            <NavLink to="/" className={({ isActive }) => //Esto también lo busqué por internet, para indicar en que sección te encuentras
            isActive ? "menuTextActive" : "menuTextInactive"}>
            <li key="collection" className="menuItem"><img src={photo} alt="Photos-Section" />{width > 1000 ? "Collection" : ""}</li></NavLink>

            <NavLink to="/my-photos" className={({ isActive }) =>
            isActive ? "menuTextActive" : "menuTextInactive"}>
            <li key="favorites" className="menuItem"><img src={like} alt="MyPhotos-Section" />{width > 1000 ? "My Photos" : ""}</li></NavLink>
        </ul>
        </div>
    );
};