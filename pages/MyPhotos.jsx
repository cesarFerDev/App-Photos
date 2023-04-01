import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Paginator } from "../components/Paginator";
import { Photo } from "../components/Photo";
import { SearchBar } from "../components/SearchBar";
import { readLocalStorage } from "../auxfunctions/localStorage";

export const MyPhotos = (props) => {

    const data = readLocalStorage();
    const content = [];

    useEffect(() => {
        
        data.forEach((photo) => {
            content.push(
                <>
                <Photo photo={photo} />
                </>
            );
            });
    });

    


    return (
        <>
        <NavBar />
        <div className="sectionContainer">
            <SearchBar />
            <div className="photosContainer">
                {content}
            </div>
        </div>
        <Paginator />
        <Footer />
        </>
    );
};