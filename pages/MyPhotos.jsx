import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Paginator } from "../components/Paginator";
import { Photo } from "../components/Photo";
import { SearchBar } from "../components/SearchBar";


export const MyPhotos = (props) => {

    

    const renderPhotos = () => {
        let content = [];
        const favPhotosArray = JSON.parse(localStorage.getItem("favoritePhotos"));
        if (favPhotosArray !== null) {
            favPhotosArray.data.forEach((photo) => { //EL array tiene un elemento [0] con todos los objetos de la llamada
                content.push(
                  <>
                    <Photo section="MyPhotos" content={photo}/>
                  </>
                );
              })
        }
        return content;
    };

    //useEffect(renderPhotos());

    return (
        <>
        <NavBar />
        <div className="sectionContainer">
            <SearchBar/>
            <div className="photosContainer">
                {renderPhotos()}
            </div>
        </div>
        <Paginator/>
        <Footer/>
        </>
    );
};